"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkBadge02Icon,
  LogoutIcon,
  ShieldKeyIcon,
} from "@hugeicons/core-free-icons"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"

import { Account } from "@/components/account"
import { Session } from "@/components/session"
import { TwoFactorSettings } from "@/components/auth/two-factor-settings"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { authClient } from "@/lib/auth-client"
import { useSession } from "@/components/session-provider"


export default function ProfilePage() {
  const router = useRouter()
  const session = useSession()

  const signOutMutation = useMutation({
    mutationFn: () => authClient.signOut(),
    onSuccess: () => {
      router.replace("/")
      router.refresh()
    },
  })

  const initials = session?.user.name.split(" ").map((part) => part[0]).join("").toUpperCase();

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
            <AvatarImage src={session?.user.image ?? undefined} alt={session?.user.name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col gap-0.5">
            <h1 className="text-lg font-semibold">{session?.user.name}</h1>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="truncate">{session?.user.email}</span>
              {session?.user.emailVerified && (
                <Badge variant="secondary">
                  <HugeiconsIcon icon={CheckmarkBadge02Icon} />
                  Verified
                </Badge>
              )}
            </p>
            <p className="text-xs text-muted-foreground">
              Member since{" "}
              {session?.user && (
                 new Date(session.user.createdAt).toLocaleDateString()
              )}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            type="button"
            className="ml-auto"
            disabled={signOutMutation.isPending}
            onClick={() => signOutMutation.mutate()}
          >
            <HugeiconsIcon icon={LogoutIcon} data-icon="inline-start" />
            Sign out
          </Button>
        </section>

        <Tabs defaultValue="sessions">
          <TabsList>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="accounts">Accounts</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="sessions">
            <Session />
          </TabsContent>

          <TabsContent value="accounts">
            <Account />
          </TabsContent>

          <TabsContent value="security">
            <TwoFactorSettings />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
