"use client";

import { Loading03Icon, LogoutIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useSession } from "@/components/session-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";

export function UserMenu() {
  const router = useRouter();
  const session = useSession();

  const signOutMutation = useMutation({
    mutationFn: () => authClient.signOut(),
    onSuccess: () => {
      router.replace("/signin")
      router.refresh()
    },
  })

  const name = session?.user.name ?? "";
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="ghost" size="icon-sm" aria-label="Account menu" className="rounded-full" />}
      >
        <Avatar size="default">
          {session?.user.image ? <AvatarImage src={session.user.image} alt="" /> : null}
          <AvatarFallback>{initials || "?"}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="w-56 p-1.5">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex flex-col gap-0.5">
            <span className="truncate text-xs font-medium text-foreground">{name || "Signed in"}</span>
            <span className="truncate font-normal">{session?.user.email}</span>
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="my-1.5" />
        <DropdownMenuGroup>
          <DropdownMenuItem render={<Link href="/settings/account" />}>
            Account settings
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={signOutMutation.isPending}
            onClick={() => signOutMutation.mutate()}
            className="gap-2"
          >
            {signOutMutation.isPending ? (
              <HugeiconsIcon icon={Loading03Icon} className="size-3.5 animate-spin" />
            ) : (
              <HugeiconsIcon icon={LogoutIcon} className="size-3.5" />
            )}
            Sign out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
