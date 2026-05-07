"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useLanguage } from "@/context/language-context"

export function EcosystemSection() {
  const revealRef = useReveal()
  const { tr } = useLanguage()

  return (
    <section id="ecosystem" className="editorial-section">
      <div className="editorial-header">
        <span className="editorial-index">
          <span className="editorial-index-num">04</span>
          <span className="editorial-index-sep">/</span>
          <span className="editorial-index-name">{tr.ecosystem.tag}</span>
        </span>
        <h2 className="editorial-title reveal" ref={revealRef}>
          {tr.ecosystem.title1}
          <br />
          <em>{tr.ecosystem.title2}</em>
        </h2>
        <p className="editorial-sub reveal" ref={revealRef}>{tr.ecosystem.sub}</p>
      </div>

      <div className="eco-rack reveal" ref={revealRef}>
        {tr.ecosystem.cards.map((card, idx) => (
          <article key={idx} className="eco-tile">
            <div className="eco-tile-head">
              <span className="eco-tile-num">{`0${idx + 1}`.slice(-2)}</span>
              <span className="eco-tile-cross" aria-hidden="true">+</span>
            </div>
            <div className="eco-tile-tag">{card.tag}</div>
            <h3 className="eco-tile-title">{card.title}</h3>
            <p className="eco-tile-desc">{card.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
