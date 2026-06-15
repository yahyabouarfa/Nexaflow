"use client";

import { ChevronDown, Globe2, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { BrandLogo } from "@/components/BrandLogo";
import { ButtonLink } from "@/components/ButtonLink";
import { localeOptions, useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/content";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { content, locale, setLocale } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/72 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <BrandLogo variant="light" />

        <div className="hidden items-center gap-7 lg:flex">
          {content.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSelect
            label={content.header.languageLabel}
            locale={locale}
            onChange={setLocale}
          />
          <ButtonLink href="/contact" className="min-h-11 px-4">
            {content.header.cta}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-grid size-11 place-items-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/15 lg:hidden"
          aria-label={isOpen ? content.header.closeMenu : content.header.openMenu}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-slate-950/96 px-4 pb-5 pt-2 shadow-2xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {content.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3">
              <LanguageSelect
                label={content.header.languageLabel}
                locale={locale}
                onChange={setLocale}
                fullWidth
              />
            </div>
            <ButtonLink href="/contact" className="mt-3 w-full" onClickCapture={() => setIsOpen(false)}>
              {content.header.cta}
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function LanguageSelect({
  fullWidth = false,
  label,
  locale,
  onChange,
}: {
  fullWidth?: boolean;
  label: string;
  locale: Locale;
  onChange: (locale: Locale) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedOption =
    localeOptions.find((option) => option.code === locale) ?? localeOptions[0];

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className={`relative ${fullWidth ? "w-full" : ""}`}>
      <button
        type="button"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
        className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 text-sm font-bold text-white shadow-[0_14px_35px_rgba(2,6,23,0.18)] transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
          fullWidth ? "w-full justify-between" : "min-w-[92px] justify-center"
        }`}
      >
        <span className="inline-flex items-center gap-2">
          <Globe2 size={16} className="text-cyan-300" aria-hidden="true" />
          <span className="text-sm font-black">{selectedOption.shortLabel}</span>
        </span>
        <ChevronDown
          size={15}
          className={`text-slate-200 transition ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen ? (
        <div
          role="listbox"
          aria-label={label}
          className={`absolute top-full z-[60] mt-2 overflow-hidden rounded-2xl border border-white/12 bg-slate-950/95 p-1.5 shadow-[0_22px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl ${
            fullWidth ? "left-0 right-0" : "right-0 min-w-full"
          }`}
        >
          {localeOptions.map((option) => {
            const isSelected = option.code === locale;

            return (
              <button
                key={option.code}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(option.code);
                  setIsOpen(false);
                }}
                aria-label={option.label}
                className={`flex min-h-10 w-full items-center justify-center rounded-xl px-4 text-center text-sm font-black transition ${
                  isSelected
                    ? "bg-cyan-300 text-slate-950"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{option.shortLabel}</span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
