import SiteShell from "@/components/layout/site-shell";
import Link from "next/link";

const services = [
  {
    eyebrow: "01",
    title: "Custom Business Systems",
    description:
      "We design software around the way your business actually runs, replacing fragmented tools, spreadsheets, and operational guesswork with one structured system.",
    outcomes: [
      "Centralized control across teams and workflows",
      "Cleaner day-to-day execution",
      "Less reliance on manual admin",
      "Systems built around your actual operation",
    ],
    deliverables: [
      "Custom CRM platforms",
      "Booking and scheduling systems",
      "Internal dashboards",
      "Inventory and reporting layers",
    ],
  },
  {
    eyebrow: "02",
    title: "Automation Engines",
    description:
      "Automation is used to remove delays, tighten follow-up, improve consistency, and reduce the amount of human effort required to keep the business moving.",
    outcomes: [
      "Faster response time",
      "Improved lead handling",
      "Reduced repetitive admin",
      "Stronger execution consistency",
    ],
    deliverables: [
      "Lead routing logic",
      "Email and WhatsApp automation",
      "Task assignment flows",
      "Alerts, triggers, and escalations",
    ],
  },
  {
    eyebrow: "03",
    title: "AI Assistants",
    description:
      "We build AI assistants that can support customer journeys, internal teams, lead qualification, and business guidance while staying aligned with your operation.",
    outcomes: [
      "Better support coverage",
      "Smarter triage and qualification",
      "More value from your website",
      "Assistant experiences tied to real workflows",
    ],
    deliverables: [
      "Website assistants",
      "Internal AI tools",
      "Support assistants",
      "Lead qualification assistants",
    ],
  },
  {
    eyebrow: "04",
    title: "Operating System Design",
    description:
      "For businesses dealing with operational complexity, we redesign the way the company runs and translate that into a structured digital operating environment.",
    outcomes: [
      "Clearer process architecture",
      "Improved accountability",
      "Better leadership visibility",
      "Infrastructure built for scale",
    ],
    deliverables: [
      "Workflow mapping",
      "System architecture planning",
      "Permissions and control logic",
      "Cross-team process design",
    ],
  },
  {
    eyebrow: "05",
    title: "Reporting & Visibility Systems",
    description:
      "Good decisions require clear visibility. We build reporting layers that help leadership understand what is happening and where action is needed.",
    outcomes: [
      "Real-time performance visibility",
      "Stronger decision-making",
      "Better operational oversight",
      "Reduced blind spots inside the business",
    ],
    deliverables: [
      "KPI dashboards",
      "Pipeline monitoring",
      "Revenue and activity tracking",
      "Executive control views",
    ],
  },
  {
    eyebrow: "06",
    title: "Platforms, Tools & Digital Utilities",
    description:
      "Not every useful digital product is internal. We also build interactive tools, calculators, client portals, and digital utilities that create value and prove capability.",
    outcomes: [
      "Higher engagement",
      "Better lead qualification",
      "Stronger proof of capability",
      "Useful digital experiences tied to business goals",
    ],
    deliverables: [
      "Audit tools",
      "ROI calculators",
      "Client-facing portals",
      "Interactive utilities",
    ],
  },
];

const principles = [
  "Every system is designed around business outcomes, not abstract technical preferences.",
  "Visibility, control, and speed are treated as core requirements, not optional extras.",
  "Automation is only used where it improves execution and reduces friction.",
  "BluGrid builds for long-term operational strength, not short-term patchwork.",
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-5xl">
          <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
            Services
          </div>

          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
            Software, Automation, And System Design Built Around Real Business Performance.
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 md:text-lg">
            BluGrid provides structured digital infrastructure for businesses that
            need stronger execution, clearer visibility, and systems that can hold
            up under real operational pressure.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
            >
              Book A System Audit
            </Link>

            <Link
              href="/proof"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm uppercase text-white transition hover:border-cyan-300/40 hover:text-cyan-300"
            >
              View Capability Proof
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((principle) => (
            <div
              key={principle}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-white/80"
            >
              {principle}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="space-y-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                    {service.eyebrow}
                  </div>

                  <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                    {service.title}
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                    {service.description}
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-[1.75rem] border border-white/10 bg-black/25 p-5">
                    <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                      Outcomes
                    </div>

                    <ul className="mt-4 space-y-3 text-sm text-white/80">
                      {service.outcomes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-black/25 p-5">
                    <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                      Typical Deliverables
                    </div>

                    <ul className="mt-4 space-y-3 text-sm text-white/80">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-cyan-300/15 via-blue-500/10 to-transparent p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
                Need The Right System Direction?
              </div>

              <h2 className="mt-4 text-2xl font-black uppercase leading-tight text-white sm:text-3xl md:text-4xl">
                We’ll Help Identify What Needs To Be Built, Fixed, Or Replaced.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                Whether you need a custom platform, better automation, a reporting
                layer, or a full operating system redesign, BluGrid can map the
                right direction with you.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-8 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
            >
              Start The Conversation
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}