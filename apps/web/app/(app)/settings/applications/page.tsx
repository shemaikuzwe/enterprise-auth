import { ConnectedApps } from "@/components/settings/connected-apps";

export const metadata = { title: "Connected apps" };

export default function ConnectedAppsPage() {
  return (
    <>
      <section className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold">Connected apps</h1>
        <p className="text-xs text-muted-foreground">
          Review and revoke third-party access to your account.
        </p>
      </section>

      <ConnectedApps />
    </>
  );
}
