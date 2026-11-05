import { Icon } from "@/components/Icons";
import ContactForm from "@/components/ContactForm";
import { HeroGroup, HeroItem, Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <HeroGroup>
          <HeroItem>
            <span className="eyebrow">Contact</span>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Get in touch.
            </h1>
            <p className="mt-4 max-w-md text-lg text-muted">
              Questions about a plugin, a download link, or just want to talk tone and neural amp modeling —
              fill out the form or email us directly. We usually reply within a couple of business days.
            </p>
          </HeroItem>

          <HeroItem className="mt-10 flex flex-col gap-4">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 text-sm text-foreground hover:text-accent-2"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface-2 text-accent-2">
                <Icon name="mail" className="h-5 w-5" />
              </span>
              {site.email}
            </a>
            <div className="flex items-center gap-4 pl-1">
              <a href={site.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-foreground">
                <Icon name="github" className="h-5 w-5" />
              </a>
              <a href={site.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter / X" className="text-muted hover:text-foreground">
                <Icon name="twitter" className="h-5 w-5" />
              </a>
              <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-foreground">
                <Icon name="linkedin" className="h-5 w-5" />
              </a>
            </div>
          </HeroItem>
        </HeroGroup>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
