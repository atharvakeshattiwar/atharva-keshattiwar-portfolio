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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.description.value,
    }
    try {
      await fetch('https://script.google.com/macros/s/AKfycbzZo2Jlqhk2KLXJ1DGmIhWIou1IisqGNX_wmnj28azFFFQ4MDbJ9Ge4eyVQD5p543AGUQ/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'no-cors',
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    }
  }

  return (
    <div className="page-with-bg">
      <section className="ct-section">
        <div className="ct-wrapper">
          <div className="ct-content">
            <div ref={headlineRef} className="ct-top animate-fade-in">
              <div className="hero-headline-text">Contact</div>
              <div className="hero-hr-line" />
              <div className="ct-info">
                <div className="text-sm text-color-black-900">Available for product collaborations</div>
                <div className="text-sm text-color-black-900">Building products, systems & stories</div>
              </div>
            </div>
            <div ref={formRef} className="ct-bottom animate-fade-in">
              <div className="ct-form-title">Let's Build Something Impactful Together</div>
              {!submitted ? (
                <form className="ct-form" onSubmit={handleSubmit}>
                  <div className="ct-form-element">
                    <label htmlFor="name" className="ct-label">Name</label>
                    <input className="ct-input" type="text" id="name" placeholder="Enter your name" required />
                  </div>
                  <div className="ct-form-element">
                    <label htmlFor="email" className="ct-label">Email Address</label>
                    <input className="ct-input" type="email" id="email" placeholder="Enter email address" required />
                  </div>
                  <div className="ct-form-element">
                    <label htmlFor="description" className="ct-label">Project Description</label>
                    <textarea className="ct-input ct-textarea" id="description" placeholder="Give a short brief" required />
                  </div>
                  <button type="submit" className="ct-submit primary-button-block-black">
                    <div className="primary-button-wrapper-black">
                      <div className="primary-button-text-black">Let's Collaborate</div>
                      <div className="primary-button-arrow-block-black">
                        <div className="primary-button-slider-black">
                          <div className="button-arrow-white">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.7813 7.33312L7.20534 3.75712L8.14801 2.81445L13.3333 7.99979L8.14801 13.1851L7.20534 12.2425L10.7813 8.66645H2.66663V7.33312H10.7813Z" fill="currentColor" /></svg>
                          </div>
                          <div className="button-arrow-white">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.7813 7.33312L7.20534 3.75712L8.14801 2.81445L13.3333 7.99979L8.14801 13.1851L7.20534 12.2425L10.7813 8.66645H2.66663V7.33312H10.7813Z" fill="currentColor" /></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </form>
              ) : (
                <div className="ct-success">Thank you! Your submission has been received!</div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
