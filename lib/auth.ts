import { UAParser } from "ua-parser-js";
import { eq } from "drizzle-orm";

import { db, schema } from "./db";
import { sendSignInNotification, sendSignInOtp } from "./email/send";

import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { admin, emailOTP, twoFactor } from "better-auth/plugins";
import { oauthTwoFactor } from "./two-factor";

export const auth = betterAuth({
  baseURL:process.env.NEXT_PUBLIC_BASE_URL!,
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
    session: {
      create: {
        after: async (session) => {
          // Skip admin-impersonated sessions; the real user is not signing in.
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
    twoFactor({ issuer: "Acme Inc.", allowPasswordless: true }),
    oauthTwoFactor(),
    admin(),
    emailOTP({
      expiresIn: 5 * 60,
      async sendVerificationOTP({ email, otp }) {
        await sendSignInOtp(email, otp);
      },
    }),
  ],
});
