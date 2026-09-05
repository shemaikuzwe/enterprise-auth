import { createAuthClient } from "better-auth/react";
import { passkeyClient } from "@better-auth/passkey/client";
import { ssoClient } from "@better-auth/sso/client";
import { oauthProviderClient } from "@better-auth/oauth-provider/client";
import {
  adminClient,
  emailOTPClient,
  oneTapClient,
  organizationClient,
  twoFactorClient,
} from "better-auth/client/plugins";
import { oauthDeviceAuthorizationClient } from "@better-auth/oauth-provider/client";


export const authClient = createAuthClient({
  plugins: [
    oauthProviderClient(),
    adminClient(),
    organizationClient(),
    ssoClient(),
    oauthDeviceAuthorizationClient(),
    emailOTPClient(),
    oneTapClient({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
    }),
    passkeyClient(),
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
  role?: string | null;
  banned?: boolean | null;
  banReason?: string | null;
  banExpires?: Date | null;
};

export type Session = Omit<typeof authClient.$Infer.Session, "user"> & { user: User };
