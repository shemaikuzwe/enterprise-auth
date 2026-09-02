"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeftIcon, Loading03Icon } from "@hugeicons/core-free-icons";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

import { BrandMark } from "@/components/nav/brand-mark";
import { ThemeToggle } from "@/components/theme-toggle";
import { useSession } from "@/components/session-provider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { toSlug } from "@/lib/utils";

const roles = ["member", "admin"] as const;

type InviteRow = { email: string; role: (typeof roles)[number] };

const emptyInvites: InviteRow[] = [
  { email: "", role: "member" },
  { email: "", role: "member" },
  { email: "", role: "member" },
];

export default function OnboardingPage() {
  const router = useRouter();
  const session = useSession();
  const [step, setStep] = useState<1 | 2 | 3>(() => (session?.user.name ? 2 : 1));

  function finish() {
    router.replace("/home");
    router.refresh();
  }

  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="flex w-full max-w-md flex-col gap-6">
        <Link href="/" className="self-center">
          <BrandMark />
        </Link>

        <p className="text-center text-xs text-muted-foreground" aria-label={`Step ${step} of 3`}>
          Step {step} of 3
        </p>

        {step === 1 && <NameStep onDone={() => setStep(2)} />}
        {step === 2 && <OrganizationStep onDone={() => setStep(3)} />}
        {step === 3 && <InviteStep onDone={finish} />}
      </div>
    </div>
  );
}

function NameStep({ onDone }: { onDone: () => void }) {
  const session = useSession();
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const updateMutation = useMutation({
    mutationFn: async () => {
      const { error } = await authClient.updateUser({ name });
      if (error) throw new Error(error.message ?? "Failed to save your name");
    },
    onSuccess: () => {
      onDone();
    },
    onError: (mutationError) => setError(mutationError.message),
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">What should we call you?</CardTitle>
        <CardDescription>Your name shows up on your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setError(null);
            updateMutation.mutate();
          }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="onboarding-name" className="sr-only">
              Full name
            </Label>
            <Input
              id="onboarding-name"
              placeholder={session?.user.name || "Ada Lovelace"}
              autoComplete="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              disabled={updateMutation.isPending}
            />
          </div>
          {error && <p className="text-xs text-destructive">{error}</p>}
          <Button type="submit" size="lg" className="w-full" disabled={updateMutation.isPending}>
            {updateMutation.isPending && (
              <HugeiconsIcon icon={Loading03Icon} className="animate-spin" />
            )}
            Continue
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function OrganizationStep({ onDone }: { onDone: () => void }) {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const createMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await authClient.organization.create({
        name,
        slug: toSlug(name),
      });
      if (error) throw new Error(error.message ?? "Failed to create the organization");
      return data;
    },
    onSuccess: async (organization) => {
      if (organization) {
        await authClient.organization.setActive({ organizationId: organization.id });
      }
      onDone();
    },
    onError: (mutationError) => setError(mutationError.message),
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Create your organization</CardTitle>
        <CardDescription>
          Organizations hold members and single sign-on.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setError(null);
            createMutation.mutate();
          }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="onboarding-organization">Organization name</Label>
            <Input
              id="onboarding-organization"
              placeholder="Acme Inc."
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              disabled={createMutation.isPending}
            />
            {name && (
              <p className="text-xs text-muted-foreground">Slug: {toSlug(name)}</p>
            )}
          </div>
          {error && <p className="text-xs text-destructive">{error}</p>}
          <Button type="submit" size="lg" className="w-full" disabled={createMutation.isPending}>
            {createMutation.isPending && (
              <HugeiconsIcon icon={Loading03Icon} className="animate-spin" />
            )}
            Create organization
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function InviteStep({ onDone }: { onDone: () => void }) {
  const [rows, setRows] = useState<InviteRow[]>(emptyInvites);
  const [error, setError] = useState<string | null>(null);

  const hasEmails = rows.some((row) => row.email.trim() !== "");

  const inviteMutation = useMutation({
    mutationFn: async (nextRows: InviteRow[]) => {
      const failures: string[] = [];
      for (const row of nextRows) {
        const email = row.email.trim();
        if (!email) continue;
        const { error } = await authClient.organization.inviteMember({
          email,
          role: row.role,
        });
        if (error) failures.push(`${email}: ${error.message ?? "failed"}`);
      }
      if (failures.length > 0) {
        throw new Error(failures.join(" · "));
      }
    },
    onSuccess: () => {
      onDone();
    },
    onError: (mutationError: Error) => {
      setError(mutationError.message);
    },
  });

  function send() {
    setError(null);
    inviteMutation.mutate(rows);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Invite members</CardTitle>
        <CardDescription>
          People you invite will get an email with a link to accept. You can invite
          more people later.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {rows.map((row, index) => (
          <div key={index} className="flex gap-2">
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <Label htmlFor={`invite-email-${index}`} className="sr-only">
                Email {index + 1}
              </Label>
              <Input
                id={`invite-email-${index}`}
                type="email"
                placeholder="colleague@company.com"
                value={row.email}
                onChange={(event) =>
                  setRows((current) =>
                    current.map((entry, entryIndex) =>
                      entryIndex === index
                        ? { ...entry, email: event.target.value }
                        : entry,
                    ),
                  )
                }
                disabled={inviteMutation.isPending}
              />
            </div>
            <select
              aria-label={`Role for invite ${index + 1}`}
              value={row.role}
              onChange={(event) =>
                setRows((current) =>
                  current.map((entry, entryIndex) =>
                    entryIndex === index
                      ? { ...entry, role: event.target.value as InviteRow["role"] }
                      : entry,
                  ),
                )
              }
              disabled={inviteMutation.isPending}
              className="h-7 shrink-0 self-start rounded-md border border-input bg-input/20 px-2 py-0.5 text-xs outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 disabled:opacity-50 dark:bg-input/30"
            >
              {roles.map((role) => (
                <option key={role} value={role} className="capitalize">
                  {role}
                </option>
              ))}
            </select>
          </div>
        ))}

        {error && <p className="text-xs text-destructive">{error}</p>}

        <div className="flex flex-col gap-2">
          <Button type="button" size="lg" className="w-full" disabled={!hasEmails || inviteMutation.isPending} onClick={() => send()}>
            {inviteMutation.isPending && <HugeiconsIcon icon={Loading03Icon} className="animate-spin" />}
            {inviteMutation.isPending ? "Sending…" : "Send invites"}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="w-full"
            disabled={inviteMutation.isPending}
            onClick={onDone}
          >
            <HugeiconsIcon icon={ArrowLeftIcon} data-icon="inline-start" className="rotate-180" />
            Skip for now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
