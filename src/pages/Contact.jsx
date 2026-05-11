import { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'

export default function Contact() {
  const headlineRef = useRef(null)
  const formRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const elements = [
      { ref: headlineRef, delay: 0 },
      { ref: formRef, delay: 300 },
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

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="ct-section">
        <div className="ct-wrapper">
          <div className="ct-content">
            <div ref={headlineRef} className="ct-top animate-fade-in">
              <div className="hero-headline-text">Contact</div>
              <div className="hero-hr-line" />
              <div className="ct-info">
                <div className="text-sm text-color-black-900">2021</div>
                <div className="text-sm text-color-black-900">2025</div>
              </div>
            </div>
            <div ref={formRef} className="ct-bottom animate-fade-in">
              <div className="ct-form-title">Let's build something impactful together</div>
              {!submitted ? (
                <form className="ct-form" onSubmit={handleSubmit}>
                  <div className="ct-form-element">
                    <label htmlFor="name" className="ct-label">Name</label>
                    <input className="ct-input" type="text" id="name" placeholder="Enter your name" required />
                  </div>
                  <div className="ct-form-element">
                    <label htmlFor="email" className="ct-label">Email Address</label>
                    <input className="ct-input" type="email" id="email" placeholder="Email address" required />
                  </div>
                  <div className="ct-form-element">
                    <label htmlFor="description" className="ct-label">Project Description</label>
                    <textarea className="ct-input ct-textarea" id="description" placeholder="Write here" required />
                  </div>
                  <button type="submit" className="ct-submit">Send it over</button>
                </form>
              ) : (
                <div className="ct-success">Thank you! Your submission has been received!</div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
