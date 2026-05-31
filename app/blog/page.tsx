import Link from "next/link"
import { posts } from "../../lib/posts"

export default function BlogPage() {
  return (
    <main style={{minHeight:"100vh",background:"#0a0a0f",color:"white"}}>

      {/* Hero */}
      <section style={{padding:"96px 24px 64px",maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(6,182,212,0.1)",border:"1px solid rgba(6,182,212,0.2)",borderRadius:"999px",padding:"6px 16px",marginBottom:"32px"}}>
          <span style={{width:"8px",height:"8px",background:"#22d3ee",borderRadius:"50%",display:"inline-block"}}></span>
          <span style={{color:"#22d3ee",fontSize:"12px",fontWeight:600,letterSpacing:"2px"}}>DEVELOPER INSIGHTS</span>
        </div>
        <h1 style={{fontSize:"clamp(48px,8vw,80px)",fontWeight:900,lineHeight:1.1,marginBottom:"24px"}}>
          Crafting Digital<br/>
          <span style={{background:"linear-gradient(to right,#22d3ee,#3b82f6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Insights</span>
        </h1>
        <p style={{color:"#9ca3af",fontSize:"18px",maxWidth:"600px",lineHeight:1.7}}>
          15 deep-dives into React, Next.js, MERN Stack, Shopify, SEO, Freelancing & Performance — written from 40+ real projects across Pakistan and beyond.
        </p>
      </section>

      {/* Grid */}
      <section style={{padding:"0 24px 96px",maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))",gap:"24px"}}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{textDecoration:"none",display:"flex"}}>
              <div style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"16px",overflow:"hidden",width:"100%",display:"flex",flexDirection:"column"}}>
                
                {/* Cover Image */}
                <div style={{height:"200px",background:"linear-gradient(135deg,#0f172a,#1e293b)",position:"relative",overflow:"hidden"}}>
                  <div style={{position:"absolute",inset:0,background:`linear-gradient(135deg, ${post.color1 || "#06b6d4"}, ${post.color2 || "#3b82f6"})`,opacity:0.15}}/>
                  <div style={{position:"absolute",top:"16px",left:"16px",display:"flex",flexWrap:"wrap",gap:"6px"}}>
                    {post.tags.map((tag) => (
                      <span key={tag} style={{fontSize:"11px",padding:"3px 10px",borderRadius:"999px",background:"rgba(6,182,212,0.2)",color:"#22d3ee",border:"1px solid rgba(6,182,212,0.3)",fontWeight:600,backdropFilter:"blur(4px)"}}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{position:"absolute",bottom:"16px",right:"16px",fontSize:"48px",opacity:0.3}}>
                    {post.emoji || "💻"}
                  </div>
                </div>

                <div style={{padding:"24px",flex:1,display:"flex",flexDirection:"column"}}>
                  {/* Date & Time */}
                  <div style={{color:"#6b7280",fontSize:"13px",marginBottom:"12px",display:"flex",gap:"8px",alignItems:"center"}}>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>🕐 {post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 style={{color:"white",fontWeight:700,fontSize:"18px",lineHeight:1.4,marginBottom:"12px"}}>
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p style={{color:"#9ca3af",fontSize:"14px",lineHeight:1.7,flex:1}}>
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div style={{marginTop:"20px",color:"#22d3ee",fontSize:"13px",fontWeight:600,display:"flex",alignItems:"center",gap:"6px",borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:"16px"}}>
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