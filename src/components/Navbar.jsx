import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about-me' },
  { label: 'Contact', href: '/contact' },
]

function NavLink({ label, href, active }) {
  return (
    <Link
      to={href}
      className={`page-link-block ${active ? 'active' : ''}`}
    >
      <div className="page-link-wrapper">
        <div className="page-text-block">{label}</div>
        <div className="page-text-block">{label}</div>
      </div>
    </Link>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.7813 7.33312L7.20534 3.75712L8.14801 2.81445L13.3333 7.99979L8.14801 13.1851L7.20534 12.2425L10.7813 8.66645H2.66663V7.33312H10.7813Z" fill="currentColor" />
    </svg>
  )
}

function ContactButton() {
  return (
    <a href="https://drive.google.com/file/d/1q2Fn4HGPszB5TwOBaOGyXFIB2nctWThT/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="primary-button-block-black">
      <div className="primary-button-wrapper-black">
        <div className="primary-button-text-black">Resume</div>
        <div className="primary-button-arrow-block-black">
          <div className="primary-button-slider-black">
            <div className="button-arrow-white"><ArrowIcon /></div>
            <div className="button-arrow-white"><ArrowIcon /></div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Atharva K" className="nav-logo-img" />
        </Link>

        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="menu-wrapper">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                label={link.label}
                href={link.href}
                active={location.pathname === link.href}
              />
            ))}
          </div>
          <div className="navbar-button navbar-button-mobile">
            <ContactButton />
          </div>
        </nav>

        <div className="navbar-button navbar-button-desktop">
          <ContactButton />
        </div>

        <div className="menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className="menu-icon">
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
              <line y1="1" x2="24" y2="1" stroke="#0c0407" strokeWidth="2" />
              <line y1="9" x2="24" y2="9" stroke="#0c0407" strokeWidth="2" />
              <line y1="17" x2="24" y2="17" stroke="#0c0407" strokeWidth="2" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  )
}
