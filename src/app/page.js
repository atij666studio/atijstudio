import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { HeroGroup, HeroItem, Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import ScrollCue from "@/components/motion/ScrollCue";
import { products, site, technology } from "@/lib/site";

const flagship = products.find((p) => p.slug === "soulcrusher");
const otherProducts = products.filter((p) => p.slug !== "soulcrusher");

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grid-glow relative border-b border-border">
        <HeroGroup className="shell flex flex-col items-start gap-6 py-24 md:py-32">
          <HeroItem>
            <span className="eyebrow">Neural amp modeling, built from scratch</span>
          </HeroItem>
          <HeroItem>
            <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
              Amp models that <span className="text-gradient">turn like a real amp</span> — not a preset switcher.
            </h1>
          </HeroItem>
          <HeroItem>
            <p className="max-w-xl text-lg text-muted">{site.description}</p>
          </HeroItem>
          <HeroItem className="mt-2 flex flex-wrap gap-3">
            <Link href="/technology" className="btn-primary">
              See how it works <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
            <Link href="/plugins" className="btn-secondary">
              Explore plugins
            </Link>
          </HeroItem>
        </HeroGroup>
        <ScrollCue className="absolute bottom-8 left-0 right-0 hidden sm:flex" />
      </section>

      {/* Technology teaser */}
      <section className="border-b border-border py-24">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">{technology.eyebrow}</span>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {technology.title}
            </h2>
            <p className="mt-4 max-w-2xl text-muted">{technology.summary}</p>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-3">
            {technology.howItWorks.map((item) => (
              <RevealItem key={item.step}>
                <span className="font-display text-sm text-accent-2">{item.step}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.15}>
            <Link
              href="/technology"
              className="mt-10 inline-flex items-center gap-1 text-sm text-muted hover:text-foreground"
            >
              Read the full technical breakdown <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Flagship product */}
      {flagship && (
        <section className="border-b border-border py-24">
          <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <span className="tag-live">Available now</span>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {flagship.name} <span className="text-muted font-normal">{flagship.version}</span>
              </h2>
              <p className="mt-3 text-lg text-muted">{flagship.tagline}</p>
              {flagship.price && <p className="mt-2 text-sm font-medium text-accent-2">{flagship.price}</p>}
              <p className="mt-4 max-w-lg text-sm text-muted">{flagship.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {flagship.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/plugins/soulcrusher" className="btn-primary">
                  Get SoulCrusher <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1} y={32} className="flex items-center justify-center rounded-2xl border border-border bg-surface p-10">
              <Image
                src="/soulcrusher/logo.png"
                alt="SoulCrusher logomark"
                width={220}
                height={220}
                className="h-auto w-40 sm:w-52"
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* More from the studio */}
      <section className="border-b border-border py-24">
        <div className="shell">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">In development</span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">More from the studio.</h2>
            </div>
            <Link
              href="/plugins"
              className="hidden text-sm text-muted hover:text-foreground sm:inline-flex sm:items-center sm:gap-1"
            >
              See all plugins <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-3">
            {otherProducts.map((product) => (
              <RevealItem key={product.name} className="card">
                <span className="tag">In development</span>
                <h3 className="mt-4 font-display text-lg font-semibold">{product.name}</h3>
                <p className="mt-2 text-sm text-muted">{product.tagline}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="grid-glow">
        <Reveal className="shell flex flex-col items-start gap-6 py-24 text-left" as="div">
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Want to hear about what&apos;s next?
          </h2>
          <p className="max-w-lg text-muted">
            Get in touch if you want early access to upcoming plugins, or just want to talk tone.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in touch <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
