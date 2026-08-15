import { useEffect, useRef } from 'react'

const results = [
  { number: '5+', label: 'Years of Experience', description: 'Designing across SaaS, AI, and commerce products with a focus on building intuitive and scalable digital experiences.' },
  { number: '20+', label: 'Projects Delivered', description: 'Delivered product solutions across B2B platforms, marketplaces, and consumer applications with real-world usability and impact.' },
  { number: '5+', label: 'Domains Explored', description: 'Worked across AI, SaaS, e-commerce, healthtech, and retailtech with adaptable design thinking across industries and user needs.' },
  { number: '100M+', label: 'User Reach', description: 'Experiences designed across E-commerce, SaaS, AI, CRM Re-commerce, and omnichannel digital platforms.' },
]

export default function Results() {
  const headRef = useRef(null)
  const blocksRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' } }) },
      { threshold: 0.1 }
    )
    if (headRef.current) obs.observe(headRef.current)
    if (blocksRef.current) obs.observe(blocksRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="res-section">
      <div className="res-wrapper">
        <div ref={headRef} className="res-header animate-fade-in">
          <div className="section-headline-text text-align-center">
            Results
          </div>
          <div className="res-subtext">
            Designing scalable digital experiences across AI, commerce, SaaS, and omnichannel ecosystems, focused on building products that create real user and business impact.
          </div>
        </div>
        <div ref={blocksRef} className="res-content animate-fade-in">
          {results.map((r) => (
            <div key={r.label} className="res-block">
              <div className="res-number">{r.number}</div>
              <div className="res-bottom">
                <div className="res-label">{r.label}</div>
                <div className="res-desc">{r.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
