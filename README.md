# enterprise-auth

Enterprise ready auth example using [Better Auth](https://www.better-auth.com).

## Stack

- Next.js 16 / React 19, Tailwind + shadcn
- Better Auth (+ Drizzle adapter, Postgres)
- react-email + nodemailer for transactional mail

## Auth features

- **SSO**: per-organization SAML/OIDC providers (Google, Microsoft, Okta, Auth0,Keycloak).
- **Email Magic Links**: passwordless login using email links
- **OAuth**: Google + GitHub
- **Passkeys**
- **Two-factor**: 2FA multi-factor authentication using authenticator apps (Google authenticator,1Password)
- **Organizations**: teams with invites, roles, switcher, per-org settings
- **Admin**: User management
- **Device flow**: device authentication for CLI APPS

## Getting started

```bash
cp .env.example .env   # fill in DATABASE_URL, auth secrets, OAuth, SMTP
pnpm install
pnpm db:migrate
pnpm dev               # http://localhost:3000
```

Useful scripts: `pnpm db:studio`, `pnpm db:generate`, `pnpm email:dev` (preview mail templates on :3001).

## Local Keycloak (SSO dev)

```bash
docker run -p 8080:8080 \
  -e KC_BOOTSTRAP_ADMIN_USERNAME=admin \
  -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin \
  -v keycloak_data:/opt/keycloak/data \
  quay.io/keycloak/keycloak:latest start-dev
```

Admin console: http://localhost:8080 (admin / admin).
