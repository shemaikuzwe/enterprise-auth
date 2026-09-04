import { z } from "zod";

export const editUserSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.email("Enter a valid email"),
});

export type EditUserValues = z.infer<typeof editUserSchema>;

export const setPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm the password"),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SetPasswordValues = z.infer<typeof setPasswordSchema>;

export const banUserSchema = z.object({
  reason: z.string().min(1, "A reason is required").max(500),
  duration: z.enum(["86400", "604800", "2592000", "permanent"]),
});

export type BanUserValues = z.infer<typeof banUserSchema>;

export const roleSchema = z.object({
  role: z.enum(["user", "admin"]),
});

export type RoleValues = z.infer<typeof roleSchema>;
