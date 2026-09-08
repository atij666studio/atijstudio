import Link from "next/link";
import { Icon } from "@/components/Icons";
import { site, values } from "@/lib/site";

export const metadata = {
  title: "About",
  description: `The story and values behind ${site.name}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border py-20">
        <div className="shell">
          <span className="eyebrow">About</span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Built by a guitarist who wanted better tone software.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted">
            {site.name} is a small audio software studio building neural amp modeling and tone-shaping plugins —
            started by Atij, with UI design by Debleng. Replace this paragraph with your own founding story:
            what got you into building plugins, and what you want the studio to be known for.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-20">
        <div className="shell">
          <h2 className="font-display text-2xl font-semibold tracking-tight">What we believe</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="font-display text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid-glow">
        <div className="shell flex flex-col items-start gap-6 py-20">
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight">
            Want to work together, or just talk tone?
          </h2>
          <Link href="/contact" className="btn-primary">
            Get in touch <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
