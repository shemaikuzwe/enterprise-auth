"use client";

import { HugeiconsIcon } from "@hugeicons/react"
import {
  AccountRecoveryIcon,
  ShieldKeyIcon,
} from "@hugeicons/core-free-icons"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useState } from "react"
import QRCode from "react-qr-code"

import { useSession } from "@/components/session-provider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { twoFactor } from "@/lib/auth-client"

const CODE_LENGTH = 6

type Setup = {
  totpURI: string
  backupCodes: string[]
}

function downloadBackupCodes(codes: string[]) {
  const file = new Blob([codes.join("\n")], { type: "text/plain;charset=utf-8" })
  const url = URL.createObjectURL(file)
  const link = document.createElement("a")

  link.href = url
  link.download = "acme-two-factor-backup-codes.txt"
  link.click()
  URL.revokeObjectURL(url)
}

export function TwoFactorSettings() {
  const router = useRouter()
  const session = useSession()
  const enabled = Boolean(session?.user.twoFactorEnabled)

  const [enableOpen, setEnableOpen] = useState(false)
  const [disableOpen, setDisableOpen] = useState(false)
  const [regenerateOpen, setRegenerateOpen] = useState(false)
  const [setup, setSetup] = useState<Setup | null>(null)
  const [code, setCode] = useState("")
  const [error, setError] = useState<string | null>(null)

  function resetEnableFlow() {
    setSetup(null)
    setCode("")
    setError(null)
  }

  // Generates the TOTP secret + backup codes. The account only flips to
  // twoFactorEnabled once the first code is verified below.
  const enableMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await twoFactor.enable({ method: "totp" })
      if (error) throw new Error(error.message ?? "Could not start setup")
      return data!
    },
    onSuccess: (data) => {
      if (data.method === "totp") {
        setSetup({ totpURI: data.totpURI, backupCodes: data.backupCodes })
      }
    },
    onError: (err: Error) => setError(err.message),
  })

  const verifyMutation = useMutation({
    mutationFn: async (nextCode: string) => {
      const { error } = await twoFactor.verifyTotp({ code: nextCode })
      if (error) throw new Error(error.message ?? "Verification failed")
    },
    onSuccess: () => {
      if (setup) downloadBackupCodes(setup.backupCodes)
      resetEnableFlow()
      setEnableOpen(false)
      router.refresh()
    },
    onError: () => {
      setCode("")
      setError("That code didn't match. Check your authenticator app and try again.")
    },
  })

  const disableMutation = useMutation({
    mutationFn: async () => {
      const { error } = await twoFactor.disable({})
      if (error) throw new Error(error.message ?? "Could not disable 2FA")
    },
    onSuccess: () => {
      setDisableOpen(false)
      router.refresh()
    },
    onError: (err: Error) => setError(err.message),
  })

  const regenerateMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await twoFactor.generateBackupCodes({})
      if (error) throw new Error(error.message ?? "Could not regenerate codes")
      return data!
    },
    onSuccess: (data) => {
      downloadBackupCodes(data.backupCodes ?? [])
      setRegenerateOpen(false)
    },
    onError: (err: Error) => setError(err.message),
  })

  return (
    <div className="flex flex-col gap-6">
      <section className="flex items-center gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-muted">
          <HugeiconsIcon icon={ShieldKeyIcon} className="size-6" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-2 text-sm font-medium">
            Two-factor authentication
            <Badge variant="secondary">{enabled ? "On" : "Off"}</Badge>
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Require a rotating code from your authenticator app at sign-in.
          </p>
        </div>
        {enabled ? (
          <Button
            variant="outline"
            type="button"
            disabled={disableMutation.isPending}
            onClick={() => {
              setError(null)
              setDisableOpen(true)
            }}
          >
            Turn off
          </Button>
        ) : (
          <Button
            type="button"
            disabled={enableMutation.isPending}
            onClick={() => {
              resetEnableFlow()
              setError(null)
              setEnableOpen(true)
              enableMutation.mutate()
            }}
          >
            Turn on
          </Button>
        )}
      </section>

      {enabled && (
        <section className="flex items-center gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-muted">
            <HugeiconsIcon icon={AccountRecoveryIcon} className="size-6" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium">Recovery codes</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Generate new single-use codes if you lose access to your authenticator app.
            </p>
          </div>
          <Button
            variant="outline"
            type="button"
            disabled={regenerateMutation.isPending}
            onClick={() => {
              setError(null)
              setRegenerateOpen(true)
            }}
          >
            Regenerate
          </Button>
        </section>
      )}

      {/* Enrollment: scan QR, confirm the first code, then codes download */}
      <Dialog open={enableOpen} onOpenChange={setEnableOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Scan with your authenticator app</DialogTitle>
            <DialogDescription>
              Add this key to an app like Google Authenticator or 1Password, then enter the
              6-digit code it generates.
            </DialogDescription>
          </DialogHeader>

          {setup ? (
            <>
              <div className="mx-auto rounded-lg bg-white p-3">
                {/* Authenticator apps need high contrast — force dark-on-light regardless of theme */}
                <QRCode value={setup.totpURI} size={176} bgColor="#ffffff" fgColor="#000000" />
              </div>

              <div className="flex flex-col items-center gap-2">
                <InputOTP
                  id="confirm-code"
                  value={code}
                  onChange={(nextCode) => {
                    setCode(nextCode)
                    setError(null)
                    if (nextCode.length === CODE_LENGTH && !verifyMutation.isPending) {
                      verifyMutation.mutate(nextCode)
                    }
                  }}
                  maxLength={CODE_LENGTH}
                  required
                  disabled={verifyMutation.isPending}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                {error && <p className="text-xs text-destructive">{error}</p>}
              </div>

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setEnableOpen(false)}
                  disabled={verifyMutation.isPending}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  onClick={() => verifyMutation.mutate(code)}
                  disabled={verifyMutation.isPending || code.length !== CODE_LENGTH}
                >
                  {verifyMutation.isPending ? "Verifying…" : "Verify and finish"}
                </Button>
              </DialogFooter>
            </>
          ) : (
            <DialogFooter>
              {enableMutation.isPending ? (
                <p className="text-xs text-muted-foreground">Setting up…</p>
              ) : null}
              {error && !enableMutation.isPending ? (
                <p className="text-xs text-destructive">{error}</p>
              ) : null}
              <Button
                type="button"
                variant="outline"
                onClick={() => setEnableOpen(false)}
                disabled={enableMutation.isPending}
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={() => enableMutation.mutate()}
                disabled={enableMutation.isPending}
              >
                Retry
              </Button>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>

      {/* Disable confirmation */}
      <Dialog open={disableOpen} onOpenChange={setDisableOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Turn off two-factor authentication?</DialogTitle>
            <DialogDescription>
              Your account will no longer require an authenticator code at sign-in.
            </DialogDescription>
          </DialogHeader>

          {error && <p className="text-xs text-destructive">{error}</p>}

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setDisableOpen(false)}
              disabled={disableMutation.isPending}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={() => disableMutation.mutate()}
              disabled={disableMutation.isPending}
            >
              {disableMutation.isPending ? "Turning off…" : "Turn off"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Regenerate recovery codes */}
      <Dialog open={regenerateOpen} onOpenChange={setRegenerateOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Regenerate recovery codes</DialogTitle>
            <DialogDescription>
              New single-use codes will be downloaded and your existing codes will stop working.
            </DialogDescription>
          </DialogHeader>

          {error && <p className="text-xs text-destructive">{error}</p>}

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setRegenerateOpen(false)}
              disabled={regenerateMutation.isPending}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={() => regenerateMutation.mutate()}
              disabled={regenerateMutation.isPending}
            >
              {regenerateMutation.isPending ? "Generating…" : "Regenerate"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
