import "./globals.css";

export const metadata = {
  title: "BluGrid Systems",
  description: "Custom Software & Automation Systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}