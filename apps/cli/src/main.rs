use std::{
    io,
    time::{Duration, Instant},
};

use auth::{Auth, AuthEvent, AuthSession};
use crossterm::event::{self, Event, KeyCode, KeyEvent, KeyEventKind, KeyModifiers};
use ratatui::{
    DefaultTerminal, Frame,
    buffer::Buffer,
    layout::{Constraint, Flex, Layout, Rect},
    style::Stylize,
    symbols::border,
    text::{Line, Text},
    widgets::{Block, Paragraph, Widget, Wrap},
};
use tokio::sync::mpsc::{UnboundedReceiver, UnboundedSender};

mod auth;

const TICK: Duration = Duration::from_millis(100);
const SPINNER: [&str; 10] = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

#[derive(Debug, Default)]
enum AuthState {
    #[default]
    LoggedOut,
    RequestingCode,
    WaitingForAuthorization {
        user_code: String,
        verification_uri: String,
        verification_uri_complete: String,
        deadline: Instant,
    },
    LoggedIn(AuthSession),
    LoggingOut,
    LogoutFailed {
        session: AuthSession,
        error: String,
    },
    Expired,
    Denied,
    Failed(String),
}

pub struct App {
    auth_state: AuthState,
    auth_sender: UnboundedSender<AuthEvent>,
    auth_receiver: UnboundedReceiver<AuthEvent>,
    tick: usize,
    exit: bool,
}

impl Default for App {
    fn default() -> Self {
        let (auth_sender, auth_receiver) = tokio::sync::mpsc::unbounded_channel();

        Self {
            auth_state: AuthState::LoggedOut,
            auth_sender,
            auth_receiver,
            tick: 0,
            exit: false,
        }
    }
}

impl App {
    pub fn run(&mut self, terminal: &mut DefaultTerminal) -> io::Result<()> {
        while !self.exit {
            terminal.draw(|frame| self.draw(frame))?;
            self.handle_terminal_events()?;
            self.handle_auth_events();
            self.tick = self.tick.wrapping_add(1);
        }

        Ok(())
    }

    fn handle_terminal_events(&mut self) -> io::Result<()> {
        if !event::poll(TICK)? {
            return Ok(());
        }

        if let Event::Key(key_event) = event::read()?
            && key_event.kind == KeyEventKind::Press
        {
            self.handle_key_event(key_event);
        }

        Ok(())
    }

    fn handle_auth_events(&mut self) {
        while let Ok(event) = self.auth_receiver.try_recv() {
            self.auth_state = match event {
                AuthEvent::CodeReceived {
                    user_code,
                    verification_uri,
                    verification_uri_complete,
                    expires_in,
                } => {
                    let _ = webbrowser::open(&verification_uri_complete);

                    AuthState::WaitingForAuthorization {
                        user_code,
                        verification_uri,
                        verification_uri_complete,
                        deadline: Instant::now() + Duration::from_secs(expires_in),
                    }
                }
                AuthEvent::Authenticated(session) => AuthState::LoggedIn(session),
                AuthEvent::LoggedOut => AuthState::LoggedOut,
                AuthEvent::LogoutFailed(session, error) => {
                    AuthState::LogoutFailed { session, error }
                }
                AuthEvent::Expired => AuthState::Expired,
                AuthEvent::Denied => AuthState::Denied,
                AuthEvent::Failed(error) => AuthState::Failed(error),
            };
        }
    }

    fn handle_key_event(&mut self, event: KeyEvent) {
        if event.modifiers.contains(KeyModifiers::CONTROL) && event.code == KeyCode::Char('c') {
            self.exit();
            return;
        }

        match event.code {
            KeyCode::Char('q') | KeyCode::Esc => self.exit(),
            KeyCode::Char('l') => match &self.auth_state {
                AuthState::LoggedIn(session) => self.logout(session.clone()),
                AuthState::LogoutFailed { session, .. } => self.logout(session.clone()),
                _ => self.login(),
            },
            KeyCode::Char('o') => {
                if let AuthState::WaitingForAuthorization {
                    verification_uri_complete,
                    ..
                } = &self.auth_state
                {
                    let _ = webbrowser::open(verification_uri_complete);
                }
            }
            _ => {}
        }
    }

    fn draw(&self, frame: &mut Frame) {
        let [area] = Layout::horizontal([Constraint::Max(72)])
            .flex(Flex::Center)
            .areas(frame.area());
        let [area] = Layout::vertical([Constraint::Max(11)])
            .flex(Flex::Center)
            .areas(area);

        frame.render_widget(self, area);
    }

    fn exit(&mut self) {
        self.exit = true;
    }

    fn login(&mut self) {
        if !matches!(
            self.auth_state,
            AuthState::LoggedOut | AuthState::Expired | AuthState::Denied | AuthState::Failed(_)
        ) {
            return;
        }

        self.auth_state = AuthState::RequestingCode;
        let sender = self.auth_sender.clone();

        tokio::spawn(async move {
            Auth::new().login(sender).await;
        });
    }

    fn logout(&mut self, session: AuthSession) {
        self.auth_state = AuthState::LoggingOut;
        let sender = self.auth_sender.clone();

        tokio::spawn(async move {
            Auth::new().logout(session, sender).await;
        });
    }

    fn spinner(&self) -> &'static str {
        SPINNER[(self.tick / 2) % SPINNER.len()]
    }

    /// Key hints for whatever is actionable in the current state.
    fn instructions(&self) -> Line<'static> {
        let mut hints = match self.auth_state {
            AuthState::LoggedIn(_) | AuthState::LogoutFailed { .. } => {
                vec![" Logout ".into(), "<L>".blue().bold()]
            }
            AuthState::RequestingCode | AuthState::LoggingOut => vec![" Working… ".dim()],
            AuthState::WaitingForAuthorization { .. } => {
                vec![" Reopen browser ".into(), "<O>".blue().bold()]
            }
            _ => vec![" Login ".into(), "<L>".blue().bold()],
        };

        hints.push(" Quit ".into());
        hints.push("<Q> ".blue().bold());

        Line::from(hints)
    }
}

/// "4m 58s" until the deadline, "0m 00s" once elapsed.
fn remaining(deadline: Instant) -> String {
    let seconds = deadline.saturating_duration_since(Instant::now()).as_secs();
    format!("{}m {:02}s", seconds / 60, seconds % 60)
}

/// "58m" / "23h" from an RFC-3339 timestamp, falling back to the raw string.
fn expires_in(expires_at: &str) -> String {
    let Ok(parsed) = chrono::DateTime::parse_from_rfc3339(expires_at) else {
        return expires_at.to_string();
    };

    let minutes = (parsed.to_utc() - chrono::Utc::now()).num_minutes();

    match minutes {
        ..=0 => "expired".into(),
        1..60 => format!("in {minutes}m"),
        _ => format!("in {}h {}m", minutes / 60, minutes % 60),
    }
}

impl Widget for &App {
    fn render(self, area: Rect, buf: &mut Buffer)
    where
        Self: Sized,
    {
        let block = Block::bordered()
            .title(Line::from(" Enterprise Auth ".bold()).centered())
            .title_bottom(self.instructions().centered())
            .border_set(border::THICK);

        let auth_text = match &self.auth_state {
            AuthState::LoggedOut => Text::from("Press L to log in".dim()),
            AuthState::RequestingCode => {
                Text::from(format!("{} Requesting login code…", self.spinner()).dim())
            }
            AuthState::WaitingForAuthorization {
                user_code,
                verification_uri,
                deadline,
                ..
            } => Text::from(vec![
                Line::from(vec![
                    "Code ".dim(),
                    user_code.clone().bold().yellow(),
                    format!("  (expires {})", remaining(*deadline)).dim(),
                ]),
                Line::from(verification_uri.clone().underlined()),
                Line::from(""),
                Line::from(format!("{} Waiting for authorization…", self.spinner()).dim()),
            ]),
            AuthState::LoggedIn(auth) => Text::from(vec![
                Line::from("✓ Signed in".green().bold()),
                Line::from(""),
                Line::from(format!("{} <{}>", auth.user.name, auth.user.email)),
                Line::from(
                    format!("Session expires {}", expires_in(&auth.session.expires_at)).dim(),
                ),
            ]),
            AuthState::LoggingOut => Text::from(format!("{} Logging out…", self.spinner()).dim()),
            AuthState::LogoutFailed { error, .. } => Text::from(vec![
                Line::from(format!("Logout failed: {error}").red()),
                Line::from("Press L to try again.".dim()),
            ]),
            AuthState::Expired => Text::from(vec![
                Line::from("Login code expired.".red()),
                Line::from("Press L to try again.".dim()),
            ]),
            AuthState::Denied => Text::from(vec![
                Line::from("Login was denied.".red()),
                Line::from("Press L to try again.".dim()),
            ]),
            AuthState::Failed(error) => Text::from(vec![
                Line::from(format!("Login failed: {error}").red()),
                Line::from("Press L to try again.".dim()),
            ]),
        };

        Paragraph::new(auth_text)
            .centered()
            .wrap(Wrap { trim: true })
            .block(block)
            .render(area, buf);
    }
}

#[tokio::main]
async fn main() -> io::Result<()> {
    dotenv::dotenv().ok();
    ratatui::run(|terminal| App::default().run(terminal))
}
