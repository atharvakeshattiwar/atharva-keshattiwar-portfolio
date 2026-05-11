import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollHero from './components/ScrollHero'
import SofieHero from './components/SofieHero'
import ThomasHero from './components/ThomasHero'
import SelectedWorks from './components/SelectedWorks'
import Services from './components/Services'
import SuccessNumbers from './components/SuccessNumbers'
import Partners from './components/Partners'
import Reviews from './components/Reviews'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="body-wrapper">
      <Navbar />
      <Hero />
      {/* <SofieHero /> */}
      <ThomasHero />
      {/* <ScrollHero /> */}
      <SelectedWorks />
      <Services />
      <SuccessNumbers />
      <Partners />
      <Reviews />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App
