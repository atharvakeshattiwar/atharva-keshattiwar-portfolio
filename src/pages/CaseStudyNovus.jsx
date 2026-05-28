import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import nCover from '../assets/case-studies/novus/01-cover.png'
import nAnimation from '../assets/case-studies/novus/02-animation.gif'
import nDivergence from '../assets/case-studies/novus/03-divergence.png'
import nConvergence from '../assets/case-studies/novus/04-convergence.gif'
import nSolutionFigma from '../assets/case-studies/novus/solution-figma.png'
import nAdoption from '../assets/case-studies/novus/09-adoption.png'

const SECTIONS = [
  { id: 'n-background', label: 'Background' },
  { id: 'n-problem', label: 'Problem' },
  { id: 'n-solution', label: 'Solution' },
  { id: 'n-contribution', label: 'Contribution' },
  { id: 'n-swapeasy', label: 'SwapEasy' },
  { id: 'n-workflow', label: 'Workflow' },
  { id: 'n-documentation', label: 'Documentation' },
  { id: 'n-outcome', label: 'Outcome' },
  { id: 'n-reflection', label: 'Reflection' },
]

const TAGS = [
  { label: 'Shipped', filled: true },
  { label: '2022 – Present' },
  { label: 'Product Designer' },
  { label: 'Design Systems · SaaS' },
  { label: '20+ Products' },
]

const TLDR = [
  { category: 'Background', text: 'Fynd\'s multi-product ecosystem needed a unified design language across 20+ platforms backed by Reliance Jio.' },
  { category: 'Problem', text: 'Fragmented design systems, inconsistent brand identity, redundant code, and scattered standards across teams.' },
  { category: 'Approach', text: 'As part of the design team, built reusable components, scalable patterns, and comprehensive documentation.' },
  { category: 'Outcome', text: 'One design system powering 20+ products with unified experience, faster workflows, and stronger collaboration.' },
]

const STATS = [
  { value: '20', suffix: '+', label: 'Products powered by Novus' },
  { value: '1', suffix: '', label: 'Unified design system replacing fragmented approaches' },
  { value: '100', suffix: '%', label: 'Component documentation coverage' },
]

function useScrollReveal() {
  const ref = useRef(null)
  const revealed = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el || revealed.current) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealed.current) {
          revealed.current = true
          el.classList.add('csv2-visible')
          obs.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`csv2-reveal ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  )
}

function CountUp({ value, suffix = '' }) {
  const ref = useRef(null)
  const counted = useRef(false)
  const [display, setDisplay] = useState('0')
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const num = parseFloat(value)
          const isDecimal = value.includes('.')
          const duration = 2000
          const start = performance.now()
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = num * eased
            setDisplay(isDecimal ? current.toFixed(1) : Math.floor(current).toString())
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [value])
  return <span ref={ref}>{display}{suffix}</span>
}

function StickyNav({ activeSection }) {
  return (
    <nav className="csv2-nav">
      {SECTIONS.map(s => (
        <a key={s.id} href={`#${s.id}`} className={`csv2-nav-link ${activeSection === s.id ? 'csv2-nav-active' : ''}`}>
          {s.label}
        </a>
      ))}
    </nav>
  )
}

function PullQuote({ children }) {
  const ref = useScrollReveal()
  return <blockquote ref={ref} className="csv2-pullquote csv2-reveal">{children}</blockquote>
}

function InsightCard({ number, label, description }) {
  return (
    <div className="csv2-insight-card csv2-card-hover">
      {number && <div className="csv2-insight-number">{number}</div>}
      <div className="csv2-insight-label">{label}</div>
      {description && <p className="csv2-insight-desc">{description}</p>}
    </div>
  )
}

function ScrollImage({ src }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="csv2-img-block csv2-reveal csv2-img-reveal">
      <img src={src} alt="" className="csv2-img" />
    </div>
  )
}

export default function CaseStudyNovus() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    let timeout
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            clearTimeout(timeout)
            timeout = setTimeout(() => setActiveSection(entry.target.id), 100)
          }
        })
      },
      { rootMargin: '-30% 0px -50% 0px' }
    )
    SECTIONS.forEach(s => { const el = document.getElementById(s.id); if (el) observer.observe(el) })
    return () => { observer.disconnect(); clearTimeout(timeout) }
  }, [])

  return (
    <div className="csv2-page">
      {/* Hero */}
      <header className="csv2-hero">
        <div className="csv2-hero-inner">
          <Reveal><p className="csv2-label">Case study · Design Systems</p></Reveal>
          <h1 className="csv2-title section-headline-text">Building a unified design system for 20+ products.</h1>
          <Reveal delay={0.2}><p className="csv2-subtitle">As part of the Fynd design team, I helped build Novus, a scalable design system powering 20+ products across Fynd and Jio. From components and patterns to documentation and real-world adoption.</p></Reveal>
          <Reveal delay={0.3}>
            <div className="csv2-tags">
              {TAGS.map((t, i) => (
                <span key={i} className={`csv2-tag ${t.filled ? 'csv2-tag-filled' : ''}`}>{t.label}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </header>

      <div className="csv2-hero-img">
        <Reveal><img src={nCover} alt="Novus Design System" className="csv2-img" /></Reveal>
      </div>

      <div className="csv2-divider" />

      {/* TL;DR */}
      <section className="csv2-tldr">
        <div className="csv2-tldr-inner">
          <Reveal><p className="csv2-tldr-label">TL;DR</p></Reveal>
          <div className="csv2-tldr-grid">
            {TLDR.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="csv2-tldr-row">
                  <span className="csv2-tldr-cat">{item.category}</span>
                  <p className="csv2-tldr-text">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="csv2-divider" />

      {/* Stats - Sticky Notes */}
      <section className="csv2-stats-section">
        <Reveal><p className="csv2-section-label csv2-stats-eyebrow">Designed for scale</p></Reveal>
        <div className="csv2-sticky-grid">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="csv2-sticky csv2-sticky-yellow" style={{ transform: `rotate(${[-3, 2, -1.5][i]}deg)` }}>
                <span className="csv2-sticky-tag">{['Scale', 'Unity', 'Coverage'][i]}</span>
                <div className="csv2-sticky-number"><CountUp value={s.value} suffix={s.suffix} /></div>
                <p className="csv2-sticky-label">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="csv2-divider" />

      {/* Main content */}
      <div className="csv2-body">
        <StickyNav activeSection={activeSection} />

        <div className="csv2-content">

          {/* Background */}
          <section id="n-background" className="csv2-section">
            <Reveal><p className="csv2-section-label">Background</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">Fynd grew fast. The design didn't keep up.</h2></Reveal>
            <Reveal><p className="csv2-para">Fynd, backed by Reliance Jio, evolved from a fashion e-commerce platform into a <span className="highlight">multi-product enterprise ecosystem</span>, building large-scale SaaS, e-commerce, and AI-powered platforms for businesses and consumers.</p></Reveal>
            <Reveal><p className="csv2-para">To support this diverse ecosystem, we needed a unified design system that could empower 20+ products across Fynd and Jio, providing a consistent visual language, reusable components, and a robust foundation.</p></Reveal>

            <Reveal>
              <div className="csv2-insight-row">
                <InsightCard number="20+" label="Products" description="Across Fynd and Jio" />
                <InsightCard label="Backed by" description="Reliance Jio" />
                <InsightCard label="Scope" description="SaaS, E-commerce, AI" />
              </div>
            </Reveal>

            <PullQuote>One design system. Twenty products. Millions of users.</PullQuote>
            <ScrollImage src={nAnimation} />
          </section>

          {/* Problem */}
          <section id="n-problem" className="csv2-section">
            <Reveal><p className="csv2-section-label">The Problem</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">Every team designed their own version of Fynd.</h2></Reveal>

            <Reveal className="csv2-ba">
              <div className="csv2-ba-col csv2-ba-before csv2-card-hover">
                <span className="csv2-ba-tag">Before Novus</span>
                <p className="csv2-ba-text">Multiple design systems across teams. Each product had its own interpretation of the design language, diluting the unified brand experience.</p>
              </div>
              <div className="csv2-ba-col csv2-ba-after csv2-card-hover">
                <span className="csv2-ba-tag csv2-ba-tag-after">The cost</span>
                <p className="csv2-ba-text">Redundant code, scattered design efforts, and lack of shared standards slowed teams down and wasted resources across the organization.</p>
              </div>
            </Reveal>

            <Reveal><p className="csv2-para">The <span className="highlight">fragmented brand identity</span> wasn't just a design problem. It was an operational bottleneck affecting velocity across every product team.</p></Reveal>
            <PullQuote>When every product looks different, the brand loses its voice.</PullQuote>
            <ScrollImage src={nConvergence} />
          </section>

          {/* Solution */}
          <section id="n-solution" className="csv2-section">
            <Reveal><p className="csv2-section-label">Solution</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">One system to replace them all.</h2></Reveal>
            <Reveal><p className="csv2-para">We replaced fragmented approaches, including the old Jio Design System, with <span className="highlight">Novus</span>, a single cohesive foundation. Modern, scalable, and composable, allowing us to maintain a uniform design language while adapting to the needs of different platforms.</p></Reveal>

            <Reveal>
              <div className="csv2-steps">
                {['Unified visual language', 'Reusable component library', 'Shared design tokens', 'Scalable layout systems', 'Cross-platform consistency', 'Developer-friendly documentation'].map((text, i) => (
                  <div key={i} className="csv2-step csv2-card-hover">
                    <div className="csv2-step-num">0{i + 1}</div>
                    <div className="csv2-step-text">{text}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <PullQuote>Novus didn't just unify visuals. It unified how teams think about product design.</PullQuote>
            <ScrollImage src={nSolutionFigma} />
          </section>

          {/* Contribution */}
          <section id="n-contribution" className="csv2-section">
            <Reveal><p className="csv2-section-label">My Contribution</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">I didn't just use the system. I helped build it.</h2></Reveal>
            <Reveal><p className="csv2-para">As part of the design team, I actively <span className="highlight">designed and tested components</span> directly in Fynd products, ensuring real-world usability and consistency across different use cases.</p></Reveal>
            <Reveal><p className="csv2-para">Beyond individual components, I created reusable patterns that help teams build faster and more cohesively, and developed detailed documentation to guide adoption and maintain quality.</p></Reveal>

            <Reveal>
              <div className="csv2-metric-strip">
                <div className="csv2-metric"><span className="csv2-metric-label">Components</span><span className="csv2-metric-value">Designed & tested in production</span></div>
                <div className="csv2-metric"><span className="csv2-metric-label">Patterns</span><span className="csv2-metric-value">Reusable across products</span></div>
                <div className="csv2-metric"><span className="csv2-metric-label">Docs</span><span className="csv2-metric-value">Published on novus.fynd.com</span></div>
              </div>
            </Reveal>

            <PullQuote>The best design systems are built inside products, not beside them.</PullQuote>
          </section>

          {/* SwapEasy */}
          <section id="n-swapeasy" className="csv2-section">
            <Reveal><p className="csv2-section-label">SwapEasy Redesign</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">Proving the system by rebuilding an entire product.</h2></Reveal>
            <Reveal><p className="csv2-para">While working on SwapEasy, we saw an opportunity to showcase the true potential of Novus. Using the design system, we <span className="highlight">revamped the entire platform</span>, ensuring a more consistent, intuitive, and scalable design language.</p></Reveal>
            <Reveal><p className="csv2-para">We focused on solving key UX challenges, simplifying workflows, and making interactions smoother, demonstrating how a unified system can strengthen both product vision and user trust.</p></Reveal>
            <PullQuote>A design system proves its value when it makes an entire product better.</PullQuote>
          </section>

          {/* Workflow */}
          <section id="n-workflow" className="csv2-section">
            <Reveal><p className="csv2-section-label">Workflow Pattern</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">One pattern. Five products. Zero inconsistency.</h2></Reveal>
            <Reveal><p className="csv2-para">Multiple Fynd products needed a robust workflow builder and rule engine. I was assigned to <span className="highlight">craft an end-to-end pattern</span> for this need, studying industry leaders like Zapier, Retool, Tray.io, and Slack.</p></Reveal>

            <Reveal>
              <div className="csv2-callout-strip">
                <div className="csv2-callout-item csv2-card-hover"><span className="csv2-callout-icon">⚡</span><span>OMS</span></div>
                <div className="csv2-callout-item csv2-card-hover"><span className="csv2-callout-icon">📦</span><span>TMS</span></div>
                <div className="csv2-callout-item csv2-card-hover"><span className="csv2-callout-icon">📋</span><span>Catalog Cloud</span></div>
                <div className="csv2-callout-item csv2-card-hover"><span className="csv2-callout-icon">💬</span><span>Communications</span></div>
                <div className="csv2-callout-item csv2-card-hover"><span className="csv2-callout-icon">🔧</span><span>Boltic</span></div>
              </div>
            </Reveal>

            <Reveal><p className="csv2-para">After thorough research, benchmarking, and stakeholder reviews, we finalized a comprehensive pattern that could be adopted across products seamlessly.</p></Reveal>
            <PullQuote>Scalable patterns turn individual product decisions into ecosystem standards.</PullQuote>
            <ScrollImage src={nAdoption} />
          </section>

          {/* Documentation */}
          <section id="n-documentation" className="csv2-section">
            <Reveal><p className="csv2-section-label">Documentation</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">If it's not documented, it doesn't exist.</h2></Reveal>
            <Reveal><p className="csv2-para">I contributed to documenting multiple components to ensure clarity and ease of use for both designers and developers. The goal was to create <span className="highlight">consistent, accessible documentation</span> published on our live design system site as a single source of truth.</p></Reveal>
            <Reveal><p className="csv2-para">I closely worked with lead designers to align on standards, structure, and tone, helping us move fast while maintaining consistency and quality.</p></Reveal>

            <Reveal>
              <div className="csv2-insight-row">
                <InsightCard label="novus.fynd.com" description="Live documentation site" />
                <InsightCard label="Storybook" description="Component playground" />
                <InsightCard label="Figma Community" description="Public design file" />
              </div>
            </Reveal>

            <PullQuote>Documentation is the bridge between design intent and engineering reality.</PullQuote>
          </section>

          {/* Outcome */}
          <section id="n-outcome" className="csv2-section">
            <Reveal><p className="csv2-section-label">Outcome</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">Twenty products. One design language. Zero fragmentation.</h2></Reveal>
            <Reveal><p className="csv2-para">Users now experience a <span className="highlight">seamless and unified experience</span> across all Fynd products, thanks to shared components and design principles. Designers and developers work faster using reusable patterns, reducing duplication and time-to-delivery.</p></Reveal>

            <Reveal>
              <div className="csv2-outcome-grid">
                <div className="csv2-outcome-item csv2-card-hover"><p className="csv2-outcome-stat">20+ products</p><p className="csv2-outcome-desc">Unified under one design language.</p></div>
                <div className="csv2-outcome-item csv2-card-hover"><p className="csv2-outcome-stat">1 system</p><p className="csv2-outcome-desc">Replaced all fragmented approaches.</p></div>
                <div className="csv2-outcome-item csv2-card-hover"><p className="csv2-outcome-stat">Adopted</p><p className="csv2-outcome-desc">Across Fynd and Jio platforms.</p></div>
              </div>
            </Reveal>

            <PullQuote>Novus stopped being a design system project. It became the way Fynd builds products.</PullQuote>
            <div className="csv2-img-block">
              <Reveal>
                <video controls className="csv2-local-video" preload="metadata">
                  <source src="/novus-video.mp4" type="video/mp4" />
                </video>
              </Reveal>
            </div>
          </section>

          {/* Reflection */}
          <section id="n-reflection" className="csv2-section">
            <Reveal><p className="csv2-section-label">Reflection</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">Design systems are culture, not just components.</h2></Reveal>
            <Reveal><p className="csv2-para">Working on Novus taught me that a design system isn't a library of components. It's a <span className="highlight">shared agreement on how to build products</span>. The hardest part wasn't designing components. It was getting 20+ teams to think the same way.</p></Reveal>
            <Reveal><p className="csv2-para">Being part of a team that built something used by thousands of designers and engineers across Fynd and Jio reinforced that the best systems are built through trust, iteration, and real-world validation, not perfection.</p></Reveal>
            <PullQuote>The best design system is the one teams actually want to use.</PullQuote>
          </section>

        </div>
      </div>

      <div className="csv2-divider" />
      <Reveal>
        <section className="csv2-next">
          <p className="csv2-next-label">Next Project</p>
          <h3 className="csv2-next-title">SwapEasy</h3>
          <div className="primary-button-block-black" style={{ cursor: 'default', opacity: 0.6 }}>
            <div className="primary-button-wrapper-black">
              <div className="primary-button-text-black">Coming Soon</div>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  )
}
