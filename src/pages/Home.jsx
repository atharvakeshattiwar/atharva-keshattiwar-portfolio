import { useRef, useCallback } from 'react'
import MouseTrail from '../components/MouseTrail'
import IntroText from '../components/IntroText'
import ThomasHero from '../components/ThomasHero'
import SelectedWorks from '../components/SelectedWorks'
import SuccessNumbers from '../components/SuccessNumbers'
import Partners from '../components/Partners'
import Footer from '../components/Footer'

export default function Home() {
  const trailRef = useRef(null)
  const lastPos = useRef({ x: 0, y: 0 })
  const isFirst = useRef(true)

  const handleMouseMove = useCallback((e) => {
    if (isFirst.current) {
      lastPos.current = { x: e.clientX, y: e.clientY }
      isFirst.current = false
      return
    }
    const dx = e.clientX - lastPos.current.x
    const dy = e.clientY - lastPos.current.y
    if (Math.sqrt(dx * dx + dy * dy) > 100) {
      const prevX = lastPos.current.x
      const prevY = lastPos.current.y
      lastPos.current = { x: e.clientX, y: e.clientY }
      trailRef.current?.spawn(e.clientX, e.clientY, prevX, prevY)
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    isFirst.current = true
  }, [])

  return (
    <>
      <div
        className="hero-trail-area"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <MouseTrail ref={trailRef} />
        <IntroText />
        <ThomasHero />
      </div>
      <SelectedWorks />
      <SuccessNumbers />
      <Partners />
      <Footer />
    </>
  )
}
