"use client"

import Image from "next/image"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

import { useSession } from "@/components/session-provider"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { authClient } from "@/lib/auth-client"

const providers = [
  { id: "google", name: "Google", icon: "/google.svg" },
  { id: "github", name: "GitHub", icon: "/github.svg" },
] as const

export function Account() {
  const queryClient = useQueryClient()
  const session = useSession()
  const [disconnectingAccountId, setDisconnectingAccountId] = useState<
    string | null
  >(null)

  const accountsQuery = useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      const { data, error } = await authClient.listAccounts()
      if (error) throw error
      return data ?? []
    },
  })

  const unlinkAccountMutation = useMutation({
    mutationFn: async (accountId: string) => {
      const { error } = await authClient.unlinkAccount({ accountId })
      if (error) throw error
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["accounts"] })
      setDisconnectingAccountId(null)
    },
  })

  const linkAccountMutation = useMutation({
    mutationFn: async (provider: (typeof providers)[number]["id"]) => {
      const { error } = await authClient.linkSocial({
        provider,
        callbackURL: "/settings/account",
      })
      if (error) throw error
    },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Connected accounts</CardTitle>
        <CardDescription>
          Link providers to sign in with one click. Unlink any you no longer
          use.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col divide-y">
        {accountsQuery.isPending ? (
          <p className="py-3 text-sm text-muted-foreground">
            Loading accounts…
          </p>
        ) : (
          providers.map((provider) => {
            const account = accountsQuery.data?.find(
              (item) => item.providerId === provider.id,
            )

            return (
              <div
              key={provider.id}
              className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
                <Image src={provider.icon} alt="" width={16} height={16} className={provider.id === "github" ? "size-4 dark:invert" : "size-4"} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-medium">{provider.name}</p>
                <p className="truncate text-muted-foreground">
                  {account ? session?.user.email : "Not connected"}
                </p>
              </div>
              {account ? (
                <Dialog
                  open={disconnectingAccountId === account.id}
                  onOpenChange={(open) => {
                    if (!unlinkAccountMutation.isPending) {
                      setDisconnectingAccountId(open ? account.id : null)
                      unlinkAccountMutation.reset()
                    }
                  }}
                >
                  <DialogTrigger
                    render={
                      <Button variant="destructive" size="xs" type="button" />
                    }
                  >
                    Disconnect
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Disconnect {provider.name}?</DialogTitle>
                      <DialogDescription>
                        You will no longer be able to sign in with this account.
                      </DialogDescription>
                      {unlinkAccountMutation.isError && (
                        <p className="text-destructive">
                          {unlinkAccountMutation.error.message
                            ?? "An error occurred."}
                        </p>
                      )}
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose
                        render={
                          <Button
                            variant="outline"
                            disabled={unlinkAccountMutation.isPending}
                          />
                        }
                      >
                        Cancel
                      </DialogClose>
                      <Button
                        variant="destructive"
                        disabled={unlinkAccountMutation.isPending}
                        onClick={() =>
                          unlinkAccountMutation.mutate(account.id)
                        }
                      >
                        {unlinkAccountMutation.isPending
                          ? "Disconnecting…"
                          : "Disconnect"}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  type="button"
                  disabled={linkAccountMutation.isPending}
                  onClick={() => linkAccountMutation.mutate(provider.id)}
                >
                  {linkAccountMutation.isPending &&
                  linkAccountMutation.variables === provider.id
                    ? "Connecting…"
                    : "Connect"}
                </Button>
              )}
              </div>
            )
          })
        )}
      </CardContent>
    </Card>
  )
}
