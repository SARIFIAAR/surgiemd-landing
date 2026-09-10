import Link from "next/link";

export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="fixed top-0 z-40 w-full border-b border-line/60 bg-paper/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-display text-xl font-bold tracking-tight">
            Surgi<span className="text-teal">MD</span>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-line px-5 py-2 text-sm font-semibold text-slate transition-colors hover:border-teal hover:text-teal"
          >
            ← Back to site
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="font-display text-4xl font-bold tracking-tight">{title}</h1>
        {updated && <p className="mt-3 text-sm text-slate">Last updated: {updated}</p>}
        <div className="mt-8">{children}</div>
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-slate">
        © 2026 SurgiMD ·{" "}
        <Link className="hover:text-ink" href="/privacy/">Privacy Policy</Link> ·{" "}
        <Link className="hover:text-ink" href="/terms/">Terms of Use</Link> ·{" "}
        <Link className="hover:text-ink" href="/compliance/">Compliance</Link>
      </footer>
    </>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display mt-12 mb-1 text-2xl font-bold tracking-tight">{children}</h2>;
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 leading-relaxed text-slate">{children}</p>;
}

export function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2.5 pl-6 leading-relaxed text-slate">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 rounded-2xl border border-line bg-mist p-6 text-[15px] leading-relaxed text-slate">
      {children}
    </div>
  );
}
