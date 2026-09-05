import { createHash, randomBytes } from "node:crypto";

export function providerBase() {
  return process.env.PROVIDER_URL ?? "http://localhost:3000";
}

export function clientId() {
  return process.env.DEMO_OAUTH_CLIENT_ID ?? "";
}

export function clientSecret() {
  return process.env.DEMO_OAUTH_CLIENT_SECRET ?? "";
}

export function redirectUri() {
  return "http://localhost:3001/api/auth/callback/enterprise";
}

export interface Discovery {
  authorization_endpoint: string;
  token_endpoint: string;
  userinfo_endpoint: string;
  jwks_uri: string;
}

export async function getDiscovery(): Promise<Discovery> {
  const res = await fetch(
    `${providerBase()}/api/auth/.well-known/openid-configuration`,
    { cache: "no-store" },
  );
  if (!res.ok) throw new Error(`Discovery failed (${res.status})`);
  return res.json();
}

export function randomString(bytes = 32) {
  return randomBytes(bytes).toString("base64url");
}

export function pkceChallenge(verifier: string) {
  return createHash("sha256").update(verifier).digest("base64url");
}

export function decodeJwtPayload(token: string): unknown {
  const parts = token.split(".");
  if (parts.length < 2) throw new Error("Not a JWT");
  return JSON.parse(Buffer.from(parts[1], "base64url").toString("utf8"));
}
