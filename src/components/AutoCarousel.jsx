import img01 from '../assets/carousel-ref/Landscape_07.png'
import img00 from '../assets/carousel-ref/Landscape_03.png'
import img02 from '../assets/carousel-ref/Landscape_04.png'
import img03 from '../assets/carousel-ref/Landscape_11.png'
import img04 from '../assets/carousel-ref/Landscape_01.png'
import img05 from '../assets/carousel-ref/Landscape_09.png'
import img06 from '../assets/carousel-ref/Landscape_05.png'
import img07 from '../assets/carousel-ref/Landscape_13.png'
import img08 from '../assets/carousel-ref/Landscape_02.png'
import img09 from '../assets/carousel-ref/Landscape_08.png'
import img10 from '../assets/carousel-ref/Landscape_12.png'
import img11 from '../assets/carousel-ref/Landscape_06.png'
import img12 from '../assets/carousel-ref/Landscape_10.png'
import img13 from '../assets/carousel-ref/Landscape_06.png'

const images = [img01, img00, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12, img13]

export default function AutoCarousel() {
  const allImages = [...images, ...images]

  return (
    <section className="acar-section">
      <div className="acar-track">
        {allImages.map((src, i) => (
          <div key={i} className="acar-slide">
            <img src={src} alt="" className="acar-img" />
          </div>
        ))}
      </div>
    </section>
  )
}
