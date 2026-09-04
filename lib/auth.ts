import { UAParser } from "ua-parser-js";
import { eq } from "drizzle-orm";

import { db, schema } from "./db";
import { ensureTeam } from "./team";
import { sendOrganizationInvite, sendSignInNotification, sendSignInOtp } from "./email/send";

import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { sso } from "@better-auth/sso";
import { admin, bearer, deviceAuthorization, emailOTP, organization, twoFactor } from "better-auth/plugins";
import { oauthTwoFactor } from "./two-factor";

const ssoDiscoveryOrigins = [
  "https://accounts.google.com",
  "https://login.microsoftonline.com",
  "https://*.okta.com",
  "https://*.auth0.com",
  ...(process.env.NODE_ENV === "development" ? ["http://localhost:8080"] : []),
];

export const auth = betterAuth({
  baseURL:process.env.NEXT_PUBLIC_BASE_URL!,
  onAPIError: {
    errorURL:"/signin"
  },
  trustedOrigins: async (request) => {
    if (request?.url.endsWith("/sso/register")) return ssoDiscoveryOrigins;
    return ["http://localhost:3000","http://localhost:8080"];
  },
  account: {
    accountLinking: {
      enabled:true
    }
  },
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }
  },
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          try {
            await ensureTeam(user.id, { name: user.name });
          } catch (error) {
            console.error("Failed to create default organization for user", user.id, error);
          }
        },
      },
    },
    session: {
      create: {
        before: async (session) => {
            if (!session.userId || (session as { activeOrganizationId?: string | null }).activeOrganizationId) return;
            try {
              const [user] = await db
                .select()
                .from(schema.user)
                .where(eq(schema.user.id, session.userId))
                .limit(1);
              const orgId: string | null = await ensureTeam(session.userId, { name: user?.name });
              if (!orgId) return;
              return {
                data: {
                  activeOrganizationId: orgId,
                },
              };
            }
            catch (error) {
              console.error("Failed to set default active organization", session.userId, error);
            }
        },
        after: async (session) => {
          // Skip admin-impersonated sessions.
          if (!session.userId || session.impersonatedBy) return;

          const [user] = await db
            .select()
            .from(schema.user)
            .where(eq(schema.user.id, session.userId))
            .limit(1);
          if (!user || !user.emailVerified) return;

          const { browser, os } = new UAParser(session.userAgent ?? undefined).getResult();
          await sendSignInNotification({
            to: user.email,
            name: user.name,
            time: new Date(),
            browser: browser.name ?? "Unknown browser",
            os: os.name ?? "Unknown device",
            ip: session.ipAddress,
          });
        },
      },
    },
  },
  plugins: [
    bearer(),
    twoFactor({ issuer: "Acme Inc.", allowPasswordless: true }),
    oauthTwoFactor(),
    admin(),
    emailOTP({
      expiresIn: 5 * 60,
      async sendVerificationOTP({ email, otp }) {
        await sendSignInOtp(email, otp);
      },
    }),
    deviceAuthorization({
      verificationUri:"/device"
    }),
    organization({
      async sendInvitationEmail({ id, email, organization, inviter }) {
        await sendOrganizationInvite({
          to: email,
          organizationName: organization.name,
          inviterEmail: inviter.user.email,
          inviteUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/invite/${id}`,
        });
      },
    }),
    sso({
      //Dangerous this should be replaced with domain verification in production
      trustEmailVerified:true,
      organizationProvisioning: { defaultRole: "member" },
    }),
  ],
});
