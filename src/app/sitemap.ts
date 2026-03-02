import type { MetadataRoute } from "next";
import {
  getAllPersonalArticles,
  getAllProjectArticles,
} from "@/ressources/project-articles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, articles] = await Promise.all([
    getAllProjectArticles(),
    getAllPersonalArticles(),
  ]);

  return [
    {
      url: "https://www.tchi.xyz",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.tchi.xyz/chat",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.tchi.xyz/work",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projects.map((project) => ({
      url: `https://www.tchi.xyz/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...articles.map((article) => ({
      url: `https://www.tchi.xyz/articles/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
