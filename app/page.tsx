import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Process from "@/components/process"
import Projects from "@/components/projects"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <About />
      <Process />
      <Projects />
      <CTA />
      <Footer />
    </main>
  )
}
