import { Button, Section, Text } from "react-email";

import { Layout } from "./components/layout";

export interface OrganizationInviteEmailProps {
  organizationName: string;
  inviterEmail: string;
  inviteUrl: string;
}

export function OrganizationInviteEmail({
  organizationName,
  inviterEmail,
  inviteUrl,
}: OrganizationInviteEmailProps) {
  return (
    <Layout preview={`You've been invited to join ${organizationName}`}>
      <Text className="m-0 text-[14px] leading-normal text-text-main">
        <span className="font-bold">{inviterEmail}</span> invited you to join{" "}
        <span className="font-bold">{organizationName}</span>.
      </Text>
      <Section className="my-4 text-center">
        <Button
          href={inviteUrl}
          className="rounded-lg bg-primary px-5 py-3 text-[14px] font-medium text-white"
        >
          View invitation
        </Button>
      </Section>
      <Text className="m-0 text-[14px] leading-normal text-text-main">
        If you weren&apos;t expecting this invitation, you can safely ignore this email.
      </Text>
    </Layout>
  );
}

OrganizationInviteEmail.PreviewProps = {
  organizationName: "Acme Inc.",
  inviterEmail: "admin@acme.com",
  inviteUrl: "https://example.com/profile?invite=abc123",
} satisfies OrganizationInviteEmailProps;

export default OrganizationInviteEmail;
