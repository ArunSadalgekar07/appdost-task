"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "services", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const smoothScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const targetPosition = element.offsetTop
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    const duration = 1000 // 1 second for smooth, gradual scroll
    let start: number | null = null

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime
      const elapsed = currentTime - start
      const progress = Math.min(elapsed / duration, 1)
      const ease = easeInOutCubic(progress)

      window.scrollTo(0, startPosition + distance * ease)

      if (progress < 1) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    smoothScrollToSection(sectionId)
    setActiveSection(sectionId)
    setIsOpen(false)
  }

  const navLinks = [
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="text-2xl font-serif font-bold text-foreground hover:text-accent transition-colors duration-300"
        >
          AppDost
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`text-sm font-medium transition-all duration-300 relative group ${
                activeSection === link.id ? "text-foreground" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                  activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity duration-300 text-sm font-medium">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden transition-transform duration-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-foreground pl-2 border-l-2 border-accent"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity duration-300 text-sm font-medium w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
