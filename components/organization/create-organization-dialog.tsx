"use client";

import { Loading03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import { Button } from "@/components/ui/button";
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
import { authClient } from "@/lib/auth-client";
import { toSlug } from "@/lib/utils";

export function CreateOrganizationDialog({
  open,
  onOpenChange,
  onCreated,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreated?: () => void;
}) {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const createMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await authClient.organization.create({
        name,
        slug: toSlug(name),
      });
      if (error) throw new Error(error.message ?? "Failed to create organization");
      return data;
    },
    onSuccess: async (organization) => {
      if (organization) {
        await authClient.organization.setActive({ organizationId: organization.id });
      }
      setName("");
      setError(null);
      onOpenChange(false);
      onCreated?.();
    },
    onError: (mutationError) => setError(mutationError.message),
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setError(null);
            createMutation.mutate();
          }}
        >
          <DialogHeader>
            <DialogTitle>New organization</DialogTitle>
            <DialogDescription>
              You&apos;ll be added as its owner.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-1.5 py-5">
            <Label htmlFor="organization-name">Name</Label>
            <Input
              id="organization-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Acme Inc."
              required
              disabled={createMutation.isPending}
            />
            {name && (
              <p className="text-xs text-muted-foreground">
                Slug: {toSlug(name)}
              </p>
            )}
            {error && <p className="text-xs text-destructive">{error}</p>}
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={createMutation.isPending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={createMutation.isPending}>
              {createMutation.isPending && (
                <HugeiconsIcon icon={Loading03Icon} className="animate-spin" />
              )}
              {createMutation.isPending ? "Creating…" : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
