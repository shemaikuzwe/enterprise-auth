import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { getSession} from "./lib/auth-client";

const protectedPaths = [
  "/profile",
];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = await getSession({
      fetchOptions: { headers: await headers() },
    });
   const session = response.data;
   const user = session?.user;
  const isAuthenticated = !!user;

  const isProtectedRoute = protectedPaths.some((path) => pathname.startsWith(path));
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL("/", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }
  const isAuthRoute =
    (pathname.startsWith("/auth") || pathname === "/")
  if (isAuthRoute && isAuthenticated) {
    const redirectPath = request.nextUrl.searchParams.get("redirect");
    const destination =
      redirectPath?.startsWith("/") && !redirectPath.startsWith("//") ? redirectPath : "/profile";
    return NextResponse.redirect(new URL(destination, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|uploads|favicon.ico|robots.txt|sitemap.xml|manifest.json|.*\\.(?:ico|png|jpg|jpeg|svg|gif|webp|woff|woff2|ttf|eot|csv)).*)",
  ],
};
