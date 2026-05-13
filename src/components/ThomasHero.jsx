import { useEffect, useRef, useState } from 'react'
import heroImg from '../assets/thomas-hero.png'

export default function ThomasHero() {
  const cardRef = useRef(null)
  const paraRef = useRef(null)
  const tiltRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const card = tiltRef.current
    if (!card) return

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const rotateX = ((e.clientY - centerY) / rect.height) * 10
      const rotateY = ((e.clientX - centerX) / rect.width) * -10
      setTilt({ x: rotateX, y: rotateY })
    }

    const handleLeave = () => setTilt({ x: 0, y: 0 })

    card.addEventListener('mousemove', handleMove)
    card.addEventListener('mouseleave', handleLeave)
    return () => {
      card.removeEventListener('mousemove', handleMove)
      card.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

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
          <div
            ref={(el) => { cardRef.current = el; tiltRef.current = el }}
            className="th-card animate-fade-in"
            style={{
              transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: tilt.x === 0 && tilt.y === 0
                ? 'transform 0.5s ease-out, opacity 0.7s cubic-bezier(0.25,0.46,0.45,0.94)'
                : 'transform 0.1s ease-out',
            }}
          >
            <div className="th-card-texts">
              <span>Product Designer</span>
              <span>Visual Storyteller</span>
            </div>
            <div className="th-card-image">
              <img src={heroImg} alt="Atharva K." className="th-img" />
            </div>
            <div className="th-card-texts">
              <span>Based in Mumbai, India 🇮🇳</span>
              <span className="th-available">Available for Work<span className="th-green-dot" /></span>
            </div>
          </div>

          <p ref={paraRef} className="th-paragraph animate-fade-in">
            Product designer with 4+ years of experience crafting scalable digital products, AI-powered experiences, and human-centered stories through design, systems, and visual storytelling.
          </p>
        </div>
      </div>
    </section>
  )
}
