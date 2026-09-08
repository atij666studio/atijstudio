import { products, site } from "@/lib/site";

export default function sitemap() {
  const staticRoutes = ["", "/plugins", "/technology", "/about", "/contact"];
  const productRoutes = products.filter((p) => p.slug).map((p) => `/plugins/${p.slug}`);

  return [...staticRoutes, ...productRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));
}
