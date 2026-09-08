import Link from "next/link";
import { Icon } from "@/components/Icons";
import { services } from "@/lib/site";

export const metadata = {
  title: "Services",
  description: "Web and app development, custom software, product design, and consulting.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border py-20">
        <div className="shell">
          <span className="eyebrow">Services</span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Everything you need to go from idea to shipped product.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted">
            We work with founders and teams at every stage — from a first prototype to scaling an existing product.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="shell grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="card">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-surface-2 text-accent-2">
                <Icon name={service.icon} className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold">{service.title}</h2>
              <p className="mt-2 text-sm text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid-glow border-t border-border">
        <div className="shell flex flex-col items-start gap-6 py-20">
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight">
            Not sure which of these you need?
          </h2>
          <p className="max-w-lg text-muted">
            That&apos;s fine — most projects don&apos;t fit neatly into one box. Tell us what you&apos;re trying to do and we&apos;ll help figure out the right scope.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a conversation <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
