// Content for each product page (/plugins/<slug>/): overview, highlights,
// screenshot gallery and specs. The short card info (name, tagline, status,
// download link) lives in `products` in ./site.js.
//
// Screenshots live in /public/screenshots/<slug>/. Add a picture by dropping
// the file there and adding an entry to that product's `gallery` list.
// Every fact here was taken from the app's own README / manual: keep them in
// sync when an app changes.

const shot = (slug, name, width, height, caption) => ({
  src: `/screenshots/${slug}/${name}.webp`,
  width,
  height,
  caption,
});

export const productDetails = {
  "neural-stage": {
    headline: "Four amps. One blend. Your whole rig on stage.",
    overview: [
      {
        lead: "Love NAM, but can't play without your favourite plugins?",
        text: "Neural Stage puts them in one place. It's a NAM player, a four-model blender and a plugin host in one app: put your own VST3, CLAP, LV2 or AU plugins before and after the amp, and play the whole rig from a single window, on stage or at home.",
      },
      "Neural Stage is a live guitar rig built around neural amp captures. Load up to four NAM models into the amp's blend screen and drag one point to morph between them, with constant loudness and no phasing.",
      "Put your own plugins before and after the amp, add the built-in dual-IR cab, and play the night from a gig view with big footswitch tiles and gapless scene switching. It runs standalone or inside your DAW.",
    ],
    highlights: [
      {
        title: "4-model neural blend",
        description:
          "Four captures at once on an XY blend screen. Constant-loudness, latency-aligned blending, with tone controls on a chrome amp faceplate.",
      },
      {
        title: "Your plugins around the amp",
        description:
          "Host VST3, CLAP, LV2 and AU plugins before and after the amp. Split any section into two parallel lanes, latency-aligned with an A/B mix.",
      },
      {
        title: "Built-in cab",
        description:
          "Two IR slots with level and pan, plus mix and low/high cut. IRs at any sample rate are resampled and level-matched.",
      },
      {
        title: "Made for the gig",
        description:
          "Presets, stomp and scene modes on big footswitch tiles. Scenes that share models switch gaplessly; the rest duck, load and fade back in.",
      },
      {
        title: "Safe, consistent output",
        description:
          "Raw, Normalized or Calibrated output modes, a look-ahead limiter that never clips, and LUFS and true-peak metering.",
      },
      {
        title: "Practice tools included",
        description:
          "Tuner, 60-second looper with overdub and count-in, a backing-track player, noise gate, pitch shift and doubler.",
      },
      {
        title: "MIDI everywhere",
        description:
          "MIDI learn on every knob, a footswitch wizard, program changes for scenes, and MIDI clock out.",
      },
      {
        title: "Runs on small screens",
        description:
          "Scales down to 800×480 touchscreens, so it can run a dedicated Raspberry Pi 5 rig.",
      },
    ],
    gallery: [
      shot("neural-stage", "main", 1280, 1000, "Main view while playing: the neural blend screen, with plugins before and after the amp"),
      shot("neural-stage", "amp", 1400, 900, "Amp page: pre-amp shaping and output modes"),
      shot("neural-stage", "cab", 1400, 900, "Built-in dual-IR cabinet"),
      shot("neural-stage", "input", 1400, 900, "Input page with the noise gate"),
      shot("neural-stage", "looper", 1400, 900, "Looper station"),
      shot("neural-stage", "compact", 1024, 600, "Compact layout for small touchscreens"),
      shot("neural-stage", "model-browser", 862, 628, "Model browser with your library and TONE3000"),
    ],
    install: {
      platforms: [
        {
          name: "Windows 10/11",
          steps: [
            "Download the Installer, unzip it and run `NeuralStage-0.3.0-Setup.exe`.",
            "If you see \"Windows protected your PC\", click More info, then Run anyway.",
            "Follow the installer, then rescan plug-ins in your DAW to use the VST3 or CLAP version.",
          ],
          tip: "No installer? The Manual install zip has `NeuralStage.exe`, `NeuralStage.vst3` (copy to `C:\\Program Files\\Common Files\\VST3`) and `NeuralStage.clap` (copy to `C:\\Program Files\\Common Files\\CLAP`).",
        },
        {
          name: "macOS 11+",
          steps: [
            "Download the Standalone or VST3 zip and double-click it to unzip.",
            "Drag `NeuralStage.app` to Applications, or copy `NeuralStage.vst3` to `/Library/Audio/Plug-Ins/VST3`.",
            "First launch: right-click the app, choose Open, then Open again. After that it opens normally.",
          ],
          tip: "If macOS says the app is damaged or still won't open, run `xattr -cr /Applications/NeuralStage.app` in Terminal (or the same on the .vst3).",
        },
        {
          name: "Linux (x86_64 / ARM64)",
          steps: [
            "Download the AppImage zip for your machine and unzip it.",
            "Make it runnable: `chmod +x NeuralStage-*.AppImage`.",
            "Double-click it or run `./NeuralStage-*.AppImage`.",
          ],
          tip: "For your DAW, copy `NeuralStage.vst3` from the VST3 zip to `~/.vst3`. Raspberry Pi 5: use the ARM64 files.",
        },
      ],
      after: "The full guide is in the user manual (PDF), also in the download window.",
    },
    specs: [
      ["Type", "Live rig host and amp modeler"],
      ["Formats", "Standalone · VST3 · CLAP"],
      ["Platforms", "Windows 10/11 x64 · macOS 11+ (Universal) · Linux x86_64 · Linux ARM64 (Raspberry Pi 5)"],
      ["Amp models", "NAM (A1 and A2) · Parametric NAM · AIDA-X · GuitarML"],
      ["Hosts plugins", "VST3 · CLAP · LV2 · AU (macOS)"],
      ["Audio", "ASIO, WASAPI, DirectSound · CoreAudio · ALSA, JACK, PipeWire"],
      ["Rig files", ".nsrig packages with models and IRs included"],
    ],
  },

  "atinamatic-tone": {
    headline: "A full guitar rig on a 32-slot grid.",
    overview: [
      {
        lead: "All about the sound.",
        text: "AtiNAMatiC Tone is a complete NAM-based amp sim with a deliberately simple interface: the work went into how it sounds and plays, not into eye candy.",
      },
      "It started as the software for my own hardware rig, a Raspberry Pi 5 with a Blokas Pisound audio board. Along the way I built a desktop version too, and that's what you can download here, free.",
      "Inside is a full amp and effects processor: load any NAM capture, stack two models, and build your rig on a 32-slot grid with serial and parallel routing.",
      "Over 40 DSP blocks cover amps, cabs, drives, compressors, modulation, delays, reverbs, EQs, filters, pitch and wah, with a looper, tuner and tap tempo built in.",
    ],
    highlights: [
      {
        title: "Neural Amp Modeler inside",
        description: "Load any .nam capture, with dual-model A1/A2 stacking and a built-in NAM browser to audition captures.",
      },
      {
        title: "Your own plugins as blocks",
        description: "Put any of your installed VST3 plugins (AU on macOS, LV2 on Linux) in any grid slot and swap between it and the built-in models. Plugin blocks are saved in presets and scenes, and the plugin scan never freezes on plugins waiting for activation. On Windows, macOS and Linux x86_64.",
      },
      {
        title: "Synths played by your guitar",
        description: "Synth blocks and your own synth plugins follow your guitar, no MIDI pickup needed: single notes with bends, or whole chords for pads. They listen to your dry guitar, so amp hiss never plays them, and Hold keeps a chord sounding for long synth sweeps.",
      },
      {
        title: "Flexible routing on a 32-slot grid",
        description: "Four rows of eight effect slots, each row with its own input and output. Route them in series or parallel, from a simple pedalboard to a stereo wet/dry rig.",
      },
      {
        title: "40+ DSP blocks",
        description: "Amps, cabs, overdrives, compressors, modulation, reverb, delay, EQ, filters, pitch, wah and more.",
      },
      {
        title: "Capture gear, or your whole rig",
        description: "The built-in capture wizard turns real amps and pedals into NAM models, trained on your computer or on TONE3000. Rig capture turns the rig you built in the app, plugin blocks included, into a NAM capture too.",
      },
      {
        title: "Scenes and footswitches",
        description: "Eight scenes per preset switch blocks on and off and recall their settings. Footswitches A–H work like a Quad Cortex: PRESET, SCENE, STOMP and HYBRID modes, with a big gig view for the stage.",
      },
      {
        title: "Authentic tape delay",
        description: "A multi-part wow and flutter model with drifting, non-repeating modulation, like a real tape machine.",
      },
      {
        title: "Stereo cab IRs and pro EQ",
        description: "Stereo WAV IRs map left and right to two mic positions. Shape the result with an 8-band parametric EQ and a global EQ.",
      },
      {
        title: "Ready to play",
        description: "64 factory presets across 8 banks, MIDI learn on any knob, a looper, tuner and tap tempo.",
      },
    ],
    gallery: [
      shot("atinamatic-tone", "main", 1402, 816, "Split signal path: SoulCrusher (a plugin block) as the drive before the amp, with the Vintage Drive amp open, live input and latency"),
      shot("atinamatic-tone", "plugin-block", 1402, 816, "Your own plugin as a block: SoulCrusher in an OVERDRIVE slot, with its picture, ON/OFF, OPEN PLUGIN WINDOW and CHANGE PLUGIN"),
      shot("atinamatic-tone", "plugins-screen", 1402, 816, "Plugins screen: scan, search and sort your plugins, then use them as blocks"),
      shot("atinamatic-tone", "rig-capture", 1402, 816, "Rig capture: turn the whole rig you built, plugin blocks included, into a NAM model"),
      shot("atinamatic-tone", "ethereal-clean-amp", 1402, 816, "Ethereal Clean amp with its tone controls"),
      shot("atinamatic-tone", "screamer-distortion", 1402, 816, "Screamer Distortion pedal"),
      shot("atinamatic-tone", "room-reverb", 1402, 816, "Room Reverb with size, decay, pre-delay and EQ"),
      shot("atinamatic-tone", "nam-loader", 1402, 816, "NAM block with a built-in capture loaded, calibration and gate, plus NAM CAPTURE and the Parametric NAM trainer (Windows standalone app)"),
      shot("atinamatic-tone", "advanced-looper", 1402, 816, "Advanced looper: four tracks, overdub, speed and stem split"),
      shot("atinamatic-tone", "advanced-tuner", 1402, 816, "Advanced tuner with strobe, stream and harmonic modes"),
      shot("atinamatic-tone", "gig-view", 1402, 816, "Gig view in HYBRID mode: footswitches A-D toggle blocks, E-H recall scenes"),
    ],
    install: {
      platforms: [
        {
          name: "Windows 10/11",
          steps: [
            "Download the Installer and run `AtiNAMatiC-Tone-v1.2.16-Windows-x64-Setup.exe`.",
            "If you see \"Windows protected your PC\", click More info, then Run anyway.",
            "Tick the plug-in formats you want (VST3, CLAP, LV2) and finish. The app is always installed.",
            "Rescan plug-ins in your DAW.",
          ],
          tip: "The installer includes the AI stem splitter for the looper, the built-in captures and IRs, and the Microsoft Visual C++ runtime if it's missing.",
        },
        {
          name: "macOS",
          steps: [
            "Download the Installer (`.pkg`).",
            "If macOS won't open it, right-click it and choose Open (or go to System Settings › Privacy & Security and click Open Anyway).",
            "Click Customize and tick what you want: the app, VST3, AU, CLAP, LV2.",
            "Rescan plug-ins in your DAW. Logic and GarageBand use the AU version.",
          ],
          tip: "The built-in captures and IRs install to `/Library/Application Support/AtiNAMatiC Tone`, where the app and plug-ins find them.",
        },
        {
          name: "Linux (x86_64 / ARM64)",
          steps: [
            "Download the archive for your machine and extract it.",
            "In that folder, run `./install.sh`. It installs the app and asks which plug-in formats you want.",
            "Start it with `atinamatic-tone` or from your applications menu, and rescan plug-ins in your DAW.",
          ],
          tip: "`./install.sh --all` installs everything, `--system` installs for all users, `--uninstall` removes it. Raspberry Pi 5: use the ARM64 archive.",
        },
      ],
      after: "The full user manual (PDF) is in the download window and is installed with the app.",
    },
    changelog: [
      {
        version: "v1.2.16",
        date: "November 2026",
        items: [
          "Synth plugins played by your guitar: a synth or sampler plugin in a block turns what you play into MIDI, no MIDI pickup needed. Right-click the block for Single notes (with bends and slides) or Chords (for pads), Bend range, Sensitivity and Sustain: follow the strings, or Hold until your next pick or a mute, for long synth sweeps.",
          "Synth blocks listen to your dry guitar, wherever they sit: behind a high-gain amp, its hiss and hum no longer make them play by themselves. Where you put a synth still shapes its sound: in front of the amp it's played through the amp, after the amp it sits clean on top of your tone.",
          "Synths ignore hiss, hum and muted string scratches, a held chord holds still, and damping the strings stops the notes. Notes now last as long as the strings ring.",
          "The SYNTH block's synths respond to soft picking (about 20 dB more sensitive).",
          "BANK UP / DOWN browse the banks without changing your sound, like a Quad Cortex; A-H then load from the bank on show.",
          "Right-click an input box for the input gate and Input settings, or an output box for Capture this rig as NAM. The input meter is blue while the input gate is on.",
          "Plugin blocks show their plugin's card under the grid: tap it for the plugin's window, right-click it for the block's menu.",
          "TONE3000: no key of your own needed, just sign in.",
          "Fixed: changing the buffer size or sample rate with some synth plugins loaded (KORG Multi/Poly, OB-Xd and others) crashed the app.",
          "Fixed: a plugin amp or cab in place of the built-in one left the built-in amp / cab running underneath it.",
        ],
      },
      {
        version: "v1.2.13",
        date: "November 2026",
        note: "The macOS installer is v1.2.13 too, the first Mac update since v1.2.7: it includes everything from v1.2.12 below.",
        items: [
          "Lower latency: the master safety limiter now looks ahead 1 ms instead of 5 ms, so everything you play comes out 4 ms sooner.",
          "Pitch blocks (Micro Shift, Crystal Harmony, Whammy and the others) no longer report their shifter's delay as plugin latency. Your dry guitar always went through undelayed, but in a DAW the reported delay (up to 70 ms) held back live monitoring and put the dry track early on playback.",
          "Plugin blocks: a plugin's own latency (linear-phase EQs, oversampling plugins) is now counted and reported to your DAW, and parallel rows stay in time with it.",
          "Windows standalone: if the app isn't using ASIO and finds your interface's ASIO driver, it asks once whether to switch to it.",
          "New RTL readout next to LAT: the real round trip from input to speakers, including your interface. LAT stays the familiar one-buffer figure. Hover over either for an explanation.",
          "GLT counts dropouts with every interface (the driver's, plus buffers the app couldn't finish in time). Click it to reset.",
          "Fixed: after a restart the header showed \"no preset\" although the last preset was on the grid.",
        ],
      },
      {
        version: "v1.2.12",
        date: "November 2026",
        note: "The first update since v1.2.7, with everything from v1.2.8 to v1.2.12.",
        items: [
          "Your own plugins as blocks: put any installed VST3 (AU on macOS, LV2 on Linux) in any grid slot. Plugin blocks show the plugin's own picture, have an ON / OFF switch, OPEN PLUGIN WINDOW and CHANGE PLUGIN, and are saved in presets and scenes. (Windows, macOS and Linux x86_64.)",
          "Plugins screen (⋮ → Plugins): scan, search, sort and tidy your plugin list. Scanning runs in the background and never freezes on plugins that need activation, hang or crash.",
          "Rig capture: the NAM capture wizard can capture the whole rig you built in the app, plugin blocks included. New NAM CAPTURE button in the NAM block.",
          "Footswitches A-H work like a Quad Cortex: PRESET loads presets 1-8 of the current bank, SCENE recalls scenes, STOMP toggles blocks, HYBRID gives A-D stomps and E-H scenes. The mode button cycles STOMP → SCENE → PRESET → HYBRID.",
          "The selected block glows in its own colour, so two blocks of the same type are easy to tell apart.",
          "Train a Parametric NAM model from the profile menu.",
          "Plugin windows open in the middle of the app; menus use the app's own style.",
        ],
      },
      {
        version: "v1.2.7",
        date: "November 2026",
        items: [
          "Train your own captures with the Parametric NAM Trainer (Quick Start) in the Windows standalone app, on your NVIDIA graphics card when you have one.",
          "Models you train no longer record your folder path, so they're safe to share.",
          "New plug-in formats: CLAP and LV2 alongside VST3 (and AU on macOS).",
          "Installed plug-ins find the built-in NAM captures, IRs and reverb IRs on every format and system.",
          "New installers for macOS and Linux; the Windows installer offers each plug-in format separately.",
        ],
      },
    ],
    specs: [
      ["Type", "Amp simulator and multi-effects"],
      ["Formats", "Standalone · VST3 · CLAP · LV2 · AU (macOS)"],
      ["Platforms", "Windows 10/11 x64 · macOS (Universal) · Linux x86_64 · Linux ARM64"],
      ["Stem splitter", "AI stem splitting in the looper (Windows)"],
      ["Amp models", "NAM .nam captures, with dual A1/A2 stacking"],
      ["Effects", "40+ DSP blocks on a 32-slot grid (4 rows × 8 slots)"],
      ["Cabinets", "Mono and stereo WAV impulse responses"],
      ["Presets", "64 factory presets in 8 banks"],
    ],
  },

  "parametric-nam": {
    headline: "Turn the knob. Not the preset.",
    overview: [
      "Most parametric amp captures are a handful of snapshots that switch at fixed knob positions. Parametric NAM trains one neural network that takes the knob's position as an input, so turning the virtual gain knob sweeps the tone smoothly, between and beyond the settings you captured.",
      "It builds on Steven Atkinson's open-source Neural Amp Modeler, extending the idea so a knob becomes part of the model. Capture your amp, train the model, organize your rig and play it, all in one app.",
    ],
    highlights: [
      {
        title: "Truly continuous",
        description: "One network conditioned on the knob value, so the sound interpolates between captured settings instead of jumping.",
      },
      {
        title: "Quick Start",
        description: "Name an amp, add a few .nam files of it at different settings, click Train This Amp, then load it in the Player.",
      },
      {
        title: "Capture and train",
        description: "Reamp your own gear at several settings of one control, then train and export from the Capture and Trainer tabs.",
      },
      {
        title: "Plays everything",
        description: "Besides its own parametric models, the Player loads regular NAM (including A2), AIDA-X and GuitarML models.",
      },
      {
        title: "Organizer and TONE3000",
        description: "Keep your rigs tidy in the Organizer and find captures online through the built-in TONE3000 tab.",
      },
      {
        title: "Plugin for your DAW",
        description: "A JUCE plugin loads exported models and exposes their parameters as knobs you can automate.",
      },
    ],
    gallery: [
      shot("parametric-nam", "main", 802, 1032, "The AtiNAMatiC amp head and 4×12 cab, with Quick Start, Capture, Trainer, Organizer and TONE3000 one click away"),
    ],
    specs: [
      ["Type", "Parametric amp-capture trainer and player"],
      ["App", "Standalone app with Player, Quick Start, Capture, Trainer, Organizer and TONE3000"],
      ["Plugin", "VST3 · Standalone"],
      ["Platform", "Windows 10/11 x64"],
      ["Plays", "Parametric NAM (.pnam.json) · NAM (A1/A2) · AIDA-X · GuitarML"],
    ],
  },

  "nmm-console": {
    headline: "Neural saturation and compression for your mix bus.",
    overview: [
      "NMM Console is a mix and mastering strip built around neural captures of real outboard gear. Saturation and compression come from NAM models, followed by a 5-band EQ, stereo width and a 4× oversampled true-peak limiter.",
      "Use the built-in models or load your own .nam files, and browse outboard captures from TONE3000 without leaving the plugin.",
    ],
    highlights: [
      {
        title: "Neural signal chain",
        description: "Input → NAM saturation → NAM compressor → 5-band EQ → stereo width → output → true-peak limiter.",
      },
      {
        title: "Two NAM slots",
        description: "Built-in models or any .nam file, with Drive, Level and Mix, click-free bypass and phase-aligned dry/wet.",
      },
      {
        title: "True-peak limiter",
        description: "A 4× oversampled look-ahead brickwall with ceiling and release, and constant latency reported to your DAW.",
      },
      {
        title: "Loudness metering",
        description: "Input/output peak with clip lights, limiter gain reduction, and EBU R128 momentary, short-term and integrated LUFS.",
      },
      {
        title: "5-band EQ",
        description: "Low cut, low shelf, mid peak, high shelf and high cut, with a global bypass.",
      },
      {
        title: "TONE3000 browser",
        description: "Browse trending and latest outboard captures and load one into either slot to hear it. Your password never touches the plugin.",
      },
    ],
    gallery: [
      shot("nmm-console", "main", 1121, 442, "Saturation, compressor, 5-band EQ and master limiter, with live loudness metering"),
    ],
    specs: [
      ["Type", "Mix and mastering processor"],
      ["Formats", "VST3 · AU · Standalone"],
      ["Platforms", "Windows · macOS"],
      ["Models", "Built-in models or your own .nam files (A1 and A2)"],
      ["Metering", "Peak, gain reduction, EBU R128 loudness (LUFS)"],
      ["Presets", "User presets and A/B compare"],
    ],
  },

  "nex-audio": {
    headline: "Hear a tone you love. Get close to it in minutes.",
    overview: [
      "Nex Audio is a reference-driven tone matcher for guitar and bass. Give it a recording whose sound you like, and it analyzes the tone, finds the closest amp model in your library, loads it and dials in a matching EQ.",
      "Then fine-tune it like any amp rig: drive, cab, dynamics and master, with A/B comparison against the reference.",
    ],
    highlights: [
      {
        title: "Drop in a reference",
        description: "Load a song or stem and see its tone curve next to the predicted result.",
      },
      {
        title: "Finds your best model",
        description: "Scores every model in your library by spectrum, brightness and tightness, and loads the closest one.",
      },
      {
        title: "Match EQ",
        description: "Sets a matching EQ automatically. LEARN listens to your guitar for an even closer match, and every band stays draggable.",
      },
      {
        title: "Full signal chain",
        description: "Gate, drive, amp, cab, EQ, compressor and limiter, with loudness metering on the master.",
      },
      {
        title: "Presets, A/B and bounce",
        description: "Factory and user presets, A/B compare and bouncing your result to a file.",
      },
      {
        title: "TONE3000 built in",
        description: "Find captures online and add them to your library straight from the app.",
      },
    ],
    gallery: [
      shot("nex-audio", "main", 1440, 980, "A finished match: reference (orange) vs result (blue)"),
      shot("nex-audio", "tour", 864, 588, "Guided tour for first-time users"),
      shot("nex-audio", "presets", 884, 664, "Preset browser"),
      shot("nex-audio", "tone-match", 584, 238, "Tone match EQ"),
    ],
    specs: [
      ["Type", "Tone matcher and amp rig"],
      ["Formats", "Standalone · VST3 · LV2 · AU (macOS)"],
      ["Platforms", "Windows 10/11 64-bit · macOS (Apple Silicon or Intel)"],
      ["Amp models", "NAM (including A2) · Parametric NAM · GuitarML · AIDA-X"],
      ["Cab IRs", ".wav · .aif · .flac"],
      ["References", ".wav · .aif · .mp3 · .flac · .ogg · .m4a"],
    ],
  },

  "neural-pitch": {
    headline: "Sing it, hum it, beatbox it. Get MIDI.",
    overview: [
      "Neural Pitch turns your voice or any instrument into MIDI, live into your DAW, recorded into its own piano roll, or converted from an audio file.",
      "It follows vibrato as pitch bend instead of chopping it into notes, adds in-key harmony, and turns beatboxing into drums you can teach your own sounds. Everything runs inside the plugin, with no internet needed.",
    ],
    highlights: [
      {
        title: "Accurate pitch tracking",
        description: "Accurate to a few cents from 65 Hz to 1.5 kHz, with scale quantize, root key, octave shift and MPE.",
      },
      {
        title: "Singer-aware",
        description: "Vibrato becomes pitch bend, and repeated syllables on one pitch become separate notes.",
      },
      {
        title: "Drum mode",
        description: "Beatbox kick, snare and hats out of the box, or teach it five sounds of your own by example.",
      },
      {
        title: "Piano roll",
        description: "Eight take slots, draw and edit notes, quantize with swing, and drag the result straight into your DAW.",
      },
      {
        title: "Audio file to MIDI",
        description: "Convert a file, a whole folder, or a full song: it can split drums, bass, vocals, guitar, piano and more into separate takes.",
      },
      {
        title: "Built-in sounds",
        description: "Hear your MIDI with real General MIDI instruments and drum kits, or load your own .sfz and .sf2 instruments.",
      },
    ],
    gallery: [
      shot("neural-pitch", "main", 902, 748, "Drum mode: teach your sounds, then edit the result in the piano roll"),
    ],
    specs: [
      ["Type", "Audio-to-MIDI converter"],
      ["Formats", "VST3 · CLAP · Standalone (plus AU on macOS)"],
      ["Platforms", "Windows · macOS"],
      ["Pitch range", "65 Hz – 1.5 kHz"],
      ["Timing", "Live (lowest latency) or Aligned (±5 ms with DAW delay compensation)"],
      ["Export", "MIDI per take, melody + drums, or all takes"],
    ],
  },

  arcsyn: {
    headline: "A synth with real hardware in its signal path.",
    overview: [
      "ArcSyn is a polyphonic synthesizer with a neural twist. At heart it's a classic two-oscillator subtractive synth with unison, FM, ring modulation and hard sync.",
      "What makes it different are its two neural capture slots: they run recordings of real amps, pedals, preamps and outboard gear right inside the synth's signal path.",
    ],
    highlights: [
      {
        title: "Two neural capture slots",
        description: "Run NAM, ATIJ Parametric, AIDA-X and GuitarML captures as a filter stage and a drive stage.",
      },
      {
        title: "Classic synth engine",
        description: "Two oscillators with unison, FM, ring mod and hard sync, a zero-delay-feedback filter, three envelopes and two LFOs.",
      },
      {
        title: "Deep modulation",
        description: "An 8-slot mod matrix, four macros and MPE support for expressive controllers.",
      },
      {
        title: "Patterns",
        description: "A host-synced arpeggiator, an 8-step sequencer and a chord mode.",
      },
      {
        title: "Effects rack",
        description: "Saturation, chorus, phaser, bitcrusher, delay, reverb, EQ and a compressor.",
      },
      {
        title: "302 presets",
        description: "Level-matched factory presets, plus undo/redo, A/B compare and a TONE3000 browser for captures.",
      },
    ],
    gallery: [
      shot("arcsyn", "main", 1520, 1080, "The full ArcSyn panel"),
      shot("arcsyn", "nam", 1520, 1080, "Neural capture slots in the signal path"),
      shot("arcsyn", "mod-matrix", 1520, 1080, "Mod matrix"),
    ],
    install: {
      platforms: [
        {
          name: "Windows 10/11",
          steps: [
            "Download the Installer and run `ArcSyn-2.0.0-Windows-Setup.exe`.",
            "If you see \"Windows protected your PC\", click More info, then Run anyway.",
            "Tick what you want (VST3, the app, the manual) and finish.",
            "Rescan plug-ins in your DAW.",
          ],
          tip: "No installer? The Portable zip has `ArcSyn.exe`, which runs from anywhere, and `ArcSyn.vst3`, which you copy to `C:\\Program Files\\Common Files\\VST3`.",
        },
        {
          name: "macOS",
          steps: [
            "Download the Installer (`.pkg`).",
            "If macOS won't open it, right-click it and choose Open (or go to System Settings › Privacy & Security and click Open Anyway).",
            "Click Customize and tick what you want: the app, VST3, AU.",
            "Rescan plug-ins in your DAW. Logic and GarageBand use the AU version.",
          ],
          tip: "No installer? The Manual install zip has the app and both plug-ins to copy yourself; its README says where they go.",
        },
        {
          name: "Linux (x86_64 / ARM64)",
          steps: [
            "Download the archive for your machine and extract it.",
            "In that folder, run `./install.sh`. It asks whether to install the app and the VST3 plug-in.",
            "Start it with `arcsyn` or from your applications menu, and rescan plug-ins in your DAW.",
          ],
          tip: "`./install.sh --all` installs everything, `--system` installs for all users, `--uninstall` removes it. Raspberry Pi 5: use the ARM64 archive.",
        },
      ],
    },
    specs: [
      ["Type", "Polyphonic synthesizer (instrument)"],
      ["Formats", "VST3 · AU (macOS) · Standalone"],
      ["Platforms", "Windows 10/11 x64 · macOS (Apple Silicon + Intel) · Linux x86_64 · Linux ARM64"],
      ["Oscillators", "2, with unison, FM, ring mod and hard sync"],
      ["Neural slots", "2 · NAM, ATIJ Parametric, AIDA-X, GuitarML"],
      ["Modulation", "8-slot matrix · 4 macros · MPE"],
      ["Presets", "302 factory presets"],
    ],
    credits: [
      {
        title: "Built with",
        items: [
          { name: "NeuralAmpModelerCore", by: "Steven Atkinson", use: "NAM and A2 capture playback", license: "MIT", url: "https://github.com/sdatkinson/NeuralAmpModelerCore" },
          { name: "RTNeural", by: "Jatin Chowdhury", use: "AIDA-X and GuitarML capture playback", license: "BSD 3-Clause", url: "https://github.com/jatinchowdhury18/RTNeural" },
          { name: "Eigen", by: "Eigen contributors", use: "Linear algebra for the neural engines", license: "MPL 2.0", url: "https://eigen.tuxfamily.org" },
          { name: "nlohmann/json", by: "Niels Lohmann", use: "Reading model files", license: "MIT", url: "https://github.com/nlohmann/json" },
          { name: "JUCE", by: "Raw Material Software", use: "Application and plug-in framework", url: "https://juce.com" },
          { name: "Barlow", by: "Jeremy Tribby", use: "Interface font", license: "SIL OFL 1.1", url: "https://github.com/jpt/barlow" },
        ],
      },
    ],
  },

  "one-knob-series": {
    headline: "One knob. One job. Done.",
    overview: [
      "The One Knob Series is a collection of focused plugins that each do one thing well, built for players who want to shape a tone fast without menu-diving.",
      "Use them around your amp sim: boost the front end, tighten the low end, tame fizz, add room and width, and keep levels even.",
    ],
    highlights: [
      { title: "Boost", description: "Front-end clean boost: life, punch and clarity before the amp sim." },
      { title: "Dirt", description: "Harmonic saturation that adds grit and bite without muddying the low end." },
      { title: "Tight", description: "Controls flub and mud in down-tuned and high-gain rigs." },
      { title: "Gate", description: "An intelligent noise gate that silences hum and buzz between notes." },
      { title: "Cohere", description: "Catches amp-sim fizz only when it sticks out, and glues the tone together." },
      { title: "Air", description: "Post-cab amp-in-the-room feel: air, presence and stereo depth." },
      { title: "Double", description: "A natural double-tracker that thickens a mono signal without chorus artefacts." },
      { title: "Room", description: "Ducking room ambience that dips while you play and blooms in the gaps." },
    ],
    gallery: [
      shot("one-knob-series", "air", 501, 642, "AtiNAMatiC-Air"),
      shot("one-knob-series", "bloom", 501, 642, "AtiNAMatiC-Bloom"),
      shot("one-knob-series", "boost", 501, 642, "AtiNAMatiC-Boost"),
      shot("one-knob-series", "cab", 501, 642, "AtiNAMatiC-Cab"),
      shot("one-knob-series", "choke", 501, 642, "AtiNAMatiC-Choke"),
      shot("one-knob-series", "cohere", 501, 642, "AtiNAMatiC-Cohere"),
      shot("one-knob-series", "dirt", 501, 642, "AtiNAMatiC-Dirt"),
      shot("one-knob-series", "double", 501, 642, "AtiNAMatiC-Double"),
      shot("one-knob-series", "feel", 501, 642, "AtiNAMatiC-Feel"),
      shot("one-knob-series", "gate", 501, 642, "AtiNAMatiC-Gate"),
      shot("one-knob-series", "hitzone", 501, 642, "AtiNAMatiC-HitZone"),
      shot("one-knob-series", "hum", 501, 642, "AtiNAMatiC-Hum"),
      shot("one-knob-series", "level", 501, 642, "AtiNAMatiC-Level"),
      shot("one-knob-series", "mono", 501, 642, "AtiNAMatiC-Mono"),
      shot("one-knob-series", "pick", 501, 642, "AtiNAMatiC-Pick"),
      shot("one-knob-series", "pitch", 501, 642, "AtiNAMatiC-Pitch"),
      shot("one-knob-series", "reach", 501, 642, "AtiNAMatiC-Reach"),
      shot("one-knob-series", "room", 501, 642, "AtiNAMatiC-Room"),
      shot("one-knob-series", "sag", 501, 642, "AtiNAMatiC-Sag"),
      shot("one-knob-series", "slow", 501, 642, "AtiNAMatiC-Slow"),
      shot("one-knob-series", "squash", 501, 642, "AtiNAMatiC-Squash"),
      shot("one-knob-series", "strum", 501, 642, "AtiNAMatiC-Strum"),
      shot("one-knob-series", "tight", 501, 642, "AtiNAMatiC-Tight"),
    ],
    // Small plugin windows: show them in an even grid instead of one big first image.
    galleryLayout: "compact",
    install: {
      platforms: [
        {
          name: "Windows 10/11",
          steps: [
            "Download the All plug-ins installer and run `ONE-KNOB-Series-v1.0.0-Windows-x64-Setup.exe`.",
            "If you see \"Windows protected your PC\", click More info, then Run anyway.",
            "Tick the plug-ins and formats you want (VST3, CLAP, LV2), untick the rest, and finish.",
            "Rescan plug-ins in your DAW.",
          ],
          tip: "Just one plug-in? Unzip it and copy the `.vst3`, `.clap` and `.lv2` into `C:\\Program Files\\Common Files\\` (folders `VST3`, `CLAP`, `LV2`).",
        },
        {
          name: "macOS 10.15+",
          steps: [
            "Download the All plug-ins installer (`.pkg`).",
            "If macOS won't open it, right-click it and choose Open (or go to System Settings › Privacy & Security and click Open Anyway).",
            "Click Customize and tick the plug-ins and formats you want (VST3, AU, CLAP, LV2).",
            "Rescan plug-ins in your DAW. Logic and GarageBand use the AU versions.",
          ],
          tip: "Just one plug-in? Copy its files into `/Library/Audio/Plug-Ins/` (`VST3`, `Components`, `CLAP`, `LV2`), then run `xattr -cr` on each, e.g. `xattr -cr /Library/Audio/Plug-Ins/VST3/AtiNAMatiC-Boost.vst3`.",
        },
        {
          name: "Linux (x86_64 / ARM64)",
          steps: [
            "Download the All plug-ins archive for your machine and extract it.",
            "In that folder, run `./install.sh`. It asks which plug-ins and formats to install.",
            "Rescan plug-ins in your DAW.",
          ],
          tip: "`./install.sh --all` installs everything, `--system` installs for all users, `--uninstall` removes them. Single zips go into `~/.vst3`, `~/.clap` and `~/.lv2`.",
        },
      ],
      after: "Every plug-in's manual is inside its zip, and the full ONE KNOB Series manual (PDF) is in the download window.",
    },
    specs: [
      ["Type", "Single-knob effect plug-ins (no standalone apps)"],
      ["Formats", "VST3 · CLAP · LV2 on every platform · AU (macOS)"],
      ["Platforms", "Windows 10+ x64 · macOS 10.15+ (Universal) · Linux x86_64 · Linux ARM64"],
      ["Includes", "23 plugins: Air, Bloom, Boost, Cab, Choke, Cohere, Dirt, Double, Feel, Gate, HitZone, Hum, Level, Mono, Pick, Pitch, Reach, Room, Sag, Slow, Squash, Strum, Tight"],
      ["Installers", "Windows Setup.exe and macOS .pkg: tick the plug-ins and formats you want · Linux: install script that asks"],
      ["Single downloads", "One zip per plug-in per platform, with every format and its manual"],
      ["License", "Free and open source (GNU GPL v3), source on GitHub"],
    ],
  },

  tonematic: {
    headline: "A fast, lightweight DAW with a classic studio workflow.",
    overview: [
      "ToneMatic is a native DAW for recording, editing, MIDI and mixing, built on the open-source Tracktion Engine. It aims to stay light and fast, with a classic studio workflow that feels instantly familiar.",
      "It comes loaded: hundreds of built-in effects, the AtiNAMatiC amp player, a drum track with a step sequencer, and hosting for your own plugins.",
    ],
    highlights: [
      {
        title: "Record and edit",
        description: "Multitrack recording, real edit tools and modes, take folders with quick-swipe comping, strip silence and tab to transient.",
      },
      {
        title: "Mix window",
        description: "Vertical channel strips with five insert slots each, sends to any track, track stacks, groups and sidechain inputs.",
      },
      {
        title: "Hundreds of effects",
        description: "Every Airwindows effect built in, plus bundled open-source plugins from Chowdhury DSP, Dexed, Dragonfly Reverb, IEM, LSP, Surge XT, x42 and ZAM.",
      },
      {
        title: "AtiNAMatiC built in",
        description: "Add a guitar amp track with the AtiNAMatiC player in one click.",
      },
      {
        title: "Songwriting tools",
        description: "Tempo and meter changes, tempo ramps, a chord track, and a drum track with a built-in kit and step sequencer.",
      },
      {
        title: "Automation and export",
        description: "Volume, pan and plugin automation, bounce to disk, and stem export as WAV or AIFF.",
      },
    ],
    gallery: [
      shot("tonematic", "mix", 2560, 1008, "Mix window: channel strips with EQ, dynamics, inserts and sends"),
      shot("tonematic", "edit", 2560, 1008, "Edit window: colour-coded tracks, track stacks and waveforms"),
    ],
    // Open-source projects ToneMatic is built with or ships. Taken from its
    // third_party folder, licence files and About box.
    credits: [
      {
        title: "Built with",
        items: [
          { name: "Tracktion Engine", by: "Tracktion", use: "Audio engine", license: "GPLv3", url: "https://github.com/Tracktion/tracktion_engine" },
          { name: "JUCE", by: "Raw Material Software", use: "Application framework", url: "https://juce.com" },
          { name: "Ableton Link", by: "Ableton", use: "Tempo sync with other apps and devices", license: "GPL", url: "https://github.com/Ableton/link" },
          { name: "Lua", by: "Lua.org, PUC-Rio", use: "Scripting", license: "MIT", url: "https://www.lua.org" },
          { name: "whisper.cpp", by: "the ggml authors", use: "Speech to text", license: "MIT", url: "https://github.com/ggml-org/whisper.cpp" },
          { name: "ONNX Runtime", by: "Microsoft", use: "Stem splitting", license: "MIT", url: "https://onnxruntime.ai" },
          { name: "ptformat", by: "Damien Zammit", use: "Session import", license: "LGPL-2.1", url: "https://github.com/zamaudio/ptformat" },
          { name: "TinySoundFont", by: "Bernhard Schelling", use: "SoundFont playback", license: "MIT", url: "https://github.com/schellingb/TinySoundFont" },
          { name: "GeneralUser GS", by: "S. Christian Collins", use: "General MIDI sound set", license: "GeneralUser GS License", url: "https://www.schristiancollins.com/generaluser.php" },
          { name: "CLAP", by: "Alexandre Bique and the CLAP team", use: "Plugin format", license: "MIT", url: "https://github.com/free-audio/clap" },
          { name: "DPF", by: "Filipe Coelho (falktx)", use: "Framework for the bundled DPF plugins", license: "ISC", url: "https://github.com/DISTRHO/DPF" },
          { name: "ARA SDK", by: "Celemony", use: "Audio Random Access plugin support", url: "https://github.com/Celemony/ARA_SDK" },
          { name: "SoundCraft", by: "the ArtCraft team and SoundCraft contributors", use: "Colour theme and clip drawing recipes", license: "MIT or Apache-2.0", url: "https://github.com/storytold/soundcraft" },
        ],
      },
      {
        title: "Bundled plugins",
        items: [
          { name: "Airwindows", by: "Chris Johnson", use: "Every Airwindows effect", license: "MIT", url: "https://www.airwindows.com" },
          { name: "Airwindows Consolidated", by: "Paul Walker", use: "Open-source host adaptation of Airwindows", license: "MIT", url: "https://github.com/baconpaul/airwin2rack" },
          { name: "BYOD and ChowTape", by: "Chowdhury DSP (Jatin Chowdhury)", use: "Build-your-own distortion and tape emulation", license: "GPLv3", url: "https://chowdsp.com" },
          { name: "Dexed", by: "Pascal Gauthier and contributors", use: "DX7-style FM synth", license: "GPLv3", url: "https://github.com/asb2m10/dexed" },
          { name: "Dragonfly Reverb", by: "Michael Willis", use: "Hall, room, plate and early-reflection reverbs", license: "GPLv3", url: "https://michaelwillis.github.io/dragonfly-reverb/" },
          { name: "IEM Plug-in Suite", by: "IEM, University of Music and Performing Arts Graz", use: "Spatial audio and utility plugins", license: "GPLv3", url: "https://plugins.iem.at" },
          { name: "LSP Plugins", by: "Vladimir Sadovnikov and the LSP project", use: "Linux Studio Plugins collection", license: "LGPLv3", url: "https://lsp-plug.in" },
          { name: "Surge XT", by: "the Surge Synth Team", use: "Surge XT synth and effects", license: "GPLv3", url: "https://surge-synthesizer.github.io" },
          { name: "x42 plugins", by: "Robin Gareus", use: "Compressor, limiter and EQ", license: "GPLv2+", url: "https://x42-plugins.com" },
          { name: "ZAM Plugins", by: "Damien Zammit", use: "Compressors, EQs, gates, delays and saturation", license: "GPLv2+", url: "https://github.com/zamaudio/zam-plugins" },
        ],
      },
    ],
    specs: [
      ["Type", "Digital audio workstation (DAW)"],
      ["Engine", "Tracktion Engine"],
      ["License", "Free software, GNU GPL v3"],
      ["Plugin hosting", "VST3 · AU · LV2"],
      ["Built-in effects", "All Airwindows effects, plus bundled open-source plugins"],
      ["Export", "Mix or stems as WAV or AIFF"],
    ],
  },

  soulcrusher: {
    gallery: [
      shot("soulcrusher", "main", 1202, 828, "SoulCrusher v2.9.0: five distortion characters around the morph knob, with gate, distortion and Global EQ"),
    ],
    specs: [
      ["Type", "High-gain distortion and neural amp engine"],
      ["Formats", "VST3 · Standalone"],
      ["Platform", "Windows 10/11 (64-bit)"],
      ["Engine", "NAM, including Architecture 2 (A2) models"],
      ["Distortion types", "5, each a real NAM capture, with crossfade morphing"],
      ["Signal chain", "Noise gate · 5-band EQ · pre/post boost · ±12 st pitch shifter · IR loader"],
    ],
  },
};
