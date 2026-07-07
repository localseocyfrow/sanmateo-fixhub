import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmergencyBar } from "@/components/layout/EmergencyBar";
import { MobileCallBar } from "@/components/layout/MobileCallBar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "SanMateo FixHub provides specialist gas and electric stove, range, and cooktop repair in San Mateo, CA and across the Peninsula. Clear diagnosis and fast availability checks.",
  applicationName: site.name,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: absoluteUrl("/"),
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-ink antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:left-4 focus:top-4 focus:rounded-lg focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <EmergencyBar />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCallBar />
        {site.ringba.enabled && site.ringba.scriptUrl ? (
          // Ringba dynamic-number-insertion tag. Loads only when configured.
          <script src={site.ringba.scriptUrl} async />
        ) : null}
      </body>
    </html>
  );
}
