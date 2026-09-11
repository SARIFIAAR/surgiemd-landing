// Questions use real search-engine phrasing ("People Also Ask" style).
// Shared between the visible FAQ section and the FAQPage JSON-LD —
// Google requires the structured data to match on-page content.
export const FAQS: Array<{ q: string; a: string }> = [
  {
    q: "What app do plastic surgeons use for before and after photos?",
    a: "Surgeons use dedicated clinical photography apps rather than the built-in camera. SurgiMD is built for this: procedure-specific silhouette guides, live angle and distance lock, ghost overlays of the previous visit, and encrypted patient records — so before-and-after photos are standardized, comparable, and stored securely outside the camera roll.",
  },
  {
    q: "Is it a HIPAA violation to take patient photos on your personal phone?",
    a: "It can be. Identifiable patient photos are Protected Health Information (PHI), and the camera roll is a compliance risk: photos sync to personal iCloud, appear in shared albums, and carry EXIF and GPS metadata. SurgiMD avoids this entirely — photos are captured into the app's encrypted, Face ID-protected storage, never the camera roll, and all metadata is stripped automatically.",
  },
  {
    q: "How do you take HIPAA compliant patient photos?",
    a: "Four essentials: documented patient consent, encrypted storage separate from personal media, access controls, and an audit trail. SurgiMD implements all four — versioned per-patient consent capture, encryption in transit and at rest on HIPAA-eligible infrastructure, unique user authentication with automatic screen lock, and a tamper-evident log of every view, export, and share. BAAs are available to covered entities.",
  },
  {
    q: "How do you take consistent before and after photos?",
    a: "Control framing, angle, distance, and pose — every time. SurgiMD locks all four: a thin-line silhouette positions the anatomy exactly where it was last visit, live yaw and pitch readouts with a level line hold the angle, distance is measured on screen, and a ghost overlay of the previous capture lets you match the composition before the shutter fires.",
  },
  {
    q: "Do I need patient consent for clinical photography?",
    a: "Yes — written, informed consent before capturing, and separate consent for any use beyond care (marketing, teaching, publications). SurgiMD builds this into the workflow: consent is captured per patient and versioned, and sharing, printing, exporting, and saving are consent-gated — the app blocks disclosure unless documented consent covers it.",
  },
  {
    q: "How should patient photos be stored?",
    a: "In an encrypted, access-controlled system separate from personal media — never a personal camera roll or consumer cloud album. SurgiMD stores photos in the app's sandboxed, Face ID-protected storage on device and encrypted per-clinic storage in the cloud, with server-side isolation so your patients are visible to your practice and no one else.",
  },
  {
    q: "What is the best medical photography app for iPhone?",
    a: "Look for four things: guided capture (silhouettes, angle lock, ghost overlay), security (encryption, no camera-roll storage, audit trail), consent management, and honest comparison tools. SurgiMD delivers all four for face and neck procedures, with a free tier for up to 15 patients so you can evaluate the full workflow before subscribing.",
  },
  {
    q: "Does SurgiMD support GDPR for European clinics?",
    a: "Yes. Your clinic is the data controller and SurgiMD acts as a processor on your instructions, with a Data Processing Agreement available on request. Versioned consent capture supports Article 9 explicit-consent obligations, and export and erasure tooling supports data-subject rights.",
  },
  {
    q: "Does SurgiMD meet Dubai Health Authority (DHA) and UAE health data rules?",
    a: "SurgiMD is built in the UAE with the local framework in mind, including Federal Law No. 2 of 2019 (ICT in Health Fields) and DHA health data protection requirements. Encryption, consent gating, audit trails, and de-identification map to DHA expectations, and clinics with strict data-residency mandates can run SurgiMD fully on-device in local-only mode.",
  },
  {
    q: "Which procedures and specialties is SurgiMD built for?",
    a: "Face and neck: blepharoplasty, ptosis repair, brow lifts, rhinoplasty, facelifts, injectables, and dermatologic procedures. The standard series covers frontal, oblique, and lateral views plus gaze, closure, and brow poses, with dedicated neck views — SurgiMD began in oculoplastic surgery, where consistency standards are strictest.",
  },
  {
    q: "What happens to my patient photos if I cancel my subscription?",
    a: "Your data stays yours. If your subscription lapses, records remain accessible for export and feature access returns to the free tier. You can export your clinic's records at any time, and deleting a patient removes the record and its images from both the device and the cloud.",
  },
  {
    q: "How much does SurgiMD cost?",
    a: "The free tier supports up to 15 patients with guided capture, before-and-after comparison, and encrypted storage. SurgiMD Pro is a monthly subscription with unlimited patients, clinic-wide cloud sync, ghost-overlay alignment, and export-ready collages, purchased through the Apple App Store.",
  },
];
