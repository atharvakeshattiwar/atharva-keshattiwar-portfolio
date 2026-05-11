import { useEffect, useRef } from 'react'
import logo1 from '../assets/partners/logo-1.svg'
import logo2 from '../assets/partners/logo-2.svg'
import logo3 from '../assets/partners/logo-3.svg'
import logo4 from '../assets/partners/logo-4.svg'
import logo5 from '../assets/partners/logo-5.svg'
import logo6 from '../assets/partners/logo-6.svg'
import logo7 from '../assets/partners/logo-7.svg'
import logo8 from '../assets/partners/logo-8.svg'
import logo9 from '../assets/partners/logo-9.svg'

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9]

export default function Partners() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )
    if (leftRef.current) observer.observe(leftRef.current)
    if (rightRef.current) observer.observe(rightRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-partners">
      <div className="partners-wrapper">
        <div className="partners-content">
          <div ref={leftRef} className="partners-left animate-fade-in">
            <div className="parters-hedline">
              <div className="section-headline-text">
                120+ Trusted Partners
              </div>
            </div>
            <div className="text-sm text-color-black-800">
              Over the years, we've had the privilege of working with more than 120 trusted partners across industries. Each collaboration has been built on mutual respect, shared vision, and a commitment to excellence.
            </div>
          </div>
          <div ref={rightRef} className="partners-right animate-fade-in">
            {logos.map((logo, i) => (
              <div key={i} className={`partners-logo-div _${i + 1}`}>
                <img src={logo} alt="" className="partners-logo" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
