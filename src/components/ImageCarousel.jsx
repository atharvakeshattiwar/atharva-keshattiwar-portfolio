import c1 from '../assets/carousel/carousel-1.jpg'
import c2 from '../assets/carousel/carousel-2.jpg'
import c3 from '../assets/carousel/carousel-3.jpg'
import c4 from '../assets/carousel/carousel-4.jpg'
import c5 from '../assets/carousel/carousel-5.jpg'
import c6 from '../assets/carousel/carousel-6.jpg'
import c7 from '../assets/carousel/carousel-7.jpg'
import c8 from '../assets/carousel/carousel-8.jpg'

const images = [
  { src: c5, height: 'tall' },
  { src: c3, height: 'short' },
  { src: c8, height: 'tall' },
  { src: c1, height: 'short' },
  { src: c6, height: 'tall' },
  { src: c4, height: 'short' },
  { src: c2, height: 'tall' },
  { src: c7, height: 'short' },
]

export default function ImageCarousel() {
  const doubled = [...images, ...images]

  return (
    <section className="icr-section">
      <div className="icr-track">
        {doubled.map((img, i) => (
          <div key={i} className={`icr-item icr-${img.height}`}>
            <img src={img.src} alt="" className="icr-img" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
