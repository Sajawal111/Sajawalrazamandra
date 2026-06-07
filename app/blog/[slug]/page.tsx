"use client"

import { useEffect, useState, useRef } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { getPostBySlug } from "../../../lib/posts"

export default function BlogPostPage() {
  const params = useParams()
  const slug = params?.slug as string
  const post = getPostBySlug(slug)

  const [theme, setTheme] = useState<string>("dark")
  const [progress, setProgress] = useState(0)
  const [shareOpen, setShareOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const shareRef = useRef<HTMLDivElement>(null)

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

  // Close share on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(e.target as Node)) {
        setShareOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    if (typeof window !== "undefined") localStorage.setItem("blog-theme", next)
  }

  const getUrl = () => typeof window !== "undefined" ? window.location.href : ""
  const getTitle = () => post?.title || ""

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getUrl())}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(getUrl())}&text=${encodeURIComponent(getTitle())}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(getTitle() + " " + getUrl())}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getUrl())}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(getUrl())}&text=${encodeURIComponent(getTitle())}`,
  }

  const copyLink = () => {
    navigator.clipboard.writeText(getUrl())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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

  const heroImg = post.img || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop"

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
        .art-hero{position:relative;height:520px;overflow:hidden;margin-top:72px;background:var(--bg2);}
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

        /* FLOATING BUTTONS */
        .float-btns{position:fixed;right:24px;bottom:100px;display:flex;flex-direction:column;gap:12px;z-index:999;}

        /* SHARE FLOAT */
        .share-wrap{position:relative;}
        .share-btn{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#00d4ff,#0099cc);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(0,212,255,.45);cursor:pointer;transition:transform .3s,box-shadow .3s;border:none;}
        .share-btn:hover{transform:scale(1.1);box-shadow:0 6px 28px rgba(0,212,255,.6);}
        .share-btn svg{width:24px;height:24px;}

        /* SHARE POPUP */
        .share-popup{position:absolute;bottom:68px;right:0;background:var(--surface2);border:1px solid var(--border2);border-radius:20px;padding:20px;min-width:240px;box-shadow:0 16px 48px var(--shadow);opacity:0;pointer-events:none;transform:translateY(12px) scale(.95);transition:all .3s cubic-bezier(.16,1,.3,1);}
        .share-popup.open{opacity:1;pointer-events:all;transform:translateY(0) scale(1);}
        .share-popup-title{font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:14px;font-weight:600;}
        .share-options{display:flex;flex-direction:column;gap:8px;}
        .share-option{display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:12px;cursor:pointer;transition:.2s;text-decoration:none;color:var(--text);border:1px solid transparent;}
        .share-option:hover{background:rgba(0,212,255,.08);border-color:rgba(0,212,255,.15);}
        .share-option-icon{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;}
        .share-option-label{font-size:.85rem;font-weight:500;}
        .share-divider{height:1px;background:var(--border);margin:8px 0;}
        .copy-btn{width:100%;display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:12px;cursor:pointer;transition:.2s;background:transparent;color:var(--text);border:1px solid var(--border2);font-family:var(--font-b);}
        .copy-btn:hover{border-color:var(--accent);background:rgba(0,212,255,.06);}
        .copy-icon{width:36px;height:36px;border-radius:10px;background:rgba(0,212,255,.1);display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;}

        @media(max-width:768px){
          .art-header{padding:0 16px;}
          .art-hero{height:380px;}
          .art-hero-content{padding:0 16px 32px;}
          .art-body,.art-divider,.back-section{padding-left:16px;padding-right:16px;}
          .art-title{font-size:1.6rem;}
          .art-footer{padding:24px 16px;}
          .float-btns{right:16px;bottom:90px;}
          .share-popup{right:0;min-width:220px;}
        }
      `}</style>

      <div className="article-root">

        {/* Progress Bar */}
        <div style={{ position: "fixed", top: 0, left: 0, height: "3px", background: "linear-gradient(90deg,#00d4ff,#00f0ff)", width: `${progress}%`, zIndex: 2000, boxShadow: "0 0 16px rgba(0,212,255,.7)", transition: "width .1s" }} />

        {/* HEADER */}
        <header className="art-header">
          <a href="https://sajawalraza.vercel.app" className="header-logo">
            <img src="https://sajawalraza.vercel.app/images/logo.png" alt="SM"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }} />
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
          {post.tags && post.tags.length > 0 && (
            <div className="art-tags">
              {post.tags.map((tag: string) => (
                <span key={tag} className="art-tag">{tag}</span>
              ))}
            </div>
          )}
          {post.excerpt && (
            <p style={{ fontSize: "1.1rem", color: "var(--muted)", lineHeight: "1.8", marginBottom: "36px", fontStyle: "italic", borderLeft: "3px solid var(--accent)", paddingLeft: "18px" }}>
              {post.excerpt}
            </p>
          )}
          <div className="art-content" dangerouslySetInnerHTML={{ __html: post.content || "<p>Content coming soon.</p>" }} />
        </div>

        <div className="art-divider"><hr /></div>

        <div className="back-section">
          <Link href="/blog" className="back-card">← Back to All Articles</Link>
        </div>

        <footer className="art-footer">
          © 2024 <a href="https://sajawalraza.vercel.app">Sajawal Raza Mandra</a> — Professional Web Developer Pakistan
        </footer>

        {/* ── FLOATING BUTTONS ── */}
        <div className="float-btns">

          {/* SHARE BUTTON */}
          <div className="share-wrap" ref={shareRef}>
            <button className="share-btn" onClick={() => setShareOpen(p => !p)} title="Share Article">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </button>

            <div className={`share-popup${shareOpen ? " open" : ""}`}>
              <div className="share-popup-title">Share This Article</div>
              <div className="share-options">

                <a className="share-option" href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
                  <div className="share-option-icon" style={{background:"rgba(24,119,242,.15)"}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </div>
                  <span className="share-option-label">Facebook</span>
                </a>

                <a className="share-option" href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
                  <div className="share-option-icon" style={{background:"rgba(0,0,0,.15)"}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.736l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </div>
                  <span className="share-option-label">X (Twitter)</span>
                </a>

                <a className="share-option" href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                  <div className="share-option-icon" style={{background:"rgba(37,211,102,.15)"}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <span className="share-option-label">WhatsApp</span>
                </a>

                <a className="share-option" href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <div className="share-option-icon" style={{background:"rgba(10,102,194,.15)"}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </div>
                  <span className="share-option-label">LinkedIn</span>
                </a>

                <a className="share-option" href={shareLinks.telegram} target="_blank" rel="noopener noreferrer">
                  <div className="share-option-icon" style={{background:"rgba(0,136,204,.15)"}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#0088CC"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  </div>
                  <span className="share-option-label">Telegram</span>
                </a>

                <div className="share-divider" />

                <button className="copy-btn" onClick={copyLink}>
                  <div className="copy-icon">{copied ? "✅" : "🔗"}</div>
                  <span style={{fontSize:".85rem",fontWeight:500}}>{copied ? "Link Copied!" : "Copy Link"}</span>
                </button>

              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}