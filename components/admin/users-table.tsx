"use client";

import {
  Delete02Icon,
  EyeIcon,
  MoreHorizontalIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  BanDialog,
  DeleteDialog,
  UnbanDialog,
  type UserActionDialog,
} from "./user-actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { authClient, type User } from "@/lib/auth-client";

const PAGE_SIZE = 15;

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function UserRowActions({ user }: { user: User }) {
  const [dialog, setDialog] = useState<UserActionDialog>(null);
  const change = (name: Exclude<UserActionDialog, null>) => (open: boolean) =>
    setDialog(open ? name : null);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="ghost" size="icon-sm" aria-label={`Actions for ${user.email}`} />}
        >
          <HugeiconsIcon icon={MoreHorizontalIcon} className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-44">
          <DropdownMenuItem render={<Link href={`/users/${user.id}`} />}>
            <HugeiconsIcon icon={EyeIcon} />
            View details
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive" onClick={() => setDialog("delete")}>
            <HugeiconsIcon icon={Delete02Icon} />
            Delete user
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <BanDialog user={user} open={dialog === "ban"} onOpenChange={change("ban")} />
      <UnbanDialog user={user} open={dialog === "unban"} onOpenChange={change("unban")} />
      <DeleteDialog user={user} open={dialog === "delete"} onOpenChange={change("delete")} />
    </>
  );
}

export function UsersTable() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [offset, setOffset] = useState(0);

  const usersQuery = useQuery({
    queryKey: ["users", debouncedSearch, offset],
    queryFn: async () => {
      const { data, error } = await authClient.admin.listUsers({
        query: {
          limit: PAGE_SIZE,
          offset,
          ...(debouncedSearch
            ? { searchValue: debouncedSearch, searchField: "email" as const }
            : {}),
        },
      });
      if (error) throw new Error(error.message ?? "Failed to load users");
      return data;
    },
  });

  const users = usersQuery.data?.users ?? [];
  const total = usersQuery.data?.total ?? 0;

  const onSearchChange = (value: string) => {
    setSearch(value);
    setOffset(0);
    window.clearTimeout((onSearchChange as { timer?: number }).timer);
    (onSearchChange as { timer?: number }).timer = window.setTimeout(() => {
      setDebouncedSearch(value.trim());
    }, 300);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Users</CardTitle>
        <CardDescription>
          {usersQuery.data ? `${total} user${total === 1 ? "" : "s"} total.` : "All users in this instance."}
        </CardDescription>
        <Input
          id="users-search"
          placeholder="Search by email…"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          className="max-w-sm"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {usersQuery.isPending ? (
          <div className="flex flex-col gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="h-12 w-full" />
            ))}
          </div>
        ) : usersQuery.isError ? (
          <p className="py-3 text-sm text-destructive">
            {usersQuery.error.message}
          </p>
        ) : users.length === 0 ? (
          <p className="py-3 text-sm text-muted-foreground">No users found.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.id}
                  className="cursor-pointer"
                  onClick={() => router.push(`/users/${user.id}`)}
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
                        {initials(user.name)}
                      </span>
                      <div className="flex min-w-0 flex-col">
                        <span className="truncate text-sm font-medium">{user.name}</span>
                        <span className="truncate text-xs text-muted-foreground">
                          {user.email}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="capitalize">
                      {user.role ?? "user"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1.5">
                      {user.banned ? (
                        <Badge variant="destructive">Banned</Badge>
                      ) : (
                        <Badge variant="outline">Active</Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right" onClick={(event) => event.stopPropagation()}>
                    <UserRowActions user={user as User} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}

        {total > PAGE_SIZE && (
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              Showing {offset + 1}–{Math.min(offset + PAGE_SIZE, total)} of {total}
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={offset === 0 || usersQuery.isPending}
                onClick={() => setOffset((value) => Math.max(0, value - PAGE_SIZE))}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={offset + PAGE_SIZE >= total || usersQuery.isPending}
                onClick={() => setOffset((value) => value + PAGE_SIZE)}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
