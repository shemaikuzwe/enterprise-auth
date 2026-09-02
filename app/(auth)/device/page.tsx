"use client"

import { useMutation } from "@tanstack/react-query"
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
  const [approved, setApproved] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const deviceMutation = useMutation({
    mutationFn: async (userCode: string) => {
      const verification = await authClient.device({
        query: { user_code: userCode },
      })
      if (verification.error) {
        throw new Error(verification.error.error)
      }

      if (verification.data.status !== "pending") {
        throw new Error("This device code has already been used.")
      }

      const approval = await authClient.device.approve({ userCode })
      if (approval.error) {
        throw new Error(approval.error.error ?? "Could not authorize this device.")
      }
    },
    onSuccess: () => {
      setApproved(true)
    },
    onError: (mutationError: Error) => {
      setError(mutationError.message)
    },
  })

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const userCode = code.replace("-", "")
    if (userCode.length !== 8) {
      setError("Enter the 8-character code shown in your terminal.")
      return
    }

    if (!session) {
      const returnPath = `/device?user_code=${encodeURIComponent(userCode)}`
      window.location.href = `/signin?redirect=${encodeURIComponent(returnPath)}`
      return
    }

    deviceMutation.mutate(userCode)
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
          disabled={deviceMutation.isPending}
        >
          {deviceMutation.isPending ? "Authorizing…" : session ? "Authorize device" : "Continue to sign in"}
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
