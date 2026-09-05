import { z } from "zod";

export const createClientSchema = z.object({
  client_name: z.string().min(1, "Name is required").max(100),
  redirect_uris: z.string().min(1, "At least one redirect URI is required"),
  logo_uri: z.url("Enter a valid URL").optional().or(z.literal("")),
  application_type: z.enum(["web", "native"]),
  token_endpoint_auth_method: z.enum(["client_secret_basic", "none"]),
  scope: z.array(z.enum(["openid", "profile", "email", "offline_access"])).min(1),
  skip_consent: z.boolean(),
});

export type CreateClientValues = z.infer<typeof createClientSchema>;
