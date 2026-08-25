"use client";

import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeftIcon, ShieldKeyIcon } from "@hugeicons/core-free-icons"
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
import { twoFactor } from "@/lib/auth-client"

const CODE_LENGTH = 6

export function TwoFactorForm() {
  const router = useRouter()
  const [mode, setMode] = useState<"totp" | "backup">("totp")
  const [code, setCode] = useState("")
  const [trustDevice, setTrustDevice] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [verifying, setVerifying] = useState(false)

  function switchMode(nextMode: "totp" | "backup") {
    setMode(nextMode)
    setCode("")
    setError(null)
  }

  async function verify(nextCode: string) {
    if (verifying || !nextCode) return
    setError(null)
    setVerifying(true)
    try {
      const { error } =
        mode === "totp"
          ? await twoFactor.verifyTotp({ code: nextCode, trustDevice })
          : await twoFactor.verifyBackupCode({ code: nextCode, trustDevice })
      if (error) {
        setCode("")
        setError(
          mode === "totp"
            ? "That code is invalid or expired. Try again."
            : "That backup code is invalid or already used.",
        )
        return
      }
      router.push("/profile")
      router.refresh()
    } finally {
      setVerifying(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <Button
          variant="ghost"
          size="icon-sm"
          className="-ml-1.5 -mb-1"
          render={<Link href="/" />}
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
            void verify(code)
          }}
          className="flex flex-col gap-4"
        >
          {mode === "totp" ? (
            <div className="flex flex-col items-start gap-1.5">
              <InputOTP
                id="code"
                value={code}
                onChange={(nextCode) => {
                  setCode(nextCode)
                  setError(null)
                  if (nextCode.length === CODE_LENGTH) void verify(nextCode)
                }}
                maxLength={CODE_LENGTH}
                required
                disabled={verifying}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
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
                disabled={verifying}
              />
            </div>
          )}

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Checkbox
              id="trust-device"
              checked={trustDevice}
              onCheckedChange={(checked) => setTrustDevice(checked === true)}
            />
            <Label htmlFor="trust-device" className="font-normal">
              Trust this device for 30 days
            </Label>
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={verifying}>
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
