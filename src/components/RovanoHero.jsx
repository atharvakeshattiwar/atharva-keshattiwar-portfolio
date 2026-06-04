import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import work1 from '../assets/works/project-placeholder.avif'
import work2 from '../assets/works/brandflux.avif'
import work3 from '../assets/works/designova.avif'
import work4 from '../assets/works/webion.avif'

gsap.registerPlugin(ScrollTrigger)

const works = [
  { img: work1, title: 'Creativox', year: '2026' },
  { img: work2, title: 'Brandflux', year: '2025' },
  { img: work3, title: 'Designova', year: '2024' },
  { img: work4, title: 'Webion', year: '2024' },
]

const services = ['Web Design', 'Social Media', 'Marketing', 'Development', 'SEO Optimization']

const FAN_COUNT = 9
const FAN_ANGLES = [-24, -18, -12, -6, 0, 6, 12, 18, 24]

export default function RovanoHero() {
  const heroRef = useRef(null)
  const fanRefs = useRef([])
  const taglineRef = useRef(null)
  const serviceRefs = useRef([])
  const scrollRef = useRef(null)
  const featuredRef = useRef(null)

  useEffect(() => {
    serviceRefs.current = serviceRefs.current.filter(Boolean)
    fanRefs.current = fanRefs.current.filter(Boolean)

    const ctx = gsap.context(() => {
      // Fan text animation - start fanned out, converge to center
      fanRefs.current.forEach((el, i) => {
        const finalAngle = FAN_ANGLES[i] || 0
        const isCenterCopy = i === Math.floor(FAN_COUNT / 2)
        gsap.fromTo(
          el,
          {
            rotateZ: finalAngle * 3,
            opacity: 0,
          },
          {
            rotateZ: finalAngle,
            opacity: isCenterCopy ? 1 : 0.7,
            duration: 1.6,
            ease: 'power3.out',
            delay: 0.2 + Math.abs(i - Math.floor(FAN_COUNT / 2)) * 0.05,
          }
        )
      })

      // Tagline fade in
      gsap.fromTo(
        taglineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.8 }
      )

      // Services stagger in
      gsap.fromTo(
        serviceRefs.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.06, delay: 1 }
      )

      // Scroll + featured fade in
      gsap.fromTo(
        [scrollRef.current, featuredRef.current],
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.2 }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const addFanRef = (el) => {
    if (el && !fanRefs.current.includes(el)) fanRefs.current.push(el)
  }

  const addServiceRef = (el) => {
    if (el && !serviceRefs.current.includes(el)) serviceRefs.current.push(el)
  }

  return (
    <div className="rovano-main" ref={heroRef}>
      <div className="rovano-sticky">
        <div className="rovano-hero">
          {/* Big fanning text */}
          <div className="rovano-fan-wrapper">
            {Array.from({ length: FAN_COUNT }).map((_, i) => {
              const isFilled = i === Math.floor(FAN_COUNT / 2)
              return (
                <div
                  key={i}
                  ref={addFanRef}
                  className={`rovano-fan-text ${isFilled ? 'rovano-fan-filled' : 'rovano-fan-outline'}`}
                  style={{ zIndex: i + 1 }}
                >
                  VALTERO©
                </div>
              )
            })}
          </div>

          {/* Center tagline */}
          <div className="rovano-tagline-wrapper" ref={taglineRef}>
            <h2 className="rovano-tagline">
              We design and build digital experiences through strategy, branding, and technology.
            </h2>
          </div>

          {/* Bottom bar */}
          <div className="rovano-bottom-bar">
            <div className="rovano-bottom-grid">
              <div className="rovano-services">
                {services.map((s, i) => (
                  <p key={i} className="rovano-service-item" ref={addServiceRef}>
                    {s}
                  </p>
                ))}
              </div>

              <div className="rovano-scroll-indicator" ref={scrollRef}>
                <span className="rovano-scroll-arrow">↓</span>
                <span className="rovano-scroll-text">Scroll to explore</span>
              </div>

              <div className="rovano-featured" ref={featuredRef}>
                <p className="rovano-featured-text">
                  Featured Work <span className="rovano-featured-count">/04</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Work banners that scroll over the hero */}
      <div className="rovano-works">
        {works.map((work, i) => (
          <div key={i} className="rovano-work-banner">
            <div className="rovano-work-photo">
              <img src={work.img} alt={work.title} className="rovano-work-img" />
            </div>
            <div className="rovano-work-overlay">
              <p className="rovano-work-title">{work.title}</p>
              <p className="rovano-work-year">
                <span className="rovano-work-copyright">©</span>
                {work.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
