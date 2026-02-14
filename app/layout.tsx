import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Validy — Verified B2B Data for Every Indian Industry",
  description:
    "Get validated emails, phone numbers, and enriched company data across every Indian industry. Built for SMBs and small teams. Affordable, accurate, and ready to use.",
  keywords: [
    "B2B data",
    "India",
    "email verification",
    "data enrichment",
    "SMB",
    "lead generation",
    "contact database",
  ],
  openGraph: {
    title: "Validy — Verified B2B Data for Every Indian Industry",
    description:
      "Validated contacts, enriched company data, across every industry. Built for Indian SMBs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${dmSans.variable} bg-background text-foreground antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
