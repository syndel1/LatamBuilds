"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/context/language-context"

export function IntroSection() {
  const statsRef = useRef<HTMLDivElement>(null)
  const { tr } = useLanguage()

  useEffect(() => {
    const counters = statsRef.current?.querySelectorAll(".stat-n")
    if (!counters) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement
          if (entry.isIntersecting && !target.dataset.done) {
            target.dataset.done = "1"
            const raw = target.textContent || ""
            const n = parseInt(raw.replace(/\D/g, ""))
            if (isNaN(n)) return
            let v = 0
            const dur = 1200
            const step = 16
            const inc = n / (dur / step)
            const interval = setInterval(() => {
              v += inc
              if (v >= n) { v = n; clearInterval(interval) }
              target.textContent = raw.includes("+") ? Math.floor(v) + "+" : String(Math.floor(v))
            }, step)
          }
        })
      },
      { threshold: 0.5 }
    )
    counters.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="intro-section">
      <div className="intro-content">
        <div className="supported-by">
          <span className="supported-by-label">{tr.hero.supportedBy}</span>
          <div className="supported-by-logos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figma/logo-latambuilds.png" alt="LatamBuilds" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figma/logo-makers.png" alt="Makers" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figma/logo-30x.svg" alt="30X" />
          </div>
        </div>
        <div ref={statsRef} className="stats-inner hero-stats">
          {tr.hero.stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-n">{stat.value}</div>
              <div className="stat-l">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
