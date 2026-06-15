import type { LocalizedContent } from "@/lib/content";

export function FAQ({ faqs }: { faqs: LocalizedContent["faqs"] }) {
  return (
    <div className="mx-auto grid max-w-4xl gap-3">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.05)]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-black text-slate-950">
            {faq.question}
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-slate-100 text-xl leading-none text-slate-950 transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
