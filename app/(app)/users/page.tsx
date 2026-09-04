import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { UsersTable } from "@/components/admin/users-table";
import { auth } from "@/lib/auth";

export const metadata = { title: "Users" };

export default async function UsersPage() {
  const requestHeaders = await headers();
  const session = await auth.api.getSession({ headers: requestHeaders }).catch(() => null);
  if (!session?.user || (session.user as { role?: string | null }).role !== "admin") {
    redirect("/home");
  }

  return (
    <>
      <section className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold">Users</h1>
        <p className="text-xs text-muted-foreground">
          Manage roles, bans and access for everyone in this instance.
        </p>
      </section>

      <UsersTable />
    </>
  );
}
