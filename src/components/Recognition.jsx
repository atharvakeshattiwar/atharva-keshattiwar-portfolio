import { useEffect, useRef } from 'react'

const awards = [
  { num: '[1]', title: '8x Honorable Mention', source: 'Awards' },
  { num: '[2]', title: 'Creator Of The Year', source: 'Webflow' },
  { num: '[3]', title: '5x Site Of The Day', source: 'Awards' },
  { num: '[4]', title: '2019 Top Designer', source: 'Dribbble' },
  { num: '[5]', title: 'Developer Award', source: 'CSSD' },
  { num: '[6]', title: 'Independent Design Award', source: 'Design' },
]

function AwardRow({ num, title, source }) {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="rec-row animate-fade-in">
      <div className="rec-num">{num}</div>
      <div className="rec-title">{title}</div>
      <div className="rec-source">{source}</div>
    </div>
  )
}

export default function Recognition() {
  const headRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' } },
      { threshold: 0.1 }
    )
    if (headRef.current) obs.observe(headRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="rec-section">
      <div className="rec-wrapper">
        <div ref={headRef} className="section-headline-text text-align-center animate-fade-in">
          Recognition
        </div>
        <div className="rec-content">
          {awards.map((a) => (
            <AwardRow key={a.num} {...a} />
          ))}
        </div>
      </div>
    </section>
  )
}
