"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useLanguage } from "@/context/language-context"

export function CTASection() {
  const revealRef = useReveal()
  const { tr } = useLanguage()

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="cta-section" id="register">
      <div className="cta-orb1" />
      <div className="cta-orb2" />
      <div className="cta-content">
        <div className="section-tag reveal" ref={revealRef} style={{ justifyContent: "center" }}>
          {tr.cta.tag}
        </div>
        <div className="cta-title reveal" ref={revealRef}>
          {tr.cta.title1}
          <br />
          <span>{tr.cta.title2}</span>
        </div>
        <p className="cta-sub reveal" ref={revealRef}>{tr.cta.sub}</p>
        <div className="hero-btns reveal" ref={revealRef}>
          <a href="mailto:syndel@domu.ai" className="btn-primary">{tr.cta.btn1}</a>
          <a onClick={() => scrollToSection("sponsors")} className="btn-secondary" style={{ cursor: "pointer" }}>
            {tr.cta.btn2}
          </a>
        </div>
      </div>
    </section>
  )
}
