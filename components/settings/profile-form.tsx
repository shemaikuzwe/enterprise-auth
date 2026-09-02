"use client";

import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { useSession } from "@/components/session-provider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";

export function ProfileForm() {
  const session = useSession();
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (session) {
      setName(session.user.name);
    }
  }, [session]);

  const updateMutation = useMutation({
    mutationFn: async (values: { name: string; }) => {
      const { error } = await authClient.updateUser({
        name: values.name,
      });
      if (error) throw new Error(error.message ?? "Failed to update your profile");
    },
    onSuccess: async () => {
      setSaved(true);
      setError(null);
    },
    onError: (mutationError) => {
      setSaved(false);
      setError(mutationError.message);
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Profile</CardTitle>
        <CardDescription>How you appear to people in your workspace.</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSaved(false);
            updateMutation.mutate({ name });
          }}
          className="flex max-w-sm flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="profile-name">Full name</Label>
            <Input
              id="profile-name"
              autoComplete="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              disabled={updateMutation.isPending}
            />
          </div>
          {error && <p className="text-xs text-destructive">{error}</p>}
          {saved && !error && <p className="text-xs text-muted-foreground">Profile updated.</p>}
          <div className="flex items-center gap-2">
            <Button type="submit" disabled={updateMutation.isPending}>
              {updateMutation.isPending ? "Saving…" : "Save"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
