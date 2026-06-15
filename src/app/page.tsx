import { Benefits } from "@/components/Benefits";
import { CardGrid } from "@/components/CardGrid";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Integrations } from "@/components/Integrations";
import { PricingSection } from "@/components/PricingSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Testimonials } from "@/components/Testimonials";
import { features, problems, useCases } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="bg-slate-950 px-4 pb-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="The bottleneck"
              title="Your business does not need more tabs, tasks, or delayed replies."
              description="NexaFlow targets the manual work that quietly slows revenue, service quality, and team focus."
              invert
            />
            <div className="mt-10">
              <CardGrid items={problems} variant="dark" />
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Services"
              title="AI agents designed around real business workflows."
              description="Deploy specialized agents for support, sales, booking, follow-up, reporting, and the operations between them."
            />
            <div className="mt-12">
              <CardGrid items={features} />
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(73,230,255,0.12),transparent_28%),radial-gradient(circle_at_86%_70%,rgba(123,92,255,0.18),transparent_30%)]" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="How it works"
              title="From workflow map to production agent in a focused launch cycle."
              description="We keep the process simple, measurable, and grounded in the tools your team already uses."
              invert
            />
            <div className="mt-12">
              <HowItWorks />
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Use cases"
              title="Automation playbooks for teams that live on conversations."
              description="NexaFlow agents adapt to your audience, channel, and operating model instead of forcing a generic chatbot flow."
            />
            <div className="mt-12">
              <CardGrid items={useCases} columns="three" />
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Integrations"
              title="Connect the apps your customers and team already trust."
              description="Start with the channels that matter most, then expand into richer CRM, payment, booking, and automation workflows."
            />
            <div className="mt-10">
              <Integrations />
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Pricing"
              title="Clear plans for launching your first agents and scaling from there."
              description="Choose a focused starter workflow, a growth automation stack, or a custom enterprise build."
            />
            <div className="mt-12">
              <PricingSection />
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Results"
              title="Turn response speed and operational consistency into growth advantages."
              description="NexaFlow agents keep the routine work moving while your team spends more time on judgment, relationships, and strategy."
              invert
            />
            <div className="mt-12">
              <Benefits />
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Testimonials"
              title="Professional teams use NexaFlow to remove friction from follow-up."
              description="A few representative examples of the outcomes automation-focused teams look for."
            />
            <div className="mt-12">
              <Testimonials />
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions teams ask before launching AI agents."
              description="Short answers on fit, setup, safety, integrations, and where humans stay in the loop."
            />
            <div className="mt-12">
              <FAQ />
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />

      <a
        href="#contact"
        className="fixed bottom-4 right-4 z-40 inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-5 text-sm font-black text-slate-950 shadow-[0_18px_50px_rgba(73,230,255,0.35)] transition hover:bg-white md:hidden"
      >
        Book Demo
      </a>
    </>
  );
}
