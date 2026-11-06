"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Icon } from "./Icons";
import { nav, products } from "@/lib/site";

// Navbar button points at the featured product (see `featured` in src/lib/site.js).
const featured = products.find((p) => p.featured);
const featuredHref = featured?.downloadUrl ?? (featured?.slug ? `/plugins/${featured.slug}` : "/#featured");
const featuredLabel = featured ? `Get ${featured.name}` : null;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur transition-colors duration-300 ${
        scrolled ? "border-border/80 bg-background/85" : "border-transparent bg-background/30"
      }`}
    >
      <div
        className={`shell flex items-center justify-between transition-[height] duration-300 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  active ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href={featuredHref} className="btn-primary hidden md:inline-flex">
          {featuredLabel}
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="shell flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={featuredHref}
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 justify-center"
            >
              {featuredLabel}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
