import type { Metadata } from "next";

import { FaqPage } from "@/components/SectionPages";

export const metadata: Metadata = {
  title: "FAQ | NexaFlow Agent",
  description: "Answers about fit, setup, integrations, safety, and human handoff for NexaFlow Agent.",
};

export default function Page() {
  return <FaqPage />;
}
