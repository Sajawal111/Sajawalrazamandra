// app/blog/[slug]/page.tsx
// Paste this file at: app/blog/[slug]/page.tsx

import { posts, getPostBySlug } from "../../../lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
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

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  // Pick 2 related posts (different slug)
  const related = posts.filter((p) => p.slug !== params.slug).slice(0, 2)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;700&display=swap');

        .slug-root {
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
        .slug-header {
          position: fixed; top: 0; left: 0; right: 0; height: 72px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 52px; z-index: 1000;
          background: rgba(5,8,22,.92);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255,255,255,.07);
        }
        .slug-logo img { height: 38px; }
        .slug-nav { display: flex; gap: 6px; align-items: center; }
        .slug-nav a {
          text-decoration: none; color: #94a3b8;
          font-size: .82rem; font-weight: 500;
          letter-spacing: .06em; text-transform: uppercase;
          padding: 6px 12px; border-radius: 6px;
          transition: color .2s, background .2s;
        }
        .slug-nav a:hover { color: #f4f7ff; }
        .slug-nav a.active { color: #00d4ff; }
        .slug-nav-cta {
          padding: 9px 22px !important;
          border: 1.5px solid #00d4ff !important;
          border-radius: 6px !important;
          color: #00d4ff !important;
          font-weight: 600 !important;
          margin-left: 8px;
        }
        .slug-nav-cta:hover { background: rgba(0,212,255,.12) !important; }

        /* ── BACK BUTTON ── */
        .back-btn {
          position: fixed; top: 86px; left: 22px; z-index: 1100;
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 16px;
          background: rgba(15,23,42,.95);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(0,212,255,.28);
          border-radius: 50px; color: #00d4ff;
          font-family: 'DM Sans', sans-serif;
          font-size: .79rem; font-weight: 600;
          letter-spacing: .06em; text-decoration: none;
          transition: all .3s cubic-bezier(.16,1,.3,1);
          box-shadow: 0 4px 20px rgba(0,0,0,.4);
        }
        .back-btn:hover {
          background: rgba(0,212,255,.1);
          border-color: rgba(0,212,255,.5);
          transform: translateX(-4px);
        }

        /* ── ARTICLE HERO ── */
        .article-hero {
          position: relative; height: 62vh; overflow: hidden;
          padding-top: 72px;
        }
        .article-hero img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(.38);
        }
        .article-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, #050816 6%, transparent 58%);
        }
        .article-content {
          position: absolute; bottom: 48px;
          left: 50%; transform: translateX(-50%);
          width: 100%; max-width: 860px; padding: 0 32px;
        }
        .art-tag {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 5px 13px;
          border: 1px solid rgba(0,212,255,.3); border-radius: 50px;
          font-size: .68rem; letter-spacing: .1em; text-transform: uppercase;
          color: #00d4ff; margin-bottom: 14px;
        }
        .article-content h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 4.5vw, 3.8rem);
          line-height: 1.05; letter-spacing: -.05em;
          margin-bottom: 14px; color: #f4f7ff;
        }
        .article-meta {
          display: flex; gap: 14px; font-size: .8rem;
          color: #94a3b8; flex-wrap: wrap; align-items: center;
        }

        /* ── ARTICLE BODY ── */
        .article-body {
          max-width: 780px; margin: auto;
          padding: 64px 24px 120px;
        }
        .article-body h2 {
          font-family: 'Syne', sans-serif;
          font-size: 1.7rem; margin: 48px 0 14px;
          letter-spacing: -.04em; color: #f4f7ff;
        }
        .article-body h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1.2rem; margin: 32px 0 10px;
          letter-spacing: -.02em; color: #f4f7ff;
        }
        .article-body p {
          font-size: 1rem; line-height: 1.9;
          color: #cbd5e1; margin-bottom: 22px;
        }
        .article-body pre {
          background: #0b1023; padding: 22px;
          border-radius: 14px; overflow-x: auto;
          margin: 32px 0;
          border: 1px solid rgba(255,255,255,.07);
        }
        .article-body code {
          color: #00d4ff; font-size: .88rem;
          font-family: 'Courier New', monospace;
        }
        .article-body ul {
          list-style: none; margin: 14px 0 26px;
          display: flex; flex-direction: column; gap: 10px;
          padding: 0;
        }
        .article-body li {
          background: rgba(0,212,255,.05);
          border: 1px solid rgba(0,212,255,.12);
          border-radius: 12px; padding: 12px 16px;
          font-size: .94rem; line-height: 1.7; color: #cbd5e1;
        }
        .article-body table {
          width: 100%; border-collapse: collapse;
          font-size: .88rem; margin: 32px 0; overflow-x: auto;
        }
        .article-body th {
          background: rgba(0,212,255,.13); color: #00d4ff;
          padding: 12px 16px; text-align: left;
          font-family: 'Syne', sans-serif;
          font-size: .78rem; letter-spacing: .06em; text-transform: uppercase;
          border-bottom: 1px solid rgba(0,212,255,.2);
        }
        .article-body td {
          padding: 11px 16px;
          border-bottom: 1px solid rgba(255,255,255,.07);
          color: #cbd5e1;
        }
        .article-body tr:nth-child(even) td { background: rgba(0,212,255,.03); }

        /* ── EXCERPT INTRO BLOCK ── */
        .article-intro-block {
          background: rgba(0,212,255,.05);
          border: 1px solid rgba(0,212,255,.15);
          border-left: 3px solid #00d4ff;
          border-radius: 8px; padding: 20px 24px;
          margin-bottom: 48px;
        }
        .article-intro-block p {
          color: #e2e8f0; font-size: 1.05rem;
          line-height: 1.85; margin: 0; font-style: italic;
        }

        /* ── CTA BLOCK ── */
        .cta-block {
          margin-top: 64px; padding: 32px;
          background: rgba(0,212,255,.05);
          border: 1px solid rgba(0,212,255,.15);
          border-radius: 16px; text-align: center;
        }
        .cta-block h3 {
          color: #f4f7ff; font-family: 'Syne', sans-serif;
          font-size: 1.4rem; font-weight: 700; margin-bottom: 12px;
        }
        .cta-block p { color: #94a3b8; margin-bottom: 24px; }
        .cta-btn {
          display: inline-block;
          background: linear-gradient(to right, #06b6d4, #3b82f6);
          color: white; padding: 12px 32px;
          border-radius: 8px; text-decoration: none;
          font-weight: 600; font-size: .9rem;
          letter-spacing: .04em;
          transition: opacity .2s, transform .2s;
        }
        .cta-btn:hover { opacity: .88; transform: translateY(-2px); }

        /* ── RELATED ── */
        .related-wrap {
          margin-top: 52px; padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,.07);
        }
        .related-wrap h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1.3rem; margin-bottom: 18px; color: #f4f7ff;
        }
        .related-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 14px; }
        .related-card {
          padding: 16px 18px;
          background: rgba(15,23,42,.72);
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 12px; text-decoration: none;
          transition: border-color .3s, background .3s;
          display: block;
        }
        .related-card:hover {
          border-color: rgba(0,212,255,.35);
          background: rgba(0,212,255,.04);
        }
        .related-tag {
          font-size: .65rem; text-transform: uppercase;
          letter-spacing: .08em; color: #00d4ff; margin-bottom: 6px;
        }
        .related-card h4 {
          font-family: 'Syne', sans-serif;
          font-size: .92rem; color: #f4f7ff; line-height: 1.3;
        }

        /* ── AUTHOR CARD ── */
        .author-card {
          display: flex; align-items: center; gap: 14px;
          margin-top: 48px; padding: 22px;
          background: rgba(0,212,255,.05);
          border: 1px solid rgba(0,212,255,.18);
          border-radius: 14px;
        }
        .author-av {
          width: 48px; height: 48px; border-radius: 50%;
          background: #00d4ff; color: #000;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: .95rem; flex-shrink: 0;
        }
        .author-info strong { display: block; color: #f4f7ff; font-size: .92rem; margin-bottom: 3px; }
        .author-info span { color: #94a3b8; font-size: .77rem; }

        /* ── FOOTER ── */
        .slug-footer {
          padding: 40px 56px; text-align: center;
          border-top: 1px solid rgba(255,255,255,.07);
          color: #94a3b8; font-size: .83rem;
          font-family: 'DM Sans', sans-serif;
        }
        .slug-footer a { color: #00d4ff; text-decoration: none; }

        /* ── RESPONSIVE ── */
        @media(max-width:768px) {
          .slug-header { padding: 0 16px; }
          .slug-nav a:not(.slug-nav-cta) { display: none; }
          .article-body { padding: 40px 16px 80px; }
          .related-grid { grid-template-columns: 1fr; }
          .back-btn { top: 80px; left: 10px; }
        }
      `}</style>

      <div className="slug-root">

        {/* ── HEADER / NAVBAR ── */}
        <header className="slug-header">
          <a href="https://sajawalraza.vercel.app" className="slug-logo">
            <img src="/images/logo.png" alt="Sajawal Raza Mandra" />
          </a>
          <nav className="slug-nav">
            <a href="https://sajawalraza.vercel.app/#about">About</a>
            <a href="https://sajawalraza.vercel.app/#services">Services</a>
            <a href="https://sajawalraza.vercel.app/#work">Work</a>
            <a href="https://sajawalraza.vercel.app/#packages">Packages</a>
            <a href="/blog" className="active">Blog</a>
            <a href="https://sajawalraza.vercel.app/#contact" className="slug-nav-cta">
              Contact
            </a>
          </nav>
        </header>

        {/* ── BACK BUTTON ── */}
        <Link href="/blog" className="back-btn">
          ← Back to Blog
        </Link>

        {/* ── ARTICLE HERO ── */}
        <div className="article-hero">
          <img
            src={
              post!.img ||
              `https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop`
            }
            alt={post!.title}
          />
          <div className="article-overlay" />
          <div className="article-content">
            <div className="art-tag">{post!.category || post!.tags[0]}</div>
            <h1>{post!.title}</h1>
            <div className="article-meta">
              <span>✍️ Sajawal Raza Mandra</span>
              <span>·</span>
              <span>📅 {post!.date}</span>
              <span>·</span>
              <span>🕐 {post!.readTime}</span>
            </div>
          </div>
        </div>

        {/* ── ARTICLE BODY ── */}
        <div className="article-body">

          {/* Intro block */}
          <div className="article-intro-block">
            <p>{post!.excerpt}</p>
          </div>

          {/* Main content */}
          {post!.content ? (
            <div dangerouslySetInnerHTML={{ __html: post!.content }} />
          ) : (
            <p>Article content coming soon.</p>
          )}

          {/* Author */}
          <div className="author-card">
            <div className="author-av">SR</div>
            <div className="author-info">
              <strong>Sajawal Raza Mandra</strong>
              <span>Professional Web Developer · Pakistan · 40+ Projects Delivered</span>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-block">
            <h3>Need a Web Developer?</h3>
            <p>I build fast, beautiful websites for Pakistani businesses. Let&apos;s talk!</p>
            <a href="https://sajawalraza.vercel.app/#contact" className="cta-btn">
              Hire Me →
            </a>
          </div>

          {/* Related */}
          <div className="related-wrap">
            <h3>Related Articles</h3>
            <div className="related-grid">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="related-card">
                  <div className="related-tag">{r.category || r.tags[0]}</div>
                  <h4>{r.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer className="slug-footer">
          © 2026{" "}
          <a href="https://sajawalraza.vercel.app">Sajawal Raza Mandra</a> —
          Professional Web Developer Pakistan &nbsp;·&nbsp; All rights reserved
        </footer>

      </div>
    </>
  )
}