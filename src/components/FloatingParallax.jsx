import { useEffect, useRef } from 'react'
import img1 from '../assets/carousel-ref/Landscape_01.png'
import img2 from '../assets/carousel-ref/Landscape_05.png'
import img3 from '../assets/carousel-ref/Landscape_09.png'
import img4 from '../assets/carousel-ref/Landscape_07.png'
import img5 from '../assets/carousel-ref/Landscape_12.png'
import img6 from '../assets/carousel-ref/Landscape_04.png'
import img7 from '../assets/carousel-ref/Landscape_11.png'

const floatingImages = [
  { src: img1, x: -2, y: 6, speed: 0.015, rotation: -8, width: 280, blur: 2 },
  { src: img2, x: 75, y: -3, speed: 0.025, rotation: 5, width: 240, blur: 0 },
  { src: img3, x: 82, y: 58, speed: 0.01, rotation: -4, width: 260, blur: 3 },
  { src: img4, x: -5, y: 55, speed: 0.02, rotation: 6, width: 220, blur: 1 },
  { src: img5, x: 35, y: -5, speed: 0.03, rotation: -2, width: 200, blur: 4 },
  { src: img6, x: 55, y: 68, speed: 0.018, rotation: 8, width: 250, blur: 2 },
  { src: img7, x: 28, y: 72, speed: 0.012, rotation: -5, width: 190, blur: 3 },
]

export default function FloatingParallax() {
  const containerRef = useRef(null)
  const itemsRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef(floatingImages.map(() => ({ x: 0, y: 0 })))
  const rafRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: 0, y: 0 }
    }

    const animate = () => {
      itemsRef.current.forEach((el, i) => {
        if (!el) return
        const config = floatingImages[i]
        const target = {
          x: mouseRef.current.x * config.speed * 2000,
          y: mouseRef.current.y * config.speed * 2000,
        }
        const curr = currentRef.current[i]
        curr.x += (target.x - curr.x) * 0.03
        curr.y += (target.y - curr.y) * 0.03
        el.style.transform = `translate(${curr.x}px, ${curr.y}px) rotate(${config.rotation}deg)`
      })
      rafRef.current = requestAnimationFrame(animate)
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className="fp-container">
      {floatingImages.map((img, i) => (
        <div
          key={i}
          ref={(el) => { itemsRef.current[i] = el }}
          className="fp-item"
          style={{
            left: `${img.x}%`,
            top: `${img.y}%`,
            width: img.width,
            filter: img.blur ? `blur(${img.blur}px)` : 'none',
          }}
        >
          <img src={img.src} alt="" className="fp-img" />
        </div>
      ))}
    </div>
  )
}
