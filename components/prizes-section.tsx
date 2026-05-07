"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useLanguage } from "@/context/language-context"

const amounts = ["$???", "$???", "$???"]
const featured = [false, true, false]

export function PrizesSection() {
  const revealRef = useReveal()
  const { tr } = useLanguage()

  return (
    <section id="prizes" className="editorial-section">
      <div className="editorial-header">
        <span className="editorial-index">
          <span className="editorial-index-num">02</span>
          <span className="editorial-index-sep">/</span>
          <span className="editorial-index-name">{tr.prizes.tag}</span>
        </span>
        <h2 className="editorial-title reveal" ref={revealRef}>
          {tr.prizes.title1}
          <br />
          <em>{tr.prizes.title2}</em>
        </h2>
        <p className="editorial-sub reveal" ref={revealRef}>{tr.prizes.sub}</p>
      </div>

      <div className="prize-rack reveal" ref={revealRef}>
        {tr.prizes.positions.map((position, idx) => (
          <div
            key={idx}
            className={`prize-slot${featured[idx] ? " prize-slot-featured" : ""}`}
          >
            <div className="prize-slot-pos">
              <span className="prize-slot-rank">{`0${idx + 1}`}</span>
              <span className="prize-slot-label">{position}</span>
            </div>
            <div className="prize-slot-amt">{amounts[idx]}</div>
            <div className="prize-slot-badge">
              <span className="prize-slot-dot" />
              {tr.prizes.comingSoon}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
