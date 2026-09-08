import Link from "next/link";
import { Icon } from "@/components/Icons";
import { products, site } from "@/lib/site";

export const metadata = {
  title: "Plugins",
  description: "Every plugin and product line from Atiij Studio.",
};

export default function PluginsPage() {
  return (
    <>
      <section className="border-b border-border py-20">
        <div className="shell">
          <span className="eyebrow">Plugins</span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Everything we&apos;re building.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted">
            One shipped product so far, and several more in active development.
          </p>
          <p className="mt-3 text-sm font-medium text-accent-2">{site.distribution}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="shell grid gap-6 md:grid-cols-2">
          {products.map((product) => {
            const available = product.status === "available";
            const Card = (
              <div className={`card h-full ${available ? "border-accent/30" : ""}`}>
                <div className="flex items-center justify-between gap-3">
                  {available ? <span className="tag-live">Available now</span> : <span className="tag">In development</span>}
                  {product.version && <span className="text-xs text-muted">{product.version}</span>}
                </div>
                <h2 className="mt-4 font-display text-xl font-semibold">{product.name}</h2>
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
                    View plugin <Icon name="arrow-right" className="h-4 w-4" />
                  </span>
                )}
              </div>
            );

            return product.slug ? (
              <Link key={product.name} href={`/plugins/${product.slug}`}>
                {Card}
              </Link>
            ) : (
              <div key={product.name}>{Card}</div>
            );
          })}
        </div>
      </section>
    </>
  );
}
