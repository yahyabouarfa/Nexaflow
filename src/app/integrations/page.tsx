import type { Metadata } from "next";

import { IntegrationsPage } from "@/components/SectionPages";

export const metadata: Metadata = {
  title: "Integrations | NexaFlow Agent",
  description: "Connect AI agents to your CRM, calendar, inbox, chat, ecommerce, and automation tools.",
};

export default function Page() {
  return <IntegrationsPage />;
}
