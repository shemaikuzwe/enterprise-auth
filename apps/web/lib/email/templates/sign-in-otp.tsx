import { Section, Text } from "react-email";

import { Layout } from "./components/layout";

export interface SignInOtpEmailProps {
  otp: string;
  expiresInMinutes: number;
}

export function SignInOtpEmail({ otp, expiresInMinutes }: SignInOtpEmailProps) {
  return (
    <Layout preview="Your sign-in code">
      <Text className="m-0 text-[14px] leading-normal text-text-main">
        Use the code below to sign in to your account:
      </Text>
      <Section className="my-4 rounded-lg bg-background px-5 py-4 text-center">
        <Text className="m-0 font-mono text-[32px] font-bold tracking-[8px] text-primary">
          {otp}
        </Text>
      </Section>
      <Text className="m-0 text-[14px] leading-normal text-text-main">
        This code expires in {expiresInMinutes} minutes. If you didn&apos;t request it, you can
        safely ignore this email.
      </Text>
    </Layout>
  );
}

SignInOtpEmail.PreviewProps = {
  otp: "123456",
  expiresInMinutes: 5,
} satisfies SignInOtpEmailProps;

export default SignInOtpEmail;
