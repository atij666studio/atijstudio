import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { HeroGroup, HeroItem, Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { asset, availableFirst, products, series, site } from "@/lib/site";

export const metadata = {
  title: "Plugins",
  description: "Every plugin and product line from ATIJ STUDIO.",
};

export default function PluginsPage() {
  return (
    <>
      <section className="border-b border-border py-20">
        <HeroGroup className="shell">
          <HeroItem>
            <span className="eyebrow">Plugins</span>
          </HeroItem>
          <HeroItem>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Everything we&apos;re building.
            </h1>
          </HeroItem>
          <HeroItem>
            <p className="mt-4 max-w-xl text-lg text-muted">
              Finished plugins, all free — no account, no sign-up.
            </p>
            <p className="mt-3 text-sm font-medium text-accent-2">{site.distribution}</p>
          </HeroItem>
        </HeroGroup>
      </section>

      {series.map((group) => {
        const items = availableFirst(products.filter((p) => p.series === group.key));
        if (items.length === 0) return null;
        return (
          <section key={group.key} id={group.key} className="scroll-mt-20 border-b border-border py-20">
            <div className="shell">
              <Reveal>
                <h2 className="font-display text-3xl font-semibold tracking-tight">{group.title}</h2>
                <p className="mt-2 max-w-xl text-muted">{group.description}</p>
              </Reveal>
              <RevealGroup className="mt-10 grid gap-6 md:grid-cols-2">
                {items.map((product) => {
                  const available = product.status === "available";
                  const Card = (
                    <div
                      className={`card h-full transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 ${
                        available ? "border-accent/30" : ""
                      }`}
                    >
                      {product.image && (
                        <div className="-mx-1 -mt-1 mb-5 aspect-[16/10] overflow-hidden rounded-lg border border-border bg-surface-2">
                          <Image
                            src={asset(product.image.src)}
                            alt={product.image.alt}
                            width={product.image.width}
                            height={product.image.height}
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                      )}
                      <div className="flex items-center justify-between gap-3">
                        {available ? <span className="tag-live">Available now</span> : <span className="tag">Coming soon</span>}
                        {available && product.version && <span className="text-xs text-muted">{product.version}</span>}
                      </div>
                      <h3 className="mt-4 font-display text-xl font-semibold">{product.name}</h3>
                      <p className="mt-2 text-sm text-muted">{product.tagline}</p>
                      {product.price && <p className="mt-1 text-sm text-accent-2">{product.price}</p>}
                      <p className="mt-3 text-sm text-muted">{product.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {product.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {product.slug && (
                        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent-2">
                          Learn more <Icon name="arrow-right" className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  );
      
                  return (
                    <RevealItem key={product.name}>
                      {product.slug ? <Link href={`/plugins/${product.slug}`}>{Card}</Link> : Card}
                    </RevealItem>
                  );
                })}
              </RevealGroup>
            </div>
          </section>
        );
      })}
    </>
  );
}
