import { products, site } from "@/lib/site";

// Generated once at build time (required for the static GitHub Pages export).
export const dynamic = "force-static";

export default function sitemap() {
  const staticRoutes = ["", "/plugins", "/technology", "/about", "/contact"];
  const productRoutes = products.filter((p) => p.slug).map((p) => `/plugins/${p.slug}`);

  return [...staticRoutes, ...productRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));
}
