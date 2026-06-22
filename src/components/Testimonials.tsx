import type { LocalizedContent } from "@/lib/content";

export function Testimonials({
  testimonials,
}: {
  testimonials: LocalizedContent["testimonials"];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {testimonials.map((testimonial) => (
        <article
          key={testimonial.title}
          className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_52px_rgba(15,23,42,0.07)]"
        >
          <h3 className="text-lg font-black leading-snug text-slate-950">
            {testimonial.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            {testimonial.description}
          </p>
        </article>
      ))}
    </div>
  );
}
