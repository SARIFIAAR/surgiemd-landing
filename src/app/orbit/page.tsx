import type { Metadata } from "next";
import Link from "next/link";
import OrbitLoader from "@/components/OrbitLoader";

export const metadata: Metadata = {
  title: "SurgieMD — The Orbit concept",
  description:
    "Concept B: the phone orbits the patient like a camera drone, capturing every standardized angle automatically.",
};

export default function OrbitPage() {
  return (
    <>
      <OrbitLoader />
      <header className="fixed top-0 z-40 w-full">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-display text-lg font-semibold tracking-tight">
            Surgie<span className="text-cyan">MD</span>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-steel/40 px-5 py-2 text-sm text-steel transition-colors hover:border-cyan hover:text-cyan"
          >
            ← Concept A
          </Link>
        </div>
      </header>
      <main className="pointer-events-none relative z-10 flex h-svh flex-col items-center justify-end pb-16 text-center">
        <div className="px-6">
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-cyan">
            Concept B · The Orbit
          </span>
          <h1 className="font-display mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Nine angles.
            <br />
            <span className="bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent">
              Zero effort.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-steel">
            Guided capture that circles the patient like a camera drone —
            every standardized angle, every visit, while they just smile.
          </p>
          <div className="pointer-events-auto mt-8">
            <a
              href="#"
              className="shimmer-btn cta-gradient inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium text-noir transition-transform hover:scale-[1.03]"
            >
              Download on the App Store
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
