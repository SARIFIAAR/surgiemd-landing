"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/* ---------------------------------- shared ---------------------------------- */

const fadeUp = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function AppStoreButton({ large = false }: { large?: boolean }) {
  return (
    <a
      href="#"
      className={`shimmer-btn cta-gradient inline-flex items-center gap-3 rounded-full font-medium text-noir transition-transform hover:scale-[1.03] active:scale-[0.98] ${
        large ? "px-8 py-4 text-lg" : "px-6 py-3 text-sm"
      }`}
    >
      <svg viewBox="0 0 24 24" className={large ? "h-6 w-6" : "h-5 w-5"} fill="currentColor" aria-hidden>
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.79-.16 2.19-.91 3.7-.78 1.55.13 2.72.74 3.48 1.85-3.2 1.98-2.44 6.28.49 7.55-.6 1.52-1.37 3.03-2.75 3.55ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z" />
      </svg>
      Download on the App Store
    </a>
  );
}

function MonoTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-cyan">
      {children}
    </span>
  );
}

/* ------------------------------------ nav ------------------------------------ */

export function Nav() {
  return (
    <header className="fixed top-0 z-40 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="font-display text-lg font-semibold tracking-tight">
          Surgie<span className="text-cyan">MD</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-steel md:flex">
          <a className="nav-link hover:text-paper transition-colors" href="#capture">Capture</a>
          <a className="nav-link hover:text-paper transition-colors" href="#showcase">Outcomes</a>
          <a className="nav-link hover:text-paper transition-colors" href="#security">Security</a>
          <a className="nav-link hover:text-paper transition-colors" href="#pricing">Pricing</a>
          <Link className="nav-link text-cyan/80 hover:text-cyan transition-colors" href="/orbit/">Concept B</Link>
        </nav>
        <a
          href="#cta"
          className="rounded-full border border-cyan/40 px-5 py-2 text-sm text-cyan transition-colors hover:bg-cyan/10"
        >
          Download
        </a>
      </div>
    </header>
  );
}

/* ------------------------------------ hero ------------------------------------ */

export function Hero() {
  return (
    <section className="relative flex h-svh flex-col items-center justify-end pb-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 px-6"
      >
        <MonoTag>Standardized surgical photography</MonoTag>
        <h1 className="font-display mx-auto mt-4 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Every angle. Every visit.{" "}
          <span className="bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent">
            Identical.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-steel md:text-lg">
          SurgieMD turns before &amp; after photography into a measurement
          instrument — framing guides, angle lock, and secure patient records,
          built for oculoplastic surgeons.
        </p>
        <div className="mt-9 flex items-center justify-center gap-5">
          <AppStoreButton />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="mt-16 flex flex-col items-center gap-4"
      >
        <div className="focus-ring h-3 w-3 rounded-full bg-cyan/80" />
        <span className="font-mono text-[10px] tracking-[0.3em] text-steel">SCROLL</span>
      </motion.div>
    </section>
  );
}

/* ----------------------------- act II: capture flow ----------------------------- */

const CAPTURE_STEPS = [
  {
    tag: "01 · Frame",
    title: "Thin-line guides frame the anatomy",
    body: "A silhouette overlay positions the orbit, brow, and lid margin exactly where they were last visit — no guesswork, no cropped landmarks.",
  },
  {
    tag: "02 · Align",
    title: "Ghost overlay locks the angle",
    body: "The previous capture appears as a ghost. Live yaw, pitch, and distance readouts converge to zero as you match it — then the frame locks.",
  },
  {
    tag: "03 · Capture",
    title: "One tap, perfectly comparable",
    body: "The shutter fires only inside tolerance. Geometry is stored with the image, so every photo in the series is measurably identical.",
  },
];

export function CaptureFlow() {
  return (
    <section id="capture" className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 flex h-svh items-center">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
          <div aria-hidden />
          <div className="flex flex-col justify-center gap-16">
            {CAPTURE_STEPS.map((s) => (
              <motion.div key={s.tag} {...fadeUp} className="max-w-md">
                <MonoTag>{s.tag}</MonoTag>
                <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-steel">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- act III: explode ----------------------------- */

export function Explode() {
  return (
    <section id="explode" className="relative" style={{ height: "200vh" }}>
      <div className="sticky top-0 flex h-svh items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div {...fadeUp} className="max-w-md">
            <MonoTag>The standardization system</MonoTag>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Four layers.
              <br />
              Zero variance.
            </h2>
            <p className="mt-5 text-steel">
              Every capture is a stack: the raw image, the silhouette guide it
              was framed against, the geometry it was captured at, and the
              patient record it files into. That stack is why visit 14 is
              comparable to visit 1.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- act IV: before / after --------------------------- */

function SchematicEye({ droop }: { droop: number }) {
  // schematic eyelid illustration; droop shifts the upper lid down (pre-op ptosis)
  const lidY = 90 + droop;
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full">
      <defs>
        <radialGradient id={`skin-${droop}`} cx="50%" cy="45%" r="75%">
          <stop offset="0%" stopColor="#22314e" />
          <stop offset="100%" stopColor="#0d1422" />
        </radialGradient>
      </defs>
      <rect width="400" height="260" fill={`url(#skin-${droop})`} />
      {/* brow */}
      <path
        d={`M 80 ${52 + droop * 0.4} C 150 ${30 + droop * 0.4}, 250 ${30 + droop * 0.4}, 330 ${58 + droop * 0.4}`}
        stroke="#8a98ad" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.65"
      />
      {/* upper lid */}
      <path
        d={`M 90 130 C 150 ${lidY - 38}, 250 ${lidY - 38}, 310 130`}
        stroke="#f4f7fb" strokeWidth="3.5" fill="none" strokeLinecap="round"
      />
      {/* lower lid */}
      <path
        d="M 90 130 C 150 168, 250 168, 310 130"
        stroke="#f4f7fb" strokeWidth="3" fill="none" strokeLinecap="round"
      />
      {/* iris, partially covered by lid */}
      <clipPath id={`eye-open-${droop}`}>
        <path d={`M 90 130 C 150 ${lidY - 38}, 250 ${lidY - 38}, 310 130 C 250 168, 150 168, 90 130 Z`} />
      </clipPath>
      <g clipPath={`url(#eye-open-${droop})`}>
        <circle cx="200" cy="128" r="34" fill="#38e1d4" opacity="0.85" />
        <circle cx="200" cy="128" r="14" fill="#060b14" />
      </g>
      {/* crease line */}
      <path
        d={`M 110 ${lidY - 26} C 160 ${lidY - 52}, 240 ${lidY - 52}, 290 ${lidY - 26}`}
        stroke="#8a98ad" strokeWidth="2" fill="none" opacity="0.5" strokeLinecap="round"
      />
    </svg>
  );
}

export function Showcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(0.5);
  const [flash, setFlash] = useState(false);

  const onDrag = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(0.96, Math.max(0.04, (clientX - r.left) / r.width)));
  }, []);

  return (
    <section id="showcase" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mb-14 max-w-xl">
          <MonoTag>Outcome comparison</MonoTag>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Results your patients can see.
          </h2>
          <p className="mt-5 text-steel">
            Because every capture shares identical geometry, comparison is
            honest — same angle, same distance, same light. Drag the beam.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <div
            ref={trackRef}
            className="relative aspect-[16/9] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl border border-steel/15 bg-panel"
            onPointerDown={(e) => {
              (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
              onDrag(e.clientX);
            }}
            onPointerMove={(e) => e.buttons === 1 && onDrag(e.clientX)}
            onPointerUp={() => {
              setFlash(true);
              setTimeout(() => setFlash(false), 450);
            }}
          >
            {/* after (base) */}
            <div className="absolute inset-0">
              <SchematicEye droop={0} />
              <span className="absolute right-5 top-5 font-mono text-[11px] tracking-[0.22em] text-cyan">
                AFTER · WEEK 12
              </span>
            </div>
            {/* before (clipped) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${(1 - pos) * 100}% 0 0)` }}
            >
              <SchematicEye droop={26} />
              <span className="absolute left-5 top-5 font-mono text-[11px] tracking-[0.22em] text-steel">
                BEFORE · PRE-OP
              </span>
            </div>
            {/* light-beam divider */}
            <div
              className="pointer-events-none absolute inset-y-0 z-10"
              style={{ left: `calc(${pos * 100}% - 1px)` }}
            >
              <div
                className={`h-full w-0.5 bg-cyan transition-shadow ${
                  flash
                    ? "shadow-[0_0_60px_14px_rgba(56,225,212,0.65)]"
                    : "shadow-[0_0_24px_4px_rgba(56,225,212,0.45)]"
                }`}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan bg-noir/80 text-cyan backdrop-blur">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 7l-4 5 4 5M16 7l4 5-4 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-[0.22em] text-steel">
              MARGIN REFLEX DISTANCE +2.4 MM
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------- act V: security ------------------------------- */

const SECURITY_ITEMS = [
  {
    title: "Encrypted at rest and in transit",
    body: "Patient imagery is encrypted on device and in the cloud. Nothing is ever stored in your camera roll.",
  },
  {
    title: "Biometric access control",
    body: "Face ID gates every session. Practice staff get scoped, revocable access — patients stay siloed per surgeon.",
  },
  {
    title: "Complete audit trail",
    body: "Every view, export, and share is logged with who, when, and what — evidence-grade custody for clinical records.",
  },
];

export function Security() {
  return (
    <section id="security" className="grid-texture relative border-y border-steel/10 bg-[#04070d] py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="max-w-xl">
          <MonoTag>Built for patient trust</MonoTag>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Clinical records deserve
            <br />
            clinical custody.
          </h2>
        </motion.div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {SECURITY_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.12 }}
              className="rounded-2xl border border-steel/15 bg-panel/60 p-8 backdrop-blur"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 text-gold">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" strokeLinejoin="round" />
                  <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">{item.body}</p>
            </motion.div>
          ))}
        </div>
        <motion.p {...fadeUp} className="mt-10 font-mono text-[11px] tracking-[0.2em] text-steel/70">
          DESIGNED FOR HIPAA-ALIGNED WORKFLOWS · ON-DEVICE PROCESSING · ZERO CAMERA-ROLL LEAKAGE
        </motion.p>
      </div>
    </section>
  );
}

/* -------------------------------- act VI: pricing -------------------------------- */

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="max-w-xl">
          <MonoTag>Pricing</MonoTag>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Start free. Scale with your practice.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <motion.div
            {...fadeUp}
            className="rounded-3xl border border-steel/15 bg-panel/60 p-10 transition-transform hover:-translate-y-2"
          >
            <h3 className="font-display text-xl font-semibold">Free</h3>
            <p className="mt-2 text-sm text-steel">For evaluating the workflow</p>
            <p className="font-display mt-8 text-5xl font-semibold">
              $0
              <span className="ml-2 text-base font-normal text-steel">forever</span>
            </p>
            <ul className="mt-8 space-y-3 text-sm text-steel">
              <li>· Up to 10 patients</li>
              <li>· Standardized capture guides</li>
              <li>· Before / after comparison</li>
              <li>· Encrypted local storage</li>
            </ul>
            <a
              href="#cta"
              className="mt-10 inline-block rounded-full border border-steel/40 px-7 py-3 text-sm transition-colors hover:border-paper hover:text-paper"
            >
              Get started
            </a>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.12 }}
            className="border-beam rounded-3xl border border-transparent bg-panel p-10 transition-transform hover:-translate-y-2"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold">Pro</h3>
              <span className="rounded-full border border-gold/50 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-gold">
                FOR PRACTICES
              </span>
            </div>
            <p className="mt-2 text-sm text-steel">For the full surgical caseload</p>
            <p className="font-display mt-8 text-5xl font-semibold">
              $19
              <span className="ml-2 text-base font-normal text-steel">/ month</span>
            </p>
            <ul className="mt-8 space-y-3 text-sm text-steel">
              <li>· Unlimited patients</li>
              <li>· Cloud sync &amp; multi-device</li>
              <li>· Ghost-overlay alignment</li>
              <li>· Export-ready comparisons</li>
              <li>· Priority support</li>
            </ul>
            <a
              href="#cta"
              className="shimmer-btn cta-gradient mt-10 inline-block rounded-full px-7 py-3 text-sm font-medium text-noir"
            >
              Start Pro trial
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- final CTA ---------------------------------- */

export function FinalCTA() {
  return (
    <section id="cta" className="relative flex min-h-svh flex-col items-center justify-center py-32 text-center">
      <motion.div {...fadeUp} className="relative z-10 px-6">
        <MonoTag>Available on iPhone</MonoTag>
        <h2 className="font-display mx-auto mt-5 max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
          Your outcomes deserve
          <br />
          evidence, not estimates.
        </h2>
        <div className="mt-10">
          <AppStoreButton large />
        </div>
        <p className="mt-8 font-mono text-[11px] tracking-[0.22em] text-steel/70">
          TRUSTED BY OCULOPLASTIC SURGEONS · BUILT WITH CLINICIANS
        </p>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-steel/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-steel md:flex-row">
        <span className="font-display font-semibold text-paper">
          Surgie<span className="text-cyan">MD</span>
        </span>
        <span>© 2026 SurgieMD. Not a medical device. For documentation use.</span>
        <div className="flex gap-6">
          <a className="nav-link" href="#">Privacy</a>
          <a className="nav-link" href="#">Terms</a>
          <a className="nav-link" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
