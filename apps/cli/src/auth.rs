use std::time::Duration;

use serde::{Deserialize, Serialize};
use tokio::{sync::mpsc::UnboundedSender, time::Instant};

const DEVICE_GRANT_TYPE: &str = "urn:ietf:params:oauth:grant-type:device_code";

pub struct Auth {
    client: reqwest::Client,
    base_url: String,
    client_id: String,
}

#[derive(Debug, Deserialize)]
struct DeviceCodeResponse {
    device_code: String,
    user_code: String,
    verification_uri: String,
    verification_uri_complete: String,
    expires_in: u64,
    interval: u64,
}

#[derive(Debug, Deserialize)]
struct TokenResponse {
    access_token: String,
    refresh_token: Option<String>,
    expires_in: Option<u64>,
    token_type: Option<String>,
    scope: Option<String>,
}

#[derive(Clone, Debug, Deserialize)]
pub struct AuthSession {
    pub access_token: String,
    pub session: Session,
    pub user: User,
}

#[derive(Clone, Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Session {
    pub id: String,
    pub expires_at: String,
    pub ip_address: Option<String>,
    pub user_agent: Option<String>,
}

#[derive(Clone, Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct User {
    #[serde(default)]
    pub name: String,
    #[serde(default)]
    pub email: String,
    #[serde(default)]
    pub email_verified: bool,
}

#[derive(Debug, Deserialize)]
struct TokenErrorResponse {
    error: TokenErrorCode,
    error_description: String,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "snake_case")]
enum TokenErrorCode {
    AuthorizationPending,
    SlowDown,
    ExpiredToken,
    AccessDenied,
    InvalidRequest,
    InvalidGrant,
}

#[derive(Debug)]
pub enum AuthEvent {
    CodeReceived {
        user_code: String,
        verification_uri: String,
        verification_uri_complete: String,
    },
    Authenticated(AuthSession),
    LoggedOut,
    LogoutFailed(AuthSession, String),
    Expired,
    Denied,
    Failed(String),
}

#[derive(Serialize)]
struct DeviceCodeRequest<'a> {
    client_id: &'a str,
    scope: &'a str,
}

enum PollResult {
    Pending,
    SlowDown,
    Authenticated(AuthSession),
    Expired,
    Denied,
}

impl Auth {
    pub fn new() -> Self {
        Self {
            client: reqwest::Client::new(),
            base_url: "http://localhost:3000/api/auth".into(),
            client_id: std::env::var("ENTERPRISE_AUTH_CLIENT_ID")
                .expect("ENTERPRISE_AUTH_CLIENT_ID not set"),
        }
    }

    pub async fn login(self, sender: UnboundedSender<AuthEvent>) {
        let login = match self.request_device_code().await {
            Ok(login) => login,
            Err(error) => {
                let _ = sender.send(AuthEvent::Failed(error));
                return;
            }
        };

        let deadline = Instant::now() + Duration::from_secs(login.expires_in);
        let mut interval = Duration::from_secs(login.interval);

        if sender
            .send(AuthEvent::CodeReceived {
                user_code: login.user_code,
                verification_uri: login.verification_uri,
                verification_uri_complete: login.verification_uri_complete,
            })
            .is_err()
        {
            return;
        }

        let result = tokio::time::timeout_at(deadline, async {
            loop {
                tokio::time::sleep(interval).await;

                match self.poll(&login.device_code).await? {
                    PollResult::Pending => {}
                    PollResult::SlowDown => interval += Duration::from_secs(5),
                    PollResult::Authenticated(session) => {
                        return Ok(AuthEvent::Authenticated(session));
                    }
                    PollResult::Expired => return Ok(AuthEvent::Expired),
                    PollResult::Denied => return Ok(AuthEvent::Denied),
                }
            }
        })
        .await;

        let event = match result {
            Ok(Ok(event)) => event,
            Ok(Err(error)) => AuthEvent::Failed(error),
            Err(_) => AuthEvent::Expired,
        };

        let _ = sender.send(event);
    }

    pub async fn logout(self, session: AuthSession, sender: UnboundedSender<AuthEvent>) {
        let result = self
            .client
            .post(format!("{}/oauth2/revoke", self.base_url))
            .form(&[
                ("token", session.access_token.as_str()),
                ("token_type_hint", "access_token"),
                ("client_id", self.client_id.as_str()),
            ])
            .send()
            .await
            .map_err(|error| error.to_string())
            .and_then(|response| {
                response
                    .error_for_status()
                    .map(|_| ())
                    .map_err(|error| error.to_string())
            });

        let event = match result {
            Ok(()) => AuthEvent::LoggedOut,
            Err(error) => AuthEvent::LogoutFailed(session, error),
        };

        let _ = sender.send(event);
    }

    async fn request_device_code(&self) -> Result<DeviceCodeResponse, String> {
        let response = self
            .client
            .post(format!("{}/device/code", self.base_url))
            .json(&DeviceCodeRequest {
                client_id: &self.client_id,
                scope: "openid profile email offline_access",
            })
            .send()
            .await
            .map_err(|error| error.to_string())?;

        response
            .error_for_status()
            .map_err(|error| error.to_string())?
            .json::<DeviceCodeResponse>()
            .await
            .map_err(|error| error.to_string())
    }

    async fn poll(&self, device_code: &str) -> Result<PollResult, String> {
        let response = self
            .client
            .post(format!("{}/oauth2/token", self.base_url))
            .form(&[
                ("grant_type", DEVICE_GRANT_TYPE),
                ("device_code", device_code),
                ("client_id", self.client_id.as_str()),
            ])
            .send()
            .await
            .map_err(|error| error.to_string())?;

        if response.status().is_success() {
            let token = response
                .json::<TokenResponse>()
                .await
                .map_err(|error| error.to_string())?;

            if token.access_token.is_empty() {
                return Err("Authentication response did not include an access token".into());
            }

            let session = self
                .get_session(token.access_token, token.expires_in.unwrap_or(3600))
                .await?;
            return Ok(PollResult::Authenticated(session));
        }

        let error = response
            .json::<TokenErrorResponse>()
            .await
            .map_err(|error| error.to_string())?;

        match error.error {
            TokenErrorCode::AuthorizationPending => Ok(PollResult::Pending),
            TokenErrorCode::SlowDown => Ok(PollResult::SlowDown),
            TokenErrorCode::ExpiredToken => Ok(PollResult::Expired),
            TokenErrorCode::AccessDenied => Ok(PollResult::Denied),
            TokenErrorCode::InvalidRequest | TokenErrorCode::InvalidGrant => {
                Err(error.error_description)
            }
        }
    }

    async fn get_session(&self, access_token: String, expires_in: u64) -> Result<AuthSession, String> {
        #[derive(Deserialize)]
        struct UserInfoResponse {
            sub: String,
            #[serde(default)]
            name: String,
            #[serde(default)]
            email: String,
            #[serde(default)]
            email_verified: bool,
        }

        let userinfo = self
            .client
            .get(format!("{}/oauth2/userinfo", self.base_url))
            .bearer_auth(&access_token)
            .send()
            .await
            .map_err(|error| error.to_string())?
            .error_for_status()
            .map_err(|error| error.to_string())?
            .json::<UserInfoResponse>()
            .await
            .map_err(|error| error.to_string())?;

        let expires_at = chrono::Utc::now() + chrono::Duration::seconds(expires_in as i64);

        Ok(AuthSession {
            access_token,
            session: Session {
                id: userinfo.sub,
                expires_at: expires_at.to_rfc3339(),
                ip_address: None,
                user_agent: None,
            },
            user: User {
                name: userinfo.name,
                email: userinfo.email,
                email_verified: userinfo.email_verified,
            },
        })
    }
}
