"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SiteShell from "@/components/layout/site-shell";

type OptionValue = 0 | 1 | 2 | 3;
type ToolKey = "audit" | "automation" | "leakage";

type Question = {
  id: string;
  title: string;
  description: string;
  options: {
    label: string;
    value: OptionValue;
  }[];
};

const auditQuestions: Question[] = [
  {
    id: "tools",
    title: "How structured are your current business tools?",
    description:
      "Think about how many disconnected tools, spreadsheets, or manual workarounds your team still depends on.",
    options: [
      { label: "Highly fragmented", value: 0 },
      { label: "Mostly disconnected", value: 1 },
      { label: "Partially structured", value: 2 },
      { label: "Well integrated", value: 3 },
    ],
  },
  {
    id: "followup",
    title: "How are leads or client requests followed up?",
    description:
      "This measures whether the business depends on manual effort or has a reliable response structure.",
    options: [
      { label: "Entirely manual", value: 0 },
      { label: "Mostly manual", value: 1 },
      { label: "Partly automated", value: 2 },
      { label: "Strong automated flow", value: 3 },
    ],
  },
  {
    id: "visibility",
    title: "How much real-time visibility does leadership have?",
    description:
      "Can leadership clearly see performance, activity, and bottlenecks without waiting for updates?",
    options: [
      { label: "Almost none", value: 0 },
      { label: "Limited visibility", value: 1 },
      { label: "Some dashboards", value: 2 },
      { label: "Strong live visibility", value: 3 },
    ],
  },
  {
    id: "workflow",
    title: "How dependent is the business on manual admin?",
    description:
      "This measures how much time is still being consumed by repetitive workflow handling.",
    options: [
      { label: "Heavily dependent", value: 0 },
      { label: "Still quite manual", value: 1 },
      { label: "Moderately optimized", value: 2 },
      { label: "Operationally efficient", value: 3 },
    ],
  },
  {
    id: "control",
    title: "How controlled are your internal processes?",
    description:
      "Do tasks, approvals, responsibilities, and movement inside the business follow a clear structure?",
    options: [
      { label: "Chaotic / inconsistent", value: 0 },
      { label: "Loose structure", value: 1 },
      { label: "Fairly controlled", value: 2 },
      { label: "Highly structured", value: 3 },
    ],
  },
  {
    id: "scale",
    title: "How ready is the business to scale operationally?",
    description:
      "If your volume doubled, would the operation hold together cleanly or start breaking down?",
    options: [
      { label: "It would strain badly", value: 0 },
      { label: "It would be difficult", value: 1 },
      { label: "It could manage with pressure", value: 2 },
      { label: "It is built to scale", value: 3 },
    ],
  },
];

const automationQuestions: Question[] = [
  {
    id: "process_repeatability",
    title: "How repeatable are your current processes?",
    description:
      "Automation works best when there is a clear pattern to what the business is doing.",
    options: [
      { label: "Highly inconsistent", value: 0 },
      { label: "Some repeatability", value: 1 },
      { label: "Mostly repeatable", value: 2 },
      { label: "Very structured and repeatable", value: 3 },
    ],
  },
  {
    id: "data_quality",
    title: "How reliable is your business data?",
    description:
      "Automation depends on clean inputs, consistent records, and basic data discipline.",
    options: [
      { label: "Messy / unreliable", value: 0 },
      { label: "Partially usable", value: 1 },
      { label: "Mostly reliable", value: 2 },
      { label: "Clean and dependable", value: 3 },
    ],
  },
  {
    id: "team_adoption",
    title: "How willing is your team to follow structured systems?",
    description:
      "Good automation still requires operational discipline from the people using it.",
    options: [
      { label: "Strong resistance", value: 0 },
      { label: "Some resistance", value: 1 },
      { label: "Generally cooperative", value: 2 },
      { label: "Highly aligned", value: 3 },
    ],
  },
  {
    id: "decision_rules",
    title: "How clear are your business rules and decision logic?",
    description:
      "If approvals, routing, and next steps are unclear, automation becomes harder to deploy well.",
    options: [
      { label: "Very unclear", value: 0 },
      { label: "Somewhat unclear", value: 1 },
      { label: "Mostly defined", value: 2 },
      { label: "Clearly defined", value: 3 },
    ],
  },
  {
    id: "channel_consistency",
    title: "How consistently do enquiries and requests enter the business?",
    description:
      "Automation is easier when inflows come through structured channels.",
    options: [
      { label: "Completely scattered", value: 0 },
      { label: "Somewhat fragmented", value: 1 },
      { label: "Mostly centralized", value: 2 },
      { label: "Well controlled", value: 3 },
    ],
  },
  {
    id: "management_visibility",
    title: "How clearly can management track execution today?",
    description:
      "Good automation should make leadership visibility stronger, not weaker.",
    options: [
      { label: "Very weak", value: 0 },
      { label: "Limited", value: 1 },
      { label: "Moderate", value: 2 },
      { label: "Strong", value: 3 },
    ],
  },
];

const auditInitialAnswers: Record<string, OptionValue | null> = Object.fromEntries(
  auditQuestions.map((question) => [question.id, null])
) as Record<string, OptionValue | null>;

const automationInitialAnswers: Record<string, OptionValue | null> =
  Object.fromEntries(
    automationQuestions.map((question) => [question.id, null])
  ) as Record<string, OptionValue | null>;

function getAuditMaturity(score: number) {
  if (score <= 5) {
    return {
      band: "Critical",
      summary:
        "Your operation is likely carrying too much manual dependence, fragmented tooling, and weak visibility.",
      recommendation:
        "BluGrid would likely start with workflow mapping, system architecture, and operational restructuring.",
    };
  }

  if (score <= 10) {
    return {
      band: "Unstable",
      summary:
        "There are signs of structure, but core parts of the business still rely too heavily on human effort and disconnected processes.",
      recommendation:
        "BluGrid would likely focus on automation, control layers, and cleaner operational flows.",
    };
  }

  if (score <= 14) {
    return {
      band: "Developing",
      summary:
        "The business has some maturity, but there are still clear opportunities to improve speed, visibility, and scalability.",
      recommendation:
        "BluGrid would likely strengthen reporting, automation depth, and system integration.",
    };
  }

  return {
    band: "Advanced",
    summary:
      "Your operation appears relatively mature, but there is still room to sharpen performance and create stronger infrastructure for scale.",
    recommendation:
      "BluGrid would likely refine advanced reporting, AI layers, and deeper operational optimization.",
  };
}

function getAutomationReadiness(score: number) {
  if (score <= 5) {
    return {
      band: "Not Ready",
      summary:
        "The business likely needs stronger structure, cleaner data, and more defined process logic before automation can perform well.",
      recommendation:
        "BluGrid should start by tightening workflows, centralizing channels, and defining execution rules.",
    };
  }

  if (score <= 10) {
    return {
      band: "Partially Ready",
      summary:
        "There is some automation potential, but inconsistent process handling and weak operational structure may limit results.",
      recommendation:
        "BluGrid should focus on process cleanup, better visibility, and targeted automation in high-friction areas.",
    };
  }

  if (score <= 14) {
    return {
      band: "Ready",
      summary:
        "The business has enough structure to benefit meaningfully from automation, especially in lead handling, routing, and reporting.",
      recommendation:
        "BluGrid should design an automation layer around key workflows and create stronger control logic.",
    };
  }

  return {
    band: "Highly Ready",
    summary:
      "The business appears well positioned for serious automation, AI support, and deeper system-driven execution.",
    recommendation:
      "BluGrid should focus on high-leverage automation, assistant layers, and advanced visibility systems.",
  };
}

function currency(value: number) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ToolsPage() {
  const [activeTool, setActiveTool] = useState<ToolKey>("audit");

  const [auditAnswers, setAuditAnswers] =
    useState<Record<string, OptionValue | null>>(auditInitialAnswers);

  const [automationAnswers, setAutomationAnswers] =
    useState<Record<string, OptionValue | null>>(automationInitialAnswers);

  const [teamSize, setTeamSize] = useState("5");
  const [manualHoursPerPerson, setManualHoursPerPerson] = useState("2");
  const [leadVolume, setLeadVolume] = useState("120");
  const [missedFollowUpRate, setMissedFollowUpRate] = useState("15");
  const [avgLeadValue, setAvgLeadValue] = useState("3500");

  const auditAnsweredCount = useMemo(
    () => Object.values(auditAnswers).filter((value) => value !== null).length,
    [auditAnswers]
  );

  const auditScore = useMemo(() => {
    return Object.values(auditAnswers).reduce<number>(
      (total, value) => total + (value ?? 0),
      0
    );
  }, [auditAnswers]);

  const auditPercentage = Math.round(
    (auditScore / (auditQuestions.length * 3)) * 100
  );

  const auditMaturity = getAuditMaturity(auditScore);

  const automationAnsweredCount = useMemo(
    () =>
      Object.values(automationAnswers).filter((value) => value !== null).length,
    [automationAnswers]
  );

  const automationScore = useMemo(() => {
    return Object.values(automationAnswers).reduce<number>(
      (total, value) => total + (value ?? 0),
      0
    );
  }, [automationAnswers]);

  const automationPercentage = Math.round(
    (automationScore / (automationQuestions.length * 3)) * 100
  );

  const automationMaturity = getAutomationReadiness(automationScore);

  const topAuditGaps = useMemo(() => {
    return auditQuestions
      .map((question) => ({
        title: question.title,
        score: auditAnswers[question.id],
      }))
      .filter(
        (item): item is { title: string; score: OptionValue } =>
          item.score !== null && item.score !== 3
      )
      .sort((a, b) => a.score - b.score)
      .slice(0, 3);
  }, [auditAnswers]);

  const leakage = useMemo(() => {
    const team = Number(teamSize) || 0;
    const hours = Number(manualHoursPerPerson) || 0;
    const leads = Number(leadVolume) || 0;
    const missedRate = (Number(missedFollowUpRate) || 0) / 100;
    const leadValue = Number(avgLeadValue) || 0;

    const monthlyManualHours = team * hours * 22;
    const lostLeads = leads * missedRate;
    const estimatedRevenueLeakage = lostLeads * leadValue;
    const estimatedRecoveredValue = estimatedRevenueLeakage * 0.35;

    return {
      monthlyManualHours,
      lostLeads,
      estimatedRevenueLeakage,
      estimatedRecoveredValue,
    };
  }, [
    teamSize,
    manualHoursPerPerson,
    leadVolume,
    missedFollowUpRate,
    avgLeadValue,
  ]);

  function setAuditAnswer(questionId: string, value: OptionValue) {
    setAuditAnswers((current) => ({
      ...current,
      [questionId]: value,
    }));
  }

  function setAutomationAnswer(questionId: string, value: OptionValue) {
    setAutomationAnswers((current) => ({
      ...current,
      [questionId]: value,
    }));
  }

  function resetAudit() {
    setAuditAnswers(auditInitialAnswers);
  }

  function resetAutomation() {
    setAutomationAnswers(automationInitialAnswers);
  }

  function resetLeakage() {
    setTeamSize("5");
    setManualHoursPerPerson("2");
    setLeadVolume("120");
    setMissedFollowUpRate("15");
    setAvgLeadValue("3500");
  }

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-5xl">
          <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
            Tools
          </div>

          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
            Interactive BluGrid Business Tools
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 md:text-lg">
            Use these tools to assess operational maturity, automation readiness,
            and the time or revenue leakage created by weak systems.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <button
            type="button"
            onClick={() => setActiveTool("audit")}
            className={`rounded-[1.5rem] border p-5 text-left transition ${
              activeTool === "audit"
                ? "border-cyan-300 bg-cyan-300/10"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
              Tool 01
            </div>
            <div className="mt-2 text-xl font-black uppercase text-white">
              Business Systems Audit
            </div>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Assess your operational structure across tools, visibility,
              manual work, and scale readiness.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setActiveTool("automation")}
            className={`rounded-[1.5rem] border p-5 text-left transition ${
              activeTool === "automation"
                ? "border-cyan-300 bg-cyan-300/10"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
              Tool 02
            </div>
            <div className="mt-2 text-xl font-black uppercase text-white">
              Automation Readiness Score
            </div>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Measure whether your business is structurally ready for automation
              and AI support.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setActiveTool("leakage")}
            className={`rounded-[1.5rem] border p-5 text-left transition ${
              activeTool === "leakage"
                ? "border-cyan-300 bg-cyan-300/10"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
              Tool 03
            </div>
            <div className="mt-2 text-xl font-black uppercase text-white">
              Revenue & Time Leakage
            </div>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Estimate the cost of manual work, poor follow-up, and weak
              operational structure.
            </p>
          </button>
        </div>
      </section>

      {activeTool === "audit" && (
        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                    Audit Questions
                  </div>
                  <h2 className="mt-2 text-2xl font-black uppercase text-white">
                    Assess The Strength Of Your Current System
                  </h2>
                </div>

                <div className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                  {auditAnsweredCount} / {auditQuestions.length} answered
                </div>
              </div>

              <div className="mt-6 space-y-6">
                {auditQuestions.map((question, index) => (
                  <div
                    key={question.id}
                    className="rounded-[1.75rem] border border-white/10 bg-black/25 p-5"
                  >
                    <div className="text-xs uppercase tracking-[0.22em] text-cyan-300">
                      Question {index + 1}
                    </div>

                    <h3 className="mt-2 text-xl font-black text-white">
                      {question.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/65">
                      {question.description}
                    </p>

                    <div className="mt-5 grid gap-3">
                      {question.options.map((option) => {
                        const isSelected =
                          auditAnswers[question.id] === option.value;

                        return (
                          <button
                            key={option.label}
                            type="button"
                            onClick={() =>
                              setAuditAnswer(question.id, option.value)
                            }
                            className={`rounded-2xl border px-4 py-4 text-left text-sm transition ${
                              isSelected
                                ? "border-cyan-300 bg-cyan-300/10 text-white"
                                : "border-white/10 bg-white/[0.03] text-white/75 hover:border-cyan-300/30 hover:text-white"
                            }`}
                          >
                            {option.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                  Audit Score
                </div>

                <div className="mt-4 text-5xl font-black text-white">
                  {auditScore}
                  <span className="text-xl text-white/35"> / 18</span>
                </div>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-cyan-300 transition-all"
                    style={{ width: `${auditPercentage}%` }}
                  />
                </div>

                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-white/55">System maturity</span>
                  <span className="font-bold text-cyan-300">
                    {auditMaturity.band}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-white/65">
                  {auditMaturity.summary}
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                  Recommendation
                </div>

                <h3 className="mt-3 text-2xl font-black uppercase text-white">
                  BluGrid Direction
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/70">
                  {auditMaturity.recommendation}
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
                  >
                    Book A System Audit
                  </Link>

                  <button
                    type="button"
                    onClick={resetAudit}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-cyan-300/30 hover:text-cyan-300"
                  >
                    Reset Tool
                  </button>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                  Largest Gaps
                </div>

                <div className="mt-5 space-y-3">
                  {topAuditGaps.length > 0 ? (
                    topAuditGaps.map((gap) => (
                      <div
                        key={gap.title}
                        className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4"
                      >
                        <div className="text-sm font-semibold text-white">
                          {gap.title}
                        </div>
                        <div className="mt-2 text-xs uppercase tracking-[0.16em] text-white/45">
                          Current score: {gap.score} / 3
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-sm leading-7 text-white/70">
                      Answer the audit questions to reveal the most important
                      operational gaps.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTool === "automation" && (
        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                    Readiness Questions
                  </div>
                  <h2 className="mt-2 text-2xl font-black uppercase text-white">
                    Measure Your Automation Readiness
                  </h2>
                </div>

                <div className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                  {automationAnsweredCount} / {automationQuestions.length} answered
                </div>
              </div>

              <div className="mt-6 space-y-6">
                {automationQuestions.map((question, index) => (
                  <div
                    key={question.id}
                    className="rounded-[1.75rem] border border-white/10 bg-black/25 p-5"
                  >
                    <div className="text-xs uppercase tracking-[0.22em] text-cyan-300">
                      Question {index + 1}
                    </div>

                    <h3 className="mt-2 text-xl font-black text-white">
                      {question.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/65">
                      {question.description}
                    </p>

                    <div className="mt-5 grid gap-3">
                      {question.options.map((option) => {
                        const isSelected =
                          automationAnswers[question.id] === option.value;

                        return (
                          <button
                            key={option.label}
                            type="button"
                            onClick={() =>
                              setAutomationAnswer(question.id, option.value)
                            }
                            className={`rounded-2xl border px-4 py-4 text-left text-sm transition ${
                              isSelected
                                ? "border-cyan-300 bg-cyan-300/10 text-white"
                                : "border-white/10 bg-white/[0.03] text-white/75 hover:border-cyan-300/30 hover:text-white"
                            }`}
                          >
                            {option.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                  Readiness Score
                </div>

                <div className="mt-4 text-5xl font-black text-white">
                  {automationScore}
                  <span className="text-xl text-white/35"> / 18</span>
                </div>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-cyan-300 transition-all"
                    style={{ width: `${automationPercentage}%` }}
                  />
                </div>

                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-white/55">Automation readiness</span>
                  <span className="font-bold text-cyan-300">
                    {automationMaturity.band}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-white/65">
                  {automationMaturity.summary}
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                  BluGrid Recommendation
                </div>

                <h3 className="mt-3 text-2xl font-black uppercase text-white">
                  Suggested Next Move
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/70">
                  {automationMaturity.recommendation}
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
                  >
                    Talk To BluGrid
                  </Link>

                  <button
                    type="button"
                    onClick={resetAutomation}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-cyan-300/30 hover:text-cyan-300"
                  >
                    Reset Tool
                  </button>
                </div>
              </div>

              <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-cyan-300/15 via-blue-500/10 to-transparent p-6 sm:p-8">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                  Best Use Cases
                </div>

                <div className="mt-4 space-y-3">
                  {[
                    "Lead routing and qualification",
                    "Email and WhatsApp follow-up",
                    "Task assignment and escalation",
                    "Dashboards, reporting, and visibility",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-sm text-white/80"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTool === "leakage" && (
        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6">
          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                Inputs
              </div>

              <h2 className="mt-3 text-2xl font-black uppercase text-white">
                Estimate Revenue & Time Leakage
              </h2>

              <div className="mt-6 grid gap-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white/75">
                    Team members involved in manual workflow
                  </label>
                  <input
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/25"
                    type="number"
                    min="0"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-white/75">
                    Average manual admin hours per person per day
                  </label>
                  <input
                    value={manualHoursPerPerson}
                    onChange={(e) => setManualHoursPerPerson(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/25"
                    type="number"
                    min="0"
                    step="0.5"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-white/75">
                    Monthly inbound leads or requests
                  </label>
                  <input
                    value={leadVolume}
                    onChange={(e) => setLeadVolume(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/25"
                    type="number"
                    min="0"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-white/75">
                    Estimated missed / delayed follow-up rate (%)
                  </label>
                  <input
                    value={missedFollowUpRate}
                    onChange={(e) => setMissedFollowUpRate(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/25"
                    type="number"
                    min="0"
                    max="100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-white/75">
                    Average value per lead / opportunity (ZAR)
                  </label>
                  <input
                    value={avgLeadValue}
                    onChange={(e) => setAvgLeadValue(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/25"
                    type="number"
                    min="0"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-cyan-300">
                    Monthly Manual Hours
                  </div>
                  <div className="mt-3 text-4xl font-black text-white">
                    {Math.round(leakage.monthlyManualHours)}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/65">
                    Estimated hours being consumed each month by repetitive
                    manual workflow.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-cyan-300">
                    Lost / Delayed Leads
                  </div>
                  <div className="mt-3 text-4xl font-black text-white">
                    {Math.round(leakage.lostLeads)}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/65">
                    Estimated monthly opportunities affected by weak follow-up.
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                  Estimated Revenue Leakage
                </div>

                <div className="mt-4 text-5xl font-black text-white">
                  {currency(leakage.estimatedRevenueLeakage)}
                </div>

                <p className="mt-4 text-sm leading-7 text-white/70">
                  This is an estimate of how much revenue may be exposed to weak
                  process handling, slow response, or missed operational execution.
                </p>
              </div>

              <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-cyan-300/15 via-blue-500/10 to-transparent p-6 sm:p-8">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                  Potential Recoverable Value
                </div>

                <div className="mt-4 text-5xl font-black text-white">
                  {currency(leakage.estimatedRecoveredValue)}
                </div>

                <p className="mt-4 text-sm leading-7 text-white/70">
                  A structured system does not recover everything instantly, but
                  even partial improvement in process speed and follow-up can
                  create serious upside.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
                  >
                    Calculate My System Plan
                  </Link>

                  <button
                    type="button"
                    onClick={resetLeakage}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-cyan-300/30 hover:text-cyan-300"
                  >
                    Reset Tool
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </SiteShell>
  );
}