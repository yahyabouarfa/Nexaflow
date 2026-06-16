"use client";

import { ArrowLeft, ArrowRight, CheckCircle2, GitBranch, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { ButtonLink } from "@/components/ButtonLink";
import { PageChrome } from "@/components/PageChrome";
import type { WorkflowDetail } from "@/lib/workflows";

type WorkflowDetailPageProps = {
  workflow: WorkflowDetail;
};

export function WorkflowDetailPage({ workflow }: WorkflowDetailPageProps) {
  return (
    <PageChrome>
      <section className="relative isolate overflow-hidden bg-slate-950 px-4 pb-16 pt-32 text-white sm:px-6 sm:pt-36 lg:px-8">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_16%,rgba(73,230,255,0.18),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(123,92,255,0.2),transparent_30%),linear-gradient(135deg,#020617_0%,#08111f_42%,#030712_100%)]" />
        <div className="mx-auto max-w-7xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition hover:text-white"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to services
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-2 text-xs font-bold text-slate-200 shadow-2xl backdrop-blur">
                <GitBranch size={16} className="text-cyan-300" aria-hidden="true" />
                {workflow.eyebrow}
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {workflow.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                {workflow.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">
                  Build this workflow
                  <ArrowRight size={17} className="ml-2" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="/pricing" variant="secondary">
                  View pricing
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
                Expected outputs
              </p>
              <div className="mt-5 grid gap-3">
                {workflow.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm font-bold text-slate-100"
                  >
                    <CheckCircle2 size={17} className="shrink-0 text-cyan-300" aria-hidden="true" />
                    {outcome}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-cyan-500">
              n8n flow
            </p>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
              The automation path this workflow follows.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Each workflow is designed as an n8n-ready blueprint with placeholders for credentials, tool endpoints, and approval rules.
            </p>
          </div>

          <ol className="grid gap-4">
            {workflow.steps.map((step, index) => (
              <li
                key={step.title}
                className="grid gap-4 rounded-[22px] border border-slate-200 bg-slate-50 p-5 sm:grid-cols-[auto_1fr]"
              >
                <span className="grid size-10 place-items-center rounded-full bg-slate-950 text-sm font-black text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-black text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-4">
          <DetailList title="Inputs" items={workflow.inputs} />
          <DetailList title="Connected tools" items={workflow.tools} />
          <DetailList title="Human handoff" items={workflow.handoff} />
          <DetailList title="Metrics" items={workflow.metrics} />
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[28px] border border-white/10 bg-white/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex gap-4">
            <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-cyan-300 text-slate-950">
              <ShieldCheck size={22} aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-2xl font-black">Ready to adapt this workflow?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                We can map your tools, rules, approvals, and handoff points before importing the n8n blueprint.
              </p>
            </div>
          </div>
          <ButtonLink href="/contact" className="shrink-0">
            Book a demo
          </ButtonLink>
        </div>
      </section>
    </PageChrome>
  );
}

function DetailList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <article className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
      <h3 className="text-lg font-black text-slate-950">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan-500" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
