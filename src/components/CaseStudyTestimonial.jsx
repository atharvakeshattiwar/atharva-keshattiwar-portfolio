import { useEffect, useRef } from 'react'

export default function CaseStudyTestimonial({ quote, author, role, avatar }) {
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
    <section className="cs-testimonial" ref={ref}>
      <div className="cs-testimonial-wrapper animate-fade-in">
        <div className="cs-testimonial-quote">&ldquo;{quote}&rdquo;</div>
        <div className="cs-testimonial-author">
          {avatar && <img src={avatar} alt={author} className="cs-testimonial-avatar" />}
          <div className="cs-testimonial-info">
            <div className="cs-testimonial-name">{author}</div>
            <div className="cs-testimonial-role">{role}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
