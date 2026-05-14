import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import heroBg from '../assets/hero-bg.png'

export default function CleanHero({ animation = 4 }) {
  const sectionRef = useRef(null)
  const labelRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const line3Ref = useRef(null)
  const rolesRef = useRef(null)
  const roleItemRefs = useRef([])
  const scrollRef = useRef(null)

  const addRoleRef = (el) => {
    if (el && !roleItemRefs.current.includes(el)) roleItemRefs.current.push(el)
  }

  useEffect(() => {
    roleItemRefs.current = roleItemRefs.current.filter(Boolean)
    const lines = [line1Ref.current, line2Ref.current, line3Ref.current]

    const ctx = gsap.context(() => {
      if (animation === 1) {
        // OPTION 1: Fade up with stagger
        gsap.fromTo(labelRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.3 }
        )
        lines.forEach((line, i) => {
          gsap.fromTo(line,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 + i * 0.15 }
          )
        })
        roleItemRefs.current.forEach((el, i) => {
          gsap.fromTo(el,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 1.1 + i * 0.1 }
          )
        })
        gsap.fromTo(scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.4 }
        )
      }

      if (animation === 2) {
        // OPTION 2: Word-by-word reveal
        gsap.fromTo(labelRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.2 }
        )
        lines.forEach((line) => {
          const words = line.querySelectorAll('.clean-hero-word')
          gsap.fromTo(words,
            { opacity: 0, y: 15, filter: 'blur(4px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5, ease: 'power2.out', stagger: 0.06, delay: 0.4 }
          )
        })
        roleItemRefs.current.forEach((el, i) => {
          gsap.fromTo(el,
            { opacity: 0, x: -10 },
            { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out', delay: 1.2 + i * 0.1 }
          )
        })
        gsap.fromTo(scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: 'power2.out', delay: 1.5 }
        )
      }

      if (animation === 3) {
        // OPTION 3: Clip reveal (line by line from bottom)
        gsap.fromTo(labelRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.2 }
        )
        lines.forEach((line, i) => {
          gsap.fromTo(line,
            { clipPath: 'inset(100% 0 0 0)', y: 20 },
            { clipPath: 'inset(0% 0 0 0)', y: 0, duration: 0.8, ease: 'power3.inOut', delay: 0.4 + i * 0.2 }
          )
        })
        roleItemRefs.current.forEach((el, i) => {
          gsap.fromTo(el,
            { clipPath: 'inset(100% 0 0 0)' },
            { clipPath: 'inset(0% 0 0 0)', duration: 0.6, ease: 'power3.inOut', delay: 1.2 + i * 0.12 }
          )
        })
        gsap.fromTo(scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: 'power2.out', delay: 1.5 }
        )
      }

      if (animation === 4) {
        // OPTION 4: Split letter fade with blur
        gsap.fromTo(labelRef.current,
          { opacity: 0, filter: 'blur(8px)' },
          { opacity: 1, filter: 'blur(0px)', duration: 1.4, ease: 'power2.out', delay: 0.4 }
        )
        lines.forEach((line, i) => {
          const letters = line.querySelectorAll('.clean-hero-letter')
          gsap.fromTo(letters,
            { opacity: 0, filter: 'blur(6px)', y: 5 },
            { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.03, delay: 0.8 + i * 0.5 }
          )
        })
        roleItemRefs.current.forEach((el, i) => {
          gsap.fromTo(el,
            { opacity: 0, filter: 'blur(4px)', y: 8 },
            { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.9, ease: 'power2.out', delay: 2.8 + i * 0.15 }
          )
        })
        gsap.fromTo(scrollRef.current,
          { opacity: 0, filter: 'blur(4px)' },
          { opacity: 1, filter: 'blur(0px)', duration: 0.9, ease: 'power2.out', delay: 3.3 }
        )
      }

      if (animation === 5) {
        // OPTION 5: Parallax fade (scale + blur into focus)
        gsap.fromTo(labelRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
        )
        lines.forEach((line, i) => {
          gsap.fromTo(line,
            { opacity: 0, scale: 1.08, filter: 'blur(8px)', y: -15 },
            { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0, duration: 1.2, ease: 'power3.out', delay: 0.4 + i * 0.2 }
          )
        })
        roleItemRefs.current.forEach((el, i) => {
          gsap.fromTo(el,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 1.2 + i * 0.1 }
          )
        })
        gsap.fromTo(scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.5 }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [animation])

  const wrapWords = (text) =>
    text.split(' ').map((word, i) => (
      <span key={i} className="clean-hero-word">{word} </span>
    ))

  const wrapLetters = (text, isAccent) =>
    text.split('').map((char, i) => (
      <span key={i} className={`clean-hero-letter${isAccent ? ' clean-hero-accent' : ''}`}>
        {char === ' ' ? ' ' : char}
      </span>
    ))

  const useWords = animation === 2
  const useLetters = animation === 4

  return (
    <section className="clean-hero-section" ref={sectionRef}>
      <div className="clean-hero-img-wrap">
        <img src={heroBg} alt="" className="clean-hero-bg" />
      </div>

      <div className="clean-hero-center">
        <p className="clean-hero-label" ref={labelRef}>MY DESIGN PHILOSOPHY</p>
        <div className="clean-hero-heading">
          <p className="clean-hero-line" ref={line1Ref}>
            {useWords ? wrapWords('Blending storytelling,') :
             useLetters ? wrapLetters('Blending storytelling,') :
             'Blending storytelling,'}
          </p>
          <p className="clean-hero-line" ref={line2Ref}>
            {useWords ? wrapWords('systems, and interaction into thoughtful') :
             useLetters ? wrapLetters('systems, and interaction into thoughtful') :
             'systems, and interaction into thoughtful'}
          </p>
          <p className="clean-hero-line clean-hero-line-accent" ref={line3Ref}>
            {useWords ? <>{wrapWords(' digital experiences.')}</> :
             useLetters ? <em>{wrapLetters(' digital experiences.', true)}</em> :
             <>{' '}<em className="clean-hero-accent">digital experiences.</em></>}
          </p>
        </div>
      </div>

      <div className="clean-hero-roles" ref={rolesRef}>
        <p className="clean-hero-role" ref={addRoleRef}>Sr. Product Designer</p>
        <p className="clean-hero-role" ref={addRoleRef}>Visual Storyteller</p>
        <p className="clean-hero-role" ref={addRoleRef}>Based in Mumbai, India</p>
      </div>

      <div className="clean-hero-scroll" ref={scrollRef}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="clean-hero-chevrons">
          <path className="clean-hero-chevron-1" d="m7 6 5 5 5-5" />
          <path className="clean-hero-chevron-2" d="m7 13 5 5 5-5" />
        </svg>
        <span className="clean-hero-scroll-text">Scroll to Brew</span>
      </div>
    </section>
  )
}
