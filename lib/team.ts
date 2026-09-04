import { randomUUID } from "node:crypto";
import { eq } from "drizzle-orm";

import { db, schema } from "./db";

function toSlug(name: string) {
  const base = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return base || "team";
}

function randomSuffix(length = 6) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  return Array.from(bytes, (b) => alphabet[b % alphabet.length]).join("");
}

function defaultTeamName(name: string) {
  const first = name?.trim().split(/\s+/)[0];
  return `${first}'s Team`;
}

async function findTeamId(userId: string): Promise<string | null> {
  const [membership] = await db
    .select({ organizationId: schema.member.organizationId })
    .from(schema.member)
    .where(eq(schema.member.userId, userId))
    .limit(1);
  return membership?.organizationId ?? null;
}

export async function getTeam(userId: string): Promise<string | null> {
  if (!userId) return null;
  return findTeamId(userId);
}

export async function ensureTeam(
  userId: string,
  profile: { name?: string | null },
): Promise<string | null> {
  if (!userId) return null;

  const existing = await findTeamId(userId);
  if (existing) return existing;

  const name = defaultTeamName(profile.name ?? "");

  let slug = `${toSlug(name)}-${randomSuffix()}`;
  for (let i = 0; i < 3; i++) {
    const [hit] = await db
      .select({ id: schema.organization.id })
      .from(schema.organization)
      .where(eq(schema.organization.slug, slug))
      .limit(1);
    if (!hit) break;
    slug = `${toSlug(name)}-${randomSuffix()}`;
  }

  const organizationId = randomUUID();
  await db.insert(schema.organization).values({ id: organizationId, name, slug });
  await db.insert(schema.member).values({
    id: randomUUID(),
    organizationId,
    userId,
    role: "owner",
  });
  return organizationId;
}
