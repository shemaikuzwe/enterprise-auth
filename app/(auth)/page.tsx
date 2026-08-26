import { EmailSignInForm } from "@/components/auth/email-sign-in-form"
import { SsoSignInForm } from "@/components/auth/sso-sign-in-form"
import Link from "next/link"

import { OAuthButtons } from "@/components/oauth-buttons"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Sign in",
}

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Sign in</CardTitle>
        <CardDescription>
          Sign in to your account to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <OAuthButtons />

        <div className="flex items-center gap-3">
          <Separator className="flex-1" />
          <span className="text-xs text-muted-foreground">or continue with</span>
          <Separator className="flex-1" />
        </div>
        <EmailSignInForm />


        <SsoSignInForm />

        <p className="text-center text-xs text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline underline-offset-4 hover:text-foreground">
            Sign up
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
