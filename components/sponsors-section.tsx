"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useLanguage } from "@/context/language-context"

const sponsors = [
  { name: "Make", isYou: false },
  { name: "Clay", isYou: false },
  { name: "Anthropic", isYou: false },
  { name: "Cursor", isYou: false },
  { name: "ElevenLabs", isYou: false },
  { name: "Supabase", isYou: false },
  { name: "Miro", isYou: false },
  { name: "Slack", isYou: false },
  { name: "+ You?", isYou: true },
]

export function SponsorsSection() {
  const revealRef = useReveal()
  const { tr } = useLanguage()

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="sponsors" className="editorial-section">
      <div className="editorial-header">
        <span className="editorial-index">
          <span className="editorial-index-num">05</span>
          <span className="editorial-index-sep">/</span>
          <span className="editorial-index-name">{tr.sponsors.tag}</span>
        </span>
        <h2 className="editorial-title reveal" ref={revealRef}>
          {tr.sponsors.title1}
          <br />
          <em>{tr.sponsors.title2}</em>
        </h2>
        <p className="editorial-sub reveal" ref={revealRef}>
          {tr.sponsors.sub}
          <strong>{tr.sponsors.subBold}</strong>
        </p>
      </div>

      <div className="sponsor-rack reveal" ref={revealRef}>
        {sponsors.map((sponsor, idx) => (
          <div
            key={idx}
            className={`sponsor-tile${sponsor.isYou ? " sponsor-tile-you" : ""}`}
            onClick={sponsor.isYou ? () => scrollToSection("register") : undefined}
            role={sponsor.isYou ? "button" : undefined}
            tabIndex={sponsor.isYou ? 0 : undefined}
          >
            <span className="sponsor-tile-num">{`0${idx + 1}`.slice(-2)}</span>
            <span className="sponsor-tile-name">{sponsor.name}</span>
          </div>
        ))}
      </div>

      <div className="sponsor-cta-row">
        <a onClick={() => scrollToSection("register")} className="editorial-btn">
          <span className="editorial-btn-label">{tr.sponsors.btn}</span>
        </a>
      </div>
    </section>
  )
}
