import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import work1 from '../assets/hero-gallery/work-1.webp'
import work2 from '../assets/hero-gallery/work-2.webp'
import work4 from '../assets/hero-gallery/work-4.webp'
import work5 from '../assets/hero-gallery/work-5.webp'
import work6 from '../assets/hero-gallery/work-6.webp'
import work7 from '../assets/hero-gallery/work-7.webp'
import work9 from '../assets/hero-gallery/work-9.webp'
import work10 from '../assets/hero-gallery/work-10.webp'
import work11 from '../assets/hero-gallery/work-11.webp'
import work12 from '../assets/hero-gallery/work-12.webp'
import work13 from '../assets/hero-gallery/work-13.webp'
import matchaLatte from '../assets/hero-gallery/matcha-latte.webp'
import sunsetSerenity from '../assets/hero-gallery/sunset-serenity.webp'
import partyScene from '../assets/hero-gallery/party-scene.webp'

gsap.registerPlugin(ScrollTrigger)

const leftImages = [work1, work4, work7, work6, work5, work2]
const rightImages = [work11, work9, matchaLatte, work13, work12, work10, sunsetSerenity, partyScene]

export default function MonofHero() {
  const trackRef = useRef(null)
  const heroRef = useRef(null)
  const leftColRef = useRef(null)
  const rightColRef = useRef(null)
  const wordsRef = useRef([])
  const descWordsRef = useRef([])
  const btnRef = useRef(null)
  const scrollLineRef = useRef(null)

  useEffect(() => {
    wordsRef.current = wordsRef.current.filter(Boolean)
    descWordsRef.current = descWordsRef.current.filter(Boolean)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordsRef.current,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.04,
          delay: 0.3,
        }
      )

      gsap.fromTo(
        descWordsRef.current,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.02,
          delay: 0.6,
        }
      )

      gsap.fromTo(
        btnRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1 }
      )

      ScrollTrigger.create({
        trigger: trackRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          const scale = 1 - progress * 0.35
          const borderRadius = progress * 24
          gsap.set(heroRef.current, {
            scale,
            borderRadius: `${borderRadius}px`,
          })

          if (scrollLineRef.current) {
            gsap.set(scrollLineRef.current, {
              width: `${progress * 100}%`,
            })
          }
        },
      })

      ScrollTrigger.create({
        trigger: trackRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(leftColRef.current, { y: self.progress * -600 })
        },
      })

      ScrollTrigger.create({
        trigger: trackRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(rightColRef.current, { y: self.progress * -900 })
        },
      })
    }, trackRef)

    return () => ctx.revert()
  }, [])

  const addWordRef = (el) => {
    if (el && !wordsRef.current.includes(el)) wordsRef.current.push(el)
  }

  const addDescWordRef = (el) => {
    if (el && !descWordsRef.current.includes(el)) descWordsRef.current.push(el)
  }

  const renderWords = (text, refFn) =>
    text.split(' ').map((word, i) => (
      <span key={i} className="monof-word-mask">
        <span ref={refFn} className="monof-word">
          {word}
        </span>
      </span>
    ))

  const services = [
    'Web Design',
    'Social Media',
    'Marketing',
    'Development',
    'SEO Optimization',
  ]

  const description =
    'No cookie cutter sites. No empty claims. Only practical tools and smart strategies that drive growth and build brands.'

  return (
    <div className="monof-hero-track" ref={trackRef}>
      <div className="monof-hero-sticky">
        <div className="monof-hero-grid">
          {/* White hero panel */}
          <div className="monof-hero-panel" ref={heroRef}>
            {/* Top content: services + description */}
            <div className="monof-hero-top-container">
              <div className="monof-hero-top-grid">
                <div className="monof-hero-services">
                  <div className="monof-services-list">
                    {services.map((service, i) => (
                      <p key={i} className="monof-service-text">
                        {renderWords(service, addWordRef)}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="monof-hero-desc-area">
                  <p className="monof-desc-text">
                    {renderWords(description, addDescWordRef)}
                  </p>
                  <a href="/contact" className="monof-cta-btn" ref={btnRef}>
                    <span className="monof-cta-text">Let's talk</span>
                  </a>
                </div>
              </div>

              {/* Circle dividers - below the top grid */}
              <div className="monof-divider-row">
                <div className="monof-circle-divider" />
                <div className="monof-circle-divider" />
                <div className="monof-circle-divider" />
                <div className="monof-circle-divider" />
              </div>
            </div>

            {/* Bottom content: copyright + H1 */}
            <div className="monof-hero-bottom-container">
              <div className="monof-bottom-content">
                <div className="monof-copyright-row">
                  <div />
                  <div />
                  <div />
                  <div className="monof-copyright-cell">
                    <p className="monof-copyright-text">&copy; 2026 Atharva Keshattiwar</p>
                  </div>
                </div>
                <div className="monof-h1-row">
                  <h1 className="monof-h1">Atharva</h1>
                  <h1 className="monof-h1">Studio</h1>
                </div>
              </div>
            </div>
          </div>
          {/* Close monof-hero-panel */}

          {/* Left image column */}
          <div className="monof-photo-col monof-photo-col-left" ref={leftColRef}>
            {leftImages.map((src, i) => (
              <div key={i} className="monof-photo-block">
                <img src={src} alt="" className="monof-photo-img" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Right image column */}
          <div className="monof-photo-col monof-photo-col-right" ref={rightColRef}>
            {rightImages.map((src, i) => (
              <div key={i} className="monof-photo-block">
                <img src={src} alt="" className="monof-photo-img" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator - outside the panel so it stays visible */}
        <div className="monof-scroll-indicator">
          <div className="monof-scroll-badge">Scroll Down</div>
          <div className="monof-scroll-line">
            <div className="monof-scroll-line-fill" ref={scrollLineRef} />
          </div>
        </div>
      </div>
    </div>
  )
}
