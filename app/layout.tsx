import "./globals.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import SiteFooter from "@/components/layout/site-footer";
import CookieConsent from "@/components/layout/cookie-consent";

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
        <div className="site-grid" />
        <div className="site-noise" />
        <div className="relative min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <CookieConsent />
        </div>
      </body>
      <GoogleAnalytics gaId="G-KLVXH4B4R5" />
    </html>
  );
}