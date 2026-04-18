"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SiteShell from "@/components/layout/site-shell";
import {
  portfolioCategories,
  portfolioProjects,
} from "@/lib/portfolio-data";

const featuredSlugs = [
  "isp-support-operations-console",
  "franchise-lead-routing-system",
  "lead-conversion-engine",
  "executive-reporting-command-layer",
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const featuredProjects = portfolioProjects.filter((project) =>
    featuredSlugs.includes(project.slug)
  );

  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      const q = query.trim().toLowerCase();

      const matchesQuery =
        q.length === 0 ||
        project.title.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.clientType.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-5xl">
          <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
            Portfolio
          </div>

          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
            Systems, Platforms, And Digital Infrastructure Across 17 Project
            Builds.
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 md:text-lg">
            Explore BluGrid projects across custom systems, automation engines,
            AI assistants, reporting environments, operating system design, and
            interactive business tools.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6">
        <div className="mb-10 max-w-4xl">
          <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
            Featured Projects
          </div>

          <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-4xl">
            Selected Showcase Builds
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-7 transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-[0.22em] text-cyan-300">
                    {project.category}
                  </div>

                  <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/65">
                    {project.summary}
                  </p>
                </div>

                <div className="shrink-0">
                  <div className="min-w-[180px] rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
                    {project.status}
                  </div>
                </div>
              </div>

              <div className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-white/70 transition group-hover:text-cyan-300">
                Open Featured Project
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">
              Browse All Projects
            </div>
            <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-4xl">
              Filter By Category Or Search By Project
            </h2>
          </div>

          <div className="w-full max-w-md">
            <label className="mb-2 block text-sm font-semibold text-white/75">
              Search portfolio
            </label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none placeholder:text-white/25 focus:border-cyan-300/35"
              placeholder="Search by title, category, or client type"
            />
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className={`rounded-full px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] transition ${
              activeCategory === "All"
                ? "border border-cyan-300 bg-cyan-300/10 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.08)]"
                : "border border-white/10 bg-white/[0.03] text-white/70 hover:border-cyan-300/30 hover:text-white"
            }`}
          >
            All
          </button>

          {portfolioCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] transition ${
                activeCategory === category
                  ? "border border-cyan-300 bg-cyan-300/10 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.08)]"
                  : "border border-white/10 bg-white/[0.03] text-white/70 hover:border-cyan-300/30 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mb-6 text-sm text-white/55">
          Showing{" "}
          <span className="font-semibold text-white">
            {filteredProjects.length}
          </span>{" "}
          project{filteredProjects.length === 1 ? "" : "s"}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.045]"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-[0.22em] text-cyan-300">
                    {project.category}
                  </div>

                  <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/65">
                    {project.summary}
                  </p>
                </div>

                <div className="shrink-0">
                  <div className="min-w-[180px] rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
                    {project.status}
                  </div>
                </div>
              </div>

              <div className="mt-6 text-sm text-white/55">
                <span className="font-semibold text-white/80">Client Type:</span>{" "}
                {project.clientType}
              </div>

              <div className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-white/70 transition group-hover:text-cyan-300">
                View Project Details
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center">
            <div className="text-xl font-black uppercase text-white">
              No Projects Found
            </div>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Try another category or adjust your search term.
            </p>
          </div>
        )}
      </section>
    </SiteShell>
  );
}