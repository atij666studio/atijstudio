# Atiij Studio — website

A Next.js + Tailwind CSS site for Atiij Studio — neural amp modeling and
guitar tone software (SoulCrusher, the Parametric NAM engine, and the
AtiNAMatiC / One Knob / Nex product lines).

## Running it locally

```bash
npm install   # only needed once, or after pulling new dependencies
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Editing content

Almost all of the text — the tagline, services, sample projects, contact
email, and social links — lives in one file:

- [src/lib/site.js](src/lib/site.js)

Edit that file and every page that uses it updates automatically. No need to
hunt through each page.

Things still worth doing before this goes live:

- Replace the placeholder `email`, `url`, and `social` links in `site.js`.
- **Wire up the real SoulCrusher download.** The `/plugins/soulcrusher` page
  currently sends people to the contact form instead of a direct download,
  because the only installer found in the projects folder was tagged
  `v1.0.0` while the plugin's own README says `v2.8.0` — shipping the old
  build under the current version number would be worse than not linking
  one yet. Once there's a current build: either drop it in `public/downloads/`
  and link to it directly (fine for occasional downloads, but a ~35MB+ binary
  bloats the git repo over time), or upload it as a GitHub Release asset /
  object storage (S3, Cloudflare R2, Backblaze) and link to that URL instead.
- Swap the "In development" product cards in `site.js` (`products` array)
  to `status: "available"` as each one actually ships, and give it a `slug`
  once it has its own page.
- Fill in the real About page story in [src/app/about/page.js](src/app/about/page.js).
- Set `donateUrl` in `site.js` once you've picked a donation platform (Ko-fi,
  Buy Me a Coffee, PayPal.me, etc.) — it's `null` right now, which hides the
  donate link everywhere it would otherwise appear.
- The contact form currently opens the visitor's email client with a
  pre-filled message (see [src/components/ContactForm.js](src/components/ContactForm.js)).
  That works with zero setup, but if you'd rather have submissions land
  directly (no email app popup), it can be wired to a form service or a
  small API route instead.

## Brand assets

The SoulCrusher logo, wordmark, and background art in `public/soulcrusher/`
were copied from `SoulCrusher/Resources/` in the main projects folder. If
that art changes there, re-copy it here to keep the site in sync.

## Scroll animation

Sections fade/slide in as you scroll, similar to Apple or Neural DSP's
sites, using [Framer Motion](https://motion.dev). The building blocks live
in [src/components/motion/](src/components/motion/):

- **`Reveal`** — fades a section in once it scrolls into view. Wrap any
  block that isn't visible on first load.
- **`RevealGroup` / `RevealItem`** — same idea for a grid or list, but each
  item fades in slightly after the last (a "stagger").
- **`HeroGroup` / `HeroItem`** — like the above, but plays immediately on
  page load instead of waiting for scroll — use these for hero sections.
- **`ParallaxLayer`** — a background image that drifts slower than the page
  as you scroll past it (see the SoulCrusher hero).
- **`AnimatedPath`** — an SVG line that draws itself in on scroll (see the
  diagram on the Technology page).

Visitors with "reduce motion" turned on at the OS level automatically get
instant, non-animated versions of all of the above — that's handled once,
globally, in `MotionProvider`. When adding a new section, wrap it with one
of these instead of writing new animation code.

## Building for production

```bash
npm run build
npm start
```

## Deploying

This is a static-friendly Next.js app, so any of these work well and have
generous free tiers:

- **[Vercel](https://vercel.com/new)** — made by the Next.js team, zero config.
- **[Netlify](https://app.netlify.com/start)** — also zero config for Next.js.
- **GitHub Pages** — possible, but needs `next export`-style static config;
  Vercel or Netlify are the simpler path for this project.

Push this repo to GitHub, then connect it on whichever platform you pick —
it will build and deploy automatically on every push.
