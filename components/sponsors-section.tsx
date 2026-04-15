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
    <section id="sponsors">
      <div className="section-inner">
        <div className="section-tag reveal" ref={revealRef}>{tr.sponsors.tag}</div>
        <div className="section-title reveal" ref={revealRef}>
          {tr.sponsors.title1}
          <br />
          {tr.sponsors.title2}
        </div>
        <p className="section-sub reveal" ref={revealRef}>
          {tr.sponsors.sub}
          <strong>{tr.sponsors.subBold}</strong>
        </p>
        <div className="sponsors-grid reveal" ref={revealRef}>
          {sponsors.map((sponsor, idx) => (
            <div key={idx} className={`sponsor-cell ${sponsor.isYou ? "you" : ""}`}>
              <span className="sponsor-name" style={sponsor.isYou ? { opacity: 0.4 } : undefined}>
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <a onClick={() => scrollToSection("register")} className="btn-primary" style={{ cursor: "pointer" }}>
            {tr.sponsors.btn}
          </a>
        </div>
      </div>
    </section>
  )
}
