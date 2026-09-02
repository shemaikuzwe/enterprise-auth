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
