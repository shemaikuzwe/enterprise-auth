import { NextResponse } from "next/server";

import { clientId, getDiscovery, pkceChallenge, randomString, redirectUri } from "@/lib/oauth";

const SCOPES = "openid profile email offline_access";

export async function GET() {
  const discovery = await getDiscovery();
  const state = randomString(16);
  const verifier = randomString(32);

  const authorize = new URL(discovery.authorization_endpoint);
  authorize.searchParams.set("client_id", clientId());
  authorize.searchParams.set("redirect_uri", redirectUri());
  authorize.searchParams.set("response_type", "code");
  authorize.searchParams.set("scope", SCOPES);
  authorize.searchParams.set("state", state);
  authorize.searchParams.set("code_challenge", pkceChallenge(verifier));
  authorize.searchParams.set("code_challenge_method", "S256");

  const res = NextResponse.redirect(authorize);
  const opts = { httpOnly: true, sameSite: "lax" as const, path: "/", maxAge: 600 };
  res.cookies.set("demo_state", state, opts);
  res.cookies.set("demo_verifier", verifier, opts);
  return res;
}
