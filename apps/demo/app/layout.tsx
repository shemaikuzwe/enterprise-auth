import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo client",
  description: "OAuth test harness for the enterprise-auth provider",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          maxWidth: 720,
          margin: "0 auto",
          padding: "48px 24px",
        }}
      >
        {children}
      </body>
    </html>
  );
}
