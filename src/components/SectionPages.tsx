"use client";

import type { ReactNode } from "react";

import {
  ContactSection,
  FaqSection,
  HowItWorksSection,
  IntegrationsSection,
  PricingPageSection,
  ProblemSection,
  ResultsSection,
  ServicesSection,
  TestimonialsSection,
  UseCasesSection,
} from "@/components/MarketingSections";
import { PageChrome } from "@/components/PageChrome";
import { useLanguage } from "@/components/LanguageProvider";
import type { LocalizedContent } from "@/lib/content";

type SectionPageProps = {
  children: (content: LocalizedContent) => ReactNode;
  showMobileCta?: boolean;
};

function SectionPage({ children, showMobileCta = true }: SectionPageProps) {
  const { content } = useLanguage();

  return <PageChrome showMobileCta={showMobileCta}>{children(content)}</PageChrome>;
}

export function ProblemPage() {
  return <SectionPage>{(content) => <ProblemSection content={content} standalone />}</SectionPage>;
}

export function ServicesPage() {
  return <SectionPage>{(content) => <ServicesSection content={content} standalone />}</SectionPage>;
}

export function HowItWorksPage() {
  return <SectionPage>{(content) => <HowItWorksSection content={content} standalone />}</SectionPage>;
}

export function UseCasesPage() {
  return <SectionPage>{(content) => <UseCasesSection content={content} standalone />}</SectionPage>;
}

export function IntegrationsPage() {
  return <SectionPage>{(content) => <IntegrationsSection content={content} standalone />}</SectionPage>;
}

export function PricingPage() {
  return <SectionPage>{(content) => <PricingPageSection content={content} standalone />}</SectionPage>;
}

export function ResultsPage() {
  return <SectionPage>{(content) => <ResultsSection content={content} standalone />}</SectionPage>;
}

export function TestimonialsPage() {
  return <SectionPage>{(content) => <TestimonialsSection content={content} standalone />}</SectionPage>;
}

export function FaqPage() {
  return <SectionPage>{(content) => <FaqSection content={content} standalone />}</SectionPage>;
}

export function ContactPage() {
  return (
    <SectionPage showMobileCta={false}>
      {(content) => <ContactSection content={content} standalone />}
    </SectionPage>
  );
}
