import { useEffect, useRef } from 'react'

const steps = [
  { num: '[01]', title: 'Discover', desc: 'I start by understanding your brand, your users, and your goals to build a solid foundation for design.' },
  { num: '[02]', title: 'Design', desc: 'Bringing ideas to life with clean visuals, smart layouts, and a focus on intuitive user experience.' },
  { num: '[03]', title: 'Define', desc: 'I then map out the structure, style, and strategy, shaping a clear vision for the final digital product.' },
  { num: '[04]', title: 'Deliver', desc: 'We focus on delivering tangible outcomes through continuous optimization and performance.' },
]

function ProcessCard({ num, title, desc }) {
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
    <div ref={ref} className="proc-card animate-fade-in">
      <div className="proc-card-left">
        <div className="text-sm text-color-black-900">{num}</div>
        <div className="proc-title">{title}</div>
      </div>
      <div className="proc-card-right">
        <div className="text-sm text-color-black-800">{desc}</div>
      </div>
    </div>
  )
}

export default function Process() {
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
    <section className="proc-section">
      <div className="proc-wrapper">
        <div className="proc-content">
          <div className="proc-top">
            <div ref={h1} className="section-headline-text text-align-center animate-fade-in">
              My Work Process
            </div>
            <div ref={h2} className="proc-top-intro animate-fade-in">
              <div className="text-sm text-align-center text-color-black-800">
                I provide a range of top-quality services designed to help brands grow, connect, and stand out. With a focus on creativity, functionality, and results.
              </div>
            </div>
          </div>
          <div className="proc-bottom">
            {steps.map(s => <ProcessCard key={s.num} {...s} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
