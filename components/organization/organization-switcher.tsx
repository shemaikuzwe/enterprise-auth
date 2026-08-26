"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { Add01Icon } from "@hugeicons/core-free-icons"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
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

function toSlug(name: string) {
  return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}

export function OrganizationSwitcher({ activeId }: { activeId?: string }) {
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [error, setError] = useState<string | null>(null)

  const organizationsQuery = useQuery({
    queryKey: ["organizations"],
    queryFn: async () => {
      const { data, error } = await authClient.organization.list()
      if (error) throw error
      return data ?? []
    },
  })

  const setActiveMutation = useMutation({
    mutationFn: async (organizationId: string) => {
      const { error } = await authClient.organization.setActive({ organizationId })
      if (error) throw error
    },
    onSuccess: () => queryClient.invalidateQueries(),
  })

  const createMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await authClient.organization.create({
        name,
        slug: toSlug(name),
      })
      if (error) throw new Error(error.message ?? "Failed to create organization")
      return data
    },
    onSuccess: async (organization) => {
      if (organization) {
        await authClient.organization.setActive({ organizationId: organization.id })
      }
      setName("")
      setOpen(false)
      setError(null)
      await queryClient.invalidateQueries()
    },
    onError: (mutationError) => setError(mutationError.message),
  })

  const organizations = organizationsQuery.data ?? []

  return (
    <div className="flex flex-wrap items-center gap-2">
      {organizations.map((organization) => (
        <Button
          key={organization.id}
          variant={organization.id === activeId ? "default" : "outline"}
          size="sm"
          type="button"
          disabled={setActiveMutation.isPending}
          onClick={() => setActiveMutation.mutate(organization.id)}
        >
          {organization.name}
        </Button>
      ))}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger render={<Button variant="ghost" size="sm" type="button" />}>
          <HugeiconsIcon icon={Add01Icon} data-icon="inline-start" />
          New
        </DialogTrigger>
        <DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              setError(null)
              createMutation.mutate()
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
              />
              {name && (
                <p className="text-xs text-muted-foreground">
                  Slug: {toSlug(name)}
                </p>
              )}
              {error && <p className="text-xs text-destructive">{error}</p>}
            </div>
            <DialogFooter>
              <Button type="submit" disabled={createMutation.isPending}>
                {createMutation.isPending ? "Creating…" : "Create"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
