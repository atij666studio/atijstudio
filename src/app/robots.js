import { site } from "@/lib/site";

// Generated once at build time (required for the static GitHub Pages export).
export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
