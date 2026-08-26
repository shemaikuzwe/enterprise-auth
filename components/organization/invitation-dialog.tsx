"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter, useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { authClient } from "@/lib/auth-client"

export function InvitationDialog() {
  const queryClient = useQueryClient()
  const router = useRouter()
  const searchParams = useSearchParams()
  const invitationId = searchParams.get("invite")

  function dismiss() {
    const next = new URLSearchParams(searchParams.toString())
    next.delete("invite")
    const query = next.toString()
    router.replace(query ? `?${query}` : "/profile", { scroll: false })
  }

  const invitationQuery = useQuery({
    queryKey: ["invitation", invitationId],
    enabled: Boolean(invitationId),
    retry: false,
    queryFn: async () => {
      const { data, error } = await authClient.organization.getInvitation({
        query: { id: invitationId! },
      })
      if (error) throw error
      return data
    },
  })

  const respondMutation = useMutation({
    mutationFn: async (accept: boolean) => {
      if (accept) {
        const { data, error } = await authClient.organization.acceptInvitation({
          invitationId: invitationId!,
        })
        if (error) throw new Error(error.message ?? "Failed to accept the invitation")
        if (data?.invitation.organizationId) {
          await authClient.organization.setActive({
            organizationId: data.invitation.organizationId,
          })
        }
        return
      }
      const { error } = await authClient.organization.rejectInvitation({
        invitationId: invitationId!,
      })
      if (error) throw new Error(error.message ?? "Failed to decline the invitation")
    },
    onSuccess: async () => {
      dismiss()
      await queryClient.invalidateQueries()
    },
  })

  if (!invitationId) return null

  const invitation = invitationQuery.data
  const failure = invitationQuery.error ?? respondMutation.error

  return (
    <Dialog open onOpenChange={dismiss}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {invitation
              ? `Join ${invitation.organizationName}`
              : "Invitation"}
          </DialogTitle>
          <DialogDescription>
            {invitation
              ? `${invitation.inviterEmail} invited you as ${invitation.role}.`
              : "This invitation is no longer available."}
          </DialogDescription>
        </DialogHeader>
        {failure && (
          <p className="text-xs text-destructive">
            {failure instanceof Error ? failure.message : "Something went wrong"}
          </p>
        )}
        {invitation && (
          <DialogFooter>
            <Button
              variant="outline"
              type="button"
              disabled={respondMutation.isPending}
              onClick={() => respondMutation.mutate(false)}
            >
              Decline
            </Button>
            <Button
              type="button"
              disabled={respondMutation.isPending}
              onClick={() => respondMutation.mutate(true)}
            >
              {respondMutation.isPending ? "Joining…" : "Accept"}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}
