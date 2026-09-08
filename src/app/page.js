import Link from "next/link";
import { Icon } from "@/components/Icons";
import { process, projects, services, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grid-glow border-b border-border">
        <div className="shell flex flex-col items-start gap-6 py-24 md:py-32">
          <span className="eyebrow">Software & product studio</span>
          <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            We design and build <span className="text-gradient">software people enjoy using.</span>
          </h1>
          <p className="max-w-xl text-lg text-muted">{site.description}</p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Start a project <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
            <Link href="/work" className="btn-secondary">
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="border-b border-border py-24">
        <div className="shell">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">What we do</span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                A small team that covers the whole build.
              </h2>
            </div>
            <Link href="/services" className="hidden text-sm text-muted hover:text-foreground sm:inline-flex sm:items-center sm:gap-1">
              See all services <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="card">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface-2 text-accent-2">
                  <Icon name={service.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="border-b border-border py-24">
        <div className="shell">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Selected work</span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">Recent projects.</h2>
            </div>
            <Link href="/work" className="hidden text-sm text-muted hover:text-foreground sm:inline-flex sm:items-center sm:gap-1">
              View all work <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project, i) => (
              <div key={project.title} className="card p-0 overflow-hidden">
                <div
                  className="h-36 w-full"
                  style={{
                    background:
                      i % 2 === 0
                        ? "linear-gradient(135deg, var(--accent), var(--accent-2))"
                        : "linear-gradient(135deg, var(--accent-2), var(--accent))",
                  }}
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold">{project.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{project.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-border py-24">
        <div className="shell">
          <span className="eyebrow">How we work</span>
          <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold tracking-tight">
            A straightforward process, from idea to launch.
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step}>
                <span className="font-display text-sm text-accent-2">{item.step}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="grid-glow">
        <div className="shell flex flex-col items-start gap-6 py-24 text-left">
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="max-w-lg text-muted">
            Tell us what you&apos;re building — we&apos;ll reply with honest thoughts on scope, timeline, and whether we&apos;re the right fit.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in touch <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
