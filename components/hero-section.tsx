"use client"

import { useEffect, useState } from "react"
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
  const countdown = useCountdown()
  const { tr } = useLanguage()

  const countdownLabels = ["DAYS", "HRS", "MIN", "SEC"]
  const countdownValues = [countdown.days, countdown.hours, countdown.minutes, countdown.seconds]
  const cities = [
    {
      label: tr.hero.btn1,
      flag: "/figma/flag-co.png",
      href: "https://luma.com/mfxcoval",
    },
    {
      label: tr.hero.btn2,
      flag: "/figma/flag-mx.png",
      href: "https://luma.com/yj5r0k24",
    },
  ]

  return (
    <section className="hero" id="home">
      <div className="hero-side hero-side-left">real challenges, real results_</div>
      <div className="hero-side hero-side-right">real challenges, real results_</div>
      <div className="hero-cross hero-cross-one">+</div>
      <div className="hero-cross hero-cross-two">+</div>
      <div className="hero-cross hero-cross-three">+</div>
      <div className="hero-content">
        <p className="hero-badge">{tr.hero.badge}</p>
        <span className="hero-axis hero-axis-top" aria-hidden="true" />
        <div className="hero-title">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/figma/the-gtm-hackathon.svg" alt="The GTM Hackathon" className="hero-title-img" />
        </div>
        <p className="hero-sub">
          {tr.hero.subtitle}
          <strong>{tr.hero.subtitleBold}</strong>
          {tr.hero.subtitleEnd}
        </p>
        <div className="hero-cities" aria-label="Hackathon cities">
          {cities.map((city) => (
            <a key={city.label} href={city.href} target="_blank" rel="noopener noreferrer" className="city-link">
              <span aria-hidden="true">--</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={city.flag} alt="" />
              {city.label}
            </a>
          ))}
        </div>
        <div className="countdown-row">
          {countdownValues.map((value, i) => (
            <div key={i} className="countdown-box">
              <span className="countdown-num">{String(value).padStart(2, "0")}</span>
              <span className="countdown-label">{countdownLabels[i]}</span>
            </div>
          ))}
        </div>
        <span className="hero-axis hero-axis-bottom" aria-hidden="true" />
      </div>
    </section>
  )
}
