import { useEffect, useRef } from 'react'
import heroImg from '../assets/thomas-hero.png'

export default function ThomasHero() {
  const cardRef = useRef(null)
  const paraRef = useRef(null)

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
    if (cardRef.current) obs.observe(cardRef.current)
    if (paraRef.current) obs.observe(paraRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="th-section">
      <div className="th-container">
        <div className="th-wrapper">
          <div ref={cardRef} className="th-card animate-fade-in">
            <div className="th-card-texts">
              <span>I'm Atharva K.</span>
              <span>Design Engineer</span>
            </div>
            <div className="th-card-image">
              <img src={heroImg} alt="Atharva K." className="th-img" />
            </div>
            <div className="th-card-texts">
              <span>Visual Storyteller</span>
              <span>Product Design</span>
              <span>Development</span>
            </div>
          </div>

          <p ref={paraRef} className="th-paragraph animate-fade-in">
            A product designer with 4+ years of experience, crafting intuitive digital products and capturing human emotion through thoughtful design.
          </p>
        </div>
      </div>
    </section>
  )
}
