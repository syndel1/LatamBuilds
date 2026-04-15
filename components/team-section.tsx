"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useLanguage } from "@/context/language-context"

const team = [
  {
    name: "Syndel Callisaya",
    bio: "Ops @ Domu · Maker · She Ships & AI Voice Hackathon",
    initials: "SC",
    gradient: "linear-gradient(135deg, #87F5F5, #7D39EB)",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHVzqrwEdLEQQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694271752078?e=1776297600&v=beta&t=P5iNSyJ83PwkgEfyDbSt44NGx4SZPRZid-42UMEPExo",
    link: "https://www.linkedin.com/in/syndelcallisaya/",
  },
  {
    name: "Manuel Romero",
    bio: "GTM @ Domu · Pioneer 30 · Face on NASDAQ Billboard, Times Square",
    initials: "MR",
    gradient: "linear-gradient(135deg, #7D39EB, #F042FF)",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHr0k1523E5Fg/profile-displayphoto-scale_400_400/B4EZnVrVRgHEAk-/0/1760226536643?e=1776297600&v=beta&t=teEIF56v8f4byQBLjIvnYJniQk_a8_NNdvic6xtMuTM",
    link: "https://www.linkedin.com/in/manuelsantiagoromero/",
  },
  {
    name: "Emil Fischer",
    bio: "Strategy & Ops @ Bia Energy · MSc Management, Nova SBE",
    initials: "EF",
    gradient: "linear-gradient(135deg, #FFE5F1, #F042FF)",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEajp1hMVYE1A/profile-displayphoto-scale_400_400/B4EZwVDZ.oGsAg-/0/1769879742834?e=1776297600&v=beta&t=sv7dYt9PxLGacoKBG-29VeusQ7HORGFpMrKL1wFurC8",
    link: "https://www.linkedin.com/in/emil-fischer-8976b9202/",
  },
  {
    name: "Ian Vega",
    bio: "CS @ UNAM · Founder · Community Builder (Lovable, GitHub & Notion)",
    initials: "IV",
    gradient: "linear-gradient(135deg, #87F5F5, #7D39EB)",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQF-qNns81PchQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1657312905088?e=1777507200&v=beta&t=oC7YcluIghYvrnZkj2bTsoQ2KyZOcAp4_AxsWkieRjQ",
    link: "https://www.linkedin.com/in/lann892/",
  },
]

export function TeamSection() {
  const revealRef = useReveal()
  const { tr } = useLanguage()

  return (
    <section id="team">
      <div className="section-inner">
        <div className="section-tag reveal" ref={revealRef}>{tr.team.tag}</div>
        <div className="section-title reveal" ref={revealRef}>
          {tr.team.title1}
          <br />
          {tr.team.title2}
        </div>
        <p className="section-sub reveal" ref={revealRef}>{tr.team.sub}</p>
        <div className="team-grid reveal" ref={revealRef}>
          {team.map((member, idx) => (
            <div key={idx} className="team-card">
              <div className="team-avatar" style={{ background: member.gradient }}>
                {member.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={member.image} alt={member.name} />
                )}
                {member.initials}
              </div>
              <div className="team-name">{member.name}</div>
              <div className="team-role">{tr.team.role}</div>
              <div className="team-bio">{member.bio}</div>
              <a href={member.link} target="_blank" rel="noopener noreferrer" className="person-link" style={{ marginTop: "0.75rem" }}>
                {tr.team.meetLabel[idx]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
