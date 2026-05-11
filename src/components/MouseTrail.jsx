import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import { gsap } from 'gsap'
import t1 from '../assets/trail/t1.jpg'
import t2 from '../assets/trail/t2.jpg'
import t3 from '../assets/trail/t3.jpg'
import t4 from '../assets/trail/t4.jpg'
import t5 from '../assets/trail/t5.jpg'
import t6 from '../assets/trail/t6.jpg'
import t7 from '../assets/trail/t7.jpg'
import t8 from '../assets/trail/t8.jpg'
import t9 from '../assets/trail/t9.jpg'
import t10 from '../assets/trail/t10.jpg'
import t11 from '../assets/trail/t11.jpg'
import t12 from '../assets/trail/t12.jpg'
import t13 from '../assets/trail/t13.jpg'
import t14 from '../assets/trail/t14.jpg'
import t15 from '../assets/trail/t15.jpg'
import t16 from '../assets/trail/t16.jpg'
import t17 from '../assets/trail/t17.jpg'

const trailImages = [t3, t10, t1, t14, t6, t17, t4, t11, t8, t15, t2, t9, t16, t5, t12, t7, t13]

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
