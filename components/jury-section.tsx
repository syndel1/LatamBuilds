"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useLanguage } from "@/context/language-context"

const judges = [
  {
    name: "Andrés Noero",
    bio: "CEO @ Tangering AI",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEJbjNHrxfzzA/profile-displayphoto-scale_400_400/B4EZ1_ouZXHQAg-/0/1775962880556?e=1778112000&v=beta&t=Gmc0pOxgdAl6wYFRAtAOgjkldSyV6PCTN3sOOx85FU4",
    link: "https://www.linkedin.com/in/andresnoero/",
  },
  {
    name: "Kai Takami",
    bio: "CTO @ Domu · YC W24",
    image: "https://i.imgur.com/Dr5tLMG.jpeg",
    link: "https://www.linkedin.com/in/kaitakami/",
  },
  {
    name: "Juan Gómez",
    bio: "CEO @ Fail Fast",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGwq3arWBfT6Q/profile-displayphoto-crop_800_800/B4EZvcwNEMGYAI-/0/1768935184877?e=1777507200&v=beta&t=kaiRomjYuJkIfyr5YXcWfUmYxreDrIjULP60grDjXWE",
    link: "https://www.linkedin.com/in/juanse-gomez/",
  },
  {
    name: "Lucas Zancanella",
    bio: "TAM @ Domu",
    image: "https://i.imgur.com/5pW7OJd.png",
    link: "https://www.linkedin.com/in/lucas-kenji-zancanella-26a264215/",
  },
  {
    name: "Santiago Sáenz",
    bio: "CRO @ NanoFreeze",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFx2xXoZRzTdA/profile-displayphoto-crop_800_800/B4EZw4VDHFJsAI-/0/1770471569793?e=1777507200&v=beta&t=CVmZAB5u6XJzBwo_ZMI82XVu4pGKo_swW9xPDZygN5Y",
    link: "https://www.linkedin.com/in/santiagosaenzariza/",
  },
  {
    name: "Luis Huayaney",
    bio: "CEO @ Greenhouse",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGCfH_AiShLlA/profile-displayphoto-crop_800_800/B4EZqCNAdgJgAM-/0/1763121044490?e=1777507200&v=beta&t=-fiVoi0_V47k75LtwRmksqvjvwiVA6GfIbSyVe1cbbQ",
    link: "https://www.linkedin.com/in/luishuayaney/",
  },
  {
    name: "Juan Garzón",
    bio: "Technical Ops Lead @ Domu",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFibeo2q-K67A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706805325059?e=1777507200&v=beta&t=OqdifMfDZ07u8vqEpsIuTq8S-MCJwmAEZnzfzxTSMq4",
    link: "https://www.linkedin.com/in/juan-pablo-garzon-parra-66176a218/",
  },
  {
    name: "Juan Valencia",
    bio: "Product Manager @ Habi",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQE1m2YKfEW3EQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667168487296?e=1777507200&v=beta&t=PaWJtosDT-HV1I8KrLm_a4_nsUkIoEOCwwWOD34QfKI",
    link: "https://www.linkedin.com/in/juanjosevalenciam/",
  },
  {
    name: "Vitor Zancanella",
    bio: "AI Engineer @ Domu",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGeLxMs8Z1zXg/profile-displayphoto-crop_800_800/B4DZp0EDaXIEAI-/0/1762883811518?e=1777507200&v=beta&t=KTUwgx7ZFdauy8CRkVcGGNe76P2cGPffIvFCd1LImQ4",
    link: "https://www.linkedin.com/in/vitor-hiroshi-zancanella-a7b086234/",
  },
  {
    name: "John Rodriguez",
    bio: "Founding Engineer @ Helios · YC",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQH6f3JhZx9CAg/profile-displayphoto-crop_800_800/B4EZtikcnQIQAI-/0/1766885281289?e=1777507200&v=beta&t=SJQLrOJYTs77Yk4vR0PZqoMKKpE_c5eCRgm2xir3W_E",
    link: "https://www.linkedin.com/in/john-rodriguez-dev/",
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
    <section id="jury">
      <div className="section-inner">
        <div className="section-tag reveal" ref={revealRef}>{tr.jury.tag}</div>
        <div className="section-title reveal" ref={revealRef}>
          {tr.jury.title1}
          <br />
          {tr.jury.title2}
        </div>
        <p className="section-sub reveal" ref={revealRef}>{tr.jury.sub}</p>
        <div className="people-grid reveal" ref={revealRef}>
          {judges.map((judge, idx) => (
            <div key={idx} className="person-card">
              <div className="person-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={judge.image} alt={judge.name} />
              </div>
              <div className="person-name-dark">{judge.name}</div>
              <div className="person-bio-line">{judge.bio}</div>
              <a href={judge.link} target="_blank" rel="noopener noreferrer" className="person-link">
                {tr.jury.meetHim}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
