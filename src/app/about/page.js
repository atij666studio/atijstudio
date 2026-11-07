import Link from "next/link";
import { Icon } from "@/components/Icons";
import { HeroGroup, HeroItem, Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import SupportButton from "@/components/SupportButton";
import { credits, site, values } from "@/lib/site";

export const metadata = {
  title: "About",
  description: `The story behind ${site.name}: a one-man studio built out of a lifelong love of guitars and technology.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Story */}
      <section className="border-b border-border py-20">
        <HeroGroup className="shell">
          <HeroItem>
            <span className="eyebrow">About {site.name}</span>
          </HeroItem>
          <HeroItem>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Built out of passion, powered by curiosity.
            </h1>
          </HeroItem>
          <HeroItem className="mt-8 flex max-w-2xl flex-col gap-5 text-lg text-muted">
            <p>
              {site.name} is a one-man creative venture born from a lifelong passion for guitars and technology, and
              that passion has grown into an obsession with guitar gear, amp modeling, audio software, and plugin
              development.
            </p>
            <p>
              Everything here starts with an idea and is built in my spare time, alongside a full-time job. With a lot
              of curiosity, experimentation, and a little help from AI, those ideas gradually become reality.
            </p>
          </HeroItem>
        </HeroGroup>
      </section>

      {/* Thank you + credits */}
      <section id="thanks" className="scroll-mt-20 border-b border-border py-20">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Thank you</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">Standing on the shoulders of giants.</h2>
            <p className="mt-4 text-lg text-muted">
              A big thank you to Steve Atkinson and the Neural Amp Modeler (NAM) project, TONE3000, and everyone in the
              community who generously shares their captures and tones. Your contributions help make this ecosystem
              what it is today.
            </p>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {credits.map((c) => (
              <RevealItem key={c.name}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="card block h-full transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
                >
                  <h3 className="font-display text-lg font-semibold">{c.name}</h3>
                  <p className="mt-1 text-sm text-accent-2">{c.by}</p>
                  <p className="mt-3 text-sm text-muted">{c.note}</p>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal>
            <p className="mt-10 max-w-2xl text-sm text-muted">
              {site.name} is an independent project and isn&apos;t affiliated with or endorsed by any of the projects
              above. Each one keeps its own license; see each app&apos;s third-party notices for details. ToneMatic
              ships with many more open-source projects:{" "}
              <Link href="/plugins/tonematic/#credits" className="text-accent-2 underline underline-offset-4">
                see the full ToneMatic credits
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Support */}
      <section className="border-b border-border py-20">
        <Reveal className="shell flex flex-col items-start gap-5">
          <span className="eyebrow">Support</span>
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight">Like what I do?</h2>
          <p className="max-w-xl text-lg text-muted">
            Everything here is free and always will be. If my tools help your music and you&apos;d like to support me,
            hit <span className="text-foreground">Show your support</span>, here or at the top of any page. Every tip
            goes back into building more.
          </p>
          <SupportButton align="left" />
        </Reveal>
      </section>

      {/* Values */}
      <section className="border-b border-border py-20">
        <div className="shell">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight">What I believe</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <RevealItem key={value.title}>
                <h3 className="font-display text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted">{value.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="grid-glow">
        <Reveal className="shell flex flex-col items-start gap-6 py-20">
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight">
            Built out of passion, inspired by the love of guitars and technology.
          </h2>
          <p className="max-w-lg text-muted">Questions, ideas, or just want to talk tone? I&apos;d love to hear from you.</p>
          <Link href="/contact" className="btn-primary">
            Get in touch <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
