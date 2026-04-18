import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/layout/site-shell";
import { getProjectBySlug, portfolioProjects } from "@/lib/portfolio-data";

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <SiteShell>
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
        <Link
          href="/portfolio"
          className="mb-6 inline-block text-sm text-cyan-300 transition hover:underline"
        >
          ← Back to Portfolio
        </Link>

        <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
          Portfolio Project
        </div>

        <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
          {project.title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-3">
          <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-300">
            {project.category}
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/70">
            {project.status}
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/70">
            {project.clientType}
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-base leading-8 text-white/70">
          {project.summary}
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-4 sm:px-6 sm:py-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
              The Problem
            </div>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              {project.problem}
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
              The Solution
            </div>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              {project.solution}
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
              Core Features
            </div>
            <div className="mt-5 space-y-3">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-sm text-white/80"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
              Tech Stack
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.techStack.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
              Use Case
            </div>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              {project.useCase}
            </p>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-cyan-300/15 via-blue-500/10 to-transparent p-6 sm:p-8">
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
              Outcome
            </div>
            <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              {project.outcome}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
          >
            Start A Similar Project
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}