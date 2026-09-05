"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { authClient } from "@/lib/auth-client";

type ConsentsResult = Awaited<ReturnType<typeof authClient.oauth2.getConsents>>;
type ConsentRow = NonNullable<ConsentsResult["data"]>[number];

function RevokeDialog({
  consent,
  appName,
  open,
  onOpenChange,
}: {
  consent: ConsentRow;
  appName: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const queryClient = useQueryClient();
  const revokeMutation = useMutation({
    mutationFn: async () => {
      const { error } = await authClient.oauth2.deleteConsent({ id: consent.id });
      if (error) throw new Error(error.message ?? "Failed to revoke access");
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["oauth-consents"] });
      onOpenChange(false);
    },
  });

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Revoke access for {appName}?</AlertDialogTitle>
          <AlertDialogDescription>
            {appName} will no longer be able to access your account. You can
            grant access again the next time you sign in.
          </AlertDialogDescription>
        </AlertDialogHeader>
        {revokeMutation.isError ? (
          <p className="text-xs text-destructive">{revokeMutation.error.message}</p>
        ) : null}
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={(event) => {
              event.preventDefault();
              revokeMutation.mutate();
            }}
            disabled={revokeMutation.isPending}
          >
            {revokeMutation.isPending ? "Revoking…" : "Revoke access"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function ConnectedApps() {
  const queryClient = useQueryClient();
  const [revoking, setRevoking] = useState<ConsentRow | null>(null);

  const consentsQuery = useQuery({
    queryKey: ["oauth-consents"],
    queryFn: async () => {
      const { data, error } = await authClient.oauth2.getConsents();
      if (error) throw new Error(error.message ?? "Failed to load connected apps");
      return (data ?? []) as ConsentRow[];
    },
  });

  const consents = consentsQuery.data ?? [];
  const clientIds = [...new Set(consents.map((consent) => consent.clientId))];

  const clientsQuery = useQuery({
    queryKey: ["oauth-consent-clients", clientIds],
    enabled: clientIds.length > 0,
    queryFn: async () => {
      const entries = await Promise.all(
        clientIds.map(async (clientId) => {
          const { data } = await authClient.oauth2.publicClient({
            query: { client_id: clientId },
          });
          return [clientId, data] as const;
        }),
      );
      return Object.fromEntries(entries) as Record<
        string,
        { client_name?: string | null; logo_uri?: string | null } | null
      >;
    },
  });

  async function refresh() {
    await queryClient.invalidateQueries({ queryKey: ["oauth-consents"] });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Connected apps</CardTitle>
        <CardDescription>
          Applications you have signed in to through this instance.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {consentsQuery.isPending ? (
          <>
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className="h-14 w-full" />
            ))}
          </>
        ) : consentsQuery.isError ? (
          <p className="py-3 text-sm text-destructive">
            {consentsQuery.error.message}
          </p>
        ) : consents.length === 0 ? (
          <p className="py-3 text-sm text-muted-foreground">
            No connected apps. Apps you approve will show up here.
          </p>
        ) : (
          consents.map((consent) => {
            const client = clientsQuery.data?.[consent.clientId];
            const appName = client?.client_name || "Application";
            return (
              <div
                key={consent.id}
                className="flex items-center gap-3 rounded-lg border p-3"
              >
                {client?.logo_uri ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={client.logo_uri}
                    alt=""
                    className="size-8 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
                    {appName.slice(0, 2).toUpperCase()}
                  </span>
                )}
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate text-sm font-medium">{appName}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {(consent.scopes ?? []).join(", ")}
                    {consent.createdAt
                      ? ` · since ${new Date(consent.createdAt).toLocaleDateString()}`
                      : ""}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="shrink-0"
                  onClick={() => setRevoking(consent)}
                >
                  Revoke
                </Button>
              </div>
            );
          })
        )}
        {revoking ? (
          <RevokeDialog
            consent={revoking}
            appName={
              clientsQuery.data?.[revoking.clientId]?.client_name || "Application"
            }
            open={!!revoking}
            onOpenChange={(open) => {
              if (!open) {
                setRevoking(null);
                void refresh();
              }
            }}
          />
        ) : null}
      </CardContent>
    </Card>
  );
}
