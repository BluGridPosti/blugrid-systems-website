import Image from "next/image";
import Link from "next/link";
import SiteShell from "@/components/layout/site-shell";

const platformLinks = [
  {
    href: "/services",
    eyebrow: "Services",
    title: "Structured Software & System Design",
    description:
      "Detailed breakdown of BluGrid’s software, automation, AI, and operational system services.",
  },
  {
    href: "/proof",
    eyebrow: "Proof",
    title: "Capability In Motion",
    description:
      "Visual proof of how BluGrid systems behave through workflows, event logic, and control layers.",
  },
  {
    href: "/assistant",
    eyebrow: "AI Assistant",
    title: "BluGrid Systems Advisor",
    description:
      "An interactive assistant that helps visitors identify friction and understand the right system direction.",
  },
  {
    href: "/tools",
    eyebrow: "Tools",
    title: "Interactive Business Utilities",
    description:
      "Practical tools designed to assess operational strength, system readiness, and growth friction.",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300 sm:text-xs sm:tracking-[0.24em]">
            Custom Software • Automation • Business Systems
          </div>

          <h1 className="text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl xl:text-7xl">
            We Engineer Business Systems That Scale Without Chaos.
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 md:text-lg">
            BluGrid builds structured operating systems, automation layers,
            and custom software that remove bottlenecks, increase visibility,
            and give business owners full control over execution.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
            >
              Get A Free Audit
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm uppercase text-white transition hover:border-cyan-300/40 hover:text-cyan-300"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-2xl font-black text-cyan-300">70%+</div>
              <div className="mt-2 text-sm font-semibold text-white">
                Manual work reduced
              </div>
              <p className="mt-2 text-xs leading-6 text-white/60">
                Through workflow design and automation.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-2xl font-black text-cyan-300">Real-time</div>
              <div className="mt-2 text-sm font-semibold text-white">
                Visibility gained
              </div>
              <p className="mt-2 text-xs leading-6 text-white/60">
                Dashboards, tracking, and operational control.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-2xl font-black text-cyan-300">End-to-end</div>
              <div className="mt-2 text-sm font-semibold text-white">
                Systems approach
              </div>
              <p className="mt-2 text-xs leading-6 text-white/60">
                From lead capture to execution and reporting.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 sm:-inset-10 bg-cyan-400/10 blur-3xl" />

          <div className="rounded-[2rem] border border-cyan-300/20 bg-white/[0.02] p-3 sm:p-4 shadow-[0_0_90px_rgba(34,211,238,0.12)]">
            <Image
              src="/images/logo-blue.png"
              alt="BluGrid Systems"
              width={900}
              height={600}
              className="w-full rounded-xl border border-white/10"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:grid-cols-2 lg:p-10">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
              Engineered Excellence
            </div>

            <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-4xl">
              Software Engineered For Businesses That Intend To Scale Properly.
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              BluGrid Systems is built around structured execution. We design
              systems that create control, clarity, and long-term scalability.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5 text-sm leading-7 text-white/80">
              Precision-built systems aligned to real business operations.
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 p-5 text-sm leading-7 text-white/80">
              Full operational visibility across teams, workflows, and data.
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 p-5 text-sm leading-7 text-white/80">
              Automation that improves execution instead of adding complexity.
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 p-5 text-sm leading-7 text-white/80">
              Infrastructure designed for reliability, speed, and growth.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="max-w-4xl">
          <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
            BluGrid Platform
          </div>

          <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-4xl md:text-5xl">
            Explore The Full BluGrid Environment.
          </h2>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            BluGrid is not just a service site. It is a structured digital platform
            built to demonstrate capability, guide decision-making, and help businesses
            understand what proper systems can do.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {platformLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.045]"
            >
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                {item.eyebrow}
              </div>

              <h3 className="mt-4 text-2xl font-black uppercase leading-tight text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/65">
                {item.description}
              </p>

              <div className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-white/70 transition group-hover:text-cyan-300">
                Open Section
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-cyan-300/15 via-blue-500/10 to-transparent p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
                Start With The Right Entry Point
              </div>

              <h2 className="mt-4 text-2xl font-black uppercase leading-tight text-white sm:text-3xl md:text-4xl">
                Whether You Need Proof, Tools, Or Strategy, BluGrid Has A Clear Path Forward.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                Explore the platform, test the tools, use the advisor, or book
                a direct system audit to identify what your business actually needs.
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