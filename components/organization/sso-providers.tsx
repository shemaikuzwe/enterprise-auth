"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authClient } from "@/lib/auth-client"

const emptyForm = {
  providerId: "",
  domain: "",
  issuer: "",
  clientId: "",
  clientSecret: "",
}

export function SsoProviders({ organizationId }: { organizationId: string }) {
  const queryClient = useQueryClient()
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState<string | null>(null)

  const providersQuery = useQuery({
    queryKey: ["sso-providers", organizationId],
    queryFn: async () => {
      const { data, error } = await authClient.sso.providers()
      if (error) throw error
      return data?.providers ?? []
    },
  })

  const registerMutation = useMutation({
    mutationFn: async () => {
      const { error } = await authClient.sso.register({
        providerId: form.providerId,
        domain: form.domain,
        issuer: form.issuer,
        organizationId,
        oidcConfig: {
          clientId: form.clientId,
          clientSecret: form.clientSecret,
        },
      })
      if (error) throw new Error(error.message ?? "Failed to register the provider")
    },
    onSuccess: async () => {
      setForm(emptyForm)
      setError(null)
      await queryClient.invalidateQueries({ queryKey: ["sso-providers", organizationId] })
    },
    onError: (mutationError) => setError(mutationError.message),
  })

  const deleteMutation = useMutation({
    mutationFn: async (providerId: string) => {
      const { error } = await authClient.sso.deleteProvider({ providerId })
      if (error) throw new Error(error.message ?? "Failed to delete the provider")
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["sso-providers", organizationId] }),
    onError: (mutationError) => setError(mutationError.message),
  })

  const providers = (providersQuery.data ?? []).filter(
    (provider) => provider.organizationId === organizationId,
  )

  function update(field: keyof typeof emptyForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Single sign-on</CardTitle>
        <CardDescription>
          Connect an identity provider so members sign in with their work email.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {providers.map((provider) => (
          <div key={provider.providerId} className="flex flex-col gap-1 rounded-md border p-3">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">{provider.providerId}</span>
              <span className="text-xs text-muted-foreground">@{provider.domain}</span>
              <Button
                variant="ghost"
                size="sm"
                type="button"
                className="ml-auto"
                disabled={deleteMutation.isPending}
                onClick={() => deleteMutation.mutate(provider.providerId)}
              >
                Delete
              </Button>
            </div>
            <p className="truncate text-xs text-muted-foreground">{provider.issuer}</p>
            <p className="text-xs text-muted-foreground">
              Redirect URI:{" "}
              <code className="break-all">
                {process.env.NEXT_PUBLIC_BASE_URL}/api/auth/sso/callback/{provider.providerId}
              </code>
            </p>
          </div>
        ))}

        <form
          className="flex flex-col gap-3"
          onSubmit={(event) => {
            event.preventDefault()
            setError(null)
            registerMutation.mutate()
          }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="sso-provider-id">Provider ID</Label>
              <Input
                id="sso-provider-id"
                placeholder="okta-acme"
                required
                value={form.providerId}
                onChange={(event) => update("providerId", event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="sso-domain">Email domain</Label>
              <Input
                id="sso-domain"
                placeholder="acme.com"
                required
                value={form.domain}
                onChange={(event) => update("domain", event.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="sso-issuer">Issuer</Label>
            <Input
              id="sso-issuer"
              type="url"
              placeholder="http://localhost:8080/realms/acme"
              required
              value={form.issuer}
              onChange={(event) => update("issuer", event.target.value)}
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="sso-client-id">Client ID</Label>
              <Input
                id="sso-client-id"
                required
                value={form.clientId}
                onChange={(event) => update("clientId", event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="sso-client-secret">Client secret</Label>
              <Input
                id="sso-client-secret"
                type="password"
                required
                value={form.clientSecret}
                onChange={(event) => update("clientSecret", event.target.value)}
              />
            </div>
          </div>
          <Button type="submit" disabled={registerMutation.isPending} className="self-start">
            {registerMutation.isPending ? "Registering…" : "Register provider"}
          </Button>
          {error && <p className="text-xs text-destructive">{error}</p>}
        </form>
      </CardContent>
    </Card>
  )
}
