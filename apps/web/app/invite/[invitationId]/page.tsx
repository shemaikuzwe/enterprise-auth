import { eq } from "drizzle-orm";
import Link from "next/link";
import { headers } from "next/headers";

import { AcceptInvite, type InviteInfo } from "@/components/organization/accept-invite";
import { BrandMark } from "@/components/nav/brand-mark";
import { ThemeToggle } from "@/components/theme-toggle";
import { db, schema } from "@/lib/db";
import { auth } from "@/lib/auth";

export const metadata = { title: "Invitation" };

export default async function InvitePage({
  params,
}: PageProps<"/invite/[invitationId]">) {
  const { invitationId } = await params;
  const requestHeaders = await headers();

  // Resolved from the database rather than auth.api.getInvitation: that
  // endpoint requires a session, and this page must render for signed-out
  // invitees who have no account yet.
  const [row] = await db
    .select({
      id: schema.invitation.id,
      email: schema.invitation.email,
      role: schema.invitation.role,
      status: schema.invitation.status,
      expiresAt: schema.invitation.expiresAt,
      organizationName: schema.organization.name,
      inviterEmail: schema.user.email,
    })
    .from(schema.invitation)
    .innerJoin(
      schema.organization,
      eq(schema.invitation.organizationId, schema.organization.id),
    )
    .innerJoin(schema.user, eq(schema.invitation.inviterId, schema.user.id))
    .where(eq(schema.invitation.id, invitationId))
    .limit(1);

  const invitation: InviteInfo | null = row
    ? {
        id: row.id,
        email: row.email,
        role: row.role,
        status: row.status,
        expiresAt: row.expiresAt.toISOString(),
        organizationName: row.organizationName,
        inviterEmail: row.inviterEmail,
      }
    : null;

  const session = await auth.api
    .getSession({ headers: requestHeaders })
    .catch(() => null);

  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="self-center">
          <BrandMark />
        </Link>
        <AcceptInvite invitation={invitation} viewerEmail={session?.user.email ?? null} />
      </div>
    </div>
  );
}
