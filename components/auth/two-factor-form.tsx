"use client";

import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeftIcon, ShieldKeyIcon } from "@hugeicons/core-free-icons"
import { useMutation } from "@tanstack/react-query"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import { twoFactor } from "@/lib/auth-client"

const CODE_LENGTH = 6

export function TwoFactorForm({ redirect }: { redirect: string }) {
  const router = useRouter()
  const [mode, setMode] = useState<"totp" | "backup">("totp")
  const [code, setCode] = useState("")
  const [error, setError] = useState<string | null>(null)

  function switchMode(nextMode: "totp" | "backup") {
    setMode(nextMode)
    setCode("")
    setError(null)
  }

  const verifyMutation = useMutation({
    mutationFn: async (nextCode: string) => {
      const { error } =
        mode === "totp"
          ? await twoFactor.verifyTotp({ code: nextCode })
          : await twoFactor.verifyBackupCode({ code: nextCode })
      if (error) {
        throw new Error(
          mode === "totp"
            ? error.message ?? "That code is invalid or expired. Try again."
            : error.message ?? "That backup code is invalid or already used.",
        )
      }
    },
    onSuccess: () => {
      router.push(redirect)
      router.refresh()
    },
    onError: (mutationError: Error) => {
      setCode("")
      setError(mutationError.message)
    },
  })

  function verify(nextCode: string) {
    if (verifyMutation.isPending || !nextCode) return
    setError(null)
    verifyMutation.mutate(nextCode)
  }
  return (
    <Card>
      <CardHeader>
        <Button
          variant="ghost"
          size="icon-sm"
          className="-ml-1.5 -mb-1"
          render={<Link href="/signin" />}
        >
          <HugeiconsIcon icon={ArrowLeftIcon} />
          <span className="sr-only">Back to sign in</span>
        </Button>
        <CardTitle className="flex items-center gap-2 text-lg">
          <HugeiconsIcon icon={ShieldKeyIcon} className="size-4" />
          Two-factor verification
        </CardTitle>
        <CardDescription>
          {mode === "totp"
            ? "Enter the 6-digit code from your authenticator app to continue"
            : "Enter one of your backup codes to continue"}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <form
          onSubmit={(event) => {
            event.preventDefault()
            verify(code)
          }}
          className="flex flex-col gap-4"
        >
          {mode === "totp" ? (
            <div className="flex w-full flex-col gap-1.5">
              <InputOTP
                id="code"
                value={code}
                onChange={(nextCode) => {
                  setCode(nextCode)
                  setError(null)
                  if (nextCode.length === CODE_LENGTH) verify(nextCode)
                }}
                maxLength={CODE_LENGTH}
                pattern={REGEXP_ONLY_DIGITS}
                required
                disabled={verifyMutation.isPending}
                containerClassName="w-full gap-2"
              >
                <InputOTPGroup className="flex-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <InputOTPSlot key={i} index={i} className="size-10 flex-1 text-lg" />
                  ))}
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup className="flex-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <InputOTPSlot key={i + 3} index={i + 3} className="size-10 flex-1 text-lg" />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>
          ) : (
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="code">Backup code</Label>
              <Input
                id="code"
                value={code}
                onChange={(event) => {
                  setCode(event.target.value)
                  setError(null)
                }}
                placeholder="xxxxx-xxxxx"
                autoComplete="one-time-code"
                required
                disabled={verifyMutation.isPending}
              />
            </div>
          )}

          <Button type="submit" size="lg" className="w-full" disabled={verifyMutation.isPending}>
            Verify and continue
          </Button>
          {error && <p className="text-xs text-destructive">{error}</p>}
        </form>

        <div className="text-center text-xs text-muted-foreground">
          Lost access?{" "}
          <button
            type="button"
            onClick={() => switchMode(mode === "totp" ? "backup" : "totp")}
            className="underline underline-offset-4 hover:text-foreground"
          >
            {mode === "totp" ? "Use a backup code" : "Use your authenticator app"}
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
