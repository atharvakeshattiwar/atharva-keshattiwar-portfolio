import { useEffect, useRef } from 'react'
import portrait from '../assets/thomas-hero.png'

const stats = [
  { value: '5+', label: 'Years of Experience' },
  { value: '30+', label: 'Projects Completed' },
  { value: '98%', label: 'Satisfied Clients' },
  { value: '8+', label: 'Industries Served' },
]

export default function AboutHero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.ah-animate')
    if (!els) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = '1'
            e.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="ah-section" ref={sectionRef}>
      <div className="ah-wrapper">
        <div className="ah-content">
          <div className="ah-top">
            <div className="ah-headline ah-animate">
              <div className="ah-headline-text">About me</div>
            </div>
            <div className="ah-hr-line ah-animate"></div>
            <div className="ah-info ah-animate">
              <div className="ah-info-text">I am a Sr. Product Designer</div>
              <div className="ah-info-text">Currently brewing innovation at Fynd ☕</div>
            </div>
            {/* <div className="ah-intro ah-animate">
              <h3 className="ah-intro-heading">
                [ I'm Atharva Keshattiwar. From a love of visuals to a career in digital design, I've grown through hands-on projects crafting brands and interfaces ]
              </h3>
            </div> */}
          </div>

          {/* <div className="ah-bottom">
            <div className="ah-image-div ah-animate">
              <img
                src={portrait}
                alt="Atharva Keshattiwar"
                className="ah-image"
              />
            </div>
            <div className="ah-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="ah-stat ah-animate">
                  <div className="ah-stat-value">{stat.value}</div>
                  <div className="ah-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
