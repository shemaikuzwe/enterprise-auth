import { Section, Text } from "react-email";

import { Layout } from "./components/layout";

export interface SignInNotificationEmailProps {
  name: string;
  time: string;
  browser: string;
  os: string;
  ip?: string | null;
}

export function SignInNotificationEmail({
  name,
  time,
  browser,
  os,
  ip,
}: SignInNotificationEmailProps) {
  return (
    <Layout preview="New sign-in to your account">
      <Text className="m-0 text-[14px] leading-normal text-text-main">Hi {name},</Text>
      <Text className="m-0 text-[14px] leading-normal text-text-main">
        We noticed a new sign-in to your account. If this was you, no action is needed.
      </Text>
      <Section className="my-4 rounded-lg bg-background px-5 py-4">
        <Row label="Time" value={time} />
        <Row label="Browser" value={browser} />
        <Row label="Device" value={os} />
        <Row label="IP address" value={ip ?? "Unknown"} />
      </Section>
      <Text className="m-0 text-[14px] leading-normal text-text-main">
        If you don&apos;t recognize this activity, please reset your password and enable two-factor
        authentication immediately.
      </Text>
    </Layout>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <Text className="m-0 text-[14px] leading-[24px] text-text-main">
      <span className="text-text-muted">{label}: </span>
      {value}
    </Text>
  );
}

SignInNotificationEmail.PreviewProps = {
  name: "Shema",
  time: "Aug 25, 2026, 10:30 AM",
  browser: "Chrome",
  os: "macOS",
  ip: "102.0.0.1",
} satisfies SignInNotificationEmailProps;

export default SignInNotificationEmail;
