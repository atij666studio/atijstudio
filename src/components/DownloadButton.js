"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/Icons";

// The download button used everywhere a product can be downloaded.
//
//  - product.releaseRepo ("owner/repo"): clicking opens a window listing every
//    file in that repo's latest GitHub Release, grouped by platform. Each link
//    downloads the file directly; visitors never see the GitHub page. A new
//    release shows up automatically, no website change needed.
//  - product.downloadUrl: a plain direct link.
//  - neither, or not "available": a disabled "coming soon" button.

const PLATFORMS = [
  { key: "Windows", match: /windows|win64|win-?x64|\.exe$|\.msi$/i },
  { key: "macOS", match: /mac|osx|darwin|\.dmg$|\.pkg$/i },
  { key: "Linux", match: /linux|appimage|\.deb$|\.rpm$/i },
];

// "NeuralStage-v0.2.1-Linux-ARM64-AppImage.zip" -> "ARM64 · AppImage"
function describe(name, platform) {
  const parts = name.replace(/\.(zip|exe|dmg|pkg|msi|appimage|tar\.gz|deb|rpm)$/i, "").split("-");
  const words = parts.filter((p) => !/^v?\d+(\.\d+)+$/i.test(p) && p.toLowerCase() !== platform.toLowerCase());
  const nice = {
    setup: "Installer",
    manual: "Manual install",
    standalone: "Standalone app",
    appimage: "AppImage",
    universal: "Universal (Apple Silicon + Intel)",
    arm64: "ARM64 (e.g. Raspberry Pi 5)",
    x64: "64-bit",
    x86_64: "x86_64 (64-bit PC)",
  };
  // drop the product name (first word) and map the rest to friendly labels
  return words
    .slice(1)
    .map((w) => nice[w.toLowerCase()] ?? w)
    .join(" · ");
}

function formatSize(bytes) {
  if (bytes >= 1048576) return `${(bytes / 1048576).toFixed(1)} MB`;
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

function guessPlatform() {
  if (typeof navigator === "undefined") return null;
  const ua = navigator.userAgent;
  if (/Windows/i.test(ua)) return "Windows";
  if (/Mac/i.test(ua)) return "macOS";
  if (/Linux/i.test(ua)) return "Linux";
  return null;
}

export default function DownloadButton({ product, className = "btn-primary" }) {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({ status: "idle" }); // idle | loading | ready | error
  const available = product.status === "available";
  const label = `Download ${product.name} — Free`;

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  async function openPicker() {
    setOpen(true);
    if (state.status === "ready" || state.status === "loading") return;
    setState({ status: "loading" });
    try {
      const res = await fetch(`https://api.github.com/repos/${product.releaseRepo}/releases/latest`, {
        headers: { Accept: "application/vnd.github+json" },
      });
      if (!res.ok) throw new Error(`GitHub returned ${res.status}`);
      const release = await res.json();
      const groups = PLATFORMS.map((p) => ({
        platform: p.key,
        files: (release.assets ?? [])
          .filter((a) => p.match.test(a.name))
          .map((a) => ({ name: a.name, url: a.browser_download_url, size: a.size, label: describe(a.name, p.key) })),
      })).filter((g) => g.files.length);
      setState({ status: "ready", version: release.tag_name, date: release.published_at, groups });
    } catch {
      setState({ status: "error" });
    }
  }

  if (!available || (!product.releaseRepo && !product.downloadUrl)) {
    return (
      <span className={`${className} cursor-not-allowed opacity-50`} aria-disabled="true">
        {available ? "Download — coming soon" : "Coming soon"} <Icon name="download" className="h-4 w-4" />
      </span>
    );
  }

  if (!product.releaseRepo) {
    return (
      <a href={product.downloadUrl} className={className}>
        {label} <Icon name="download" className="h-4 w-4" />
      </a>
    );
  }

  const mine = guessPlatform();
  const groups =
    state.status === "ready"
      ? [...state.groups].sort((a, b) => (b.platform === mine) - (a.platform === mine))
      : [];

  return (
    <>
      <button type="button" onClick={openPicker} className={className}>
        {label} <Icon name="download" className="h-4 w-4" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Download ${product.name}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-surface p-6 text-left shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold">Download {product.name}</h2>
                {state.status === "ready" && (
                  <p className="mt-1 text-sm text-muted">
                    {state.version} · released{" "}
                    {new Date(state.date).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" })}{" "}
                    · free, no sign-up
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full bg-surface-2 p-2 text-foreground hover:text-accent-2"
                aria-label="Close"
              >
                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>

            {state.status === "loading" && <p className="mt-6 text-sm text-muted">Fetching the latest builds…</p>}

            {state.status === "error" && (
              <p className="mt-6 text-sm text-muted">
                Couldn&apos;t load the list of builds right now.{" "}
                <a
                  href={`https://github.com/${product.releaseRepo}/releases/latest`}
                  className="text-accent-2 underline underline-offset-4"
                >
                  Open the downloads page instead
                </a>
                .
              </p>
            )}

            {state.status === "ready" && groups.length === 0 && (
              <p className="mt-6 text-sm text-muted">No builds have been published yet. Check back soon.</p>
            )}

            {groups.map((g) => (
              <div key={g.platform} className="mt-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
                  {g.platform}
                  {g.platform === mine && <span className="tag-live normal-case tracking-normal">Your system</span>}
                </h3>
                <ul className="mt-2 divide-y divide-border rounded-xl border border-border">
                  {g.files.map((f) => (
                    <li key={f.name}>
                      <a
                        href={f.url}
                        className="flex items-center justify-between gap-4 px-4 py-3 text-sm transition-colors hover:bg-surface-2"
                      >
                        <span>
                          <span className="font-medium text-foreground">{f.label || f.name}</span>
                          <span className="block text-xs text-muted">{f.name}</span>
                        </span>
                        <span className="flex shrink-0 items-center gap-2 text-xs text-muted">
                          {formatSize(f.size)} <Icon name="download" className="h-4 w-4 text-accent-2" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
