import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { SignInButton } from "@/components/sign-in-button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { auth } from "@/lib/auth";

export const metadata = { title: "Sign in" };

export default async function SignInPage({ searchParams }: PageProps<"/signin">) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (session) redirect("/");

  const { error } = await searchParams;

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <span className="self-center text-sm font-medium">Acme Demo</span>
        <Card>
          <div className="grid gap-1">
            <CardTitle className="text-lg">Sign in</CardTitle>
            <CardDescription>Continue with your Acme account.</CardDescription>
          </div>
          <SignInButton />
          {typeof error === "string" && (
            <p role="alert" className="text-xs text-destructive">
              Sign-in failed: {error}
            </p>
          )}
        </Card>
      </div>
    </div>
  );
}
