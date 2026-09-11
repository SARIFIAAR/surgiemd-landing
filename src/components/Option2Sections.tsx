"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeUp,
  APP_STORE_URL,
  AppStoreBadge,
  Backdrop,
  EyelidMotif,
  Eyebrow,
  PhoneFrame,
  ScreenCapture,
  ScreenCompare,
  ScreenPatients,
} from "./Sections";

/* ------------------------------------ nav ------------------------------------ */

export function Nav2() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-line/60 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/option2/" className="font-display text-xl font-bold tracking-tight">
          Surgi<span className="text-teal">MD</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate lg:flex">
          <a className="nav-link hover:text-ink transition-colors" href="#capture">Capture</a>
          <a className="nav-link hover:text-ink transition-colors" href="#compare">Compare</a>
          <a className="nav-link hover:text-ink transition-colors" href="#records">Records</a>
          <a className="nav-link hover:text-ink transition-colors" href="#everything">Features</a>
          <a className="nav-link hover:text-ink transition-colors" href="#pricing">Pricing</a>
          <a className="nav-link hover:text-ink transition-colors" href="#faq">FAQ</a>
          <Link className="nav-link text-teal hover:text-teal-deep transition-colors" href="/">Option 1</Link>
        </nav>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener"
          className="rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-deep"
        >
          Download
        </a>
      </div>
    </header>
  );
}

/* ------------------------------------ hero ------------------------------------ */

export function Hero2() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      <Backdrop dots />
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow>For aesthetic &amp; oculoplastic surgeons</Eyebrow>
          <h1 className="font-display mt-5 text-4xl font-bold leading-[1.08] tracking-tight md:text-[3.4rem]">
            Standardized before &amp; after photography for{" "}
            <span className="gradient-text">face and neck surgery.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate">
            Capture reproducible clinical photographs, compare them over time,
            and keep every patient&apos;s images, measurements, and consent in
            one secure, encrypted place. Built for surgeons who need their
            before/after photos to actually line up — same angle, same framing,
            every visit.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <AppStoreBadge />
            <span className="text-sm font-semibold text-teal">
              Start free — up to 15 patients
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-64 md:w-72"
        >
          <div className="absolute -inset-10 -z-10 rounded-full bg-mint blur-3xl" />
          <PhoneFrame>
            <ScreenCapture />
          </PhoneFrame>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------ major feature rows ------------------------------ */

function Row({
  id,
  eyebrow,
  title,
  body,
  bullets,
  screen,
  flip = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  screen: React.ReactNode;
  flip?: boolean;
}) {
  return (
    <section id={id} className="relative overflow-hidden py-20">
      <EyelidMotif flip={flip} />
      <div
        className={`mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2 ${
          flip ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div {...fadeUp}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-slate">{body}</p>
          <ul className="mt-7 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[15px] text-ink">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-teal" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div {...fadeUp} className="relative mx-auto w-60 md:w-64">
          <div className="absolute -inset-8 -z-10 rounded-full bg-mist blur-2xl" />
          <PhoneFrame>{screen}</PhoneFrame>
        </motion.div>
      </div>
    </section>
  );
}

export function MajorFeatures() {
  return (
    <>
      <Row
        id="capture"
        eyebrow="Guided, standardized capture"
        title="Photographs that match, visit to visit"
        body="SurgiMD overlays a translucent 3D head guide for every pose in the series so the patient's angle, framing, and distance are the same at baseline, one week, and six months."
        bullets={[
          "Full face + neck pose series: frontal, both 45° obliques, both 90° profiles, upgaze, downgaze, gentle eye closure, brow elevation, close-ups, and neck views",
          "Adjustable guide transparency on every pose",
          "Two-axis levelling: yellow level line for roll, green badge for pitch — the same discipline as the native iPhone camera",
          "Composition grid (3×3 / 4×4) and a fixed 1:1 framing box with the feed blurred outside — you shoot exactly what will be saved",
        ]}
        screen={<ScreenCapture />}
      />
      <Row
        id="compare"
        eyebrow="Before & after comparison"
        title="Comparison that holds up in clinic"
        body="Put any two visits side by side. Pinch to zoom, drag a slider to blend before and after, and use smart face-detection zoom to frame the same region on both images."
        bullets={[
          "Side-by-side view with synchronized zoom",
          "Blend slider between before and after",
          "Smart face-detection zoom frames the same region on both images",
          "All edits — crop, rotation, framing — are non-destructive; the original file is never rewritten",
        ]}
        screen={<ScreenCompare />}
        flip
      />
      <Row
        id="records"
        eyebrow="Complete patient records"
        title="Everything about a case, in one place"
        body="Name, medical record number, date of birth and age, surgery date, biological sex, laterality, contact details, allergies, a bleeding-risk medication alert, and free-text notes."
        bullets={[
          "Sessions organised by clinical stage — Baseline/Pre-op, Intra-op, Post-op Day 3, 1 week, 2 weeks, 1/3/6 months, Follow-up — derived automatically from the surgery date",
          "Healing-risk band computed from recorded comorbidities and age",
          "Oculoplastic measurements per visit: MRD1, MRD2, palpebral fissure height, levator function, lagophthalmos, NRS pain score",
        ]}
        screen={<ScreenPatients />}
      />
    </>
  );
}

/* ------------------------------ everything grid ------------------------------ */

const GRID_FEATURES = [
  {
    emoji: "📷",
    title: "True native camera quality",
    body: "Full sensor resolution with Deep Fusion detail and high-quality JPEG encoding — the same fidelity as the stock iPhone camera, with torch/flash control and an optional also-save-to-Photos toggle.",
  },
  {
    emoji: "🎬",
    title: "Dynamic-function video",
    body: "Record short clips of blink, lid-lag, and lagophthalmos alongside the still series — stored in the same patient record.",
  },
  {
    emoji: "🖼️",
    title: "Collage builder & Portfolio",
    body: "Four tuned layouts, optional per-cell labels, saved straight to the patient's Before & After. The Portfolio auto-categorises by surgery type — no hashtags, no manual tagging.",
  },
  {
    emoji: "✍️",
    title: "Consent & audit trail",
    body: "Photography and treatment consent per patient; every action written to a tamper-evident, hash-chained audit log. Exports pass a consent gate; EXIF/GPS is stripped.",
  },
  {
    emoji: "☁️",
    title: "Secure cloud backup & device change",
    body: "Automatic full-library backup — records, photos, clips, before/afters, consents, measurements, audit trail — with one-tap restore on a new device and sync across your devices.",
  },
  {
    emoji: "🔐",
    title: "Privacy, security & compliance",
    body: "Encrypted on device and in the cloud, per-clinic data segregation, EXIF/GPS stripped. Aligned with GDPR, HIPAA, and Dubai Health Authority requirements.",
  },
  {
    emoji: "👥",
    title: "Teams & clinics",
    body: "Work solo or as a clinic. The account owner controls membership; colleagues share a patient library while other clinics stay completely separate.",
  },
  {
    emoji: "📱",
    title: "Platform & sign-in",
    body: "Native iOS app for iPhone. Sign in with Apple, Google, or a passwordless email code. Notifications on or off in Settings.",
  },
];

export function EverythingGrid() {
  return (
    <section id="everything" className="relative overflow-hidden border-y border-line bg-mist py-24">
      <Backdrop />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <Eyebrow>The full toolkit</Eyebrow>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight md:text-4xl">
            Every claim below maps to a shipped feature
          </h2>
          <p className="mt-4 text-slate">
            No vaporware. If it&apos;s on this page, it&apos;s in the app today.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GRID_FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: (i % 4) * 0.06 }}
              className="card-shadow rounded-2xl border border-line bg-paper p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-mint text-lg">
                <span aria-hidden>{f.emoji}</span>
              </div>
              <h3 className="font-display text-[15px] font-bold leading-snug">{f.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- pricing ---------------------------------- */

export function Pricing2() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-xl text-center">
          <Eyebrow>Simple, honest plans</Eyebrow>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight md:text-4xl">
            The value metric is patients — never storage
          </h2>
          <p className="mt-4 text-slate">
            Capture as many photos per patient as the case needs.
          </p>
        </motion.div>
        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          <motion.div {...fadeUp} className="card-shadow rounded-3xl border border-line bg-paper p-9">
            <h3 className="font-display text-xl font-bold">Free</h3>
            <p className="font-display mt-6 text-5xl font-bold">
              $0<span className="ml-1.5 text-base font-medium text-slate">forever</span>
            </p>
            <ul className="mt-7 space-y-3 text-[15px] text-ink">
              {["Up to 15 patients", "Full standardized capture", "Before & after comparison", "Encrypted on-device storage"].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-teal" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener"
              className="mt-9 block rounded-xl border-2 border-line py-3 text-center text-sm font-semibold transition-colors hover:border-teal hover:text-teal"
            >
              Start free
            </a>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="card-shadow relative rounded-3xl border-2 border-teal bg-paper p-9"
          >
            <span className="absolute -top-3.5 left-8 rounded-full bg-teal px-3 py-1 text-xs font-bold text-white">
              PRO
            </span>
            <h3 className="font-display text-xl font-bold">SurgiMD Pro</h3>
            <p className="font-display mt-6 text-2xl font-bold text-slate">
              Monthly subscription
            </p>
            <ul className="mt-7 space-y-3 text-[15px] text-ink">
              {["Unlimited patients", "Clinical toolkit (measurements)", "Cloud backup & sync", "Everything in Free"].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-teal" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener"
              className="shimmer-btn cta-gradient mt-9 block rounded-xl py-3 text-center text-sm font-semibold text-white"
              style={{ background: "var(--teal)" }}
            >
              Go Pro in the app
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
