"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useLanguage } from "@/context/language-context"

const amounts = ["$???", "$???", "$???"]
const featured = [false, true, false]

export function PrizesSection() {
  const revealRef = useReveal()
  const { tr } = useLanguage()

  return (
    <section id="prizes">
      <div className="section-inner">
        <div className="section-tag reveal" ref={revealRef}>{tr.prizes.tag}</div>
        <div className="section-title reveal" ref={revealRef}>
          {tr.prizes.title1}
          <br />
          {tr.prizes.title2}
        </div>
        <p className="section-sub reveal" ref={revealRef}>{tr.prizes.sub}</p>
        <div className="prizes-grid reveal" ref={revealRef}>
          {tr.prizes.positions.map((position, idx) => (
            <div key={idx} className={`prize-card ${featured[idx] ? "feat" : ""}`}>
              <div className="prize-pos">{position}</div>
              <div className="prize-amt">{amounts[idx]}</div>
              <div className="coming-badge">{tr.prizes.comingSoon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
