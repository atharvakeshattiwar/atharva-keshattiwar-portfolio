import { useEffect, useRef } from 'react'
import img1 from '../assets/works/pizza-hut-mockup.png'
import img2 from '../assets/works/novus-mockup.png'
import img3 from '../assets/works/swapeasy-mockup.png'
import img4 from '../assets/works/drpashu-mockup.png'
import img5 from '../assets/works/monvera.avif'
import img6 from '../assets/works/graphora.png'

const projects = [
  { title: 'Pizza Hut Malaysia', image: img1, tags: ['Foodtech', 'Ordering', 'Commerce'], status: 'soon' },
  { title: 'Novus Design System', image: img2, tags: ['Design System', 'Scalable UI', 'Infrastructure'], externalLink: 'https://www.figma.com/deck/MExPN6YiryGBbMiY3XFy5i/Novus-Design-System?node-id=1-47265', status: 'live' },
  { title: 'SwapEasy', image: img3, tags: ['B2B SaaS', 'Recommerce', 'Enterprise UX'], status: 'soon' },
  { title: 'Dr. Pashu', image: img4, tags: ['Healthcare', 'SaaS', 'Consultation Platform'], status: 'soon' },
]

function WorkCard({ title, image, tags, externalLink, status }) {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const content = (
    <>
      <div className="sw-card-img">
        <img src={image} alt={title} loading="lazy" />
        {status && (
          <span className={`sw-status-bubble sw-status-${status}`}>
            {status === 'live' ? 'Live' : 'Coming Soon'}
          </span>
        )}
      </div>
      <div className="sw-card-info">
        <div className="sw-card-title">{title}</div>
        <div className="sw-card-tags">
          {tags.map((tag, i) => (
            <span key={tag} className="sw-tag-group">
              {i > 0 && <span className="sw-tag-divider" />}
              <span className="sw-tag">{tag}</span>
            </span>
          ))}
        </div>
      </div>
    </>
  )

  if (externalLink) {
    return (
      <a ref={ref} href={externalLink} target="_blank" rel="noopener noreferrer" className="sw-card sw-animate">
        {content}
      </a>
    )
  }

  return (
    <div ref={ref} className="sw-card sw-card-nolink sw-animate">
      {content}
    </div>
  )
}

export default function SelectedWorks() {
  const h1 = useRef(null)
  const h2 = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' } }) },
      { threshold: 0.1 }
    )
    if (h1.current) obs.observe(h1.current)
    if (h2.current) obs.observe(h2.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="sw-section" id="works">
      <div className="sw-wrapper">
        <div className="sw-top">
          <div ref={h1} className="sw-headline sw-animate">Selected Works</div>
          <div ref={h2} className="sw-subtext sw-animate">
            A curated selection of products and experiences crafted across AI, SaaS, and commerce, focused on solving real user problems through thoughtful design and scalable systems.
          </div>
        </div>
        <div className="sw-grid">
          {projects.map(p => <WorkCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  )
}
