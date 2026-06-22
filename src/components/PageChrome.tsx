"use client";

import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useLanguage } from "@/components/LanguageProvider";

type PageChromeProps = {
  children: ReactNode;
  showMobileCta?: boolean;
};

export function PageChrome({ children, showMobileCta = true }: PageChromeProps) {
  const { content } = useLanguage();

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />

      {showMobileCta ? (
        <a
          href="/contact"
          className="open-chat-demo fixed bottom-4 right-4 z-40 inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-5 text-sm font-black text-slate-950 shadow-[0_18px_50px_rgba(73,230,255,0.35)] transition hover:bg-white md:hidden"
        >
          {content.mobileCta}
        </a>
      ) : null}
    </>
  );
}
