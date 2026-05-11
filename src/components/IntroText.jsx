import { useEffect, useRef } from 'react'

export default function IntroText() {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      setTimeout(() => {
        ref.current.style.opacity = '1'
        ref.current.style.transform = 'translateY(0)'
      }, 100)
    }
  }, [])

  return (
    <section className="intro-text-section">
      <div className="intro-text-wrapper">
        <div ref={ref} className="intro-text-content animate-fade-in">
          <div className="intro-text-line">Hey there, I'm</div>
          <div className="intro-text-name">Atharva K.</div>
        </div>
      </div>
    </section>
  )
}
