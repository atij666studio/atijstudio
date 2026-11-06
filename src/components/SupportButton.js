"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icons";
import { site } from "@/lib/site";

// "Show your support" button with a small menu of tip links (PayPal, Buy Me a
// Coffee, Gumroad ...). The links live in `site.support` in src/lib/site.js.
// `align` sets which edge the menu lines up with; `block` makes the button
// full-width (mobile menu).
export default function SupportButton({ align = "right", block = false, className = "btn-primary" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    function onDown(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={`relative ${block ? "w-full" : "inline-block"}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`${className} ${block ? "w-full justify-center" : ""}`}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Icon name="heart" className="h-4 w-4" /> Show your support
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute top-full z-[60] mt-2 w-72 overflow-hidden rounded-xl border border-border bg-surface shadow-2xl ${
            block ? "left-0 right-0 w-auto" : align === "left" ? "left-0" : "right-0"
          }`}
        >
          <p className="border-b border-border px-4 py-3 text-xs text-muted">
            Everything here is free. If it helps your music, a tip keeps it going. Thank you!
          </p>
          <ul className="py-1">
            {site.support.map((s) =>
              s.url ? (
                <li key={s.name}>
                  <a
                    role="menuitem"
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm hover:bg-surface-2"
                  >
                    <span>
                      <span className="block font-medium text-foreground">{s.name}</span>
                      <span className="block text-xs text-muted">{s.note}</span>
                    </span>
                    <Icon name="external" className="h-4 w-4 text-accent-2" />
                  </a>
                </li>
              ) : (
                <li key={s.name} className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm opacity-50">
                  <span>
                    <span className="block font-medium text-foreground">{s.name}</span>
                    <span className="block text-xs text-muted">Coming soon</span>
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
