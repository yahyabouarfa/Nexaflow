import type { Metadata } from "next";

import { ServicesPage } from "@/components/SectionPages";

export const metadata: Metadata = {
  title: "Services | NexaFlow Agent",
  description: "AI agents for support, lead qualification, sales automation, booking, and workflow automation.",
};

export default function Page() {
  return <ServicesPage />;
}
