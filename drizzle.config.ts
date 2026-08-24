import "dotenv/config";
import {defineConfig}from  "drizzle-kit"

export default defineConfig({
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  dialect: "postgresql",
  out: "./lib/db/migrations",
  schema: "./lib/db/schema.ts",
  strict: true,
  verbose:true
});
