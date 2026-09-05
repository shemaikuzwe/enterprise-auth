import { betterAuth } from "better-auth";
import { genericOAuth } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";

const providerUrl = process.env.PROVIDER_URL ?? "http://localhost:3000";

export const auth = betterAuth({
  baseURL: process.env.BASE_URL ?? "http://localhost:3001",
  onAPIError: { errorURL: "/signin" },
  plugins: [
    genericOAuth({
      config: [
        {
          providerId: "acme",
          name: "Acme",
          discoveryUrl: `${providerUrl}/api/auth/.well-known/openid-configuration`,
          clientId: process.env.AUTH_CLIENT_ID!,
          clientSecret: process.env.AUTH_CLIENT_SECRET!,
          tokenEndpointAuth: { method: "client_secret_basic" },
          scopes: ["openid", "profile", "email", "offline_access"],
          // Sign out clears the local session only; the provider client is not
          // registered for RP-initiated logout.
          disableProviderLogout: true,
        },
      ],
    }),
    nextCookies(),
  ],
});
