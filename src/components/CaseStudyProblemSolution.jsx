import { useEffect, useRef } from 'react'

export default function CaseStudyProblemSolution({ blocks }) {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = '1'
            e.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="cs-main">
      <div className="cs-main-wrapper">
        <div className="cs-main-content">
          <div ref={ref} className="cs-probsol animate-fade-in">
            {blocks.map((block, i) => (
              <div key={i} className="cs-probsol-block">
                <h3 className="cs-richtext-heading">{block.heading}</h3>
                <div className="cs-richtext-body">
                  {block.paragraphs.map((p, j) => (
                    <p key={j} className="cs-richtext-para">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
