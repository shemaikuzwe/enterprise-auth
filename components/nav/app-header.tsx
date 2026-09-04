"use client";

import { Alert02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { BrandMark } from "@/components/nav/brand-mark";
import { UserMenu } from "@/components/nav/user-menu";
import { OrganizationSwitcher } from "@/components/organization/organization-switcher";
import { useSession } from "@/components/session-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

function ImpersonationBanner() {
  const session = useSession();
  const router = useRouter();
  const isImpersonating = !!session?.session?.impersonatedBy;

  const stopMutation = useMutation({
    mutationFn: async () => {
      const { error } = await authClient.admin.stopImpersonating();
      if (error) throw new Error(error.message ?? "Failed to stop impersonating");
    },
    onSuccess: () => {
      toast.success("Stopped impersonating");
      router.refresh();
      window.location.replace("/home");
    },
    onError: (mutationError) => {
      toast.error(mutationError.message);
    },
  });

  if (!isImpersonating) return null;

  return (
    <div className="border-b border-amber-200 bg-amber-50 dark:border-amber-500/30 dark:bg-amber-500/10">
      <div className="mx-auto flex w-full max-w-3xl items-center gap-3 px-6 py-1.5 text-amber-800 dark:text-amber-300">
        <HugeiconsIcon
          icon={Alert02Icon}
          strokeWidth={1.8}
          className="size-5 shrink-0"
          aria-hidden="true"
        />
        <p className="truncate text-sm leading-6">Acting as {session?.user?.name}</p>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto h-7 shrink-0 bg-background"
          onClick={() => stopMutation.mutate()}
          disabled={stopMutation.isPending}
        >
          {stopMutation.isPending ? "Stopping…" : "Stop"}
        </Button>
      </div>
    </div>
  );
}

export function AppHeader() {
  return (
    <header className="border-b">     
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center gap-1 px-6">
        <BrandMark />
        <span aria-hidden="true" className="text-lg font-light text-border">/</span>
        <OrganizationSwitcher />
        <div className="ml-auto flex shrink-0 items-center gap-4">
          <ImpersonationBanner />
          <UserMenu />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
