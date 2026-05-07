"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useLanguage } from "@/context/language-context"

const team = [
  {
    name: "Syndel Callisaya",
    bio: "Ops @ Domu · Maker · She Ships & AI Voice Hackathon",
    initials: "SC",
    gradient: "linear-gradient(135deg, #87F5F5, #7D39EB)",
    image: "/team/syndel-callisaya.jpeg",
    link: "https://www.linkedin.com/in/syndelcallisaya/",
  },
  {
    name: "Manuel Romero",
    bio: "GTM @ Domu · Pioneer 30 · Face on NASDAQ Billboard, Times Square",
    initials: "MR",
    gradient: "linear-gradient(135deg, #7D39EB, #F042FF)",
    image: "/team/manuel-romero.jpeg",
    link: "https://www.linkedin.com/in/manuelsantiagoromero/",
  },
  {
    name: "Emil Fischer",
    bio: "Strategy & Ops @ Bia Energy · MSc Management, Nova SBE",
    initials: "EF",
    gradient: "linear-gradient(135deg, #FFE5F1, #F042FF)",
    image: "/team/emil-fischer.jpeg",
    link: "https://www.linkedin.com/in/emil-fischer-8976b9202/",
  },
  {
    name: "Ian Vega",
    bio: "CS @ UNAM · Founder · Community Builder (Lovable, GitHub & Notion)",
    initials: "IV",
    gradient: "linear-gradient(135deg, #87F5F5, #7D39EB)",
    image: "/team/ian-vega.jpeg",
    link: "https://www.linkedin.com/in/lann892/",
  },
]

export function TeamSection() {
  const revealRef = useReveal()
  const { tr } = useLanguage()

  return (
    <section id="team" className="editorial-section">
      <div className="editorial-header">
        <span className="editorial-index">
          <span className="editorial-index-num">06</span>
          <span className="editorial-index-sep">/</span>
          <span className="editorial-index-name">{tr.team.tag}</span>
        </span>
        <h2 className="editorial-title reveal" ref={revealRef}>
          {tr.team.title1}
          <br />
          <em>{tr.team.title2}</em>
        </h2>
        <p className="editorial-sub reveal" ref={revealRef}>{tr.team.sub}</p>
      </div>

      <div className="portrait-grid portrait-grid-4 reveal" ref={revealRef}>
        {team.map((member, idx) => (
          <a
            key={idx}
            href={member.link}
            target="_blank"
            rel="noopener noreferrer"
            className="portrait-card"
          >
            <div className="portrait-frame" style={{ background: member.gradient }}>
              {member.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={member.image} alt={member.name} />
              )}
              <span className="portrait-index">{tr.team.role}</span>
              <span className="portrait-cta">
                {tr.team.meetLabel[idx]}
                <span aria-hidden="true">→</span>
              </span>
            </div>
            <div className="portrait-meta">
              <div className="portrait-name">{member.name}</div>
              <div className="portrait-role">{member.bio}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
