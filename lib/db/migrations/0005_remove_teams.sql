DROP TABLE IF EXISTS "team_member";--> statement-breakpoint
DROP TABLE IF EXISTS "team";--> statement-breakpoint
ALTER TABLE "session" DROP COLUMN IF EXISTS "active_team_id";--> statement-breakpoint
ALTER TABLE "invitation" DROP COLUMN IF EXISTS "team_id";
