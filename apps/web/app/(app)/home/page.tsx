import { HugeiconsIcon } from "@hugeicons/react";
import {
  BuildingIcon,
  Settings01Icon,
  ShieldUserIcon,
  UsersIcon,
} from "@hugeicons/core-free-icons";
import { headers } from "next/headers";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getSession } from "@/lib/auth-client";
import { auth } from "@/lib/auth";

export const metadata = { title: "Home" };

export default async function HomePage() {
  const requestHeaders = await headers();
  const { data: session } = await getSession({
    fetchOptions: { headers: requestHeaders },
  });
  const organization = await auth.api
    .getFullOrganization({ headers: requestHeaders })
    .catch(() => null);

  return (
    <>
      <section className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">
          Welcome back{session?.user.name ? `, ${session.user.name.split(" ")[0]}` : ""}
        </h1>
        <p className="text-sm text-muted-foreground">
          You&apos;re viewing {organization?.name ?? "your workspace"}.
        </p>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HugeiconsIcon icon={BuildingIcon} className="size-4 text-muted-foreground" />
              Organization
            </CardTitle>
            <CardDescription>
              {organization
                ? "Billing, SSO and members management."
                : "You're not part of an organization yet."}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <p className="text-sm font-medium">{organization?.name ?? "—"}</p>
            <Button variant="outline" size="sm" className="self-start" render={<Link href="/settings/organization" />}>
              <HugeiconsIcon icon={Settings01Icon} data-icon="inline-start" />
              Organization settings
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HugeiconsIcon icon={ShieldUserIcon} className="size-4 text-muted-foreground" />
              Account
            </CardTitle>
            <CardDescription>Manage your profile and security settings.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <p className="text-sm font-medium">{session?.user.name ?? session?.user.email ?? "—"}</p>
            <Button variant="outline" size="sm" className="self-start" render={<Link href="/settings/account" />}>
              <HugeiconsIcon icon={ShieldUserIcon} data-icon="inline-start" />
              Account settings
            </Button>
          </CardContent>
        </Card>

        {(session?.user as { role?: string | null })?.role === "admin" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HugeiconsIcon icon={UsersIcon} className="size-4 text-muted-foreground" />
                User Management
              </CardTitle>
              {/*<CardDescription>Se.</CardDescription>*/}
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <p className="text-sm font-medium">All users</p>
              <Button variant="outline" size="sm" className="self-start" render={<Link href="/users" />}>
                <HugeiconsIcon icon={UsersIcon} data-icon="inline-start" />
                Manage users
              </Button>
            </CardContent>
          </Card>
        )}
      </section>
    </>
  );
}
