import type { Metadata } from "next";

import { PricingPage } from "@/components/SectionPages";

export const metadata: Metadata = {
  title: "Pricing | NexaFlow Agent",
  description: "Choose a NexaFlow Agent plan for launching and scaling business automation.",
};

export default function Page() {
  return <PricingPage />;
}
