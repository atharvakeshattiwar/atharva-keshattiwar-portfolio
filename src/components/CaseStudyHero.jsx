import { useEffect, useRef } from 'react'

export default function CaseStudyHero({ title, info, heroImage, subtitle, services, liveLink }) {
  const headlineRef = useRef(null)
  const subtitleRef = useRef(null)
  const hrRef = useRef(null)
  const infoRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const elements = [
      { ref: headlineRef, delay: 0 },
      { ref: subtitleRef, delay: 100 },
      { ref: hrRef, delay: 200 },
      { ref: infoRef, delay: 400 },
      { ref: imgRef, delay: 600 },
    ]
    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current.style.opacity = '1'
          ref.current.style.transform = 'translateY(0)'
        }, delay)
      }
    })
  }, [])

  return (
    <section className="cs-hero">
      <div className="cs-hero-wrapper">
        <div className="cs-hero-content">
          <div className="cs-hero-top">
            <div ref={headlineRef} className="cs-hero-headline animate-fade-in">
              <div className="hero-headline-text">{title}</div>
            </div>
            {subtitle && (
              <div ref={subtitleRef} className="cs-hero-subtitle animate-fade-in">
                {subtitle}
              </div>
            )}
            <div ref={hrRef} className="hero-hr-line animate-fade-in" />
            <div ref={infoRef} className="cs-hero-info animate-fade-in">
              {info.map((item) => (
                <div key={item.label} className="cs-hero-info-card">
                  <div className="cs-info-label">{item.label}</div>
                  <div className="cs-info-value">{item.value}</div>
                </div>
              ))}
              {services && (
                <div className="cs-hero-info-card">
                  <div className="cs-info-label">Services</div>
                  <div className="cs-info-value">{services}</div>
                </div>
              )}
              {liveLink && (
                <div className="cs-hero-info-card">
                  <div className="cs-info-label">Live</div>
                  <a href={liveLink} target="_blank" rel="noopener noreferrer" className="cs-info-link">View Site →</a>
                </div>
              )}
            </div>
          </div>
          <div ref={imgRef} className="cs-hero-bottom animate-fade-in">
            <img src={heroImage} alt={title} className="cs-hero-image" />
          </div>
        </div>
      </div>
    </section>
  )
}
