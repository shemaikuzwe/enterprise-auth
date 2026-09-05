"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";

export function SignOutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleSignOut() {
    setPending(true);
    await signOut();
    router.push("/signin");
    router.refresh();
  }

  return (
    <Button variant="outline" disabled={pending} onClick={handleSignOut}>
      {pending ? "Signing out…" : "Sign out"}
    </Button>
  );
}
