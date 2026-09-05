import { z } from "zod";

export const DEVICE_CODE_GRANT = "urn:ietf:params:oauth:grant-type:device_code";

export const GRANT_TYPE_DESCRIPTIONS: Record<string, string> = {
  authorization_code: "Browser redirect flow for web and native apps",
  refresh_token: "Renew access tokens without sending the user back to sign in",
  [DEVICE_CODE_GRANT]: "Input-constrained clients like the CLI, using a user code",
};

export const createClientSchema = z
  .object({
    client_name: z.string().min(1, "Name is required").max(100),
    redirect_uris: z.string(),
    logo_uri: z.url("Enter a valid URL").optional().or(z.literal("")),
    application_type: z.enum(["web", "native"]),
    token_endpoint_auth_method: z.enum(["client_secret_basic", "none"]),
    grant_types: z
      .array(z.enum(["authorization_code", "refresh_token", DEVICE_CODE_GRANT]))
      .min(1, "Select at least one grant type"),
    scope: z.array(z.enum(["openid", "profile", "email", "offline_access"])).min(1),
    skip_consent: z.boolean(),
  })
  .refine(
    (values) =>
      !values.grant_types.includes("authorization_code") ||
      values.redirect_uris.trim().length > 0,
    { message: "At least one redirect URI is required", path: ["redirect_uris"] },
  );

export type CreateClientValues = z.infer<typeof createClientSchema>;
