import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell, H2, P, UL, Callout } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "SurgiMD — Terms of Use",
  description: "The terms that govern use of the SurgiMD app and services.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Use" updated="September 10, 2026">
      <P>
        These terms govern your use of the SurgiMD app and related services.
        By creating an account or using the app, you agree to them.
      </P>

      <H2>Who may use SurgiMD</H2>
      <P>
        SurgiMD is built for licensed healthcare professionals and their
        clinic staff. You must be at least 18, hold the professional
        credentials your use implies, and use the app only within a
        legitimate clinical relationship with the patients you photograph.
      </P>

      <H2>Your professional responsibility</H2>
      <P>
        SurgiMD provides technical safeguards; you remain responsible for
        your clinical and legal obligations (see{" "}
        <Link className="text-teal underline" href="/compliance/">
          Security &amp; Compliance
        </Link>{" "}
        for how this shared-responsibility model works). In particular, you
        are responsible for:
      </P>
      <UL
        items={[
          "Obtaining and documenting valid patient consent before capturing or sharing photographs (the app's consent capture exists to help, not to replace your duty).",
          "Complying with the health-data and privacy laws of your jurisdiction, and your clinic's own policies.",
          "Using exports appropriately — once data leaves the app through an export you authorize, its handling is your responsibility.",
          "Keeping your account credentials and devices secure.",
        ]}
      />

      <H2>License and acceptable use</H2>
      <P>
        We grant you a personal, non-transferable, revocable license to use
        the app. You agree not to: reverse engineer or resell the service;
        upload content you have no right to; use the app for anything other
        than clinical documentation; or attempt to access other clinics&apos;
        data.
      </P>

      <H2>Your content</H2>
      <P>
        Patient records you create belong to you and your clinic. You grant
        us only the limited rights needed to store, process, and display that
        content back to you — nothing more. Our{" "}
        <Link className="text-teal underline" href="/privacy/">
          Privacy Policy
        </Link>{" "}
        governs how it is protected, retained, exported, and deleted.
      </P>

      <H2>Subscriptions and billing</H2>
      <UL
        items={[
          "SurgiMD offers a free tier and a paid Pro subscription, billed through your Apple App Store account.",
          "Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period, via your App Store settings.",
          "Prices may change; we will give notice before any change affects a renewal.",
          "If you cancel, the retention, export, and deletion terms of the Privacy Policy apply.",
        ]}
      />

      <H2>Not a medical device</H2>
      <P>
        SurgiMD is a documentation tool. It is not a medical device, does not
        provide diagnosis or treatment recommendations, and its measurements
        and overlays are aids to consistent photography — not clinical
        instruments. Clinical judgment is yours alone.
      </P>

      <H2>Availability and disclaimers</H2>
      <P>
        We work to keep the service reliable, but it is provided &ldquo;as
        is&rdquo; without warranties of uninterrupted availability. To the
        maximum extent permitted by law, our liability is limited to the
        amounts you paid for the service in the 12 months preceding a claim.
        Nothing in these terms limits liability that cannot lawfully be
        limited.
      </P>

      <H2>Termination</H2>
      <P>
        You may stop using SurgiMD at any time; the Privacy Policy&apos;s
        export and deletion commitments apply. We may suspend or terminate
        accounts that violate these terms or put patient data at risk, with
        notice where practicable.
      </P>

      <H2>Governing law</H2>
      <P>
        These terms are governed by the laws of the United Arab Emirates, and
        disputes are subject to the courts of Dubai, unless mandatory law in
        your jurisdiction provides otherwise.
      </P>

      <H2>Changes and contact</H2>
      <P>
        We will post updated terms here and note the date above; material
        changes will be announced in the app. Questions:{" "}
        <strong>support@surgimd.app</strong>.
      </P>

      <Callout>
        These terms are a plain-language starting point and have not yet been
        reviewed by counsel. Before charging clinics, have a lawyer review
        them together with the Privacy Policy.
      </Callout>
    </LegalShell>
  );
}
