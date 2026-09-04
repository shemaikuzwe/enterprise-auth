"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { FingerPrintIcon, Add01Icon } from "@hugeicons/core-free-icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
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

type Passkey = {
  id: string;
  name: string | null;
  createdAt: Date | string;
};

async function fetchPasskeys(): Promise<Passkey[]> {
  const { data, error } = await authClient.passkey.listUserPasskeys();
  if (error) throw new Error(error.message ?? "Could not load passkeys");
  return (data ?? []) as Passkey[];
}

export function PasskeySettings() {
  const queryClient = useQueryClient();
  const passkeysQuery = useQuery({ queryKey: ["passkeys"], queryFn: fetchPasskeys });

  const [addOpen, setAddOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [renameTarget, setRenameTarget] = useState<Passkey | null>(null);
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);

  function invalidate() {
    void queryClient.invalidateQueries({ queryKey: ["passkeys"] });
  }

  const addMutation = useMutation({
    mutationFn: async (nextName: string) => {
      const { error } = await authClient.passkey.addPasskey({
        name: nextName || undefined,
      });
      if (error) throw new Error(error.message ?? "Could not add passkey");
    },
    onSuccess: () => {
      setName("");
      setAddOpen(false);
      invalidate();
    },
    onError: (err: Error) => setError(err.message),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await authClient.passkey.deletePasskey({ id });
      if (error) throw new Error(error.message ?? "Could not delete passkey");
    },
    onSuccess: () => {
      setDeleteId(null);
      invalidate();
    },
    onError: (err: Error) => setError(err.message),
  });

  const renameMutation = useMutation({
    mutationFn: async ({ id, nextName }: { id: string; nextName: string }) => {
      const { error } = await authClient.passkey.updatePasskey({ id, name: nextName });
      if (error) throw new Error(error.message ?? "Could not rename passkey");
    },
    onSuccess: () => {
      setRenameTarget(null);
      setName("");
      invalidate();
    },
    onError: (err: Error) => setError(err.message),
  });

  const passkeys = passkeysQuery.data ?? [];

  return (
    <div className="flex flex-col gap-6">
      <section className="flex items-center gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-muted">
          <HugeiconsIcon icon={FingerPrintIcon} className="size-6" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-2 text-sm font-medium">
            Passkeys
            <Badge variant="secondary">{passkeys.length}</Badge>
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Sign in with Face ID, Touch ID, Windows Hello, or a security key.
          </p>
        </div>
        <Button
          type="button"
          onClick={() => {
            setError(null);
            setName("");
            setAddOpen(true);
          }}
        >
          <HugeiconsIcon icon={Add01Icon} data-icon="inline-start" />
          Add passkey
        </Button>
      </section>

      {passkeysQuery.isPending ? (
        <p className="text-xs text-muted-foreground">Loading passkeys…</p>
      ) : passkeysQuery.isError ? (
        <p className="text-xs text-destructive">Could not load passkeys. Try reloading the page.</p>
      ) : passkeys.length === 0 ? (
        <p className="text-xs text-muted-foreground">
          No passkeys yet.
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {passkeys.map((passkey) => (
            <li
              key={passkey.id}
              className="flex items-center gap-3 rounded-lg border px-3 py-2.5"
            >
              <HugeiconsIcon icon={FingerPrintIcon} className="size-5 shrink-0 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{passkey.name || "Passkey"}</p>
                <p className="text-xs text-muted-foreground">
                  Added {new Date(passkey.createdAt).toLocaleDateString()}
                </p>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => {
                  setError(null);
                  setName(passkey.name ?? "");
                  setRenameTarget(passkey);
                }}
              >
                Rename
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-destructive hover:text-destructive"
                onClick={() => {
                  setError(null);
                  setDeleteId(passkey.id);
                }}
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      )}

      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add a passkey</DialogTitle>
            <DialogDescription>
              Give this passkey a name, then follow your browser&apos;s prompt to verify with your
              device.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="passkey-name">Name(Optional)</Label>
            <Input
              id="passkey-name"
              placeholder="e.g. MacBook Touch ID"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          {error && <p className="text-xs text-destructive">{error}</p>}
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setAddOpen(false)}>
              Cancel
            </Button>
            <Button
              type="button"
              onClick={() => addMutation.mutate(name.trim())}
              disabled={addMutation.isPending}
            >
              {addMutation.isPending ? "Waiting for device…" : "Add passkey"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={renameTarget !== null} onOpenChange={(open) => !open && setRenameTarget(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rename passkey</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="passkey-rename">Name</Label>
            <Input
              id="passkey-rename"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          {error && <p className="text-xs text-destructive">{error}</p>}
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setRenameTarget(null)}>
              Cancel
            </Button>
            <Button
              type="button"
              onClick={() =>
                renameTarget && renameMutation.mutate({ id: renameTarget.id, nextName: name.trim() })
              }
              disabled={renameMutation.isPending || !name.trim()}
            >
              {renameMutation.isPending ? "Saving…" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={deleteId !== null} onOpenChange={(open) => !open && setDeleteId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Remove this passkey?</DialogTitle>
            <DialogDescription>
              You won&apos;t be able to sign in with this device until you add it again.
            </DialogDescription>
          </DialogHeader>
          {error && <p className="text-xs text-destructive">{error}</p>}
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setDeleteId(null)}>
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={() => deleteId && deleteMutation.mutate(deleteId)}
              disabled={deleteMutation.isPending}
            >
              {deleteMutation.isPending ? "Removing…" : "Remove"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
