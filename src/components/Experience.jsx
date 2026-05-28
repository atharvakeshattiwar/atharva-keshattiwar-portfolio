import { useEffect, useRef } from 'react'

const experiences = [
  { role: 'Sr. Product Designer', company: 'Fynd (Reliance Jio)', period: 'Oct 2022 – Present' },
  { role: 'Design Lead', company: 'Dr Pashu, ML Brains', period: 'Nov 2021 – Oct 2022' },
  { role: 'Visual Designer', company: 'A Buzz Company', period: 'Nov 2020 – Sep 2022' },
]

function ExperienceCard({ role, company, period }) {
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
    <div ref={ref} className="exp-card animate-fade-in">
      <div className="exp-card-headline">
        <div className="exp-role">{role}</div>
      </div>
      <div className="exp-info-block">
        <div className="exp-company">{company}</div>
        <div className="exp-period">{period}</div>
      </div>
    </div>
  )
}

export default function Experience() {
  const headlineRef = useRef(null)
  const subtextRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' } }) },
      { threshold: 0.1 }
    )
    if (headlineRef.current) obs.observe(headlineRef.current)
    if (subtextRef.current) obs.observe(subtextRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="exp-section">
      <div className="exp-wrapper">
        <div className="exp-content">
          <div className="exp-left">
            <div ref={headlineRef} className="exp-headline animate-fade-in">
              <div className="section-headline-text">Working Experience</div>
            </div>
            <div ref={subtextRef} className="text-sm text-color-black-800 animate-fade-in">
              A journey across product ecosystems: building scalable systems, simplifying complex workflows, and crafting meaningful digital experiences across SaaS, AI, E-commerce, and omnichannel platforms.
            </div>
          </div>
          <div className="exp-right">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.role} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
