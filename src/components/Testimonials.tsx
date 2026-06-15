import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <figure
          key={testimonial.name}
          className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_52px_rgba(15,23,42,0.07)]"
        >
          <blockquote className="text-base leading-8 text-slate-700">
            “{testimonial.quote}”
          </blockquote>
          <figcaption className="mt-6 border-t border-slate-100 pt-5">
            <p className="font-black text-slate-950">{testimonial.name}</p>
            <p className="mt-1 text-sm font-semibold text-slate-500">{testimonial.role}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
