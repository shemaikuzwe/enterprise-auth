"use client";

import { Loading03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useSession } from "@/components/session-provider";
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
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";

const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function Row({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-4 border-t border-border py-6 md:grid-cols-[280px_1fr] md:items-start">
      <div>
        <p className="text-sm font-medium">{title}</p>
        {description ? (
          <p className="mt-1 max-w-[280px] text-xs/relaxed text-muted-foreground">{description}</p>
        ) : null}
      </div>
      <div className="w-full max-w-[560px]">{children}</div>
    </div>
  );
}

export function GeneralSettings() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const session = useSession();

  const activeOrganization = authClient.useActiveOrganization();
  const activeMember = authClient.useActiveMember();
  const organizations = authClient.useListOrganizations();
  const organization = activeOrganization.data;
  const organizationId = organization?.id;

  const isLastOrganization = (organizations.data?.length ?? 0) <= 1;

  const role = (activeMember.data?.role ?? "")
    .split(",")
    .map((role) => role.trim());
  const isOwner = role.includes("owner");
  const canManage = isOwner || role.includes("admin");


  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [leaveOpen, setLeaveOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteConfirmName, setDeleteConfirmName] = useState("");

  useEffect(() => {
    if (organization) {
      setName(organization.name);
      setSlug(organization.slug);
    }
  }, [organization]);

  const updateMutation = useMutation({
    mutationFn: async () => {
      if (!organizationId) throw new Error("No active organization.");
      if (!name.trim()) throw new Error("Organization name is required.");
      if (!SLUG_REGEX.test(slug)) {
        throw new Error("Use lowercase letters, numbers, and single hyphens only.");
      }
      const { error } = await authClient.organization.update({
        organizationId,
        data: { name, slug },
      });
      if (error) throw new Error(error.message ?? "Failed to update organization");
    },
    onSuccess: async () => {
      setSaved(true);
      setError(null);
      await queryClient.invalidateQueries({ queryKey: ["organizations"] });
    },
    onError: (mutationError) => {
      setSaved(false);
      setError(mutationError.message);
    },
  });

  const leaveMutation = useMutation({
    mutationFn: async () => {
      if (!organizationId) throw new Error("Unable to leave without an active organization.");
      if (isLastOrganization) throw new Error("You cannot leave your last organization.");
      const { error } = await authClient.organization.leave({ organizationId });
      if (error) throw new Error(error.message ?? "Failed to leave the organization.");
    },
    onSuccess: async () => {
      setLeaveOpen(false);
      router.replace("/home");
      router.refresh();
    },
    onError: (mutationError) => setError(mutationError.message),
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      if (!organizationId) throw new Error("No active organization.");
      if (isLastOrganization) throw new Error("You cannot delete your last organization.");
      const { error } = await authClient.organization.delete({ organizationId });
      if (error) throw new Error(error.message ?? "Failed to delete the organization.");
    },
    onSuccess: async () => {
      setDeleteOpen(false);
      await queryClient.invalidateQueries({ queryKey: ["organizations"] });
      router.replace("/home");
      router.refresh();
    },
    onError: (mutationError) => setError(mutationError.message),
  });


  if (activeOrganization.isPending) return null;
  if (!organization) {
    return (
      <p className="text-sm text-muted-foreground">You&apos;re not part of an organization yet.</p>
    );
  }

  const dirty = name !== organization.name || slug !== organization.slug;

  return (
    <div className="w-full">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSaved(false);
          updateMutation.mutate();
        }}
      >
        <Row title="Organization name" description="This name is displayed throughout your workspace.">
          <Input
            id="organization-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            disabled={updateMutation.isPending || !canManage}
          />
        </Row>

        <Row title="Organization slug" description="Used to identify your organization in URLs.">
          <div className="flex flex-col gap-1.5">
            <Input
              id="organization-slug"
              value={slug}
              onChange={(event) => setSlug(event.target.value)}
              disabled={updateMutation.isPending || !canManage}
            />
            {!SLUG_REGEX.test(slug) && (
              <p className="text-xs text-destructive">
                Use lowercase letters, numbers, and single hyphens only.
              </p>
            )}
          </div>
        </Row>

        {error && <p className="border-t border-border pt-4 text-xs text-destructive">{error}</p>}
        {saved && !error && (
          <p className="border-t border-border pt-4 text-xs text-muted-foreground">
            Organization updated.
          </p>
        )}

        {canManage && (
          <div className="flex items-center justify-end gap-3 border-t border-border pt-6">
            <Button
              type="button"
              variant="outline"
              disabled={updateMutation.isPending || !dirty}
              onClick={() => {
                setName(organization.name);
                setSlug(organization.slug);
                setError(null);
                setSaved(false);
              }}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={updateMutation.isPending || !dirty}>
              {updateMutation.isPending && (
                <HugeiconsIcon icon={Loading03Icon} className="animate-spin" />
              )}
              Save changes
            </Button>
          </div>
        )}
      </form>

      <div className="mt-8 rounded-lg border border-border">
        <div className="p-4">
          <p className="text-sm font-medium">Leave organization</p>
          <p className="mt-1 text-xs/relaxed text-muted-foreground">
            {isOwner
              ? "You're the owner. Transfer ownership to another member before leaving."
              : isLastOrganization
                ? "You cannot leave your last organization."
                : "Revoke your access to this organization."}
          </p>
        </div>
        <div className="flex justify-end border-t border-border p-3">
          <Button
            type="button"
            variant="destructive"
            disabled={isOwner || isLastOrganization || leaveMutation.isPending}
            onClick={() => setLeaveOpen(true)}
          >
            Leave organization
          </Button>
        </div>
      </div>

      {isOwner && (
        <div className="mt-3 rounded-lg border border-destructive/40">
          <div className="p-4">
            <p className="text-sm font-medium">Delete organization</p>
            <p className="mt-1 text-xs/relaxed text-muted-foreground">
              {isLastOrganization
                ? "You cannot delete your last organization."
                : `This permanently removes ${organization.name} and all memberships.`}
            </p>
          </div>
          <div className="flex justify-end border-t border-destructive/40 p-3">
            <Button
              type="button"
              variant="destructive"
              disabled={isLastOrganization || deleteMutation.isPending}
              onClick={() => setDeleteOpen(true)}
            >
              Delete organization
            </Button>
          </div>
        </div>
      )}

      <AlertDialog open={leaveOpen} onOpenChange={(open) => !leaveMutation.isPending && setLeaveOpen(open)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Leave organization?</AlertDialogTitle>
            <AlertDialogDescription>
              You will lose access to {organization.name}.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={leaveMutation.isPending}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              disabled={leaveMutation.isPending}
              onClick={() => leaveMutation.mutate()}
            >
              {leaveMutation.isPending && (
                <HugeiconsIcon icon={Loading03Icon} className="animate-spin" />
              )}
              Leave organization
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={deleteOpen} onOpenChange={(open) => !deleteMutation.isPending && setDeleteOpen(open)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete {organization.name}?</AlertDialogTitle>
            <AlertDialogDescription>
              This cannot be undone. Type the organization name to confirm.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Input
            aria-label="Organization name"
            placeholder={organization.name}
            value={deleteConfirmName}
            onChange={(event) => setDeleteConfirmName(event.target.value)}
            disabled={deleteMutation.isPending}
          />
          <AlertDialogFooter>
            <AlertDialogCancel
              disabled={deleteMutation.isPending}
              onClick={() => setDeleteConfirmName("")}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              disabled={deleteMutation.isPending || deleteConfirmName !== organization.name}
              onClick={() => deleteMutation.mutate()}
            >
              {deleteMutation.isPending && (
                <HugeiconsIcon icon={Loading03Icon} className="animate-spin" />
              )}
              Delete organization
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
