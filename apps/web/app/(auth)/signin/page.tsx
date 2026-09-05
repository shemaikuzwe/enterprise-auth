import Link from "next/link";

import { EmailForm } from "@/components/auth/email-form";
import { PasskeyForm } from "@/components/auth/passkey-form";
import { OAuthButtons } from "@/components/oauth-buttons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { redirect } from "@/lib/utils";

export const metadata = { title: "Sign in" };

export default async function SignInPage({ searchParams }: PageProps<"/signin">) {
  const { redirect: redirectParam, email } = await searchParams;
  const destination = redirect(typeof redirectParam === "string" ? redirectParam : null);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Sign in</CardTitle>
        <CardDescription>Sign in to your account to continue</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <OAuthButtons redirect={destination} />
        <div className="flex items-center gap-3">
          <Separator className="flex-1" />
          <span className="text-xs text-muted-foreground">or continue with</span>
          <Separator className="flex-1" />
        </div>       
        <PasskeyForm redirect={destination} />
        <EmailForm
          mode="signin"
          redirect={destination}
          defaultEmail={typeof email === "string" ? email : undefined}
        />
        <p className="text-center text-xs text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline underline-offset-4 hover:text-foreground">
            Sign up
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
