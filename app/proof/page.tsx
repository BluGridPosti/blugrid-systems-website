import SiteShell from "@/components/layout/site-shell";
import Link from "next/link";

const eventFeed = [
  {
    time: "09:12",
    title: "New lead captured",
    detail: "Inbound website enquiry entered the system and was tagged automatically.",
    status: "Captured",
  },
  {
    time: "09:13",
    title: "Qualification logic triggered",
    detail: "Lead source, service interest, and urgency level processed successfully.",
    status: "Qualified",
  },
  {
    time: "09:14",
    title: "WhatsApp follow-up sent",
    detail: "Automated message sent with next-step guidance and response tracking.",
    status: "Automated",
  },
  {
    time: "09:16",
    title: "Sales pipeline updated",
    detail: "Lead moved into active opportunity stage and assigned internally.",
    status: "Assigned",
  },
  {
    time: "09:19",
    title: "Owner dashboard refreshed",
    detail: "Leadership visibility updated with latest lead activity and response timing.",
    status: "Visible",
  },
];

const transformations = [
  {
    label: "Before",
    points: [
      "Leads handled manually across multiple channels",
      "Slow follow-up and inconsistent response time",
      "No single operational view across the business",
      "Leadership forced to rely on fragmented reporting",
    ],
  },
  {
    label: "After",
    points: [
      "Lead capture, routing, and follow-up structured automatically",
      "Clear pipeline movement and internal accountability",
      "Centralized visibility across workflows and activity",
      "Decision-making supported by live operational data",
    ],
  },
];

const commandLayers = [
  {
    title: "Input Layer",
    items: [
      "Website forms",
      "WhatsApp conversations",
      "Client requests",
      "Internal actions",
    ],
  },
  {
    title: "Logic Layer",
    items: [
      "Qualification rules",
      "Routing logic",
      "Automation triggers",
      "Permissions and controls",
    ],
  },
  {
    title: "Execution Layer",
    items: [
      "Task assignment",
      "Follow-up actions",
      "Escalations",
      "Pipeline movement",
    ],
  },
  {
    title: "Visibility Layer",
    items: [
      "Dashboards",
      "Reporting",
      "KPI tracking",
      "Leadership control views",
    ],
  },
];

export default function ProofPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-5xl">
          <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
            Proof
          </div>

          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
            Capability Should Be Seen In Motion, Not Just Described.
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 md:text-lg">
            BluGrid builds systems around logic, visibility, speed, and control.
            This page shows how structured digital infrastructure behaves when it
            is designed to support real business execution.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
            >
              Book A System Audit
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm uppercase text-white transition hover:border-cyan-300/40 hover:text-cyan-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
            <div className="text-3xl font-black text-cyan-300">Live Logic</div>
            <p className="mt-2 text-sm leading-7 text-white/65">
              Automation built around real process conditions and actions.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
            <div className="text-3xl font-black text-cyan-300">End-to-End</div>
            <p className="mt-2 text-sm leading-7 text-white/65">
              From inbound activity to execution and leadership visibility.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
            <div className="text-3xl font-black text-cyan-300">Centralized</div>
            <p className="mt-2 text-sm leading-7 text-white/65">
              Operational control designed around one structured environment.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
            <div className="text-3xl font-black text-cyan-300">Visible</div>
            <p className="mt-2 text-sm leading-7 text-white/65">
              Leadership reporting and execution status made clear in real time.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-10 max-w-3xl">
          <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
            System In Motion
          </div>

          <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-4xl">
            A Structured View Of How A BluGrid System Behaves.
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            This is the difference between static software and operational
            infrastructure. Every action is tied to logic, movement, and visible
            control.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                  BluGrid Operating View
                </div>
                <h3 className="mt-2 text-2xl font-black uppercase text-white">
                  Pipeline, Activity, And Control
                </h3>
              </div>

              <div className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
                Active System
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-white/45">
                  New
                </div>
                <div className="mt-3 text-3xl font-black text-white">18</div>
                <div className="mt-4 space-y-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75">
                    Website enquiry
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75">
                    Pricing request
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75">
                    Discovery form
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-white/45">
                  Qualified
                </div>
                <div className="mt-3 text-3xl font-black text-white">14</div>
                <div className="mt-4 space-y-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75">
                    Automation project
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75">
                    Internal system redesign
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75">
                    AI assistant request
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-white/45">
                  Closing
                </div>
                <div className="mt-3 text-3xl font-black text-white">6</div>
                <div className="mt-4 space-y-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75">
                    Proposal issued
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75">
                    Audit complete
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75">
                    Build scope approved
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-300/10 to-transparent p-5">
                <div className="text-xs uppercase tracking-[0.24em] text-white/50">
                  Lead Response Speed
                </div>
                <div className="mt-3 text-4xl font-black text-white">&lt; 2 min</div>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Structured automation keeps inbound opportunities moving
                  before momentum is lost.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-blue-500/10 to-transparent p-5">
                <div className="text-xs uppercase tracking-[0.24em] text-white/50">
                  Visibility Status
                </div>
                <div className="mt-3 text-4xl font-black text-white">
                  Real-Time
                </div>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Leadership can see activity, movement, and pressure points
                  without waiting for manual updates.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
              Activity Feed
            </div>

            <h3 className="mt-3 text-2xl font-black uppercase text-white">
              Event Flow
            </h3>

            <div className="mt-6 space-y-4">
              {eventFeed.map((event) => (
                <div
                  key={`${event.time}-${event.title}`}
                  className="rounded-[1.5rem] border border-white/10 bg-black/25 p-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-bold text-cyan-300">
                      {event.time}
                    </div>
                    <div className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/65">
                      {event.status}
                    </div>
                  </div>

                  <div className="mt-3 text-base font-bold text-white">
                    {event.title}
                  </div>

                  <p className="mt-2 text-sm leading-7 text-white/65">
                    {event.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-10 max-w-3xl">
          <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
            Operational Transformation
          </div>

          <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-4xl">
            What Changes When Systems Are Engineered Properly.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {transformations.map((group) => (
            <div
              key={group.label}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                {group.label}
              </div>

              <div className="mt-4 space-y-4">
                {group.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.5rem] border border-white/10 bg-black/25 p-4 text-sm leading-7 text-white/75"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-10 max-w-3xl">
          <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
            BluGrid Command Layer
          </div>

          <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-4xl">
            The System Is Not One Screen. It Is A Structured Chain Of Control.
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            BluGrid systems are designed in layers, so input, logic, execution,
            and visibility work together instead of existing in disconnected
            tools and fragmented workflows.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-4">
          {commandLayers.map((layer) => (
            <div
              key={layer.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                {layer.title}
              </div>

              <div className="mt-5 space-y-3">
                {layer.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-cyan-300/15 via-blue-500/10 to-transparent p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
                Want This Level Of Control In Your Business?
              </div>

              <h2 className="mt-4 text-2xl font-black uppercase leading-tight text-white sm:text-3xl md:text-4xl">
                Let’s Map The System Your Operation Actually Needs.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                BluGrid helps businesses move from fragmented execution to
                structured digital control with custom systems, automation, and
                operational software built around reality.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-8 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
            >
              Book Your Audit
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}