"use client"

import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#packages", label: "Packages" },
  { href: "/blog", label: "Blog" },
]

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] py-[1.1rem] backdrop-blur-[18px] bg-[rgba(7,9,15,0.75)] dark:bg-[rgba(7,9,15,0.75)] border-b border-[var(--border)] transition-colors duration-400">
      <Link href="#" className="nav-logo">
        <Image
          src="/images/logo.png"
          alt="SM Logo"
          width={90}
          height={60}
          className="h-12 w-auto"
        />
      </Link>

      <ul className="hidden md:flex gap-[2.2rem] list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-[var(--font-heading)] text-[0.82rem] font-semibold tracking-[0.12em] uppercase text-[var(--muted)] no-underline transition-colors duration-250 hover:text-[var(--accent)]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-end gap-[0.45rem]">
        <Link
          href="#contact"
          className="font-[var(--font-heading)] text-[0.78rem] font-bold tracking-[0.1em] uppercase text-[var(--accent)] no-underline border-[1.5px] border-[var(--accent)] px-[1.05rem] py-[0.42rem] rounded-[6px] transition-all duration-250 hover:bg-[var(--accent)] hover:text-[#07090f] hover:shadow-[0_0_20px_var(--glow)]"
        >
          Contact
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}
