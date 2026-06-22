import type { Metadata } from "next";

import { LanguageProvider } from "@/components/LanguageProvider";
import { NexaFlowChatWidget } from "@/components/NexaFlowChatWidget";

import "@n8n/chat/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexaFlow Agent | AI Automation Agents for Business Growth",
  description:
    "Custom AI agents for support, sales, lead qualification, booking, and workflow automation.",
  keywords: [
    "AI automation agency",
    "AI agents",
    "lead qualification automation",
    "AI customer support",
    "workflow automation",
  ],
  authors: [{ name: "NexaFlow Agent" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "NexaFlow Agent | AI Automation Agents for Business Growth",
    description:
      "Custom AI agents for support, sales, lead qualification, booking, and workflow automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
        <NexaFlowChatWidget />
      </body>
    </html>
  );
}
