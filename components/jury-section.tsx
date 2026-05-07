"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useLanguage } from "@/context/language-context"

const judges = [
  {
    name: "Andrés Noero",
    bio: "CEO @ Tangering AI",
    image: "/jury/andres-noero.jpeg",
    link: "https://www.linkedin.com/in/andresnoero/",
  },
  {
    name: "Kai Takami",
    bio: "CTO @ Domu · YC W24",
    image: "/jury/kai-takami.jpeg",
    link: "https://www.linkedin.com/in/kaitakami/",
  },
  {
    name: "Juan Gómez",
    bio: "CEO @ Fail Fast",
    image: "/jury/juan-gomez.jpeg",
    link: "https://www.linkedin.com/in/juanse-gomez/",
  },
  {
    name: "Lucas Zancanella",
    bio: "TAM @ Domu",
    image: "/jury/lucas-zancanella.png",
    link: "https://www.linkedin.com/in/lucas-kenji-zancanella-26a264215/",
  },
  {
    name: "Santiago Sáenz",
    bio: "CRO @ NanoFreeze",
    image: "/jury/santiago-saenz.jpeg",
    link: "https://www.linkedin.com/in/santiagosaenzariza/",
  },
  {
    name: "Luis Huayaney",
    bio: "CEO @ Greenhouse",
    image: "/jury/luis-huayaney.jpeg",
    link: "https://www.linkedin.com/in/luishuayaney/",
  },
  {
    name: "Juan Garzón",
    bio: "Technical Ops Lead @ Domu",
    image: "/jury/juan-garzon.jpeg",
    link: "https://www.linkedin.com/in/juan-pablo-garzon-parra-66176a218/",
  },
  {
    name: "Juan Valencia",
    bio: "Product Manager @ Habi",
    image: "/jury/juan-valencia.jpeg",
    link: "https://www.linkedin.com/in/juanjosevalenciam/",
  },
  {
    name: "Vitor Zancanella",
    bio: "AI Engineer @ Domu",
    image: "/jury/vitor-zancanella.jpeg",
    link: "https://www.linkedin.com/in/vitor-hiroshi-zancanella-a7b086234/",
  },
  {
    name: "John Rodriguez",
    bio: "Founding Engineer @ Helios · YC",
    image: "/jury/john-rodriguez.jpeg",
    link: "https://www.linkedin.com/in/john-rodriguez-dev/",
  },
  {
    name: "Alejandra Morales",
    bio: "Founder @ Moraleja Studio",
    image: "/jury/alejandra-morales.jpeg",
    link: "https://www.linkedin.com/in/alejamorales/",
  },
  {
    name: "David Espejo",
    bio: "Marketing @ Rappi",
    image: "/jury/david-espejo.jpeg",
    link: "https://www.linkedin.com/in/david-alejandro-espejo-garcia-298808216/",
  },
]

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 32, height: 32, opacity: 0.2 }}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  )
}

export function JurySection() {
  const revealRef = useReveal()
  const { tr } = useLanguage()

  return (
    <section id="jury" className="editorial-section">
      <div className="editorial-header">
        <span className="editorial-index">
          <span className="editorial-index-num">03</span>
          <span className="editorial-index-sep">/</span>
          <span className="editorial-index-name">{tr.jury.tag}</span>
        </span>
        <h2 className="editorial-title reveal" ref={revealRef}>
          {tr.jury.title1}
          <br />
          <em>{tr.jury.title2}</em>
        </h2>
        <p className="editorial-sub reveal" ref={revealRef}>{tr.jury.sub}</p>
      </div>

      <div className="portrait-grid portrait-grid-4 reveal" ref={revealRef}>
        {judges.map((judge, idx) => (
          <a
            key={idx}
            href={judge.link}
            target="_blank"
            rel="noopener noreferrer"
            className="portrait-card"
          >
            <div className="portrait-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={judge.image} alt={judge.name} />
              <span className="portrait-index">{`0${idx + 1}`.slice(-2)}</span>
              <span className="portrait-cta">
                {tr.jury.meetHim}
                <span aria-hidden="true">→</span>
              </span>
            </div>
            <div className="portrait-meta">
              <div className="portrait-name">{judge.name}</div>
              <div className="portrait-role">{judge.bio}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
