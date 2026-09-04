"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkBadge02Icon } from "@hugeicons/core-free-icons";

import { Account } from "@/components/account";
import { PasskeySettings } from "@/components/auth/passkey-settings";
import { TwoFactorSettings } from "@/components/auth/two-factor-settings";
import { ProfileForm } from "@/components/settings/profile-form";
import { Session } from "@/components/session";
import { useSession } from "@/components/session-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AccountSettingsPage() {
  const session = useSession();

  const initials = session?.user.name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .join("")
    .toUpperCase();

  return (
    <>
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
            {session?.user && new Date(session.user.createdAt).toLocaleDateString()}
          </p>
        </div>
      </section>

      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
          <TabsTrigger value="accounts">Accounts</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <ProfileForm />
        </TabsContent>

        <TabsContent value="sessions">
          <Session />
        </TabsContent>

        <TabsContent value="accounts">
          <Account />
        </TabsContent>

        <TabsContent value="security" className="flex flex-col gap-8">
          <TwoFactorSettings />
          <PasskeySettings />
        </TabsContent>
      </Tabs>
    </>
  );
}
