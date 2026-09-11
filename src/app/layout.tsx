import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sarifiaar.github.io/surgiemd-landing"),
  title: "SurgiMD — Standardized Before & After Photos for Surgeons",
  description:
    "The clinical photography app for surgeons: silhouette capture guides, angle lock, ghost overlays, consent-gated sharing, and encrypted patient records. Designed to support HIPAA, GDPR, and DHA-aligned workflows. Free for up to 15 patients.",
  keywords: [
    "before and after photo app for surgeons",
    "clinical photography app",
    "medical photography app iPhone",
    "HIPAA compliant patient photos",
    "plastic surgery photo app",
    "standardized patient photography",
    "oculoplastic surgery photos",
    "patient photo consent app",
    "DHA patient photography Dubai",
  ],
  openGraph: {
    title: "SurgiMD — Patient photos, perfectly consistent",
    description:
      "Standardized before & after clinical photography for surgeons. Guided capture, encrypted records, consent-gated sharing.",
    url: "/",
    siteName: "SurgiMD",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SurgiMD — standardized clinical photography" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SurgiMD — Patient photos, perfectly consistent",
    description:
      "Standardized before & after clinical photography for surgeons.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
