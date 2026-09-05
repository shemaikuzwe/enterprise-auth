use std::{io, time::Duration, vec};

use auth::{Auth, AuthEvent, AuthSession};
use crossterm::event::{self, Event, KeyCode, KeyEvent, KeyEventKind};
use ratatui::{
    DefaultTerminal, Frame,
    buffer::Buffer,
    layout::Rect,
    style::Stylize,
    symbols::border,
    text::{Line, Text},
    widgets::{Block, Paragraph, Widget},
};
use tokio::sync::mpsc::{UnboundedReceiver, UnboundedSender};

mod auth;

#[derive(Debug, Default)]
enum AuthState {
    #[default]
    LoggedOut,
    RequestingCode,
    WaitingForAuthorization {
        user_code: String,
        verification_uri: String,
        verification_uri_complete: String,
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
    exit: bool,
}

impl Default for App {
    fn default() -> Self {
        let (auth_sender, auth_receiver) = tokio::sync::mpsc::unbounded_channel();

        Self {
            auth_state: AuthState::LoggedOut,
            auth_sender,
            auth_receiver,
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
        }

        Ok(())
    }

    fn handle_terminal_events(&mut self) -> io::Result<()> {
        if !event::poll(Duration::from_millis(100))? {
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
                } => {
                    let _ = webbrowser::open(&verification_uri_complete);

                    AuthState::WaitingForAuthorization {
                        user_code,
                        verification_uri,
                        verification_uri_complete,
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
        match event.code {
            KeyCode::Char('q') => self.exit(),
            KeyCode::Char('l') => match &self.auth_state {
                AuthState::LoggedIn(session) => self.logout(session.clone()),
                AuthState::LogoutFailed { session, .. } => self.logout(session.clone()),
                _ => self.login(),
            },
            _ => {}
        }
    }

    fn draw(&self, frame: &mut Frame) {
        let area = Rect::new(2, 2, 70, 10);
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
}

impl Widget for &App {
    fn render(self, area: Rect, buf: &mut Buffer)
    where
        Self: Sized,
    {
        let title = Line::from(" Enterprise Auth ".bold());
        let auth_action = if matches!(
            self.auth_state,
            AuthState::LoggedIn(_) | AuthState::LogoutFailed { .. }
        ) {
            " Logout "
        } else {
            " Login "
        };
        let instructions = Line::from(vec![
            auth_action.into(),
            "<L>".blue().bold(),
            " Quit ".into(),
            "<Q> ".blue().bold(),
        ]);
        let block = Block::bordered()
            .title(title.centered())
            .title_bottom(instructions.centered())
            .border_set(border::THICK);

        let auth_text = match &self.auth_state {
            AuthState::LoggedOut => Text::from("Press L to log in"),
            AuthState::RequestingCode => Text::from("Requesting login code..."),
            AuthState::WaitingForAuthorization {
                user_code,
                verification_uri,
                verification_uri_complete,
            } => Text::from(vec![
                Line::from(format!("Code: {user_code}")),
                Line::from(format!("Direct link: {verification_uri_complete}")),
                Line::from("Waiting for authorization..."),
            ]),
            AuthState::LoggedIn(auth) => Text::from(vec![
                Line::from(format!("{} <{}>", auth.user.name, auth.user.email)),
                Line::from(format!("Expires: {}", auth.session.expires_at)),
                Line::from(format!(
                    "IP: {}",
                    auth.session.ip_address.as_deref().unwrap_or("Unknown")
                )),
            ]),
            AuthState::LoggingOut => Text::from("Logging out..."),
            AuthState::LogoutFailed { error, .. } => {
                Text::from(format!("Logout failed: {error}. Press L to try again."))
            }
            AuthState::Expired => Text::from("Login code expired. Press L to try again."),
            AuthState::Denied => Text::from("Login was denied. Press L to try again."),
            AuthState::Failed(error) => {
                Text::from(format!("Login failed: {error}. Press L to try again."))
            }
        };

        Paragraph::new(auth_text)
            .centered()
            .block(block)
            .render(area, buf);
    }
}

#[tokio::main]
async fn main() -> io::Result<()> {
    dotenv::dotenv().ok();
    ratatui::run(|terminal| App::default().run(terminal))
}
