import {
  Body,
  Container,
  Font,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";

import type { ReactNode } from "react";

export const APP_NAME = "Enterprise Auth";

export interface LayoutProps {
  preview: string;
  children: ReactNode;
}

export function Layout({ preview, children }: LayoutProps) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: "#18181b",
                background: "#f4f4f5",
                card: "#ffffff",
                border: "#e4e4e7",
                "border-accent": "#18181b",
                "text-main": "#18181b",
                "text-muted": "#71717a",
              },
              fontFamily: {
                sans: ["'Inter'", "sans-serif"],
              },
            },
          },
        }}
      >
        <Body className="bg-background font-sans">
          <Preview>{preview}</Preview>
          <Container className="mx-auto my-[30px] max-w-[580px] rounded-lg bg-card [border:1px_solid_theme(colors.border)]">
            <Section className="px-8 pt-8 pb-6">
              <Text className="m-0 text-center text-[20px] font-bold tracking-tight text-primary">
                {APP_NAME}
              </Text>
            </Section>
            <Section className="w-full">
              <div className="mx-auto w-[64px] [border-bottom:2px_solid_theme(colors.border-accent)]" />
            </Section>
            <Section className="px-8 pt-6">{children}</Section>
            <Section className="px-8 pt-6 pb-2">
              <Text className="m-0 text-center text-[12px] leading-normal text-text-muted">
                Need help? Reach out to us at{" "}
                <Link
                  href={`mailto:support@${APP_NAME.toLowerCase().replace(/\s+/g, "")}.com`}
                  className="text-primary"
                >
                  support@
                  {APP_NAME.toLowerCase().replace(/\s+/g, "")}.com
                </Link>
              </Text>
            </Section>
          </Container>
          <Container className="mx-auto max-w-[580px]">
            <Text className="m-0 text-center text-[12px] leading-normal text-text-muted">
              © {new Date().getFullYear()} {APP_NAME}, All Rights Reserved
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
