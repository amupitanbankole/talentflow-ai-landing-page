import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TalentFlow AI — Hire smarter. Build stronger teams.",
  description: "AI-powered recruitment for modern teams. Source, screen, match and hire exceptional talent faster with TalentFlow AI.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
