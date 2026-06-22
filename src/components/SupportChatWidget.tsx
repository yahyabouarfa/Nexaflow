"use client";

import { Bot, MessageCircle, Send, X } from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

import { site } from "@/lib/content";

type ChatMessage = {
  id: number;
  role: "bot" | "user";
  text: string;
};

const initialMessages: ChatMessage[] = [
  {
    id: 1,
    role: "bot",
    text: "Hi, I am the NexaFlow assistant. Ask me about our AI agents, pricing, setup, integrations, or how to book a demo.",
  },
];

const suggestions = [
  "What can NexaFlow automate?",
  "How much does it cost?",
  "How long does setup take?",
  "Can it work with WhatsApp?",
];

const servicesAnswer =
  "NexaFlow builds AI agents for appointment booking, customer support, lead qualification, sales assistance, Email and WhatsApp automation, CRM integration, workflow automation, and analytics reporting.";

const fallbackAnswer =
  "I can help with NexaFlow services, pricing, setup, integrations, safety, and demos. For a specific project, book a demo or message us on WhatsApp and we will help you map the best first workflow.";

function normalizeQuestion(question: string) {
  return question.toLowerCase().replace(/[^a-z0-9+ ]/g, " ");
}

function getBotAnswer(question: string) {
  const normalized = normalizeQuestion(question);

  if (
    normalized.includes("service") ||
    normalized.includes("automate") ||
    normalized.includes("agent") ||
    normalized.includes("what can")
  ) {
    return servicesAnswer;
  }

  if (normalized.includes("appointment") || normalized.includes("book") || normalized.includes("calendar")) {
    return "The AI Appointment Booking agent lets customers book, reschedule, and cancel appointments 24/7 through chat. It syncs with your calendar, respects business hours, and confirms automatically.";
  }

  if (normalized.includes("support") || normalized.includes("faq") || normalized.includes("customer")) {
    return "The AI Customer Support Agent answers common customer questions around the clock using your FAQs, policies, and documents, then hands complex cases to your team with context.";
  }

  if (normalized.includes("lead") || normalized.includes("qualif")) {
    return "The AI Lead Qualification Agent talks to incoming leads, scores them by fit and intent, and routes promising opportunities to your team so they can focus on the leads most likely to buy.";
  }

  if (normalized.includes("sales") || normalized.includes("sell") || normalized.includes("product")) {
    return "The AI Sales Assistant answers product questions, recommends the right option, and guides prospects toward a decision like a knowledgeable salesperson available 24/7.";
  }

  if (normalized.includes("whatsapp") || normalized.includes("email")) {
    return `Yes. NexaFlow can bring agents to WhatsApp and email so customers can get answers, bookings, and follow-up in the channels they already use. You can also contact support on WhatsApp at ${site.whatsapp.display}.`;
  }

  if (normalized.includes("crm") || normalized.includes("hubspot") || normalized.includes("pipeline")) {
    return "CRM Integration logs conversations, updates contacts and deals, syncs notes and tasks, and keeps your records current without manual data entry.";
  }

  if (normalized.includes("workflow") || normalized.includes("operation") || normalized.includes("approval")) {
    return "Workflow Automation connects multi-step processes like approvals, alerts, routing, and follow-ups so routine operations can run with fewer manual touches.";
  }

  if (normalized.includes("analytics") || normalized.includes("report") || normalized.includes("metric")) {
    return "Analytics and Reporting tracks agent conversations and outcomes, then gives clear summaries of volume, response times, conversions, and improvement opportunities.";
  }

  if (normalized.includes("price") || normalized.includes("cost") || normalized.includes("plan")) {
    return "Pricing starts with Starter at $49/month for one focused automation, Growth at $149/month for sales, support, and CRM workflows, and custom Enterprise plans for advanced needs.";
  }

  if (normalized.includes("setup") || normalized.includes("long") || normalized.includes("launch") || normalized.includes("time")) {
    return "Most focused agents can launch in 7 to 14 days. More advanced integrations or custom workflows can take longer depending on scope.";
  }

  if (normalized.includes("safe") || normalized.includes("security") || normalized.includes("handoff") || normalized.includes("human")) {
    return "Agents are designed with controlled permissions, clear escalation rules, review workflows, and human handoff for complex, sensitive, or low-confidence cases.";
  }

  if (normalized.includes("integration") || normalized.includes("connect") || normalized.includes("tools")) {
    return "NexaFlow can connect with WhatsApp, Instagram, Gmail, Google Sheets, Notion, Shopify, WooCommerce, Stripe, Calendly, HubSpot, Zapier, n8n, and other common business tools.";
  }

  if (normalized.includes("demo") || normalized.includes("contact") || normalized.includes("call")) {
    return `You can book a demo from this chat or message us directly on WhatsApp at ${site.whatsapp.display}. We will help identify one high-impact workflow to automate first.`;
  }

  return fallbackAnswer;
}

export function SupportChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const whatsappUrl = useMemo(() => {
    const text = encodeURIComponent(
      "Hi NexaFlow, I would like help with AI automation for my business.",
    );

    return `https://wa.me/${site.whatsapp.number}?text=${text}`;
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isOpen]);

  useEffect(() => {
    function handleDemoClick(event: MouseEvent) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const trigger = target.closest(".open-chat-demo");

      if (!trigger) {
        return;
      }

      event.preventDefault();
      setIsOpen(true);
    }

    document.addEventListener("click", handleDemoClick);

    return () => document.removeEventListener("click", handleDemoClick);
  }, []);

  function sendMessage(text: string) {
    const trimmed = text.trim();

    if (!trimmed) {
      return;
    }

    setMessages((currentMessages) => {
      const nextId = currentMessages.length + 1;

      return [
        ...currentMessages,
        { id: nextId, role: "user", text: trimmed },
        { id: nextId + 1, role: "bot", text: getBotAnswer(trimmed) },
      ];
    });
    setInput("");
    setIsOpen(true);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="fixed bottom-4 right-4 z-[70] flex flex-col items-end gap-3">
      {isOpen ? (
        <section
          aria-label="NexaFlow chat assistant"
          className="mb-1 flex max-h-[min(620px,calc(100vh-11rem))] w-[calc(100vw-2rem)] max-w-[380px] flex-col overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(2,6,23,0.28)]"
        >
          <div className="flex items-center justify-between gap-3 bg-slate-950 px-4 py-3 text-white">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-cyan-300 text-slate-950">
                <Bot size={20} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h2 className="truncate text-sm font-black">NexaFlow assistant</h2>
                <p className="truncate text-xs font-semibold text-slate-300">
                  Answers questions and routes support
                </p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              title="Close chat"
              onClick={() => setIsOpen(false)}
              className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/15"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto bg-slate-50 px-4 py-4">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <p
                    className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.role === "user"
                        ? "bg-slate-950 text-white"
                        : "border border-slate-200 bg-white text-slate-700"
                    }`}
                  >
                    {message.text}
                  </p>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white p-3">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => sendMessage(suggestion)}
                  className="shrink-0 rounded-full border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-cyan-300 hover:text-slate-950"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex items-end gap-2">
              <label className="sr-only" htmlFor="nexaflow-chat-message">
                Ask a question
              </label>
              <textarea
                id="nexaflow-chat-message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    sendMessage(input);
                  }
                }}
                placeholder="Ask about services, pricing, setup..."
                rows={1}
                className="max-h-28 min-h-11 flex-1 resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:bg-white"
              />
              <button
                type="submit"
                aria-label="Send message"
                title="Send message"
                className="grid size-11 shrink-0 place-items-center rounded-full bg-cyan-300 text-slate-950 transition hover:bg-slate-950 hover:text-white"
              >
                <Send size={18} aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      ) : null}

      <div className="flex flex-col items-end gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Contact NexaFlow on WhatsApp at ${site.whatsapp.display}`}
          title={`WhatsApp support: ${site.whatsapp.display}`}
          className="grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_18px_50px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1fb85a] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          <MessageCircle size={24} aria-hidden="true" />
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Close NexaFlow chat assistant" : "Open NexaFlow chat assistant"}
          title={isOpen ? "Close chat" : "Open chat"}
          onClick={() => setIsOpen((value) => !value)}
          className="grid size-14 place-items-center rounded-full bg-cyan-300 text-slate-950 shadow-[0_18px_50px_rgba(73,230,255,0.35)] transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          {isOpen ? <X size={23} aria-hidden="true" /> : <Bot size={24} aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
}
