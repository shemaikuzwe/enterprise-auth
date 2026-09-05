"use client";

import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";

export type InviteInfo = {
  id: string;
  email: string;
  role: string | null;
  status: string;
  expiresAt: string;
  organizationName: string;
  inviterEmail: string;
};

export function AcceptInvite({
  invitation,
  viewerEmail,
}: {
  invitation: InviteInfo | null;
  viewerEmail: string | null;
}) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const respondMutation = useMutation({
    mutationFn: async (accept: boolean) => {
      if (!invitation) throw new Error("This invitation is no longer available.");
      if (accept) {
        const { data, error } = await authClient.organization.acceptInvitation({
          invitationId: invitation.id,
        });
        if (error) throw new Error(error.message ?? "Failed to accept the invitation");
        if (data?.invitation.organizationId) {
          await authClient.organization.setActive({
            organizationId: data.invitation.organizationId,
          });
        }
        return;
      }
      const { error } = await authClient.organization.rejectInvitation({
        invitationId: invitation.id,
      });
      if (error) throw new Error(error.message ?? "Failed to decline the invitation");
    },
    onSuccess: (_data, accept) => {
      if (accept) {
        router.push("/home");
        router.refresh();
      } else {
        router.push("/signin");
      }
    },
    onError: (mutationError) => setError(mutationError.message),
  });

  if (!invitation) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Invitation not found</CardTitle>
          <CardDescription>
            This invitation doesn&apos;t exist or was revoked.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="outline" className="w-full" render={<Link href="/signin" />}>
            Go to sign in
          </Button>
        </CardFooter>
      </Card>
    );
  }

  const isExpired =
    invitation.status !== "pending" || new Date(invitation.expiresAt) < new Date();
  const signInUrl = `/signin?email=${encodeURIComponent(invitation.email)}&redirect=${encodeURIComponent(`/invite/${invitation.id}`)}`;
  const signUpUrl = `/signup?email=${encodeURIComponent(invitation.email)}&redirect=${encodeURIComponent(`/invite/${invitation.id}`)}`;
  const emailMatches =
    viewerEmail != null &&
    viewerEmail.toLowerCase() === invitation.email.toLowerCase();

  const role = invitation.role ?? "member";

  const signOutMutation = useMutation({
    mutationFn: async () => {
      const { error } = await authClient.signOut();
      if (error) throw new Error(error.message ?? "Failed to sign out");
    },
    onSuccess: () => {
      window.location.href = signInUrl;
    },
    onError: (mutationError: Error) => setError(mutationError.message),
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">
          Join {invitation.organizationName}
        </CardTitle>
        <CardDescription>
          <span className="font-medium text-foreground">{invitation.inviterEmail}</span>{" "}
          invited you to join <span className="font-medium text-foreground">{invitation.organizationName}</span>{" "}
          as a {role}.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {isExpired ? (
          <p className="text-sm text-muted-foreground" aria-live="polite">
            This invitation is no longer available. Ask the sender to send a new one.
          </p>
        ) : error ? (
          <p className="text-xs text-destructive">{error}</p>
        ) : null}

        {!isExpired && viewerEmail == null && (
          <div className="flex flex-col gap-2">
            <Button className="w-full" render={<Link href={signInUrl} />}>
              Sign in to accept
            </Button>
            <Button variant="outline" className="w-full" render={<Link href={signUpUrl} />}>
              Create an account
            </Button>
          </div>
        )}

        {!isExpired && viewerEmail != null && !emailMatches && (
          <div className="flex flex-col gap-3">
            <p className="text-xs text-muted-foreground" aria-live="polite">
              This invitation is for{" "}
              <span className="font-medium text-foreground">{invitation.email}</span>, you&apos;re
              signed in as{" "}
              <span className="font-medium text-foreground">{viewerEmail}</span>.
            </p>
            <Button
              variant="outline"
              className="w-full"
              disabled={signOutMutation.isPending}
              onClick={() => signOutMutation.mutate()}
            >
              {signOutMutation.isPending ? "Signing out…" : "Sign out and switch account"}
            </Button>
          </div>
        )}
      </CardContent>
      {!isExpired && emailMatches && (
        <CardFooter className="flex-col gap-2">
          <div className="flex w-full gap-2">
            <Button
              variant="outline"
              className="flex-1"
              type="button"
              disabled={respondMutation.isPending}
              onClick={() => respondMutation.mutate(false)}
            >
              Decline
            </Button>
            <Button
              className="flex-1"
              type="button"
              disabled={respondMutation.isPending}
              onClick={() => respondMutation.mutate(true)}
            >
              {respondMutation.isPending ? "Joining…" : "Accept"}
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
