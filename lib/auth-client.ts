import { createAuthClient } from "better-auth/react";
import { adminClient, emailOTPClient, twoFactorClient } from "better-auth/client/plugins";


export const authClient = createAuthClient({
  plugins: [
    adminClient(),
    emailOTPClient(),
    twoFactorClient({
      onTwoFactorRedirect() {
        window.location.href = "/2fa";
      },
    }),
  ],
});

export const { signIn, signUp, signOut, useSession, getSession, emailOtp, twoFactor } = authClient;

// twoFactorEnabled comes from the server's user table but isn't part of the
// client-inferred session type.
export type User = typeof authClient.$Infer.Session.user & {
  twoFactorEnabled?: boolean | null;
};

export type Session = Omit<typeof authClient.$Infer.Session, "user"> & { user: User };
