import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M10.7813 7.33312L7.20534 3.75712L8.14801 2.81445L13.3333 7.99979L8.14801 13.1851L7.20534 12.2425L10.7813 8.66645H2.66667V7.33312H10.7813Z" fill="currentColor"/>
  </svg>
)

export default function NextProject({ title, slug }) {
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
    <section ref={ref} className="cs-next-project animate-fade-in">
      <div className="cs-next-label">Next Project</div>
      <h3 className="cs-next-title">{title}</h3>
      <Link to={`/project/${slug}`} className="primary-button-block-black">
        <div className="primary-button-wrapper-black">
          <div className="primary-button-text-black">View project</div>
          <div className="primary-button-arrow-block-black">
            <div className="primary-button-slider-black">
              <div className="button-arrow-white"><ArrowIcon /></div>
              <div className="button-arrow-white"><ArrowIcon /></div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  )
}
