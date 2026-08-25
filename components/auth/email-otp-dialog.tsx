"use client";

import { HugeiconsIcon } from "@hugeicons/react"
import { MailIcon } from "@hugeicons/core-free-icons"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { emailOtp, signIn } from "@/lib/auth-client"

const CODE_LENGTH = 6

export function EmailOtpDialog({
  email,
  open,
  onOpenChange,
}: {
  email: string
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const router = useRouter()
  const [code, setCode] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [resendError, setResendError] = useState<string | null>(null)
  const [verifying, setVerifying] = useState(false)
  const [resending, setResending] = useState(false)

  async function verify(nextCode: string) {
    if (verifying) return
    setError(null)
    setResendError(null)
    setVerifying(true)
    try {
      const { error } = await signIn.emailOtp({ email, otp: nextCode })
      if (error) {
        setCode("")
        setError("That code is invalid or expired. Request a new code and try again.")
        return
      }
      router.push("/profile")
    } finally {
      setVerifying(false)
    }
  }

  function handleCodeChange(nextCode: string) {
    setCode(nextCode)
    setError(null)

    if (nextCode.length === CODE_LENGTH) {
      void verify(nextCode)
    }
  }

  async function resend() {
    setResendError(null)
    setError(null)
    setCode("")
    setResending(true)
    try {
      const { error } = await emailOtp.sendVerificationOtp({
        email,
        type: "sign-in",
      })
      if (error) {
        setResendError("Could not resend the code. Try again.")
      }
    } finally {
      setResending(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter your code</DialogTitle>
          <DialogDescription>
            We sent a 6-digit code to{" "}
            <span className="font-medium text-foreground">{email}</span>. It expires in 5 minutes.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            void verify(code)
          }}
          className="flex flex-col gap-4"
        >
          <InputOTP
            id="code"
            name="code"
            maxLength={CODE_LENGTH}
            required
            value={code}
            onChange={handleCodeChange}
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

          <Button type="submit" size="lg" className="w-full" disabled={verifying}>
            <HugeiconsIcon icon={MailIcon} data-icon="inline-start" />
            {verifying ? "Verifying…" : "Verify and continue"}
          </Button>
          {error && <p className="text-center text-xs text-destructive">{error}</p>}
        </form>

        <p className="text-center text-xs text-muted-foreground">
          Didn&apos;t get a code?{" "}
          <button
            type="button"
            onClick={() => void resend()}
            disabled={resending}
            className="underline underline-offset-4 hover:text-foreground disabled:opacity-50"
          >
            {resending ? "Resending…" : "Resend code"}
          </button>
          {resendError && <span className="block text-destructive">{resendError}</span>}
        </p>
      </DialogContent>
    </Dialog>
  )
}
