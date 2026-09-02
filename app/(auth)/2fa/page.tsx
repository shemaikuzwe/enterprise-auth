import { redirect } from "@/lib/utils";
import { TwoFactorForm } from "@/components/auth/two-factor-form";

export const metadata = {
  title: "Two-factor verification",
}

export default async function TwoFactorPage({ searchParams }: PageProps<"/2fa">) {
  const { redirect: redirectParam } = await searchParams;

  return (
    <TwoFactorForm redirect={redirect(typeof redirectParam === "string" ? redirectParam : null)} />
  );
}
