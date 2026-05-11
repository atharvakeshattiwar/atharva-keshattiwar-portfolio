import { useEffect, useRef } from 'react'

const awards = [
  { title: 'Complete Ownership Award', year: '[2024]', desc: 'Pizza Hut Malaysia' },
  { title: 'Continuous Self-Improvement Award', year: '[2023]', desc: 'Swapeasy' },
]

function AwardCard({ title, year, desc }) {
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
    <div ref={ref} className="aw-card animate-fade-in">
      <div className="aw-title">{title}</div>
      <div className="aw-year">{year}</div>
      <div className="aw-desc">{desc}</div>
    </div>
  )
}

export default function Awards() {
  const h1 = useRef(null)
  const h2 = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' } }) },
      { threshold: 0.1 }
    )
    if (h1.current) obs.observe(h1.current)
    if (h2.current) obs.observe(h2.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="aw-section">
      <div className="aw-wrapper">
        <div className="aw-content">
          <div className="aw-left">
            <div ref={h1} className="section-headline-text text-align-center animate-fade-in">Awards</div>
            <div ref={h2} className="text-sm text-align-center text-color-black-800 animate-fade-in">
              Recognized for taking full ownership of design outcomes and continuously pushing for growth — these awards reflect my commitment to delivering impact-driven work across products and teams.
            </div>
          </div>
          <div className="aw-right">
            {awards.map(a => <AwardCard key={a.title} {...a} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
