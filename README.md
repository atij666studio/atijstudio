# Atiij Studio — website

A Next.js + Tailwind CSS site for Atiij Studio.

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
- Swap the sample projects in `site.js` for real work, and the "About" page
  copy in [src/app/about/page.js](src/app/about/page.js) for your real story.
- Replace the placeholder logomark in [src/components/Logo.js](src/components/Logo.js)
  and [src/app/icon.svg](src/app/icon.svg) with a real logo, if you get one made.
- The contact form currently opens the visitor's email client with a
  pre-filled message (see [src/components/ContactForm.js](src/components/ContactForm.js)).
  That works with zero setup, but if you'd rather have submissions land
  directly (no email app popup), it can be wired to a form service or a
  small API route instead.

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
