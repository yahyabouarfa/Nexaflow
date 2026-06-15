import type { Metadata } from "next";

import { TestimonialsPage } from "@/components/SectionPages";

export const metadata: Metadata = {
  title: "Testimonials | NexaFlow Agent",
  description: "Representative outcomes from teams using AI automation to improve follow-up and conversion.",
};

export default function Page() {
  return <TestimonialsPage />;
}
