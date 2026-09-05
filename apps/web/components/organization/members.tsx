"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

import { InviteMemberDialog } from "@/components/organization/invite-member-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { authClient } from "@/lib/auth-client"

export function Members({ organizationId }: { organizationId: string }) {
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

  const removeMemberMutation = useMutation({
    mutationFn: async (memberIdOrEmail: string) => {
      const { error } = await authClient.organization.removeMember({
        memberIdOrEmail,
        organizationId,
      })
      if (error) throw new Error(error.message ?? "Failed to remove member")
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["organization", organizationId] }),
    onError: (mutationError) => setError(mutationError.message),
  })

  const members = organizationQuery.data?.members ?? []

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Members</CardTitle>
        <CardDescription>
          People with access to this organization.
        </CardDescription>
        <div className="w-24 flex">
          <InviteMemberDialog organizationId={organizationId} />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {members.map((member) => (
          <div key={member.id} className="flex items-center gap-3">
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-medium">{member.user.name}</span>
              <span className="truncate text-xs text-muted-foreground">
                {member.user.email}
              </span>
            </div>
            <Badge variant="secondary" className="ml-auto capitalize">
              {member.role}
            </Badge>
            {member.role !== "owner" && (
              <Button
                variant="ghost"
                size="sm"
                type="button"
                disabled={removeMemberMutation.isPending}
                onClick={() => removeMemberMutation.mutate(member.id)}
              >
                Remove
              </Button>
            )}
          </div>
        ))}

        {error && <p className="text-xs text-destructive">{error}</p>}
      </CardContent>
    </Card>
  )
}
