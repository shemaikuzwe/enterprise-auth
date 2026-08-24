"use client";

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { signIn } from "@/lib/auth-client"

const oauthProviders = [
  { id: "google", name: "Google", icon: "/google.svg" },
  { id: "github", name: "GitHub", icon: "/github.svg" },
] as const

export function OAuthButtons() {
  const router = useRouter()
  const [loading, setLoading] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSignIn(provider: "google" | "github") {
    setError(null)
    setLoading(provider)
    try {
      const { error } = await signIn.social({
        provider,
        callbackURL: "/profile",
      })
      if (error) {
        setError(error.message ?? "Failed to sign in")
      } else {
        router.push("/profile")
      }
    } finally {
      setLoading(null)
    }
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
            disabled={loading !== null}
            onClick={() => handleSignIn(provider.id)}
          >
            <Image src={provider.icon} alt="" width={16} height={16} data-icon="inline-start" className={provider.id === "github" ? "dark:invert" : undefined} />
            {loading === provider.id ? "Redirecting…" : provider.name}
          </Button>
        ))}
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}
