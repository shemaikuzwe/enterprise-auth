import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

import { SignOutButton } from "@/components/sign-out-button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { auth } from "@/lib/auth";

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border py-2 last:border-0">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="font-mono text-xs break-all text-right">{value ?? "—"}</span>
    </div>
  );
}

function formatDate(value: Date | string | null | undefined) {
  return value ? new Date(value).toLocaleString() : "—";
}

export default async function HomePage() {
  const requestHeaders = await headers();
  const session = await auth.api.getSession({ headers: requestHeaders });
  if (!session) redirect("/signin");

  const accounts = await auth.api.listUserAccounts({ headers: requestHeaders });
  const acme = accounts.find((account) => account.providerId === "acme");

  // Exercises the refresh flow: Better Auth refreshes the token if it has expired.
  const token = acme
    ? await auth.api
        .getAccessToken({ body: { accountId: acme.id }, headers: requestHeaders })
        .catch(() => null)
    : null;

  const { user } = session;

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-6 p-6 md:py-12">
      <header className="flex items-center justify-between">
        <span className="text-sm font-medium">Acme Demo</span>
        <SignOutButton />
      </header>

      <Card>
        <div className="flex items-center gap-3">
          {user.image ? (
            <Image
              src={user.image}
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-full"
              unoptimized
            />
          ) : (
            <div className="flex size-10 items-center justify-center rounded-full bg-muted text-sm font-medium">
              {user.name.charAt(0).toUpperCase()}
            </div>
          )}
          <div className="grid gap-0.5">
            <CardTitle>{user.name}</CardTitle>
            <CardDescription>{user.email}</CardDescription>
          </div>
        </div>
        <div>
          <Row label="User ID" value={user.id} />
          <Row label="Email verified" value={String(user.emailVerified)} />
          <Row label="Created" value={formatDate(user.createdAt)} />
        </div>
      </Card>

      <Card>
        <div className="grid gap-1">
          <CardTitle>Session</CardTitle>
          <CardDescription>Local session issued by this demo client.</CardDescription>
        </div>
        <div>
          <Row label="Expires" value={formatDate(session.session.expiresAt)} />
          <Row label="IP address" value={session.session.ipAddress} />
          <Row label="User agent" value={session.session.userAgent} />
        </div>
      </Card>

    </main>
  );
}
