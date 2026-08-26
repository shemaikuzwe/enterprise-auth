"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { ShieldKeyIcon } from "@hugeicons/core-free-icons"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"

import { Members } from "@/components/organization/members"
import { useSession } from "@/components/session-provider"
import { OrganizationSwitcher } from "@/components/organization/organization-switcher"
import { SsoProviders } from "@/components/organization/sso-providers"
import { ThemeToggle } from "@/components/theme-toggle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { authClient } from "@/lib/auth-client"

export default function OrganizationPage() {
  const session = useSession()
  const activeOrganizationQuery = useQuery({
    queryKey: ["active-organization"],
    queryFn: async () => {
      const { data, error } = await authClient.organization.getFullOrganization()
      if (error) throw error
      return data
    },
  })

  const activeOrganization = activeOrganizationQuery.data
  const role = activeOrganization?.members.find(
    (member) => member.userId === session?.user.id,
  )?.role
  const canManage = role === "owner" || role === "admin"

  return (
    <div className="flex min-h-svh flex-col bg-background">
      <header className="border-b">
        <div className="mx-auto flex h-14 w-full max-w-2xl items-center justify-between px-6">
          <Link href="/profile" className="flex items-center gap-2 font-medium">
            <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <HugeiconsIcon icon={ShieldKeyIcon} className="size-4" />
            </span>
            Acme Inc.
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-6 py-10">
        <section className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold">Organizations</h1>
          <OrganizationSwitcher activeId={activeOrganization?.id} />
        </section>

        {activeOrganization ? (
          <Tabs defaultValue="members">
            <TabsList>
              <TabsTrigger value="members">Members</TabsTrigger>
              {canManage && <TabsTrigger value="sso">Single sign-on</TabsTrigger>}
            </TabsList>

            <TabsContent value="members">
              <Members organizationId={activeOrganization.id} />
            </TabsContent>

            {canManage && (
              <TabsContent value="sso">
                <SsoProviders organizationId={activeOrganization.id} />
              </TabsContent>
            )}
          </Tabs>
        ) : (
          <p className="text-sm text-muted-foreground">
            Create an organization to invite members and connect an identity provider.
          </p>
        )}
      </main>
    </div>
  )
}
