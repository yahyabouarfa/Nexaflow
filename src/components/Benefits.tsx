import { benefits } from "@/lib/content";

export function Benefits() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {benefits.map((benefit) => (
        <div
          key={benefit.label}
          className="rounded-[22px] border border-white/10 bg-white/[0.07] p-5 text-center text-white"
        >
          <p className="text-3xl font-black text-cyan-300">{benefit.value}</p>
          <p className="mt-2 text-sm font-bold text-slate-300">{benefit.label}</p>
        </div>
      ))}
    </div>
  );
}
