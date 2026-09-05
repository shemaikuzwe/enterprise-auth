"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import { useSession } from "@/components/session-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import { authClient } from "@/lib/auth-client";
import { SCOPE_DESCRIPTIONS } from "@/lib/oauth-scopes";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function ConsentPage() {
  const params = useSearchParams();
  const session = useSession();
  const clientId = params.get("client_id");
  const scopes = (params.get("scope") ?? "").split(" ").filter(Boolean);
  const claims = params.get("claims");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clientQuery = useQuery({
    queryKey: ["oauth-client", clientId],
    enabled: !!clientId,
    queryFn: async () => {
      const { data, error } = await authClient.oauth2.publicClient({
        query: { client_id: clientId! },
      });
      if (error) throw new Error(error.message ?? "Could not load application");
      return data;
    },
  });

  const consent = useMutation({
    mutationFn: async (accept: boolean) => {
      const { data, error } = await authClient.oauth2.consent({
        accept,
        claims: claims ? JSON.parse(claims) : undefined,
      });
      if (error) throw new Error(error.message ?? "Could not record consent");
      return data;
    },
    onSuccess: (data) => {
      if (data && typeof data === "object" && "url" in data && typeof data.url === "string") {
        window.location.href = data.url;
      }
    },
    onError: (mutationError: Error) => {
      setError(mutationError.message);
    },
  });

  if (!clientId) {
    return (
      <section className="flex flex-col gap-8">
        <p className="text-center text-xs text-destructive" role="alert">
          This consent request is missing its application.
        </p>
      </section>
    );
  }

  if (clientQuery.isPending) {
    return (
      <section className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-3">
          <Skeleton className="size-12 rounded-xl" />
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-4 w-64" />
        </div>
        <Skeleton className="h-32 w-full" />
      </section>
    );
  }

  if (clientQuery.isError || !clientQuery.data) {
    return (
      <section className="flex flex-col gap-8">
        <p className="text-center text-xs text-destructive" role="alert">
          {clientQuery.error?.message ?? "Could not load application."}
        </p>
      </section>
    );
  }

  const client = clientQuery.data;
  const clientName = client.client_name || "This application";
  const hasPolicy = !!(client.tos_uri || client.policy_uri);
  const canContinue = !consent.isPending && (!hasPolicy || agreed);

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-3 text-center">
        {client.logo_uri ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={client.logo_uri}
            alt=""
            className="size-12 rounded-xl object-cover"
          />
        ) : (
          <span className="flex size-12 items-center justify-center rounded-xl bg-muted text-lg font-semibold text-muted-foreground">
            {initials(clientName)}
          </span>
        )}
        <div className="space-y-1">
          <h1 className="text-xl font-semibold tracking-tight">
            {clientName} would like to access your Acme Inc. account
          </h1>
        </div>
      </div>

      <Card>
        <CardContent className="flex items-center gap-3">
          <Avatar>
            <AvatarImage
              src={session?.user.image ?? undefined}
              alt={session?.user.name ?? ""}
            />
            <AvatarFallback>
              {session?.user.name ? initials(session.user.name) : "?"}
            </AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-1 flex-col">
            <span className="truncate text-sm font-medium">
              {session?.user.name}
            </span>
            <span className="truncate text-xs text-muted-foreground">
              {session?.user.email}
            </span>
          </div>
          <Link
            href="/signin?prompt=login"
            className="shrink-0 text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Switch account
          </Link>
        </CardContent>
      </Card>

      <div className="rounded-lg border p-4">
        <p className="text-sm font-medium">{clientName} can view information</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {scopes.map((scope) => (
            <li key={scope}>
              {SCOPE_DESCRIPTIONS[scope] ?? scope}
            </li>
          ))}
        </ul>
      </div>

      {hasPolicy ? (
        <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-muted-foreground">
          <Checkbox
            checked={agreed}
            onCheckedChange={(checked) => setAgreed(checked === true)}
            className="mt-0.5"
          />
          <span>
            I agree to {clientName}&apos;s{" "}
            {client.tos_uri ? (
              <Link
                href={client.tos_uri}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Terms of Service
              </Link>
            ) : null}
            {client.tos_uri && client.policy_uri ? " and " : null}
            {client.policy_uri ? (
              <Link
                href={client.policy_uri}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Privacy Policy
              </Link>
            ) : null}
            .
          </span>
        </label>
      ) : null}

      <div className="flex gap-3">
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="flex-1"
          disabled={consent.isPending}
          onClick={() => {
            setError(null);
            consent.mutate(false);
          }}
        >
          Cancel
        </Button>
        <Button
          type="button"
          size="lg"
          className="flex-1"
          disabled={!canContinue}
          onClick={() => {
            setError(null);
            consent.mutate(true);
          }}
        >
          {consent.isPending ? "Continuing…" : "Continue"}
        </Button>
      </div>

      {error ? (
        <p className="text-center text-xs text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </section>
  );
}
