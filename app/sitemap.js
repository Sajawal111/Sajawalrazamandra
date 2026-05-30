import { posts } from "@/lib/posts"

export default function sitemap() {
  const blogUrls = posts.map((post) => ({
    url: `https://sajawalraza.vercel.app/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [
    {
      url: "https://sajawalraza.vercel.app",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://sajawalraza.vercel.app/blog",
      lastModified: new Date(),
      priority: 0.9,
    },
    ...blogUrls,
  ]
}