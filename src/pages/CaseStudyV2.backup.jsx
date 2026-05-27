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
  { label: '2024 — 2025' },
  { label: 'Product Designer' },
  { label: 'Omnichannel · QSR' },
  { label: 'Mobile · Web · Kiosk' },
]

const TLDR = [
  { category: 'Background', text: 'Pizza Hut Malaysia\'s digital ordering ecosystem across mobile, web, kiosk, and tablet — serving ~4.9M customers.' },
  { category: 'Problem', text: 'Fragmented experiences across platforms with inconsistent navigation, ordering flows, and interaction patterns.' },
  { category: 'Approach', text: 'Collaborated with the PHM design team to create a unified experience system, leading mobile design decisions.' },
  { category: 'Outcome', text: 'A more modern, connected, and scalable ordering experience across all digital touchpoints.' },
]

const STATS = [
  { number: '4.9M', label: 'Customers served across the ecosystem' },
  { number: '4', label: 'Platforms unified under one system' },
  { number: '1', label: 'Connected experience across touchpoints' },
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
          <Reveal delay={0.2}><p className="csv2-subtitle">Worked with the PHM design team to redesign Pizza Hut Malaysia's digital ordering ecosystem across mobile, web, tablet, and kiosk experiences — leading mobile design decisions while collaborating across the broader omnichannel system.</p></Reveal>
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

      {/* Stats */}
      <section className="csv2-stats">
        {STATS.map((s, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="csv2-stat">
              <div className="csv2-stat-number">{s.number}</div>
              <p className="csv2-stat-label">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <div className="csv2-divider" />

      {/* Main content */}
      <div className="csv2-body">
        <StickyNav activeSection={activeSection} />

        <div className="csv2-content">

          {/* Background */}
          <section id="background" className="csv2-section">
            <Reveal><p className="csv2-section-label">Background</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">Customers ordered across four platforms — but the experience felt like four different products.</h2></Reveal>
            <Reveal delay={0.1}><p className="csv2-para">Pizza Hut Malaysia's ordering ecosystem had evolved across multiple platforms over time, including mobile applications, websites, kiosks, and tablet experiences. While each touchpoint solved immediate business needs, the broader ecosystem had grown without a <span className="highlight">shared experience system</span>.</p></Reveal>

            <Reveal delay={0.15}>
              <div className="csv2-insight-row">
                <InsightCard number="4" label="Platforms" description="Mobile, Web, Kiosk, Tablet" />
                <InsightCard number="4.9M" label="Customers" description="Across the digital ecosystem" />
                <InsightCard number="0" label="Shared patterns" description="No unified experience system" />
              </div>
            </Reveal>

            <Reveal><p className="csv2-para">Rather than redesigning isolated interfaces, the opportunity was to rethink the ecosystem as one connected customer journey.</p></Reveal>
            <PullQuote>One ecosystem. Multiple touchpoints. A single connected experience.</PullQuote>
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
              before="Each platform had its own navigation, interaction patterns, and ordering flows — built independently over time."
              after="Customers expected one seamless experience regardless of device, but got four disconnected ones."
            />

            <Reveal><p className="csv2-para">The challenge was not simply improving visual design — it was creating a <span className="highlight">scalable experience system</span> that could unify the ecosystem without compromising platform-specific usability.</p></Reveal>
            <PullQuote>The challenge was ecosystem consistency, not just interface redesign.</PullQuote>
            <ScrollImage src={phProblem} />
          </section>

          {/* Discovery */}
          <section id="discovery" className="csv2-section">
            <Reveal><p className="csv2-section-label">Discovery</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">Understanding how the ecosystem actually worked — not just how it looked.</h2></Reveal>
            <Reveal><p className="csv2-para">The project involved close collaboration with the PHM design team and stakeholders to understand customer behavior, operational workflows, and platform-level inconsistencies.</p></Reveal>

            <Reveal>
              <div className="csv2-callout-strip">
                <div className="csv2-callout-item csv2-card-hover"><span className="csv2-callout-icon">🔍</span><span>Customer behavior analysis</span></div>
                <div className="csv2-callout-item csv2-card-hover"><span className="csv2-callout-icon">🏪</span><span>Store operations mapping</span></div>
                <div className="csv2-callout-item csv2-card-hover"><span className="csv2-callout-icon">🔗</span><span>Platform gap audit</span></div>
              </div>
            </Reveal>

            <Reveal><p className="csv2-para">Working within a collaborative 3-designer setup allowed each platform perspective to continuously influence the broader ecosystem.</p></Reveal>
            <PullQuote>Good omnichannel experiences begin with understanding how the ecosystem behaves behind the screens.</PullQuote>
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
            <Reveal><p className="csv2-para">Instead of designing isolated screens, the approach centered around creating <span className="highlight">shared interaction logic</span> and cohesive ordering flows across every touchpoint.</p></Reveal>

            <Reveal>
              <div className="csv2-steps">
                {['Simpler ordering journeys', 'Better navigation clarity', 'Consistent interaction patterns', 'Scalable UI systems', 'Faster customer interactions', 'Cross-platform familiarity'].map((text, i) => (
                  <div key={i} className="csv2-step csv2-card-hover">
                    <div className="csv2-step-num">0{i + 1}</div>
                    <div className="csv2-step-text">{text}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <PullQuote>Every interaction was designed as part of a connected ecosystem.</PullQuote>
            <ScrollImage src={phOptimised} />
          </section>

          {/* Mobile */}
          <section id="mobile" className="csv2-section">
            <Reveal><p className="csv2-section-label">Mobile</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">Mobile became the behavioral foundation of the ecosystem.</h2></Reveal>
            <Reveal><p className="csv2-para">As part of the PHM design team, I actively <span className="highlight">led mobile experience decisions</span> across the ecosystem. The focus was on creating ordering experiences that felt intuitive, efficient, accessible, and scalable.</p></Reveal>

            <Reveal>
              <div className="csv2-metric-strip">
                <div className="csv2-metric"><span className="csv2-metric-label">Focus</span><span className="csv2-metric-value">Mobile-first UX</span></div>
                <div className="csv2-metric"><span className="csv2-metric-label">Approach</span><span className="csv2-metric-value">Cross-platform collaboration</span></div>
                <div className="csv2-metric"><span className="csv2-metric-label">Priority</span><span className="csv2-metric-value">Speed + Scalability</span></div>
              </div>
            </Reveal>

            <Reveal><p className="csv2-para">The process involved shaping interaction patterns, navigation systems, and customer journeys while continuously collaborating across web, kiosk, and tablet experiences.</p></Reveal>
            <ScrollImage src={landscape11} />
          </section>

          {/* System */}
          <section id="system" className="csv2-section">
            <Reveal><p className="csv2-section-label">System</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">Reusable patterns. Unified behaviors. One system.</h2></Reveal>
            <Reveal><p className="csv2-para">Maintaining consistency across multiple touchpoints required a <span className="highlight">scalable and systems-driven design approach</span>.</p></Reveal>

            <Reveal>
              <div className="csv2-ba">
                <div className="csv2-ba-col csv2-ba-before csv2-card-hover">
                  <span className="csv2-ba-tag">Visual consistency</span>
                  <p className="csv2-ba-text">Same colors, typography, and spacing across platforms.</p>
                </div>
                <div className="csv2-ba-col csv2-ba-after csv2-card-hover">
                  <span className="csv2-ba-tag csv2-ba-tag-after">Behavioral consistency</span>
                  <p className="csv2-ba-text">Same interaction logic, feedback patterns, and navigation flows.</p>
                </div>
              </div>
            </Reveal>

            <PullQuote>Consistency became part of the system behavior, not just the visual layer.</PullQuote>
            <ScrollImage src={phTargets} />
          </section>

          {/* Ecosystem */}
          <section id="ecosystem" className="csv2-section">
            <Reveal><p className="csv2-section-label">Ecosystem</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">Every touchpoint needed to feel like one product.</h2></Reveal>
            <Reveal><p className="csv2-para">The project extended beyond individual screens. Every touchpoint needed to feel connected as part of <span className="highlight">one larger ecosystem</span>.</p></Reveal>

            <Reveal>
              <div className="csv2-insight-row">
                <InsightCard label="Mobile" description="Primary ordering touchpoint" />
                <InsightCard label="Web" description="Browse & order from desktop" />
                <InsightCard label="Kiosk" description="In-store self-service" />
                <InsightCard label="Tablet" description="Dine-in experience" />
              </div>
            </Reveal>

            <PullQuote>Different platforms. Shared experience logic.</PullQuote>
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
            <Reveal><p className="csv2-para">By improving <span className="highlight">interaction consistency, navigation clarity, and omnichannel usability</span>, the ecosystem became more cohesive while creating a stronger foundation for future scalability.</p></Reveal>

            <Reveal>
              <div className="csv2-outcome-grid">
                <div className="csv2-outcome-item csv2-card-hover"><p className="csv2-outcome-stat">4 platforms</p><p className="csv2-outcome-desc">Now share the same design language.</p></div>
                <div className="csv2-outcome-item csv2-card-hover"><p className="csv2-outcome-stat">1 system</p><p className="csv2-outcome-desc">From fragmented screens to unified ecosystem.</p></div>
                <div className="csv2-outcome-item csv2-card-hover"><p className="csv2-outcome-stat">Shipped</p><p className="csv2-outcome-desc">Designed collaboratively, delivered across platforms.</p></div>
              </div>
            </Reveal>

            <PullQuote>A more connected ecosystem built around consistency, scalability, and usability.</PullQuote>
            <ScrollImage src={phNext} />
          </section>

          {/* Reflection */}
          <section id="reflection" className="csv2-section">
            <Reveal><p className="csv2-section-label">Reflection</p></Reveal>
            <Reveal delay={0.05}><h2 className="csv2-heading">Systems thinking matters more than pixel perfection.</h2></Reveal>
            <Reveal><p className="csv2-para">This project deepened my understanding of designing within large-scale omnichannel ecosystems where <span className="highlight">collaboration, systems thinking, and experience consistency</span> become equally important as visual design itself.</p></Reveal>
            <Reveal><p className="csv2-para">The experience strengthened my perspective on how modern product ecosystems require balancing usability, operational workflows, business needs, and scalable systems together — not separately.</p></Reveal>
            <PullQuote>Great omnichannel experiences are built through systems thinking, not screen-by-screen decisions.</PullQuote>
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
