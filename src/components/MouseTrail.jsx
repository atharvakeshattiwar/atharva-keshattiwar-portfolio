import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import { gsap } from 'gsap'
import t1 from '../assets/carousel-ref/Landscape_01.png'
import t2 from '../assets/carousel-ref/Landscape_02.png'
import t3 from '../assets/carousel-ref/Landscape_03.png'
import t4 from '../assets/carousel-ref/Landscape_04.png'
import t5 from '../assets/carousel-ref/Landscape_05.png'
import t6 from '../assets/carousel-ref/Landscape_06.png'
import t7 from '../assets/carousel-ref/Landscape_07.png'
import t8 from '../assets/carousel-ref/Landscape_08.png'
import t9 from '../assets/carousel-ref/Landscape_09.png'
import t10 from '../assets/carousel-ref/Landscape_10.png'
import t11 from '../assets/carousel-ref/Landscape_11.png'
import t12 from '../assets/carousel-ref/Landscape_12.png'
import t13 from '../assets/carousel-ref/Landscape_13.png'

const trailImages = [t7, t11, t1, t9, t5, t13, t2, t8, t12, t4, t10, t6]

const CONFIG = {
  maxImages: 10,
  maxRotation: 4,
  rotationDriftMultiplier: 0.5,
  inertiaMultiplier: 0.15,
  driftMultiplier: 0.12,
  totalDuration: 1.4,
  entryDuration: 0.5,
  blurStartDelay: 0.3,
  exitDuration: 0.75,
}

const MouseTrail = forwardRef(function MouseTrail(props, ref) {
  const containerRef = useRef(null)
  const imgIndex = useRef(0)
  const lastRelX = useRef(0)
  const lastRelY = useRef(0)
  const activeCount = useRef(0)

  useImperativeHandle(ref, () => ({
    spawn(clientX, clientY, prevX, prevY) {
      const container = containerRef.current
      if (!container) return
      if (activeCount.current >= CONFIG.maxImages) return

      const rect = container.getBoundingClientRect()
      const relX = clientX - rect.left
      const relY = clientY - rect.top
      const prevRelX = prevX - rect.left
      const prevRelY = prevY - rect.top

      const xDist = relX - prevRelX
      const yDist = relY - prevRelY

      const clone = document.createElement('div')
      clone.className = 'trail-img'
      const img = document.createElement('img')
      img.src = trailImages[imgIndex.current % trailImages.length]
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;'
      clone.appendChild(img)
      container.appendChild(clone)

      imgIndex.current++
      activeCount.current++

      const randomRotation = (Math.random() * 2 - 1) * CONFIG.maxRotation
      const rotationDrift = randomRotation * CONFIG.rotationDriftMultiplier
      const inertiaX = xDist * CONFIG.inertiaMultiplier
      const inertiaY = yDist * CONFIG.inertiaMultiplier
      const driftX = xDist * CONFIG.driftMultiplier
      const driftY = yDist * CONFIG.driftMultiplier
      const driftDuration = CONFIG.totalDuration - CONFIG.blurStartDelay

      const tl = gsap.timeline({
        onComplete: () => {
          clone.remove()
          activeCount.current--
        },
      })

      tl.fromTo(
        clone,
        {
          x: prevRelX,
          y: prevRelY,
          xPercent: -50,
          yPercent: -50,
          autoAlpha: 0,
          display: 'block',
          scale: 1,
          rotation: 0,
          filter: 'blur(0px)',
        },
        {
          x: relX + inertiaX,
          y: relY + inertiaY,
          autoAlpha: 1,
          rotation: randomRotation,
          duration: CONFIG.entryDuration,
          ease: 'power4.out',
        }
      )
        .to(
          clone,
          {
            x: '+=' + driftX,
            y: '+=' + driftY,
            rotation: '+=' + rotationDrift,
            duration: driftDuration,
            ease: 'power1.out',
          },
          CONFIG.blurStartDelay
        )
        .to(
          clone,
          {
            filter: 'blur(20px)',
            duration: driftDuration,
            ease: 'power2.in',
          },
          CONFIG.blurStartDelay
        )
        .to(
          clone,
          {
            scale: 0.9,
            autoAlpha: 0,
            duration: CONFIG.exitDuration,
            ease: 'power2.in',
          },
          CONFIG.totalDuration - CONFIG.exitDuration
        )

      lastRelX.current = relX
      lastRelY.current = relY
    },
  }))

  return <div ref={containerRef} className="mouse-trail-container" />
})

export default MouseTrail
