"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { authClient } from "@/lib/auth-client"
import CopyField from "../ui/copy-field"

const vendors = {
  okta: "Okta",
  entra: "Microsoft Entra ID",
  auth0: "Auth0",
  google: "Google Workspace",
  keycloak: "Keycloak",
  custom: "Other (Custom)",
} as const

type Vendor = keyof typeof vendors

const protocols = {
  oidc: "OIDC",
  saml: "SAML 2.0",
} as const

type Protocol = keyof typeof protocols

const baseFields = {
  vendor: z.enum(Object.keys(vendors) as [Vendor, ...Vendor[]], {
    message: "Select an identity provider.",
  }),
  domain: z
    .string()
    .trim()
    .min(1, "Domain is required.")
    .regex(/^[a-z0-9.-]+\.[a-z]{2,}$/i, "Enter a valid domain, e.g. example.com."),
}

const ssoFormSchema = z.discriminatedUnion("protocol", [
  z.object({
    ...baseFields,
    protocol: z.literal("oidc"),
    issuer: z.url("Enter a valid URL, e.g. https://your-org.okta.com."),
    clientId: z.string().trim().min(1, "Client ID is required."),
    clientSecret: z.string().trim().min(1, "Client secret is required."),
  }),
  z.object({
    ...baseFields,
    protocol: z.literal("saml"),
    idpMetadata: z
      .string()
      .trim()
      .min(1, "IdP metadata XML is required.")
      .refine(
        (value) => value.includes("EntityDescriptor"),
        "This does not look like SAML metadata XML.",
      ),
  }),
])

type SsoFormValues = z.infer<typeof ssoFormSchema>

function toProviderId(organizationSlug: string, vendor: Vendor) {
  return `${organizationSlug.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${vendor}`
}

function toCallbackUrl(providerId: string) {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/sso/callback/${providerId}`
}

function toAcsUrl(providerId: string) {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/sso/saml2/sp/acs/${providerId}`
}

function toSpEntityId(providerId: string) {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/sso/saml2/sp/metadata?providerId=${encodeURIComponent(providerId)}`
}

export function SsoProviders({
  organizationId,
  organizationSlug,
}: {
  organizationId: string
  organizationSlug: string
}) {
  const queryClient = useQueryClient()
  const [serverError, setServerError] = useState<string | null>(null)

  const form = useForm<SsoFormValues>({
    resolver: zodResolver(ssoFormSchema),
    defaultValues: {
      protocol: "oidc",
      domain: "",
      issuer: "",
      clientId: "",
      clientSecret: "",
    },
  })

  const providersQuery = useQuery({
    queryKey: ["sso-providers", organizationId],
    queryFn: async () => {
      const { data, error } = await authClient.sso.providers()
      if (error) throw error
      return data?.providers ?? []
    },
  })

  const registerMutation = useMutation({
    mutationFn: async (values: SsoFormValues) => {
      const providerId = toProviderId(organizationSlug, values.vendor)
      const { error } = await authClient.sso.register({
        providerId,
        domain: values.domain,
        organizationId,
        ...(values.protocol === "oidc"
          ? {
              issuer: values.issuer,
              oidcConfig: {
                clientId: values.clientId,
                clientSecret: values.clientSecret,
              },
            }
          : {
              // For SAML the top-level issuer is our own SP entity ID.
              issuer: toSpEntityId(providerId),
              samlConfig: {
                idpMetadata: { metadata: values.idpMetadata },
              },
            }),
      })
      if (error) throw new Error(error.message ?? "Failed to register the provider")
    },
    onSuccess: async () => {
      form.reset()
      setServerError(null)
      await queryClient.invalidateQueries({ queryKey: ["sso-providers", organizationId] })
    },
    onError: (mutationError) => setServerError(mutationError.message),
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

  const vendor = form.watch("vendor")
  const protocol = form.watch("protocol")
  const pendingProviderId = vendor ? toProviderId(organizationSlug, vendor) : null

  function onSubmit(values: SsoFormValues) {
    setServerError(null)
    registerMutation.mutate(values)
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
        ))}

        <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Controller
            name="protocol"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel>Protocol</FieldLabel>
                <RadioGroup
                  value={field.value}
                  onValueChange={(value) => {
                    form.clearErrors()
                    field.onChange(value)
                  }}
                  className="flex flex-row gap-6"
                  disabled={registerMutation.isPending}
                >
                  {Object.entries(protocols).map(([value, label]) => (
                    <label key={value} className="flex items-center gap-2 text-sm">
                      <RadioGroupItem value={value} />
                      {label}
                    </label>
                  ))}
                </RadioGroup>
              </Field>
            )}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <Controller
              name="vendor"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Identity provider</FieldLabel>
                  <Select
                    items={vendors}
                    value={field.value ?? null}
                    onValueChange={(value) => field.onChange(value)}
                    disabled={registerMutation.isPending}
                  >
                    <SelectTrigger
                      id={field.name}
                      className="w-full"
                      aria-invalid={fieldState.invalid}
                      onBlur={field.onBlur}
                    >
                      <SelectValue placeholder="Select a provider" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(vendors).map(([value, label]) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Controller
              name="domain"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Email domain</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    placeholder="yourcompany.com"
                    autoComplete="off"
                    aria-invalid={fieldState.invalid}
                    disabled={registerMutation.isPending}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </div>

          {pendingProviderId && protocol === "oidc" && (
            <div className="flex items-center gap-2">
              Add this redirect URI to your Idp:{" "}
              <CopyField  value={toCallbackUrl(pendingProviderId)} />
            </div>
          )}

          {pendingProviderId && protocol === "saml" && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                Add this ACS URL to your Idp: <CopyField value={toAcsUrl(pendingProviderId)} />
              </div>
              <div className="flex items-center gap-2">
                Audience / SP entity ID: <CopyField value={toSpEntityId(pendingProviderId)} />
              </div>
            </div>
          )}

          {protocol === "oidc" ? (
            <>
          <Controller
            name="issuer"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Issuer</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="url"
                  placeholder="https://your-org.okta.com"
                  autoComplete="off"
                  aria-invalid={fieldState.invalid}
                  disabled={registerMutation.isPending}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <Controller
              name="clientId"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Client ID</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    placeholder="Your Idp Client ID"
                    autoComplete="off"
                    aria-invalid={fieldState.invalid}
                    disabled={registerMutation.isPending}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Controller
              name="clientSecret"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Client secret</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="password"
                    placeholder="Your Idp Client Secret"
                    autoComplete="new-password"
                    aria-invalid={fieldState.invalid}
                    disabled={registerMutation.isPending}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </div>
            </>
          ) : (
          <Controller
            name="idpMetadata"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>IdP metadata XML</FieldLabel>
                <Textarea
                  {...field}
                  id={field.name}
                  rows={8}
                  placeholder="Paste the SAML metadata XML your Idp gives you"
                  aria-invalid={fieldState.invalid}
                  disabled={registerMutation.isPending}
                />
                <FieldDescription>
                  The sign-on URL and signing certificate are read from this metadata.
                </FieldDescription>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          )}

          <div className="flex flex-col gap-2">
            <Button type="submit" disabled={registerMutation.isPending} className="self-start">
              {registerMutation.isPending ? "Registering…" : "Register provider"}
            </Button>
            {serverError && <p className="text-xs text-destructive">{serverError}</p>}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
