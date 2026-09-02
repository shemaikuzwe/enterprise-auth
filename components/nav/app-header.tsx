"use client";

import { BrandMark } from "@/components/nav/brand-mark";
import { UserMenu } from "@/components/nav/user-menu";
import { OrganizationSwitcher } from "@/components/organization/organization-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
export function AppHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center gap-1 px-6">
        <BrandMark />
        <span aria-hidden="true" className="text-lg font-light text-border">/</span>
        <OrganizationSwitcher />
        <div className="ml-auto flex shrink-0 items-center gap-1">
          <UserMenu />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
