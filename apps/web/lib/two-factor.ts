import { createAuthMiddleware } from "better-auth/api";
import { deleteSessionCookie, expireCookie } from "better-auth/cookies";
import { generateRandomString } from "better-auth/crypto";
import { createHmac } from "node:crypto";

import type { BetterAuthPlugin } from "better-auth";

const TWO_FACTOR_COOKIE_NAME = "two_factor";
const TRUST_DEVICE_COOKIE_NAME = "trust_device";
const TWO_FACTOR_COOKIE_MAX_AGE = 10 * 60;
const TRUST_DEVICE_COOKIE_MAX_AGE = 30 * 24 * 60 * 60;

function signTrustDevice(secret: string, userId: string, identifier: string) {
  return createHmac("sha256", secret)
    .update(`${userId}!${identifier}`)
    .digest("base64url");
}
// Sets up 2fa for Oauth providers
export function oauthTwoFactor(): BetterAuthPlugin {
  return {
    id: "oauth-two-factor",
    hooks: {
      after: [
        {
          matcher: (context) => context.path === "/callback/:id",
          handler: createAuthMiddleware(async (ctx) => {
            const data = ctx.context.newSession;
            if (!data?.user.twoFactorEnabled) return;

            const location = ctx.context.responseHeaders?.get("location");
            if (!location) return;

            const trustDeviceCookie = ctx.context.createAuthCookie(
              TRUST_DEVICE_COOKIE_NAME,
              { maxAge: TRUST_DEVICE_COOKIE_MAX_AGE },
            );
            const trustedDevice = await ctx.getSignedCookie(
              trustDeviceCookie.name,
              ctx.context.secret,
            );

            if (trustedDevice) {
              const [token, identifier] = trustedDevice.split("!");

              if (
                token &&
                identifier &&
                token === signTrustDevice(ctx.context.secret, data.user.id, identifier)
              ) {
                const verification =
                  await ctx.context.internalAdapter.findVerificationValue(identifier);

                if (
                  verification?.value === data.user.id &&
                  verification.expiresAt > new Date()
                ) {
                  await ctx.context.internalAdapter.deleteVerificationByIdentifier(identifier);

                  const newIdentifier = `trust-device-${generateRandomString(32)}`;
                  const newToken = signTrustDevice(
                    ctx.context.secret,
                    data.user.id,
                    newIdentifier,
                  );

                  await ctx.context.internalAdapter.createVerificationValue({
                    value: data.user.id,
                    identifier: newIdentifier,
                    expiresAt: new Date(
                      Date.now() + TRUST_DEVICE_COOKIE_MAX_AGE * 1000,
                    ),
                  });
                  await ctx.setSignedCookie(
                    trustDeviceCookie.name,
                    `${newToken}!${newIdentifier}`,
                    ctx.context.secret,
                    trustDeviceCookie.attributes,
                  );
                  return;
                }
              }

              expireCookie(ctx, trustDeviceCookie);
            }

            deleteSessionCookie(ctx, true);
            await ctx.context.internalAdapter.deleteSession(data.session.token);
            ctx.context.setNewSession(null);

            const twoFactorCookie = ctx.context.createAuthCookie(
              TWO_FACTOR_COOKIE_NAME,
              { maxAge: TWO_FACTOR_COOKIE_MAX_AGE },
            );
            const identifier = `2fa-${generateRandomString(20)}`;

            await ctx.context.internalAdapter.createVerificationValue({
              value: data.user.id,
              identifier,
              expiresAt: new Date(Date.now() + TWO_FACTOR_COOKIE_MAX_AGE * 1000),
            });
            await ctx.setSignedCookie(
              twoFactorCookie.name,
              identifier,
              ctx.context.secret,
              twoFactorCookie.attributes,
            );

            const twoFactorURL = new URL("/auth/2fa", location);
            throw ctx.redirect(twoFactorURL.toString());
          }),
        },
      ],
    },
  };
}