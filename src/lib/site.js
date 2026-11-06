// Central place for editable site content.
// Swap the placeholder links/email below with real details any time —
// nothing else in the codebase needs to change.

export const site = {
  name: "ATIJ STUDIO",
  shortName: "ATIJ",
  tagline: "Neural audio software for guitarists and producers.",
  description:
    "Free guitar and audio software built on Steven Atkinson's open-source Neural Amp Modeler (NAM): amp modelers, a live rig host, mixing and mastering tools, a neural-capture synth, and a parametric NAM trainer.",
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
  // "Show your support" menu (navbar + About page). Paste each link in;
  // entries without a link show as "coming soon".
  support: [
    { name: "PayPal", note: "Send a one-off tip", url: "https://paypal.me/atijstudio" },
    { name: "Buy Me a Coffee", note: "Buy me a coffee", url: "https://buymeacoffee.com/atijstudio" },
    { name: "Gumroad", note: "Pay what you want", url: "https://atijstudio.gumroad.com/" },
  ],
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
//   "available"   -> "Available now" (set `downloadUrl` to a direct download link)
//   "coming-soon" -> "Coming soon"   (not released yet)
// `featured: true` puts a product in the big home-page section and the navbar button.
// `image` is a screenshot in /public (cards, featured section, top of the product page).
// Each product's page content (overview, gallery, specs) is in ./productDetails.js.
// To launch a product: set `releaseRepo` ("owner/repo") so the download button lists
// the latest GitHub Release's files, or paste a single direct link into `downloadUrl`;
// either way there's no sign-up or email step. Then change
// `status` to "available".
export const products = [
  {
    slug: "neural-stage",
    name: "Neural Stage",
    tagline: "Live guitar rig host built around NAM amp models",
    description:
      "Load up to four NAM captures and blend them live on an LCD blend screen, add a built-in dual-IR cab, run your VST3/CLAP/LV2/AU plugins around the amp in one or two parallel lanes, and play the night from a gig view with gapless scene switching.",
    tags: ["Plugin Host", "NAM Blending", "Live Rig"],
    status: "available",
    price: "Free",
    downloadUrl: null,
    // Download button lists every file in this repo's latest GitHub Release.
    releaseRepo: "atij666studio/NeuralStage-Downloads", // public, installers only (code repo is private)
    // Featured on the home page and in the navbar button. Only one product should have this.
    featured: true,
    image: {
      src: "/screenshots/neural-stage/main.webp",
      alt: "Neural Stage main window: four NAM channels on the neural blend screen, amp controls and scene footswitches",
      width: 1400,
      height: 900,
    },
  },
  {
    slug: "soulcrusher",
    name: "SoulCrusher",
    version: "v2.9.0",
    tagline: "High-gain distortion processor + neural amp capture engine",
    description:
      "Five named high-gain character types, each backed by a real NAM capture instead of a synthetic waveshaper — crossfade-morph smoothly between all five, then stack it into a captured amp with a 5-band parametric EQ, gating, and dynamics.",
    tags: ["Distortion", "Neural Amp Capture", "VST3 / Standalone"],
    status: "coming-soon",
    // Shown under the badge while it's coming soon. Set to null to hide.
    statusNote:
      "Being upgraded to Parametric NAM captures, so every gain knob sweeps smoothly without losing clarity.",
    platform: "Windows 10/11 (64-bit)",
    price: "Free — donations welcome",
    downloadUrl: null, // TODO: direct download link
    image: {
      src: "/screenshots/soulcrusher/main.webp",
      alt: "SoulCrusher plugin window with its five skull distortion knobs",
      width: 1202,
      height: 828,
    },
  },
  {
    slug: "atinamatic-tone",
    name: "AtiNAMatiC Tone",
    tagline: "Full guitar amp simulator with a 32-slot effect grid",
    description:
      "Load any .nam capture with dual A1/A2 model stacking, then build your rig on a 32-slot effect grid with 40+ DSP blocks — amps, cabs, drives, modulation, delays, reverbs and EQs — plus a looper, tuner, MIDI learn and 64 factory presets.",
    tags: ["Amp Sim", "Multi-FX", "NAM"],
    status: "available",
    version: "v1.2.5",
    price: "Free",
    downloadUrl: null,
    // Code repo is private; installers are published in this public repo.
    releaseRepo: "atij666studio/AtiNAMatiC-Tone-Downloads",
    image: {
      src: "/screenshots/atinamatic-tone/main.webp",
      alt: "AtiNAMatiC Tone with a split signal path on the effect grid and the Thunder Stack amp open",
      width: 1402,
      height: 816,
    },
  },
  {
    slug: "parametric-nam",
    name: "Parametric NAM",
    tagline: "True continuous parametric amp captures — player and trainer",
    description:
      "Train one neural network on several settings of a knob, then turn that knob smoothly in your DAW instead of jumping between snapshots. Also plays regular NAM/A2, AIDA-X and GuitarML models.",
    tags: ["Parametric NAM", "Trainer", "Player"],
    status: "coming-soon",
    downloadUrl: null, // TODO: direct download link
    image: {
      src: "/screenshots/parametric-nam/main.webp",
      alt: "Parametric NAM trainer and player with its colourful amp head and 4x12 cabinet",
      width: 802,
      height: 1032,
    },
  },
  {
    slug: "nmm-console",
    name: "NMM Console",
    tagline: "Neural mix & mastering console",
    description:
      "A mix and mastering strip built around NAM models: neural saturation and compression, a 5-band EQ, stereo width, and a true-peak limiter — load the built-in models or your own .nam files.",
    tags: ["Mixing", "Mastering", "NAM"],
    status: "coming-soon",
    downloadUrl: null, // TODO: direct download link
    image: {
      src: "/screenshots/nmm-console/main.webp",
      alt: "NMM Console on a playing mix: saturation, compressor, 5-band EQ, master limiter and loudness meters",
      width: 1121,
      height: 442,
    },
  },
  {
    slug: "nex-audio",
    name: "Nex Audio",
    tagline: "Reference-driven tone matching",
    description:
      "Load a reference track, let it analyze the sound, and get a suggested NAM capture and signal chain to get your guitar tone closer to the record.",
    tags: ["Tone Matching", "Analysis", "NAM"],
    status: "coming-soon",
    downloadUrl: null, // TODO: direct download link
    image: {
      src: "/screenshots/nex-audio/main.webp",
      alt: "Nex Audio tone matcher comparing a reference track to the matched tone",
      width: 1440,
      height: 980,
    },
  },
  {
    slug: "neural-pitch",
    name: "Neural Pitch",
    tagline: "Audio to MIDI — sing, hum or beatbox it in",
    description:
      "Accurate pitch tracking with scale quantize, vibrato followed as pitch bend, in-key harmony, a beatbox-to-drums mode you can teach your own sounds, a built-in piano roll, and audio-file-to-MIDI conversion.",
    tags: ["Audio to MIDI", "Piano Roll", "Drum Mode"],
    status: "coming-soon",
    downloadUrl: null, // TODO: direct download link
    image: {
      src: "/screenshots/neural-pitch/main.webp",
      alt: "Neural Pitch with drum-sound teaching, piano roll and detection settings",
      width: 902,
      height: 748,
    },
  },
  {
    slug: "arcsyn",
    name: "ArcSyn",
    tagline: "Neural capture synthesizer",
    description:
      "A two-oscillator polyphonic synth with two neural capture slots that run real amps, pedals and outboard gear (NAM, ATIJ Parametric, AIDA-X, GuitarML) inside the signal path — plus a mod matrix, arpeggiator, sequencer, effects and 302 factory presets.",
    tags: ["Synth", "Neural Capture", "Instrument"],
    status: "coming-soon",
    downloadUrl: null, // TODO: direct download link
    image: {
      src: "/screenshots/arcsyn/main.webp",
      alt: "ArcSyn synthesizer main panel with oscillators, filters, NAM slots and effects",
      width: 1520,
      height: 1080,
    },
  },
  {
    slug: "one-knob-series",
    name: "AtiNAMatiC — One Knob Series",
    tagline: "23 single-knob plug-ins: Boost, Dirt, Gate, Air, Tight and more",
    description:
      "A line of focused, single-purpose plugins — one knob, one job. Boost, saturation, gating, compression, low-end tightening, room and more, built to shape a tone fast without menu-diving.",
    tags: ["Effects", "Utility Plugins", "Open source"],
    status: "available",
    version: "v1.0.0",
    price: "Free and open source",
    downloadUrl: null,
    // Download window lists the latest release (all-in-one installers + one zip per plug-in).
    releaseRepo: "atij666studio/One-Knob-Series",
    // Open source: "Source code" button -> latest release (source zip is listed there).
    sourceUrl: "https://github.com/atij666studio/One-Knob-Series/releases/latest",
    image: {
      src: "/screenshots/one-knob-series/hero.webp",
      alt: "Five One Knob plugins side by side: Boost, Dirt, Cab, Cohere and Air",
      width: 2000,
      height: 535,
    },
  },
  {
    slug: "tonematic",
    name: "ToneMatic",
    tagline: "A fast, lightweight native DAW",
    description:
      "A multitrack DAW built on Tracktion Engine for recording, editing, MIDI and mixing — light and quick, with a classic studio workflow that feels instantly familiar.",
    tags: ["DAW", "Recording", "MIDI"],
    status: "coming-soon",
    downloadUrl: null, // TODO: direct download link
    image: {
      src: "/screenshots/tonematic/mix.webp",
      alt: "ToneMatic mix window with channel strips, EQ, dynamics, sends and faders",
      width: 2560,
      height: 1008,
    },
  },
];

// Projects the apps are built on or work with. Shown on the About page.
export const credits = [
  {
    name: "Neural Amp Modeler (NAM)",
    by: "Steven Atkinson",
    url: "https://github.com/sdatkinson/neural-amp-modeler",
    note: "The open-source neural amp modeling project that made all of this possible.",
  },
  {
    name: "TONE3000",
    by: "tone3000.com",
    url: "https://www.tone3000.com",
    note: "Home of thousands of community-shared captures, browsable from inside several of the apps.",
  },
  {
    name: "AIDA-X and GuitarML",
    by: "the AIDA DSP and GuitarML projects",
    url: "https://github.com/GuitarML",
    note: "Neural amp model formats the players can load.",
  },
  {
    name: "RTNeural",
    by: "Jatin Chowdhury",
    url: "https://github.com/jatinchowdhury18/RTNeural",
    note: "Real-time neural network inference used to play AIDA-X and GuitarML models.",
  },
  {
    name: "JUCE",
    by: "Raw Material Software",
    url: "https://juce.com",
    note: "The audio framework every plugin and app here is built with.",
  },
  {
    name: "Tracktion Engine and Airwindows",
    by: "Tracktion and Chris Johnson",
    url: "https://github.com/Tracktion/tracktion_engine",
    note: "The engine ToneMatic is built on, and the effects library it ships with, alongside many more open-source plugins.",
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
    title: "One person, direct line",
    description: "You're talking to the person actually building the plugins, not a support queue.",
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
    "Coming soon as a free download. Parametric NAM builds on Steven Atkinson's open-source Neural Amp Modeler; its parametric training pipeline, model format and real-time engine are ATIJ's own work, written to make the knob a model input.",
};
