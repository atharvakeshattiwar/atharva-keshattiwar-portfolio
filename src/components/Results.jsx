import { useEffect, useRef } from 'react'

const results = [
  { number: '20+', label: 'Projects Delivered' },
  { number: '1M+', label: 'Users Impacted' },
  { number: '20+', label: 'Products Scaled' },
  { number: '4+', label: 'Years of Experience' },
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
        <div ref={headRef} className="section-headline-text text-align-center animate-fade-in">
          Results
        </div>
        <div ref={blocksRef} className="res-content animate-fade-in">
          {results.map((r) => (
            <div key={r.label} className="res-block">
              <div className="res-number">{r.number}</div>
              <div className="res-label">{r.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
