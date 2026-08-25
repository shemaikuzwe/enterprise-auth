import { EmailSignInForm } from "@/components/auth/email-sign-in-form"
import Link from "next/link"

import { HugeiconsIcon } from "@hugeicons/react"
import { GlobeIcon } from "@hugeicons/core-free-icons"
import { OAuthButtons } from "@/components/oauth-buttons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
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


        <div className="rounded-md border border-dashed border-border bg-muted/40 p-3 text-xs text-muted-foreground">
          <p className="mb-1 flex items-center gap-1.5 font-medium text-foreground">
            <HugeiconsIcon icon={GlobeIcon} className="size-3.5" />
            Single sign-on (SSO)
          </p>
          <p className="mb-2.5">
            Managed by your organization. Enter your work email and we&apos;ll
            route you to your identity provider.
          </p>
          {/* TODO(better-auth): sso plugin — authClient.sso.provision or
              discover tenant by email domain, then redirect to IdP */}
          <div className="flex gap-2">
            <Input
              type="email"
              name="sso-email"
              placeholder="you@company.com"
              autoComplete="email"
              className="h-6 bg-background"
            />
            <Button variant="secondary" size="sm" type="button">
              Continue
            </Button>
          </div>
        </div>

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
