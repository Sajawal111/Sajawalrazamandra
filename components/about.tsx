import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Next.js",
  "Git & GitHub",
  "REST APIs",
  "Figma",
]

export function About() {
  return (
    <section id="about" className="py-28 px-[5%] relative">
      <ScrollReveal>
        <div className="font-[var(--font-heading)] text-[0.72rem] font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-[0.9rem]">
          Who I Am
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <h2 className="font-[var(--font-heading)] text-[clamp(1.9rem,3.8vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em] mb-[1.4rem]">
          A Developer Who
          <br />
          Loves Clean Code
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20 items-center mt-16">
        <ScrollReveal>
          <div className="relative">
            <Image
              src="/images/about-photo.png"
              alt="Sajawal Raza Mandra"
              width={500}
              height={600}
              className="w-full rounded-[20px]"
            />
            <div className="absolute -bottom-[22px] -right-[22px] bg-[var(--accent)] text-[#07090f] px-[1.8rem] py-[1.4rem] rounded-[14px] font-[var(--font-heading)]">
              <div className="text-[2.3rem] font-extrabold leading-none">
                40+
              </div>
              <div className="text-[0.72rem] font-bold tracking-[0.1em] uppercase">
                Projects
                <br />
                Delivered
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="about-body">
            <p className="text-[1.02rem] leading-[1.82] text-[var(--muted)] mb-[1.1rem]">
              I&apos;m{" "}
              <strong className="text-[var(--text)]">
                Sajawal Raza Mandra
              </strong>
              , a passionate Web Developer with a strong eye for design and a
              love for building things that work beautifully on every device.
            </p>
            <p className="text-[1.02rem] leading-[1.82] text-[var(--muted)] mb-[1.1rem]">
              I specialize in turning ideas into{" "}
              <strong className="text-[var(--text)]">
                clean, fast, and scalable web applications
              </strong>
              . Whether it&apos;s a sleek landing page or a full-stack web app,
              I bring both technical skill and creative thinking to every
              project.
            </p>
            <p className="text-[1.02rem] leading-[1.82] text-[var(--muted)] mb-[1.1rem]">
              When I&apos;m not coding, I&apos;m exploring new technologies and
              refining my craft to stay ahead of the curve.
            </p>

            <div className="flex flex-wrap gap-[0.55rem] mt-[1.8rem]">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="chip font-[var(--font-heading)] text-[0.75rem] font-bold tracking-[0.06em] px-[0.95rem] py-[0.38rem] rounded-[20px] border-[1.5px] border-[var(--border)] text-[var(--muted)] bg-[var(--card)] transition-colors duration-200 cursor-default hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
