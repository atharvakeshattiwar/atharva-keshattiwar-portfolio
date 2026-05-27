import { useRef, useCallback } from 'react'
import ImageTrail from '../components/ImageTrail'
import IntroText from '../components/IntroText'
import ThomasHero from '../components/ThomasHero'
import HeroVideo from '../components/HeroVideo'
import AutoCarousel from '../components/AutoCarousel'
import SelectedWorks from '../components/SelectedWorks'
import LatestProjects from '../components/LatestProjects'
import SuccessNumbers from '../components/SuccessNumbers'
import Partners from '../components/Partners'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import FooterDark from '../components/FooterDark'

export default function Home() {
  const trailRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    trailRef.current?.onMove(e.clientX, e.clientY)
  }, [])

  const handleMouseEnter = useCallback((e) => {
    trailRef.current?.onEnter(e.clientX, e.clientY)
  }, [])

  const handleMouseLeave = useCallback(() => {
    trailRef.current?.onLeave()
  }, [])

  return (
    <>
      <div
        className="hero-trail-area"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ImageTrail ref={trailRef} />
        <IntroText />
        <ThomasHero />
      </div>
      <AutoCarousel />
      {/* <HeroVideo /> */}
      <SelectedWorks />
      {/* <LatestProjects /> */}
      <SuccessNumbers />
      <Partners />
      {/* <Reviews /> */}
      <Footer />
    </>
  )
}
