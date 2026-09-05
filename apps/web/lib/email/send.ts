import { render } from "@react-email/render";

import { OrganizationInviteEmail } from "./templates/organization-invite";
import { SignInNotificationEmail } from "./templates/sign-in-notification";
import { SignInOtpEmail } from "./templates/sign-in-otp";

import { MailService } from "./mailer";

const mailer = new MailService({ secure: process.env.SMTP_SECURE === "true" });


export interface SignInNotification {
  to: string;
  name: string;
  time: Date;
  browser: string;
  os: string;
  ip?: string | null;
}

export async function sendSignInNotification({
  to,
  name,
  time,
  browser,
  os,
  ip,
}: SignInNotification): Promise<void> {
  const html = await render(SignInNotificationEmail({
    name,
    time: time.toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" }),
    browser,
    os,
    ip,
  }));

  await mailer.sendEmail(process.env.EMAIL_FROM!, to, "New sign-in to your account", html);
}

export async function sendSignInOtp(to: string, otp: string): Promise<void> {
  const expiresInMinutes = 5;
  const html = await render(SignInOtpEmail({ otp, expiresInMinutes }));

  await mailer.sendEmail(process.env.EMAIL_FROM!, to, `Your sign-in code ${otp}`, html);
}

export interface OrganizationInvite {
  to: string;
  organizationName: string;
  inviterEmail: string;
  inviteUrl: string;
}

export async function sendOrganizationInvite({
  to,
  organizationName,
  inviterEmail,
  inviteUrl,
}: OrganizationInvite): Promise<void> {
  const html = await render(
    OrganizationInviteEmail({ organizationName, inviterEmail, inviteUrl }),
  );

  await mailer.sendEmail(
    process.env.EMAIL_FROM!,
    to,
    `You're invited to join ${organizationName}`,
    html,
  );
}
