"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/context/language-context"

const TARGET = new Date("2026-05-09T09:00:00-05:00")

function useCountdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    const tick = () => {
      const diff = TARGET.getTime() - Date.now()
      if (diff <= 0) { setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return }
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

export function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null)
  const countdown = useCountdown()
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

  const countdownLabels = ["DAYS", "HRS", "MIN", "SEC"]
  const countdownValues = [countdown.days, countdown.hours, countdown.minutes, countdown.seconds]

  return (
    <section className="hero" id="home">
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />
      <div className="hero-grid" />
      <div className="hero-content">
        <div className="hero-badge" style={{ marginTop: "48px" }}>
          <div className="pulse-dot" />
          {tr.hero.badge}
        </div>
        <div className="hero-title">
          <div style={{ lineHeight: 1.0, margin: 0 }}>
            <span className="hero-line1" style={{ margin: 0 }}>The GTM</span>
            <span className="hero-line2" style={{ margin: 0 }}>Hackathon.</span>
          </div>
        </div>
        <p className="hero-sub">
          {tr.hero.subtitle}
          <strong>{tr.hero.subtitleBold}</strong>
          {tr.hero.subtitleEnd}
        </p>
        <div className="hero-btns">
          <a href="https://luma.com/mfxcoval" target="_blank" rel="noopener noreferrer" className="btn-city-gradient">
            {tr.hero.btn1}
          </a>
          <a href="https://luma.com/yj5r0k24" target="_blank" rel="noopener noreferrer" className="btn-city-outline">
            {tr.hero.btn2}
          </a>
          <a href="https://tally.so/r/Y5dX9q" target="_blank" rel="noopener noreferrer" className="btn-city-outline">
            Submit a Challenge →
          </a>
        </div>
        <div className="countdown-row">
          {countdownValues.map((value, i) => (
            <div key={i} className="countdown-box">
              <span className="countdown-num">{String(value).padStart(2, "0")}</span>
              <span className="countdown-label">{countdownLabels[i]}</span>
            </div>
          ))}
        </div>
        <div className="supported-by">
          <span className="supported-by-label">{tr.hero.supportedBy}</span>
          <div className="supported-by-logos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://i.imgur.com/Xu3sYXE.png" alt="LatamBuilds" style={{ height: 75, objectFit: "contain", mixBlendMode: "multiply" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://i.imgur.com/SgpREvt.png" alt="30X" style={{ height: 62, objectFit: "contain", mixBlendMode: "multiply" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://i.imgur.com/LcH00ZC.png" alt="Makers" style={{ height: 80, objectFit: "contain", mixBlendMode: "multiply" }} />
          </div>
        </div>
        <div
          ref={statsRef}
          className="stats-inner"
          style={{ marginTop: "0.75rem", maxWidth: "680px", marginLeft: "auto", marginRight: "auto" }}
        >
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
