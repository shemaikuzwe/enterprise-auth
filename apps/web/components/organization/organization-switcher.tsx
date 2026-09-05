"use client";

import {
  ArrowDown01Icon,
  ArrowUp01Icon,
  BuildingIcon,
  Loading03Icon,
  PlusSignIcon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { CreateOrganizationDialog } from "@/components/organization/create-organization-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { authClient } from "@/lib/auth-client";

type Organization = {
  id: string;
  name: string;
  logo?: string | null;
};

function OrgAvatar({ organization }: { organization?: Organization | null }) {
  return (
    <Avatar size="sm">
      {organization?.logo ? <AvatarImage src={organization.logo} alt="" /> : null}
      <AvatarFallback>
        {organization?.name ? organization.name.slice(0, 2).toUpperCase() : <HugeiconsIcon icon={BuildingIcon} />}
      </AvatarFallback>
    </Avatar>
  );
}

export function OrganizationSwitcher() {
  const router = useRouter();
  const organizations = authClient.useListOrganizations();
  const active = authClient.useActiveOrganization();
  const [createOpen, setCreateOpen] = useState(false);

  useEffect(() => {
    if (!active.isPending && !organizations.isPending && !active.data && organizations.data?.length) {
      void authClient.organization.setActive({ organizationId: organizations.data[0].id });
    }
  }, [active.isPending, active.data, organizations.isPending, organizations.data]);

  const switchMutation = useMutation({
    mutationFn: async (organizationId: string) => {
      const { error } = await authClient.organization.setActive({ organizationId });
      if (error) throw new Error(error.message ?? "Failed to switch organization");
    },
    onSuccess: async () => {
      organizations.refetch();
      await active.refetch();
      router.refresh();
    },
  });

  if (active.isPending) return <Skeleton className="h-8 w-40" />;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" className="h-8 gap-2 px-2" aria-label="Switch organization" />}>
          <OrgAvatar organization={active.data} />
          <span className="truncate font-medium">{active.data?.name ?? "No organization"}</span>
          <span className="flex shrink-0 flex-col text-muted-foreground" aria-hidden="true">
            <HugeiconsIcon icon={ArrowUp01Icon} strokeWidth={1.8} className="-mb-1 size-3.5" />
            <HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={1.8} className="size-3.5" />
          </span>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" sideOffset={8} className="w-64 p-1.5">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Organizations</DropdownMenuLabel>
            {organizations.isPending ? (
              <div className="flex items-center gap-2 px-2 py-3 text-xs text-muted-foreground">
                <HugeiconsIcon icon={Loading03Icon} className="size-3.5 animate-spin" />
                Loading organizations…
              </div>
            ) : (
              (organizations.data ?? []).map((organization) => {
                const isActive = organization.id === active.data?.id;
                const isSwitching =
                  switchMutation.isPending && switchMutation.variables === organization.id;
                return (
                  <DropdownMenuItem
                    key={organization.id}
                    disabled={switchMutation.isPending || isActive}
                    onClick={() => switchMutation.mutate(organization.id)}
                    className="min-h-11 gap-2 px-2"
                  >
                    {isSwitching ? (
                      <HugeiconsIcon icon={Loading03Icon} className="size-4 animate-spin" />
                    ) : (
                      <OrgAvatar organization={organization} />
                    )}
                    <span className="min-w-0 flex-1 truncate">{organization.name}</span>
                    {isActive && <HugeiconsIcon icon={Tick02Icon} strokeWidth={1.8} className="size-4 text-primary" />}
                  </DropdownMenuItem>
                );
              })
            )}
          </DropdownMenuGroup>

          <DropdownMenuSeparator className="my-1.5" />
          <DropdownMenuGroup>
            <DropdownMenuItem render={<Link href="/settings/organization" />}>
              Organization settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCreateOpen(true)} className="min-h-10 gap-2 text-primary focus:text-primary">
              <HugeiconsIcon icon={PlusSignIcon} strokeWidth={1.8} className="size-5" />
              New organization
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <CreateOrganizationDialog open={createOpen} onOpenChange={setCreateOpen} />
    </>
  );
}
