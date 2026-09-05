"use client";

import { useEffect } from "react";

import { useSession } from "@/components/session-provider";
import { authClient } from "@/lib/auth-client";

export function useOneTap(redirect: string) {
  const session = useSession();

  useEffect(() => {
    if (session) return;

    let cancelled = false;
    authClient
      .oneTap({
        callbackURL: redirect,
        onPromptNotification: (notification) => {
          console.debug("Google One Tap prompt dismissed", notification);
        },
      })
      .catch((error) => {
        if (!cancelled) console.debug("Google One Tap failed", error);
      });

    return () => {
      cancelled = true;
    };
  }, [redirect, session]);
}
