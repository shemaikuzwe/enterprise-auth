"use client";

import { AppStoreIcon, Delete02Icon, Edit02Icon, Key01Icon, MoreHorizontalIcon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import {
  CreateDialog,
  DeleteDialog,
  EditDialog,
  RotateSecretDialog,
  type ApplicationActionDialog,
  type OAuthClientRow,
} from "./application-actions";
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
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { authClient } from "@/lib/auth-client";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function isPublicClient(client: OAuthClientRow) {
  return client.token_endpoint_auth_method === "none";
}

function ApplicationRowActions({ client }: { client: OAuthClientRow }) {
  const [dialog, setDialog] = useState<ApplicationActionDialog>(null);
  const change = (name: Exclude<ApplicationActionDialog, null>) => (open: boolean) =>
    setDialog(open ? name : null);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="ghost" size="icon-sm" aria-label={`Actions for ${client.client_name ?? client.client_id}`} />}
        >
          <HugeiconsIcon icon={MoreHorizontalIcon} className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-44">
          <DropdownMenuItem onClick={() => setDialog("edit")}>
            <HugeiconsIcon icon={Edit02Icon} />
            Edit application
          </DropdownMenuItem>
          {!isPublicClient(client) ? (
            <DropdownMenuItem onClick={() => setDialog("rotate")}>
              <HugeiconsIcon icon={Key01Icon} />
              Rotate secret
            </DropdownMenuItem>
          ) : null}
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive" onClick={() => setDialog("delete")}>
            <HugeiconsIcon icon={Delete02Icon} />
            Delete application
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <EditDialog client={client} open={dialog === "edit"} onOpenChange={change("edit")} />
      <RotateSecretDialog client={client} open={dialog === "rotate"} onOpenChange={change("rotate")} />
      <DeleteDialog client={client} open={dialog === "delete"} onOpenChange={change("delete")} />
    </>
  );
}

export function ApplicationsTable() {
  const queryClient = useQueryClient();
  const [createOpen, setCreateOpen] = useState(false);

  const clientsQuery = useQuery({
    queryKey: ["oauth-clients"],
    queryFn: async () => {
      const { data, error } = await authClient.oauth2.getClients();
      if (error) throw new Error(error.message ?? "Failed to load applications");
      return (data ?? []) as OAuthClientRow[];
    },
  });

  const clients = clientsQuery.data ?? [];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col gap-1">
            <CardTitle className="text-lg">Applications</CardTitle>
            <CardDescription>
              {clientsQuery.data
                ? `${clients.length} application${clients.length === 1 ? "" : "s"} total.`
                : "OAuth clients allowed to sign users in through this instance."}
            </CardDescription>
          </div>
          <Button size="sm" onClick={() => setCreateOpen(true)}>
            <HugeiconsIcon icon={PlusSignIcon} className="size-4" />
            New application
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {clientsQuery.isPending ? (
          <div className="flex flex-col gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="h-12 w-full" />
            ))}
          </div>
        ) : clientsQuery.isError ? (
          <p className="py-3 text-sm text-destructive">
            {clientsQuery.error.message}
          </p>
        ) : clients.length === 0 ? (
          <p className="py-3 text-sm text-muted-foreground">
            No applications yet. Create the first client to get started.
          </p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Client ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Redirect URIs</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.client_id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {client.logo_uri ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={client.logo_uri}
                          alt=""
                          className="size-8 shrink-0 rounded-full object-cover"
                        />
                      ) : (
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
                          {client.client_name ? (
                            initials(client.client_name)
                          ) : (
                            <HugeiconsIcon icon={AppStoreIcon} className="size-4" />
                          )}
                        </span>
                      )}
                      <span className="truncate text-sm font-medium">
                        {client.client_name ?? "Unnamed application"}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <code className="font-mono text-xs text-muted-foreground">
                      {client.client_id}
                    </code>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">
                      {isPublicClient(client) ? "public" : "confidential"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {client.redirect_uris?.length ?? 0}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {client.client_id_issued_at
                      ? new Date(client.client_id_issued_at * 1000).toLocaleDateString()
                      : "—"}
                  </TableCell>
                  <TableCell className="text-right">
                    <ApplicationRowActions client={client} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
      <CreateDialog
        open={createOpen}
        onOpenChange={setCreateOpen}
        onCreated={() => queryClient.invalidateQueries({ queryKey: ["oauth-clients"] })}
      />
    </Card>
  );
}
