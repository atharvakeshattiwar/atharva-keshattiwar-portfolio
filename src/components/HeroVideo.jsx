import { useEffect, useRef } from 'react'

export default function HeroVideo() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1'
          e.target.style.transform = 'translateY(0) scale(1)'
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="hero-video-section">
      <div ref={ref} className="home-hero-bottom animate-scale-in">
        <video
          className="home-hero-image"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
