import { useEffect, useRef } from 'react'

const stats = [
  { number: '4+', label: 'Years of Experience', desc: 'Designing across SaaS, AI, and commerce products with a focus on building intuitive and scalable digital experiences.' },
  { number: '20+', label: 'Projects Delivered', desc: 'Delivered product solutions across B2B platforms, marketplaces, and consumer applications with real-world usability and impact.' },
  { number: '5+', label: 'Domains Explored', desc: 'Worked across AI, SaaS, e-commerce, healthtech, and retailtech with adaptable design thinking across industries and user needs.' },
  { number: 'End-to-End', label: 'Product Ownership', desc: 'From problem discovery to shipped product, working across design, AI workflows, and frontend implementation.' },
]

function StatCard({ number, label, desc }) {
  return (
    <div className="sin-card">
      <div className="sin-number">{number}</div>
      <div>
        <div className="sin-label">{label}</div>
        <p className="sin-desc">{desc}</p>
      </div>
    </div>
  )
}

export default function SuccessNumbers() {
  const headlineRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
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
    if (headlineRef.current) obs.observe(headlineRef.current)
    if (gridRef.current) obs.observe(gridRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="sin-section">
      <div className="sin-wrapper">
        <div ref={headlineRef} className="sin-heading animate-fade-in">
          My Impact in Numbers
        </div>
        <div ref={gridRef} className="sin-grid animate-fade-in">
          {/* Row 1: Card, Card, Video (2col) */}
          <StatCard {...stats[0]} />
          <StatCard {...stats[1]} />
          <div className="sin-video-block">
            <video autoPlay loop muted playsInline className="sin-video">
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Row 2: Connect (2col), Card, Card */}
          <div className="sin-connect-block">
            <div>
              <div className="sin-connect-title">
                Let's Build Meaningful<br />Experiences.
              </div>
              <p className="sin-connect-desc">
                Open to collaborations, product challenges, and building impactful digital experiences using design, AI, and vibe coding.
              </p>
            </div>
            <a href="mailto:atharvakeshattiwar@gmail.com" target="_blank" rel="noopener noreferrer" className="sin-connect-btn">
              <span className="sin-connect-btn-text">Contact Now</span>
              <span className="sin-connect-btn-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.7813 7.33312L7.20534 3.75712L8.14801 2.81445L13.3333 7.99979L8.14801 13.1851L7.20534 12.2425L10.7813 8.66645H2.66663V7.33312H10.7813Z" fill="currentColor" />
                </svg>
              </span>
            </a>
          </div>
          <StatCard {...stats[2]} />
          <StatCard {...stats[3]} />
        </div>
      </div>
    </section>
  )
}
