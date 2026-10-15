import type { MetadataRoute } from "next";
import { products } from "@/lib/content/products";
import { site } from "@/lib/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", "/about", "/contact", ...products.map((p) => `/work/${p.slug}`)];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() }));
}
