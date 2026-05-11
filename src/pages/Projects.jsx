import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/works/designova.avif'
import img2 from '../assets/works/brandflux.avif'
import img3 from '../assets/works/creativox.avif'
import img4 from '../assets/works/webion.avif'
import img5 from '../assets/works/monvera.avif'
import img6 from '../assets/works/graphora.png'
import Footer from '../components/Footer'

const projects = [
  { title: 'Pizza Hut Malaysia', image: img1, tags: ['FoodTech', 'Ordering Experience', 'E-commerce'], slug: 'pizza-hut-malaysia' },
  { title: 'Novus Design System', image: img2, tags: ['Design System', 'Scalable UX', 'Infrastructure'], slug: 'novus-design-system' },
  { title: 'SwapEasy', image: img3, tags: ['B2B SaaS', 'Recommerce', 'Enterprise UX'], slug: 'swapeasy' },
  { title: 'Dr. Pashu', image: img4, tags: ['HealthTech', 'SaaS', 'Consultation Platform'], slug: 'dr-pashu' },
  // { title: 'Nexus Malls', image: img5, tags: ['E-commerce', 'RetailTech', 'Mobile Experience'] },
  // { title: 'Fynd Express', image: img6, tags: ['AI', 'Website Builder', 'Commerce'] },
]

function WorkCard({ title, image, tags, slug }) {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <Link ref={ref} to={`/project/${slug}`} className="sw-card sw-animate">
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
    </Link>
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
    <>
      <section className="proj-section">
        <div className="proj-wrapper">
          <div className="proj-content">
            <div className="proj-top">
              <div ref={headlineRef} className="proj-headline animate-fade-in">
                <div className="hero-headline-text">Projects</div>
              </div>
              <div ref={hrRef} className="hero-hr-line animate-fade-in" />
              <div ref={infoRef} className="proj-info animate-fade-in">
                <div className="text-sm text-color-black-900">Crafting Since 2020</div>
                <div className="text-sm text-color-black-900">Designing at Scale Today</div>
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
    </>
  )
}
