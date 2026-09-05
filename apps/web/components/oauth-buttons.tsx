"use client";

import Image from "next/image"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { useOneTap } from "@/components/auth/use-one-tap"
import { signIn } from "@/lib/auth-client"

const oauthProviders = [
  { id: "google", name: "Google", icon: "/google.svg" },
  { id: "github", name: "GitHub", icon: "/github.svg" },
] as const

export function OAuthButtons({ redirect }: { redirect: string }) {
  const [error, setError] = useState<string | null>(null)

  useOneTap(redirect)

  const oauthMutation = useMutation({
    mutationFn: async (provider: (typeof oauthProviders)[number]["id"]) => {

      const { error } = await signIn.social({
        provider,
        callbackURL: redirect,
      })
      if (error) {
        throw new Error(error.message ?? "Failed to sign in")
      }
    },
    onError: (mutationError: Error) => {
      setError(mutationError.message)
    },
  })

  function handleSignIn(provider: "google" | "github") {
    setError(null)
    oauthMutation.mutate(provider)
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-2">
        {oauthProviders.map((provider) => (
          <Button
            key={provider.id}
            variant="outline"
            size="lg"
            type="button"
            disabled={oauthMutation.isPending}
            onClick={() => handleSignIn(provider.id)}
          >
            <Image src={provider.icon} alt="" width={16} height={16} data-icon="inline-start" className={provider.id === "github" ? "dark:invert" : undefined} />
            {oauthMutation.isPending && oauthMutation.variables === provider.id ? "Redirecting…" : provider.name}
          </Button>
        ))}
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}
