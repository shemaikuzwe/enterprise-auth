import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = NextResponse.redirect(new URL("/", request.url));
  res.cookies.delete("demo_session");
  return res;
}
