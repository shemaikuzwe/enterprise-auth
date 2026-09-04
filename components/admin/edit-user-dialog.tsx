"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

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
import { authClient, type User } from "@/lib/auth-client";
import {
  editUserSchema,
  type EditUserValues,
} from "@/lib/validations/admin";

interface EditUserDialogProps {
  user: User;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EditUserDialog({ user, open, onOpenChange }: EditUserDialogProps) {
  const queryClient = useQueryClient();
  const form = useForm<EditUserValues>({
    resolver: zodResolver(editUserSchema),
    defaultValues: { name: user.name, email: user.email },
  });

  useEffect(() => {
    if (open) form.reset({ name: user.name, email: user.email });
  }, [open, user, form]);

  const updateMutation = useMutation({
    mutationFn: async (values: EditUserValues) => {
      const { error } = await authClient.admin.updateUser({
        userId: user.id,
        data: values,
      });
      if (error) throw new Error(error.message ?? "Failed to update user");
    },
    onSuccess: async () => {
      toast.success("User updated");
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
          <DialogTitle>Edit user</DialogTitle>
          <DialogDescription>Update the profile details for {user.email}.</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={form.handleSubmit((values) => updateMutation.mutate(values))}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="edit-user-name">Full name</Label>
            <Input
              id="edit-user-name"
              autoComplete="name"
              disabled={updateMutation.isPending}
              {...form.register("name")}
            />
            {form.formState.errors.name && (
              <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="edit-user-email">Email</Label>
            <Input
              id="edit-user-email"
              type="email"
              autoComplete="email"
              disabled={updateMutation.isPending}
              {...form.register("email")}
            />
            {form.formState.errors.email && (
              <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
            )}
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={updateMutation.isPending}
            >
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
