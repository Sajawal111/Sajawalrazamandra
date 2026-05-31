// app/blog/page.tsx
// Paste this file at: app/blog/page.tsx

import Link from "next/link"
import { posts } from "../../lib/posts"

export const metadata = {
  title: "Blog — Web Development Insights | Sajawal Raza Mandra",
  description:
    "Expert insights on React.js, Next.js, MERN Stack, Shopify, SEO, Freelancing & Performance by Sajawal Raza Mandra — Professional Web Developer from Pakistan with 40+ projects delivered worldwide.",
  keywords:
    "web development blog pakistan, react.js tutorial 2026, next.js guide pakistan, mern stack pakistan, shopify development pakistan, freelancing pakistan 2026, sajawal raza mandra",
}

export default function BlogPage() {
  return (
    <>
      {/* ── FONTS & GLOBAL BLOG STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;700&display=swap');

        .blog-root {
          min-height: 100vh;
          background:
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px),
            #050816;
          background-size: 60px 60px;
          color: #f4f7ff;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── NAV BAR ── */
        .blog-header {
          position: fixed; top: 0; left: 0; right: 0; height: 72px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 52px; z-index: 1000;
          background: rgba(5,8,22,.92);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255,255,255,.07);
        }
        .blog-logo img { height: 38px; }
        .blog-nav { display: flex; gap: 6px; align-items: center; }
        .blog-nav a {
          text-decoration: none; color: #94a3b8;
          font-size: .82rem; font-weight: 500;
          letter-spacing: .06em; text-transform: uppercase;
          padding: 6px 12px; border-radius: 6px;
          transition: color .2s, background .2s;
        }
        .blog-nav a:hover { color: #f4f7ff; }
        .blog-nav a.active { color: #00d4ff; }
        .blog-nav-cta {
          padding: 9px 22px !important;
          border: 1.5px solid #00d4ff !important;
          border-radius: 6px !important;
          color: #00d4ff !important;
          font-weight: 600 !important;
          margin-left: 8px;
        }
        .blog-nav-cta:hover { background: rgba(0,212,255,.12) !important; }

        /* ── HERO ── */
        .blog-hero {
          padding: 150px 56px 80px;
          max-width: 1300px; margin: auto;
          position: relative; overflow: hidden;
        }
        .blog-hero::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at 20% 30%, rgba(0,212,255,.1), transparent 40%);
          pointer-events: none;
        }
        .hero-tag {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 8px 16px;
          border: 1px solid rgba(0,212,255,.2); border-radius: 50px;
          font-size: .72rem; letter-spacing: .12em; text-transform: uppercase;
          color: #00d4ff; margin-bottom: 24px;
        }
        .hero-tag::before {
          content: ''; width: 7px; height: 7px; border-radius: 50%;
          background: #00d4ff; box-shadow: 0 0 12px #00d4ff; flex-shrink: 0;
        }
        .blog-hero h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 7vw, 6.5rem);
          line-height: .95; letter-spacing: -.06em;
          margin-bottom: 20px; color: #f4f7ff;
        }
        .blog-hero h1 span {
          color: transparent;
          -webkit-text-stroke: 1px rgba(0,212,255,.4);
        }
        .blog-hero p {
          max-width: 560px; font-size: .98rem;
          line-height: 1.9; color: #94a3b8;
        }

        /* ── GRID ── */
        .cards-grid {
          max-width: 1300px; margin: auto;
          padding: 0 56px 100px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        /* ── CARD ── */
        .blog-card {
          position: relative; overflow: hidden;
          background: rgba(15,23,42,.72);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 22px; cursor: pointer;
          box-shadow: 0 8px 28px rgba(0,0,0,.4);
          transition: transform .5s cubic-bezier(.16,1,.3,1),
                      border-color .4s, box-shadow .5s;
          transform-style: preserve-3d;
          will-change: transform;
          text-decoration: none; display: flex; flex-direction: column;
        }
        .blog-card:hover {
          border-color: rgba(0,212,255,.42);
          box-shadow: 0 18px 52px rgba(0,212,255,.14), 0 0 60px rgba(0,212,255,.06);
          transform: translateY(-6px);
        }
        .glow-orb {
          position: absolute; width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(0,212,255,.16), transparent 70%);
          top: -90px; right: -90px; opacity: 0;
          transition: opacity .5s; pointer-events: none;
        }
        .blog-card:hover .glow-orb { opacity: 1; }

        .card-img-wrap {
          height: 230px; overflow: hidden; position: relative;
        }
        .card-img-wrap::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to top, #050816 2%, transparent 55%);
        }
        .card-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 1s cubic-bezier(.16,1,.3,1), filter .6s;
          filter: brightness(.72) contrast(1.1);
        }
        .blog-card:hover .card-img-wrap img {
          transform: scale(1.09);
          filter: brightness(.5) contrast(1.2) saturate(1.15);
        }

        .tags {
          position: absolute; top: 14px; left: 14px;
          display: flex; gap: 7px; z-index: 2; flex-wrap: wrap;
        }
        .tag {
          padding: 5px 11px; border-radius: 50px;
          background: rgba(0,0,0,.55); backdrop-filter: blur(10px);
          font-size: .63rem; letter-spacing: .08em; text-transform: uppercase;
          color: white; border: 1px solid rgba(255,255,255,.12);
        }
        .tag-primary { background: #00d4ff !important; color: #000 !important; font-weight: 700; }

        .card-content { padding: 20px 22px 22px; flex: 1; display: flex; flex-direction: column; }
        .meta {
          display: flex; gap: 10px; font-size: .74rem;
          color: #94a3b8; margin-bottom: 10px;
          align-items: center; flex-wrap: wrap;
        }
        .meta-dot { width: 3px; height: 3px; background: #94a3b8; border-radius: 50%; }
        .card-content h2 {
          font-family: 'Syne', sans-serif;
          font-size: 1.22rem; line-height: 1.22;
          margin-bottom: 10px; letter-spacing: -.03em;
          color: #f4f7ff; transition: color .3s;
        }
        .blog-card:hover h2 { color: #00d4ff; }
        .card-content p {
          color: #94a3b8; line-height: 1.72;
          font-size: .86rem; margin-bottom: 16px; flex: 1;
        }
        .card-footer {
          display: flex; align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,.06);
          padding-top: 14px; margin-top: auto;
        }
        .read-more {
          display: flex; align-items: center; gap: 8px;
          font-size: .73rem; letter-spacing: .1em; text-transform: uppercase;
          color: #00d4ff; font-weight: 700; transition: gap .3s;
        }
        .blog-card:hover .read-more { gap: 14px; }
        .card-topics { display: flex; gap: 6px; flex-wrap: wrap; }
        .card-topic {
          padding: 3px 9px;
          background: rgba(0,212,255,.08);
          border: 1px solid rgba(0,212,255,.15);
          border-radius: 20px; font-size: .62rem;
          color: #00d4ff; letter-spacing: .05em;
        }

        /* ── FOOTER ── */
        .blog-footer {
          padding: 40px 56px; text-align: center;
          border-top: 1px solid rgba(255,255,255,.07);
          color: #94a3b8; font-size: .83rem;
          font-family: 'DM Sans', sans-serif;
        }
        .blog-footer a { color: #00d4ff; text-decoration: none; }

        /* ── RESPONSIVE ── */
        @media(max-width:992px) {
          .cards-grid { grid-template-columns: 1fr 1fr; }
        }
        @media(max-width:768px) {
          .blog-header { padding: 0 16px; }
          .blog-nav a:not(.blog-nav-cta) { display: none; }
          .blog-hero, .cards-grid { padding-left: 16px; padding-right: 16px; }
          .cards-grid { grid-template-columns: 1fr; }
          .blog-hero h1 { font-size: 2.6rem; }
        }
      `}</style>

      <div className="blog-root">

        {/* ── HEADER / NAVBAR ── */}
        <header className="blog-header">
          <a href="https://sajawalraza.vercel.app" className="blog-logo">
            <img src="/images/logo.png" alt="Sajawal Raza Mandra" />
          </a>
          <nav className="blog-nav">
            <a href="https://sajawalraza.vercel.app/#about">About</a>
            <a href="https://sajawalraza.vercel.app/#services">Services</a>
            <a href="https://sajawalraza.vercel.app/#work">Work</a>
            <a href="https://sajawalraza.vercel.app/#packages">Packages</a>
            <a href="/blog" className="active">Blog</a>
            <a href="https://sajawalraza.vercel.app/#contact" className="blog-nav-cta">
              Contact
            </a>
          </nav>
        </header>

        {/* ── HERO ── */}
        <section className="blog-hero">
          <div className="hero-tag">Developer Insights</div>
          <h1>
            Crafting Digital<br />
            <span>Insights</span>
          </h1>
          <p>
            15 deep-dives into React, Next.js, MERN Stack, Shopify, SEO,
            Freelancing &amp; Performance — written from 40+ real projects across
            Pakistan and beyond.
          </p>
        </section>

        {/* ── CARDS GRID ── */}
        <section className="cards-grid">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-card"
              style={{ animationDelay: `${index * 0.055}s` }}
            >
              <div className="glow-orb" />

              {/* Cover image */}
              <div className="card-img-wrap">
                <img
                  src={
                    post.img ||
                    `https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop`
                  }
                  alt={post.title}
                  loading="lazy"
                />
                <div className="tags">
                  <div className="tag tag-primary">{post.category || post.tags[0]}</div>
                  {post.tags.slice(0, 2).map((tag: string) => (
                    <div className="tag" key={tag}>{tag}</div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="card-content">
                <div className="meta">
                  <span>{post.date}</span>
                  <span className="meta-dot" />
                  <span>📖 {post.readTime}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="card-footer">
                  <div className="read-more">Read Article →</div>
                  <div className="card-topics">
                    {post.tags.slice(0, 2).map((tag: string) => (
                      <span className="card-topic" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* ── FOOTER ── */}
        <footer className="blog-footer">
          © 2026{" "}
          <a href="https://sajawalraza.vercel.app">Sajawal Raza Mandra</a> —
          Professional Web Developer Pakistan &nbsp;·&nbsp; All rights reserved
        </footer>

      </div>
    </>
  )
}