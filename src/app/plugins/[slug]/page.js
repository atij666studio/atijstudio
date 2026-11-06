import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icons";
import { HeroGroup, HeroItem, Reveal } from "@/components/motion/Reveal";
import { Credits, GallerySection, Highlights, Overview, Specs } from "@/components/ProductSections";
import { productDetails } from "@/lib/productDetails";
import { asset, products, site } from "@/lib/site";

// One page per product at /plugins/<slug>/. SoulCrusher has its own
// hand-made page (src/app/plugins/soulcrusher), so it's left out here.
const CUSTOM_PAGES = ["soulcrusher"];

export const dynamicParams = false;

export function generateStaticParams() {
  return products.filter((p) => p.slug && !CUSTOM_PAGES.includes(p.slug)).map((p) => ({ slug: p.slug }));
}

function find(slug) {
  return products.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = find(slug);
  if (!product) return {};
  return { title: product.name, description: `${product.tagline}. ${product.description}` };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = find(slug);
  if (!product) notFound();

  const details = productDetails[slug] ?? {};
  const available = product.status === "available";
  const hero = product.image;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="grid-glow absolute inset-0 opacity-60" aria-hidden="true" />
        <HeroGroup className="shell relative flex flex-col items-center gap-5 pb-16 pt-20 text-center">
          <HeroItem>
            {available ? (
              <span className="tag-live">Available now{product.version ? ` — ${product.version}` : ""}</span>
            ) : (
              <span className="tag">Coming soon</span>
            )}
          </HeroItem>
          <HeroItem>
            <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">{product.name}</h1>
          </HeroItem>
          <HeroItem>
            <p className="max-w-2xl text-lg text-muted sm:text-xl">{product.tagline}</p>
          </HeroItem>
          <HeroItem>
            <p className="text-sm font-medium text-accent-2">Free · no account or sign-up required</p>
          </HeroItem>
          <HeroItem className="mt-2 flex flex-wrap items-center justify-center gap-3">
            {available && product.downloadUrl ? (
              <a href={product.downloadUrl} target="_blank" rel="noreferrer" className="btn-primary">
                Download {product.name} <Icon name="download" className="h-4 w-4" />
              </a>
            ) : (
              <span className="btn-primary cursor-not-allowed opacity-50" aria-disabled="true">
                {available ? "Download — coming soon" : "Coming soon"} <Icon name="download" className="h-4 w-4" />
              </span>
            )}
            <Link href="/plugins" className="btn-secondary">
              All plugins
            </Link>
          </HeroItem>
          {product.statusNote && !available && (
            <HeroItem>
              <p className="max-w-xl text-sm text-muted">{product.statusNote}</p>
            </HeroItem>
          )}
        </HeroGroup>

        {hero && (
          <Reveal y={40} className="shell relative pb-20">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
              <Image
                src={asset(hero.src)}
                alt={hero.alt}
                width={hero.width}
                height={hero.height}
                priority
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        )}
      </section>

      <Overview details={details} />
      <Highlights details={details} />
      {/* Gallery: skip the screenshot already shown at the top of the page */}
      <GallerySection
        details={{ ...details, gallery: (details.gallery ?? []).filter((g) => g.src !== hero?.src) }}
        name={product.name}
      />
      <Specs details={details} />
      <Credits details={details} />

      {/* Closing call to action */}
      <section className="grid-glow">
        <Reveal className="shell flex flex-col items-start gap-6 py-24" as="div">
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {available ? `Get ${product.name}.` : `${product.name} is coming soon.`}
          </h2>
          <p className="max-w-lg text-muted">
            {available
              ? site.distribution
              : "It's free when it lands. Get in touch if you'd like to hear when it's out."}
          </p>
          <div className="flex flex-wrap gap-3">
            {available && product.downloadUrl ? (
              <a href={product.downloadUrl} target="_blank" rel="noreferrer" className="btn-primary">
                Download {product.name} <Icon name="download" className="h-4 w-4" />
              </a>
            ) : available ? (
              <span className="btn-primary cursor-not-allowed opacity-50" aria-disabled="true">
                Download — coming soon <Icon name="download" className="h-4 w-4" />
              </span>
            ) : (
              <Link href="/contact" className="btn-primary">
                Get in touch <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            )}
            <Link href="/plugins" className="btn-secondary">
              See all plugins
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
