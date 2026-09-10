import SmoothScroll from "@/components/SmoothScroll";
import {
  Nav,
  Hero,
  TrustStrip,
  Features,
  Security,
  Pricing,
  FinalCTA,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <Security />
        <Pricing />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
