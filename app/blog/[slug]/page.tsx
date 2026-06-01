import { posts, getPostBySlug } from "../../../lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"

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

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Sajawal Raza Mandra`,
    description: post.excerpt,
    keywords: post.tags.join(", ") + ", web developer pakistan, sajawal raza mandra",
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://sajawalraza.vercel.app/blog/${post.slug}`,
      images: [{ url: articleImages[post.slug] || "" }],
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = posts.filter(p => p.slug !== post.slug).slice(0, 2)
  const img = articleImages[post.slug] || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop"

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;700&display=swap');
        :root{--accent:#00d4ff;}
        .art-root{
          font-family:'DM Sans',sans-serif;
          background:
            linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px),
            #050816;
          background-size:60px 60px;
          color:#f4f7ff;
          min-height:100vh;
        }
        #progress-bar{position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,#00d4ff,#00f0ff);width:0%;z-index:2000;box-shadow:0 0 16px rgba(0,212,255,.7);}
        .back-btn{
          position:fixed;top:86px;left:22px;z-index:1100;
          display:inline-flex;align-items:center;gap:8px;
          padding:9px 16px;
          background:rgba(15,23,42,.95);
          backdrop-filter:blur(16px);
          border:1px solid rgba(0,212,255,.28);
          border-radius:50px;color:#00d4ff;
          font-family:'DM Sans',sans-serif;font-size:.79rem;font-weight:600;
          letter-spacing:.06em;
          text-decoration:none;
          transition:all .3s cubic-bezier(.16,1,.3,1);
          box-shadow:0 4px 20px rgba(0,0,0,.4);
        }
        .back-btn:hover{background:rgba(0,212,255,.1);border-color:rgba(0,212,255,.5);transform:translateX(-4px);}
        .article-hero{position:relative;height:62vh;overflow:hidden;padding-top:72px;}
        .article-hero img{width:100%;height:100%;object-fit:cover;filter:brightness(.38);}
        .article-overlay{position:absolute;inset:0;background:linear-gradient(to top,#050816 6%,transparent 58%);}
        .article-content{position:absolute;bottom:48px;left:50%;transform:translateX(-50%);width:100%;max-width:860px;padding:0 32px;}
        .art-tag{display:inline-flex;align-items:center;gap:8px;padding:5px 13px;border:1px solid rgba(0,212,255,.3);border-radius:50px;font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;color:#00d4ff;margin-bottom:14px;}
        .article-content h1{font-family:'Syne',sans-serif;font-size:clamp(1.8rem,4.5vw,3.8rem);line-height:1.05;letter-spacing:-.05em;margin-bottom:14px;color:#f4f7ff;}
        .article-meta{display:flex;gap:14px;font-size:.8rem;color:#94a3b8;flex-wrap:wrap;align-items:center;}
        .article-meta span::before{content:'· ';opacity:.5;}
        .article-meta span:first-child::before{content:'';}
        .article-body{max-width:780px;margin:auto;padding:64px 24px 120px;}
        .article-body h2{font-family:'Syne',sans-serif;font-size:1.7rem;margin:48px 0 14px;letter-spacing:-.04em;color:#f4f7ff;}
        .article-body h3{font-family:'Syne',sans-serif;font-size:1.2rem;margin:32px 0 10px;color:#f4f7ff;}
        .article-body p{font-size:1rem;line-height:1.9;color:#cbd5e1;margin-bottom:22px;}
        .article-body pre{background:#0b1023;padding:22px;border-radius:14px;overflow-x:auto;margin:32px 0;border:1px solid rgba(255,255,255,.07);}
        .article-body code{color:#00d4ff;font-size:.88rem;font-family:'Courier New',monospace;}
        .article-intro{font-size:1.06rem;line-height:1.98;color:#cbd5e1;border-left:3px solid #00d4ff;padding-left:20px;margin-bottom:32px;}
        .al{list-style:none;margin:14px 0 26px;display:flex;flex-direction:column;gap:10px;padding:0;}
        .al li{background:rgba(0,212,255,.05);border:1px solid rgba(0,212,255,.12);border-radius:12px;padding:12px 16px;font-size:.94rem;line-height:1.7;color:#cbd5e1;}
        .ct{margin:32px 0;overflow-x:auto;}
        .ct table{width:100%;border-collapse:collapse;font-size:.88rem;}
        .ct th{background:rgba(0,212,255,.13);color:#00d4ff;padding:12px 16px;text-align:left;font-family:'Syne',sans-serif;font-size:.78rem;letter-spacing:.06em;text-transform:uppercase;border-bottom:1px solid rgba(0,212,255,.2);}
        .ct td{padding:11px 16px;border-bottom:1px solid rgba(255,255,255,.07);color:#cbd5e1;}
        .ct tr:nth-child(even) td{background:rgba(0,212,255,.03);}
        .ct tr:hover td{background:rgba(0,212,255,.06);}
        .author-card{display:flex;align-items:center;gap:14px;margin-top:56px;padding:22px;background:rgba(0,212,255,.05);border:1px solid rgba(0,212,255,.18);border-radius:14px;}
        .av{width:48px;height:48px;border-radius:50%;background:#00d4ff;color:#000;display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-weight:800;font-size:.95rem;flex-shrink:0;}
        .ai strong{display:block;color:#f4f7ff;font-size:.92rem;margin-bottom:3px;}
        .ai span{color:#94a3b8;font-size:.77rem;}
        .related-wrap{margin-top:52px;padding-top:40px;border-top:1px solid rgba(255,255,255,.07);}
        .related-wrap h3{font-family:'Syne',sans-serif;font-size:1.3rem;margin-bottom:18px;color:#f4f7ff;}
        .related-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;}
        .related-card{padding:16px 18px;background:rgba(15,23,42,.72);border:1px solid rgba(255,255,255,.07);border-radius:12px;text-decoration:none;display:block;transition:.3s;}
        .related-card:hover{border-color:rgba(0,212,255,.35);background:rgba(0,212,255,.04);}
        .rc-tag{font-size:.65rem;text-transform:uppercase;letter-spacing:.08em;color:#00d4ff;margin-bottom:6px;}
        .related-card h4{font-family:'Syne',sans-serif;font-size:.92rem;color:#f4f7ff;line-height:1.3;}
        .hire-cta{margin-top:48px;padding:32px;background:rgba(0,212,255,.05);border:1px solid rgba(0,212,255,.18);border-radius:16px;text-align:center;}
        .hire-cta h3{font-family:'Syne',sans-serif;font-size:1.4rem;color:#f4f7ff;margin-bottom:10px;}
        .hire-cta p{color:#94a3b8;margin-bottom:20px;}
        .hire-btn{display:inline-block;background:linear-gradient(135deg,#00d4ff,#0088ff);color:#000;padding:12px 32px;border-radius:8px;text-decoration:none;font-weight:700;font-size:.9rem;transition:.3s;}
        .hire-btn:hover{opacity:.85;transform:translateY(-2px);}
        footer{padding:40px 56px;text-align:center;border-top:1px solid rgba(255,255,255,.07);color:#94a3b8;font-size:.83rem;}
        footer a{color:#00d4ff;text-decoration:none;}
        @media(max-width:768px){.related-grid{grid-template-columns:1fr;}.article-content{bottom:24px;}.back-btn{top:80px;left:12px;font-size:.72rem;padding:7px 12px;}}
      `}</style>

      <div className="art-root">
        <div id="progress-bar"></div>

        <Link href="/blog" className="back-btn">← Back to Blog</Link>

        {/* Hero */}
        <div className="article-hero">
          <img src={img} alt={post!.title} />
          <div className="article-overlay"></div>
          <div className="article-content">
            <div className="art-tag">{post!.category}</div>
            <h1>{post!.title}</h1>
            <div className="article-meta">
              <span>{post!.date}</span>
              <span>{post!.readTime}</span>
              <span>Sajawal Raza Mandra</span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="article-body">
          <p className="article-intro">{post!.excerpt}</p>

          <div dangerouslySetInnerHTML={{ __html: post!.content || "" }} />

          {/* Related */}
          <div className="related-wrap">
            <h3>Related Articles</h3>
            <div className="related-grid">
              {related.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="related-card">
                  <div className="rc-tag">{r.category}</div>
                  <h4>{r.title}</h4>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="hire-cta">
            <h3>Need a Web Developer?</h3>
            <p>I build fast, beautiful websites for Pakistani businesses. Let's talk!</p>
            <Link href="/#contact" className="hire-btn">Hire Me →</Link>
          </div>
        </div>

        <footer>
          © 2026 <a href="https://sajawalraza.vercel.app">Sajawal Raza Mandra</a> — Professional Web Developer Pakistan
        </footer>
      </div>

      <script dangerouslySetInnerHTML={{__html: `
        window.addEventListener('scroll', () => {
          const s = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
          const bar = document.getElementById('progress-bar');
          if(bar) bar.style.width = s + '%';
        });
      `}} />
    </>
  )
}