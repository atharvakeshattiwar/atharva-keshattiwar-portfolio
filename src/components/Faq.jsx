import { useState, useEffect, useRef } from 'react'

const faqs = [
  { q: 'Can you work with wireframes or our existing designs?', a: 'Absolutely! I can work with your existing wireframes, mockups, or design files. Whether you need refinement or a complete redesign, I adapt to your workflow.' },
  { q: 'What happens after the design is ready & I approve it?', a: 'Once approved, I prepare all assets and documentation for handoff. If development is included, I move into build phase with regular check-ins.' },
  { q: 'Do you charge for additional revisions?', a: 'Each project includes a set number of revision rounds. Additional revisions beyond that scope are billed at an agreed hourly rate.' },
  { q: 'I have an agency. Can I outsource work to you?', a: 'Yes, I regularly collaborate with agencies as a white-label partner. I integrate seamlessly into your team and maintain strict confidentiality.' },
  { q: 'What do I need to give you to get started?', a: 'A brief overview of your project, goals, timeline, and any existing brand guidelines or references. A quick kickoff call helps align expectations.' },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)
  const itemRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' } },
      { threshold: 0.1 }
    )
    if (itemRef.current) obs.observe(itemRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={itemRef} className="faq-item animate-fade-in">
      <div className="faq-item-header" onClick={() => setOpen(!open)}>
        <div className="faq-question">{q}</div>
        <div className="faq-toggle">
          <div className="faq-sign-h" />
          <div className={`faq-sign-v ${open ? 'faq-sign-v-open' : ''}`} />
        </div>
      </div>
      <div
        className="faq-answer-wrap"
        style={{ maxHeight: open ? contentRef.current?.scrollHeight + 'px' : '0px' }}
      >
        <div ref={contentRef} className="faq-answer">
          <div className="faq-answer-text">{a}</div>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
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
    <section className="faq-section">
      <div className="faq-wrapper">
        <div className="faq-content">
          <div className="faq-left">
            <div ref={h1} className="section-headline-text animate-fade-in">FAQ</div>
            <div ref={h2} className="text-sm text-color-black-800 animate-fade-in">
              Have questions? We've got the answers. Our FAQ section is designed to give you quick and clear information about our services and process.
            </div>
          </div>
          <div className="faq-right">
            {faqs.map(f => <FaqItem key={f.q} {...f} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
