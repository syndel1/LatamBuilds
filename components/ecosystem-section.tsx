"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useLanguage } from "@/context/language-context"

export function EcosystemSection() {
  const revealRef = useReveal()
  const { tr } = useLanguage()

  const topCards = tr.ecosystem.cards.slice(0, 2)
  const bottomCards = tr.ecosystem.cards.slice(2, 4)

  return (
    <section id="ecosystem">
      <div className="section-inner">
        <div className="section-tag reveal" ref={revealRef}>{tr.ecosystem.tag}</div>
        <div className="section-title reveal" ref={revealRef}>
          {tr.ecosystem.title1}
          <br />{tr.ecosystem.title2}
        </div>
        <p className="section-sub reveal" ref={revealRef}>{tr.ecosystem.sub}</p>
        <div className="eco-wrap reveal" ref={revealRef}>
          <div className="eco-grid">
            {topCards.map((card, idx) => (
              <div key={idx} className="eco-card hi">
                <div className="eco-tag">{card.tag}</div>
                <div className="eco-title">{card.title}</div>
                <div className="eco-desc">{card.desc}</div>
              </div>
            ))}
          </div>
          <div className="eco-grid" style={{ borderTop: "1px solid var(--border)" }}>
            {bottomCards.map((card, idx) => (
              <div key={idx} className="eco-card">
                <div className="eco-tag">{card.tag}</div>
                <div className="eco-title">{card.title}</div>
                <div className="eco-desc">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
