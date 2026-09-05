"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";

export function SignInButton() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSignIn() {
    setPending(true);
    setError(null);
    const { error } = await signIn.social({ provider: "acme", callbackURL: "/" });
    if (error) {
      setError(error.message ?? "Failed to sign in");
      setPending(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <Button className="w-full" disabled={pending} onClick={handleSignIn}>
        {pending ? "Redirecting…" : "Continue with Acme"}
      </Button>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
