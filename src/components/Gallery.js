"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Icon } from "@/components/Icons";
import { asset } from "@/lib/site";

// Screenshot grid. "feature" layout: the first image spans the full width,
// the rest sit two per row. "compact" layout: an even grid for small plugin
// windows. Click any image to view it full-size (Esc closes, arrows step).
export default function Gallery({ images, name, layout = "feature" }) {
  const compact = layout === "compact";
  const [open, setOpen] = useState(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir) => setOpen((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    function onKey(e) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const current = open === null ? null : images[open];

  return (
    <>
      <div className={compact ? "grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4" : "grid gap-5 sm:grid-cols-2"}>
        {images.map((img, i) => (
          <figure key={img.src} className={!compact && i === 0 ? "sm:col-span-2" : ""}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-xl border border-border bg-surface-2 transition-colors hover:border-accent/50"
              aria-label={`View larger: ${img.caption}`}
            >
              <Image
                src={asset(img.src)}
                alt={`${name}: ${img.caption}`}
                width={img.width}
                height={img.height}
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.015]"
              />
            </button>
            <figcaption className="mt-2 text-sm text-muted">{img.caption}</figcaption>
          </figure>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4 sm:p-10"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-surface-2 p-2 text-foreground hover:text-accent-2"
            aria-label="Close"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
          <Image
            src={asset(current.src)}
            alt={`${name}: ${current.caption}`}
            width={current.width}
            height={current.height}
            className="h-auto max-h-[80vh] w-auto max-w-full rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="mt-4 flex items-center gap-4 text-sm text-muted" onClick={(e) => e.stopPropagation()}>
            {images.length > 1 && (
              <button type="button" onClick={() => step(-1)} className="btn-secondary px-3 py-1.5" aria-label="Previous">
                ‹
              </button>
            )}
            <span>
              {current.caption} · {open + 1} / {images.length}
            </span>
            {images.length > 1 && (
              <button type="button" onClick={() => step(1)} className="btn-secondary px-3 py-1.5" aria-label="Next">
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
