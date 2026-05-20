import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Process } from "@/components/process"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import ReviewsSection from "@/components/ReviewsSection";
import PackagesSection from "@/components/PackagesSection";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <PackagesSection /> 
      <Projects />
      <Process />
      <ReviewsSection />
      <Contact />
      <Footer />
    </>
  )
}
