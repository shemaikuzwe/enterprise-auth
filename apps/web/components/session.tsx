"use client"

import {
  LaptopIcon,
  SmartphoneIcon,
  TabletIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { formatDistanceToNow } from "date-fns"

import { useSession } from "@/components/session-provider"
import { Badge } from "@/components/ui/badge"
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
import { formatUserAgent, getDeviceType } from "@/lib/utils"

const deviceIcons = {
  desktop: LaptopIcon,
  mobile: SmartphoneIcon,
  tablet: TabletIcon,
} as const

function deviceIcon(userAgent: string | null | undefined) {
  if (!userAgent) return LaptopIcon
  return deviceIcons[getDeviceType(userAgent)]
}

export function Session() {
  const queryClient = useQueryClient()
  const session = useSession()

  const sessionsQuery = useQuery({
    queryKey: ["sessions"],
    queryFn: async () => {
      const { data, error } = await authClient.listSessions()
      if (error) throw error
      return data ?? []
    },
  })

  const revokeSessionMutation = useMutation({
    mutationFn: (token: string) => authClient.revokeSession({ token }),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["sessions"] }),
  })

  const revokeSessionsMutation = useMutation({
    mutationFn: () => authClient.revokeSessions(),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["sessions"] }),
  })

  const sessions = sessionsQuery.data ?? []
  const currentToken = session?.session.token

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Active sessions</CardTitle>
        <CardDescription>
          Devices currently signed in to your account. Revoke any you don&apos;t
          recognize.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {sessionsQuery.isPending ? (
          <p className="py-3 text-sm text-muted-foreground">
            Loading sessions…
          </p>
        ) : (
          <div className="flex flex-col divide-y">
            {sessions.map((item) => (
              <div
                key={item.token}
                className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
                  <HugeiconsIcon
                    icon={deviceIcon(item.userAgent)}
                    className="size-4"
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-2 font-medium">
                    <span className="truncate">
                      {formatUserAgent(item.userAgent ?? "")}
                    </span>
                    {item.token === currentToken && (
                      <Badge variant="secondary">This device</Badge>
                    )}
                  </p>
                  <p className="truncate text-muted-foreground">
                    {item.ipAddress ?? "Unknown IP"}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1.5">
                  <span className="text-xs text-muted-foreground">
                    {formatDistanceToNow(item.updatedAt, { addSuffix: true })}
                  </span>
                  {item.token !== currentToken && (
                    <Dialog>
                      <DialogTrigger
                        render={
                          <Button
                            variant="destructive"
                            size="xs"
                            type="button"
                          />
                        }
                      >
                        Revoke
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Revoke this session?</DialogTitle>
                          <DialogDescription>
                            This device will be signed out and will need to
                            authenticate again.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <DialogClose render={<Button variant="outline" />}>
                            Cancel
                          </DialogClose>
                          <DialogClose
                            render={
                              <Button
                                variant="destructive"
                                disabled={revokeSessionMutation.isPending}
                                onClick={() =>
                                  revokeSessionMutation.mutate(item.token)
                                }
                              />
                            }
                          >
                            Revoke session
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {sessions.length > 1 && (
          <Dialog>
            <DialogTrigger
              render={
                <Button
                  variant="destructive"
                  size="sm"
                  type="button"
                  className="self-start"
                />
              }
            >
              Sign out other devices
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Sign out all other devices?</DialogTitle>
                <DialogDescription>
                  Every session except this device will be revoked.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>
                  Cancel
                </DialogClose>
                <DialogClose
                  render={
                    <Button
                      variant="destructive"
                      disabled={revokeSessionsMutation.isPending}
                      onClick={() => revokeSessionsMutation.mutate()}
                    />
                  }
                >
                  Sign out devices
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </CardContent>
    </Card>
  )
}
