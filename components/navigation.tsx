"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/context/language-context"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang, tr } = useLanguage()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setMenuOpen(false)
  }

  const navLinks = [
    { label: tr.nav.schedule, href: "schedule" },
    { label: tr.nav.prizes, href: "prizes" },
    { label: tr.nav.judges, href: "jury" },
    { label: tr.nav.ecosystem, href: "ecosystem" },
    { label: tr.nav.team, href: "team" },
    { label: tr.nav.sponsors, href: "sponsors" },
  ]

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <div className={`nav-logo ${mounted ? "show" : ""}`} onClick={scrollToTop}>
          GTM <span>&times;</span> Hackathon
        </div>
        <div className={`nav-links ${mounted ? "show" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.href} onClick={() => scrollToSection(link.href)}>
              {link.label}
            </a>
          ))}
        </div>
        <div className={`nav-right ${mounted ? "show" : ""}`}>
          <div className="lang-toggle">
            <button className={`lang-btn ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")}>EN</button>
            <span className="lang-sep">·</span>
            <button className={`lang-btn ${lang === "es" ? "active" : ""}`} onClick={() => setLang("es")}>ES</button>
          </div>
          <a href="https://luma.com/calendar/cal-tMx4CyALnWeYMzv" target="_blank" rel="noopener noreferrer" className="nav-cta">
            {tr.nav.register}
          </a>
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={menuOpen ? "bar open" : "bar"} />
            <span className={menuOpen ? "bar open" : "bar"} />
            <span className={menuOpen ? "bar open" : "bar"} />
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a key={link.href} onClick={() => scrollToSection(link.href)}>
              {link.label}
            </a>
          ))}
          <div className="mobile-menu-bottom">
            <div className="lang-toggle">
              <button className={`lang-btn ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")}>EN</button>
              <span className="lang-sep">·</span>
              <button className={`lang-btn ${lang === "es" ? "active" : ""}`} onClick={() => setLang("es")}>ES</button>
            </div>
            <a href="https://luma.com/calendar/cal-tMx4CyALnWeYMzv" target="_blank" rel="noopener noreferrer" className="nav-cta" onClick={() => setMenuOpen(false)}>
              {tr.nav.register}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
