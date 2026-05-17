import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/works/pizza-hut-mockup.png'
import img2 from '../assets/works/novus-mockup.png'
import img3 from '../assets/works/swapeasy-mockup.png'
import img4 from '../assets/works/drpashu-mockup.png'
import img5 from '../assets/works/monvera.avif'
import img6 from '../assets/works/graphora.png'
import Footer from '../components/Footer'

const projects = [
  { title: 'Pizza Hut Malaysia', image: img1, tags: ['Foodtech', 'Ordering', 'Commerce'], slug: 'pizza-hut-malaysia' },
  { title: 'Novus Design System', image: img2, tags: ['Design System', 'Scalable UI', 'Infrastructure'], slug: 'novus-design-system', externalLink: 'https://www.figma.com/deck/MExPN6YiryGBbMiY3XFy5i/Novus-Design-System?node-id=1-47265' },
  { title: 'SwapEasy', image: img3, tags: ['B2B SaaS', 'Recommerce', 'Enterprise UX'], slug: 'swapeasy' },
  { title: 'Dr. Pashu', image: img4, tags: ['Healthcare', 'SaaS', 'Consultation Platform'], slug: 'dr-pashu' },
  // { title: 'Nexus Malls', image: img5, tags: ['E-commerce', 'RetailTech', 'Mobile Experience'] },
  // { title: 'Fynd Express', image: img6, tags: ['AI', 'Website Builder', 'Commerce'] },
]

function WorkCard({ title, image, tags, slug, externalLink }) {
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
    <div ref={ref} className="sw-card sw-animate">
      {content}
    </div>
  )
}

export default function Projects() {
  const headlineRef = useRef(null)
  const hrRef = useRef(null)
  const infoRef = useRef(null)
  const introRef = useRef(null)

  useEffect(() => {
    const elements = [
      { ref: headlineRef, delay: 0 },
      { ref: hrRef, delay: 200 },
      { ref: infoRef, delay: 400 },
      { ref: introRef, delay: 600 },
    ]
    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current.style.opacity = '1'
          ref.current.style.transform = 'translateY(0)'
        }, delay)
      }
    })
  }, [])

  return (
    <div className="page-with-bg">
      <section className="proj-section">
        <div className="proj-wrapper">
          <div className="proj-content">
            <div className="proj-top">
              <div ref={headlineRef} className="proj-headline animate-fade-in">
                <div className="hero-headline-text">Projects</div>
              </div>
              <div ref={hrRef} className="hero-hr-line animate-fade-in" />
              <div ref={infoRef} className="proj-info animate-fade-in">
                <div className="text-sm text-color-black-900">Crafting since 2020</div>
                <div className="text-sm text-color-black-900">Designing at scale today</div>
              </div>
              {/* <div ref={introRef} className="proj-intro animate-fade-in">
                <h3 className="heading-h3 home-hero">
                  <span className="blank-text projects">_________________</span>
                  [Explore a curated collection of my most impactful projects, showcasing creativity, strategy, and attention to detail]
                </h3>
              </div> */}
            </div>
            <div className="proj-bottom">
              <div className="sw-grid">
                {projects.map(p => <WorkCard key={p.title} {...p} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
