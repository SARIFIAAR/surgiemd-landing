"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ---------------------------------- motion ---------------------------------- */

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

/* ------------------------------- shared pieces ------------------------------- */

function AppStoreBadge({ large = false }: { large?: boolean }) {
  return (
    <a
      href="#"
      className={`inline-flex items-center gap-3 rounded-xl bg-ink text-white transition-all hover:bg-teal-deep hover:-translate-y-0.5 ${
        large ? "px-7 py-4" : "px-5 py-3"
      }`}
    >
      <svg viewBox="0 0 24 24" className={large ? "h-8 w-8" : "h-6 w-6"} fill="currentColor" aria-hidden>
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.79-.16 2.19-.91 3.7-.78 1.55.13 2.72.74 3.48 1.85-3.2 1.98-2.44 6.28.49 7.55-.6 1.52-1.37 3.03-2.75 3.55ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z" />
      </svg>
      <span className="text-left leading-tight">
        <span className={`block ${large ? "text-[11px]" : "text-[10px]"} opacity-75`}>
          Download on the
        </span>
        <span className={`block font-semibold ${large ? "text-lg" : "text-sm"}`}>App Store</span>
      </span>
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-mint px-3.5 py-1.5 text-xs font-semibold tracking-wide text-teal-deep">
      {children}
    </span>
  );
}

/* -------------------------------- phone frame -------------------------------- */
/* Mock screens are placeholders — swap the inner <Screen.../> for an
   <img src="/screens/<name>.png"> once real app screenshots are captured. */

function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`phone-shadow relative rounded-[3rem] bg-[#1a222c] p-[10px] ${className}`}>
      <div className="relative overflow-hidden rounded-[2.4rem] bg-[#0b1119]" style={{ aspectRatio: "9 / 19.5" }}>
        {/* dynamic island */}
        <div className="absolute left-1/2 top-2.5 z-20 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black" />
        {children}
      </div>
    </div>
  );
}

/* schematic eyelid line used across the mock screens */
function EyelidGuide({ stroke = "#2dd4bf", ghost = false }: { stroke?: string; ghost?: boolean }) {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" fill="none">
      <path
        d="M30 62 C 60 30, 140 30, 170 62"
        stroke={stroke}
        strokeWidth={ghost ? 1.5 : 2}
        strokeLinecap="round"
        opacity={ghost ? 0.45 : 1}
      />
      <path
        d="M30 62 C 60 84, 140 84, 170 62"
        stroke={stroke}
        strokeWidth={ghost ? 1.5 : 2}
        strokeLinecap="round"
        opacity={ghost ? 0.45 : 1}
      />
      <circle cx="100" cy="60" r="14" stroke={stroke} strokeWidth={ghost ? 1.5 : 2} opacity={ghost ? 0.45 : 1} />
      <path
        d="M28 38 C 60 18, 140 18, 174 40"
        stroke={stroke}
        strokeWidth={ghost ? 1 : 1.5}
        strokeLinecap="round"
        opacity={ghost ? 0.3 : 0.6}
      />
    </svg>
  );
}

function ScreenCapture() {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#0b1119] pt-12 text-white">
      <div className="flex items-center justify-between px-5 pb-3">
        <span className="text-[11px] font-medium text-white/60">Patient #0042 · Visit 4</span>
        <span className="rounded-full bg-teal/20 px-2 py-0.5 text-[10px] font-semibold text-[#2dd4bf]">
          GUIDED
        </span>
      </div>
      {/* viewfinder */}
      <div className="relative mx-3 flex-1 overflow-hidden rounded-2xl bg-gradient-to-b from-[#1d2836] to-[#131b26]">
        <div className="absolute inset-0 p-6">
          <EyelidGuide />
        </div>
        {/* corner brackets */}
        {["top-3 left-3 border-t-2 border-l-2", "top-3 right-3 border-t-2 border-r-2", "bottom-3 left-3 border-b-2 border-l-2", "bottom-3 right-3 border-b-2 border-r-2"].map((c) => (
          <div key={c} className={`absolute h-5 w-5 rounded-sm border-[#2dd4bf] ${c}`} />
        ))}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {["YAW 0.1°", "PITCH 0.0°", "40 CM"].map((t) => (
            <span key={t} className="rounded-md bg-black/50 px-2 py-1 font-mono text-[9px] text-[#2dd4bf]">
              {t}
            </span>
          ))}
        </div>
      </div>
      {/* shutter */}
      <div className="flex items-center justify-center gap-8 py-4">
        <div className="h-8 w-8 rounded-lg bg-white/10" />
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-white">
          <div className="h-10 w-10 rounded-full bg-[#2dd4bf]" />
        </div>
        <div className="h-8 w-8 rounded-lg bg-white/10" />
      </div>
    </div>
  );
}

function ScreenCompare() {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#0b1119] pt-12 text-white">
      <div className="px-5 pb-3">
        <span className="text-sm font-semibold">Blepharoplasty · R. Haddad</span>
        <span className="mt-0.5 block text-[11px] text-white/50">Pre-op vs. week 12</span>
      </div>
      <div className="mx-3 grid flex-1 grid-cols-2 gap-2">
        {(["BEFORE", "AFTER"] as const).map((label) => (
          <div
            key={label}
            className="relative overflow-hidden rounded-xl bg-gradient-to-b from-[#233043] to-[#141c29]"
          >
            <div className="absolute inset-0 p-4 opacity-80">
              <EyelidGuide stroke={label === "BEFORE" ? "#8a98ad" : "#2dd4bf"} />
            </div>
            <span className="absolute left-2.5 top-2.5 rounded bg-black/50 px-1.5 py-0.5 font-mono text-[9px] text-white/80">
              {label}
            </span>
          </div>
        ))}
      </div>
      <div className="mx-3 my-3 rounded-xl bg-white/5 p-3">
        <div className="flex justify-between text-[11px]">
          <span className="text-white/60">Margin reflex distance</span>
          <span className="font-mono font-semibold text-[#2dd4bf]">+2.4 mm</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-3/4 rounded-full bg-[#2dd4bf]" />
        </div>
      </div>
      <div className="flex justify-center gap-2 pb-5">
        {["Side by side", "Slider", "Grid"].map((t, i) => (
          <span
            key={t}
            className={`rounded-full px-3 py-1.5 text-[10px] font-medium ${
              i === 0 ? "bg-[#2dd4bf] text-[#0b1119]" : "bg-white/10 text-white/60"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function ScreenPatients() {
  const rows = [
    { name: "R. Haddad", detail: "Blepharoplasty · 4 visits", tag: "Post-op" },
    { name: "M. Chen", detail: "Ptosis repair · 2 visits", tag: "Pre-op" },
    { name: "A. Okafor", detail: "Brow lift · 6 visits", tag: "Healed" },
    { name: "S. Rossi", detail: "Blepharoplasty · 3 visits", tag: "Post-op" },
    { name: "L. Nguyen", detail: "Ectropion · 5 visits", tag: "Review" },
  ];
  return (
    <div className="absolute inset-0 flex flex-col bg-[#0b1119] pt-12 text-white">
      <div className="px-5 pb-3">
        <span className="text-lg font-semibold">Patients</span>
        <div className="mt-2.5 flex items-center gap-2 rounded-xl bg-white/8 px-3 py-2 text-[11px] text-white/40">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" strokeLinecap="round" />
          </svg>
          Search patients or tags
        </div>
      </div>
      <div className="flex-1 space-y-1.5 px-3">
        {rows.map((r, i) => (
          <div key={r.name} className="flex items-center gap-3 rounded-xl bg-white/5 p-2.5">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-bold"
              style={{ background: ["#134e4a", "#1e3a5f", "#3f2d54", "#134e4a", "#52351c"][i], color: "#e0f2f1" }}
            >
              {r.name.slice(0, 1)}
            </div>
            <div className="flex-1 leading-tight">
              <span className="block text-[12px] font-semibold">{r.name}</span>
              <span className="block text-[10px] text-white/45">{r.detail}</span>
            </div>
            <span className="rounded-full bg-teal/15 px-2 py-0.5 text-[9px] font-semibold text-[#2dd4bf]">
              {r.tag}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-around border-t border-white/10 py-3 text-[9px] text-white/40">
        {["Patients", "Capture", "Portfolio", "Settings"].map((t, i) => (
          <span key={t} className={i === 0 ? "font-semibold text-[#2dd4bf]" : ""}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------ nav ------------------------------------ */

export function Nav() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-line/60 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-bold tracking-tight">
          Surgi<span className="text-teal">MD</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate md:flex">
          <a className="nav-link hover:text-ink transition-colors" href="#capture">Capture</a>
          <a className="nav-link hover:text-ink transition-colors" href="#compare">Compare</a>
          <a className="nav-link hover:text-ink transition-colors" href="#security">Security</a>
          <a className="nav-link hover:text-ink transition-colors" href="#pricing">Pricing</a>
        </nav>
        <a
          href="#cta"
          className="rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-deep"
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
    <section className="relative overflow-hidden pt-36 pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow>For oculoplastic &amp; aesthetic surgeons</Eyebrow>
          <h1 className="font-display mt-5 text-5xl font-bold leading-[1.06] tracking-tight md:text-6xl">
            Patient photos,{" "}
            <span className="text-teal">perfectly consistent.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate">
            SurgiMD guides every capture with silhouette overlays and angle
            lock — so before &amp; after photos are comparable, secure, and
            ready to show.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <AppStoreBadge />
            <a href="#capture" className="text-sm font-semibold text-teal hover:text-teal-deep">
              See how it works →
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs font-medium text-slate">
            <span>✓ Free for your first patients</span>
            <span>✓ No camera-roll storage</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-64 md:w-72"
        >
          {/* soft halo behind phone */}
          <div className="absolute -inset-10 -z-10 rounded-full bg-mint blur-3xl" />
          <PhoneFrame>
            <ScreenCapture />
          </PhoneFrame>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------- trust strip -------------------------------- */

export function TrustStrip() {
  const items = ["Designed to support HIPAA", "GDPR & LGPD ready", "DHA / UAE aware", "End-to-end encrypted"];
  return (
    <section className="border-y border-line bg-mist py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6">
        {items.map((t) => (
          <span key={t} className="flex items-center gap-2 text-sm font-medium text-slate">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-teal" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- feature rows ------------------------------- */

function FeatureRow({
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
    <section id={id} className="py-24">
      <div
        className={`mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2 ${
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
                {b}
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

export function Features() {
  return (
    <>
      <FeatureRow
        id="capture"
        eyebrow="Guided capture"
        title="Frame it right, every single time"
        body="Thin-line silhouette guides position the anatomy exactly where it was last visit, while live angle and distance readouts keep the shot inside tolerance."
        bullets={[
          "Procedure-specific silhouette overlays",
          "Live yaw, pitch and distance lock",
          "Ghost overlay of the previous visit",
        ]}
        screen={<ScreenCapture />}
      />
      <FeatureRow
        id="compare"
        eyebrow="Outcome comparison"
        title="Before & after that holds up"
        body="Because every photo shares identical geometry, comparisons are honest — same angle, same distance, same framing. Export clean collages for consults and case logs."
        bullets={[
          "Side-by-side, slider and grid layouts",
          "Visit-to-visit measurement tracking",
          "Export-ready, watermark-free collages",
        ]}
        screen={<ScreenCompare />}
        flip
      />
      <FeatureRow
        id="records"
        eyebrow="Patient records"
        title="Organized by patient, not camera roll"
        body="Every capture files itself into the right patient, visit, and procedure — tagged, searchable, and synced to your clinic across devices."
        bullets={[
          "Tags and searchable case portfolio",
          "Clinic-scoped cloud sync",
          "Nothing ever touches your camera roll",
        ]}
        screen={<ScreenPatients />}
      />
    </>
  );
}

/* --------------------------------- security --------------------------------- */

const SECURITY_CARDS = [
  {
    title: "Encrypted everywhere",
    body: "Patient imagery is encrypted on device and in transit. Photos live in the app's secure store — never in your gallery.",
    icon: (
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3zM9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Biometric access",
    body: "Face ID gates every session. Access is scoped per clinic, so patient data stays exactly where it belongs.",
    icon: (
      <path d="M7 3H5a2 2 0 0 0-2 2v2m14-4h2a2 2 0 0 1 2 2v2M7 21H5a2 2 0 0 1-2-2v-2m14 4h2a2 2 0 0 0 2-2v-2M9 9h.01M15 9h.01M9 15c.8.7 1.9 1 3 1s2.2-.3 3-1" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Designed for compliance",
    body: "Built to support GDPR, HIPAA, LGPD and DHA-aligned workflows, with a tamper-evident audit log of every capture, export, and share.",
    icon: (
      <path d="M9 12h6m-6 4h6M9 8h1m4 0h1M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export function Security() {
  return (
    <section id="security" className="border-y border-line bg-mist py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-xl text-center">
          <Eyebrow>Security &amp; compliance</Eyebrow>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight md:text-4xl">
            Clinical photos deserve clinical custody
          </h2>
          <p className="mt-4 text-slate">
            Compliance is a partnership: SurgiMD provides the technical
            safeguards, your clinic keeps its policies.{" "}
            <Link href="/compliance/" className="font-semibold text-teal hover:text-teal-deep">
              Read how our safeguards map to GDPR, HIPAA, LGPD and DHA →
            </Link>
          </p>
        </motion.div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SECURITY_CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="card-shadow rounded-2xl border border-line bg-paper p-8"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-mint text-teal">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {c.icon}
                </svg>
              </div>
              <h3 className="font-display text-lg font-bold">{c.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-slate">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- pricing ---------------------------------- */

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-xl text-center">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="font-display mt-5 text-3xl font-bold tracking-tight md:text-4xl">
            Start free. Upgrade when your caseload does.
          </h2>
        </motion.div>
        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          <motion.div {...fadeUp} className="card-shadow rounded-3xl border border-line bg-paper p-9">
            <h3 className="font-display text-xl font-bold">Free</h3>
            <p className="mt-1.5 text-sm text-slate">Evaluate the full workflow</p>
            <p className="font-display mt-7 text-5xl font-bold">
              $0<span className="ml-1.5 text-base font-medium text-slate">forever</span>
            </p>
            <ul className="mt-7 space-y-3 text-[15px] text-ink">
              {["Up to 10 patients", "Guided capture with overlays", "Before & after comparison", "Encrypted storage"].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-teal" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className="mt-9 block rounded-xl border-2 border-line py-3 text-center text-sm font-semibold transition-colors hover:border-teal hover:text-teal"
            >
              Get started free
            </a>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="card-shadow relative rounded-3xl border-2 border-teal bg-paper p-9"
          >
            <span className="absolute -top-3.5 left-8 rounded-full bg-teal px-3 py-1 text-xs font-bold text-white">
              MOST POPULAR
            </span>
            <h3 className="font-display text-xl font-bold">Pro</h3>
            <p className="mt-1.5 text-sm text-slate">For the full surgical caseload</p>
            <p className="font-display mt-7 text-5xl font-bold">
              $19<span className="ml-1.5 text-base font-medium text-slate">/ month</span>
            </p>
            <ul className="mt-7 space-y-3 text-[15px] text-ink">
              {["Unlimited patients", "Clinic-wide cloud sync", "Ghost-overlay alignment", "Export-ready collages", "Priority support"].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-teal" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className="mt-9 block rounded-xl bg-teal py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-teal-deep"
            >
              Start Pro trial
            </a>
          </motion.div>
        </div>
        <motion.p {...fadeUp} className="mt-8 text-center text-xs text-slate">
          Prices shown are placeholders pending App Store Connect approval.
        </motion.p>
      </div>
    </section>
  );
}

/* ---------------------------------- final CTA ---------------------------------- */

export function FinalCTA() {
  return (
    <section id="cta" className="border-t border-line bg-mist py-24">
      <motion.div {...fadeUp} className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
          Your outcomes deserve evidence,
          <br />
          not estimates.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg text-slate">
          Join the surgeons documenting results with instrument-grade consistency.
        </p>
        <div className="mt-9 flex justify-center">
          <AppStoreBadge large />
        </div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate md:flex-row">
        <span className="font-display font-bold text-ink">
          Surgi<span className="text-teal">MD</span>
        </span>
        <span>© 2026 SurgiMD. Not a medical device. For documentation use.</span>
        <div className="flex gap-6">
          <Link className="nav-link hover:text-ink" href="/privacy/">Privacy</Link>
          <Link className="nav-link hover:text-ink" href="/terms/">Terms</Link>
          <Link className="nav-link hover:text-ink" href="/compliance/">Compliance</Link>
        </div>
      </div>
    </footer>
  );
}
