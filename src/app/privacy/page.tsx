import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell, H2, P, UL, Callout } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "SurgiMD — Privacy Policy",
  description: "How SurgiMD collects, stores, protects, and deletes data.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="September 10, 2026">
      <P>
        SurgiMD is a clinical photography app for healthcare professionals.
        This policy explains what data the app handles, how it is protected,
        and the choices you have. It is written to be read, not skimmed — it
        is short on purpose.
      </P>

      <H2>Who this policy covers</H2>
      <P>
        SurgiMD is used by clinicians. Two kinds of data are involved:
        <strong> account data</strong> about you, the professional (name,
        email, clinic), and <strong>patient data</strong> that you create in
        the app (photos, notes, tags, consent records). For patient data, your
        clinic is the data controller and SurgiMD acts as a processor on your
        instructions — see our{" "}
        <Link className="text-teal underline" href="/compliance/">
          Security &amp; Compliance
        </Link>{" "}
        page for how this maps to GDPR, HIPAA, LGPD, and UAE health data law.
      </P>

      <H2>What we collect</H2>
      <UL
        items={[
          <>
            <strong>Account data:</strong> name, email address, and clinic
            affiliation, used to authenticate you and scope access.
          </>,
          <>
            <strong>Patient records you create:</strong> photographs, capture
            geometry, visit metadata, tags, notes, and per-patient consent
            records. We process these solely to provide the service.
          </>,
          <>
            <strong>Subscription status:</strong> processed via Apple&apos;s
            App Store and our subscription provider; we never see your payment
            card details.
          </>,
          <>
            <strong>Diagnostics:</strong> crash and performance data,
            engineered to exclude patient-identifying information.
          </>,
        ]}
      />

      <H2>Where data lives and how it is protected</H2>
      <UL
        items={[
          "Photos and records are encrypted in transit and at rest, stored on secure Google Cloud infrastructure (currently hosted outside the UAE; a local-only on-device mode is available for clinics with residency mandates).",
          "Patient imagery never touches your device's camera roll and is inaccessible to other apps.",
          "Access requires unique user authentication with biometric (Face ID) session lock, and is scoped per clinic.",
          "Every view, export, and share is recorded in a tamper-evident audit log.",
        ]}
      />

      <H2>What we never do</H2>
      <UL
        items={[
          "We do not sell data — anyone's, ever.",
          "We do not use patient photographs for advertising, model training, or any purpose other than providing the service to you.",
          "We do not share data with third parties beyond the sub-processors listed below.",
        ]}
      />

      <H2>Sub-processors</H2>
      <P>
        SurgiMD relies on a small number of vendors to operate: Google Cloud
        Platform / Firebase (storage, database, hosting), Apple (app
        distribution, payments), and RevenueCat (subscription management).
        Each is bound by data-processing terms.
      </P>

      <H2>Retention, export, and deletion</H2>
      <UL
        items={[
          "While your subscription is active, your records are retained and synced.",
          "If you cancel, your records remain available for consultation for 6 months.",
          "At any time, you can request a full export of your account's photos and records; we will provide a secure download link.",
          "After you confirm a successful export — or after the 6-month window lapses — records are permanently deleted from the cloud, including backups within our deletion cycle.",
          "You may request immediate account and data deletion at any time.",
        ]}
      />

      <H2>Your rights</H2>
      <P>
        Depending on your jurisdiction (GDPR, LGPD, UAE law), you and your
        patients have rights of access, rectification, erasure, and
        portability. The app&apos;s export and deletion tooling exists to make
        honoring these requests fast. Patients should direct requests to their
        clinic (the controller); we support clinics in fulfilling them.
      </P>

      <H2>Breach notification</H2>
      <P>
        If a security incident affects your data, we will notify affected
        clinics without undue delay and within the timelines required by
        applicable law, with enough detail to meet your own notification
        obligations.
      </P>

      <H2>Changes and contact</H2>
      <P>
        We will post any changes to this policy here and note the date above.
        Material changes will be announced in the app. Questions, DPA/BAA
        requests, export or deletion requests: contact us at{" "}
        <strong>support@surgimd.app</strong>.
      </P>

      <Callout>
        This policy describes our practices in plain language. It is not legal
        advice. Regulations vary by jurisdiction — consult your compliance
        officer or counsel for your specific obligations.
      </Callout>
    </LegalShell>
  );
}
