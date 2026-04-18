import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-lg font-black uppercase tracking-[0.16em] text-white">
            BluGrid Systems
          </div>
          <p className="mt-2 max-w-xl text-sm leading-7 text-white/55">
            Structured software, automation, and business systems engineered
            for companies that want stronger control, cleaner execution, and
            scalable operations.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-white/65">
          <Link href="/" className="transition hover:text-cyan-300">
            Home
          </Link>
          <Link href="/services" className="transition hover:text-cyan-300">
            Services
          </Link>
          <Link href="/portfolio" className="transition hover:text-cyan-300">
            Portfolio
          </Link>   
          <Link href="/proof" className="transition hover:text-cyan-300">
            Proof
          </Link>
          <Link href="/assistant" className="transition hover:text-cyan-300">
            AI Assistant
          </Link>
          <Link href="/tools" className="transition hover:text-cyan-300">
            Tools
          </Link>
          <Link href="/about" className="transition hover:text-cyan-300">
            About
          </Link>
          <Link href="/contact" className="transition hover:text-cyan-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}