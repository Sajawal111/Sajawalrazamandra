// lib/posts.js
// Paste this file at: lib/posts.js
// Added: img field for article hero images, category field

export const posts = [
  {
    slug: "react-vs-nextjs-2026",
    title: "React.js vs Next.js — What Should You Use in 2026?",
    date: "May 2026",
    readTime: "8 min read",
    category: "REACT & NEXT.JS",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1400&auto=format&fit=crop",
    excerpt: "Performance, SEO, scalability and developer experience — complete breakdown after 40+ real-world projects for Pakistani developers and freelancers.",
    tags: ["SSR", "SEO"],
    emoji: "⚡",
    color1: "#06b6d4",
    color2: "#3b82f6",
    content: `
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:0 0 16px;font-family:'Syne',sans-serif">What's the Real Difference?</h2>
      <p>React.js is a UI library — it renders components in the browser. Next.js is a full framework built on top of React that adds SSR, SSG, file-based routing, API routes, and much more. After building 40+ projects for Pakistani clients, here's my honest breakdown.</p>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">SEO — Next.js Wins Every Time</h2>
      <p>Pure React apps are client-side rendered. Google can crawl them but slowly and inconsistently. Next.js with SSR or SSG gives Google fully rendered HTML — your pages index faster and rank higher. For Pakistani business websites where local SEO matters, this is huge.</p>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Performance</h2>
      <p>Next.js has built-in image optimization, automatic code splitting, and edge caching via Vercel. A typical Next.js site scores 90+ on PageSpeed. React alone requires manual optimization. For clients who want fast sites without paying for extra optimization work — Next.js is the answer.</p>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">When to Use React Only</h2>
      <ul>
        <li>Internal dashboards (no SEO needed)</li>
        <li>Admin panels behind login</li>
        <li>Mobile apps with React Native</li>
        <li>When your team already has a React setup</li>
      </ul>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">When to Use Next.js</h2>
      <ul>
        <li>Business websites (SEO critical)</li>
        <li>E-commerce stores</li>
        <li>Portfolios and blogs</li>
        <li>Any public-facing website in Pakistan</li>
        <li>Freelance projects for clients</li>
      </ul>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">My Recommendation</h2>
      <p>If you're a Pakistani freelancer or developer — learn Next.js. It's what clients need, it ranks better on Google, deploys free on Vercel, and is the industry standard in 2026. React knowledge transfers directly — Next.js is just React with superpowers.</p>
    `,
  },
  {
    slug: "how-to-build-shopify-store-pakistani-brands-2026",
    title: "How to Build a Shopify Store for Pakistani Brands in 2026",
    date: "May 2026",
    readTime: "6 min read",
    category: "E-COMMERCE",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop",
    excerpt: "Complete 2-day workflow — products, checkout, COD, JazzCash, EasyPaisa setup — from a developer who built 10+ Shopify stores for local Pakistani clients.",
    tags: ["E-Commerce", "COD"],
    emoji: "🛒",
    color1: "#8b5cf6",
    color2: "#ec4899",
    content: `
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:0 0 16px;font-family:'Syne',sans-serif">Why Shopify for Pakistani Brands?</h2>
      <p>After building 10+ Shopify stores for local clients, I can say — Shopify is still the fastest way to launch an e-commerce store in Pakistan. COD support, JazzCash integration, and Urdu-friendly themes make it ideal for clothing brands, food businesses, and retail stores.</p>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Day 1 — Store Setup</h2>
      <ul>
        <li>Create Shopify account (14-day free trial)</li>
        <li>Choose a theme — Dawn or Sense work great for Pakistani brands</li>
        <li>Add your logo, brand colors, and fonts</li>
        <li>Set up Collections (Men, Women, Kids etc.)</li>
        <li>Add 10-15 products with proper images and descriptions</li>
        <li>Set up shipping zones for Pakistan cities</li>
      </ul>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Day 2 — Payments & Launch</h2>
      <ul>
        <li>Install COD (Cash on Delivery) — most Pakistani customers prefer this</li>
        <li>Add JazzCash or EasyPaisa via Shopify payment apps</li>
        <li>Set up order confirmation WhatsApp messages</li>
        <li>Test checkout flow completely</li>
        <li>Connect custom domain</li>
        <li>Launch!</li>
      </ul>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Must-Have Shopify Apps for Pakistan</h2>
      <ul>
        <li><strong style="color:#f4f7ff">COD King</strong> — Best COD management app</li>
        <li><strong style="color:#f4f7ff">WhatsApp Chat</strong> — Customer support</li>
        <li><strong style="color:#f4f7ff">Product Reviews</strong> — Social proof</li>
        <li><strong style="color:#f4f7ff">SEO Manager</strong> — Google ranking</li>
        <li><strong style="color:#f4f7ff">Currency Converter</strong> — For international buyers</li>
      </ul>
    `,
  },
  {
    slug: "mern-stack-2026-worth-learning-pakistan",
    title: "MERN Stack in 2026 — Still Worth Learning in Pakistan?",
    date: "April 2026",
    readTime: "10 min read",
    category: "MERN",
    img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1400&auto=format&fit=crop",
    excerpt: "MongoDB, Express, React, Node — why MERN still dominates Pakistani freelancing and startup development despite newer alternatives like T3 Stack and Bun.",
    tags: ["MongoDB", "Node.js"],
    emoji: "🧱",
    color1: "#10b981",
    color2: "#06b6d4",
    content: `
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:0 0 16px;font-family:'Syne',sans-serif">MERN in 2026 — Still Relevant?</h2>
      <p>Short answer: Yes. Long answer: MERN Stack (MongoDB, Express.js, React.js, Node.js) is still the most in-demand full-stack skill for Pakistani freelancers on Fiverr, Upwork, and local job markets. Here's why.</p>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Why Pakistani Clients Still Want MERN</h2>
      <ul>
        <li>Most Pakistani startup MVPs are built on MERN</li>
        <li>Fiverr gigs for MERN developers earn $300-$2000 per project</li>
        <li>Local companies actively hiring MERN developers (PKR 80k-150k/month)</li>
        <li>JavaScript throughout — one language for frontend and backend</li>
        <li>MongoDB Atlas free tier — perfect for Pakistani startup budgets</li>
      </ul>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">What to Learn in 2026</h2>
      <ul>
        <li><strong style="color:#f4f7ff">MongoDB</strong> — CRUD, aggregation, Mongoose ODM</li>
        <li><strong style="color:#f4f7ff">Express.js</strong> — REST APIs, middleware, authentication</li>
        <li><strong style="color:#f4f7ff">React.js</strong> — Hooks, context, React Query</li>
        <li><strong style="color:#f4f7ff">Node.js</strong> — File system, streams, npm ecosystem</li>
        <li><strong style="color:#f4f7ff">JWT Auth</strong> — Login/register systems</li>
        <li><strong style="color:#f4f7ff">Next.js</strong> — Add this on top for full-stack power</li>
      </ul>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">My Roadmap for Pakistani Developers</h2>
      <p>Month 1-2: HTML, CSS, JavaScript basics. Month 3-4: React.js. Month 5-6: Node.js + Express + MongoDB. Month 7: Build 2-3 full MERN projects. Month 8: Start freelancing on Fiverr. This roadmap works — I followed it myself.</p>
    `,
  },
  {
    slug: "how-to-land-fiverr-client-pakistan",
    title: "How to Land Your First Freelance Client on Fiverr Pakistan",
    date: "April 2026",
    readTime: "7 min read",
    category: "FREELANCING",
    img: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1400&auto=format&fit=crop",
    excerpt: "Exact strategy for getting first orders with zero reviews — Fiverr profile optimization, gig SEO, proposal writing and psychology tips that actually work in 2026.",
    tags: ["Fiverr", "Profile"],
    emoji: "💼",
    color1: "#f59e0b",
    color2: "#ef4444",
    content: `
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:0 0 16px;font-family:'Syne',sans-serif">The Zero-Review Problem</h2>
      <p>Every Pakistani freelancer faces this: you need reviews to get orders, but you need orders to get reviews. I broke this cycle with zero reviews and landed my first Fiverr order in 11 days. Here's exactly what I did.</p>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Step 1 — Profile Optimization</h2>
      <ul>
        <li>Professional photo — clear face, light background, no selfie</li>
        <li>Headline: "I will build [specific thing] for [specific person]"</li>
        <li>Description: Lead with what you deliver, not your education</li>
        <li>Skills: Add all relevant tech stack skills</li>
        <li>Language: Set English proficiency to at least Conversational</li>
      </ul>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Step 2 — Gig SEO (Most Important)</h2>
      <p>Fiverr is a search engine. Your gig title, tags, and description must contain the exact words buyers search for.</p>
      <ul>
        <li>Research: Search your service on Fiverr — note top gig titles</li>
        <li>Title: Include main keyword in first 5 words</li>
        <li>Tags: Use all 5 tags — mix broad and specific</li>
        <li>Description: Repeat keywords naturally 3-4 times</li>
        <li>Packages: Start cheap (PKR 2,500-5,000 equivalent)</li>
      </ul>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Psychology Tips That Work</h2>
      <p>Buyers trust specificity. "I will build a Shopify store for Pakistani clothing brands with COD setup" converts 3x better than "I will build a website." Niche down — especially mentioning Pakistan-specific needs like JazzCash, EasyPaisa, and COD.</p>
    `,
  },
  {
    slug: "website-speed-core-web-vitals-guide-2026",
    title: "Website Speed & Core Web Vitals Complete Guide 2026",
    date: "April 2026",
    readTime: "9 min read",
    category: "PERFORMANCE",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
    excerpt: "LCP, INP, CLS explained with real fixes — how to score 90+ on Google PageSpeed, rank higher in search results and reduce bounce rate significantly.",
    tags: ["LCP", "CLS"],
    emoji: "🚀",
    color1: "#f59e0b",
    color2: "#10b981",
    content: `
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:0 0 16px;font-family:'Syne',sans-serif">Why Core Web Vitals Matter for Pakistani Sites</h2>
      <p>Google uses Core Web Vitals as a ranking factor. Pakistani users on mobile with slower connections need fast sites or they leave in 3 seconds. A slow site loses both rankings and customers. Here's how to fix it.</p>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">The 3 Core Web Vitals Explained</h2>
      <ul>
        <li><strong style="color:#00d4ff">LCP (Largest Contentful Paint)</strong> — How fast does the main content load? Target: under 2.5 seconds</li>
        <li><strong style="color:#00d4ff">INP (Interaction to Next Paint)</strong> — How fast does the page respond to clicks? Target: under 200ms</li>
        <li><strong style="color:#00d4ff">CLS (Cumulative Layout Shift)</strong> — Does the page jump around while loading? Target: under 0.1</li>
      </ul>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Fix LCP — Fastest Wins</h2>
      <ul>
        <li>Use Next.js Image component with priority on hero images</li>
        <li>Convert all images to WebP format</li>
        <li>Add width and height attributes to every img tag</li>
        <li>Host on Vercel or Cloudflare (CDN included free)</li>
        <li>Remove unused CSS and JavaScript</li>
      </ul>
    `,
  },
  {
    slug: "tailwind-css-tricks-ui-design-2026",
    title: "10 Tailwind CSS Tricks That Level Up Your UI Design in 2026",
    date: "March 2026",
    readTime: "5 min read",
    category: "TAILWIND",
    img: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1400&auto=format&fit=crop",
    excerpt: "Glassmorphism, gradient text, group hover, clamp fonts, skeleton loaders — practical Tailwind tricks for premium-looking interfaces that impress clients.",
    tags: ["CSS", "Animation"],
    emoji: "🎨",
    color1: "#06b6d4",
    color2: "#8b5cf6",
    content: `
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:0 0 16px;font-family:'Syne',sans-serif">Why Tailwind UI Tricks Matter</h2>
      <p>The difference between a PKR 15,000 project and a PKR 50,000 project is often just the UI polish. These 10 Tailwind tricks take 5 minutes each to implement but make your interfaces look premium.</p>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">1. Glassmorphism Cards</h2>
      <pre><code>class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl"</code></pre>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">2. Gradient Text</h2>
      <pre><code>class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"</code></pre>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">3. Group Hover Effects</h2>
      <pre><code>&lt;div class="group"&gt;
  &lt;h2 class="group-hover:text-cyan-400 transition"&gt;Title&lt;/h2&gt;
  &lt;span class="group-hover:translate-x-2 transition"&gt;→&lt;/span&gt;
&lt;/div&gt;</code></pre>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">6-10. More Power Tricks</h2>
      <ul>
        <li><strong style="color:#00d4ff">Ring on focus:</strong> focus:ring-2 focus:ring-cyan-500</li>
        <li><strong style="color:#00d4ff">Animated gradient border:</strong> p-[1px] bg-gradient-to-r from-cyan-500 to-blue-500</li>
        <li><strong style="color:#00d4ff">Line clamp:</strong> line-clamp-3 (truncate text after 3 lines)</li>
        <li><strong style="color:#00d4ff">Aspect ratio:</strong> aspect-video for 16:9 containers</li>
        <li><strong style="color:#00d4ff">Dark scrollbar:</strong> scrollbar-thin scrollbar-thumb-gray-600</li>
      </ul>
    `,
  },
  {
    slug: "complete-seo-guide-pakistani-websites-2026",
    title: "Complete SEO Guide for Pakistani Websites 2026 — Rank on Google",
    date: "March 2026",
    readTime: "11 min read",
    category: "SEO",
    img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1400&auto=format&fit=crop",
    excerpt: "How to rank your Pakistani business website on Google — keyword research, on-page SEO, Google Search Console, backlinks, Google Business Profile and local SEO tactics.",
    tags: ["Keywords", "On-Page"],
    emoji: "📈",
    color1: "#10b981",
    color2: "#3b82f6",
    content: `
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:0 0 16px;font-family:'Syne',sans-serif">SEO for Pakistani Websites in 2026</h2>
      <p>Most Pakistani business websites have zero SEO. That means if you just do the basics, you can outrank your competitors within 2-3 months. Here's the complete playbook.</p>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Step 1 — Keyword Research</h2>
      <p>Use Google's free tools. Search your service in Google, scroll to "People also ask" and "Related searches" — these are real keywords people use.</p>
      <ul>
        <li>Target city-specific keywords: "web developer karachi" not just "web developer"</li>
        <li>Long-tail keywords are easier: "affordable website design karachi" vs "web design"</li>
        <li>Mix Urdu and English: many Pakistani searches happen in Urdu</li>
      </ul>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Step 2 — On-Page SEO</h2>
      <ul>
        <li>Title tag: Include main keyword — under 60 characters</li>
        <li>Meta description: Include keyword + call to action — under 155 characters</li>
        <li>H1 tag: One per page, include keyword</li>
        <li>Image alt text: Describe every image with keywords</li>
        <li>URL structure: sajawalraza.vercel.app/web-developer-karachi</li>
      </ul>
    `,
  },
  {
    slug: "website-banana-ka-kharcha-pakistan-2026",
    title: "Website Banana Ka Kharcha Pakistan 2026 — Real Pricing Guide",
    date: "March 2026",
    readTime: "6 min read",
    category: "PAKISTAN",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1400&auto=format&fit=crop",
    excerpt: "Landing page, business website, e-commerce, full-stack app — Pakistan mein honest pricing breakdown 2026 mein. Cheap vs quality difference explained.",
    tags: ["Budget", "Pakistan"],
    emoji: "💰",
    color1: "#f59e0b",
    color2: "#ef4444",
    content: `
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:0 0 16px;font-family:'Syne',sans-serif">Pakistan Mein Website Ka Asli Kharcha</h2>
      <p>Pakistan mein bahut log bolte hain "website sirf 5,000 mein ban jaati hai." Ye sach hai — lekin aisi website se koi fayda nahi hoga. Yahan main aapko honest pricing de raha hun jo actually kaam karti hai.</p>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Landing Page — PKR 15,000 – 25,000</h2>
      <ul>
        <li>Single page design with all sections</li>
        <li>Mobile responsive</li>
        <li>Contact form with WhatsApp integration</li>
        <li>Basic SEO setup</li>
        <li>Delivery: 3-5 days</li>
      </ul>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Business Website (5-7 Pages) — PKR 30,000 – 50,000</h2>
      <ul>
        <li>Home, About, Services, Portfolio, Contact pages</li>
        <li>Custom design matching brand identity</li>
        <li>Full SEO optimization</li>
        <li>Google Analytics setup</li>
        <li>Delivery: 7-14 days</li>
      </ul>
    `,
  },
  {
    slug: "wordpress-vs-nextjs-pakistani-businesses",
    title: "WordPress vs Next.js — Which is Better for Pakistani Businesses?",
    date: "February 2026",
    readTime: "8 min read",
    category: "COMPARISON",
    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1400&auto=format&fit=crop",
    excerpt: "Speed, SEO, security, cost and maintenance — honest comparison for Pakistani business owners and freelancers deciding which platform to choose in 2026.",
    tags: ["WordPress", "Speed"],
    emoji: "⚔️",
    color1: "#3b82f6",
    color2: "#8b5cf6",
    content: `
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:0 0 16px;font-family:'Syne',sans-serif">The Honest Comparison</h2>
      <p>I build both WordPress and Next.js sites for Pakistani clients. They serve different needs. Here's my honest breakdown after working with 40+ clients.</p>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Speed</h2>
      <ul>
        <li><strong style="color:#00d4ff">WordPress:</strong> 40-60 PageSpeed score typically. Needs optimization plugins (WP Rocket, etc.)</li>
        <li><strong style="color:#00d4ff">Next.js:</strong> 85-95 PageSpeed score out of the box. Built-in optimization.</li>
        <li><strong style="color:#f4f7ff">Winner: Next.js</strong></li>
      </ul>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Security</h2>
      <ul>
        <li><strong style="color:#00d4ff">WordPress:</strong> Hacked frequently. 43% of all websites are WordPress — makes it a big target. Needs security plugins.</li>
        <li><strong style="color:#00d4ff">Next.js:</strong> No CMS vulnerabilities. Static files can't be hacked the traditional way.</li>
        <li><strong style="color:#f4f7ff">Winner: Next.js</strong></li>
      </ul>
    `,
  },
  {
    slug: "how-to-receive-freelancing-payments-pakistan-2026",
    title: "How to Receive Freelancing Payments in Pakistan 2026",
    date: "February 2026",
    readTime: "7 min read",
    category: "FREELANCING",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1400&auto=format&fit=crop",
    excerpt: "Payoneer, Bank Alfalah, Wise, JazzCash — which payment method is best for Pakistani freelancers in 2026, with FBR tax implications explained clearly.",
    tags: ["Payoneer", "Tax"],
    emoji: "💳",
    color1: "#10b981",
    color2: "#f59e0b",
    content: `
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:0 0 16px;font-family:'Syne',sans-serif">Payment Methods for Pakistani Freelancers</h2>
      <p>Getting paid as a Pakistani freelancer has gotten easier in 2026. Here's every method ranked by fees, speed, and ease of use.</p>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">1. Payoneer (Best Overall)</h2>
      <ul>
        <li>Accepted by Fiverr, Upwork, Amazon, and 1000+ platforms</li>
        <li>Transfer to Pakistani bank: 1-3 business days</li>
        <li>Fee: ~2% + currency conversion</li>
        <li>FBR registered — legal and recognized by Pakistani banks</li>
        <li>Get a Payoneer Mastercard for direct spending</li>
      </ul>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">2. Wise (Best for Low Fees)</h2>
      <ul>
        <li>Mid-market exchange rate — best conversion rates</li>
        <li>Fee: 0.4-1.5% (much lower than Payoneer)</li>
        <li>Send money from 60+ countries</li>
        <li>Direct clients can pay you easily</li>
        <li>Not accepted by Fiverr/Upwork directly</li>
      </ul>
    `,
  },
  {
    slug: "rest-api-integration-nextjs-complete-guide",
    title: "REST API Integration in Next.js — Complete Guide with Real Examples",
    date: "January 2026",
    readTime: "9 min read",
    category: "API",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop",
    excerpt: "Connecting Next.js apps to payment gateways, WhatsApp API, Google Maps, email services and custom backends with proper authentication and error handling.",
    tags: ["REST", "JazzCash"],
    emoji: "🔗",
    color1: "#8b5cf6",
    color2: "#06b6d4",
    content: `
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:0 0 16px;font-family:'Syne',sans-serif">REST APIs in Next.js — The Basics</h2>
      <p>Modern web apps connect to dozens of external services. Here's how to integrate the most common APIs Pakistani developers need.</p>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Fetching Data — Server Component (Best Practice)</h2>
      <pre><code>// app/products/page.tsx
async function getProducts() {
  const res = await fetch('https://api.example.com/products', {
    next: { revalidate: 3600 } // cache for 1 hour
  })
  return res.json()
}</code></pre>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">WhatsApp API Integration</h2>
      <pre><code>// Send WhatsApp message on form submit
const sendWhatsApp = (message) => {
  const phone = "923111101898" // Pakistan format
  const url = \`https://wa.me/\${phone}?text=\${encodeURIComponent(message)}\`
  window.open(url, '_blank')
}</code></pre>
    `,
  },
  {
    slug: "how-to-build-portfolio-website-gets-clients-2026",
    title: "How to Build a Portfolio Website That Gets You Clients in 2026",
    date: "January 2026",
    readTime: "8 min read",
    category: "PORTFOLIO",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1400&auto=format&fit=crop",
    excerpt: "What every developer portfolio must have — projects with live links, case studies, SEO, Google ranking for your name and psychological trust factors.",
    tags: ["Portfolio", "Career"],
    emoji: "🎯",
    color1: "#ec4899",
    color2: "#8b5cf6",
    content: `
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:0 0 16px;font-family:'Syne',sans-serif">Why Most Developer Portfolios Fail</h2>
      <p>99% of Pakistani developer portfolios are just lists of skills and a contact form. They don't convert visitors into clients. Here's what actually works.</p>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Must-Have Sections</h2>
      <ul>
        <li><strong style="color:#00d4ff">Hero:</strong> Clear headline — what you do, who you help, where you're based</li>
        <li><strong style="color:#00d4ff">Stats:</strong> Years experience, projects delivered, client satisfaction — numbers build trust</li>
        <li><strong style="color:#00d4ff">Services:</strong> Specific services with descriptions — not just "web development"</li>
        <li><strong style="color:#00d4ff">Portfolio:</strong> 3-5 REAL projects with live links and case studies</li>
        <li><strong style="color:#00d4ff">Testimonials:</strong> Real client reviews with names and company</li>
        <li><strong style="color:#00d4ff">Contact:</strong> WhatsApp button + form (WhatsApp converts better in Pakistan)</li>
      </ul>
    `,
  },
  {
    slug: "mongodb-complete-guide-pakistani-developers",
    title: "MongoDB Complete Guide for Pakistani Developers — Beginners to Pro",
    date: "December 2025",
    readTime: "10 min read",
    category: "DATABASE",
    img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1400&auto=format&fit=crop",
    excerpt: "Collections, documents, Mongoose, Atlas cloud database — everything a MERN stack developer needs to know about MongoDB with practical Pakistani project examples.",
    tags: ["Database", "Mongoose"],
    emoji: "🍃",
    color1: "#10b981",
    color2: "#059669",
    content: `
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:0 0 16px;font-family:'Syne',sans-serif">Why MongoDB for Pakistani Developers?</h2>
      <p>MongoDB Atlas free tier gives you 512MB of cloud database storage — enough for most Pakistani startup MVPs. No server setup, no SQL syntax to learn, and JSON-like documents that match JavaScript perfectly.</p>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Mongoose Setup</h2>
      <pre><code>// lib/mongodb.js
import mongoose from 'mongoose'

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return
  return mongoose.connect(process.env.MONGODB_URI)
}</code></pre>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">CRUD Operations</h2>
      <pre><code>await Product.create({ name: "Shalwar Kameez", price: 2500 })
const products = await Product.find({ inStock: true })
await Product.findByIdAndUpdate(id, { price: 3000 })
await Product.findByIdAndDelete(id)</code></pre>
    `,
  },
  {
    slug: "how-to-start-online-store-pakistan-2026",
    title: "How to Start an Online Store in Pakistan 2026 — Complete Guide",
    date: "December 2025",
    readTime: "7 min read",
    category: "E-COMMERCE",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop",
    excerpt: "Shopify vs custom Next.js store — which is better, true costs, payment methods (COD, JazzCash), and how to get your first online sale in Pakistan.",
    tags: ["Shopify", "COD"],
    emoji: "🏪",
    color1: "#f59e0b",
    color2: "#10b981",
    content: `
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:0 0 16px;font-family:'Syne',sans-serif">Online Store in Pakistan — 2026 Reality</h2>
      <p>E-commerce in Pakistan grew 40% in 2025. Customers now expect COD, fast delivery, and WhatsApp support. Here's how to launch a store that actually sells.</p>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Payment Methods Pakistani Customers Want</h2>
      <ul>
        <li><strong style="color:#00d4ff">COD (70%):</strong> Most Pakistanis still prefer cash — you MUST offer this</li>
        <li><strong style="color:#00d4ff">JazzCash (15%):</strong> Mobile wallet — easy for mobile users</li>
        <li><strong style="color:#00d4ff">EasyPaisa (10%):</strong> Telenor users prefer this</li>
        <li><strong style="color:#00d4ff">Card/Online (5%):</strong> Growing but still minority</li>
      </ul>
    `,
  },
  {
    slug: "how-to-setup-google-analytics-4-website-2026",
    title: "How to Set Up Google Analytics 4 on Your Website — 2026 Guide",
    date: "November 2025",
    readTime: "6 min read",
    category: "ANALYTICS",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
    excerpt: "Track visitors, bounce rate, traffic sources — complete guide to install GA4 on Next.js, WordPress and any website, with key metrics Pakistani businesses should monitor.",
    tags: ["GA4", "Traffic"],
    emoji: "📊",
    color1: "#f59e0b",
    color2: "#3b82f6",
    content: `
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:0 0 16px;font-family:'Syne',sans-serif">Why Every Pakistani Website Needs GA4</h2>
      <p>Google Analytics 4 is completely free and tells you exactly who visits your website, where they come from, and what they do. Without this data, you're guessing. With it, you make decisions that grow your business.</p>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Setup in 5 Minutes</h2>
      <ul>
        <li>Go to analytics.google.com — sign in with Google</li>
        <li>Click "Start measuring" → Create account → Add property</li>
        <li>Choose "Web" → Enter your website URL</li>
        <li>Copy your Measurement ID (starts with G-)</li>
        <li>Add the tracking code to your website</li>
      </ul>
      <h2 style="color:#f4f7ff;font-size:28px;font-weight:700;margin:32px 0 16px;font-family:'Syne',sans-serif">Key Metrics for Pakistani Businesses</h2>
      <ul>
        <li><strong style="color:#00d4ff">Users:</strong> How many people visited your site</li>
        <li><strong style="color:#00d4ff">Bounce Rate:</strong> People who left without clicking anything (high = bad)</li>
        <li><strong style="color:#00d4ff">Traffic Source:</strong> Google, social media, direct — tells you what's working</li>
        <li><strong style="color:#00d4ff">Location:</strong> Where your visitors are from (Karachi, Lahore, Islamabad)</li>
      </ul>
    `,
  },
]

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug)
}

export function getAllSlugs() {
  return posts.map((p) => p.slug)
}