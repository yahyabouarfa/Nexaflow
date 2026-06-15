import type { Metadata } from "next";

import { HowItWorksPage } from "@/components/SectionPages";

export const metadata: Metadata = {
  title: "How It Works | NexaFlow Agent",
  description: "From workflow mapping to launch, see how NexaFlow Agent builds production-ready automation.",
};

export default function Page() {
  return <HowItWorksPage />;
}
