import AboutHero from '../components/AboutHero'
import AboutBio from '../components/AboutBio'
import ImageCarousel from '../components/ImageCarousel'
import Results from '../components/Results'
import Awards from '../components/Awards'
import Experience from '../components/Experience'
import Process from '../components/Process'
import ClientsCollab from '../components/ClientsCollab'
import Reviews from '../components/Reviews'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="page-with-bg">
      <AboutHero />
      <ImageCarousel />
      <AboutBio />
      <Results />
      <Awards />
      {/* <Process /> */}
      <ClientsCollab />
      <Experience />
      {/* <Reviews /> */}
      {/* <Faq /> */}
      <Footer />
    </div>
  )
}
