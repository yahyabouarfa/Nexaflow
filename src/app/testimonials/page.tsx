import type { Metadata } from "next";

import { TestimonialsPage } from "@/components/SectionPages";

export const metadata: Metadata = {
  title: "Agent Outcomes | NexaFlow Agent",
  description:
    "What NexaFlow Agent automations are designed to deliver across response, handoff, customization, and maintenance.",
};

export default function Page() {
  return <TestimonialsPage />;
}
