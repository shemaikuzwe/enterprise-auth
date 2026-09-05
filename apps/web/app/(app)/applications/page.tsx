import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { ApplicationsTable } from "@/components/admin/applications-table";
import { auth } from "@/lib/auth";

export const metadata = { title: "Applications" };

export default async function ApplicationsPage() {
  const requestHeaders = await headers();
  const session = await auth.api.getSession({ headers: requestHeaders }).catch(() => null);
  if (!session?.user || (session.user as { role?: string | null }).role !== "admin") {
    redirect("/home");
  }
  return (
    <>
      <section className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold">Applications</h1>
        <p className="text-xs text-muted-foreground">
          OAuth clients allowed to sign users in through this instance.
        </p>
      </section>
      <ApplicationsTable />
    </>
  );
}
