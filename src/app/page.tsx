import SmoothScroll from "@/components/SmoothScroll";
import { FAQS } from "@/lib/faqs";
import {
  Nav,
  Hero,
  TrustStrip,
  Features,
  Security,
  Pricing,
  FAQ,
  FinalCTA,
  Footer,
} from "@/components/Sections";

const SITE = "https://sarifiaar.github.io/surgiemd-landing";

// Structured data for search + AI engines (Google, ChatGPT, Claude, Perplexity)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MobileApplication",
      name: "SurgiMD",
      operatingSystem: "iOS",
      applicationCategory: "MedicalApplication",
      description:
        "Standardized before-and-after clinical photography for surgeons: silhouette capture guides, angle lock, ghost overlays, consent-gated sharing, and encrypted per-clinic patient records.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free tier for up to 15 patients; Pro subscription for unlimited patients.",
      },
      publisher: {
        "@type": "Organization",
        name: "Infinion Apps FZ-LLC",
        address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
      },
      audience: { "@type": "Audience", audienceType: "Surgeons and aesthetic clinicians" },
      url: SITE,
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <Security />
        <Pricing />
        <FAQ faqs={FAQS} />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
