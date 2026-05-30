import Link from "next/link"
import { posts } from "../../lib/posts"


export default function BlogPage() {
  return (
    <main style={{minHeight: "100vh", background: "#0a0a0f", color: "white", fontFamily: "inherit"}}>
      
      {/* Hero */}
      <section style={{padding: "96px 24px 64px", maxWidth: "1200px", margin: "0 auto"}}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)",
          borderRadius: "999px", padding: "6px 16px", marginBottom: "32px"
        }}>
          <span style={{width: "8px", height: "8px", background: "#22d3ee", borderRadius: "50%", display: "inline-block"}}></span>
          <span style={{color: "#22d3ee", fontSize: "12px", fontWeight: 600, letterSpacing: "2px"}}>DEVELOPER INSIGHTS</span>
        </div>

        <h1 style={{fontSize: "clamp(48px, 8vw, 80px)", fontWeight: 900, lineHeight: 1.1, marginBottom: "24px"}}>
          Crafting Digital<br />
          <span style={{background: "linear-gradient(to right, #22d3ee, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
            Insights
          </span>
        </h1>

        <p style={{color: "#9ca3af", fontSize: "18px", maxWidth: "600px", lineHeight: 1.7}}>
          15 deep-dives into React, Next.js, MERN Stack, Shopify, SEO, Freelancing & Performance — written from 40+ real projects across Pakistan and beyond.
        </p>
      </section>

      {/* Grid */}
      <section style={{padding: "0 24px 96px", maxWidth: "1200px", margin: "0 auto"}}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "24px"
        }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{textDecoration: "none"}}
            >
              <div style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                overflow: "hidden",
                transition: "all 0.3s",
                height: "100%",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(6,182,212,0.5)"
                ;(e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.07)"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)"
                ;(e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)"
              }}
              >
                {/* Top bar */}
                <div style={{height: "3px", background: "linear-gradient(to right, #06b6d4, #3b82f6)"}} />

                <div style={{padding: "24px"}}>
                  {/* Tags */}
                  <div style={{display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px"}}>
                    {post.tags.map((tag) => (
                      <span key={tag} style={{
                        fontSize: "11px", padding: "3px 10px", borderRadius: "999px",
                        background: "rgba(6,182,212,0.1)", color: "#22d3ee",
                        border: "1px solid rgba(6,182,212,0.2)", fontWeight: 500
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Date & Time */}
                  <div style={{color: "#6b7280", fontSize: "13px", marginBottom: "12px", display: "flex", gap: "8px"}}>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>🕐 {post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 style={{
                    color: "white", fontWeight: 700, fontSize: "18px",
                    lineHeight: 1.4, marginBottom: "12px"
                  }}>
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p style={{
                    color: "#9ca3af", fontSize: "14px", lineHeight: 1.7,
                    display: "-webkit-box", WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical", overflow: "hidden"
                  }}>
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div style={{
                    marginTop: "20px", color: "#22d3ee",
                    fontSize: "13px", fontWeight: 600,
                    display: "flex", alignItems: "center", gap: "6px"
                  }}>
                    READ ARTICLE →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}