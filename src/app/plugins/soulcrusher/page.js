import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { ParallaxLayer } from "@/components/motion/Parallax";
import { HeroGroup, HeroItem, Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { products, site } from "@/lib/site";

const product = products.find((p) => p.slug === "soulcrusher");

export const metadata = {
  title: "SoulCrusher",
  description: product?.description,
};

const featureGroups = [
  {
    icon: "flame",
    title: "Five distortion types, one morphing engine",
    description:
      "BONEGRIND, NERVE RIPPER, SPINE BREAKER, FLESH MELT, and SOUL CRUSHER — each driven by its own real captured NAM model. All five stay loaded at once; the center knob crossfade-morphs between them instead of switching, while five satellite knobs sweep each type's own captured gain range.",
  },
  {
    icon: "waveform",
    title: "NAM Architecture 2 engine",
    description:
      "Load any .nam capture — amp, cab, or full chain — including the newer A2-format models, with full backward compatibility for legacy captures. Built-in tone stack, input calibration, and IR loading with wet/dry blend.",
  },
  {
    icon: "layers",
    title: "A full signal chain",
    description:
      "Noise gate, 5-band parametric EQ with a visual spectrum analyzer, a pre/post boost stage, and a phase-vocoder pitch shifter (±12 semitones) round out the chain before it hits your DAW.",
  },
  {
    icon: "code",
    title: "Built for real sessions",
    description:
      "Full preset management with A/B comparison and unlimited undo, assignable MIDI CC mapping with MIDI learn, real-time input/output metering, and a CPU usage monitor.",
  },
];

export default function SoulCrusherPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <ParallaxLayer src="/soulcrusher/bg.png" className="opacity-40" strength={25} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,7,7,0.55) 0%, rgba(10,7,7,0.85) 60%, var(--background) 100%)",
          }}
          aria-hidden="true"
        />

        <HeroGroup className="shell relative flex flex-col items-start gap-6 py-24 md:py-32">
          <HeroItem y={12}>
            <Image
              src="/soulcrusher/wordmark.png"
              alt="SoulCrusher"
              width={449}
              height={136}
              priority
              className="h-auto w-64 sm:w-80"
              style={{ filter: "invert(1) drop-shadow(0 0 20px rgba(217,43,43,0.6))" }}
            />
          </HeroItem>
          <HeroItem>
            <span className="tag-live">Available now — {product?.version}</span>
          </HeroItem>
          <HeroItem>
            <p className="max-w-xl text-lg text-muted">{product?.description}</p>
          </HeroItem>
          <HeroItem>
            <p className="text-sm font-medium text-accent-2">{product?.price} · no account or sign-up required</p>
          </HeroItem>

          <HeroItem className="mt-2 flex flex-wrap items-center gap-3">
            {product?.downloadUrl ? (
              <a href={product.downloadUrl} download className="btn-primary">
                Download for {product.platform?.split(" ")[0] ?? "Windows"} <Icon name="download" className="h-4 w-4" />
              </a>
            ) : (
              <span className="btn-primary cursor-not-allowed opacity-50" aria-disabled="true">
                Download — link going up soon <Icon name="download" className="h-4 w-4" />
              </span>
            )}
            <Link href="/technology" className="btn-secondary">
              How the engine works
            </Link>
          </HeroItem>

          {site.donateUrl && (
            <HeroItem>
              <a
                href={site.donateUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted underline decoration-border underline-offset-4 hover:text-accent-2"
              >
                Enjoying it? Support the studio with a donation
              </a>
            </HeroItem>
          )}

          {!product?.downloadUrl && (
            <HeroItem>
              <p className="text-xs text-muted">
                The one-click download for this page is still being wired up — no forms, no sign-up, just a straight
                link once it&apos;s live.
              </p>
            </HeroItem>
          )}
        </HeroGroup>
      </section>

      {/* Features */}
      <section className="border-b border-border py-24">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">What&apos;s inside</span>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight">
              A full high-gain signal chain, not just a distortion knob.
            </h2>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
            {featureGroups.map((feature) => (
              <RevealItem key={feature.title} className="card">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface-2 text-accent-2">
                  <Icon name={feature.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted">{feature.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Requirements + credits */}
      <section className="py-24">
        <RevealGroup className="shell grid gap-6 sm:grid-cols-2">
          <RevealItem className="card">
            <p className="text-xs font-medium uppercase tracking-wide text-muted">System requirements</p>
            <p className="mt-3 text-sm text-foreground">{product?.platform}</p>
            <p className="mt-1 text-sm text-muted">VST3 &amp; Standalone</p>
          </RevealItem>
          <RevealItem className="card">
            <p className="text-xs font-medium uppercase tracking-wide text-muted">Credits</p>
            <p className="mt-3 text-sm text-foreground">Created by Atij</p>
            <p className="mt-1 text-sm text-muted">UI design by Debleng</p>
          </RevealItem>
        </RevealGroup>
      </section>
    </>
  );
}
