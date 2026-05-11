import { useEffect, useRef } from 'react'
import heroImage from '../assets/hero-image.png'

export default function Hero() {
  const headlineRef = useRef(null)
  const hrRef = useRef(null)
  const infoRef = useRef(null)
  const introRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const fadeIns = [
      { ref: headlineRef, delay: 0 },
      { ref: hrRef, delay: 200 },
      { ref: infoRef, delay: 400 },
      { ref: introRef, delay: 600 },
    ]

    fadeIns.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current.style.opacity = '1'
          ref.current.style.transform = 'translateY(0)'
        }, delay)
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0) scale(1)'
          }
        })
      },
      { threshold: 0.1 }
    )

    if (imageRef.current) observer.observe(imageRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-home-hero">
      <div className="home-hero-wrapper">
        <div className="home-hero-top">
          <div ref={headlineRef} className="home-hero-headline animate-fade-in">
            <div className="hero-headline-text home">Atharva K.</div>
          </div>

          <div ref={hrRef} className="hero-hr-line animate-fade-in" />

          <div ref={infoRef} className="home-hero-info animate-fade-in">
            <div className="home-hero-info-card">
              <div className="text-sm">Design Engineer &amp; Visual Storyteller</div>
            </div>
            <div className="home-hero-info-card _2">
              <div className="text-sm">Based in Mumbai, India</div>
            </div>
            <div className="home-hero-info-card _3">
              <div className="text-sm">Building Scalable Digital Experiences</div>
            </div>
          </div>

          <div ref={introRef} className="home-hero-intro animate-fade-in">
            <h3 className="heading-h3 home-hero">
              <span className="blank-text">_____________________</span>
              [A product designer with 4+ years of experience, crafting intuitive digital products and capturing human emotion through my lens.]
            </h3>
          </div>
        </div>

        <div ref={imageRef} className="home-hero-bottom animate-scale-in">
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
      </div>
    </section>
  )
}
