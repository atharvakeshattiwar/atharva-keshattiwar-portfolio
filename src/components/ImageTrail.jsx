import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import { gsap } from 'gsap'
import t1 from '../assets/carousel-ref/Landscape_01.png'
import t2 from '../assets/carousel-ref/Landscape_02.png'
import t3 from '../assets/carousel-ref/Landscape_04.png'
import t4 from '../assets/carousel-ref/Landscape_05.png'
import t5 from '../assets/carousel-ref/Landscape_07.png'
import t6 from '../assets/carousel-ref/Landscape_09.png'
import t7 from '../assets/carousel-ref/Landscape_10.png'
import t8 from '../assets/carousel-ref/Landscape_11.png'
import t9 from '../assets/carousel-ref/Landscape_12.png'
import t10 from '../assets/carousel-ref/Landscape_13.png'
import t11 from '../assets/carousel-ref/Landscape_06.png'

const trailImages = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11]
const TOTAL = trailImages.length
const D = 90
const IN_DUR = 0.2
const MOVE_DUR = 0.45
const OUT_DUR = 0.2
const SCALE_OUT = 0.6

const ImageTrail = forwardRef(function ImageTrail(props, ref) {
  const containerRef = useRef(null)
  const wrapsRef = useRef([])
  const indexRef = useRef(-1)
  const zRef = useRef(1)
  const lastRef = useRef({ x: 0, y: 0 })
  const firstRef = useRef(true)

  const spawn = (fromX, fromY, toX, toY) => {
    indexRef.current = (indexRef.current + 1) % TOTAL
    const el = wrapsRef.current[indexRef.current]
    if (!el) return

    const img = el.querySelector('img')
    zRef.current++

    gsap.set(el, { left: 0, top: 0, zIndex: zRef.current })
    gsap.set(img, { opacity: 1, scale: 1 })
    gsap.killTweensOf([el, img])

    const w = el.offsetWidth || 220
    const h = el.offsetHeight || 140
    const fx = fromX - w / 2
    const fy = fromY - h / 2
    const tx = toX - w / 2
    const ty = toY - h / 2

    const tl = gsap.timeline()
    tl.fromTo(el, { opacity: 0, x: fx, y: fy }, { opacity: 1, duration: IN_DUR })
    tl.to(el, { x: tx, y: ty, duration: MOVE_DUR }, '<')
    tl.to(img, { opacity: 0, scale: SCALE_OUT, duration: OUT_DUR })
  }

  useImperativeHandle(ref, () => ({
    onMove(clientX, clientY) {
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top

      if (firstRef.current) {
        firstRef.current = false
        spawn(x, y, x, y)
        lastRef.current = { x, y }
        return
      }

      const dx = x - lastRef.current.x
      const dy = y - lastRef.current.y
      if (dx * dx + dy * dy >= D * D) {
        spawn(lastRef.current.x, lastRef.current.y, x, y)
        lastRef.current = { x, y }
      }
    },
    onEnter(clientX, clientY) {
      firstRef.current = true
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) lastRef.current = { x: clientX - rect.left, y: clientY - rect.top }
    },
    onLeave() {
      firstRef.current = true
    },
  }))

  return (
    <div ref={containerRef} className="itrail-container">
      {trailImages.map((src, i) => (
        <div
          key={i}
          ref={(el) => { wrapsRef.current[i] = el }}
          className="itrail-wrap"
        >
          <img src={src} alt="" className="itrail-img" />
        </div>
      ))}
    </div>
  )
})

export default ImageTrail
