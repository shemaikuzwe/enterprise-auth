"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { HugeiconsIcon } from "@hugeicons/react"
import { MoonIcon, SunIcon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {mounted && resolvedTheme === "dark" ? (
        <HugeiconsIcon icon={MoonIcon} />
      ) : (
        <HugeiconsIcon icon={SunIcon} />
      )}
    </Button>
  )
}

export { ThemeToggle }
