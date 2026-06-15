import { ArrowRight, ShieldCheck } from "lucide-react";

import { ButtonLink } from "@/components/ButtonLink";
import { DashboardMockup } from "@/components/DashboardMockup";
import type { LocalizedContent } from "@/lib/content";

type HeroProps = {
  dashboard: LocalizedContent["dashboard"];
  hero: LocalizedContent["hero"];
};

export function Hero({ dashboard, hero }: HeroProps) {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-slate-950 pb-16 pt-32 text-white sm:pb-20 sm:pt-36 lg:min-h-[92vh] lg:pt-40"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(73,230,255,0.18),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(123,92,255,0.24),transparent_30%),linear-gradient(135deg,#020617_0%,#08111f_42%,#030712_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.94fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-2 text-xs font-bold text-slate-200 shadow-2xl backdrop-blur">
            <ShieldCheck size={16} className="text-cyan-300" aria-hidden="true" />
            {hero.eyebrow}
          </div>

          <h1 className="max-w-5xl text-4xl font-black leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-xl">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact">
              {hero.primaryCta}
              <ArrowRight size={17} className="ml-2" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#pricing" variant="secondary">
              {hero.secondaryCta}
            </ButtonLink>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {hero.outcomes.map((indicator) => (
              <div
                key={indicator}
                className="rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm font-bold text-slate-100 backdrop-blur"
              >
                {indicator}
              </div>
            ))}
          </div>
        </div>

        <DashboardMockup dashboard={dashboard} />
      </div>
    </section>
  );
}
