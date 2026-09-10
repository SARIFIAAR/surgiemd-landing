import type { Metadata } from "next";
import { LegalShell, H2, P, UL, Callout } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "SurgiMD — Security & Compliance",
  description:
    "How SurgiMD's technical and organisational measures map to GDPR, HIPAA, LGPD, and UAE health data law.",
};

export default function CompliancePage() {
  return (
    <LegalShell title="Security & Compliance" updated="September 10, 2026">
      <P>
        SurgiMD handles some of the most sensitive data there is: identifiable
        clinical photography. This page describes the technical and
        organisational measures behind the app, and how they map to the major
        data-protection frameworks our users work under.
      </P>

      <H2>GDPR (European Union)</H2>
      <P>SurgiMD is designed to support GDPR-compliant use by clinics:</P>
      <UL
        items={[
          <>
            <strong>Roles done right:</strong> your clinic is the data
            controller; SurgiMD acts as a processor on your instructions. A
            Data Processing Agreement (DPA) is available for clinics on
            request.
          </>,
          <>
            <strong>Lawful basis &amp; explicit consent:</strong> health data
            is special-category data (Art. 9). SurgiMD&apos;s per-patient,
            versioned consent capture gives clinics an auditable record of
            explicit consent.
          </>,
          <>
            <strong>Data-subject rights:</strong> patient records are
            exportable and erasable on request, supporting access and erasure
            obligations.
          </>,
          <>
            <strong>Security of processing (Art. 32):</strong> encryption,
            access control, audit logging and de-identification as described
            above.
          </>,
        ]}
      />

      <H2>HIPAA (United States)</H2>
      <P>
        SurgiMD is built on HIPAA-eligible infrastructure and implements the
        technical safeguards the Security Rule expects:
      </P>
      <UL
        items={[
          "Unique user authentication, automatic screen lock, and role-based access",
          "Encryption of ePHI in transit and at rest",
          "Integrity controls via the tamper-evident audit log",
          "Consent-gated disclosure controls and de-identification tooling",
          "Business Associate Agreements (BAAs) are available to covered entities on request.",
        ]}
      />
      <P>
        We say &ldquo;designed to support HIPAA compliance&rdquo; deliberately:
        there is no such thing as HIPAA certification, and any vendor claiming
        one is telling you something about their marketing, not their
        engineering.
      </P>

      <H2>LGPD (Brazil)</H2>
      <P>
        The same architecture serves LGPD&apos;s requirements for sensitive
        personal data (Art. 11): explicit, documented consent; purpose
        limitation; security and prevention measures; and support for
        data-subject rights (access, deletion, portability).
        Clinic-as-controller / SurgiMD-as-operator agreements are available.
      </P>

      <H2>Dubai Health Authority &amp; UAE health data law</H2>
      <P>
        SurgiMD is built in the UAE, for UAE clinicians first — and we take
        the local framework seriously, including Federal Law No. 2 of 2019
        (ICT in Health Fields), the DHA&apos;s health data protection
        requirements, and Dubai&apos;s health data legislation:
      </P>
      <UL
        items={[
          <>
            The safeguards above — encryption, access control, consent, audit,
            de-identification — map directly to DHA expectations for patient
            confidentiality and record integrity.
          </>,
          <>
            Clinicians retain full control of where exports go; nothing leaves
            the app without an explicit, logged, consent-checked action.
          </>,
          <>
            <strong>Data residency:</strong> we are transparent that cloud data
            is currently hosted on secure Google Cloud infrastructure outside
            the UAE, and we are working toward regional hosting options for
            clinics that require in-country storage. Clinics with strict
            residency mandates can operate SurgiMD fully on-device
            (local-only mode) today.
          </>,
        ]}
      />

      <H2>The shared-responsibility model, plainly</H2>
      <P>
        SurgiMD gives your practice the technical safeguards; compliance is a
        partnership. Your clinic remains responsible for its own policies —
        obtaining patient consent, training staff, and using exports
        appropriately. We give you the tools that make doing the right thing
        the default: consent gates, de-identification, audit trails and
        locked-down storage.
      </P>

      <Callout>
        This page describes SurgiMD&apos;s technical and organisational
        measures. It is not legal advice, and regulations vary by jurisdiction
        — consult your compliance officer or counsel for your specific
        obligations.
      </Callout>
    </LegalShell>
  );
}
