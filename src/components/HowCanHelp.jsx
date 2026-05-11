import { useEffect, useRef } from 'react'

const services = [
  {
    num: '[1]',
    title: 'Branding Identity',
    tags: ['Logo', 'Strategy', 'Communication'],
    desc: 'We craft branding strategies that build trust, spark connection, and set you apart in a crowded market.',
  },
  {
    num: '[2]',
    title: 'Product Design',
    tags: ['Website', 'App', 'Design System'],
    desc: 'From concept to execution, our focus is on creating user-friendly and innovative designs that solve real problems.',
    offset: true,
  },
  {
    num: '[3]',
    title: 'Website Development',
    tags: ['Webflow', 'Framer', 'Wordpress'],
    desc: 'We build fast, scalable websites tailored to your business goals. From clean code to seamless performance.',
  },
  {
    num: '[4]',
    title: 'Digital Marketing',
    tags: ['Research', 'Analysis', 'Campaign'],
    desc: 'We craft data-driven marketing strategies that boost visibility, attract the right audience, and drive real results.',
    offset: true,
  },
]

function Dot() {
  return <span className="hch-dot" />
}

function ServiceCard({ num, title, tags, desc, offset }) {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1'
          e.target.style.transform = 'translateY(0)'
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`hch-card animate-fade-in ${offset ? 'hch-card-offset' : ''}`}>
      <div className="hch-num">{num}</div>
      <div className="hch-title">{title}</div>
      <div className="hch-tags">
        {tags.map((tag, i) => (
          <span key={tag} className="hch-tag-item">
            {i > 0 && <Dot />}
            <span>{tag}</span>
          </span>
        ))}
      </div>
      <p className="hch-desc">{desc}</p>
    </div>
  )
}

export default function HowCanHelp() {
  const headingRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1'
          e.target.style.transform = 'translateY(0)'
        }
      },
      { threshold: 0.1 }
    )
    if (headingRef.current) obs.observe(headingRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="hch-section">
      <div className="hch-wrapper">
        <div className="hch-content">
          <div className="hch-left">
            <div ref={headingRef} className="hch-heading animate-fade-in">
              Here's how<br />I can help you
            </div>
            <div className="hch-count">04</div>
          </div>
          <div className="hch-right">
            {services.map((s) => (
              <ServiceCard key={s.num} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
