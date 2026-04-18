import { ReactNode } from "react";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(104,225,253,0.16),transparent_22%),radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.10),transparent_18%)]" />
      <SiteHeader />
      <div className="relative">{children}</div>
      <SiteFooter />
    </main>
  );
}