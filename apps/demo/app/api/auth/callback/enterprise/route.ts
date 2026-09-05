import { NextResponse } from "next/server";

import {
  clientId,
  clientSecret,
  getDiscovery,
  redirectUri,
} from "@/lib/oauth";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const error = url.searchParams.get("error");
  if (error) {
    return NextResponse.redirect(
      new URL(`/?error=${encodeURIComponent(error)}`, request.url),
    );
  }

  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookie = request.headers.get("cookie") ?? "";
  const jar = Object.fromEntries(
    cookie.split(";").map((part) => {
      const i = part.indexOf("=");
      return [part.slice(0, i).trim(), decodeURIComponent(part.slice(i + 1).trim())];
    }),
  );
  if (!code || !state || state !== jar.demo_state || !jar.demo_verifier) {
    return NextResponse.redirect(
      new URL("/?error=invalid_state", request.url),
    );
  }

  const discovery = await getDiscovery();
  const basic = Buffer.from(`${clientId()}:${clientSecret()}`).toString("base64");
  const tokenRes = await fetch(discovery.token_endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      authorization: `Basic ${basic}`,
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri(),
      code_verifier: jar.demo_verifier,
    }),
  });
  if (!tokenRes.ok) {
    const body = await tokenRes.text();
    return NextResponse.redirect(
      new URL(`/?error=token_${tokenRes.status}_${encodeURIComponent(body.slice(0, 80))}`, request.url),
    );
  }
  const tokens = (await tokenRes.json()) as {
    access_token: string;
    id_token?: string;
    refresh_token?: string;
  };

  const userinfoRes = await fetch(discovery.userinfo_endpoint, {
    headers: { authorization: `Bearer ${tokens.access_token}` },
  });
  const userinfo = userinfoRes.ok ? await userinfoRes.json() : null;

  const res = NextResponse.redirect(new URL("/", request.url));
  res.cookies.set(
    "demo_session",
    JSON.stringify({
      access_token: tokens.access_token,
      id_token: tokens.id_token ?? null,
      refresh_token: tokens.refresh_token ?? null,
      userinfo,
    }),
    { httpOnly: true, sameSite: "lax" as const, path: "/", maxAge: 3600 },
  );
  res.cookies.delete("demo_state");
  res.cookies.delete("demo_verifier");
  return res;
}
