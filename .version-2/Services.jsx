import { useEffect, useRef } from 'react'
import s11 from '../assets/services/s1-1.avif'
import s12 from '../assets/services/s1-2.avif'
import s13 from '../assets/services/s1-3.avif'
import s21 from '../assets/services/s2-1.avif'
import s22 from '../assets/services/s2-2.avif'
import s23 from '../assets/services/s2-3.avif'
import s31 from '../assets/services/s3-1.avif'
import s32 from '../assets/services/s3-2.avif'
import s33 from '../assets/services/s3-3.avif'
import s41 from '../assets/services/s4-1.avif'
import s42 from '../assets/services/s4-2.avif'
import s43 from '../assets/services/s4-3.avif'

const services = [
  {
    number: '[01]',
    title: 'Branding Identity',
    description: 'From colors and typography to tone and style, every detail works together to build recognition, trust, and connection with your audience.',
    images: [s11, s12, s13],
  },
  {
    number: '[02]',
    title: 'Product Design',
    description: 'Great products begin with thoughtful design. I focus on creating user-centered solutions that blend functionality with visual appeal.',
    images: [s21, s22, s23],
  },
  {
    number: '[03]',
    title: 'Website Development',
    description: 'A website is often the first impression of your brand, and I make sure it leaves a lasting one. By combining clean code with creative design.',
    images: [s31, s32, s33],
  },
  {
    number: '[04]',
    title: 'Digital Marketing',
    description: 'Reaching the right audience at the right time is key to growth. Through data-driven strategies, creative content, and smart campaigns.',
    images: [s41, s42, s43],
  },
]

function ServiceCard({ number, title, description, images }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={cardRef} className="services-h-card animate-fade-in">
      <div className="services-h-card_left">
        <div className="text-sm text-color-black-900">{number}</div>
        <div className="services-h-card-text">
          <div className="text-xl_2 text-weight-semibold text-color-black">{title}</div>
          <div className="text-sm text-color-black-800">{description}</div>
        </div>
      </div>
      <div className="services-h-card-right">
        {images.map((img, i) => (
          <div key={i} className="services-h-card-image">
            <img src={img} alt={title} className="image-100" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  const headlineRef = useRef(null)
  const subtextRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )
    if (headlineRef.current) observer.observe(headlineRef.current)
    if (subtextRef.current) observer.observe(subtextRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-services-h">
      <div className="services-h-wrapper">
        <div className="services-h-content">
          <div className="services-h-top">
            <div ref={headlineRef} className="section-headline-text text-align-center animate-fade-in">
              Best Services
            </div>
            <div ref={subtextRef} className="text-sm text-align-center text-color-black-800 animate-fade-in">
              I provide a range of top-quality services designed to help brands grow, connect, and stand out. With a focus on creativity and precision.
            </div>
          </div>
          <div className="services-h-bottom">
            {services.map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
