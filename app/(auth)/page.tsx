import { HugeiconsIcon } from "@hugeicons/react"
import { GithubIcon, GlobeIcon, GoogleIcon, MailIcon } from "@hugeicons/core-free-icons"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Sign in",
}

// TODO(better-auth): replace with real provider ids/config from authClient
const oauthProviders = [
  { id: "google", name: "Google", icon: GoogleIcon },
  { id: "github", name: "GitHub", icon: GithubIcon },
] as const

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
        <div className="grid grid-cols-2 gap-2">
          {oauthProviders.map((provider) => (
            <Button key={provider.id} variant="outline" size="lg" type="button">
              <HugeiconsIcon icon={provider.icon} data-icon="inline-start" />
              {provider.name}
              {/* TODO(better-auth): authClient.signIn.social({ provider: "..." }) */}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Separator className="flex-1" />
          <span className="text-xs text-muted-foreground">or continue with</span>
          <Separator className="flex-1" />
        </div>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            {/* TODO(better-auth): passwordless — authClient.signIn.emailOtp({ email })
                or magicLink plugin: authClient.signIn.magicLink({ email }) */}
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
              autoComplete="email"
              required
            />
          </div>
          {/* TODO(better-auth): submit sends an OTP code to the email above,
              then redirect the user to /two-factor?email=... to enter it */}
          <Button type="submit" size="lg" className="w-full">
            <HugeiconsIcon icon={MailIcon} data-icon="inline-start" />
            Continue with email
          </Button>
        </form>

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
