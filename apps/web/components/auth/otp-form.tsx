"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { MailIcon } from "@hugeicons/core-free-icons";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { emailOtp, signIn } from "@/lib/auth-client";

const CODE_LENGTH = 6;
const RESEND_COOLDOWN = 30;

export function OtpForm({
  email,
  name,
  redirect,
  open,
  onOpenChange,
}: {
  email: string;
  name?: string;
  redirect: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(RESEND_COOLDOWN);

  useEffect(() => {
    if (open) {
      setCode("");
      setError(null);
      setCooldown(RESEND_COOLDOWN);
    }
  }, [open]);

  useEffect(() => {
    if (!open || cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown((seconds) => seconds - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown, open]);

  const verifyMutation = useMutation({
    mutationFn: async (nextCode: string) => {
      const { error: verifyError } = await signIn.emailOtp({ email, otp: nextCode, name });
      if (verifyError) {
        throw new Error(verifyError.message ?? "That code is invalid or expired. Request a new one.");
      }
    },
    onSuccess: () => {
      router.push(redirect);
      router.refresh();
    },
    onError: (mutationError: Error) => {
      setCode("");
      setError(mutationError.message);
    },
  });

  const resendMutation = useMutation({
    mutationFn: async () => {
      const { error: sendError } = await emailOtp.sendVerificationOtp({
        email,
        type: "sign-in",
      });
      if (sendError) {
        throw new Error(sendError.message ?? "Could not resend the code. Try again.");
      }
    },
    onSuccess: () => {
      setCooldown(RESEND_COOLDOWN);
    },
    onError: (mutationError: Error) => {
      setError(mutationError.message);
    },
  });

  function verify(nextCode: string) {
    if (verifyMutation.isPending || !nextCode) return;
    setError(null);
    verifyMutation.mutate(nextCode);
  }

  function resend() {
    if (resendMutation.isPending || cooldown > 0) return;
    setError(null);
    resendMutation.mutate();
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-lg">Enter your code</DialogTitle>
          <DialogDescription>
            We sent a 6-digit code to <span className="font-medium text-foreground">{email}</span>. It
            expires in 5 minutes.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              verify(code);
            }}
            className="flex flex-col gap-4"
          >
            <InputOTP
              id="code"
              name="code"
              maxLength={CODE_LENGTH}
              pattern={REGEXP_ONLY_DIGITS}
              required
              value={code}
              disabled={verifyMutation.isPending}
              containerClassName="w-full gap-2"
              onChange={(next) => {
                setCode(next);
                setError(null);
                if (next.length === CODE_LENGTH) verify(next);
              }}
            >
              <InputOTPGroup className="flex-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <InputOTPSlot key={i} index={i} className="size-10 flex-1 text-lg" />
                ))}
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup className="flex-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <InputOTPSlot key={i + 3} index={i + 3} className="size-10 flex-1 text-lg" />
                ))}
              </InputOTPGroup>
            </InputOTP>
            <Button type="submit" size="lg" className="w-full" disabled={verifyMutation.isPending || code.length < CODE_LENGTH}>
              <HugeiconsIcon icon={MailIcon} data-icon="inline-start" />
              {verifyMutation.isPending ? "Verifying…" : "Verify and continue"}
            </Button>
            {error && <p className="text-center text-xs text-destructive">{error}</p>}
          </form>
          <p className="text-center text-xs text-muted-foreground">
            Didn&apos;t get a code?{" "}
            <button
              type="button"
              onClick={() => resend()}
              disabled={resendMutation.isPending || cooldown > 0}
              className="underline underline-offset-4 hover:text-foreground disabled:opacity-50"
            >
              {resendMutation.isPending ? "Resending…" : cooldown > 0 ? `Resend in ${cooldown}s` : "Resend code"}
            </button>
            <span className="mx-1.5" aria-hidden="true">
              ·
            </span>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="underline underline-offset-4 hover:text-foreground"
            >
              Use a different email
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export const OtpDialog = OtpForm;
