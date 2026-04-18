import Link from "next/link";
import SiteShell from "@/components/layout/site-shell";

const principles = [
  {
    title: "Structured Execution",
    body: "BluGrid is built around the idea that strong businesses perform better when operations are engineered with clarity, logic, and control.",
  },
  {
    title: "Business-First Design",
    body: "We do not start with tools. We start with how the business actually runs, where friction exists, and what needs to improve.",
  },
  {
    title: "Operational Visibility",
    body: "Software should not hide the business. It should make movement, pressure points, and performance easier to see and manage.",
  },
  {
    title: "Systems That Hold Under Pressure",
    body: "Everything we build is intended to support scale, stronger execution, and more dependable operational performance over time.",
  },
];

const standards = [
  "Clear process architecture before build decisions are made",
  "Automation used only where it improves execution",
  "Visibility and reporting treated as core requirements",
  "Systems designed around real operational pressure",
  "Control, accountability, and speed built into the structure",
  "Digital infrastructure intended for long-term use, not short-term patchwork",
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-5xl">
          <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
            About BluGrid
          </div>

          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
            Built Around Structured Execution.
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 md:text-lg">
            BluGrid Systems exists to design software, automation, and operational
            infrastructure that help businesses run with more precision, visibility,
            and control.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
              Philosophy
            </div>

            <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-4xl">
              Good Software Should Make A Business Easier To Run, Not Harder To Manage.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
            <p>
              Too many businesses grow on top of fragmented tools, manual admin,
              inconsistent follow-up, and weak reporting. Over time, that creates
              pressure, blind spots, and operational drag.
            </p>

            <p>
              BluGrid approaches software differently. We see systems as business
              infrastructure — not just screens, features, or trendy tools.
            </p>

            <p>
              That means every build should support real execution: clearer workflows,
              stronger visibility, faster movement, better control, and infrastructure
              that can hold under pressure as the business grows.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="max-w-4xl">
          <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
            Core Principles
          </div>

          <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-4xl md:text-5xl">
            How BluGrid Thinks About Systems.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {principles.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7"
            >
              <h3 className="text-2xl font-black uppercase text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
              Standard
            </div>

            <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-4xl">
              What BluGrid Holds Itself To.
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              Every project should create stronger structure, better decision-making,
              and cleaner execution inside the business. That requires discipline in
              both design and implementation.
            </p>
          </div>

          <div className="grid gap-4">
            {standards.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/10 bg-black/25 px-5 py-4 text-sm leading-7 text-white/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10">
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
              The Goal
            </div>

            <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-4xl">
              Build Systems That Increase Control, Remove Friction, And Support Scale.
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              BluGrid is not focused on software for its own sake. The goal is to
              help businesses operate with more certainty, more speed, and fewer
              hidden weaknesses in the way work moves through the company.
            </p>

            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              That can mean custom platforms, automation layers, AI assistants,
              reporting environments, or full operational redesign — but the purpose
              remains the same: build digital infrastructure that makes the business
              stronger.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-cyan-300/15 via-blue-500/10 to-transparent p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
                Ready To Talk Systems?
              </div>

              <h2 className="mt-4 text-2xl font-black uppercase leading-tight text-white sm:text-3xl md:text-4xl">
                If The Business Needs Better Structure, BluGrid Can Help Map The Right Direction.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                Start with a direct conversation and we’ll identify where your
                current operation is carrying unnecessary friction, weak visibility,
                or structural inefficiency.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-8 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
            >
              Book A System Audit
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}