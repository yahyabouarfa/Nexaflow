import type { Metadata } from "next";

import { ProblemPage } from "@/components/SectionPages";

export const metadata: Metadata = {
  title: "Business Bottleneck | NexaFlow Agent",
  description: "See where manual lead, support, and follow-up work slows business growth.",
};

export default function Page() {
  return <ProblemPage />;
}
