"use client";

import { cn } from "@/lib/utils";
import { Copy01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";


type CopyFieldProps = {
  value: string;
  copyLabel?: string;
  className?: string;
};

export function CopyField({ value, copyLabel = "Copy value", className }: CopyFieldProps) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    [],
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 1_500);
    } catch {
      toast.error("Could not copy to clipboard");
    }
  };

  return (
    <div className={cn("flex min-h-10 items-center  gap-1 px-2 py-1 bg-muted rounded-md", className)}>
      <span className="min-w-0 truncate font-medium text-foreground">{value}</span>
      <div className="flex shrink-0 items-center gap-1">
        <span className="sr-only" aria-live="polite">
          {copied ? "Copied" : ""}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          disabled={!value}
          aria-label={copied ? "Copied" : copyLabel}
          title={copied ? "Copied" : copyLabel}
          className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          <HugeiconsIcon
            icon={copied ? Tick02Icon : Copy01Icon}
            strokeWidth={1.8}
            className={cn("size-4", copied && "text-primary")}
          />
        </button>
      </div>
    </div>
  );
}

export default CopyField;