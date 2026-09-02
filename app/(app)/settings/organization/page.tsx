"use client";

import { authClient } from "@/lib/auth-client";
import { GeneralSettings } from "@/components/organization/general-settings";
import { Invitations } from "@/components/organization/invitations";
import { Members } from "@/components/organization/members";
import { SsoProviders } from "@/components/organization/sso-providers";
import { useSession } from "@/components/session-provider";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function OrganizationSettingsPage() {
  const session = useSession();
  const activeOrganization = authClient.useActiveOrganization();
  const organization = activeOrganization.data;

  const role = organization?.members.find(
    (member) => member.userId === session?.user.id,
  )?.role;
  const roles = (role ?? "").split(",").map((entry) => entry.trim());
  const canManage = roles.includes("owner") || roles.includes("admin");
  const organizationId = organization?.id;

  return (
    <>
      <section className="flex items-center gap-3">
        <div className="flex min-w-0 flex-col gap-0.5">
          <h1 className="text-lg font-semibold">{organization?.name ?? "Organization"}</h1>
          <p className="text-xs text-muted-foreground">
            Members and single sign-on for this organization.
          </p>
        </div>
        {role && (
          <Badge variant="secondary" className="ml-auto capitalize">
            {role}
          </Badge>
        )}
      </section>

      {activeOrganization.isPending ? null : !organizationId ? (
        <p className="text-sm text-muted-foreground">
          You&apos;re not part of an organization yet.
        </p>
      ) : (
        <Tabs defaultValue="general">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="invitations">Invitations</TabsTrigger>
            {canManage && <TabsTrigger value="sso">SSO</TabsTrigger>}
          </TabsList>

          <TabsContent value="general">
            <GeneralSettings />
          </TabsContent>

          <TabsContent value="members">
            <Members organizationId={organizationId} />
          </TabsContent>

          <TabsContent value="invitations">
            <Invitations organizationId={organizationId} />
          </TabsContent>

          {canManage && (
            <TabsContent value="sso">
              <SsoProviders organizationId={organizationId} />
            </TabsContent>
          )}
        </Tabs>
      )}
    </>
  );
}
