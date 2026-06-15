import type { LocalizedContent } from "@/lib/content";

export function HowItWorks({ steps }: { steps: LocalizedContent["steps"] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {steps.map((step, index) => (
        <article
          key={step.title}
          className="relative rounded-[22px] border border-white/10 bg-white/[0.07] p-5 text-white transition duration-200 hover:-translate-y-1 hover:bg-white/[0.1]"
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="grid size-12 place-items-center rounded-2xl bg-cyan-300 text-lg font-black text-slate-950">
              {index + 1}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-cyan-300/50 to-transparent" />
          </div>
          <h3 className="text-lg font-black">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
        </article>
      ))}
    </div>
  );
}
