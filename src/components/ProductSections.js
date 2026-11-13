import Gallery from "@/components/Gallery";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

// Shared sections for product pages: overview, highlights, gallery, specs.
// Each renders nothing when its data is missing, so a product can have any mix.

export function Overview({ details }) {
  if (!details?.overview?.length) return null;
  return (
    <section className="border-b border-border py-24">
      <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <span className="eyebrow">Overview</span>
          {details.headline && (
            <h2 className="mt-4 max-w-md font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {details.headline}
            </h2>
          )}
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-5 text-lg text-muted">
          {details.overview.map((p) =>
            typeof p === "string" ? (
              <p key={p.slice(0, 40)}>{p}</p>
            ) : (
              <p key={(p.lead || p.text).slice(0, 40)}>
                {p.lead && <span className="font-medium text-foreground">{p.lead} </span>}
                {p.text}
              </p>
            ),
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function Highlights({ details, title = "What's inside" }) {
  if (!details?.highlights?.length) return null;
  return (
    <section className="border-b border-border py-24">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">Features</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">{title}</h2>
        </Reveal>
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {details.highlights.map((h) => (
            <RevealItem key={h.title} className="card">
              <h3 className="font-display text-lg font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm text-muted">{h.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export function GallerySection({ details, name }) {
  if (!details?.gallery?.length) return null;
  return (
    <section className="border-b border-border py-24">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">Gallery</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">See it in action.</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          <Gallery images={details.gallery} name={name} layout={details.galleryLayout} />
        </Reveal>
      </div>
    </section>
  );
}

export function Credits({ details }) {
  if (!details?.credits?.length) return null;
  return (
    <section id="credits" className="scroll-mt-20 border-b border-border py-24">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Open source</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">Credits.</h2>
          <p className="mt-4 text-muted">
            Made possible by these open-source projects. Each keeps its own license, included with the app.
          </p>
        </Reveal>
        {details.credits.map((group) => (
          <Reveal key={group.title} className="mt-12">
            <h3 className="font-display text-xl font-semibold">{group.title}</h3>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {group.items.map((c) => (
                <li key={c.name} className="grid gap-1 py-4 sm:grid-cols-[220px_1fr_auto] sm:items-baseline sm:gap-6">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-foreground underline decoration-border underline-offset-4 hover:text-accent-2"
                  >
                    {c.name}
                  </a>
                  <span className="text-sm text-muted">
                    {c.use} · by {c.by}
                  </span>
                  {c.license && <span className="tag justify-self-start sm:justify-self-end">{c.license}</span>}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// Inline `code` in install steps.
function withCode(text) {
  return text.split("`").map((part, i) =>
    i % 2 ? (
      <code key={i} className="rounded bg-surface-2 px-1.5 py-0.5 text-xs text-foreground">
        {part}
      </code>
    ) : (
      part
    )
  );
}

export function Install({ details }) {
  const install = details?.install;
  if (!install) return null;
  return (
    <section id="install" className="scroll-mt-20 border-b border-border py-24">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Installing</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">Installing, step by step.</h2>
          <p className="mt-4 text-muted">
            These are free builds from an independent developer, so they aren&apos;t code-signed by Microsoft or
            Apple. The first time you open them, your computer may warn you. That&apos;s expected, and the steps
            below show what to click.
          </p>
        </Reveal>
        <RevealGroup className="mt-12 grid gap-5 lg:grid-cols-3">
          {install.platforms.map((p) => (
            <RevealItem key={p.name} className="card">
              <h3 className="font-display text-xl font-semibold">{p.name}</h3>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm text-muted marker:text-accent-2">
                {p.steps.map((s) => (
                  <li key={s}>{withCode(s)}</li>
                ))}
              </ol>
              {p.tip && <p className="mt-4 border-t border-border pt-4 text-xs text-muted">{withCode(p.tip)}</p>}
            </RevealItem>
          ))}
        </RevealGroup>
        {install.after && (
          <Reveal>
            <p className="mt-8 max-w-2xl text-sm text-muted">{withCode(install.after)}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function Specs({ details }) {
  if (!details?.specs?.length) return null;
  return (
    <section className="border-b border-border py-24">
      <div className="shell grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
        <Reveal>
          <span className="eyebrow">Specs</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">Tech specs.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="divide-y divide-border border-y border-border">
            {details.specs.map(([label, value]) => (
              <div key={label} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
                <dt className="text-sm font-medium text-foreground">{label}</dt>
                <dd className="text-sm text-muted">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
