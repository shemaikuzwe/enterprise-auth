"use client"

import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { useSearchParams } from "next/navigation"

import { useSession } from "@/components/session-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client"
import { SCOPE_DESCRIPTIONS } from "@/lib/oauth-scopes"

interface VerifiedDevice {
  userCode: string
  clientName: string | null
  scopes: string[]
}

export default function DevicePage() {
  const searchParams = useSearchParams()
  const session = useSession()
  const [code, setCode] = useState(() =>
    searchParams.get("user_code") ?? ""
  )
  const [verified, setVerified] = useState<VerifiedDevice | null>(null)
  const [approved, setApproved] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const lookupMutation = useMutation({
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

      const data = verification.data as {
        status: string
        client_id?: string | null
        scope?: string | null
      }
      let clientName: string | null = data.client_id ?? null
      if (data.client_id) {
        const { data: client } = await authClient.oauth2.publicClient({
          query: { client_id: data.client_id },
        })
        if (client?.client_name) clientName = client.client_name
      }
      return {
        userCode,
        clientName,
        scopes: (data.scope ?? "").split(" ").filter(Boolean),
      } satisfies VerifiedDevice
    },
    onSuccess: (info) => {
      setVerified(info)
    },
    onError: (mutationError: Error) => {
      setError(mutationError.message)
    },
  })

  const approveMutation = useMutation({
    mutationFn: async (userCode: string) => {
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

    lookupMutation.mutate(userCode)
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

  if (verified) {
    return (
      <section className="flex flex-col gap-8">
        <div className="space-y-2">
          <h1 className="text-xl font-semibold tracking-tight">Authorize this device?</h1>
          <p className="text-sm text-muted-foreground">
            {verified.clientName
              ? `“${verified.clientName}” is requesting access to your account on a new device.`
              : "A device is requesting access to your account."}
          </p>
        </div>

        {verified.scopes.length > 0 ? (
          <div className="rounded-lg border p-4">
            <p className="text-sm font-medium">This device will be able to</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {verified.scopes.map((scope) => (
                <li key={scope}>{SCOPE_DESCRIPTIONS[scope] ?? scope}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="flex-1"
            disabled={approveMutation.isPending}
            onClick={() => {
              setVerified(null)
              setError(null)
            }}
          >
            Cancel
          </Button>
          <Button
            type="button"
            size="lg"
            className="flex-1"
            disabled={approveMutation.isPending}
            onClick={() => {
              setError(null)
              approveMutation.mutate(verified.userCode)
            }}
          >
            {approveMutation.isPending ? "Authorizing…" : "Authorize device"}
          </Button>
        </div>

        {error ? (
          <p className="text-center text-xs text-destructive" role="alert">
            {error}
          </p>
        ) : null}
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
          disabled={lookupMutation.isPending}
        >
          {lookupMutation.isPending ? "Checking…" : session ? "Continue" : "Continue to sign in"}
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
