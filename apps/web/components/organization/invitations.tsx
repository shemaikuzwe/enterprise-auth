"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";

export function Invitations({ organizationId }: { organizationId: string }) {
  const queryClient = useQueryClient()
  const [error, setError] = useState<string | null>(null)

  const organizationQuery = useQuery({
    queryKey: ["organization", organizationId],
    queryFn: async () => {
      const { data, error } = await authClient.organization.getFullOrganization({
        query: { organizationId },
      })
      if (error) throw error
      return data
    },
  })

  const cancelInvitationMutation = useMutation({
    mutationFn: async (invitationId: string) => {
      const { error } = await authClient.organization.cancelInvitation({ invitationId })
      if (error) throw new Error(error.message ?? "Failed to cancel invitation")
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["organization", organizationId] }),
    onError: (mutationError) => setError(mutationError.message),
  })

  const pendingInvitations = (organizationQuery.data?.invitations ?? []).filter(
    (invitation) => invitation.status === "pending",
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Invitations</CardTitle>
        <CardDescription>
          Pending invitations to this organization.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {organizationQuery.isPending ? (
          <p className="py-3 text-sm text-muted-foreground">Loading invitations…</p>
        ) : pendingInvitations.length === 0 ? (
          <p className="py-3 text-sm text-muted-foreground">No pending invitations.</p>
        ) : (
          pendingInvitations.map((invitation) => (
            <div key={invitation.id} className="flex items-center gap-3">
              <span className="truncate text-sm text-muted-foreground">
                {invitation.email}
              </span>
              <Badge variant="outline" className="ml-auto capitalize">
                {invitation.role ?? "member"}
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                type="button"
                disabled={cancelInvitationMutation.isPending}
                onClick={() => cancelInvitationMutation.mutate(invitation.id)}
              >
                Cancel
              </Button>
            </div>
          ))
        )}

        {error && <p className="text-xs text-destructive">{error}</p>}
      </CardContent>
    </Card>
  )
}
