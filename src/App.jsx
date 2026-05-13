import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'
import HeroTest from './pages/HeroTest'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {/* {loading && <Loader onComplete={() => setLoading(false)} />} */}
      <div className="body-wrapper">
        <ScrollToTop />
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/hero-test" element={<HeroTest />} />
      </Routes>
    </div>
    </>
  )
}

export default App
