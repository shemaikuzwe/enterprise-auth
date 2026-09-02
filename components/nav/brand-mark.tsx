import { HugeiconsIcon } from "@hugeicons/react"
import { ShieldKeyIcon } from "@hugeicons/core-free-icons"
import Link from "next/link"

export function BrandMark() {
  return (
    <Link href="/home" className="flex shrink-0 items-center gap-2 font-medium">
      <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <HugeiconsIcon icon={ShieldKeyIcon} className="size-4" />
      </span>
      Acme Inc.
    </Link>
  )
}
