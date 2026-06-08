"use client"

import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "./scroll-reveal"

const stats = [
  { num: "3+", label: "Years Experience" },
  { num: "40+", label: "Projects Done" },
  { num: "100%", label: "On-Time Delivery" },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-[5%] pt-[100px] overflow-hidden"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
          animation: "gridDrift 20s linear infinite",
        }}
      />

      {/* Hero Text */}
      <div className="relative z-10 pt-8 text-center lg:text-left">
        <ScrollReveal>
          <div className="font-[var(--font-heading)] text-[0.82rem] font-bold tracking-[0.22em] uppercase text-[var(--accent)] mb-[1.4rem] flex items-center gap-[0.7rem] justify-center lg:justify-start mt-2">
            <span className="inline-block w-[30px] h-[2px] bg-[var(--accent)]" />
            Available for Projects
          </div>

          <h1 className="font-[var(--font-heading)] text-[clamp(2.8rem,5vw,5.2rem)] font-extrabold leading-[1.06] tracking-[-0.02em] mb-[1.6rem]">
            Crafting Digital
            <br />
            <span className="text-[var(--accent)]">Experiences</span>
            <br />
            That Matter
          </h1>

          <p className="text-[1.05rem] leading-[1.78] text-[var(--muted)] max-w-[460px] mb-[2.5rem] mx-auto lg:mx-0">
            Hi, I&apos;m <strong className="text-[var(--text)]">Sajawal Raza Mandra</strong> — a MERN Stack Developer working with clients across USA, UK & Pakistan. I build fast, scalable web apps that help businesses grow — delivered remotely, on time, every time.
          </p>

          <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            <Link
              href="#projects"
              className="font-[var(--font-heading)] text-[0.88rem] font-bold tracking-[0.08em] uppercase bg-[var(--accent)] text-[#07090f] px-[1.9rem] py-[0.88rem] rounded-lg no-underline shadow-[0_0_28px_var(--glow)] transition-all duration-250 hover:translate-y-[-3px] hover:shadow-[0_0_50px_var(--glow)]"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="font-[var(--font-heading)] text-[0.88rem] font-bold tracking-[0.08em] uppercase bg-transparent text-[var(--text)] px-[1.9rem] py-[0.88rem] rounded-lg border-[1.5px] border-[var(--border)] no-underline transition-all duration-250 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {"Let's Talk"}
            </Link>
          </div>

          <div className="flex gap-10 mt-[2.8rem] pt-8 border-t border-[var(--border)] justify-center lg:justify-start">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-[var(--font-heading)] text-[2rem] font-extrabold text-[var(--accent)] leading-none">
                  {stat.num}
                </div>
                <div className="text-[0.78rem] text-[var(--muted)] mt-[0.3rem] tracking-[0.05em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Hero Visual */}
      <div className="relative z-10 flex justify-center items-center h-full pt-5">
        <ScrollReveal>
          <div className="relative w-[clamp(260px,36vw,460px)]">
            {/* Photo Ring */}
            <div
              className="absolute -top-[18px] -right-[18px] w-[130px] h-[130px] border-2 border-[rgba(0,229,255,0.25)] rounded-full z-10"
              style={{ animation: "spin 12s linear infinite" }}
            >
              <span className="absolute top-[10px] left-1/2 w-2 h-2 -ml-1 bg-[var(--accent)] rounded-full shadow-[0_0_12px_var(--accent)]" />
            </div>

            {/* Photo */}
            <Image
              src="/images/about-photo.png"
              alt="Sajawal Raza Mandra - Full Stack Web Developer Pakistan"
              width={460}
              height={560}
              className="w-full rounded-[20px] relative z-20"
              priority
              fetchPriority="high"
              quality={85}
            />

            {/* Glow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-[120px] bg-[var(--accent)] blur-[60px] opacity-[0.22] z-0" />

            {/* Tag Bubbles */}
            <div
              className="absolute top-[14%] -left-7 bg-[var(--card)] border border-[var(--border)] backdrop-blur-[10px] rounded-xl px-[0.95rem] py-[0.55rem] font-[var(--font-heading)] text-[0.78rem] font-bold flex items-center gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-30 hidden lg:flex"
              style={{ animation: "float 4s ease-in-out infinite" }}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
              React Developer
            </div>
            <div
              className="absolute top-[54%] -right-[18px] bg-[var(--card)] border border-[var(--border)] backdrop-blur-[10px] rounded-xl px-[0.95rem] py-[0.55rem] font-[var(--font-heading)] text-[0.78rem] font-bold flex items-center gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-30 hidden lg:flex"
              style={{ animation: "float 4s ease-in-out infinite 1.5s" }}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
              Open to Work
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
