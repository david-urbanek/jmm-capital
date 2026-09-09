import type { MetadataRoute } from "next";

import { sectors } from "@/lib/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://www.jmmcapital.cz",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...sectors.map((sector) => ({
      url: `https://www.jmmcapital.cz/portfolio/${sector.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
