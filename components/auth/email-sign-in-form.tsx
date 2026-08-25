"use client";

import { HugeiconsIcon } from "@hugeicons/react"
import { MailIcon } from "@hugeicons/core-free-icons"
import { useState } from "react"

import { EmailOtpDialog } from "@/components/auth/email-otp-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { emailOtp } from "@/lib/auth-client"

export function EmailSignInForm() {
  const [email, setEmail] = useState("")
  const [codeSent, setCodeSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const { error } = await emailOtp.sendVerificationOtp({
        email,
        type: "sign-in",
      })
      if (error) {
        setError(error.message ?? "Failed to send the sign-in code")
        return
      }
      setCodeSent(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <EmailOtpDialog
        email={email}
        open={codeSent}
        onOpenChange={(next) => {
          setCodeSent(next)
          if (!next) setError(null)
        }}
      />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="m@example.com"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          <HugeiconsIcon icon={MailIcon} data-icon="inline-start" />
          {loading ? "Sending code…" : "Continue with email"}
        </Button>
        {error && <p className="text-xs text-destructive">{error}</p>}
      </form>
    </>
  )
}
