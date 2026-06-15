import type { Metadata } from "next";

import { UseCasesPage } from "@/components/SectionPages";

export const metadata: Metadata = {
  title: "Use Cases | NexaFlow Agent",
  description: "Explore automation playbooks for teams that rely on customer conversations.",
};

export default function Page() {
  return <UseCasesPage />;
}
