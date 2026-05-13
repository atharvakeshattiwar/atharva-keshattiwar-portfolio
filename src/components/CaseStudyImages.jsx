import { useEffect, useRef } from 'react'

export default function CaseStudyImages({ bigImage, smallImages, layout = 'default' }) {
  const bigRef = useRef(null)
  const smallRef = useRef(null)

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
    if (bigRef.current) obs.observe(bigRef.current)
    if (smallRef.current) obs.observe(smallRef.current)
    return () => obs.disconnect()
  }, [])

  if (layout === 'full') {
    return (
      <div className="cs-images">
        <div className="cs-images-wrapper">
          {bigImage && (
            <div ref={bigRef} className="cs-image-full animate-fade-in">
              <img src={bigImage} alt="" />
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="cs-images">
      <div className="cs-images-wrapper">
        {bigImage && (
          <div ref={bigRef} className="cs-image-big animate-fade-in">
            <img src={bigImage} alt="" className="cs-image" />
          </div>
        )}
        {smallImages && smallImages.length > 0 && (
          <div ref={smallRef} className="cs-image-multi animate-fade-in">
            {smallImages.map((src, i) => (
              <div key={i} className="cs-image-small">
                <img src={src} alt="" className="cs-image" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
