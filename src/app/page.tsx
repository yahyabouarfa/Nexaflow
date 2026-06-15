"use client";

import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import {
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

export default function Home() {
  const { content } = useLanguage();

  return (
    <PageChrome>
      <Hero dashboard={content.dashboard} hero={content.hero} />
      <ProblemSection content={content} />
      <ServicesSection content={content} />
      <HowItWorksSection content={content} />
      <UseCasesSection content={content} />
      <IntegrationsSection content={content} />
      <PricingPageSection content={content} />
      <ResultsSection content={content} />
      <TestimonialsSection content={content} />
      <FaqSection content={content} />
      <FinalCTA finalCta={content.finalCta} />
    </PageChrome>
  );
}
