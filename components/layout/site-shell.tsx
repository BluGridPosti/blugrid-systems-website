import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/proof", label: "Proof" },
  { href: "/assistant", label: "AI Assistant" },
  { href: "/tools", label: "Tools" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0f1c]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-black.png"
              alt="BluGrid Systems"
              width={140}
              height={40}
              priority
              className="h-auto w-[120px] md:w-[140px]"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/70 transition hover:text-cyan-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-black transition hover:scale-[1.02]"
          >
            Book Audit
          </Link>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}