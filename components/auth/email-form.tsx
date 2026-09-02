"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { MailIcon } from "@hugeicons/core-free-icons";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Link from "next/link";

import { OtpForm } from "@/components/auth/otp-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { emailOtp, signIn } from "@/lib/auth-client";
import { emailLookup } from "@/lib/actions";
export function EmailForm({
  mode,
  redirect,
  defaultEmail,
}: {
  mode: "signin" | "signup";
  redirect: string;
  defaultEmail?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(defaultEmail ?? "");
  const [error, setError] = useState<string | null>(null);
  const [showOtp, setShowOtp] = useState(false);

  const submitMutation = useMutation({
    mutationFn: async (nextEmail: string) => {
      const lookup = await emailLookup(nextEmail);
      if (lookup.kind === "sso") {
        // Navigates to the IdP; nothing after this runs.
        await signIn.sso({ email: nextEmail, callbackURL: redirect });
        return { kind: "sso" as const };
      }

      if (mode === "signin" && lookup.kind === "unknown") {
        throw new Error("unknown_email");
      }

      if (mode === "signup" && lookup.kind === "otp") {
        throw new Error("already_exists");
      }

      const { error: sendError } = await emailOtp.sendVerificationOtp({ email: nextEmail, type: "sign-in" });
      if (sendError) {
        throw new Error(sendError.message ?? "Failed to send the sign-in code");
      }
      return { kind: "otp" as const };
    },
    onSuccess: (data) => {
      if (data.kind === "otp") setShowOtp(true);
    },
    onError: (mutationError: Error) => {
      setError(mutationError.message);
    },
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    submitMutation.mutate(email);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {mode === "signup" && (
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Enter your full name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        )}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="you@company.com"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <Button type="submit" size="lg" className="w-full" disabled={submitMutation.isPending}>
          <HugeiconsIcon icon={MailIcon} data-icon="inline-start" />
          {submitMutation.isPending ? "Signing in..." : mode === "signup" ? "Create account" : "Continue"}
        </Button>
        {error && (
          <p className="text-xs text-destructive">
            {error === "unknown_email" ? (
              <>
                No account for that email.{" "}
                <Link
                  href={`/signup?email=${encodeURIComponent(email)}&redirect=${encodeURIComponent(redirect)}`}
                  className="underline"
                >
                  Create one
                </Link>
              </>
            ) : error === "already_exists" ? (
              <>
                That email already has an account.{" "}
                <Link
                  href={`/signin?email=${encodeURIComponent(email)}&redirect=${encodeURIComponent(redirect)}`}
                  className="underline"
                >
                  Sign in
                </Link>
              </>
            ) : (
              error
            )}
          </p>
        )}
        <p className="text-center text-xs text-muted-foreground">
          Work email with SSO? We&apos;ll route you to your provider automatically.
        </p>
      </form>

      <OtpForm
        email={email}
        name={mode === "signup" ? name : undefined}
        redirect={redirect}
        open={showOtp}
        onOpenChange={setShowOtp}
      />
    </>
  );
}
