import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { UserDetail } from "@/components/admin/user-detail";
import { auth } from "@/lib/auth";

export const metadata = { title: "User details" };

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const requestHeaders = await headers();
  const session = await auth.api.getSession({ headers: requestHeaders }).catch(() => null);
  if (!session?.user || (session.user as { role?: string | null }).role !== "admin") {
    redirect("/home");
  }

  const { id } = await params;

  return <UserDetail userId={id} />;
}
