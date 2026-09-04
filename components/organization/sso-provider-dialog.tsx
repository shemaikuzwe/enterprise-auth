"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { PlusIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
import { resolveIdpMetadata } from "@/lib/actions"
import { authClient } from "@/lib/auth-client"
import {
  protocols,
  toAcsUrl,
  toCallbackUrl,
  toProviderId,
  toSpEntityId,
  vendors,
  type Vendor,
} from "@/lib/utils"
import CopyField from "../ui/copy-field"

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
      .min(1, "A metadata URL or metadata XML is required.")
      .refine(
        (value) => /^https?:\/\//i.test(value) || value.includes("EntityDescriptor"),
        "Enter a metadata URL, or paste the metadata XML.",
      ),
  }),
])

type SsoFormValues = z.infer<typeof ssoFormSchema>

async function getProtocolConfig(values: SsoFormValues, providerId: string) {
  if (values.protocol === "oidc") {
    return {
      issuer: values.issuer,
      oidcConfig: { clientId: values.clientId, clientSecret: values.clientSecret },
    }
  }
  const { metadata, entryPoint } = await resolveIdpMetadata(values.idpMetadata)
  return {
    // For SAML the top-level issuer is our own SP entity ID.
    issuer: toSpEntityId(providerId),
    samlConfig: { entryPoint, idpMetadata: { metadata } },
  }
}

export function SsoProviderDialog({
  organizationId,
  organizationSlug,
}: {
  organizationId: string
  organizationSlug: string
}) {
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false)
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

  const registerMutation = useMutation({
    mutationFn: async (values: SsoFormValues) => {
      const providerId = toProviderId(organizationSlug, values.vendor)
      const { error } = await authClient.sso.register({
        providerId,
        domain: values.domain,
        organizationId,
        ...(await getProtocolConfig(values, providerId)),
      })
      if (error) throw new Error(error.message ?? "Failed to register the provider")
    },
    onSuccess: async () => {
      form.reset()
      setServerError(null)
      setOpen(false)
      await queryClient.invalidateQueries({ queryKey: ["sso-providers", organizationId] })
    },
    onError: (mutationError) => setServerError(mutationError.message),
  })

  const vendor = form.watch("vendor")
  const protocol = form.watch("protocol")
  const pendingProviderId = vendor ? toProviderId(organizationSlug, vendor) : null

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen)
    if (!nextOpen) {
      form.reset()
      setServerError(null)
    }
  }

  function onSubmit(values: SsoFormValues) {
    setServerError(null)
    registerMutation.mutate(values)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={<Button type="button" size="sm" />}>
        <HugeiconsIcon icon={PlusIcon} data-icon="inline-start" />
        Add provider
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Register identity provider</DialogTitle>
            <DialogDescription>
              Connect an identity provider so members sign in with their work email.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-5">
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
                <CopyField value={toCallbackUrl(pendingProviderId)} />
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
                    <FieldLabel htmlFor={field.name}>Idp metadata</FieldLabel>
                    <Textarea
                      {...field}
                      id={field.name}
                      rows={3}
                      placeholder="https://your-org.okta.com/app/exk.../sso/saml/metadata"
                      aria-invalid={fieldState.invalid}
                      disabled={registerMutation.isPending}
                    />
                    <FieldDescription>
                      Paste the metadata URL, or the metadata XML itself if your Idp only offers a
                      download.
                    </FieldDescription>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            )}

            {serverError && <p className="text-xs text-destructive">{serverError}</p>}
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => handleOpenChange(false)}
              disabled={registerMutation.isPending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={registerMutation.isPending}>
              {registerMutation.isPending ? "Registering…" : "Register provider"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
