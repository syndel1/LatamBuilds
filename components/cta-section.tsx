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
      <div className="cta-frame">
        <div className="cta-corner cta-corner-tl" aria-hidden="true">+</div>
        <div className="cta-corner cta-corner-tr" aria-hidden="true">+</div>
        <div className="cta-corner cta-corner-bl" aria-hidden="true">+</div>
        <div className="cta-corner cta-corner-br" aria-hidden="true">+</div>

        <span className="editorial-index cta-index reveal" ref={revealRef}>
          <span className="editorial-index-num">07</span>
          <span className="editorial-index-sep">/</span>
          <span className="editorial-index-name">{tr.cta.tag}</span>
        </span>

        <h2 className="cta-headline reveal" ref={revealRef}>
          {tr.cta.title1}
          <br />
          <em>{tr.cta.title2}</em>
        </h2>

        <p className="cta-lede reveal" ref={revealRef}>{tr.cta.sub}</p>

        <div className="cta-actions reveal" ref={revealRef}>
          <a href="mailto:syndel@domu.ai" className="editorial-btn editorial-btn-lg">
            <span className="editorial-btn-label">{tr.cta.btn1}</span>
          </a>
          <a
            onClick={() => scrollToSection("sponsors")}
            className="editorial-btn editorial-btn-ghost editorial-btn-lg"
            style={{ cursor: "pointer" }}
          >
            <span className="editorial-btn-label">{tr.cta.btn2}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
