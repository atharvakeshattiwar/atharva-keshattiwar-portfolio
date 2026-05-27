import { useEffect, useRef } from 'react'

export default function CaseStudyOverview({ heading, paragraphs, bullets, afterBullets, inline }) {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      setTimeout(() => {
        ref.current.style.opacity = '1'
        ref.current.style.transform = 'translateY(0)'
      }, 0)
    }
  }, [])

  const content = (
    <div ref={ref} className="cs-richtext animate-fade-in">
      {heading && <h3 className="cs-richtext-heading">{heading}</h3>}
      <div className="cs-richtext-body">
        {paragraphs.map((p, i) => (
          <p key={i} className="cs-richtext-para" dangerouslySetInnerHTML={{ __html: p }} />
        ))}
        {bullets && bullets.length > 0 && (
          <ul className="cs-richtext-list">
            {bullets.map((b, i) => (
              <li key={i} className="cs-richtext-bullet" dangerouslySetInnerHTML={{ __html: b }} />
            ))}
          </ul>
        )}
        {afterBullets && (
          <p className="cs-richtext-para" dangerouslySetInnerHTML={{ __html: afterBullets }} />
        )}
      </div>
    </div>
  )

  if (inline) return content

  return (
    <section className="cs-main">
      <div className="cs-main-wrapper">
        <div className="cs-main-content">
          {content}
        </div>
      </div>
    </section>
  )
}
