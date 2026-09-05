"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Delete02Icon,
  EditUser02Icon,
  Key01Icon,
  LoginSquare01Icon,
  MoreHorizontalIcon,
  UserSettings01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { EditUserDialog } from "./edit-user-dialog";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { authClient, type User } from "@/lib/auth-client";
import {
  banUserSchema,
  setPasswordSchema,
  type BanUserValues,
  type SetPasswordValues,
} from "@/lib/validations/admin";

export interface DialogProps {
  user: User;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RoleDialog({ user, open, onOpenChange }: DialogProps) {
  const queryClient = useQueryClient();
  const [role, setRole] = useState<"user" | "admin">(
    user.role === "admin" ? "admin" : "user",
  );

  const setRoleMutation = useMutation({
    mutationFn: async () => {
      const { error } = await authClient.admin.setRole({ userId: user.id, role });
      if (error) throw new Error(error.message ?? "Failed to change role");
    },
    onSuccess: async () => {
      toast.success("Role updated");
      await queryClient.invalidateQueries({ queryKey: ["user", user.id] });
      await queryClient.invalidateQueries({ queryKey: ["users"] });
      onOpenChange(false);
    },
    onError: (mutationError) => {
      toast.error(mutationError.message);
    },
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change role</DialogTitle>
          <DialogDescription>Set the access level for {user.name}.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="user-role">Role</Label>
          <Select
            value={role}
            onValueChange={(value) => {
              if (value) setRole(value);
            }}
            disabled={setRoleMutation.isPending}
          >
            <SelectTrigger id="user-role" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="user">User</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => setRoleMutation.mutate()}
            disabled={setRoleMutation.isPending || role === user.role}
          >
            {setRoleMutation.isPending ? "Saving…" : "Save role"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function PasswordDialog({ user, open, onOpenChange }: DialogProps) {
  const queryClient = useQueryClient();
  const form = useForm<SetPasswordValues>({
    resolver: zodResolver(setPasswordSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  const setPasswordMutation = useMutation({
    mutationFn: async (values: SetPasswordValues) => {
      const { error } = await authClient.admin.setUserPassword({
        userId: user.id,
        newPassword: values.password,
      });
      if (error) throw new Error(error.message ?? "Failed to set password");
    },
    onSuccess: async () => {
      toast.success("Password updated");
      form.reset();
      await queryClient.invalidateQueries({ queryKey: ["user", user.id] });
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
          <DialogTitle>Set password</DialogTitle>
          <DialogDescription>Set a new password for {user.name}.</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={form.handleSubmit((values) => setPasswordMutation.mutate(values))}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="new-password">New password</Label>
            <Input
              id="new-password"
              type="password"
              autoComplete="new-password"
              disabled={setPasswordMutation.isPending}
              {...form.register("password")}
            />
            {form.formState.errors.password && (
              <p className="text-xs text-destructive">{form.formState.errors.password.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="confirm-password">Confirm password</Label>
            <Input
              id="confirm-password"
              type="password"
              autoComplete="new-password"
              disabled={setPasswordMutation.isPending}
              {...form.register("confirmPassword")}
            />
            {form.formState.errors.confirmPassword && (
              <p className="text-xs text-destructive">
                {form.formState.errors.confirmPassword.message}
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
            <Button type="submit" disabled={setPasswordMutation.isPending}>
              {setPasswordMutation.isPending ? "Saving…" : "Set password"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function BanDialog({ user, open, onOpenChange }: DialogProps) {
  const queryClient = useQueryClient();
  const form = useForm<BanUserValues>({
    resolver: zodResolver(banUserSchema),
    defaultValues: { reason: "", duration: "604800" },
  });

  const banMutation = useMutation({
    mutationFn: async (values: BanUserValues) => {
      const { error } = await authClient.admin.banUser({
        userId: user.id,
        banReason: values.reason,
        ...(values.duration === "permanent" ? {} : { banExpiresIn: Number(values.duration) }),
      });
      if (error) throw new Error(error.message ?? "Failed to ban user");
    },
    onSuccess: async () => {
      toast.success("User banned");
      await queryClient.invalidateQueries({ queryKey: ["user", user.id] });
      await queryClient.invalidateQueries({ queryKey: ["users"] });
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
          <DialogTitle>Ban {user.name}?</DialogTitle>
          <DialogDescription>
            This immediately revokes all of the user&apos;s sessions.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={form.handleSubmit((values) => banMutation.mutate(values))}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="ban-reason">Reason</Label>
            <Input
              id="ban-reason"
              placeholder="Spam, abuse…"
              disabled={banMutation.isPending}
              {...form.register("reason")}
            />
            {form.formState.errors.reason && (
              <p className="text-xs text-destructive">{form.formState.errors.reason.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="ban-duration">Duration</Label>
            <Select
              value={form.watch("duration")}
              onValueChange={(value) => {
                if (value) form.setValue("duration", value as BanUserValues["duration"]);
              }}
              disabled={banMutation.isPending}
            >
              <SelectTrigger id="ban-duration" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="86400">24 hours</SelectItem>
                <SelectItem value="604800">7 days</SelectItem>
                <SelectItem value="2592000">30 days</SelectItem>
                <SelectItem value="permanent">Permanent</SelectItem>
              </SelectContent>
            </Select>
            {form.formState.errors.duration && (
              <p className="text-xs text-destructive">{form.formState.errors.duration.message}</p>
            )}
          </div>
          {form.formState.errors.root && (
            <p className="text-xs text-destructive">{form.formState.errors.root.message}</p>
          )}
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="destructive" disabled={banMutation.isPending}>
              {banMutation.isPending ? "Banning…" : "Ban user"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function UnbanDialog({ user, open, onOpenChange }: DialogProps) {
  const queryClient = useQueryClient();
  const unbanMutation = useMutation({
    mutationFn: async () => {
      const { error } = await authClient.admin.unbanUser({ userId: user.id });
      if (error) throw new Error(error.message ?? "Failed to unban user");
    },
    onSuccess: async () => {
      toast.success("User access restored");
      await queryClient.invalidateQueries({ queryKey: ["user", user.id] });
      await queryClient.invalidateQueries({ queryKey: ["users"] });
      onOpenChange(false);
    },
    onError: (mutationError) => {
      toast.error(mutationError.message);
    },
  });

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Unban {user.name}?</AlertDialogTitle>
          <AlertDialogDescription>The user will be allowed to sign in again.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={(event) => {
              event.preventDefault();
              unbanMutation.mutate();
            }}
            disabled={unbanMutation.isPending}
          >
            {unbanMutation.isPending ? "Restoring…" : "Unban user"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function firstName(name: string) {
  return name.trim().split(/\s+/)[0] || name;
}

export function LoginAsButton({ user }: { user: User }) {
  const impersonateMutation = useMutation({
    mutationFn: async () => {
      const { error } = await authClient.admin.impersonateUser({ userId: user.id });
      if (error) throw new Error(error.message ?? "Failed to log in as this user");
    },
    onSuccess: () => {
      toast.success(`Now signed in as ${user.name}`);
      window.location.replace("/home");
    },
    onError: (mutationError) => {
      toast.error(mutationError.message);
    },
  });

  return (
    <Button
      onClick={() => impersonateMutation.mutate()}
      disabled={impersonateMutation.isPending || !!user.banned}
    >
      <HugeiconsIcon icon={LoginSquare01Icon} className="size-4" />
      {impersonateMutation.isPending ? "Signing in…" : `Login as ${firstName(user.name)}`}
    </Button>
  );
}

export function DeleteDialog({ user, open, onOpenChange }: DialogProps) {
  const [confirmation, setConfirmation] = useState("");
  const router = useRouter();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const { error } = await authClient.admin.removeUser({ userId: user.id });
      if (error) throw new Error(error.message ?? "Failed to delete user");
    },
    onSuccess: async () => {
      toast.success("User deleted");
      await queryClient.invalidateQueries({ queryKey: ["users"] });
      onOpenChange(false);
      setConfirmation("");
      router.push("/users");
      router.refresh();
    },
    onError: (mutationError) => {
      toast.error(mutationError.message);
    },
  });

  return (
    <AlertDialog
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next);
        if (!next) setConfirmation("");
      }}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete {user.name}?</AlertDialogTitle>
          <AlertDialogDescription>
            Type <strong>{user.email}</strong> to confirm this permanent action.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Input
          id="delete-confirmation"
          value={confirmation}
          onChange={(event) => setConfirmation(event.target.value)}
          placeholder={user.email}
          disabled={deleteMutation.isPending}
        />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={(event) => {
              event.preventDefault();
              deleteMutation.mutate();
            }}
            disabled={deleteMutation.isPending || confirmation !== user.email}
          >
            {deleteMutation.isPending ? "Deleting…" : "Delete permanently"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export type UserActionDialog =
  | "edit"
  | "role"
  | "password"
  | "ban"
  | "unban"
  | "delete"
  | null;

export function UserPageActions({ user }: { user: User }) {
  const [dialog, setDialog] = useState<UserActionDialog>(null);
  const change = (name: Exclude<UserActionDialog, null>) => (open: boolean) =>
    setDialog(open ? name : null);

  return (
    <>
      <LoginAsButton user={user} />
      <Button variant="outline" onClick={() => setDialog("edit")}>
        <HugeiconsIcon icon={EditUser02Icon} className="size-4" />
        Edit user
      </Button>
      <Button variant="outline" onClick={() => setDialog("role")}>
        <HugeiconsIcon icon={UserSettings01Icon} className="size-4" />
        Change role
      </Button>
      <Button
        variant={user.banned ? "outline" : "destructive"}
        onClick={() => setDialog(user.banned ? "unban" : "ban")}
      >
        {user.banned ? "Unban" : "Ban"}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="outline" size="icon-lg" aria-label="More user actions" />}
        >
          <HugeiconsIcon icon={MoreHorizontalIcon} className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-44">
          <DropdownMenuItem onClick={() => setDialog("password")}>
            <HugeiconsIcon icon={Key01Icon} />
            Set password
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive" onClick={() => setDialog("delete")}>
            <HugeiconsIcon icon={Delete02Icon} />
            Delete user
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <EditUserDialog user={user} open={dialog === "edit"} onOpenChange={change("edit")} />
      <RoleDialog user={user} open={dialog === "role"} onOpenChange={change("role")} />
      <PasswordDialog user={user} open={dialog === "password"} onOpenChange={change("password")} />
      <BanDialog user={user} open={dialog === "ban"} onOpenChange={change("ban")} />
      <UnbanDialog user={user} open={dialog === "unban"} onOpenChange={change("unban")} />
      <DeleteDialog user={user} open={dialog === "delete"} onOpenChange={change("delete")} />
    </>
  );
}
