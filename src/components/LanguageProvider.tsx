"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  getLocaleDirection,
  localizedContent,
  localeOptions,
  type Locale,
} from "@/lib/content";

type LanguageContextValue = {
  content: (typeof localizedContent)[Locale];
  direction: "ltr" | "rtl";
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const storageKey = "nexaflow-locale";

function isLocale(value: string | null | undefined): value is Locale {
  return Boolean(value && value in localizedContent);
}

function detectLocale(languages: readonly string[]): Locale {
  for (const language of languages) {
    const normalized = language.toLowerCase();

    if (normalized.startsWith("ar")) {
      return "ar";
    }

    if (normalized.startsWith("fr")) {
      return "fr";
    }

    if (normalized.startsWith("en")) {
      return "en";
    }
  }

  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(storageKey);
    const nextLocale = isLocale(savedLocale)
      ? savedLocale
      : detectLocale(navigator.languages.length ? navigator.languages : [navigator.language]);

    const frame = window.requestAnimationFrame(() => setLocaleState(nextLocale));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(storageKey, nextLocale);
  };

  const direction = getLocaleDirection(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [direction, locale]);

  const value = useMemo(
    () => ({
      content: localizedContent[locale],
      direction,
      locale,
      setLocale,
    }),
    [direction, locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}

export { localeOptions };
