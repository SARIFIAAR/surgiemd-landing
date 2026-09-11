import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import { FAQS_OPTION2 } from "@/lib/faqs-option2";
import { FAQ, TrustStrip, FinalCTA, Footer } from "@/components/Sections";
import {
  Nav2,
  Hero2,
  MajorFeatures,
  EverythingGrid,
  Pricing2,
} from "@/components/Option2Sections";

export const metadata: Metadata = {
  title: "SurgiMD — Medical Before & After Photos App for Face and Neck Surgery",
  description:
    "Standardized clinical photography for aesthetic and oculoplastic surgeons: guided 3D pose capture, native camera quality, before/after comparison, collages, oculoplastic measurements, consent, audit trail, and encrypted cloud backup. Free for up to 15 patients.",
  alternates: { canonical: "/option2/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS_OPTION2.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Option2() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SmoothScroll />
      <Nav2 />
      <main>
        <Hero2 />
        <TrustStrip />
        <MajorFeatures />
        <EverythingGrid />
        <Pricing2 />
        <FAQ faqs={FAQS_OPTION2} />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
