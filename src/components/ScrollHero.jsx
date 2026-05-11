import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import scrollHeroImg from '../assets/scroll-hero-img.png'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollHero() {
  const sectionRef = useRef(null)
  const digitalRef = useRef(null)
  const designerRef = useRef(null)
  const imageRef = useRef(null)
  const leftTextRef = useRef(null)
  const rightTextRef = useRef(null)
  const topTextsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: '.sh-pin-target',
          pinSpacing: false,
        },
      })

      tl.fromTo(
        topTextsRef.current,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -60, duration: 0.2 },
        0
      )

      tl.fromTo(
        digitalRef.current,
        { y: 0 },
        { y: -120, duration: 0.5 },
        0.1
      )

      tl.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4 },
        0.15
      )

      tl.fromTo(
        leftTextRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.3 },
        0.3
      )

      tl.fromTo(
        rightTextRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.3 },
        0.3
      )

      tl.fromTo(
        designerRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 },
        0.35
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="sh-section">
      <div className="sh-pin-target">
        <div className="sh-container">
          <div ref={topTextsRef} className="sh-top-texts">
            <div className="sh-top-line">
              <span>Hey there,</span>
              <span>I'm</span>
            </div>
            <div className="sh-name">Atharva Keshattiwar</div>
          </div>

          <div className="sh-wrapper">
            <div ref={digitalRef} className="sh-digital">Digital</div>

            <div className="sh-middle">
              <p ref={leftTextRef} className="sh-left-text">
                Currently available for<br />freelance projects
              </p>
              <div ref={imageRef} className="sh-image">
                <img src={scrollHeroImg} alt="Atharva Keshattiwar" />
              </div>
              <p ref={rightTextRef} className="sh-right-text">
                A product designer dedicated to bridging creativity with user-centric design principles, sculpting intuitive digital experiences that resonate.
              </p>
            </div>

            <div ref={designerRef} className="sh-designer">Designer</div>
          </div>
        </div>
      </div>
    </section>
  )
}
