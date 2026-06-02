import { posts } from "../data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Sajawal Raza Mandra`,
    description: `${post.title} — Expert web development insights by Sajawal Raza Mandra, Professional Web Developer Pakistan.`,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <div style={{ background: "#050816", minHeight: "100vh", color: "#f4f7ff", fontFamily: "DM Sans, sans-serif" }}>
      {/* Header */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, height: "76px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 60px", zIndex: 1000, background: "rgba(5,8,22,.88)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,.05)" }}>
        <Link href="/"><img src="/images/logo.png" alt="Sajawal Raza Mandra" style={{ height: "38px" }} /></Link>
        <nav style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          <Link href="/#about" style={{ color: "#94a3b8", textDecoration: "none", fontSize: ".88rem" }}>About</Link>
          <Link href="/#services" style={{ color: "#94a3b8", textDecoration: "none", fontSize: ".88rem" }}>Services</Link>
          <Link href="/#projects" style={{ color: "#94a3b8", textDecoration: "none", fontSize: ".88rem" }}>Work</Link>
          <Link href="/blog" style={{ color: "#00d4ff", textDecoration: "none", fontSize: ".88rem" }}>Blog</Link>
          <Link href="/#contact" style={{ color: "#00d4ff", textDecoration: "none", fontSize: ".88rem", padding: "9px 20px", border: "1px solid rgba(0,212,255,.35)", borderRadius: "50px" }}>Contact</Link>
        </nav>
      </header>

      {/* Hero Image */}
      <div style={{ paddingTop: "76px", position: "relative", height: "65vh", overflow: "hidden" }}>
        <img src={post!.img} alt={post!.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.4)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #050816 5%, transparent 60%)" }} />
        <div style={{ position: "absolute", bottom: "52px", left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: "880px", padding: "0 36px" }}>
          <span style={{ display: "inline-block", padding: "6px 14px", border: "1px solid rgba(0,212,255,.3)", borderRadius: "50px", fontSize: ".7rem", letterSpacing: ".1em", textTransform: "uppercase", color: "#00d4ff", marginBottom: "18px" }}>{post!.tag}</span>
          <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1, letterSpacing: "-.05em", marginBottom: "18px" }}>{post!.title}</h1>
          <div style={{ color: "#94a3b8", fontSize: ".85rem" }}>{post!.date} · {post!.readTime} read · Sajawal Raza Mandra</div>
        </div>
      </div>

      {/* Article Body */}
      <div style={{ maxWidth: "800px", margin: "auto", padding: "72px 28px 130px" }}>
        <p style={{ fontSize: "1.1rem", lineHeight: 2, color: "#e2e8f0", borderLeft: "3px solid #00d4ff", paddingLeft: "22px", marginBottom: "36px" }}>
          This article is part of our web development blog series covering React, Next.js, MERN Stack, Shopify, SEO, Freelancing and more — written from real project experience by Sajawal Raza Mandra, a Professional Web Developer based in Pakistan with 40+ projects delivered worldwide.
        </p>

        {/* Author Card */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "60px", padding: "24px", background: "rgba(0,212,255,.06)", border: "1px solid rgba(0,212,255,.2)", borderRadius: "16px" }}>
          <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#00d4ff", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}>SR</div>
          <div>
            <strong style={{ display: "block", color: "white", marginBottom: "4px" }}>Sajawal Raza Mandra</strong>
            <span style={{ color: "#94a3b8", fontSize: ".8rem" }}>Full-Stack Developer | React, Next.js, MERN | 40+ Projects | Pakistan</span>
          </div>
        </div>

        {/* Back Link */}
        <div style={{ marginTop: "48px" }}>
          <Link href="/blog" style={{ color: "#00d4ff", textDecoration: "none", fontSize: ".88rem", display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 20px", border: "1px solid rgba(0,212,255,.3)", borderRadius: "50px" }}>← Back to Blog</Link>
        </div>
      </div>
    </div>
  )
}