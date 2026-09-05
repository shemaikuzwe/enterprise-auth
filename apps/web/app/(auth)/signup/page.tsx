import Link from "next/link";

import { EmailForm } from "@/components/auth/email-form";
import { OAuthButtons } from "@/components/oauth-buttons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { redirect } from "@/lib/utils";

export const metadata = { title: "Create your account" };

export default async function SignUpPage({ searchParams }: PageProps<"/signup">) {
  const { redirect: redirectParam, email } = await searchParams;
  const destination = redirect(typeof redirectParam === "string" ? redirectParam : null);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Create your account</CardTitle>
        <CardDescription>Sign up to get started</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <OAuthButtons redirect={destination} />
        <div className="flex items-center gap-3">
          <Separator className="flex-1" />
          <span className="text-xs text-muted-foreground">or sign up with</span>
          <Separator className="flex-1" />
        </div>
        <EmailForm
          mode="signup"
          redirect={destination}
          defaultEmail={typeof email === "string" ? email : undefined}
        />
        <p className="text-center text-xs text-muted-foreground">
          Already have an account?{" "}
          <Link href="/signin" className="underline underline-offset-4 hover:text-foreground">
            Sign in
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
