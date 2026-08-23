import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeftIcon, ShieldKeyIcon } from "@hugeicons/core-free-icons"
import Link from "next/link"

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
import { Label } from "@/components/ui/label"

export const metadata = {
  title: "Two-factor verification",
}

export default function TwoFactorPage() {
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
          {/* TODO(better-auth): go back cancels the pending challenge */}
        </Button>
        <CardTitle className="flex items-center gap-2 text-lg">
          <HugeiconsIcon icon={ShieldKeyIcon} className="size-4" />
          Two-factor verification
        </CardTitle>
        <CardDescription>
          Enter the 6-digit code from your authenticator app to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col items-start gap-1.5">
            {/* TODO(better-auth): authClient.twoFactor.verify({ code }) */}
            <InputOTP id="code" name="code" maxLength={6} required>
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

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Checkbox id="trust-device" name="trustDevice" />
            {/* TODO(better-auth): persist trusted device so 2FA is skipped next time */}
            <Label htmlFor="trust-device" className="font-normal">
              Trust this device for 30 days
            </Label>
          </div>

          <Button type="submit" size="lg" className="w-full">
            Verify and continue
          </Button>
        </form>

        <div className="flex flex-col gap-1.5 text-center text-xs text-muted-foreground">
          <p>
            Lost access?{" "}
            {/* TODO(better-auth): swap to backup-code entry —
                authClient.twoFactor.verifyBackupCode({ code }) */}
            <Link
              href="#"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Use a backup code
            </Link>
          </p>
          <p>
            Didn&apos;t get a code?{" "}
            {/* TODO(better-auth): resend email OTP — authClient.signIn.emailOtp({ email }) */}
            <Link
              href="#"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Resend code
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
