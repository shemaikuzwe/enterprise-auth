"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"

import { useSession } from "@/components/session-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client"

export default function DevicePage() {
  const searchParams = useSearchParams()
  const session = useSession()
  const [code, setCode] = useState(() =>
    searchParams.get("user_code") ?? ""
  )
  const [loading, setLoading] = useState(false)
  const [approved, setApproved] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const userCode = code.replace("-", "")
    if (userCode.length !== 8) {
      setError("Enter the 8-character code shown in your terminal.")
      return
    }

    if (!session) {
      const returnPath = `/device?user_code=${encodeURIComponent(userCode)}`
      window.location.href = `/?redirect=${encodeURIComponent(returnPath)}`
      return
    }

    setLoading(true)
    try {
      const verification = await authClient.device({
        query: { user_code: userCode },
      })
      if (verification.error) {
        setError(verification.error.error)
        return
      }

      if (verification.data.status !== "pending") {
        setError("This device code has already been used.")
        return
      }

      const approval = await authClient.device.approve({ userCode })
      if (approval.error) {
        setError(approval.error.error ?? "Could not authorize this device.")
        return
      }

      setApproved(true)
    } finally {
      setLoading(false)
    }
  }

  if (approved) {
    return (
      <section className="flex flex-col gap-3 text-center" aria-live="polite">
        <h1 className="text-xl font-semibold tracking-tight">Device authorized</h1>
        <p className="text-sm text-muted-foreground">
          You can close this page and return to your terminal.
        </p>
      </section>
    )
  }

  return (
    <section className="flex flex-col gap-8">
      <div className="space-y-2">
        <h1 className="text-xl font-semibold tracking-tight">Authorize your device</h1>
        <p className="text-sm text-muted-foreground">
          Enter the code shown in your terminal.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-7">
        <div className="space-y-3">
          <Input
            aria-label="Device code"
            autoCapitalize="characters"
            autoComplete="one-time-code"
            autoFocus
            className="h-11 rounded-none bg-transparent text-center font-mono text-base font-medium tracking-[0.16em] uppercase md:text-base"
            inputMode="text"
            maxLength={9}
            name="user_code"
            placeholder="ABCD-EFGH"
            required
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
          <p className="text-xs leading-relaxed text-muted-foreground">
            Only enter this code if you just initiated a sign-in from your device.
          </p>
        </div>

        <Button
          type="submit"
          size="lg"
          className="h-11 w-full rounded-full text-sm"
          disabled={loading}
        >
          {loading ? "Authorizing…" : session ? "Authorize device" : "Continue to sign in"}
        </Button>

        {error ? (
          <p className="text-center text-xs text-destructive" role="alert">
            {error}
          </p>
        ) : null}
      </form>
    </section>
  )
}
