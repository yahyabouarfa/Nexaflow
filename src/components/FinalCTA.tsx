import { ButtonLink } from "@/components/ButtonLink";
import type { LocalizedContent } from "@/lib/content";

export function FinalCTA({
  finalCta,
  standalone = false,
}: {
  finalCta: LocalizedContent["finalCta"];
  standalone?: boolean;
}) {
  return (
    <section
      id="contact"
      className={`relative overflow-hidden bg-slate-950 px-4 ${
        standalone ? "pb-16 pt-32 sm:pt-36" : "py-16"
      } text-white sm:px-6 lg:px-8`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(73,230,255,0.16),transparent_26%),radial-gradient(circle_at_82%_60%,rgba(123,92,255,0.22),transparent_30%)]" />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
          {finalCta.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          {finalCta.description}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/contact">{finalCta.primaryCta}</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            {finalCta.secondaryCta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
