import type { Metadata } from "next";

import { ContactPage } from "@/components/SectionPages";

export const metadata: Metadata = {
  title: "Contact | NexaFlow Agent",
  description: "Book a demo or contact NexaFlow Agent to discuss your first automation workflow.",
};

export default function Page() {
  return <ContactPage />;
}
