"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { posts } from "../../lib/posts"

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

type LangKey = "en" | "ur" | "ro" | "hi" | "zh" | "ja"

const i18n: Record<LangKey, { label: string; flag: string; hero_tag: string; hero_h1: string; hero_h1_span: string; hero_p: string; read_art: string; min_read: string; footer_text: string; footer_rights: string }> = {
  en: { label:"EN", flag:"🇺🇸", hero_tag:"Developer Insights", hero_h1:"Crafting Digital", hero_h1_span:"Insights", hero_p:"15 deep-dives into React, Next.js, MERN Stack, Shopify, SEO, Freelancing & Performance — written from 40+ real projects across Pakistan and beyond.", read_art:"Read Article", min_read:"min read", footer_text:"Professional Web Developer Pakistan", footer_rights:"All rights reserved" },
  ur: { label:"اردو", flag:"🇵🇰", hero_tag:"ڈویلپر انسائٹس", hero_h1:"ڈیجیٹل", hero_h1_span:"بصیرت تخلیق", hero_p:"ری ایکٹ، نیکسٹ جے ایس، ایم ای آر این اسٹیک، شوپائی فائی، ایس ای او اور فری لانسنگ پر 15 گہرے مضامین — 40+ حقیقی پراجیکٹس سے لکھے گئے۔", read_art:"مضمون پڑھیں", min_read:"منٹ", footer_text:"پاکستان کا پیشہ ور ویب ڈویلپر", footer_rights:"تمام حقوق محفوظ ہیں" },
  ro: { label:"Roman", flag:"🇵🇰", hero_tag:"Developer Insights", hero_h1:"Digital", hero_h1_span:"Insights Banana", hero_p:"React, Next.js, MERN Stack, Shopify, SEO aur Freelancing pe 15 gehri articles — 40+ real projects ke baad likhi gayi hain.", read_art:"Article Parho", min_read:"minute", footer_text:"Pakistan ka Professional Web Developer", footer_rights:"Tamam huquq mahfooz hain" },
  hi: { label:"हिं", flag:"🇮🇳", hero_tag:"डेवलपर इनसाइट्स", hero_h1:"डिजिटल", hero_h1_span:"इनसाइट्स बनाना", hero_p:"React, Next.js, MERN Stack, Shopify, SEO और Freelancing पर 15 गहरे लेख — 40+ असली प्रोजेक्ट्स के बाद लिखे गए।", read_art:"लेख पढ़ें", min_read:"मिनट", footer_text:"पाकिस्तान के पेशेवर वेब डेवलपर", footer_rights:"सर्वाधिकार सुरक्षित" },
  zh: { label:"中文", flag:"🇨🇳", hero_tag:"开发者见解", hero_h1:"打造数字", hero_h1_span:"洞见", hero_p:"关于 React、Next.js、MERN Stack、Shopify、SEO 和自由职业的 15 篇深度文章 — 来自 40 多个真实项目的经验。", read_art:"阅读文章", min_read:"分钟", footer_text:"巴基斯坦专业网络开发者", footer_rights:"版权所有" },
  ja: { label:"日本", flag:"🇯🇵", hero_tag:"開発者インサイト", hero_h1:"デジタル", hero_h1_span:"インサイトの創造", hero_p:"React、Next.js、MERNスタック、Shopify、SEO、フリーランスに関する15本の深掘り記事 — 40以上の実際のプロジェクトから。", read_art:"記事を読む", min_read:"分", footer_text:"パキスタンのプロWebデベロッパー", footer_rights:"全著作権所有" },
}

export default function BlogPage() {
  const [theme, setTheme] = useState<string>("dark")
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState<LangKey>("en")
  const [progress, setProgress] = useState(0)
  const langRef = useRef<HTMLDivElement>(null)

  const t = i18n[lang]

  // Load saved theme
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("blog-theme")) || "dark"
    setTheme(saved)
  }, [])

  // Apply theme to html element
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

  // Close lang dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    localStorage.setItem("blog-theme", next)
  }

  const selectLang = (code: LangKey) => {
    setLang(code)
    setLangOpen(false)
  }

  const tiltCard = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget
    const r = card.getBoundingClientRect()
    const rx = ((e.clientY - r.top - r.height / 2) / r.height) * -5
    const ry = ((e.clientX - r.left - r.width / 2) / r.width) * 5
    card.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`
  }

  const resetCard = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "perspective(1200px) rotateX(0) rotateY(0) translateY(0)"
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;700&display=swap');
        :root{--accent:#00d4ff;--accent2:#00f0ff;--font-d:'Syne',sans-serif;--font-b:'DM Sans',sans-serif;}
        [data-theme="dark"]{--bg:#050816;--surface:rgba(15,23,42,.82);--surface2:rgba(15,23,42,.95);--border:rgba(255,255,255,.07);--border2:rgba(255,255,255,.12);--text:#f4f7ff;--text2:#cbd5e1;--muted:#94a3b8;--card-bg:rgba(15,23,42,.72);--header-bg:rgba(5,8,22,.92);--shadow:rgba(0,0,0,.4);--grid-line:rgba(255,255,255,.03);}
        [data-theme="light"]{--bg:#f0f4ff;--surface:rgba(255,255,255,.92);--surface2:rgba(255,255,255,.98);--border:rgba(0,0,60,.1);--border2:rgba(0,0,60,.18);--text:#0a0e1a;--text2:#1e293b;--muted:#475569;--card-bg:rgba(255,255,255,.9);--header-bg:rgba(240,244,255,.95);--shadow:rgba(0,0,60,.12);--grid-line:rgba(0,0,60,.04);}
        *{margin:0;padding:0;box-sizing:border-box;}
        html{scroll-behavior:smooth;}
        .blog-root{font-family:var(--font-b);background:linear-gradient(var(--grid-line) 1px,transparent 1px),linear-gradient(90deg,var(--grid-line) 1px,transparent 1px),var(--bg);background-size:60px 60px;color:var(--text);min-height:100vh;overflow-x:hidden;transition:background .4s,color .4s;}
        ::-webkit-scrollbar{width:6px;}::-webkit-scrollbar-track{background:var(--bg);}::-webkit-scrollbar-thumb{background:var(--accent);border-radius:20px;}
        .blog-header{position:fixed;top:0;left:0;right:0;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 52px;z-index:1000;background:var(--header-bg);backdrop-filter:blur(24px);border-bottom:1px solid var(--border);transition:background .4s,border-color .4s;}
        .header-logo img{height:38px;}
        [data-theme="light"] .header-logo img{filter:invert(1) brightness(0.1);}
        .nav-cta{padding:9px 22px;border:1.5px solid var(--accent);border-radius:6px;color:var(--accent);font-weight:600;font-size:.82rem;letter-spacing:.06em;text-transform:uppercase;text-decoration:none;transition:.2s;white-space:nowrap;}
        .nav-cta:hover{background:rgba(0,212,255,.12);}
        .header-controls{display:flex;align-items:center;gap:12px;margin-left:16px;}
        .theme-toggle{position:relative;width:52px;height:28px;background:var(--border2);border-radius:50px;border:1px solid var(--border2);cursor:pointer;transition:background .3s;flex-shrink:0;}
        .theme-knob{position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:var(--accent);transition:transform .35s cubic-bezier(.34,1.56,.64,1);display:flex;align-items:center;justify-content:center;font-size:.7rem;pointer-events:none;}
        .lang-wrapper{position:relative;}
        .lang-btn{display:flex;align-items:center;gap:7px;padding:7px 13px;background:var(--surface);border:1px solid var(--border2);border-radius:50px;color:var(--text);font-family:var(--font-b);font-size:.8rem;font-weight:600;cursor:pointer;transition:.3s;white-space:nowrap;outline:none;}
        .lang-btn:hover{border-color:var(--accent);color:var(--accent);}
        .lang-chevron{font-size:.6rem;transition:transform .3s;}
        .lang-dropdown{position:absolute;top:calc(100% + 10px);right:0;background:var(--surface2);border:1px solid var(--border2);border-radius:16px;overflow:hidden;min-width:190px;opacity:0;pointer-events:none;transform:translateY(-8px) scale(.97);transition:all .25s cubic-bezier(.16,1,.3,1);box-shadow:0 16px 48px var(--shadow);z-index:9999;}
        .lang-dropdown.open{opacity:1;pointer-events:all;transform:translateY(0) scale(1);}
        .lang-option{display:flex;align-items:center;gap:12px;padding:11px 16px;cursor:pointer;font-size:.85rem;color:var(--muted);transition:.2s;border-bottom:1px solid var(--border);}
        .lang-option:last-child{border-bottom:none;}
        .lang-option:hover{background:rgba(0,212,255,.08);color:var(--text);}
        .lang-option.active{color:var(--accent);font-weight:600;}
        .blog-hero{padding:150px 56px 80px;max-width:1300px;margin:auto;position:relative;overflow:hidden;}
        .blog-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 20% 30%,rgba(0,212,255,.1),transparent 40%);pointer-events:none;}
        .hero-tag{display:inline-flex;align-items:center;gap:9px;padding:8px 16px;border:1px solid rgba(0,212,255,.2);border-radius:50px;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-bottom:24px;}
        .hero-tag::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--accent);box-shadow:0 0 12px var(--accent);}
        .blog-hero h1{font-family:var(--font-d);font-size:clamp(2.8rem,7vw,6.5rem);line-height:.95;letter-spacing:-.06em;margin-bottom:20px;color:var(--text);}
        .blog-hero h1 span{color:transparent;-webkit-text-stroke:1px rgba(0,212,255,.4);}
        [data-theme="light"] .blog-hero h1 span{-webkit-text-stroke:1px rgba(0,100,180,.4);}
        .blog-hero p{max-width:560px;font-size:.98rem;line-height:1.9;color:var(--muted);}
        .cards-grid{max-width:1300px;margin:auto;padding:0 56px 100px;display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
        .blog-card{position:relative;overflow:hidden;background:var(--card-bg);backdrop-filter:blur(18px);border:1px solid var(--border);transition:transform .5s cubic-bezier(.16,1,.3,1),border-color .4s,box-shadow .5s,background .4s;transform-style:preserve-3d;box-shadow:0 8px 28px var(--shadow);will-change:transform;border-radius:22px;cursor:pointer;text-decoration:none;display:block;color:inherit;}
        .blog-card.large{grid-column:span 2;}
        .blog-card:hover{border-color:rgba(0,212,255,.42);box-shadow:0 18px 52px rgba(0,212,255,.14),0 0 60px rgba(0,212,255,.06);}
        .glow-orb{position:absolute;width:200px;height:200px;background:radial-gradient(circle,rgba(0,212,255,.16),transparent 70%);top:-90px;right:-90px;opacity:0;transition:.5s;pointer-events:none;}
        .blog-card:hover .glow-orb{opacity:1;}
        .card-img-wrap{height:230px;overflow:hidden;position:relative;}
        .blog-card.large .card-img-wrap{height:300px;}
        .card-img-wrap::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,var(--bg) 2%,transparent 55%);}
        .card-img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform 1s cubic-bezier(.16,1,.3,1),filter .6s;filter:brightness(.72) contrast(1.1);}
        [data-theme="light"] .card-img-wrap img{filter:brightness(.85) contrast(1.05);}
        .blog-card:hover .card-img-wrap img{transform:scale(1.09);filter:brightness(.5) contrast(1.2) saturate(1.15);}
        .tags{position:absolute;top:14px;left:14px;display:flex;gap:7px;z-index:2;flex-wrap:wrap;}
        .tag{padding:5px 11px;border-radius:50px;background:rgba(0,0,0,.55);backdrop-filter:blur(10px);font-size:.63rem;letter-spacing:.08em;text-transform:uppercase;color:white;border:1px solid rgba(255,255,255,.12);}
        .tag.p{background:var(--accent);color:#000;font-weight:700;}
        [data-theme="light"] .tag{background:rgba(0,0,0,.45);}
        .card-content{padding:20px 22px 22px;}
        .meta{display:flex;gap:10px;font-size:.74rem;color:var(--muted);margin-bottom:10px;align-items:center;flex-wrap:wrap;}
        .meta .dot{width:3px;height:3px;background:var(--muted);border-radius:50%;}
        .card-content h2{font-family:var(--font-d);font-size:1.22rem;line-height:1.22;margin-bottom:10px;letter-spacing:-.03em;transition:.3s;color:var(--text);}
        .blog-card:hover h2{color:var(--accent);}
        .card-content p{color:var(--muted);line-height:1.72;font-size:.86rem;margin-bottom:16px;}
        .card-footer{display:flex;align-items:center;justify-content:space-between;}
        .read-more{display:flex;align-items:center;gap:8px;font-size:.73rem;letter-spacing:.1em;text-transform:uppercase;color:var(--accent);font-weight:700;transition:.3s;}
        .blog-card:hover .read-more{gap:14px;}
        .card-topics{display:flex;gap:6px;flex-wrap:wrap;}
        .card-topic{padding:3px 9px;background:rgba(0,212,255,.08);border:1px solid rgba(0,212,255,.15);border-radius:20px;font-size:.62rem;color:var(--accent);letter-spacing:.05em;}
        [data-theme="light"] .card-topic{background:rgba(0,150,200,.08);border-color:rgba(0,150,200,.2);}
        .blog-footer{padding:40px 56px;text-align:center;border-top:1px solid var(--border);color:var(--muted);font-size:.83rem;}
        .blog-footer a{color:var(--accent);text-decoration:none;}
        @media(max-width:992px){.cards-grid{grid-template-columns:1fr 1fr;}.blog-card.large{grid-column:span 2;}}
        @media(max-width:768px){.blog-header{padding:0 16px;}.blog-hero,.cards-grid{padding-left:16px;padding-right:16px;}.cards-grid{grid-template-columns:1fr;}.blog-card.large{grid-column:span 1;}.blog-hero h1{font-size:2.6rem;}.header-controls{gap:8px;}}
      `}</style>

      <div className="blog-root">

        {/* Progress Bar */}
        <div style={{position:"fixed",top:0,left:0,height:"3px",background:"linear-gradient(90deg,#00d4ff,#00f0ff)",width:`${progress}%`,zIndex:2000,boxShadow:"0 0 16px rgba(0,212,255,.7)",transition:"width .1s"}} />

        {/* HEADER */}
        <header className="blog-header">
          <a href="https://sajawalraza.vercel.app" className="header-logo">
            <img src="https://sajawalraza.vercel.app/images/logo.png" alt="SM"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }} />
          </a>
          <div style={{flex:1}} />
          <a href="https://sajawalraza.vercel.app" className="nav-cta">← Home</a>

          <div className="header-controls">

            {/* ── Language Selector ── */}
            <div className="lang-wrapper" ref={langRef}>
              <button
                className="lang-btn"
                onClick={() => setLangOpen(prev => !prev)}
                type="button"
              >
                <span>🌐</span>
                <span>{t.label}</span>
                <span className="lang-chevron" style={{transform: langOpen ? "rotate(180deg)" : "rotate(0deg)"}}>▼</span>
              </button>

              <div className={`lang-dropdown${langOpen ? " open" : ""}`}>
                {(Object.keys(i18n) as LangKey[]).map(code => (
                  <div
                    key={code}
                    className={`lang-option${lang === code ? " active" : ""}`}
                    onClick={() => selectLang(code)}
                  >
                    <span style={{fontSize:"1.1rem"}}>{i18n[code].flag}</span>
                    <span style={{flex:1}}>
                      {code === "en" ? "English" : code === "ur" ? "Urdu — اردو" : code === "ro" ? "Roman Urdu" : code === "hi" ? "Hindi — हिन्दी" : code === "zh" ? "Chinese — 中文" : "Japanese — 日本語"}
                    </span>
                    {lang === code && <span style={{color:"var(--accent)"}}>✓</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Theme Toggle ── */}
            <div className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
              <div className="theme-knob" style={{transform: theme === "light" ? "translateX(24px)" : "translateX(0)"}}>
                {theme === "dark" ? "☀️" : "🌙"}
              </div>
            </div>

          </div>
        </header>

        {/* HERO */}
        <div className="blog-hero">
          <div className="hero-tag">{t.hero_tag}</div>
          <h1>{t.hero_h1}<br /><span>{t.hero_h1_span}</span></h1>
          <p>{t.hero_p}</p>
        </div>

        {/* CARDS GRID */}
        <div className="cards-grid">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`blog-card${index === 0 ? " large" : ""}`}
              onMouseMove={tiltCard}
              onMouseLeave={resetCard}
            >
              <div className="glow-orb" />
              <div className="card-img-wrap">
                <img
                  src={articleImages[post.slug] || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"}
                  alt={post.title}
                  loading={index < 3 ? "eager" : "lazy"}
                />
                <div className="tags">
                  <div className="tag p">{post.tags[0]}</div>
                  {post.tags.slice(1, 3).map(t => <div key={t} className="tag">{t}</div>)}
                </div>
              </div>
              <div className="card-content">
                <div className="meta">
                  <span>{post.date}</span>
                  <span className="dot" />
                  <span>📖 {post.readTime}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="card-footer">
                  <div className="read-more">{i18n[lang].read_art} →</div>
                  <div className="card-topics">
                    {post.tags.slice(0, 2).map(tg => <span key={tg} className="card-topic">{tg}</span>)}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="blog-footer">
          © 2024 <a href="https://sajawalraza.vercel.app">Sajawal Raza Mandra</a> — {t.footer_text} &nbsp;·&nbsp; {t.footer_rights}
        </footer>

      </div>
    </>
  )
}