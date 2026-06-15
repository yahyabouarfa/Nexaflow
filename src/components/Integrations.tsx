import { integrations } from "@/lib/content";

export function Integrations() {
  return (
    <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
      {integrations.map((integration) => (
        <span
          key={integration}
          className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-800 shadow-[0_14px_34px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:border-cyan-200 hover:text-blue-700"
        >
          {integration}
        </span>
      ))}
    </div>
  );
}
