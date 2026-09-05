import { cookies } from "next/headers";
import Link from "next/link";

import { decodeJwtPayload } from "@/lib/oauth";

function Code({ value }: { value: unknown }) {
  return (
    <pre
      style={{
        background: "#f4f4f5",
        borderRadius: 8,
        padding: 16,
        overflowX: "auto",
        fontSize: 12,
      }}
    >
      {JSON.stringify(value, null, 2)}
    </pre>
  );
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const jar = await cookies();
  const raw = jar.get("demo_session")?.value;
  const session = raw ? (JSON.parse(raw) as {
    access_token: string;
    id_token: string | null;
    refresh_token: string | null;
    userinfo: unknown;
  }) : null;
  const claims = session?.id_token ? decodeJwtPayload(session.id_token) : null;

  if (!session) {
    return (
      <main>
        <h1>Demo client</h1>
        <p style={{ color: "#52525b" }}>
          Test harness for signing in through the enterprise-auth provider.
        </p>
        {error ? (
          <p role="alert" style={{ color: "#b91c1c" }}>
            Sign-in failed: {error}
          </p>
        ) : null}
        <p>
          <Link href="/api/login">Sign in with Acme</Link>
        </p>
      </main>
    );
  }

  return (
    <main>
      <h1>Signed in</h1>
      <p>
        <Link href="/api/logout">Sign out</Link>
      </p>
      <h2>id_token claims</h2>
      <Code value={claims} />
      <h2>/oauth2/userinfo</h2>
      <Code value={session.userinfo} />
    </main>
  );
}
