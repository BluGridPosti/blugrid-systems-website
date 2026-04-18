"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SiteShell from "@/components/layout/site-shell";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const quickOptions = [
  "We are losing leads because follow-up is manual",
  "Our team uses too many disconnected tools",
  "We need an internal system built around our workflow",
  "We want an AI assistant for our website or support",
  "We need better dashboards and visibility",
  "We want to automate operations before we scale",
];

function getRecommendation(input: string) {
  const lower = input.toLowerCase();

  if (
    lower.includes("lead") ||
    lower.includes("follow-up") ||
    lower.includes("follow up") ||
    lower.includes("sales") ||
    lower.includes("pipeline")
  ) {
    return {
      title: "Recommended Direction: Automation Engine",
      body: "BluGrid would likely focus on lead capture, qualification logic, follow-up automation, pipeline movement, and response speed.",
      services: [
        "Automation Engines",
        "Custom CRM / lead systems",
        "Reporting & visibility layers",
      ],
    };
  }

  if (
    lower.includes("dashboard") ||
    lower.includes("visibility") ||
    lower.includes("report") ||
    lower.includes("reporting") ||
    lower.includes("kpi")
  ) {
    return {
      title: "Recommended Direction: Reporting & Visibility System",
      body: "BluGrid would likely focus on executive dashboards, KPI visibility, reporting structure, and clearer operational oversight.",
      services: [
        "Reporting & Visibility Systems",
        "Operating system design",
        "Executive control views",
      ],
    };
  }

  if (
    lower.includes("internal") ||
    lower.includes("workflow") ||
    lower.includes("process") ||
    lower.includes("system") ||
    lower.includes("operations")
  ) {
    return {
      title: "Recommended Direction: Custom Business System",
      body: "BluGrid would likely map your workflow, identify friction, and design a structured internal platform around how your business actually runs.",
      services: [
        "Custom Business Systems",
        "Operating System Design",
        "Workflow architecture",
      ],
    };
  }

  if (
    lower.includes("assistant") ||
    lower.includes("ai") ||
    lower.includes("support") ||
    lower.includes("chat")
  ) {
    return {
      title: "Recommended Direction: AI Assistant Layer",
      body: "BluGrid would likely build a branded AI assistant tied to your workflows, support processes, qualification flow, or internal operations.",
      services: [
        "AI Assistants",
        "Support assistants",
        "Qualification assistants",
      ],
    };
  }

  if (
    lower.includes("scale") ||
    lower.includes("growth") ||
    lower.includes("chaos") ||
    lower.includes("manual")
  ) {
    return {
      title: "Recommended Direction: Full Operating System Design",
      body: "BluGrid would likely assess the full operation, reduce manual dependencies, and redesign execution into a more scalable system.",
      services: [
        "Operating System Design",
        "Automation Engines",
        "Visibility & control systems",
      ],
    };
  }

  return {
    title: "Recommended Direction: System Audit First",
    body: "BluGrid would likely begin by auditing the operation, identifying friction points, and defining which systems, automation layers, or assistant tools should be built first.",
    services: [
      "System audit",
      "Workflow mapping",
      "Strategic architecture direction",
    ],
  };
}

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Welcome to the BluGrid Systems Advisor. Describe what is breaking down inside your business, where manual work is slowing you down, or what kind of system you think you need.",
    },
  ]);

  const [input, setInput] = useState("");
  const [latestPrompt, setLatestPrompt] = useState("");

  const recommendation = useMemo(() => {
    if (!latestPrompt.trim()) return null;
    return getRecommendation(latestPrompt);
  }, [latestPrompt]);

  function sendMessage(text?: string) {
    const finalText = (text ?? input).trim();
    if (!finalText) return;

    const result = getRecommendation(finalText);

    setMessages((current) => [
      ...current,
      { role: "user", content: finalText },
      {
        role: "assistant",
        content: `${result.title}\n\n${result.body}`,
      },
    ]);

    setLatestPrompt(finalText);
    setInput("");
  }

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-5xl">
          <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
            AI Assistant
          </div>

          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
            BluGrid Systems Advisor
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 md:text-lg">
            Use the assistant to describe what is slowing your business down.
            It will identify likely system directions based on operational friction,
            visibility gaps, automation needs, and execution pressure.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6">
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:p-8">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                  Advisor Interface
                </div>
                <h2 className="mt-2 text-2xl font-black uppercase text-white">
                  Describe The Business Problem
                </h2>
              </div>

              <div className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                Simulated Assistant
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`max-w-[92%] rounded-[1.5rem] border p-4 sm:p-5 ${
                    message.role === "assistant"
                      ? "border-white/10 bg-black/25 text-white/80"
                      : "ml-auto border-cyan-300/30 bg-cyan-300/10 text-white"
                  }`}
                >
                  <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                    {message.role === "assistant" ? "BluGrid Advisor" : "You"}
                  </div>

                  <div className="whitespace-pre-line text-sm leading-7">
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-semibold text-white/75">
                Your message
              </label>

              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={5}
                className="w-full rounded-[1.5rem] border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/25 focus:border-cyan-300/35"
                placeholder="Example: We get leads from our website and WhatsApp, but follow-up is inconsistent, reporting is weak, and the team is drowning in manual admin."
              />
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => sendMessage()}
                className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
              >
                Analyze Problem
              </button>

              <button
                type="button"
                onClick={() => {
                  setMessages([
                    {
                      role: "assistant",
                      content:
                        "Welcome to the BluGrid Systems Advisor. Describe what is breaking down inside your business, where manual work is slowing you down, or what kind of system you think you need.",
                    },
                  ]);
                  setInput("");
                  setLatestPrompt("");
                }}
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-cyan-300/30 hover:text-cyan-300"
              >
                Reset
              </button>
            </div>

            <div className="mt-8">
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                Quick Prompts
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {quickOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => sendMessage(option)}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-left text-sm leading-7 text-white/75 transition hover:border-cyan-300/30 hover:text-white"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                System Direction
              </div>

              {recommendation ? (
                <>
                  <h3 className="mt-3 text-2xl font-black uppercase text-white">
                    {recommendation.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/70">
                    {recommendation.body}
                  </p>

                  <div className="mt-6">
                    <div className="text-xs uppercase tracking-[0.22em] text-white/45">
                      Suggested BluGrid Focus
                    </div>

                    <div className="mt-4 space-y-3">
                      {recommendation.services.map((service) => (
                        <div
                          key={service}
                          className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-sm text-white/80"
                        >
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="mt-3 text-2xl font-black uppercase text-white">
                    Awaiting Input
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/70">
                    Once you describe your business problem, the advisor will
                    suggest the most likely system direction BluGrid would recommend.
                  </p>
                </>
              )}
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                What This Assistant Will Become
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-sm text-white/80">
                  Real OpenAI-powered business analysis
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-sm text-white/80">
                  Service recommendations based on live input
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-sm text-white/80">
                  Lead qualification and contact routing
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-sm text-white/80">
                  Integration with BluGrid audit and tools layer
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-cyan-300/15 via-blue-500/10 to-transparent p-6 sm:p-8">
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                Need A Real Breakdown?
              </div>

              <h3 className="mt-3 text-2xl font-black uppercase text-white">
                Book A System Audit
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/70">
                If you already know there is friction inside the business,
                BluGrid can help identify what needs to be rebuilt, automated,
                or structured properly.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
              >
                Book Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}