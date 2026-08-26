import { createAuthClient } from "better-auth/react";
import { ssoClient } from "@better-auth/sso/client";
import {
  adminClient,
  deviceAuthorizationClient,
  emailOTPClient,
  organizationClient,
  twoFactorClient,
} from "better-auth/client/plugins";


export const authClient = createAuthClient({
  plugins: [
    adminClient(),
    organizationClient(),
    ssoClient(),
    deviceAuthorizationClient(),
    emailOTPClient(),
    twoFactorClient({
      twoFactorPage:"/2fa",
      onTwoFactorRedirect() {
        window.location.href = "/2fa";
      },
    }),
  ],
});

export const { signIn, signUp, signOut, useSession, getSession, emailOtp, twoFactor } = authClient;

export type User = typeof authClient.$Infer.Session.user & {
  twoFactorEnabled?: boolean | null;
};

export type Session = Omit<typeof authClient.$Infer.Session, "user"> & { user: User };
