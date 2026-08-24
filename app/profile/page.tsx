import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkBadge02Icon,
  GithubIcon,
  GoogleIcon,
  LaptopIcon,
  LogoutIcon,
  MonitorIcon,
  ShieldKeyIcon,
  SmartphoneIcon,
} from "@hugeicons/core-free-icons"
import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Profile",
}

// TODO(better-auth): replace with authClient.useSession() → session.user
const user = {
  name: "Jane Doe",
  email: "jane@acme.inc",
  image: "https://i.pravatar.cc/150?u=jane-doe",
  emailVerified: true,
  createdAt: new Date("2026-01-15"),
}

const initials = user.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .toUpperCase()

// TODO(better-auth): replace with authClient.listSessions()
const sessions = [
  {
    id: "1",
    device: LaptopIcon,
    browser: "Chrome · macOS",
    ip: "102.89.44.71",
    location: "Nairobi, Kenya",
    lastActive: "Active now",
    current: true,
  },
  {
    id: "2",
    device: SmartphoneIcon,
    browser: "Safari · iOS",
    ip: "41.90.12.4",
    location: "Mombasa, Kenya",
    lastActive: "2 hours ago",
    current: false,
  },
  {
    id: "3",
    device: MonitorIcon,
    browser: "Firefox · Windows",
    ip: "197.232.60.5",
    location: "Berlin, Germany",
    lastActive: "3 days ago",
    current: false,
  },
]

// TODO(better-auth): replace with authClient.listAccounts() keyed by provider
const connectedAccounts = [
  {
    provider: "google",
    name: "Google",
    icon: GoogleIcon,
    email: null,
  },
  {
    provider: "github",
    name: "GitHub",
    icon: GithubIcon,
    email: user.email,
  },
]

export default function ProfilePage() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <header className="border-b">
        <div className="mx-auto flex h-14 w-full max-w-2xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <HugeiconsIcon icon={ShieldKeyIcon} className="size-4" />
            </span>
            Acme Inc.
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-6 py-10">
        <section className="flex items-center gap-4">
          <Avatar size="lg">
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col gap-0.5">
            <h1 className="text-lg font-semibold">{user.name}</h1>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="truncate">{user.email}</span>
              {user.emailVerified && (
                <Badge variant="secondary">
                  <HugeiconsIcon icon={CheckmarkBadge02Icon} />
                  Verified
                </Badge>
              )}
            </p>
            <p className="text-xs text-muted-foreground">
              Member since{" "}
              {new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(
                user.createdAt
              )}
            </p>
          </div>
          {/* TODO(better-auth): authClient.signOut(), then redirect to "/" */}
          <Button variant="ghost" size="sm" type="button" className="ml-auto">
            <HugeiconsIcon icon={LogoutIcon} data-icon="inline-start" />
            Sign out
          </Button>
        </section>

        <Tabs defaultValue="sessions">
          <TabsList>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="accounts">Accounts</TabsTrigger>
          </TabsList>

          <TabsContent value="sessions">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Active sessions</CardTitle>
                <CardDescription>
                  Devices currently signed in to your account. Revoke any you
                  don&apos;t recognize.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-col divide-y">
                  {sessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
                        <HugeiconsIcon icon={session.device} className="size-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="flex items-center gap-2 font-medium">
                          {session.browser}
                          {session.current && (
                            <Badge variant="secondary">This device</Badge>
                          )}
                        </p>
                        <p className="truncate text-muted-foreground">
                          {session.ip} · {session.location}
                        </p>
                      </div>
                      <div className="flex shrink-0 flex-col items-end gap-1.5">
                        <span className="text-xs text-muted-foreground">
                          {session.lastActive}
                        </span>
                        {!session.current && (
                          // TODO(better-auth): authClient.revokeSession({ token: session.token })
                          <Button variant="destructive" size="xs" type="button">
                            Revoke
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* TODO(better-auth): authClient.revokeSessions() revokes all but the current one */}
                <Button variant="destructive" size="sm" type="button" className="self-start">
                  Sign out other devices
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="accounts">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Connected accounts</CardTitle>
                <CardDescription>
                  Link providers to sign in with one click. Unlink any you no
                  longer use.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col divide-y">
                {connectedAccounts.map((account) => (
                  <div
                    key={account.provider}
                    className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
                      <HugeiconsIcon icon={account.icon} className="size-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium">{account.name}</p>
                      <p className="truncate text-muted-foreground">
                        {account.email ?? "Not connected"}
                      </p>
                    </div>
                    {account.email ? (
                      // TODO(better-auth): authClient.unlinkAccount({ provider: account.provider })
                      <Button variant="destructive" size="xs" type="button">
                        Disconnect
                      </Button>
                    ) : (
                      // TODO(better-auth): authClient.linkSocial({ provider: account.provider, callbackURL: "/profile" })
                      <Button variant="outline" size="sm" type="button">
                        Connect
                      </Button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
