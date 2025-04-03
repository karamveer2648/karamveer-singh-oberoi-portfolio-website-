import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ThreeBackground } from "@/components/three-background"
import { AnimatedGradientBackground } from "@/components/animated-gradient-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ThreeBackground />
      <AnimatedGradientBackground />
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

