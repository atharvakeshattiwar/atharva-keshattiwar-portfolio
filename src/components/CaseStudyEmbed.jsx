import { useEffect, useRef } from 'react'

export default function CaseStudyEmbed({ embedType, videoId, src }) {
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

  if (embedType === 'youtube') {
    return (
      <div className="cs-embed" ref={ref}>
        <div className="cs-embed-wrapper">
          <div className="cs-embed-responsive">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=0&mute=1&loop=1&playlist=${videoId}`}
              title="Project video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="cs-embed-iframe"
            />
          </div>
        </div>
      </div>
    )
  }

  if (embedType === 'figma') {
    return (
      <div className="cs-embed" ref={ref}>
        <div className="cs-embed-wrapper">
          <div className="cs-embed-responsive cs-embed-figma">
            <iframe
              src={src}
              title="Figma prototype"
              allowFullScreen
              className="cs-embed-iframe"
            />
          </div>
        </div>
      </div>
    )
  }

  return null
}
