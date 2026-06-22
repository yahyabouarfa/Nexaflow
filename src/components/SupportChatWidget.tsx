"use client";

import { MessageCircle } from "lucide-react";
import { useMemo } from "react";

import { site } from "@/lib/content";

export function SupportChatWidget() {
  const whatsappUrl = useMemo(() => {
    const text = encodeURIComponent(
      "Hi NexaFlow, I would like help with AI automation for my business.",
    );

    return `https://wa.me/${site.whatsapp.number}?text=${text}`;
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Contact NexaFlow on WhatsApp at ${site.whatsapp.display}`}
      title={`WhatsApp support: ${site.whatsapp.display}`}
      className="nexaflow-whatsapp-widget fixed bottom-24 right-4 z-[60] grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_18px_50px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1fb85a] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      <MessageCircle size={24} aria-hidden="true" />
    </a>
  );
}
