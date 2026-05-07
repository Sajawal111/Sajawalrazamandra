import { ScrollReveal } from "./scroll-reveal"

const steps = [
  {
    num: "01",
    title: "Discovery",
    description:
      "We discuss your goals, audience, and vision to define the project scope clearly.",
  },
  {
    num: "02",
    title: "Design",
    description:
      "Wireframes and UI mockups created with your feedback before a single line of code.",
  },
  {
    num: "03",
    title: "Develop",
    description:
      "Clean, documented, and scalable code built with the best tools for your project.",
  },
  {
    num: "04",
    title: "Launch",
    description:
      "Testing, deployment, and post-launch support to make sure everything runs perfectly.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-28 px-[5%] relative bg-[var(--bg2)]">
      <ScrollReveal>
        <div className="font-[var(--font-heading)] text-[0.72rem] font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-[0.9rem]">
          How I Work
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <h2 className="font-[var(--font-heading)] text-[clamp(1.9rem,3.8vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em] mb-[1.4rem]">
          My Process
        </h2>
      </ScrollReveal>
      <ScrollReveal>
        <p className="text-[1.02rem] text-[var(--muted)] leading-[1.72] max-w-[540px]">
          A clear, collaborative workflow from first call to final delivery.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 relative">
        {/* Connecting Line */}
        <div className="hidden lg:block absolute top-[36px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent z-0" />

        {steps.map((step, index) => (
          <ScrollReveal key={step.num} delay={index * 0.08}>
            <div className="text-center relative z-10">
              <div className="w-[70px] h-[70px] rounded-full bg-[var(--card)] border-2 border-[var(--accent)] flex items-center justify-center font-[var(--font-heading)] text-[1.25rem] font-extrabold text-[var(--accent)] mx-auto mb-[1.4rem] shadow-[0_0_20px_var(--glow)]">
                {step.num}
              </div>
              <h3 className="font-[var(--font-heading)] text-[0.98rem] font-bold mb-[0.45rem]">
                {step.title}
              </h3>
              <p className="text-[0.84rem] text-[var(--muted)] leading-[1.62]">
                {step.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
