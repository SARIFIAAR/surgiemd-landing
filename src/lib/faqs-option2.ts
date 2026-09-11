// Option 2 FAQ — from docs copy (SurgiMD Website Feature Copy & SEO FAQ).
// LGPD/Brazil references omitted per earlier decision.
export const FAQS_OPTION2: Array<{ q: string; a: string }> = [
  {
    q: "What is SurgiMD?",
    a: "SurgiMD is a native iPhone app for aesthetic and oculoplastic surgeons to capture standardized before-and-after photographs of the face and neck, compare them over time, and store patient images, measurements, and consent securely.",
  },
  {
    q: "How does SurgiMD keep before and after photos aligned?",
    a: "It overlays a translucent 3D head guide for each pose and shows a two-axis level (a yellow line for side-to-side tilt and a green badge for forward/back lean), plus a grid and a fixed 1:1 framing box, so every visit is shot at the same angle, distance, and framing.",
  },
  {
    q: "Which poses can I capture?",
    a: "The face and neck series includes frontal, both 45° obliques, both 90° profiles, upgaze, downgaze, gentle eye closure, brow elevation, left and right close-ups, and neck frontal, oblique, lateral, and extension views.",
  },
  {
    q: "Are the photos the same quality as the iPhone camera?",
    a: "Yes. SurgiMD captures at the device's full sensor resolution with Deep Fusion detail and high-quality JPEG encoding — the same fidelity as the stock camera, not a compressed in-app image.",
  },
  {
    q: "Can I also save captures to my phone's camera roll?",
    a: "Yes. A Settings toggle saves a copy of each capture to the Photos library in addition to the encrypted patient record.",
  },
  {
    q: "Can I record video for functional assessment?",
    a: "Yes. You can record short clips — blink, lid-lag, lagophthalmos — stored in the same patient record as the stills.",
  },
  {
    q: "Can I import photos I already took?",
    a: "Yes. Use \"Add more photos\" to bring existing images into a patient's session.",
  },
  {
    q: "How do I compare before and after images?",
    a: "Open two visits side by side, drag a slider to blend them, and pinch or use smart face-detection zoom to frame the same region on both. All adjustments are non-destructive.",
  },
  {
    q: "Can I make a before-and-after collage?",
    a: "Yes. The collage builder offers four layouts; save the result to the patient's Before & After, and it appears in your Portfolio.",
  },
  {
    q: "How is the Portfolio organised?",
    a: "Automatically by the surgery type you selected for the patient — no hashtags or manual tagging. You can filter by procedure type.",
  },
  {
    q: "What patient information can I store?",
    a: "Name, medical record number, date of birth and age, surgery date, biological sex, laterality, contact details, allergies, a bleeding-risk medication alert, notes, comorbidities, and per-visit clinical data.",
  },
  {
    q: "How are sessions organised over time?",
    a: "By clinical stage — Baseline/Pre-op, Intra-op, Post-op Day 3, 1 week, 2 weeks, 1/3/6 months, and Follow-up — derived automatically from the surgery date.",
  },
  {
    q: "Does SurgiMD support oculoplastic measurements?",
    a: "Yes. You can record MRD1, MRD2, palpebral fissure height, levator function, lagophthalmos, and an NRS pain score for each visit.",
  },
  {
    q: "Does the app handle patient consent?",
    a: "Yes. Photography and treatment consent are stored per patient, and exporting a photo passes through a consent gate.",
  },
  {
    q: "Is there an audit trail?",
    a: "Yes. Every action is written to a tamper-evident, hash-chained audit log, so any change to history is detectable.",
  },
  {
    q: "Is SurgiMD HIPAA compliant?",
    a: "SurgiMD is built to align with HIPAA, along with GDPR and Dubai Health Authority requirements: encrypted storage, per-clinic data segregation, consent capture, an audit trail, and EXIF/GPS stripping.",
  },
  {
    q: "Is my data encrypted?",
    a: "Yes — patient data is encrypted on the device and in the cloud, and image location metadata (EXIF/GPS) is removed from stored and exported photos.",
  },
  {
    q: "What happens if I change or lose my phone?",
    a: "Your entire library — records, photos, clips, before/afters, consents, measurements, and audit trail — is backed up to encrypted cloud storage and restored on your new device with one tap.",
  },
  {
    q: "Does SurgiMD sync across my devices?",
    a: "Yes. Your patient library stays in sync across the devices you sign in on.",
  },
  {
    q: "Can other clinics see my patients?",
    a: "No. Data is segregated per clinic; one clinic's patients are never visible to another account.",
  },
  {
    q: "Can my clinic team share a patient library?",
    a: "Yes. The account owner controls clinic membership, and colleagues in the same clinic share the library while other clinics remain separate.",
  },
  {
    q: "How much does SurgiMD cost?",
    a: "There's a free plan for up to 15 patients with full standardized capture and comparison, and a Pro plan with unlimited patients, the measurement toolkit, and cloud backup & sync.",
  },
  {
    q: "Is pricing based on how many photos I store?",
    a: "No. The plan is based on the number of patients — capture as many photos per patient as a case needs.",
  },
  {
    q: "What devices does SurgiMD run on?",
    a: "It's a native iOS app for iPhone.",
  },
  {
    q: "How do I sign in?",
    a: "With Apple, Google, or a passwordless email code.",
  },
  {
    q: "Is SurgiMD good for plastic surgeons, or only oculoplastic?",
    a: "Both. It started in oculoplastic (periocular) surgery and now covers the full face and neck, so it suits aesthetic and plastic surgeons documenting facial procedures.",
  },
  {
    q: "Does exporting a photo leak the patient's location?",
    a: "No. EXIF and GPS metadata are stripped, so a shared image carries no location or device data.",
  },
];
