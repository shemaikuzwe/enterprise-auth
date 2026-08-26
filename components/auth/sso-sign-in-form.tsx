"use client";

import { HugeiconsIcon } from "@hugeicons/react"
import { GlobeIcon } from "@hugeicons/core-free-icons"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signIn } from "@/lib/auth-client"

export function SsoSignInForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setLoading(true)
    try {
      // The provider is resolved from the email domain; on success the client
      // redirects to the identity provider, so nothing runs after this.
      const { error } = await signIn.sso({
        email,
        callbackURL: "/profile",
      })
      if (error) {
        setError(
          error.message ?? "No identity provider is configured for that domain",
        )
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-md border border-dashed border-border bg-muted/40 p-3 text-xs text-muted-foreground">
      <p className="mb-1 flex items-center gap-1.5 font-medium text-foreground">
        <HugeiconsIcon icon={GlobeIcon} className="size-3.5" />
        Single sign-on (SSO)
      </p>
      <p className="mb-2.5">
        Managed by your organization. Enter your work email and we&apos;ll route
        you to your identity provider.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          name="sso-email"
          placeholder="you@company.com"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="h-6 bg-background"
        />
        <Button variant="secondary" size="sm" type="submit" disabled={loading}>
          {loading ? "Redirecting…" : "Continue"}
        </Button>
      </form>
      {error && <p className="mt-2 text-destructive">{error}</p>}
    </div>
  )
}
