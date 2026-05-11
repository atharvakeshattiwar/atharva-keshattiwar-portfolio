import { useEffect, useRef, useState } from 'react'
import portrait from '../assets/portrait.png'

export default function SofieHero() {
  const containerRef = useRef(null)
  const imageRef = useRef(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const x = ((e.clientY - centerY) / rect.height) * 12
      const y = ((e.clientX - centerX) / rect.width) * -12
      setRotate({ x, y })
    }

    const handleMouseLeave = () => {
      setRotate({ x: 0, y: 0 })
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll('.sfh-animate')
    if (!els) return
    els.forEach((el, i) => {
      setTimeout(() => {
        el.style.transform = 'translateY(0)'
        el.style.opacity = '1'
      }, 200 + i * 150)
    })
  }, [])

  return (
    <section className="sfh-section" ref={containerRef}>
      <div className="sfh-container">
        <div className="sfh-content">
          <div className="sfh-display-container">
            <div className="sfh-display-wrap">
              <div className="sfh-display sfh-animate">
                <h2 className="sfh-heading">Atharva</h2>
              </div>
            </div>
            <div className="sfh-display-wrap">
              <div className="sfh-display sfh-animate">
                <h2 className="sfh-heading">Keshattiwar</h2>
              </div>
            </div>
          </div>

          <div className="sfh-image-block">
            <div className="sfh-floating-container">
              <div
                ref={imageRef}
                className="sfh-floating-image sfh-animate"
                style={{
                  transform: `perspective(800px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                  backgroundImage: `url(${portrait})`,
                }}
              />
            </div>
          </div>

          <div className="sfh-intro-block sfh-animate">
            <div>AN INDEPENDENT PRODUCT DESIGNER BASED IN MUMBAI, INDIA</div>
          </div>
        </div>
      </div>
    </section>
  )
}
