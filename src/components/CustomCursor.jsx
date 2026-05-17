import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const pos = useRef({ x: -60, y: -60 })
  const smooth = useRef({ x: -60, y: -60 })
  const raf = useRef(null)
  const [expression, setExpression] = useState('default')

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return

    const onMove = (e) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
    }

    const animate = () => {
      smooth.current.x += (pos.current.x - smooth.current.x) * 0.16
      smooth.current.y += (pos.current.y - smooth.current.y) * 0.16
      el.style.transform = `translate(${smooth.current.x}px, ${smooth.current.y}px)`
      raf.current = requestAnimationFrame(animate)
    }

    const onEnterLink = () => setExpression('excited')
    const onLeaveLink = () => setExpression('default')
    const onEnterText = () => setExpression('reading')
    const onLeaveText = () => setExpression('default')
    const onEnterSoon = () => setExpression('soon')
    const onLeaveSoon = () => setExpression('default')
    const onEnterLive = () => setExpression('live')
    const onLeaveLive = () => setExpression('default')
    const onDown = () => setExpression('click')
    const onUp = () => setExpression('default')
    const onLeave = () => { el.style.opacity = '0'; setExpression('default') }
    const onEnter = () => { el.style.opacity = '1' }

    const bindInteractive = () => {
      document.querySelectorAll('.sw-card-nolink').forEach((node) => {
        node.addEventListener('mouseenter', onEnterSoon)
        node.addEventListener('mouseleave', onLeaveSoon)
      })
      document.querySelectorAll('a.sw-card').forEach((node) => {
        node.addEventListener('mouseenter', onEnterLive)
        node.addEventListener('mouseleave', onLeaveLive)
      })
      document.querySelectorAll('a:not(.sw-card), button, [role="button"], .leah-pill').forEach((node) => {
        node.addEventListener('mouseenter', onEnterLink)
        node.addEventListener('mouseleave', onLeaveLink)
      })
      document.querySelectorAll('p, h1, h2, h3, h4, span.leah-hero-text, .sw-subtext, .text-sm').forEach((node) => {
        node.addEventListener('mouseenter', onEnterText)
        node.addEventListener('mouseleave', onLeaveText)
      })
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    bindInteractive()
    const observer = new MutationObserver(bindInteractive)
    observer.observe(document.body, { childList: true, subtree: true })

    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(raf.current)
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={cursorRef} className={`char-cursor char-cursor--${expression}`}>
      <svg viewBox="0 0 52 58" width="42" height="46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="fur" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#d4a05a" />
            <stop offset="100%" stopColor="#a06e2e" />
          </radialGradient>
          <radialGradient id="furDark" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#c49450" />
            <stop offset="100%" stopColor="#7a5420" />
          </radialGradient>
          <radialGradient id="nose" cx="40%" cy="35%" r="50%">
            <stop offset="0%" stopColor="#3d3d3d" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </radialGradient>
          <radialGradient id="eyeShine" cx="35%" cy="30%" r="40%">
            <stop offset="0%" stopColor="#5a3a1a" />
            <stop offset="100%" stopColor="#2a1a08" />
          </radialGradient>
        </defs>

        {/* Left ear — floppy */}
        <g transform="rotate(-20 8 18)">
          <ellipse className="dog-ear dog-ear-l" cx="8" cy="18" rx="9" ry="16" fill="url(#furDark)" />
          <ellipse cx="8" cy="19" rx="6" ry="12" fill="#c98f4a" opacity="0.4" />
        </g>

        {/* Right ear — floppy */}
        <g transform="rotate(20 44 18)">
          <ellipse className="dog-ear dog-ear-r" cx="44" cy="18" rx="9" ry="16" fill="url(#furDark)" />
          <ellipse cx="44" cy="19" rx="6" ry="12" fill="#c98f4a" opacity="0.4" />
        </g>

        {/* Head */}
        <ellipse className="dog-head" cx="26" cy="30" rx="20" ry="22" fill="url(#fur)" />

        {/* Forehead highlight */}
        <ellipse cx="26" cy="22" rx="12" ry="8" fill="#dbb46a" opacity="0.35" />

        {/* Muzzle */}
        <ellipse className="dog-muzzle" cx="26" cy="38" rx="12" ry="10" fill="#e8c87a" />
        <ellipse cx="26" cy="36" rx="8" ry="5" fill="#f0d890" opacity="0.4" />

        {/* Eyes */}
        <g className="dog-eyes">
          <ellipse className="dog-eye-white dog-eye-white-l" cx="18" cy="27" rx="5.5" ry="5.8" fill="#fff" stroke="#8a6530" strokeWidth="0.8" />
          <ellipse className="dog-iris dog-iris-l" cx="19" cy="27.5" rx="3.5" ry="3.8" fill="url(#eyeShine)" />
          <circle className="dog-pupil dog-pupil-l" cx="19.5" cy="27.5" r="2" fill="#0f0a04" />
          <circle className="dog-shine dog-shine-l" cx="17.5" cy="25.8" r="1.3" fill="#fff" opacity="0.85" />
          <circle cx="20" cy="29" r="0.6" fill="#fff" opacity="0.4" />

          <ellipse className="dog-eye-white dog-eye-white-r" cx="34" cy="27" rx="5.5" ry="5.8" fill="#fff" stroke="#8a6530" strokeWidth="0.8" />
          <ellipse className="dog-iris dog-iris-r" cx="35" cy="27.5" rx="3.5" ry="3.8" fill="url(#eyeShine)" />
          <circle className="dog-pupil dog-pupil-r" cx="35.5" cy="27.5" r="2" fill="#0f0a04" />
          <circle className="dog-shine dog-shine-r" cx="33.5" cy="25.8" r="1.3" fill="#fff" opacity="0.85" />
          <circle cx="36" cy="29" r="0.6" fill="#fff" opacity="0.4" />
        </g>

        {/* Eyebrows */}
        <path className="dog-brow dog-brow-l" d="M12 21 Q15 18 22 20" stroke="#7a5420" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path className="dog-brow dog-brow-r" d="M30 20 Q37 18 40 21" stroke="#7a5420" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Nose */}
        <ellipse cx="26" cy="35" rx="4" ry="3" fill="url(#nose)" />
        <ellipse cx="25" cy="34" rx="1.5" ry="1" fill="#555" opacity="0.4" />

        {/* Mouth */}
        <path className="dog-mouth" d="M22 38.5 Q26 42 30 38.5" />

        {/* Tongue — shown in excited */}
        <ellipse className="dog-tongue" cx="26" cy="44" rx="3.5" ry="4" />

        {/* Cheek blush */}
        <ellipse className="dog-blush dog-blush-l" cx="10" cy="33" rx="4" ry="2.5" />
        <ellipse className="dog-blush dog-blush-r" cx="42" cy="33" rx="4" ry="2.5" />
      </svg>
      <div className="dog-bubble dog-bubble-soon">Coming Soon!</div>
      <div className="dog-bubble dog-bubble-live">Live</div>
    </div>
  )
}
