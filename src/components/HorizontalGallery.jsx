import { useEffect, useRef, useState } from 'react'
import img1 from '../assets/carousel/carousel-1.jpg'
import img2 from '../assets/carousel/carousel-2.jpg'
import img3 from '../assets/carousel/carousel-3.jpg'
import img4 from '../assets/carousel/carousel-4.jpg'

const images = [
  { src: img1, width: 1089 },
  { src: img2, width: 615 },
  { src: img3, width: 1089 },
  { src: img4, width: 820 },
]

export default function HorizontalGallery() {
  const trackRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const dragState = useRef({ startX: 0, scrollLeft: 0 })

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onMouseDown = (e) => {
      setIsDragging(true)
      dragState.current.startX = e.pageX - track.offsetLeft
      dragState.current.scrollLeft = track.scrollLeft
      track.style.cursor = 'grabbing'
    }

    const onMouseMove = (e) => {
      if (!isDragging) return
      e.preventDefault()
      const x = e.pageX - track.offsetLeft
      const walk = (x - dragState.current.startX) * 1.5
      track.scrollLeft = dragState.current.scrollLeft - walk
    }

    const onMouseUp = () => {
      setIsDragging(false)
      track.style.cursor = 'grab'
    }

    const onTouchStart = (e) => {
      dragState.current.startX = e.touches[0].pageX - track.offsetLeft
      dragState.current.scrollLeft = track.scrollLeft
    }

    const onTouchMove = (e) => {
      const x = e.touches[0].pageX - track.offsetLeft
      const walk = (x - dragState.current.startX) * 1.5
      track.scrollLeft = dragState.current.scrollLeft - walk
    }

    track.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    track.addEventListener('touchstart', onTouchStart, { passive: true })
    track.addEventListener('touchmove', onTouchMove, { passive: true })

    return () => {
      track.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      track.removeEventListener('touchstart', onTouchStart)
      track.removeEventListener('touchmove', onTouchMove)
    }
  }, [isDragging])

  return (
    <section className="hgallery-section">
      <div className="hgallery-wrapper">
        <div ref={trackRef} className="hgallery-track">
          {images.map((img, i) => (
            <div key={i} className="hgallery-slide" style={{ width: img.width }}>
              <img src={img.src} alt="" className="hgallery-img" draggable="false" />
            </div>
          ))}
        </div>
      </div>
      <div className="hgallery-indicator">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 10H16M16 10L12 6M16 10L12 14M4 10L8 6M4 10L8 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
