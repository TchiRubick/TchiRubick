import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
    disallow: "/private/",
  },
  sitemap: "https://tchi.xyz/sitemap.xml",
});

export default robots;
