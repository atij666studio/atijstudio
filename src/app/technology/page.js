import Link from "next/link";
import { Icon } from "@/components/Icons";
import { AnimatedPath } from "@/components/motion/AnimatedPath";
import { HeroGroup, HeroItem, Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { technology } from "@/lib/site";

export const metadata = {
  title: "Technology",
  description: "How ATIJ STUDIO's parametric neural amp modeling engine works.",
};

export default function TechnologyPage() {
  return (
    <>
      <section className="border-b border-border py-20">
        <HeroGroup className="shell">
          <HeroItem>
            <span className="eyebrow">{technology.eyebrow}</span>
          </HeroItem>
          <HeroItem>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {technology.title}
            </h1>
          </HeroItem>
          <HeroItem>
            <p className="mt-4 max-w-2xl text-lg text-muted">{technology.summary}</p>
          </HeroItem>
        </HeroGroup>
      </section>

      {/* Stepped vs continuous diagram */}
      <section className="border-b border-border py-20">
        <div className="shell">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight">Stepped switching vs. true interpolation</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              Some parametric <code className="rounded bg-surface-2 px-1.5 py-0.5 text-xs">.nam</code> files bundle a few
              full captures into one file and jump between them at fixed knob positions. Ours trains a network that
              takes the knob position as an input alongside the audio — so it responds in between, and beyond, the
              settings it was actually captured at.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2" stagger={0.15}>
            <RevealItem className="card">
              <p className="text-xs font-medium uppercase tracking-wide text-muted">Typical &quot;stepped&quot; parametric</p>
              <svg viewBox="0 0 240 120" className="mt-6 w-full text-muted" fill="none">
                <line x1="10" y1="105" x2="230" y2="105" stroke="currentColor" strokeOpacity="0.3" />
                <line x1="10" y1="10" x2="10" y2="105" stroke="currentColor" strokeOpacity="0.3" />
                <AnimatedPath
                  d="M10 95 H70 V70 H130 V45 H190 V20 H230"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="70" cy="70" r="3" fill="currentColor" />
                <circle cx="130" cy="45" r="3" fill="currentColor" />
                <circle cx="190" cy="20" r="3" fill="currentColor" />
              </svg>
              <p className="mt-4 text-sm text-muted">Turning the knob jumps from one captured setting to the next.</p>
            </RevealItem>

            <RevealItem className="card border-accent/30">
              <p className="text-xs font-medium uppercase tracking-wide text-accent-2">ATIJ&apos;s parametric engine</p>
              <svg viewBox="0 0 240 120" className="mt-6 w-full" fill="none">
                <defs>
                  <linearGradient id="curve-gradient" x1="0" y1="0" x2="240" y2="0">
                    <stop offset="0%" stopColor="var(--accent)" />
                    <stop offset="100%" stopColor="var(--accent-2)" />
                  </linearGradient>
                </defs>
                <line x1="10" y1="105" x2="230" y2="105" stroke="currentColor" strokeOpacity="0.2" className="text-muted" />
                <line x1="10" y1="10" x2="10" y2="105" stroke="currentColor" strokeOpacity="0.2" className="text-muted" />
                <AnimatedPath
                  d="M10 95 C 60 95, 60 20, 120 55 C 170 85, 180 20, 230 20"
                  stroke="url(#curve-gradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  duration={1.6}
                  delay={0.2}
                />
              </svg>
              <p className="mt-4 text-sm text-muted">The response sweeps smoothly across the whole range of the knob.</p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-border py-20">
        <div className="shell">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight">How it works</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-8 sm:grid-cols-3">
            {technology.howItWorks.map((item) => (
              <RevealItem key={item.step}>
                <span className="font-display text-sm text-accent-2">{item.step}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="py-20">
        <div className="shell">
          <Reveal className="card max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-wide text-muted">Status</p>
            <p className="mt-3 text-sm text-muted">{technology.status}</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <Link href="/contact" className="btn-primary">
              Get in touch about it <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
