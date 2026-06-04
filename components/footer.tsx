export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-[5%] py-8 flex items-center justify-between flex-wrap gap-4">
      <span className="font-[var(--font-heading)] font-bold text-xl text-[var(--muted)] opacity-55 hover:opacity-100 transition-opacity duration-300">
        SM
      </span>
      <p className="text-[0.78rem] text-[var(--muted)]">
        &copy; 2024 Sajawal Raza Mandra — All rights reserved
      </p>
      <p className="text-[0.75rem] text-[var(--muted)]">
        Built with ❤️ in Pakistan
      </p>
    </footer>
  )
}
