import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { initLetterReveal } from './utils/letterRevealGlobal'
import Loader from './components/Loader'
// import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'
import HeroTest from './pages/HeroTest'
import HeroTest2 from './pages/HeroTest2'
import HeroTest3 from './pages/HeroTest3'
import CaseStudyV2 from './pages/CaseStudyV2'
import CaseStudyNovus from './pages/CaseStudyNovus'

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => initLetterReveal(), 300)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      {/* {loading && <Loader onComplete={() => setLoading(false)} />} */}
      {/* <CustomCursor /> */}
      <div className="body-wrapper">
        <ScrollToTop />
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/pizza-hut-malaysia" element={<CaseStudyV2 />} />
        <Route path="/project/novus-design-system" element={<CaseStudyNovus />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/hero-test" element={<HeroTest />} />
        <Route path="/hero-test-2" element={<HeroTest2 />} />
        <Route path="/hero-test-3" element={<HeroTest3 />} />
        <Route path="/case-study-v2" element={<CaseStudyV2 />} />
        <Route path="/case-study-novus" element={<CaseStudyNovus />} />
      </Routes>
    </div>
    </>
  )
}

export default App
