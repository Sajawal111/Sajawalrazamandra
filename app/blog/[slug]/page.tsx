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

  return (
    <main style={{minHeight:"100vh",background:"#0a0a0f",color:"white"}}>
      
      {/* Back Button */}
      <div style={{maxWidth:"800px",margin:"0 auto",padding:"32px 24px 0"}}>
        <Link href="/blog" style={{display:"inline-flex",alignItems:"center",gap:"8px",color:"#22d3ee",textDecoration:"none",fontSize:"14px",fontWeight:500}}>
          ← Back to Blog
        </Link>
      </div>

      {/* Hero */}
      <section style={{maxWidth:"800px",margin:"0 auto",padding:"40px 24px 64px"}}>
        
        {/* Tags */}
        <div style={{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"24px"}}>
          {post!.tags.map((tag) => (
            <span key={tag} style={{fontSize:"12px",padding:"4px 12px",borderRadius:"999px",background:"rgba(6,182,212,0.1)",color:"#22d3ee",border:"1px solid rgba(6,182,212,0.2)",fontWeight:500}}>
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 style={{fontSize:"clamp(32px,5vw,52px)",fontWeight:900,lineHeight:1.15,marginBottom:"24px",color:"white"}}>
          {post!.title}
        </h1>

        {/* Meta */}
        <div style={{display:"flex",gap:"16px",alignItems:"center",color:"#6b7280",fontSize:"14px",marginBottom:"40px",flexWrap:"wrap"}}>
          <span>✍️ Sajawal Raza Mandra</span>
          <span>•</span>
          <span>📅 {post!.date}</span>
          <span>•</span>
          <span>🕐 {post!.readTime}</span>
        </div>

        {/* Divider */}
        <div style={{height:"1px",background:"linear-gradient(to right,#06b6d4,transparent)",marginBottom:"48px"}}/>

        {/* Excerpt as Intro */}
        <div style={{background:"rgba(6,182,212,0.05)",border:"1px solid rgba(6,182,212,0.15)",borderLeft:"3px solid #22d3ee",borderRadius:"8px",padding:"20px 24px",marginBottom:"40px"}}>
          <p style={{color:"#e2e8f0",fontSize:"18px",lineHeight:1.8,margin:0,fontStyle:"italic"}}>
            {post!.excerpt}
          </p>
        </div>

        {/* Article Content */}
        <div style={{color:"#cbd5e1",fontSize:"16px",lineHeight:1.9}}>
          {post!.content ? (
            <div dangerouslySetInnerHTML={{__html: post!.content}} />
          ) : (
            <div>
              <p>This is a detailed article about <strong style={{color:"white"}}>{post!.title}</strong>.</p>
              <br/>
              <h2 style={{color:"white",fontSize:"24px",fontWeight:700,marginBottom:"16px"}}>Introduction</h2>
              <p>{post!.excerpt}</p>
              <br/>
              <h2 style={{color:"white",fontSize:"24px",fontWeight:700,marginBottom:"16px"}}>Key Points</h2>
              {post!.tags.map((tag) => (
                <div key={tag} style={{display:"flex",alignItems:"flex-start",gap:"12px",marginBottom:"16px"}}>
                  <span style={{color:"#22d3ee",fontWeight:700,minWidth:"20px"}}>→</span>
                  <p style={{margin:0}}>Deep dive into <strong style={{color:"white"}}>{tag}</strong> concepts and practical implementation for Pakistani developers and businesses.</p>
                </div>
              ))}
              <br/>
              <h2 style={{color:"white",fontSize:"24px",fontWeight:700,marginBottom:"16px"}}>Conclusion</h2>
              <p>As a developer with 3+ years of experience and 40+ projects delivered across Pakistan and beyond, I hope this guide helps you make the right decisions for your projects.</p>
              <br/>
              <p>Have questions? <Link href="/#contact" style={{color:"#22d3ee"}}>Contact me directly</Link> — I respond to every message.</p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div style={{marginTop:"64px",padding:"32px",background:"rgba(6,182,212,0.05)",border:"1px solid rgba(6,182,212,0.15)",borderRadius:"16px",textAlign:"center"}}>
          <h3 style={{color:"white",fontSize:"22px",fontWeight:700,marginBottom:"12px"}}>Need a Web Developer?</h3>
          <p style={{color:"#9ca3af",marginBottom:"24px"}}>I build fast, beautiful websites for Pakistani businesses. Let's talk!</p>
          <Link href="/#contact" style={{display:"inline-block",background:"linear-gradient(to right,#06b6d4,#3b82f6)",color:"white",padding:"12px 32px",borderRadius:"8px",textDecoration:"none",fontWeight:600}}>
            Hire Me →
          </Link>
        </div>

      </section>
    </main>
  )
}