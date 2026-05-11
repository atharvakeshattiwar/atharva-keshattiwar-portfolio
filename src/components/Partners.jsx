import { useEffect, useRef } from 'react'
import fynd from '../assets/partners/logo-7.png'
import pizzahut from '../assets/partners/logo-4.png'
import swapeasy from '../assets/partners/logo-3.png'
import drpashu from '../assets/partners/logo-1.avif'
import abp from '../assets/partners/logo-2.png'
import nexus from '../assets/partners/logo-5.avif'
import shristi from '../assets/partners/logo-6.webp'
import logo8 from '../assets/partners/logo-8.svg'
import logo9 from '../assets/partners/logo-9.svg'

const logos = [fynd, pizzahut, swapeasy, shristi, nexus, abp]

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
                20+ Products & Platforms
              </div>
            </div>
            <div className="text-sm text-color-black-800">
              Over the years, I've contributed to scalable experiences across SaaS, E-commerce, CRM, AI, and Omnichannel ecosystems. From building design systems to crafting customer-facing journeys, my work focuses on creating impactful, scalable, and user-centric digital products.
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
