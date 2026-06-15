"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { ButtonLink } from "@/components/ButtonLink";
import type { LocalizedContent } from "@/lib/content";

export function PricingSection({ pricing }: { pricing: LocalizedContent["pricing"] }) {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <div>
      <div className="mb-10 flex justify-center">
        <div
          className="inline-grid grid-cols-2 rounded-full border border-slate-200 bg-white p-1 shadow-[0_18px_46px_rgba(15,23,42,0.08)]"
          role="tablist"
          aria-label="Pricing billing period"
        >
          {(["monthly", "yearly"] as const).map((option) => (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={billing === option}
              onClick={() => setBilling(option)}
              className={`rounded-full px-5 py-2.5 text-sm font-black capitalize transition ${
                billing === option
                  ? "bg-slate-950 text-white shadow-lg"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              {option === "monthly" ? pricing.monthly : pricing.yearly}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {pricing.plans.map((plan) => {
          const price = billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

          return (
            <article
              key={plan.name}
              className={`relative rounded-[24px] border p-6 shadow-[0_22px_70px_rgba(15,23,42,0.08)] ${
                plan.highlighted
                  ? "border-cyan-300 bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-950"
              }`}
            >
              {plan.highlighted ? (
                <div className="absolute right-5 top-5 rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                  {pricing.mostPopular}
                </div>
              ) : null}

              <h3 className="text-2xl font-black">{plan.name}</h3>
              <p
                className={`mt-3 min-h-14 text-sm leading-6 ${
                  plan.highlighted ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-end gap-2">
                {price === null ? (
                  <span className="text-4xl font-black">{pricing.custom}</span>
                ) : (
                  <>
                    <span className="text-5xl font-black">${price}</span>
                    <span
                      className={`pb-2 text-sm font-bold ${
                        plan.highlighted ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {pricing.perMonth}
                    </span>
                  </>
                )}
              </div>

              {billing === "yearly" && price !== null ? (
                <p className="mt-2 text-sm font-bold text-cyan-300">{pricing.billedYearly}</p>
              ) : (
                <p className="mt-2 text-sm font-bold text-slate-400">{pricing.flexibleMonthly}</p>
              )}

              <ButtonLink
                href="/contact"
                variant={plan.highlighted ? "primary" : "ghost"}
                className="mt-7 w-full"
              >
                {plan.cta}
              </ButtonLink>

              <ul className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6">
                    <span
                      className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
                        plan.highlighted ? "bg-cyan-300 text-slate-950" : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      <Check size={13} strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className={plan.highlighted ? "text-slate-200" : "text-slate-700"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}
