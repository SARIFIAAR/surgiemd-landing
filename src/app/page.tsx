import SmoothScroll from "@/components/SmoothScroll";
import SceneLoader from "@/components/SceneLoader";
import {
  Nav,
  Hero,
  CaptureFlow,
  Explode,
  Showcase,
  Security,
  Pricing,
  FinalCTA,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <SceneLoader />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <CaptureFlow />
        <Explode />
        <Showcase />
        <Security />
        <Pricing />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
