"use client";

import { Globe2, Menu, X } from "lucide-react";
import { useState } from "react";

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
          <ButtonLink href="#contact" className="min-h-11 px-4">
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
            <ButtonLink href="#contact" className="mt-3 w-full" onClickCapture={() => setIsOpen(false)}>
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
  return (
    <label
      className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 text-sm font-bold text-white ${
        fullWidth ? "w-full justify-between" : ""
      }`}
    >
      <span className="sr-only">{label}</span>
      <Globe2 size={16} className="text-cyan-300" aria-hidden="true" />
      <select
        value={locale}
        aria-label={label}
        onChange={(event) => onChange(event.target.value as Locale)}
        className="bg-transparent text-sm font-black text-white outline-none"
      >
        {localeOptions.map((option) => (
          <option key={option.code} value={option.code} className="bg-slate-950 text-white">
            {option.shortLabel}
          </option>
        ))}
      </select>
    </label>
  );
}
