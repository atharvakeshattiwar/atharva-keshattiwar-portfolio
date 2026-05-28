import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import phHero from '../assets/carousel-ref/Landscape_10.png'
import phGlance from '../assets/case-studies/pizza-hut/02-at-a-glance.png'
import phProblem from '../assets/case-studies/pizza-hut/03-problem-funnel.png'
import phPitch from '../assets/case-studies/pizza-hut/04-pitch-screens.png'
import phOptimised from '../assets/case-studies/pizza-hut/05-optimised-for.png'
import phTargets from '../assets/case-studies/pizza-hut/06-targets.png'
import phBuilt1 from '../assets/case-studies/pizza-hut/07-what-we-built-1.png'
import phBuilt2 from '../assets/case-studies/pizza-hut/08-what-we-built-2.png'
import phBuilt3 from '../assets/case-studies/pizza-hut/09-what-we-built-3.png'
import phExecution from '../assets/case-studies/pizza-hut/10-execution.png'
import phShipped from '../assets/case-studies/pizza-hut/11-shipped.png'
import phNext from '../assets/case-studies/pizza-hut/12-whats-next.png'
import phLearnings from '../assets/case-studies/pizza-hut/13-learnings.png'
import landscape11 from '../assets/carousel-ref/Landscape_11.png'

const SECTIONS = [
  { id: 'background', label: 'Background' },
  { id: 'problem', label: 'Problem' },
  { id: 'discovery', label: 'Discovery' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'system', label: 'System' },
  { id: 'ecosystem', label: 'Ecosystem' },
  { id: 'outcome', label: 'Outcome' },
  { id: 'reflection', label: 'Reflection' },
]

const TAGS = [
  { label: 'Shipped', filled: true },
  { label: '2024 – 2025' },
  { label: 'Product Designer' },
  { label: 'Omnichannel · QSR' },
  { label: 'Mobile · Web · SSD Device' },
]

const TLDR = [
  { category: 'Background', text: 'A large-scale QSR ordering ecosystem serving ~4.9M customers across mobile, web, SSD device, and tablet touchpoints.' },
  { category: 'Problem', text: 'Fragmented platform experiences with inconsistent navigation, ordering flows, and interaction logic across touchpoints.' },
  { category: 'Approach', text: 'As part of the PHM design team, led mobile design decisions while maintaining ecosystem-wide consistency.' },
  { category: 'Outcome', text: 'A connected, scalable ordering ecosystem with unified interaction patterns across all digital platforms.' },
]

const STATS = [
  { value: '4.9', suffix: 'M', label: 'Customers served across the ecosystem' },
  { value: '4', suffix: '', label: 'Platforms unified across the ordering journey' },
  { value: '1', suffix: '', label: 'Scalable omnichannel experience system' },
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

function BeforeAfter({ before, after }) {
  return (
    <Reveal className="csv2-ba">
      <div className="csv2-ba-col csv2-ba-before">
        <span className="csv2-ba-tag">Before</span>
        <p className="csv2-ba-text">{before}</p>
      </div>
      <div className="csv2-ba-col csv2-ba-after">
        <span className="csv2-ba-tag csv2-ba-tag-after">After</span>
        <p className="csv2-ba-text">{after}</p>
      </div>
    </Reveal>
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

function ScrollImage({ src }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="csv2-img-block csv2-reveal csv2-img-reveal">
      <img src={src} alt="" className="csv2-img" />
    </div>
  )
}

export default function CaseStudyV2() {
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
          <Reveal><p className="csv2-label">Case study · Omnichannel Commerce</p></Reveal>
          <h1 className="csv2-title section-headline-text">Redesigning Pizza Hut Malaysia's omnichannel ordering ecosystem.</h1>
          <Reveal delay={0.2}><p className="csv2-subtitle">As part of the PHM design team, I helped redesign Pizza Hut Malaysia's digital ordering ecosystem across mobile, web, tablet, and SSD device experiences, leading mobile design decisions while working across the broader omnichannel system.</p></Reveal>
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
        <Reveal><img src={phHero} alt="" className="csv2-img" /></Reveal>
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
          <Reveal delay={0}>
            <div className="csv2-sticky csv2-sticky-yellow" style={{ transform: 'rotate(-3deg)' }}>
              <span className="csv2-sticky-tag">Impact</span>
              <div className="csv2-sticky-number"><CountUp value="4.9" suffix="M" /></div>
              <p className="csv2-sticky-label">Customers served across the ecosystem</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="csv2-sticky csv2-sticky-green" style={{ transform: 'rotate(2deg)' }}>
              <span className="csv2-sticky-tag">Scale</span>
              <div className="csv2-sticky-number"><CountUp value="4" suffix="" /></div>
              <p className="csv2-sticky-label">Platforms unified across the ordering journey</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="csv2-sticky csv2-sticky-blue" style={{ transform: 'rotate(-1.5deg)' }}>
              <span className="csv2-sticky-tag">System</span>
              <div className="csv2-sticky-number"><CountUp value="1" suffix="" /></div>
              <p className="csv2-sticky-label">Scalable omnichannel experience system</p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="csv2-divider" />

      {/* Main content */}
      <div className="csv2-body">
        <StickyNav activeSection={activeSection} />

        <div className="csv2-content">

          {/* Background */}
          <section id="background" className="csv2-section">
            <Reveal><p className="csv2-section-label">Background</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">Customers didn't think in platforms. They thought in journeys.</h2></Reveal>
            <Reveal delay={0.1}><p className="csv2-para">Pizza Hut Malaysia's ordering ecosystem had grown across mobile, web, SSD device, and tablet over time, with each platform solving immediate business needs independently. But the broader ecosystem lacked a <span className="highlight">shared experience system</span>, and customers felt the inconsistency every time they switched devices.</p></Reveal>

            <Reveal delay={0.15}>
              <div className="csv2-insight-row">
                <InsightCard number="4" label="Platforms" description="Mobile, Web, SSD Device, Tablet" />
                <InsightCard number="4.9M" label="Customers" description="Across the digital ecosystem" />
                <InsightCard number="0" label="Shared patterns" description="No unified experience system" />
              </div>
            </Reveal>

            <Reveal><p className="csv2-para">The opportunity wasn't to redesign individual interfaces. It was to create one connected ordering journey that could scale across every platform while feeling familiar at every touchpoint.</p></Reveal>
            <PullQuote>Customers didn't care which platform they were on. They cared that the experience worked.</PullQuote>
            <div className="csv2-img-block">
              <Reveal>
                <video controls className="csv2-local-video" preload="metadata">
                  <source src="/phm-e2e-journey.mp4" type="video/mp4" />
                </video>
              </Reveal>
            </div>
          </section>

          {/* Problem */}
          <section id="problem" className="csv2-section">
            <Reveal><p className="csv2-section-label">The Problem</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">The cracks were small, but they were everywhere.</h2></Reveal>

            <BeforeAfter
              before="Four platforms, each with its own navigation logic, interaction patterns, and ordering flows, built independently and maintained separately."
              after="Customers moved between devices expecting continuity, but experienced friction, confusion, and broken familiarity."
            />

            <Reveal><p className="csv2-para">This wasn't a visual design problem. It was an <span className="highlight">ecosystem architecture problem</span>: creating scalable experience logic that could unify platforms without breaking what already worked on each one.</p></Reveal>
            <PullQuote>The challenge wasn't redesigning screens. It was creating familiarity across every touchpoint.</PullQuote>
            <ScrollImage src={phProblem} />
          </section>

          {/* Discovery */}
          <section id="discovery" className="csv2-section">
            <Reveal><p className="csv2-section-label">Discovery</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">Understanding how the ecosystem actually worked, not just how it looked.</h2></Reveal>
            <Reveal><p className="csv2-para">As part of the PHM design team, we mapped how customers actually moved through the ecosystem, not how we assumed they did. Understanding operational workflows, store-level constraints, and real ordering patterns revealed where fragmentation created the most friction.</p></Reveal>

            <Reveal>
              <div className="csv2-callout-strip">
                <div className="csv2-callout-item csv2-card-hover"><span className="csv2-callout-icon">🔍</span><span>Ordering behavior mapping</span></div>
                <div className="csv2-callout-item csv2-card-hover"><span className="csv2-callout-icon">🏪</span><span>Store operations audit</span></div>
                <div className="csv2-callout-item csv2-card-hover"><span className="csv2-callout-icon">🔗</span><span>Cross-platform gap analysis</span></div>
              </div>
            </Reveal>

            <Reveal><p className="csv2-para">Working within a 3-designer team, each owning a platform perspective, allowed us to continuously challenge assumptions and influence the broader ecosystem together.</p></Reveal>
            <PullQuote>The best ecosystem decisions came from understanding what happened behind the screens, not just on them.</PullQuote>
            <ScrollImage src={phPitch} />
            <div className="csv2-img-block">
              <Reveal>
                <div className="csv2-video-wrap">
                  <iframe src="https://embed.figma.com/board/adLyswmnW2Qjv81zoCwAWz/Pizza-Hut-Presentation?node-id=0-1&embed-host=share" title="Figma prototype" allowFullScreen className="csv2-video" />
                </div>
              </Reveal>
            </div>
          </section>

          {/* Strategy */}
          <section id="strategy" className="csv2-section">
            <Reveal><p className="csv2-section-label">Strategy</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">Align the system, not just the screens.</h2></Reveal>
            <Reveal><p className="csv2-para">The approach wasn't about making screens look the same. It was about making the <span className="highlight">ecosystem behave the same</span>. Shared interaction logic, unified navigation patterns, and consistent ordering flows across every touchpoint.</p></Reveal>

            <Reveal>
              <div className="csv2-steps">
                {['Unified ordering journeys', 'Clearer navigation systems', 'Consistent interaction logic', 'Scalable component patterns', 'Reduced interaction friction', 'Cross-platform behavioral parity'].map((text, i) => (
                  <div key={i} className="csv2-step csv2-card-hover">
                    <div className="csv2-step-num">0{i + 1}</div>
                    <div className="csv2-step-text">{text}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <PullQuote>We didn't design screens. We designed ecosystem behavior.</PullQuote>
            <ScrollImage src={phOptimised} />
          </section>

          {/* Mobile */}
          <section id="mobile" className="csv2-section">
            <Reveal><p className="csv2-section-label">Mobile</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">Mobile became the behavioral foundation of the ecosystem.</h2></Reveal>
            <Reveal><p className="csv2-para">Within the PHM design team, I <span className="highlight">owned mobile experience decisions</span>, from interaction patterns and ordering flows to navigation systems and visual hierarchy. Mobile was where most customers started their journey, and every decision here rippled across the ecosystem.</p></Reveal>

            <Reveal>
              <div className="csv2-metric-strip">
                <div className="csv2-metric"><span className="csv2-metric-label">Ownership</span><span className="csv2-metric-value">Mobile UX decisions</span></div>
                <div className="csv2-metric"><span className="csv2-metric-label">Method</span><span className="csv2-metric-value">Ecosystem-aware design</span></div>
                <div className="csv2-metric"><span className="csv2-metric-label">Balance</span><span className="csv2-metric-value">Speed × Scalability</span></div>
              </div>
            </Reveal>

            <Reveal><p className="csv2-para">Every mobile interaction was designed with the broader ecosystem in mind, working closely with the web, SSD device, and tablet teams to ensure behavioral consistency across platforms.</p></Reveal>
            <ScrollImage src={landscape11} />
          </section>

          {/* System */}
          <section id="system" className="csv2-section">
            <Reveal><p className="csv2-section-label">System</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">Reusable patterns. Unified behaviors. One system.</h2></Reveal>
            <Reveal><p className="csv2-para">Scaling consistency across four platforms required more than shared colors and typography. It required <span className="highlight">shared behavior</span>: unified interaction logic, predictable navigation, and components that worked the same everywhere.</p></Reveal>

            <Reveal>
              <div className="csv2-ba">
                <div className="csv2-ba-col csv2-ba-before csv2-card-hover">
                  <span className="csv2-ba-tag">Surface level</span>
                  <p className="csv2-ba-text">Consistent colors, typography, spacing, and layout grids across platforms.</p>
                </div>
                <div className="csv2-ba-col csv2-ba-after csv2-card-hover">
                  <span className="csv2-ba-tag csv2-ba-tag-after">System level</span>
                  <p className="csv2-ba-text">Unified interaction logic, navigation behavior, feedback patterns, and state management.</p>
                </div>
              </div>
            </Reveal>

            <PullQuote>Consistency isn't how things look. It's how things behave.</PullQuote>
            <ScrollImage src={phTargets} />
          </section>

          {/* Ecosystem */}
          <section id="ecosystem" className="csv2-section">
            <Reveal><p className="csv2-section-label">Ecosystem</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">Every touchpoint needed to feel like one product.</h2></Reveal>
            <Reveal><p className="csv2-para">A customer might browse on web, order on mobile, and pick up via SSD device, all in the same session. The ecosystem needed to maintain <span className="highlight">continuity across every transition</span>, not just within each platform.</p></Reveal>

            <Reveal>
              <div className="csv2-insight-row">
                <InsightCard label="Mobile" description="Where most journeys began" />
                <InsightCard label="Web" description="Discovery and browsing" />
                <InsightCard label="SSD Device" description="In-store ordering" />
                <InsightCard label="Tablet" description="Dine-in operations" />
              </div>
            </Reveal>

            <PullQuote>Different platforms. Same promise. One experience logic.</PullQuote>
            <div className="csv2-img-block">
              <Reveal>
                <video controls className="csv2-local-video" preload="metadata">
                  <source src="/phm-walkthrough.mp4" type="video/mp4" />
                </video>
              </Reveal>
            </div>
          </section>

          {/* Outcome */}
          <section id="outcome" className="csv2-section">
            <Reveal><p className="csv2-section-label">Outcome</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">Fragmented experiences became one connected system.</h2></Reveal>
            <Reveal><p className="csv2-para">The redesigned ecosystem established <span className="highlight">unified interaction patterns, consistent navigation logic, and scalable ordering flows</span> across all customer touchpoints, creating a foundation that could evolve with the business.</p></Reveal>

            <Reveal>
              <div className="csv2-outcome-grid">
                <div className="csv2-outcome-item csv2-card-hover"><p className="csv2-outcome-stat">4 platforms</p><p className="csv2-outcome-desc">Unified under one experience system.</p></div>
                <div className="csv2-outcome-item csv2-card-hover"><p className="csv2-outcome-stat">1 system</p><p className="csv2-outcome-desc">Shared interaction logic across touchpoints.</p></div>
                <div className="csv2-outcome-item csv2-card-hover"><p className="csv2-outcome-stat">Shipped</p><p className="csv2-outcome-desc">Designed as a team. Production delivered.</p></div>
              </div>
            </Reveal>

            <PullQuote>The ecosystem stopped feeling like four products. It started feeling like one.</PullQuote>
            <ScrollImage src={phNext} />
          </section>

          {/* Reflection */}
          <section id="reflection" className="csv2-section">
            <Reveal><p className="csv2-section-label">Reflection</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">Systems thinking matters more than pixel perfection.</h2></Reveal>
            <Reveal><p className="csv2-para">This project changed how I think about design. Not as screen-level decisions, but as <span className="highlight">ecosystem-level behavior</span>. Understanding how operations, customer journeys, and platform constraints connect taught me more about product thinking than any individual interface ever could.</p></Reveal>
            <Reveal><p className="csv2-para">Being part of a team that cared about getting the system right, not just the screens, reinforced that the best digital experiences are built through shared ownership, not individual effort.</p></Reveal>
            <PullQuote>The best ecosystems aren't designed screen by screen. They're designed decision by decision.</PullQuote>
            <ScrollImage src={phLearnings} />
          </section>

        </div>
      </div>

      <div className="csv2-divider" />
      <Reveal>
        <section className="csv2-next">
          <p className="csv2-next-label">Next Project</p>
          <h3 className="csv2-next-title">Novus Design System</h3>
          <Link to="/project/novus-design-system" className="primary-button-block-black">
            <div className="primary-button-wrapper-black">
              <div className="primary-button-text-black">View project</div>
              <div className="primary-button-arrow-block-black">
                <div className="primary-button-slider-black">
                  <div className="button-arrow-white"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.7813 7.33312L7.20534 3.75712L8.14801 2.81445L13.3333 7.99979L8.14801 13.1851L7.20534 12.2425L10.7813 8.66645H2.66663V7.33312H10.7813Z" fill="currentColor" /></svg></div>
                  <div className="button-arrow-white"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.7813 7.33312L7.20534 3.75712L8.14801 2.81445L13.3333 7.99979L8.14801 13.1851L7.20534 12.2425L10.7813 8.66645H2.66663V7.33312H10.7813Z" fill="currentColor" /></svg></div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      </Reveal>

      <Footer />
    </div>
  )
}
