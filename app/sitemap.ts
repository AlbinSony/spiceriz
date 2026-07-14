import type { MetadataRoute } from "next"
import { BLOG_POSTS } from "@/lib/blog-posts"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.spizespices.com"

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wholesale`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/cardamom`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/products/black-pepper`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/products/cloves`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/products/cinnamon`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/products/nutmeg`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/products/spice-blends`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ]

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
}
