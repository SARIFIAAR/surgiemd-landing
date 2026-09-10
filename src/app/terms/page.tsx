import type { Metadata } from "next";
import { LegalShell, H2, P, UL, Callout } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "SurgiMD — Terms of Use",
  description: "The terms that govern use of the SurgiMD app and services.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Use" updated="September 10, 2026">
      <P>
        These terms are an agreement between you and{" "}
        <strong>Infinion Apps FZ-LLC</strong> (&ldquo;we&rdquo;). By creating
        an account or using SurgiMD you accept them.
      </P>

      <H2>1. What SurgiMD is — and is not</H2>
      <P>
        SurgiMD is a <strong>clinical photo-documentation aid</strong>:
        standardized capture, storage, comparison and reporting of clinical
        photographs.{" "}
        <strong>
          It does not provide medical advice, diagnosis or treatment
          recommendations.
        </strong>{" "}
        Measurements and gradings are documentation conveniences, not
        validated clinical instruments. All clinical decisions remain solely
        the responsibility of the treating clinician.
      </P>

      <H2>2. Eligibility &amp; accounts</H2>
      <P>
        You must be a licensed healthcare professional (or work under
        one&apos;s supervision), 18 or older, using SurgiMD for professional
        purposes. Keep your credentials and device secure; you are
        responsible for activity under your account. Practice owners control
        team membership and permissions and are responsible for their
        team&apos;s use.
      </P>

      <H2>3. Your data, your responsibility</H2>
      <P>
        The clinic owns its patient data. You grant us only the limited
        licence needed to host, process and back it up to provide the
        service. You are responsible for: obtaining and maintaining valid{" "}
        <strong>patient consent</strong> for photography and any sharing;
        complying with the healthcare, privacy and professional rules that
        apply to you (e.g. GDPR, HIPAA, LGPD, DHA/UAE rules); and the
        lawfulness of anything you export, share, print or save out of the
        App.
      </P>

      <H2>4. Acceptable use</H2>
      <P>
        Do not: use SurgiMD for unlawful purposes; upload content you have no
        right to process; attempt to access other clinics&apos; data;
        reverse-engineer or resell the service; or circumvent security or
        consent controls.
      </P>

      <H2>5. Subscriptions</H2>
      <P>
        The free tier is limited (15 patients). SurgiMD Pro is an
        auto-renewing subscription purchased through Apple&apos;s App Store;
        pricing is shown before purchase, billing and cancellation are
        managed in your Apple ID settings, and renewal may be cancelled at
        least 24 hours before the period ends. Fees are non-refundable except
        where required by law or Apple&apos;s policies. If a subscription
        lapses, your data remains accessible for export; feature access
        returns to the free tier.
      </P>

      <H2>6. Availability, backups, &ldquo;as is&rdquo;</H2>
      <P>
        We aim for high availability but do not guarantee uninterrupted
        service. Cloud backup is provided as a convenience; maintain your own
        device security and export copies of records your practice must
        retain. The service is provided{" "}
        <strong>&ldquo;as is&rdquo; and &ldquo;as available&rdquo;</strong>{" "}
        without warranties of any kind to the maximum extent permitted by
        law.
      </P>

      <H2>7. Liability</H2>
      <P>
        To the maximum extent permitted by law, our total liability arising
        out of the service is limited to the amounts you paid us in the
        twelve months before the claim, and we are not liable for indirect or
        consequential losses, or for clinical outcomes. Nothing limits
        liability that cannot be limited by law. You will indemnify us
        against claims arising from your breach of these terms, including
        processing patient data without valid consent.
      </P>

      <H2>8. Intellectual property</H2>
      <P>
        SurgiMD, its design and software remain our property. Feedback you
        send may be used without obligation. Third-party components are used
        under their licences, including the 3D pose-guide artwork derived
        from &ldquo;Human Head Base Mesh&rdquo; by ferrumiron6 (Sketchfab),
        licensed CC-BY-4.0.
      </P>

      <H2>9. Termination</H2>
      <P>
        You may stop using the service and delete your account at any time.
        We may suspend or terminate accounts that materially breach these
        terms; on termination we will make clinic data available for export
        for 30 days, then delete it, unless law requires otherwise.
      </P>

      <H2>10. Governing law &amp; changes</H2>
      <P>
        These terms are governed by the laws of the United Arab Emirates as
        applied in the Emirate of Dubai; disputes are subject to the
        exclusive jurisdiction of the Dubai courts. We may update these
        terms; material changes will be announced in the App and take effect
        no sooner than 14 days after posting. Contact:{" "}
        <strong>legal@infinionapps.com</strong>.
      </P>

      <Callout>
        These terms are a working draft pending review by counsel. They are
        not legal advice.
      </Callout>
    </LegalShell>
  );
}
