"use client"

import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative h-[26px] w-[50px] cursor-pointer rounded-full border-[1.5px] border-[var(--border)] bg-[var(--card)] transition-all duration-400 flex-shrink-0"
      aria-label="Toggle theme"
    >
      <span
        className={`absolute left-[3px] top-[3px] h-[18px] w-[18px] rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--glow)] transition-transform duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          theme === "light" ? "translate-x-[24px]" : ""
        }`}
      />
    </button>
  )
}
