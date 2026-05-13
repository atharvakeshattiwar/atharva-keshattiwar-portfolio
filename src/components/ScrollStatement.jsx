import { useEffect, useRef } from 'react'
import portrait from '../assets/about-portrait.jpg'

export default function ScrollStatement() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const textEl = textRef.current
    if (!section || !textEl) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const viewH = window.innerHeight
      const progress = Math.min(Math.max(1 - rect.top / (viewH * 0.6), 0), 1)
      const opacity = 0.15 + progress * 0.85
      textEl.style.opacity = String(opacity)
      textEl.style.transform = `translateY(${(1 - progress) * 30}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="stmt-section">
      <div className="stmt-wrapper">
        <div className="stmt-top">
          <div className="stmt-label">
            <div className="stmt-label-line">Beyond the screens</div>
          </div>
        </div>
        <div className="stmt-body">
          <div className="stmt-image-col">
            <img src={portrait} alt="Atharva Keshattiwar" className="stmt-portrait" />
          </div>
          <p ref={textRef} className="stmt-text">
            My journey started with cameras, visuals, and storytelling — long before product design. Today, I design digital experiences the same way I capture photographs: through observation, emotion, rhythm, and human connection.
          </p>
        </div>
      </div>
    </section>
  )
}
