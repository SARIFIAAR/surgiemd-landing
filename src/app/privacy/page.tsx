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
        SurgiMD (&ldquo;the App&rdquo;) is operated by{" "}
        <strong>Infinion Apps FZ-LLC</strong> (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;), a company registered in Dubai, United Arab
        Emirates. Contact: <strong>privacy@infinionapps.com</strong>.
      </P>
      <P>
        This policy explains what data the App and this website handle, and
        how. SurgiMD is a professional tool for licensed clinicians; it is
        designed around a simple principle — patient data belongs to the
        treating clinic, and our job is to protect it.
      </P>

      <H2>1. Two kinds of data, two roles</H2>
      <P>
        <strong>Your account data</strong> (clinician&apos;s email, sign-in
        identity, subscription status): for this, we are the data controller.
      </P>
      <P>
        <strong>Patient data</strong> (photographs, names, medical record
        numbers, clinical notes, measurements, consents) is entered and
        controlled by <strong>your clinic</strong>. The clinic is the data
        controller / covered entity; we act only as a{" "}
        <strong>processor / service provider / business associate</strong> on
        the clinic&apos;s instructions. We never use patient data for our own
        purposes.
      </P>

      <H2>2. What we collect</H2>
      <UL
        items={[
          <>
            <strong>Account:</strong> email address and authentication
            identity (Sign in with Apple, Google, or email/password via
            Firebase Authentication).
          </>,
          <>
            <strong>Patient records you create:</strong> photos and clinical
            details you enter.
          </>,
          <>
            <strong>Subscription status:</strong> an anonymous app-user
            identifier and purchase receipts, processed by Apple and
            RevenueCat. No patient data is ever shared with them.
          </>,
          <>
            <strong>What we do NOT collect:</strong> no advertising
            identifiers, no ad SDKs, no behavioural analytics on patient
            data, no location data — every photo is stripped of EXIF, GPS and
            device metadata at the moment it is saved.
          </>,
        ]}
      />

      <H2>3. Where data lives</H2>
      <UL
        items={[
          <>
            <strong>On your device</strong>, in the App&apos;s protected,
            sandboxed storage (never the camera roll unless you explicitly
            enable &ldquo;Also save to Photos&rdquo;).
          </>,
          <>
            <strong>In our cloud</strong> (Google Cloud / Firebase, currently
            hosted in the United States), encrypted in transit and at rest,
            isolated per clinic and protected by server-side security rules.
            Google acts as our sub-processor under the Cloud Data Processing
            Addendum; HIPAA Business Associate terms are incorporated into
            our Google Cloud agreement.
          </>,
        ]}
      />

      <H2>4. How patient data is protected</H2>
      <P>
        Face ID / passcode app lock · per-clinic access control with
        per-person permissions · versioned, per-patient consent capture ·
        consent-gated export, sharing, printing and saving ·
        de-identification tools (eye bar / face blur) · a tamper-evident,
        hash-chained audit log of every significant action · metadata
        stripping on every saved photo. See{" "}
        <Link className="text-teal underline" href="/compliance/">
          Security &amp; Compliance
        </Link>{" "}
        for how these map to GDPR, HIPAA, LGPD and UAE health data law.
      </P>

      <H2>5. Sharing</H2>
      <P>We do not sell or rent any data. Data leaves our systems only:</P>
      <UL
        items={[
          <>
            when <strong>you</strong> export, share, print or save it
            (consent-checked and audit-logged);
          </>,
          "to our sub-processors strictly to run the service (Google Cloud/Firebase for storage and authentication; Apple and RevenueCat for subscriptions);",
          "if the law compels us.",
        ]}
      />

      <H2>6. Retention &amp; deletion</H2>
      <P>
        Patient records remain until the clinic deletes them; deleting a
        patient removes the record and its images from the device and our
        cloud. Deleting your account removes your sign-in identity; clinic
        patient data is retained or deleted per the clinic&apos;s
        instruction. Residual copies in encrypted backups clear on backup
        rotation (30 days).
      </P>

      <H2>7. Your rights</H2>
      <P>
        Depending on your jurisdiction (GDPR, LGPD, UAE data protection
        law), you may have rights of access, correction, deletion,
        portability and objection. For clinician-account data, contact us
        directly. For patient data, contact your treating clinic (the
        controller) — we support clinics in fulfilling such requests.
        EU/UK/Brazil-specific processor terms (DPA, SCCs) are available to
        clinics on request.
      </P>

      <H2>8. Who may use SurgiMD</H2>
      <P>
        The App is for licensed healthcare professionals aged 18+. It is not
        directed at children; patient records concerning minors are the
        clinic&apos;s responsibility and require guardian consent per local
        law.
      </P>

      <H2>9. Website</H2>
      <P>Our website is informational. It sets no tracking cookies.</P>

      <H2>10. Changes &amp; contact</H2>
      <P>
        We will post changes here with a new effective date; material changes
        are announced in the App. Questions or requests:{" "}
        <strong>privacy@infinionapps.com</strong> · Infinion Apps FZ-LLC,
        Dubai, United Arab Emirates.
      </P>

      <Callout>
        This policy is a working draft pending review by counsel. It is not
        legal advice.
      </Callout>
    </LegalShell>
  );
}
