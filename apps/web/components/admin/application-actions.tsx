"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import CopyField from "@/components/ui/copy-field";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { authClient } from "@/lib/auth-client";
import { createOAuthClient } from "@/lib/actions";
import { SCOPE_DESCRIPTIONS } from "@/lib/oauth-scopes";
import {
  createClientSchema,
  GRANT_TYPE_DESCRIPTIONS,
  type CreateClientValues,
} from "@/lib/validations/oauth";

type GetClientsResult = Awaited<ReturnType<typeof authClient.oauth2.getClients>>;

export type OAuthClientRow = NonNullable<GetClientsResult["data"]>[number];

export type ApplicationActionDialog =
  | "create"
  | "edit"
  | "rotate"
  | "delete"
  | null;

interface ClientDialogProps {
  client: OAuthClientRow;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SCOPES = Object.keys(SCOPE_DESCRIPTIONS);
const GRANT_TYPES = Object.keys(GRANT_TYPE_DESCRIPTIONS);

function SecretOnce({ secret }: { secret: string }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-500/30 dark:bg-amber-500/10">
      <p className="text-xs font-medium text-amber-800 dark:text-amber-300">
        Copy this client secret now you won&apos;t see it again.
      </p>
      <CopyField value={secret} copyLabel="Copy client secret" />
    </div>
  );
}

export function CreateDialog({
  open,
  onOpenChange,
  onCreated,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreated: () => void;
}) {
  const [secret, setSecret] = useState<string | null>(null);
  const form = useForm<CreateClientValues>({
    resolver: zodResolver(createClientSchema),
    defaultValues: {
      client_name: "",
      redirect_uris: "",
      logo_uri: "",
      application_type: "web",
      token_endpoint_auth_method: "client_secret_basic",
      grant_types: ["authorization_code", "refresh_token"],
      scope: ["openid", "profile", "email"],
      skip_consent: false,
    },
  });

  const createMutation = useMutation({
    mutationFn: (values: CreateClientValues) => createOAuthClient(values),
    onSuccess: (result) => {
      const created = result as { client_secret?: string | null };
      setSecret(created.client_secret ?? null);
      onCreated();
    },
    onError: (mutationError) => {
      form.setError("root", { message: mutationError.message });
    },
  });

  function close(next: boolean) {
    onOpenChange(next);
    if (!next) {
      form.reset();
      setSecret(null);
    }
  }

  const selectedScopes = form.watch("scope");
  const selectedGrantTypes = form.watch("grant_types");

  function toggleScope(scope: string, checked: boolean) {
    const current = form.getValues("scope");
    form.setValue(
      "scope",
      (checked ? [...current, scope] : current.filter((s) => s !== scope)) as CreateClientValues["scope"],
      { shouldValidate: true },
    );
  }

  function toggleGrantType(grantType: string, checked: boolean) {
    const current = form.getValues("grant_types");
    form.setValue(
      "grant_types",
      (checked
        ? [...current, grantType]
        : current.filter((g) => g !== grantType)) as CreateClientValues["grant_types"],
      { shouldValidate: true },
    );
  }

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New application</DialogTitle>
          <DialogDescription>
            Register an OAuth client allowed to sign users in.
          </DialogDescription>
        </DialogHeader>
        {secret ? (
          <div className="flex flex-col gap-4">
            <SecretOnce secret={secret} />
            <DialogFooter>
              <Button onClick={() => close(false)}>Done</Button>
            </DialogFooter>
          </div>
        ) : (
          <form
            onSubmit={form.handleSubmit((values) => createMutation.mutate(values))}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="client-name">Name</Label>
              <Input
                id="client-name"
                placeholder="Acme demo app"
                disabled={createMutation.isPending}
                {...form.register("client_name")}
              />
              {form.formState.errors.client_name && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.client_name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="redirect-uris">Redirect URIs (one per line)</Label>
              <Textarea
                id="redirect-uris"
                placeholder="http://localhost:3001/api/auth/callback/enterprise"
                disabled={createMutation.isPending}
                {...form.register("redirect_uris")}
              />
              {form.formState.errors.redirect_uris && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.redirect_uris.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="logo-uri">Logo URL (optional)</Label>
              <Input
                id="logo-uri"
                placeholder="https://example.com/logo.png"
                disabled={createMutation.isPending}
                {...form.register("logo_uri")}
              />
              {form.formState.errors.logo_uri && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.logo_uri.message}
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="application-type">Application type</Label>
                <Select
                  value={form.watch("application_type")}
                  onValueChange={(value) => {
                    if (value) form.setValue("application_type", value as CreateClientValues["application_type"]);
                  }}
                  disabled={createMutation.isPending}
                >
                  <SelectTrigger id="application-type" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web</SelectItem>
                    <SelectItem value="native">Native</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="auth-method">Auth method</Label>
                <Select
                  value={form.watch("token_endpoint_auth_method")}
                  onValueChange={(value) => {
                    if (value) form.setValue("token_endpoint_auth_method", value as CreateClientValues["token_endpoint_auth_method"]);
                  }}
                  disabled={createMutation.isPending}
                >
                  <SelectTrigger id="auth-method" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="client_secret_basic">Client secret</SelectItem>
                    <SelectItem value="none">None (public)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Grant types</Label>
              {GRANT_TYPES.map((grantType) => (
                <label key={grantType} className="flex cursor-pointer items-start gap-2.5 text-sm">
                  <Checkbox
                    checked={selectedGrantTypes.includes(
                      grantType as CreateClientValues["grant_types"][number],
                    )}
                    onCheckedChange={(checked) => toggleGrantType(grantType, checked === true)}
                    disabled={createMutation.isPending}
                    className="mt-0.5"
                  />
                  <span>
                    <span className="font-mono text-xs break-all">{grantType}</span>
                    <span className="block text-xs text-muted-foreground">
                      {GRANT_TYPE_DESCRIPTIONS[grantType]}
                    </span>
                  </span>
                </label>
              ))}
              {form.formState.errors.grant_types && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.grant_types.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label>Scopes</Label>
              {SCOPES.map((scope) => (
                <label key={scope} className="flex cursor-pointer items-start gap-2.5 text-sm">
                  <Checkbox
                    checked={selectedScopes.includes(scope as CreateClientValues["scope"][number])}
                    onCheckedChange={(checked) => toggleScope(scope, checked === true)}
                    disabled={createMutation.isPending}
                    className="mt-0.5"
                  />
                  <span>
                    <span className="font-mono text-xs">{scope}</span>
                    <span className="block text-xs text-muted-foreground">
                      {SCOPE_DESCRIPTIONS[scope]}
                    </span>
                  </span>
                </label>
              ))}
              {form.formState.errors.scope && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.scope.message}
                </p>
              )}
            </div>
            <label className="flex cursor-pointer items-start gap-2.5 text-sm">
              <Checkbox
                checked={form.watch("skip_consent")}
                onCheckedChange={(checked) => form.setValue("skip_consent", checked === true)}
                disabled={createMutation.isPending}
                className="mt-0.5"
              />
              <span>
                Skip consent
                <span className="block text-xs text-muted-foreground">
                  Trusted first-party apps sign users in without showing the consent screen.
                </span>
              </span>
            </label>
            {form.formState.errors.root && (
              <p className="text-xs text-destructive">{form.formState.errors.root.message}</p>
            )}
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => close(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={createMutation.isPending}>
                {createMutation.isPending ? "Creating…" : "Create application"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function EditDialog({ client, open, onOpenChange }: ClientDialogProps) {
  const queryClient = useQueryClient();
  const form = useForm<{
    client_name: string;
    logo_uri: string;
    redirect_uris: string;
  }>({
    defaultValues: {
      client_name: client.client_name ?? "",
      logo_uri: client.logo_uri ?? "",
      redirect_uris: (client.redirect_uris ?? []).join("\n"),
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (values: { client_name: string; logo_uri: string; redirect_uris: string }) => {
      const { error } = await authClient.oauth2.updateClient({
        client_id: client.client_id,
        update: {
          client_name: values.client_name,
          logo_uri: values.logo_uri || undefined,
          redirect_uris: values.redirect_uris.split("\n").map((u) => u.trim()).filter(Boolean),
        },
      });
      if (error) throw new Error(error.message ?? "Failed to update application");
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["oauth-clients"] });
      onOpenChange(false);
    },
    onError: (mutationError) => {
      form.setError("root", { message: mutationError.message });
    },
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit application</DialogTitle>
          <DialogDescription>
            Update the display and redirect settings for {client.client_name ?? client.client_id}.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={form.handleSubmit((values) => updateMutation.mutate(values))}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="edit-client-name">Name</Label>
            <Input
              id="edit-client-name"
              disabled={updateMutation.isPending}
              {...form.register("client_name", { required: "Name is required" })}
            />
            {form.formState.errors.client_name && (
              <p className="text-xs text-destructive">
                {form.formState.errors.client_name.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="edit-logo-uri">Logo URL</Label>
            <Input
              id="edit-logo-uri"
              disabled={updateMutation.isPending}
              {...form.register("logo_uri")}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="edit-redirect-uris">Redirect URIs (one per line)</Label>
            <Textarea
              id="edit-redirect-uris"
              disabled={updateMutation.isPending}
              {...form.register("redirect_uris", { required: "At least one redirect URI is required" })}
            />
            {form.formState.errors.redirect_uris && (
              <p className="text-xs text-destructive">
                {form.formState.errors.redirect_uris.message}
              </p>
            )}
          </div>
          {form.formState.errors.root && (
            <p className="text-xs text-destructive">{form.formState.errors.root.message}</p>
          )}
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={updateMutation.isPending}>
              {updateMutation.isPending ? "Saving…" : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function RotateSecretDialog({ client, open, onOpenChange }: ClientDialogProps) {
  const queryClient = useQueryClient();
  const [secret, setSecret] = useState<string | null>(null);

  const rotateMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await authClient.oauth2.client.rotateSecret({
        client_id: client.client_id,
      });
      if (error) throw new Error(error.message ?? "Failed to rotate secret");
      return data as { client_secret?: string | null };
    },
    onSuccess: async (data) => {
      setSecret(data?.client_secret ?? null);
      await queryClient.invalidateQueries({ queryKey: ["oauth-clients"] });
    },
    onError: () => {},
  });

  function close(next: boolean) {
    onOpenChange(next);
    if (!next) {
      setSecret(null);
      rotateMutation.reset();
    }
  }

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rotate client secret</DialogTitle>
          <DialogDescription>
            The current secret for {client.client_name ?? client.client_id} stops
            working immediately.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          {secret ? <SecretOnce secret={secret} /> : null}
          {rotateMutation.isError ? (
            <p className="text-xs text-destructive">{rotateMutation.error.message}</p>
          ) : null}
          <DialogFooter>
            <Button variant="outline" onClick={() => close(false)}>
              {secret ? "Done" : "Cancel"}
            </Button>
            {!secret ? (
              <Button
                variant="destructive"
                onClick={() => rotateMutation.mutate()}
                disabled={rotateMutation.isPending}
              >
                {rotateMutation.isPending ? "Rotating…" : "Rotate secret"}
              </Button>
            ) : null}
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function DeleteDialog({ client, open, onOpenChange }: ClientDialogProps) {
  const queryClient = useQueryClient();
  const [confirmation, setConfirmation] = useState("");

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const { error } = await authClient.oauth2.deleteClient({
        client_id: client.client_id,
      });
      if (error) throw new Error(error.message ?? "Failed to delete application");
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["oauth-clients"] });
      onOpenChange(false);
      setConfirmation("");
    },
    onError: () => {},
  });

  const expected = client.client_name ?? client.client_id;

  return (
    <AlertDialog
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next);
        if (!next) {
          setConfirmation("");
          deleteMutation.reset();
        }
      }}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete {expected}?</AlertDialogTitle>
          <AlertDialogDescription>
            Type <strong>{expected}</strong> to confirm this permanent action.
            Tokens issued to this client stop working.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Input
          id="delete-application-confirmation"
          value={confirmation}
          onChange={(event) => setConfirmation(event.target.value)}
          placeholder={expected}
          disabled={deleteMutation.isPending}
        />
        {deleteMutation.isError ? (
          <p className="text-xs text-destructive">{deleteMutation.error.message}</p>
        ) : null}
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={(event) => {
              event.preventDefault();
              deleteMutation.mutate();
            }}
            disabled={deleteMutation.isPending || confirmation !== expected}
          >
            {deleteMutation.isPending ? "Deleting…" : "Delete permanently"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
