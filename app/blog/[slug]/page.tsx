"use client"

import { useEffect, useState, useRef } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { getPostBySlug } from "../../../lib/posts"

const articleImages: Record<string, string> = {
  "react-vs-nextjs-2026": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
  "how-to-build-shopify-store-pakistani-brands-2026": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
  "mern-stack-2026-worth-learning-pakistan": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  "how-to-land-fiverr-client-pakistan": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  "website-speed-core-web-vitals-guide-2026": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  "tailwind-css-tricks-ui-design-2026": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
  "complete-seo-guide-pakistani-websites-2026": "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1200&auto=format&fit=crop",
  "website-banana-ka-kharcha-pakistan-2026": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
  "wordpress-vs-nextjs-pakistani-businesses": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",
  "how-to-receive-freelancing-payments-pakistan-2026": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
  "rest-api-integration-nextjs-complete-guide": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  "how-to-build-portfolio-website-gets-clients-2026": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",
  "mongodb-complete-guide-pakistani-developers": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200&auto=format&fit=crop",
  "how-to-start-online-store-pakistan-2026": "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop",
  "how-to-setup-google-analytics-4-website-2026": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params?.slug as string
  const post = getPostBySlug(slug)

  const [theme, setTheme] = useState<string>("dark")
  const [progress, setProgress] = useState(0)

  // Load saved theme
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("blog-theme")) || "dark"
    setTheme(saved)
  }, [])

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  // Scroll progress
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    if (typeof window !== "undefined") localStorage.setItem("blog-theme", next)
  }

  if (!post) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#050816", color: "#f4f7ff", fontFamily: "sans-serif", gap: "16px" }}>
        <div style={{ fontSize: "4rem" }}>404</div>
        <div style={{ color: "#94a3b8" }}>Article not found</div>
        <Link href="/blog" style={{ color: "#00d4ff", textDecoration: "none", marginTop: "8px" }}>← Back to Blog</Link>
      </div>
    )
  }

  const heroImg = articleImages[post.slug] || post.img || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop"

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;700&display=swap');
        :root{--accent:#00d4ff;--accent2:#00f0ff;--font-d:'Syne',sans-serif;--font-b:'DM Sans',sans-serif;}
        [data-theme="dark"]{--bg:#050816;--bg2:#0b1023;--surface:rgba(15,23,42,.82);--surface2:rgba(15,23,42,.95);--border:rgba(255,255,255,.07);--border2:rgba(255,255,255,.12);--text:#f4f7ff;--text2:#cbd5e1;--muted:#94a3b8;--card-bg:rgba(15,23,42,.72);--header-bg:rgba(5,8,22,.92);--code-bg:#0b1023;--shadow:rgba(0,0,0,.4);--grid-line:rgba(255,255,255,.03);}
        [data-theme="light"]{--bg:#f0f4ff;--bg2:#e8edf8;--surface:rgba(255,255,255,.92);--surface2:rgba(255,255,255,.98);--border:rgba(0,0,60,.1);--border2:rgba(0,0,60,.18);--text:#0a0e1a;--text2:#1e293b;--muted:#475569;--card-bg:rgba(255,255,255,.9);--header-bg:rgba(240,244,255,.95);--code-bg:#e2e8f0;--shadow:rgba(0,0,60,.12);--grid-line:rgba(0,0,60,.04);}
        *{margin:0;padding:0;box-sizing:border-box;}
        html{scroll-behavior:smooth;}
        .article-root{font-family:var(--font-b);background:linear-gradient(var(--grid-line) 1px,transparent 1px),linear-gradient(90deg,var(--grid-line) 1px,transparent 1px),var(--bg);background-size:60px 60px;color:var(--text);min-height:100vh;overflow-x:hidden;transition:background .4s,color .4s;}
        ::-webkit-scrollbar{width:6px;}::-webkit-scrollbar-track{background:var(--bg);}::-webkit-scrollbar-thumb{background:var(--accent);border-radius:20px;}

        /* HEADER */
        .art-header{position:fixed;top:0;left:0;right:0;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 52px;z-index:1000;background:var(--header-bg);backdrop-filter:blur(24px);border-bottom:1px solid var(--border);transition:background .4s,border-color .4s;}
        .header-logo img{height:38px;}
        [data-theme="light"] .header-logo img{filter:invert(1) brightness(0.1);}
        .nav-back{padding:9px 22px;border:1.5px solid var(--accent);border-radius:6px;color:var(--accent);font-weight:600;font-size:.82rem;letter-spacing:.06em;text-transform:uppercase;text-decoration:none;transition:.2s;white-space:nowrap;}
        .nav-back:hover{background:rgba(0,212,255,.12);}
        .theme-toggle{position:relative;width:52px;height:28px;background:var(--border2);border-radius:50px;border:1px solid var(--border2);cursor:pointer;transition:background .3s;flex-shrink:0;}
        .theme-knob{position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:var(--accent);transition:transform .35s cubic-bezier(.34,1.56,.64,1);display:flex;align-items:center;justify-content:center;font-size:.7rem;pointer-events:none;}

        /* HERO */
        .art-hero-img{width:100%;height:100%;object-fit:cover;filter:brightness(.45) contrast(1.1);}
        [data-theme="light"] .art-hero-img{filter:brightness(.6) contrast(1.05);}
        .art-hero-overlay{position:absolute;inset:0;background:linear-gradient(to top,var(--bg) 18%,transparent 65%);}
        .art-hero-content{position:absolute;bottom:0;left:0;right:0;max-width:860px;margin:0 auto;padding:0 32px 48px;}
        .art-category{display:inline-flex;align-items:center;gap:9px;padding:6px 14px;border:1px solid rgba(0,212,255,.25);border-radius:50px;font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-bottom:16px;}
        .art-category::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--accent);box-shadow:0 0 10px var(--accent);}
        .art-title{font-family:var(--font-d);font-size:clamp(1.8rem,4.5vw,3.2rem);line-height:1.1;letter-spacing:-.03em;color:var(--text);margin-bottom:16px;}
        .art-meta{display:flex;gap:14px;align-items:center;font-size:.82rem;color:var(--muted);flex-wrap:wrap;}
        .art-meta .dot{width:3px;height:3px;background:var(--muted);border-radius:50%;}
        .art-meta .author-link{color:var(--accent);text-decoration:none;font-weight:600;}
        .art-meta .author-link:hover{text-decoration:underline;}

        /* BODY */
        .art-body{max-width:860px;margin:0 auto;padding:56px 32px 100px;}
        .art-tags{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:40px;}
        .art-tag{padding:5px 14px;border-radius:50px;border:1px solid rgba(0,212,255,.2);background:rgba(0,212,255,.06);font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);}
        .art-content{color:var(--text2);line-height:1.9;font-size:1rem;}
        .art-content h2{font-family:var(--font-d);font-size:1.7rem;font-weight:700;color:var(--text)!important;margin:40px 0 16px;letter-spacing:-.03em;}
        .art-content h3{font-family:var(--font-d);font-size:1.25rem;font-weight:600;color:var(--text)!important;margin:28px 0 12px;}
        .art-content p{margin-bottom:18px;color:var(--text2);}
        .art-content ul,.art-content ol{padding-left:22px;margin-bottom:18px;display:flex;flex-direction:column;gap:8px;}
        .art-content li{color:var(--text2);line-height:1.75;}
        .art-content li::marker{color:var(--accent);}
        .art-content strong{color:var(--text)!important;font-weight:600;}
        [data-theme="light"] .art-content h2{color:#0a0e1a!important;}
        [data-theme="light"] .art-content h3{color:#0a0e1a!important;}
        [data-theme="light"] .art-content strong{color:#0a0e1a!important;}
        [data-theme="light"] .art-content p{color:#1e293b;}
        [data-theme="light"] .art-content li{color:#1e293b;}
        .art-hero{position:relative;height:520px;overflow:hidden;margin-top:72px;background:var(--bg2);}
        .art-content a{color:var(--accent);text-decoration:none;border-bottom:1px solid rgba(0,212,255,.3);transition:.2s;}
        .art-content a:hover{border-bottom-color:var(--accent);}
        .art-content pre{background:var(--code-bg);border:1px solid var(--border2);border-radius:12px;padding:20px 22px;overflow-x:auto;margin:20px 0;font-size:.85rem;line-height:1.7;}
        .art-content code{font-family:'Fira Code','Courier New',monospace;color:#00d4ff;font-size:.88em;}
        .art-content pre code{color:#e2e8f0;font-size:.85rem;}
        [data-theme="light"] .art-content pre code{color:#1e293b;}
        .art-content blockquote{border-left:3px solid var(--accent);padding:12px 20px;margin:20px 0;background:rgba(0,212,255,.05);border-radius:0 8px 8px 0;font-style:italic;color:var(--muted);}
        .art-content hr{border:none;border-top:1px solid var(--border);margin:32px 0;}
        .art-content table{width:100%;border-collapse:collapse;margin:20px 0;font-size:.9rem;}
        .art-content th{background:rgba(0,212,255,.1);color:var(--accent);font-weight:600;padding:10px 14px;text-align:left;border:1px solid var(--border2);}
        .art-content td{padding:10px 14px;border:1px solid var(--border);color:var(--text2);}
        .art-content tr:hover td{background:rgba(0,212,255,.04);}

        /* DIVIDER */
        .art-divider{width:100%;max-width:860px;margin:0 auto 48px;padding:0 32px;}
        .art-divider hr{border:none;border-top:1px solid var(--border);}

        /* BACK CARD */
        .back-section{max-width:860px;margin:0 auto;padding:0 32px 80px;display:flex;justify-content:center;}
        .back-card{display:inline-flex;align-items:center;gap:12px;padding:16px 32px;border:1px solid var(--border2);border-radius:50px;color:var(--text);text-decoration:none;font-weight:600;font-size:.9rem;transition:.3s;background:var(--card-bg);backdrop-filter:blur(12px);}
        .back-card:hover{border-color:var(--accent);color:var(--accent);box-shadow:0 0 24px rgba(0,212,255,.12);}

        /* FOOTER */
        .art-footer{padding:32px 52px;text-align:center;border-top:1px solid var(--border);color:var(--muted);font-size:.83rem;}
        .art-footer a{color:var(--accent);text-decoration:none;}

        @media(max-width:768px){
          .art-header{padding:0 16px;}
          .art-hero{height:380px;}
          .art-hero-content{padding:0 16px 32px;}
          .art-body,.art-divider,.back-section{padding-left:16px;padding-right:16px;}
          .art-title{font-size:1.6rem;}
          .art-footer{padding:24px 16px;}
        }
      `}</style>

      <div className="article-root">

        {/* Progress Bar */}
        <div style={{ position: "fixed", top: 0, left: 0, height: "3px", background: "linear-gradient(90deg,#00d4ff,#00f0ff)", width: `${progress}%`, zIndex: 2000, boxShadow: "0 0 16px rgba(0,212,255,.7)", transition: "width .1s" }} />

        {/* HEADER */}
        <header className="art-header">
          <a href="https://sajawalraza.vercel.app" className="header-logo">
            <img
              src="https://sajawalraza.vercel.app/images/logo.png"
              alt="SM"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
            />
          </a>
          <div style={{ flex: 1 }} />
          <Link href="/blog" className="nav-back">← All Articles</Link>
          <div style={{ marginLeft: "12px" }}>
            <div className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
              <div className="theme-knob" style={{ transform: theme === "light" ? "translateX(24px)" : "translateX(0)" }}>
                {theme === "dark" ? "☀️" : "🌙"}
              </div>
            </div>
          </div>
        </header>

        {/* HERO IMAGE */}
        <div className="art-hero">
          <img src={heroImg} alt={post.title} className="art-hero-img" />
          <div className="art-hero-overlay" />
          <div className="art-hero-content">
            <div className="art-category">{post.category || post.tags?.[0] || "Article"}</div>
            <h1 className="art-title">{post.title}</h1>
            <div className="art-meta">
              <span>By <a href="https://sajawalraza.vercel.app" className="author-link">Sajawal Raza Mandra</a></span>
              <span className="dot" />
              <span>{post.date}</span>
              <span className="dot" />
              <span>📖 {post.readTime}</span>
            </div>
          </div>
        </div>

        {/* ARTICLE BODY */}
        <div className="art-body">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="art-tags">
              {post.tags.map((tag: string) => (
                <span key={tag} className="art-tag">{tag}</span>
              ))}
            </div>
          )}

          {/* Excerpt */}
          {post.excerpt && (
            <p style={{ fontSize: "1.1rem", color: "var(--muted)", lineHeight: "1.8", marginBottom: "36px", fontStyle: "italic", borderLeft: "3px solid var(--accent)", paddingLeft: "18px" }}>
              {post.excerpt}
            </p>
          )}

          {/* Content */}
          <div
            className="art-content"
            dangerouslySetInnerHTML={{ __html: post.content || "<p>Content coming soon.</p>" }}
          />
        </div>

        <div className="art-divider"><hr /></div>

        {/* Back Button */}
        <div className="back-section">
          <Link href="/blog" className="back-card">
            ← Back to All Articles
          </Link>
        </div>

        {/* FOOTER */}
        <footer className="art-footer">
          © 2026 <a href="https://sajawalraza.vercel.app">Sajawal Raza Mandra</a> — Professional Web Developer Pakistan
        </footer>

      </div>
    </>
  )
}
