import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

import { getSession } from "./lib/auth-client";
import { redirect } from "./lib/utils";

const protectedPaths = ["/home", "/settings"];
const authPaths = ["/signin", "/signup"];

export async function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const { data: session } = await getSession({
    fetchOptions: { headers: await headers() },
  });
  const isAuthenticated = !!session?.user;

  if (pathname === "/") {
    return NextResponse.redirect(new URL(isAuthenticated ? "/home" : "/signin", request.url));
  }

  if (protectedPaths.some((path) => pathname.startsWith(path)) && !isAuthenticated) {
    const url = new URL("/signin", request.url);
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

  if (authPaths.some((path) => pathname.startsWith(path)) && isAuthenticated) {
    return NextResponse.redirect(new URL(redirect(searchParams.get("redirect")), request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|uploads|favicon.ico|robots.txt|sitemap.xml|manifest.json|.*\\.(?:ico|png|jpg|jpeg|svg|gif|webp|woff|woff2|ttf|eot|csv)).*)",
  ],
};
