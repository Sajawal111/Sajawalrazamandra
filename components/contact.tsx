"use client"

import { useState } from "react"
import Link from "next/link"
import { ScrollReveal } from "./scroll-reveal"

const contactLinks = [
  {
    icon: "📧",
    title: "Email",
    value: "sajawalyr@gmail.com",
    href: "mailto:sajawalyr@gmail.com",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    value: "+92 311 1101898",
    href: "https://wa.me/923111101898",
  },
  {
    icon: "💼",
    title: "LinkedIn",
    value: "www.linkedin.com/in/sajawal-raza-mandra-556bb7407/",
    href: "https://www.linkedin.com/in/sajawal-raza-mandra-556bb7407",
  },
  {
    icon: "🐙",
    title: "GitHub",
    value: "github.com/Sajawal111",
    href: "https://github.com/sajawal111",
  },
  {
    icon: "🟢",
    title: "Fiverr",
    value: "Hire me on Fiverr",
    href: "https://www.fiverr.com/s/ZmXDD9Y",
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-28 px-[5%] relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <ScrollReveal>
            <div className="font-[var(--font-heading)] text-[0.72rem] font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-[0.9rem]">
              Get In Touch
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="font-[var(--font-heading)] text-[clamp(1.9rem,3.8vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em] mb-[1.4rem]">
              {"Let's Build Something"}
              <br />
              Great Together
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-[1.02rem] text-[var(--muted)] leading-[1.72] max-w-[540px]">
              Have a project in mind? I&apos;d love to hear about it. Drop me a
              message and I&apos;ll get back to you within 24 hours.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-[2.3rem] flex flex-col gap-[0.9rem]">
              {contactLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  className="flex items-center gap-4 no-underline text-[var(--text)] p-[0.95rem_1.15rem] bg-[var(--card)] border border-[var(--border)] rounded-xl transition-all duration-250 hover:border-[var(--accent)] hover:translate-x-1"
                >
                  <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] flex items-center justify-center text-[1.05rem] flex-shrink-0">
                    {link.icon}
                  </div>
                  <div>
                    <strong className="block font-[var(--font-heading)] text-[0.83rem] font-bold">
                      {link.title}
                    </strong>
                    <span className="text-[0.78rem] text-[var(--muted)]">
                      {link.value}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <form
            onSubmit={handleSubmit}
            className="bg-[var(--card)] border border-[var(--border)] rounded-[22px] p-[2.3rem]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[0.9rem]">
              <div className="mb-[1.1rem]">
                <label className="block font-[var(--font-heading)] text-[0.72rem] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[0.45rem]">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-[0.95rem] py-[0.82rem] bg-[var(--bg)] border-[1.5px] border-[var(--border)] rounded-[9px] text-[var(--text)] font-sans text-[0.93rem] transition-colors duration-250 outline-none focus:border-[var(--accent)]"
                />
              </div>
              <div className="mb-[1.1rem]">
                <label className="block font-[var(--font-heading)] text-[0.72rem] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[0.45rem]">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-[0.95rem] py-[0.82rem] bg-[var(--bg)] border-[1.5px] border-[var(--border)] rounded-[9px] text-[var(--text)] font-sans text-[0.93rem] transition-colors duration-250 outline-none focus:border-[var(--accent)]"
                />
              </div>
            </div>

            <div className="mb-[1.1rem]">
              <label className="block font-[var(--font-heading)] text-[0.72rem] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[0.45rem]">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-[0.95rem] py-[0.82rem] bg-[var(--bg)] border-[1.5px] border-[var(--border)] rounded-[9px] text-[var(--text)] font-sans text-[0.93rem] transition-colors duration-250 outline-none focus:border-[var(--accent)]"
              />
            </div>

            <div className="mb-[1.1rem]">
              <label className="block font-[var(--font-heading)] text-[0.72rem] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[0.45rem]">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project inquiry..."
                className="w-full px-[0.95rem] py-[0.82rem] bg-[var(--bg)] border-[1.5px] border-[var(--border)] rounded-[9px] text-[var(--text)] font-sans text-[0.93rem] transition-colors duration-250 outline-none focus:border-[var(--accent)]"
              />
            </div>

            <div className="mb-[1.1rem]">
              <label className="block font-[var(--font-heading)] text-[0.72rem] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[0.45rem]">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                className="w-full px-[0.95rem] py-[0.82rem] bg-[var(--bg)] border-[1.5px] border-[var(--border)] rounded-[9px] text-[var(--text)] font-sans text-[0.93rem] transition-colors duration-250 outline-none resize-y min-h-[115px] focus:border-[var(--accent)]"
              />
            </div>

            <button
              type="submit"
              className="w-full font-[var(--font-heading)] text-[0.88rem] font-bold tracking-[0.08em] uppercase bg-[var(--accent)] text-[#07090f] px-[1.9rem] py-[0.88rem] rounded-lg border-none cursor-pointer shadow-[0_0_28px_var(--glow)] transition-all duration-250 hover:translate-y-[-3px] hover:shadow-[0_0_50px_var(--glow)]"
            >
              {submitted ? "Message Sent! ✓" : "Send Message ✦"}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
