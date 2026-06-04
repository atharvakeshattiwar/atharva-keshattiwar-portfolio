import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import img1 from '../assets/works/designova.avif'
import img2 from '../assets/works/brandflux.avif'
import img3 from '../assets/works/project-placeholder.avif'
import img4 from '../assets/works/webion.avif'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    name: 'Pizza Hut Malaysia',
    tags: ['FoodTech', 'Ordering Experience'],
    image: img1,
    desc: 'Improving ordering speed and reducing friction in key user journeys across the platform.',
  },
  {
    name: 'Novus Design System',
    tags: ['Design System', 'Scalable UX'],
    image: img2,
    desc: 'Enabling consistency and faster product development across multiple product teams.',
  },
  {
    name: 'SwapEasy',
    tags: ['B2B SaaS', 'Enterprise UX'],
    image: img3,
    desc: 'Simplifying complex enterprise device exchange workflows into intuitive systems.',
  },
  {
    name: 'Dr. Pashu',
    tags: ['HealthTech', 'Consultation'],
    image: img4,
    desc: 'Improving access to veterinary care through intuitive digital experiences.',
  },
]

function ProjectRow({ name, tags, image, desc, index }) {
  const rowRef = useRef(null)
  const imgRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rowRef.current,
          start: 'top 85%',
          end: 'top 40%',
          toggleActions: 'play none none none',
        },
      })

      tl.fromTo(leftRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }
      )
      .fromTo(imgRef.current,
        { opacity: 0, scale: 0.92, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        0.15
      )
      .fromTo(rightRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' },
        0.3
      )
    }, rowRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={rowRef} className="lp-row">
      <div ref={leftRef} className="lp-left" style={{ opacity: 0 }}>
        <div className="lp-name">{name}</div>
        <div className="lp-tags">
          {tags.map(t => <div key={t} className="lp-tag">{t}</div>)}
        </div>
      </div>
      <div className="lp-image-wrap">
        <img ref={imgRef} src={image} alt={name} className="lp-image" loading="lazy" style={{ opacity: 0 }} />
      </div>
      <div ref={rightRef} className="lp-right" style={{ opacity: 0 }}>
        <p className="lp-desc">{desc}</p>
        <a href="#" className="lp-view-btn">
          <span>View Project</span>
          <span className="lp-arrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.7813 7.33312L7.20534 3.75712L8.14801 2.81445L13.3333 7.99979L8.14801 13.1851L7.20534 12.2425L10.7813 8.66645H2.66663V7.33312H10.7813Z" fill="currentColor" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  )
}

export default function LatestProjects() {
  const headRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: {
            trigger: headRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, headRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="lp-section">
      <div className="lp-wrapper">
        <div ref={headRef} className="lp-heading" style={{ opacity: 0 }}>
          <div className="section-headline-text text-align-center">Latest Projects</div>
        </div>
        <div className="lp-list">
          {projects.map((p, i) => <ProjectRow key={p.name} {...p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
