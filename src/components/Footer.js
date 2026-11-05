import Link from "next/link";
import Logo from "./Logo";
import { Icon } from "./Icons";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="shell flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-3 text-sm text-muted">{site.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted">Site</p>
            <ul className="mt-3 flex flex-col gap-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted">Connect</p>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 text-sm text-muted hover:text-foreground"
                >
                  <Icon name="mail" className="h-4 w-4" /> {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3 pt-1">
                <a
                  href={site.social.github}
                  aria-label="GitHub"
                  className="text-muted hover:text-foreground"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="github" className="h-5 w-5" />
                </a>
                <a
                  href={site.social.twitter}
                  aria-label="Twitter / X"
                  className="text-muted hover:text-foreground"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="twitter" className="h-5 w-5" />
                </a>
                <a
                  href={site.social.linkedin}
                  aria-label="LinkedIn"
                  className="text-muted hover:text-foreground"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="linkedin" className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <p className="shell text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
