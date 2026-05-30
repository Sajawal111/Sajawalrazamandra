import { posts, getPostBySlug } from "../../../lib/posts"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Sajawal Raza Mandra`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://sajawalraza.vercel.app/blog/${post.slug}`,
    },
  }
}

export default function BlogPost({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <article>
      <h1>{post!.title}</h1>
      <p>{post!.date} · {post!.readTime}</p>
      <p>{post!.excerpt}</p>
    </article>
  )
}