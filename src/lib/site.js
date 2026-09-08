// Central place for editable site content.
// Swap the placeholder links/email below with real details any time —
// nothing else in the codebase needs to change.

export const site = {
  name: "Atiij Studio",
  shortName: "Atiij",
  tagline: "Neural amp modeling & tone software for guitarists.",
  description:
    "Atiij Studio builds neural amp modeling and tone-shaping software for guitarists — including a from-scratch parametric NAM engine and SoulCrusher, a high-gain distortion plugin built on real amp captures.",
  url: "https://example.com", // TODO: replace with your real domain once deployed
  email: "hello@example.com", // TODO: replace with the studio's public contact email
  social: {
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
  },
  // Studio-wide distribution policy: everything ships as freeware, no
  // account or sign-up required — just click download and install. This
  // drives the copy on the plugins pages, so keep it accurate.
  distribution: "Free to download. No account, no sign-up — just click and install.",
  donateUrl: null, // TODO: e.g. a Ko-fi / Buy Me a Coffee / PayPal.me link, once you pick one
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/plugins", label: "Plugins" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Every plugin/product across the studio. `status` drives the badge shown
// on the /plugins page: "available" gets a live download link, anything
// else is shown as in-development so nothing gets over-promised.
export const products = [
  {
    slug: "soulcrusher",
    name: "SoulCrusher",
    version: "v2.8.0",
    tagline: "High-gain distortion processor + neural amp capture engine",
    description:
      "Five named high-gain character types, each backed by a real NAM capture instead of a synthetic waveshaper — crossfade-morph smoothly between all five, then stack it into a captured amp with a 5-band parametric EQ, gating, and dynamics.",
    tags: ["Distortion", "Neural Amp Capture", "VST3 / Standalone"],
    status: "available",
    platform: "Windows 10/11 (64-bit)",
    price: "Free — donations welcome",
    // TODO: point this at a real installer once a current build is hosted
    // somewhere (GitHub Release / object storage). Leave null to keep the
    // download button pointing at the contact page instead of a stale file.
    downloadUrl: null,
  },
  {
    slug: null,
    name: "AtiNAMatiC Tone",
    tagline: "Flagship neural amp modeler — software, hardware pedal, and mobile",
    description:
      "The core AtiNAMatiC amp-modeling engine, being built across a desktop plugin, a dedicated hardware pedal, and a Mac/iOS companion app.",
    tags: ["Amp Modeling", "Hardware", "Cross-platform"],
    status: "in-development",
  },
  {
    slug: null,
    name: "AtiNAMatiC — One Knob Series",
    tagline: "Minimalist single-knob effects: Boost, Dirt, Gate, Air, and more",
    description:
      "A growing line of focused, single-purpose effect plugins — each one knob, one job, built for players who want a tone shaped fast without menu-diving.",
    tags: ["Effects", "Utility Plugins"],
    status: "in-development",
  },
  {
    slug: null,
    name: "Nex Series",
    tagline: "Synth and drum machine plugins — ArcSyn, Aurora, Nex Drum",
    description:
      "A step outside guitar tone: a small family of synthesizer and drum machine instruments sharing the Nex sound-design engine.",
    tags: ["Synth", "Drum Machine"],
    status: "in-development",
  },
];

export const values = [
  {
    title: "Real captures, not guesses",
    description: "Every model starts from a real reamp, not a hand-tuned waveshaper standing in for one.",
  },
  {
    title: "Built by a player",
    description: "Every plugin gets played into a real mix before it ships — if it doesn't sit right on a track, it's not done.",
  },
  {
    title: "Small team, direct line",
    description: "You're talking to the people actually building the plugin, not a support queue.",
  },
  {
    title: "Free, no gatekeeping",
    description: "No account walls, no email harvesting — click download and install. Donations are welcome, never required.",
  },
];

// Pulled from the Parametric NAM project's own README — keep this in sync
// with that project if the pitch changes.
export const technology = {
  eyebrow: "Signature technology",
  title: "A neural amp model that actually turns smoothly.",
  summary:
    "Most \"parametric\" NAM captures bundle a handful of fixed snapshots and switch between them at set knob positions — turn the knob and you jump from one capture to the next. Atiij's parametric engine trains a single neural network conditioned on the knob's value alongside the audio, so it genuinely interpolates — and extrapolates beyond — the settings it was trained on.",
  howItWorks: [
    {
      step: "01",
      title: "Reamp",
      description: "Play the same signal through a real amp or pedal at several settings of one control — e.g. gain from clean to full dime.",
    },
    {
      step: "02",
      title: "Train",
      description: "A small neural network learns the sound at every setting in between, not just the ones that were captured.",
    },
    {
      step: "03",
      title: "Play",
      description: "A real-time C++ engine runs the trained model in a JUCE plugin, so turning the virtual knob sweeps the tone continuously in your DAW.",
    },
  ],
  status:
    "Actively in development: the training pipeline, C++ inference engine, and JUCE plugin are all built from scratch in-house — not a wrapper around an existing NAM tool.",
};
