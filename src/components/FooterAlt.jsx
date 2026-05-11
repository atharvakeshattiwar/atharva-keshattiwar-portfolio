import { useEffect, useRef } from 'react'

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.7813 7.33312L7.20534 3.75712L8.14801 2.81445L13.3333 7.99979L8.14801 13.1851L7.20534 12.2425L10.7813 8.66645H2.66663V7.33312H10.7813Z" fill="currentColor" />
  </svg>
)

const CallIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
    <path d="M13.333 0.333008C13.793 0.333008 14.1663 0.706341 14.1663 1.16634V4.66634L18.5105 1.62467C18.6988 1.49301 18.9588 1.53884 19.0913 1.72801C19.1397 1.79801 19.1663 1.88134 19.1663 1.96634V12.033C19.1663 12.263 18.9797 12.4497 18.7497 12.4497C18.6647 12.4497 18.5813 12.423 18.5113 12.3747L14.1663 9.33301V12.833C14.1663 13.293 13.793 13.6663 13.333 13.6663H1.66634C1.20634 13.6663 0.833008 13.293 0.833008 12.833V1.16634C0.833008 0.706341 1.20634 0.333008 1.66634 0.333008H13.333Z" fill="currentColor"/>
  </svg>
)

const mainLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

const moreLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Articles', href: '/articles' },
  { label: 'Style Guide', href: '#' },
  { label: 'Changelog', href: '#' },
]

const socialIcons = [
  <svg key="li" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18.335 18.339H15.67V14.162C15.67 13.166 15.65 11.884 14.28 11.884C12.891 11.884 12.679 12.968 12.679 14.089V18.339H10.013V9.75H12.573V10.92H12.608C12.966 10.246 13.836 9.533 15.136 9.533C17.836 9.533 18.336 11.311 18.336 13.624V18.339H18.335ZM7.003 8.575C6.79956 8.57526 6.59806 8.53537 6.41006 8.45761C6.22207 8.37984 6.05127 8.26574 5.90746 8.12174C5.76365 7.97775 5.64969 7.80681 5.57248 7.61872C5.49495 7.43062 5.4553 7.22907 5.45581 7.02563C5.45581 6.39663 5.95681 5.47363 7.00381 5.47363C8.05081 5.47363 8.54681 6.39663 8.55081 7.02563C8.55081 7.65463 8.04981 8.57463 7.00381 8.57463L7.003 8.575ZM8.34 18.339H5.666V9.75H8.34V18.339ZM19.67 3H4.329C3.593 3 3 3.58 3 4.297V19.703C3 20.42 3.594 21 4.328 21H19.666C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3H19.67Z" fill="currentColor"/></svg>,
  <svg key="ig" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1689 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="currentColor"/></svg>,
  <svg key="x" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M14.0598 18L11.1622 13.6855L7.53467 18H6L10.4813 12.6715L6 6H9.94016L12.6712 10.0664L16.093 6H17.6277L13.3543 11.0817L18 18H14.0598ZM15.7689 16.7836H14.7245L8.18909 7.21639H9.23352L11.8412 11.0818L12.3748 11.8963L15.7689 16.7836Z" fill="white"/></svg>,
]

export default function FooterAlt() {
  const stickyRef = useRef(null)

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
    if (stickyRef.current) obs.observe(stickyRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="fa-section">
      {/* CTA Block */}
      <div className="fa-cta-block">
        <div className="fa-cta-sticky" ref={stickyRef}>
          <div className="fa-cta-text">Let's start now</div>
          <div className="fa-cta-buttons">
            <a href="#" className="fa-btn-primary">
              <span className="fa-btn-text">Contact Now</span>
              <span className="fa-btn-arrow"><ArrowIcon /></span>
            </a>
            <a href="#" className="fa-btn-secondary">
              <span>Schedule a Call</span>
              <span className="fa-btn-call-icon"><CallIcon /></span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="fa-footer-content">
        <div className="fa-footer-inner">
          <div className="fa-footer-left">
            <div className="fa-quick-contact">
              <div className="fa-quick-label">Quick Contact:</div>
              <a href="mailto:atharva@contact.com" className="fa-contact-link">
                atharva@contact.com
              </a>
            </div>
            <div className="fa-social-icons">
              {socialIcons.map((icon, i) => (
                <a key={i} href="#" className="fa-social-link">{icon}</a>
              ))}
            </div>
          </div>

          <div className="fa-footer-right">
            <div className="fa-footer-list">
              <div className="fa-footer-label">Main Pages</div>
              {mainLinks.map((l) => (
                <a key={l.label} href={l.href} className="fa-footer-link">{l.label}</a>
              ))}
            </div>
            <div className="fa-footer-list">
              <div className="fa-footer-label">More Pages</div>
              {moreLinks.map((l) => (
                <a key={l.label} href={l.href} className="fa-footer-link">{l.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="fa-footer-bottom">
          <div className="fa-copyright">
            Copyright © Atharva K. All Rights Reserved
          </div>
        </div>
      </div>
    </section>
  )
}
