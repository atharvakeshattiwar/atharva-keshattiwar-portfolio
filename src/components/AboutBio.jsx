import { useEffect, useRef } from 'react'
import portrait from '../assets/about-portrait.jpg'

export default function AboutBio() {
  const imgRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = '1'
            e.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )
    if (imgRef.current) obs.observe(imgRef.current)
    if (textRef.current) obs.observe(textRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="abio-section">
      <div className="abio-wrapper">
        <div className="abio-top">
          {/* <div ref={imgRef} className="abio-image-wrap animate-fade-in">
            <img src={portrait} alt="Atharva Keshattiwar" className="abio-image" />
          </div> */}
          <div ref={textRef} className="abio-right animate-fade-in">
            <div className="abio-label">[ABOUT ME]</div>
            <div className="abio-paragraphs">
              <p className="abio-text">
                I'm Atharva, a product designer focused on building scalable digital experiences across SaaS, E-commerce, CRM, and AI ecosystems. My work blends structured problem-solving with creativity to craft products that feel intuitive, impactful, and human. From design systems to omnichannel platforms, I enjoy simplifying complexity and turning ideas into experiences that scale.
              </p>
              <p className="abio-text">
                Over the years, I've worked on products across AI, commerce, enterprise workflows, and customer-facing platforms, contributing to experiences used across web, mobile, tablet, and kiosk ecosystems. Whether it's building scalable foundations through design systems or shaping end-to-end journeys for users, I focus on creating clarity, consistency, and meaningful interactions.
              </p>
              <p className="abio-text">
                Beyond product design, photography and visual storytelling have always been a huge part of my creative identity. Capturing frames, observing people, light, emotions, and moments has deeply influenced how I approach design, helping me create experiences that are not only functional but emotionally engaging. I see both photography and design as mediums to tell stories and connect with people.
              </p>
              <p className="abio-text">
                I'm also deeply curious about emerging technologies, AI-driven experiences, and modern creative workflows. From experimenting with AI-assisted product experiences to exploring vibe coding and creative automation, I enjoy blending systems thinking with innovation to build experiences that feel modern, scalable, and future-ready. Fueled by curiosity, coffee, and constant learning, I'm always exploring new ways to create meaningful digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
