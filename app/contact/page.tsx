"use client";

import { useMemo, useState } from "react";
import SiteShell from "@/components/layout/site-shell";

const focusAreas = [
  "Custom business system",
  "Automation engine",
  "AI assistant",
  "Reporting / dashboards",
  "Workflow redesign",
  "Lead handling / CRM",
  "General system audit",
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [focus, setFocus] = useState("");
  const [tools, setTools] = useState("");
  const [problem, setProblem] = useState("");
  const [outcome, setOutcome] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const completion = useMemo(() => {
    const fields = [
      name,
      company,
      email,
      businessType,
      teamSize,
      focus,
      tools,
      problem,
      outcome,
    ];

    const filled = fields.filter((field) => field.trim().length > 0).length;
    return Math.round((filled / fields.length) * 100);
  }, [name, company, email, businessType, teamSize, focus, tools, problem, outcome]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          company,
          email,
          businessType,
          teamSize,
          focus,
          tools,
          problem,
          outcome,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong while submitting.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: "Your intake was submitted successfully. BluGrid will review it shortly.",
      });

      setName("");
      setCompany("");
      setEmail("");
      setBusinessType("");
      setTeamSize("");
      setFocus("");
      setTools("");
      setProblem("");
      setOutcome("");
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-5xl">
          <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
            Contact
          </div>

          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
            Book A System Audit.
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 md:text-lg">
            This is not a generic contact form. It is a structured intake for
            businesses that need stronger software, cleaner operations, better
            automation, and more visibility across execution.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6">
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                What Happens Next
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-4">
                  <div className="text-sm font-bold uppercase tracking-[0.14em] text-white">
                    01. Intake Review
                  </div>
                  <p className="mt-2 text-sm leading-7 text-white/65">
                    BluGrid reviews the current business structure, friction points,
                    tools, and desired direction.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-4">
                  <div className="text-sm font-bold uppercase tracking-[0.14em] text-white">
                    02. System Direction
                  </div>
                  <p className="mt-2 text-sm leading-7 text-white/65">
                    We identify what likely needs to be rebuilt, automated,
                    centralized, or redesigned.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-4">
                  <div className="text-sm font-bold uppercase tracking-[0.14em] text-white">
                    03. Audit Conversation
                  </div>
                  <p className="mt-2 text-sm leading-7 text-white/65">
                    If there is a strong fit, the next step is a direct system
                    audit conversation around scope and structure.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                Direct Contact
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/25 px-5 py-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-white/45">
                    Email
                  </div>
                  <div className="mt-2 break-all text-base font-semibold text-white">
                    info@blugridsystems.com
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-black/25 px-5 py-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-white/45">
                    Phone
                  </div>
                  <div className="mt-2 space-y-1 text-base font-semibold text-white">
                    <div>+27 83 321 3163</div>
                    <div>+27 84 849 8253</div>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-black/25 px-5 py-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-white/45">
                    Markets
                  </div>
                  <div className="mt-2 text-base font-semibold text-white">
                    South Africa • UK • Germany • Australia • Canada • USA
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-cyan-300/15 via-blue-500/10 to-transparent p-6 sm:p-8">
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                Intake Completion
              </div>

              <div className="mt-4 text-5xl font-black text-white">
                {completion}%
              </div>

              <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-cyan-300 transition-all"
                  style={{ width: `${completion}%` }}
                />
              </div>

              <p className="mt-4 text-sm leading-7 text-white/70">
                The more clearly you explain the current friction, the easier it is
                for BluGrid to identify the right system direction.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="border-b border-white/10 pb-6">
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                System Audit Intake
              </div>
              <h2 className="mt-2 text-2xl font-black uppercase text-white">
                Tell BluGrid What Needs To Be Fixed.
              </h2>
            </div>

            <form className="mt-6 grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white/75">
                    Full name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/25 focus:border-cyan-300/35"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-white/75">
                    Company
                  </label>
                  <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/25 focus:border-cyan-300/35"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white/75">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/25 focus:border-cyan-300/35"
                    placeholder="you@company.com"
                    type="email"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-white/75">
                    Business type
                  </label>
                  <input
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/25 focus:border-cyan-300/35"
                    placeholder="e.g. ISP, franchise, agency, travel company"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white/75">
                    Team size
                  </label>
                  <input
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/25 focus:border-cyan-300/35"
                    placeholder="e.g. 5, 20, 80"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-white/75">
                    Primary focus area
                  </label>
                  <select
                    value={focus}
                    onChange={(e) => setFocus(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-cyan-300/35"
                  >
                    <option value="">Select focus area</option>
                    {focusAreas.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-white/75">
                  Current tools / systems
                </label>
                <input
                  value={tools}
                  onChange={(e) => setTools(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/25 focus:border-cyan-300/35"
                  placeholder="e.g. spreadsheets, HubSpot, WhatsApp, Pipedrive, Notion, custom tools"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-white/75">
                  Biggest operational problem
                </label>
                <textarea
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  rows={5}
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/25 focus:border-cyan-300/35"
                  placeholder="Describe what is currently breaking down, slowing the team, or creating pressure inside the business."
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-white/75">
                  Desired outcome
                </label>
                <textarea
                  value={outcome}
                  onChange={(e) => setOutcome(e.target.value)}
                  rows={4}
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/25 focus:border-cyan-300/35"
                  placeholder="Describe what you want the business to look like once the system is properly structured."
                />
              </div>

              {status.type !== "idle" && (
                <div
                  className={`rounded-2xl border px-4 py-4 text-sm ${
                    status.type === "success"
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                      : "border-red-400/30 bg-red-400/10 text-red-200"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-cyan-300 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit Intake"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}