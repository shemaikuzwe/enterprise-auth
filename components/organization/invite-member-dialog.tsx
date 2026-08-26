"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { UserAdd01Icon } from "@hugeicons/core-free-icons"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authClient } from "@/lib/auth-client"

const roles = ["member", "admin"] as const

export function InviteMemberDialog({ organizationId }: { organizationId: string }) {
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [role, setRole] = useState<(typeof roles)[number]>("member")
  const [error, setError] = useState<string | null>(null)

  const inviteMutation = useMutation({
    mutationFn: async () => {
      const { error } = await authClient.organization.inviteMember({
        email,
        role,
        organizationId,
      })
      if (error) throw new Error(error.message ?? "Failed to send the invitation")
    },
    onSuccess: async () => {
      setEmail("")
      setRole("member")
      setOpen(false)
      setError(null)
      await queryClient.invalidateQueries({
        queryKey: ["organization", organizationId],
      })
    },
    onError: (mutationError) => setError(mutationError.message),
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline" size="sm" type="button" />}>
        <HugeiconsIcon icon={UserAdd01Icon} data-icon="inline-start" />
        Invite
      </DialogTrigger>
      <DialogContent>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            setError(null)
            inviteMutation.mutate()
          }}
        >
          <DialogHeader>
            <DialogTitle>Invite a member</DialogTitle>
            <DialogDescription>
              They&apos;ll get an email with a link to accept.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-5">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="invite-email">Email</Label>
              <Input
                id="invite-email"
                type="email"
                autoComplete="email"
                placeholder="member@example.com"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Role</Label>
              <div className="flex gap-2">
                {roles.map((option) => (
                  <Button
                    key={option}
                    type="button"
                    size="sm"
                    variant={role === option ? "default" : "outline"}
                    className="capitalize"
                    onClick={() => setRole(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
            {error && <p className="text-xs text-destructive">{error}</p>}
          </div>
          <DialogFooter>
            <Button type="submit" disabled={inviteMutation.isPending}>
              {inviteMutation.isPending ? "Sending…" : "Send invitation"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
