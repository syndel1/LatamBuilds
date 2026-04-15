"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useLanguage } from "@/context/language-context"

const cities = ["bog", "bog", "mex", "mex"]

export function ScheduleSection() {
  const revealRef = useReveal()
  const { tr } = useLanguage()

  return (
    <section id="schedule">
      <div className="section-inner">
        <div className="section-tag reveal" ref={revealRef}>{tr.schedule.tag}</div>
        <div className="section-title reveal" ref={revealRef}>
          {tr.schedule.title1}
          <br />
          {tr.schedule.title2}
        </div>
        <p className="section-sub reveal" ref={revealRef}>{tr.schedule.sub}</p>
        <div className="schedule-list reveal" ref={revealRef}>
          {tr.schedule.items.map((item, idx) => (
            <div key={idx} className="schedule-item">
              <div className={`sch-dot ${cities[idx]}`} />
              <div className="sch-date">{item.date}</div>
              <div>
                <div className="sch-title">{item.title}</div>
                <div className="sch-sub">{item.sub}</div>
              </div>
              <div className={`sch-city ${cities[idx]}`}>{item.city}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
