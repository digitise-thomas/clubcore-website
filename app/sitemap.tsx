import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const languages = {
    da: "https://clubcore.dk",
    en: "https://clubcore.dk/en",
    de: "https://clubcore.dk/de",
  };

  return [
    {
      url: "https://clubcore.dk",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages },
    },
    {
      url: "https://clubcore.dk/en",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages },
    },
    {
      url: "https://clubcore.dk/de",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages },
    },
    {
      url: "https://clubcore.dk/ai-i-erhvervsfremme",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
