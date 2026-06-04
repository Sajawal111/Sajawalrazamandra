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
    tag: "Commercial & Home Lift",
    title: "Paramount Elevator",
    description:
      "Premium home lift & elevator website for a Karachi-based company — services, projects, gallery & quote system.",
    link: "https://v0-paramount-elevator-website.vercel.app/",
    isLive: true,
    gradient: "linear-gradient(135deg, #1a0533, #3d1a6e, #1a0533)",
    customThumb: true,
  },
  {
    tag: "Commercial & Home Lift",
    title: "Vertical Lifting Solutions",
    description:
      "Professional elevator and lifting solutions company — commercial lifts, home elevators, and installation services.",
    link: "https://v0-vls-business-website.vercel.app/",
    isLive: true,
    gradient: "linear-gradient(135deg, #0a1628, #1a3a5c, #0a1628)",
    customThumb: true,
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
                {project.title === "Paramount Elevator" ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-1">
                    <div className="font-[var(--font-heading)] text-[2rem] font-black text-[#ffffff] tracking-[0.05em] leading-none">
                      PARAMOUNT
                    </div>
                    <div className="font-[var(--font-heading)] text-[0.65rem] font-bold text-[#a78bfa] tracking-[0.25em] uppercase">
                      ELEVATOR
                    </div>
                    <div className="font-serif text-[0.55rem] text-[#c4b5fd] tracking-[0.15em] mt-[2px]">
                      COMMERCIAL & HOME LIFT
                    </div>
                  </div>
                ) : project.title === "Vertical Lifting Solutions" ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-1">
                    <div className="font-[var(--font-heading)] text-[2rem] font-black text-[#ffffff] tracking-[0.05em] leading-none">
                      VERTICAL
                    </div>
                    <div className="font-[var(--font-heading)] text-[0.65rem] font-bold text-[#60a5fa] tracking-[0.25em] uppercase">
                      LIFTING SOLUTIONS
                    </div>
                    <div className="font-serif text-[0.55rem] text-[#93c5fd] tracking-[0.15em] mt-[2px]">
                      COMMERCIAL & HOME LIFT
                    </div>
                  </div>
                ) : (
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
                  target="_blank"
                  className="inline-flex items-center gap-[0.4rem] font-[var(--font-heading)] text-[0.76rem] font-bold text-[var(--accent)] mt-[0.9rem] no-underline tracking-[0.05em] uppercase transition-all duration-200 hover:gap-[0.8rem]"
                >
                  View Live Store →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}