// The site lives in the "atijstudio" repo, so GitHub Pages serves it from
// https://atij666studio.github.io/atijstudio/. If you later add a custom
// domain (e.g. atijstudio.com), set this to "" and update `url` in src/lib/site.js.
const basePath = "/atijstudio";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build the site as plain static files so GitHub Pages can host it.
  output: "export",
  basePath,
  // Pages are written as /plugins/index.html etc., which GitHub Pages serves cleanly.
  trailingSlash: true,
  // next/image resizing needs a server; static hosting serves images as-is.
  images: { unoptimized: true },
  // Lets components prefix files from /public with the base path (see `asset()` in src/lib/site.js).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
