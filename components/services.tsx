import { ScrollReveal } from "./scroll-reveal"

const services = [
  {
    icon: "🌐",
    title: "Frontend Development",
    description:
      "Pixel-perfect, responsive interfaces built with React.js, HTML/CSS, and modern JavaScript that delight users on every device.",
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    description:
      "Robust server-side solutions using Node.js and Express with MongoDB databases, REST APIs, and secure authentication.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description:
      "Websites that look stunning and work perfectly on every screen — from mobile phones to ultra-wide monitors.",
  },
  {
    icon: "🚀",
    title: "Performance Optimization",
    description:
      "Speed audits, lazy loading, code splitting, and best practices to make your site lightning fast and SEO-ready.",
  },
  {
    icon: "🛒",
    title: "E-Commerce Solutions",
    description:
      "Shopify & custom e-commerce stores with Stripe, PayPal integration — built for global customers.",
  },
  {
    icon: "🔗",
    title: "API Integration",
    description:
      "Connecting your app to third-party services, payment gateways, social platforms, and custom REST APIs.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-28 px-[5%] relative bg-[var(--bg2)]">
      <ScrollReveal>
        <div className="font-[var(--font-heading)] text-[0.72rem] font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-[0.9rem]">
          What I Do
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <h2 className="font-[var(--font-heading)] text-[clamp(1.9rem,3.8vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em] mb-[1.4rem]">
          Services I Offer
        </h2>
      </ScrollReveal>
      <ScrollReveal>
        <p className="text-[1.02rem] text-[var(--muted)] leading-[1.72] max-w-[540px]">
          From concept to deployment — I handle everything your web presence
          needs.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.4rem] mt-14">
        {services.map((service, index) => (
          <ScrollReveal key={service.title} delay={index * 0.08}>
            <div className="service-card bg-[var(--card)] border border-[var(--border)] rounded-[20px] px-[1.9rem] py-[2.3rem] transition-all duration-300 cursor-default hover:border-[var(--accent)] hover:-translate-y-[6px] hover:shadow-[0_20px_60px_rgba(0,229,255,0.1)]">
              <div className="w-[50px] h-[50px] bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] rounded-[13px] flex items-center justify-center mb-[1.4rem] text-[1.35rem]">
                {service.icon}
              </div>
              <h3 className="font-[var(--font-heading)] text-[1.1rem] font-bold mb-[0.75rem]">
                {service.title}
              </h3>
              <p className="text-[0.88rem] leading-[1.72] text-[var(--muted)]">
                {service.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
