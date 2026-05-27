import { useEffect, useRef } from 'react'

export default function CaseStudyImages({ bigImage, smallImages, layout = 'default', images, inline }) {
  const ref = useRef(null)

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
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  let content

  if (layout === 'stacked' && images) {
    const paired = images.slice(0, 2)
    const remaining = images.slice(2)
    content = (
      <div ref={ref} className="cs-images-inner animate-fade-in">
        {paired.length === 2 && (
          <div className="cs-image-multi">
            {paired.map((src, i) => (
              <div key={i} className="cs-image-small">
                <img src={src} alt="" className="cs-image" />
              </div>
            ))}
          </div>
        )}
        {paired.length === 1 && (
          <div className="cs-image-full">
            <img src={paired[0]} alt="" />
          </div>
        )}
        {remaining.map((src, i) => (
          <div key={i} className="cs-image-full">
            <img src={src} alt="" />
          </div>
        ))}
      </div>
    )
  } else if (layout === 'full') {
    content = (
      <div ref={ref} className="cs-images-inner animate-fade-in">
        {bigImage && (
          <div className="cs-image-full">
            <img src={bigImage} alt="" />
          </div>
        )}
      </div>
    )
  } else {
    content = (
      <div ref={ref} className="cs-images-inner animate-fade-in">
        {bigImage && (
          <div className="cs-image-big">
            <img src={bigImage} alt="" className="cs-image" />
          </div>
        )}
        {smallImages && smallImages.length > 0 && (
          <div className="cs-image-multi">
            {smallImages.map((src, i) => (
              <div key={i} className="cs-image-small">
                <img src={src} alt="" className="cs-image" />
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  if (inline) return content

  return (
    <div className="cs-images">
      <div className="cs-images-wrapper">
        {content}
      </div>
    </div>
  )
}
