import { Benefits } from "@/components/Benefits";
import { CardGrid } from "@/components/CardGrid";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { HowItWorks } from "@/components/HowItWorks";
import { Integrations } from "@/components/Integrations";
import { PricingSection } from "@/components/PricingSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Testimonials } from "@/components/Testimonials";
import type { LocalizedContent } from "@/lib/content";

type MarketingSectionProps = {
  content: LocalizedContent;
  standalone?: boolean;
};

const pageSpacing = (standalone = false) =>
  standalone ? "pb-20 pt-32 sm:pt-36" : "py-20";

export function ProblemSection({ content, standalone = false }: MarketingSectionProps) {
  return (
    <section
      id="problem"
      className={`bg-slate-950 px-4 ${
        standalone ? "pb-20 pt-32 sm:pt-36" : "pb-20"
      } text-white sm:px-6 lg:px-8`}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.sections.problem.eyebrow}
          title={content.sections.problem.title}
          description={content.sections.problem.description}
          invert
        />
        <div className="mt-10">
          <CardGrid items={content.problems} variant="dark" />
        </div>
      </div>
    </section>
  );
}

export function ServicesSection({ content, standalone = false }: MarketingSectionProps) {
  return (
    <section id="services" className={`bg-slate-50 px-4 ${pageSpacing(standalone)} sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.sections.services.eyebrow}
          title={content.sections.services.title}
          description={content.sections.services.description}
        />
        <div className="mt-12">
          <CardGrid items={content.features} />
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection({ content, standalone = false }: MarketingSectionProps) {
  return (
    <section
      id="how-it-works"
      className={`relative overflow-hidden bg-slate-950 px-4 ${pageSpacing(
        standalone,
      )} sm:px-6 lg:px-8`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(73,230,255,0.12),transparent_28%),radial-gradient(circle_at_86%_70%,rgba(123,92,255,0.18),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.sections.howItWorks.eyebrow}
          title={content.sections.howItWorks.title}
          description={content.sections.howItWorks.description}
          invert
        />
        <div className="mt-12">
          <HowItWorks steps={content.steps} />
        </div>
      </div>
    </section>
  );
}

export function UseCasesSection({ content, standalone = false }: MarketingSectionProps) {
  return (
    <section id="use-cases" className={`bg-white px-4 ${pageSpacing(standalone)} sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.sections.useCases.eyebrow}
          title={content.sections.useCases.title}
          description={content.sections.useCases.description}
        />
        <div className="mt-12">
          <CardGrid items={content.useCases} columns="three" />
        </div>
      </div>
    </section>
  );
}

export function IntegrationsSection({ content, standalone = false }: MarketingSectionProps) {
  return (
    <section
      id="integrations"
      className={`bg-slate-50 px-4 ${pageSpacing(standalone)} sm:px-6 lg:px-8`}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.sections.integrations.eyebrow}
          title={content.sections.integrations.title}
          description={content.sections.integrations.description}
        />
        <div className="mt-10">
          <Integrations integrations={content.integrations} />
        </div>
      </div>
    </section>
  );
}

export function PricingPageSection({ content, standalone = false }: MarketingSectionProps) {
  return (
    <section id="pricing" className={`bg-white px-4 ${pageSpacing(standalone)} sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.sections.pricing.eyebrow}
          title={content.sections.pricing.title}
          description={content.sections.pricing.description}
        />
        <div className="mt-12">
          <PricingSection pricing={content.pricing} />
        </div>
      </div>
    </section>
  );
}

export function ResultsSection({ content, standalone = false }: MarketingSectionProps) {
  return (
    <section id="results" className={`bg-slate-950 px-4 ${pageSpacing(standalone)} sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.sections.results.eyebrow}
          title={content.sections.results.title}
          description={content.sections.results.description}
          invert
        />
        <div className="mt-12">
          <Benefits benefits={content.benefits} />
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection({ content, standalone = false }: MarketingSectionProps) {
  return (
    <section
      id="testimonials"
      className={`bg-slate-50 px-4 ${pageSpacing(standalone)} sm:px-6 lg:px-8`}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.sections.testimonials.eyebrow}
          title={content.sections.testimonials.title}
          description={content.sections.testimonials.description}
        />
        <div className="mt-12">
          <Testimonials testimonials={content.testimonials} />
        </div>
      </div>
    </section>
  );
}

export function FaqSection({ content, standalone = false }: MarketingSectionProps) {
  return (
    <section id="faq" className={`bg-white px-4 ${pageSpacing(standalone)} sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.sections.faq.eyebrow}
          title={content.sections.faq.title}
          description={content.sections.faq.description}
        />
        <div className="mt-12">
          <FAQ faqs={content.faqs} />
        </div>
      </div>
    </section>
  );
}

export function ContactSection({ content, standalone = false }: MarketingSectionProps) {
  return <FinalCTA finalCta={content.finalCta} standalone={standalone} />;
}
