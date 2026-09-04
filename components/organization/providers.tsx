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
import { authClient } from "@/lib/auth-client"
import { protocols, toAcsUrl, toCallbackUrl, type Protocol } from "@/lib/utils"
import { SsoProviderDialog } from "./sso-provider-dialog"

export function SsoProviders({
  organizationId,
  organizationSlug,
}: {
  organizationId: string
  organizationSlug: string
}) {
  const queryClient = useQueryClient()
  const [serverError, setServerError] = useState<string | null>(null)

  const providersQuery = useQuery({
    queryKey: ["sso-providers", organizationId],
    queryFn: async () => {
      const { data, error } = await authClient.sso.providers()
      if (error) throw error
      return data?.providers ?? []
    },
  })

  const deleteMutation = useMutation({
    mutationFn: async (providerId: string) => {
      const { error } = await authClient.sso.deleteProvider({ providerId })
      if (error) throw new Error(error.message ?? "Failed to delete the provider")
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["sso-providers", organizationId] }),
    onError: (mutationError) => setServerError(mutationError.message),
  })

  const providers = (providersQuery.data ?? []).filter(
    (provider) => provider.organizationId === organizationId,
  )

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-1">
            <CardTitle className="text-lg">Single sign-on</CardTitle>
            <CardDescription>
              Connect an identity provider so members sign in with their work email.
            </CardDescription>
          </div>
          <div className="ml-auto">
            <SsoProviderDialog
              organizationId={organizationId}
              organizationSlug={organizationSlug}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {providersQuery.isPending ? (
          <p className="text-sm text-muted-foreground">Loading providers…</p>
        ) : providers.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No identity providers yet. Add one to enable SSO for your organization.
          </p>
        ) : (
          providers.map((provider) => (
            <div key={provider.providerId} className="flex flex-col gap-1 rounded-md border p-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">{provider.providerId}</span>
                <span className="text-xs text-muted-foreground">@{provider.domain}</span>
                <Button
                  variant="destructive"
                  size="sm"
                  type="button"
                  className="ml-auto"
                  disabled={deleteMutation.isPending}
                  onClick={() => deleteMutation.mutate(provider.providerId)}
                >
                  Delete
                </Button>
              </div>
              <p className="truncate text-xs text-muted-foreground">
                {protocols[provider.type as Protocol] ?? provider.type} · {provider.issuer}
              </p>
              <p className="text-xs text-muted-foreground">
                {provider.type === "saml" ? "ACS URL: " : "Redirect URI: "}
                <code className="break-all">
                  {provider.type === "saml"
                    ? toAcsUrl(provider.providerId)
                    : toCallbackUrl(provider.providerId)}
                </code>
              </p>
            </div>
          ))
        )}
        {providersQuery.error && (
          <p className="text-xs text-destructive">
            {(providersQuery.error as Error).message ?? "Failed to load providers."}
          </p>
        )}
        {serverError && <p className="text-xs text-destructive">{serverError}</p>}
      </CardContent>
    </Card>
  )
}
