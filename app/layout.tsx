import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BluGrid Systems",
  description:
    "BluGrid Systems builds custom business systems, automation engines, AI assistants, dashboards, and operational infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-grid" />
        <div className="site-noise" />
        {children}
      </body>
    </html>
  );
}