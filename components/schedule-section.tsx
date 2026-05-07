"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useLanguage } from "@/context/language-context"

const cities: Array<"bog" | "mex"> = ["bog", "bog", "mex", "mex"]
const cityCodes = { bog: "BOG", mex: "MEX" } as const

export function ScheduleSection() {
  const revealRef = useReveal()
  const { tr } = useLanguage()

  return (
    <section id="schedule" className="editorial-section">
      <div className="editorial-header">
        <span className="editorial-index">
          <span className="editorial-index-num">01</span>
          <span className="editorial-index-sep">/</span>
          <span className="editorial-index-name">{tr.schedule.tag}</span>
        </span>
        <h2 className="editorial-title reveal" ref={revealRef}>
          {tr.schedule.title1}
          <br />
          <em>{tr.schedule.title2}</em>
        </h2>
        <p className="editorial-sub reveal" ref={revealRef}>{tr.schedule.sub}</p>
      </div>

      <div className="schedule-table reveal" ref={revealRef}>
        {tr.schedule.items.map((item, idx) => {
          const code = cities[idx]
          return (
            <div key={idx} className="schedule-row" data-city={code}>
              <span className={`sch-marker sch-marker-${code}`} aria-hidden="true" />
              <span className="sch-date">{item.date}</span>
              <div className="sch-body">
                <div className="sch-headline">{item.title}</div>
                <div className="sch-sub">{item.sub}</div>
              </div>
              <span className="sch-cityb">{cityCodes[code]}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
