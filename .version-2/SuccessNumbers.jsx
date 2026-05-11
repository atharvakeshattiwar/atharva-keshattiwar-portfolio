import { useEffect, useRef } from 'react'

const stats = [
  { number: '97%', label: 'Project Excellence', desc: 'My commitment to Project drives every step of my process. With a 98% success rate.' },
  { number: '16+', label: 'Collective Experience', desc: 'My collective experience reflects years of dedication, innovation, and collaboration.' },
  { number: '90+', label: 'Clients World-Wide', desc: 'I am proud to collaborate with clients across the globe, building meaningful partnerships across borders.' },
  { number: '99%', label: 'Client Satisfaction', desc: 'Client satisfaction is at the heart of everything I do. I focus on delivering beyond expectations.' },
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
          My success in numbers
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
                Connect with me to<br />learn more.
              </div>
              <p className="sin-connect-desc">
                I'm always open to new collaborations, creative discussions, and exciting challenges. Every great project begins with a simple conversation so let's start ours.
              </p>
            </div>
            <a href="#" className="sin-connect-btn">
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
