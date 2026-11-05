// Central place for editable site content.
// Swap the placeholder links/email below with real details any time —
// nothing else in the codebase needs to change.

export const site = {
  name: "ATIJ STUDIO",
  shortName: "ATIJ",
  tagline: "Neural audio software for guitarists and producers.",
  description:
    "ATIJ STUDIO builds free neural audio software — amp modelers, a live rig host, mixing and mastering tools, a neural-capture synth, and a from-scratch parametric NAM engine.",
  url: "https://atij666studio.github.io/atijstudio", // change if you add a custom domain later (and clear basePath in next.config.mjs)
  email: "atij666studio@gmail.com",
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

// Path to a file in /public, with the site's base path in front
// (images and backgrounds don't get it added automatically).
export function asset(path) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/plugins", label: "Plugins" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Every plugin/product across the studio. `status` drives the badge shown
// on the /plugins and home pages:
//   "available"   -> "Available now" (set `downloadUrl` to the Gumroad link)
//   "coming-soon" -> "Coming soon"   (finished, download link not up yet)
// To launch a product: paste its Gumroad link into `downloadUrl` and change
// `status` to "available".
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
    downloadUrl: null, // TODO: Gumroad link
  },
  {
    slug: null,
    name: "Neural Stage",
    tagline: "Live guitar rig host built around NAM amp models",
    description:
      "Load up to four NAM captures and blend them live on an LCD blend screen, add a built-in dual-IR cab, run your VST3/CLAP/LV2/AU plugins around the amp in one or two parallel lanes, and play the night from a gig view with gapless scene switching.",
    tags: ["Plugin Host", "NAM Blending", "Live Rig"],
    status: "coming-soon",
    downloadUrl: null, // TODO: Gumroad link
  },
  {
    slug: null,
    name: "AtiNAMatiC Tone",
    tagline: "Full guitar amp simulator with a 40-slot effect grid",
    description:
      "Load any .nam capture with dual A1/A2 model stacking, then build your rig on a 4×10 effect grid with 40+ DSP blocks — amps, cabs, drives, modulation, delays, reverbs and EQs — plus a looper, tuner, MIDI learn and 64 factory presets.",
    tags: ["Amp Sim", "Multi-FX", "NAM"],
    status: "coming-soon",
    downloadUrl: null, // TODO: Gumroad link
  },
  {
    slug: null,
    name: "Parametric NAM",
    tagline: "True continuous parametric amp captures — player and trainer",
    description:
      "Train one neural network on several settings of a knob, then turn that knob smoothly in your DAW instead of jumping between snapshots. Also plays regular NAM/A2, AIDA-X and GuitarML models.",
    tags: ["Parametric NAM", "Trainer", "Player"],
    status: "coming-soon",
    downloadUrl: null, // TODO: Gumroad link
  },
  {
    slug: null,
    name: "NMM Console",
    tagline: "Neural mix & mastering console",
    description:
      "A mix and mastering strip built around NAM models: neural saturation and compression, a 5-band EQ, stereo width, and a true-peak limiter — load the built-in models or your own .nam files.",
    tags: ["Mixing", "Mastering", "NAM"],
    status: "coming-soon",
    downloadUrl: null, // TODO: Gumroad link
  },
  {
    slug: null,
    name: "Nex Audio",
    tagline: "Reference-driven tone matching",
    description:
      "Load a reference track, let it analyze the sound, and get a suggested NAM capture and signal chain to get your guitar tone closer to the record.",
    tags: ["Tone Matching", "Analysis", "NAM"],
    status: "coming-soon",
    downloadUrl: null, // TODO: Gumroad link
  },
  {
    slug: null,
    name: "Neural Pitch",
    tagline: "Audio to MIDI — sing, hum or beatbox it in",
    description:
      "Accurate pitch tracking with scale quantize, vibrato followed as pitch bend, in-key harmony, a beatbox-to-drums mode you can teach your own sounds, a built-in piano roll, and audio-file-to-MIDI conversion.",
    tags: ["Audio to MIDI", "Piano Roll", "Drum Mode"],
    status: "coming-soon",
    downloadUrl: null, // TODO: Gumroad link
  },
  {
    slug: null,
    name: "ArcSyn",
    tagline: "Neural capture synthesizer",
    description:
      "A two-oscillator polyphonic synth with two neural capture slots that run real amps, pedals and outboard gear (NAM, ATIJ Parametric, AIDA-X, GuitarML) inside the signal path — plus a mod matrix, arpeggiator, sequencer, effects and 302 factory presets.",
    tags: ["Synth", "Neural Capture", "Instrument"],
    status: "coming-soon",
    downloadUrl: null, // TODO: Gumroad link
  },
  {
    slug: null,
    name: "AtiNAMatiC — One Knob Series",
    tagline: "Single-knob effects: Boost, Dirt, Gate, Air, Tight and more",
    description:
      "A line of focused, single-purpose plugins — one knob, one job. Boost, saturation, gating, compression, low-end tightening, room and more, built to shape a tone fast without menu-diving.",
    tags: ["Effects", "Utility Plugins"],
    status: "coming-soon",
    downloadUrl: null, // TODO: Gumroad link
  },
  {
    slug: null,
    name: "ToneMatic",
    tagline: "A fast, lightweight native DAW",
    description:
      "A from-scratch multitrack DAW for recording, editing, MIDI and mixing — light and quick like the lean DAWs, with a classic studio workflow that feels instantly familiar.",
    tags: ["DAW", "Recording", "MIDI"],
    status: "coming-soon",
    downloadUrl: null, // TODO: Gumroad link
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
    "Most \"parametric\" NAM captures bundle a handful of fixed snapshots and switch between them at set knob positions — turn the knob and you jump from one capture to the next. ATIJ's parametric engine trains a single neural network conditioned on the knob's value alongside the audio, so it genuinely interpolates — and extrapolates beyond — the settings it was trained on.",
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
    "Coming soon as a free download. The training pipeline, C++ inference engine, and JUCE plugin are all built from scratch in-house — not a wrapper around an existing NAM tool.",
};
