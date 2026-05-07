const skills = [
  "HTML & CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "Next.js",
  "Git & GitHub",
  "REST APIs",
  "Responsive Design",
]

export function Marquee() {
  return (
    <div className="overflow-hidden py-[1.4rem] border-t border-b border-[var(--border)] bg-[var(--bg2)]">
      <div
        className="flex gap-12 w-max"
        style={{ animation: "marquee 24s linear infinite" }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="font-[var(--font-heading)] text-[0.82rem] font-bold tracking-[0.15em] uppercase text-[var(--muted)] flex items-center gap-4 whitespace-nowrap"
          >
            <span className="text-[var(--accent)]">&#10022;</span>
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}
