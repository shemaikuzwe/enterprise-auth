"use client";

import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import { UserPageActions } from "./user-actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { authClient, type User } from "@/lib/auth-client";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function UserDetail({ userId }: { userId: string }) {
  const userQuery = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const { data, error } = await authClient.admin.getUser({ query: { id: userId } });
      if (error) throw new Error(error.message ?? "Failed to load user");
      return ((data as { user?: User } | null)?.user ?? data) as User;
    },
  });

  if (userQuery.isPending) {
    return (
      <div className="flex flex-col gap-4">
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-48 w-full" />
      </div>
    );
  }

  if (userQuery.isError || !userQuery.data) {
    return (
      <div className="flex flex-col gap-4">
        <Button variant="outline" size="sm" className="self-start" render={<Link href="/users" />}>
          <HugeiconsIcon icon={ArrowLeft01Icon} data-icon="inline-start" />
          Back to users
        </Button>
        <p className="text-sm text-destructive">
          {userQuery.error?.message ?? "User not found."}
        </p>
      </div>
    );
  }

  const user = userQuery.data;

  return (
    <>
      <Button variant="outline" size="sm" className="self-start" render={<Link href="/users" />}>
        <HugeiconsIcon icon={ArrowLeft01Icon} data-icon="inline-start" />
        Back to users
      </Button>

      <section className="flex items-center gap-4">
        <Avatar size="lg">
          <AvatarImage src={user.image ?? undefined} alt={user.name} />
          <AvatarFallback>{initials(user.name)}</AvatarFallback>
        </Avatar>
        <div className="flex min-w-0 flex-col gap-1">
          <h1 className="truncate text-lg font-semibold">{user.name}</h1>
          <p className="truncate text-xs text-muted-foreground">{user.email}</p>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="secondary" className="capitalize">
              {user.role ?? "user"}
            </Badge>
            {user.banned ? (
              <Badge variant="destructive">Banned</Badge>
            ) : (
              <Badge variant="outline">Active</Badge>
            )}
            {user.emailVerified ? (
              <Badge variant="outline">Verified</Badge>
            ) : (
              <Badge variant="ghost">Unverified</Badge>
            )}
          </div>
        </div>
      </section>

      <section className="flex flex-wrap gap-2">
        <UserPageActions user={user} />
      </section>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Details</CardTitle>
          <CardDescription>Account information for this user.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col divide-y text-sm">
          <div className="flex items-center justify-between gap-4 py-2.5 first:pt-0 last:pb-0">
            <span className="text-muted-foreground">Email</span>
            <span className="truncate font-medium">{user.email}</span>
          </div>
          <div className="flex items-center justify-between gap-4 py-2.5 first:pt-0 last:pb-0">
            <span className="text-muted-foreground">User ID</span>
            <span className="truncate font-mono text-xs">{user.id}</span>
          </div>
          <div className="flex items-center justify-between gap-4 py-2.5 first:pt-0 last:pb-0">
            <span className="text-muted-foreground">Created</span>
            <span className="font-medium">
              {new Date(user.createdAt).toLocaleString()}
            </span>
          </div>
          {user.banned && (
            <>
              <div className="flex items-center justify-between gap-4 py-2.5 first:pt-0 last:pb-0">
                <span className="text-muted-foreground">Ban reason</span>
                <span className="font-medium">{user.banReason ?? "—"}</span>
              </div>
              <div className="flex items-center justify-between gap-4 py-2.5 first:pt-0 last:pb-0">
                <span className="text-muted-foreground">Ban expires</span>
                <span className="font-medium">
                  {user.banExpires ? new Date(user.banExpires).toLocaleString() : "Never"}
                </span>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </>
  );
}
