import Link from "next/link"
import { ScrollReveal } from "./scroll-reveal"

const projects = [
  {
    tag: "E-Commerce · Shopify",
    title: "SM Garments",
    description:
      "Full Shopify store for a Pakistani clothing brand — shirts, pants, product pages, marquee, FAQ, reviews & cart system.",
    link: "https://cjffbq-uj.myshopify.com",
    isLive: true,
    gradient: "linear-gradient(135deg, #1a1a1a, #2d2010, #1a1208)",
    customThumb: true,
  },
  {
    tag: "Web App",
    title: "TaskFlow Dashboard",
    description:
      "Project management tool with real-time updates, drag-and-drop, and team collaboration.",
    link: "#contact",
    isLive: false,
    gradient: "linear-gradient(135deg, #1a0533, #3d1a6e, #1a0533)",
    icon: "💼",
  },
  {
    tag: "Landing Page",
    title: "GreenGrow Agency",
    description:
      "High-conversion agency landing page with animations, contact form, and CMS integration.",
    link: "#contact",
    isLive: false,
    gradient: "linear-gradient(135deg, #0d1f0d, #1a4a1a, #0d3318)",
    icon: "🌿",
  },
  {
    tag: "Food & Delivery",
    title: "FoodieApp",
    description:
      "Restaurant ordering app with live order tracking, menus, and admin panel.",
    link: "#contact",
    isLive: false,
    gradient: "linear-gradient(135deg, #1f0d0d, #4a1a1a, #330d1a)",
    icon: "🍕",
  },
  {
    tag: "Analytics",
    title: "DataViz Pro",
    description:
      "Interactive data visualization dashboard with charts, filters, and CSV export.",
    link: "#contact",
    isLive: false,
    gradient: "linear-gradient(135deg, #0d1f2a, #1a3a4a, #0d2233)",
    icon: "📊",
  },
  {
    tag: "EdTech",
    title: "LearnHub",
    description:
      "Online learning platform with video courses, quizzes, and student progress tracking.",
    link: "#contact",
    isLive: false,
    gradient: "linear-gradient(135deg, #1a1a0d, #3a3a1a, #2a2a0d)",
    icon: "🎓",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-28 px-[5%] relative">
      <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
        <div>
          <ScrollReveal>
            <div className="font-[var(--font-heading)] text-[0.72rem] font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-[0.9rem]">
              Portfolio
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="font-[var(--font-heading)] text-[clamp(1.9rem,3.8vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Selected Work
            </h2>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <Link
            href="#contact"
            className="font-[var(--font-heading)] text-[0.88rem] font-bold tracking-[0.08em] uppercase bg-transparent text-[var(--text)] px-[1.9rem] py-[0.88rem] rounded-lg border-[1.5px] border-[var(--border)] no-underline transition-all duration-250 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {"Start a Project →"}
          </Link>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.4rem]">
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 0.08}>
            <div className="project-card rounded-[20px] overflow-hidden bg-[var(--card)] border border-[var(--border)] transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
              <div
                className="h-[190px] flex items-center justify-center text-[2.8rem] relative overflow-hidden"
                style={{ background: project.gradient }}
              >
                {project.customThumb ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-1">
                    <div className="font-[var(--font-heading)] text-[2rem] font-black text-[#c9a84c] tracking-[0.05em] leading-none">
                      SM
                    </div>
                    <div className="font-[var(--font-heading)] text-[0.65rem] font-bold text-white tracking-[0.25em] uppercase">
                      GARMENTS
                    </div>
                    <div className="font-serif text-[0.55rem] text-[#c9a84c] tracking-[0.15em] mt-[2px]">
                      STYLE THAT FITS YOU
                    </div>
                  </div>
                ) : (
                  project.icon
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--card)] opacity-100" />
              </div>

              <div className="p-[1.4rem]">
                <div className="font-[var(--font-heading)] text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[var(--accent)] mb-[0.45rem] flex items-center">
                  {project.tag}
                  {project.isLive && (
                    <span className="inline-flex items-center gap-[0.3rem] font-[var(--font-heading)] text-[0.65rem] font-bold text-[#00e5a0] bg-[rgba(0,229,160,0.1)] border border-[rgba(0,229,160,0.3)] px-[0.6rem] py-[0.2rem] rounded-[20px] ml-2">
                      <span
                        className="w-[6px] h-[6px] rounded-full bg-[#00e5a0] shadow-[0_0_6px_#00e5a0]"
                        style={{ animation: "pulse 1.5s infinite" }}
                      />
                      LIVE
                    </span>
                  )}
                </div>
                <h3 className="font-[var(--font-heading)] text-[0.98rem] font-bold mb-[0.45rem]">
                  {project.title}
                </h3>
                <p className="text-[0.84rem] text-[var(--muted)] leading-[1.62]">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  target={project.isLive ? "_blank" : undefined}
                  className="inline-flex items-center gap-[0.4rem] font-[var(--font-heading)] text-[0.76rem] font-bold text-[var(--accent)] mt-[0.9rem] no-underline tracking-[0.05em] uppercase transition-all duration-200 hover:gap-[0.8rem]"
                >
                  {project.isLive ? "View Live Store →" : "View Project →"}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
