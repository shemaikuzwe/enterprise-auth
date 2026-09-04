import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { UAParser } from "ua-parser-js";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatUserAgent(ua: string): string {
  const parser = new UAParser(ua);
  const browser = parser.getBrowser();
  const os = parser.getOS();
  const device = parser.getDevice();

  const browserStr = [browser.name, browser.major].filter(Boolean).join(" ");
  const osStr = [os.name, os.version].filter(Boolean).join(" ");
  const deviceStr = device.model || device.type || "";

  const parts = [browserStr, deviceStr || osStr].filter(Boolean);
  return parts.join(" · ") || ua;
}

export function getDeviceType(ua: string): "desktop" | "mobile" | "tablet" {
  const parser = new UAParser(ua);
  const device = parser.getDevice();
  const type = device.type;
  if (type === "mobile") return "mobile";
  if (type === "tablet") return "tablet";
  return "desktop";
}

export function toSlug(name: string) {
  return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export const DEFAULT_REDIRECT = "/home";

export function redirect(value: string | null | undefined): string {
  if (!value?.startsWith("/") || value.startsWith("//")) return DEFAULT_REDIRECT;
  return value;
}

export const vendors = {
  okta: "Okta",
  entra: "Microsoft Entra ID",
  auth0: "Auth0",
  google: "Google Workspace",
  keycloak: "Keycloak",
  custom: "Other (Custom)",
} as const;

export type Vendor = keyof typeof vendors;

export const protocols = {
  oidc: "OIDC",
  saml: "SAML 2.0",
} as const;

export type Protocol = keyof typeof protocols;

export function toProviderId(organizationSlug: string, vendor: Vendor) {
  return `${organizationSlug.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${vendor}`;
}

export function toCallbackUrl(providerId: string) {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/sso/callback/${providerId}`;
}

export function toAcsUrl(providerId: string) {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/sso/saml2/sp/acs/${providerId}`;
}

export function toSpEntityId(providerId: string) {
  return `urn:enterprise-auth:sp:${providerId}`;
}