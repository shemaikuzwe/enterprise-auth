"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { FingerPrintIcon } from "@hugeicons/core-free-icons";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export function PasskeyForm({ redirect }: { redirect: string }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  function handleSuccess() {
    router.push(redirect);
    router.refresh();
  }

  const signInMutation = useMutation({
    mutationFn: async () => {
      const { error } = await authClient.signIn.passkey(
        { autoFill: false },
        { onSuccess: handleSuccess },
      );
      if (error) throw new Error(error.message ?? "Passkey sign-in failed");
    },
    onError: (mutationError: Error) => {
      setError(mutationError.message);
    },
  });

  useEffect(() => {
    if (
      typeof PublicKeyCredential === "undefined" ||
      !PublicKeyCredential.isConditionalMediationAvailable
    ) {
      return;
    }
    let cancelled = false;
    void PublicKeyCredential.isConditionalMediationAvailable().then((available) => {
      if (!available || cancelled) return;
      void authClient.signIn
        .passkey({ autoFill: true }, { onSuccess: handleSuccess })
        .catch(() => undefined);
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <Button
        type="button"
        variant="outline"
        size="lg"
        className="w-full"
        disabled={signInMutation.isPending}
        onClick={() => {
          setError(null);
          signInMutation.mutate();
        }}
      >
        <HugeiconsIcon icon={FingerPrintIcon} data-icon="inline-start" />
        {signInMutation.isPending ? "Waiting for passkey…" : "Continue with passkey"}
      </Button>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
