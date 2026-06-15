import type { Metadata } from "next";

import { ResultsPage } from "@/components/SectionPages";

export const metadata: Metadata = {
  title: "Results | NexaFlow Agent",
  description: "See the response speed, consistency, and workflow gains NexaFlow Agent is built to create.",
};

export default function Page() {
  return <ResultsPage />;
}
