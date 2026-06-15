import { ArrowRight, Bot, CheckCircle2, MessageSquareText, Sparkles } from "lucide-react";

import type { LocalizedContent } from "@/lib/content";

const tones = ["cyan", "violet", "blue", "cyan"] as const;

type DashboardMockupProps = {
  dashboard: LocalizedContent["dashboard"];
};

export function DashboardMockup({ dashboard }: DashboardMockupProps) {
  return (
    <div
      className="relative mx-auto w-full max-w-xl animate-float"
      aria-label="AI agent workflow dashboard preview"
    >
      <div className="absolute -left-8 top-10 hidden h-32 w-32 rounded-full bg-cyan-300/16 blur-3xl sm:block" />
      <div className="absolute -bottom-8 -right-8 hidden h-40 w-40 rounded-full bg-violet-500/16 blur-3xl sm:block" />

      <div className="relative overflow-hidden rounded-[28px] border border-white/14 bg-white/[0.08] p-3 shadow-[0_28px_90px_rgba(2,6,23,0.55)] backdrop-blur-2xl">
        <div className="rounded-[22px] border border-white/10 bg-slate-950/78 p-4">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-cyan-300 text-slate-950">
                <Bot size={21} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-black text-white">{dashboard.title}</p>
                <p className="text-xs text-slate-400">{dashboard.subtitle}</p>
              </div>
            </div>
            <div className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200">
              {dashboard.status}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  {dashboard.workflowLabel}
                </p>
                <Sparkles size={16} className="text-cyan-300" aria-hidden="true" />
              </div>
              <div className="space-y-3">
                {dashboard.workflow.map((label, index) => (
                  <div key={label} className="flex items-center gap-3">
                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-full text-[11px] font-black ${
                        (tones[index] ?? "cyan") === "cyan"
                          ? "bg-cyan-300 text-slate-950"
                          : (tones[index] ?? "cyan") === "violet"
                            ? "bg-violet-400 text-white"
                            : "bg-blue-500 text-white"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="min-w-0 flex-1 rounded-full border border-white/10 bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-200">
                      {label}
                    </span>
                    {index < dashboard.workflow.length - 1 ? (
                      <ArrowRight size={14} className="hidden text-slate-500 sm:block" aria-hidden="true" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <div className="mb-3 flex items-center gap-2 text-sm font-bold text-white">
                  <MessageSquareText size={17} className="text-cyan-300" aria-hidden="true" />
                  {dashboard.conversationLabel}
                </div>
                <div className="space-y-2 text-xs">
                  <p className="rounded-2xl rounded-bl-md bg-white/10 p-3 text-slate-200">
                    {dashboard.leadMessage}
                  </p>
                  <p className="ml-5 rounded-2xl rounded-br-md bg-cyan-300 p-3 font-semibold text-slate-950">
                    {dashboard.agentMessage}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-2xl font-black text-white">82%</p>
                  <p className="mt-1 text-xs text-slate-400">{dashboard.qualifiedIntent}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-2xl font-black text-white">0:04</p>
                  <p className="mt-1 text-xs text-slate-400">{dashboard.replyTime}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] p-3">
            {dashboard.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-slate-200"
              >
                {tool}
              </span>
            ))}
            <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-300/12 px-3 py-1.5 text-xs font-bold text-emerald-200">
              <CheckCircle2 size={13} aria-hidden="true" />
              {dashboard.synced}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
