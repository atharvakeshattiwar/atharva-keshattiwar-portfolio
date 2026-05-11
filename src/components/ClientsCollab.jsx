import fynd from '../assets/partners/logo-7.png'
import pizzahut from '../assets/partners/logo-4.png'
import swapeasy from '../assets/partners/logo-3.png'
import drpashu from '../assets/partners/logo-1.avif'
import abp from '../assets/partners/logo-2.png'
import nexus from '../assets/partners/logo-5.avif'
import shristi from '../assets/partners/logo-6.webp'

const row1 = [fynd, pizzahut, swapeasy, drpashu, abp, nexus, shristi]

function MarqueeRow({ images, direction = 'left' }) {
  return (
    <div className="cc-marquee-track">
      <div className={`cc-marquee-inner ${direction === 'right' ? 'cc-marquee-reverse' : ''}`}>
        {images.map((img, i) => (
          <div key={i} className="cc-logo-cell">
            <img src={img} alt="" className="cc-logo-img" loading="lazy" />
          </div>
        ))}
        {images.map((img, i) => (
          <div key={`dup-${i}`} className="cc-logo-cell">
            <img src={img} alt="" className="cc-logo-img" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ClientsCollab() {
  return (
    <section className="cc-section">
      <div className="cc-wrapper">
        <div className="section-headline-text text-align-center">
          Latest clients and<br />collaborations
        </div>
        <div className="cc-brand-area">
          <MarqueeRow images={row1} direction="left" />
          {/* <MarqueeRow images={row2} direction="right" /> */}
        </div>
      </div>
    </section>
  )
}
