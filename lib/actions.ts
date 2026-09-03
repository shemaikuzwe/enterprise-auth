"use server";

import { eq } from "drizzle-orm";
import { db, schema } from "./db";


export type LookupResult =
  | { kind: "sso"; providerId: string }
  | { kind: "otp" }
  | { kind: "unknown" };

export async function emailLookup(email: string): Promise<LookupResult> {
  const domain = email.split("@")[1];

    // Domain-registered IdP.
    const [provider] = await db
      .select({ providerId: schema.ssoProvider.providerId })
      .from(schema.ssoProvider)
      .where(eq(schema.ssoProvider.domain, domain))
      .limit(1);
    if (provider) {
      return { kind: "sso", providerId: provider.providerId } satisfies LookupResult;
    }

    const [existing] = await db
      .select({ id: schema.user.id })
      .from(schema.user)
      .where(eq(schema.user.email, email))
      .limit(1);
    if (existing) {
      return { kind: "otp" } satisfies LookupResult;
    }
    return { kind: "unknown" } satisfies LookupResult;
}

export async function resolveIdpMetadata(
  source: string,
): Promise<{ metadata: string; entryPoint: string }> {
  const metadata = /^https?:\/\//i.test(source) ? await fetchMetadata(source) : source;
  if (!metadata.includes("EntityDescriptor")) {
    throw new Error("That is not SAML metadata XML.");
  }
  return { metadata, entryPoint: extractEntryPoint(metadata) };
}

function extractEntryPoint(metadata: string): string {
  const services = (metadata.match(/<[^>]*SingleSignOnService\b[^>]*>/gi) ?? []).map((tag) => ({
    binding: tag.match(/Binding="([^"]+)"/i)?.[1] ?? "",
    location: tag.match(/Location="([^"]+)"/i)?.[1] ?? "",
  }));
  const entryPoint =
    services.find((service) => service.binding.endsWith("HTTP-Redirect") && service.location)
      ?.location ?? services.find((service) => service.location)?.location;
  if (!entryPoint) {
    throw new Error("The metadata has no SingleSignOnService URL.");
  }
  return entryPoint;
}

async function fetchMetadata(url: string): Promise<string> {
  const response = await fetch(url, { headers: { accept: "application/xml, text/xml, */*" } });
  if (!response.ok) {
    throw new Error(`Could not fetch metadata from the Idp (${response.status}).`);
  }
  return response.text();
}
