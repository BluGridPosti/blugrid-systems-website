import "./globals.css";
import type { Metadata } from "next";
import SiteFooter from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "BluGrid Systems",
  description:
    "Custom software, automation systems, and AI infrastructure engineered for scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <div className="min-h-screen flex flex-col">

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <SiteFooter />

        </div>
      </body>
    </html>
  );
}