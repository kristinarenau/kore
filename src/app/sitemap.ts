import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const routes = ["", "/about", "/services", "/work", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
