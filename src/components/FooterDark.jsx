function FooterLink({ label, href = '#' }) {
  return (
    <a href={href} className="fd-link">
      <div className="fd-link-inner">
        <span className="fd-link-text">{label}</span>
        <span className="fd-link-text">{label}</span>
      </div>
    </a>
  )
}

export default function FooterDark() {
  return (
    <section className="fd-section">
      <div className="fd-divider" />
      <div className="fd-top">
        <div className="fd-wrapper">
          <div className="fd-grid">
            <div className="fd-col">
              <div className="fd-title">Pages</div>
              <div className="fd-links">
                <FooterLink label="Home" href="/" />
                <FooterLink label="About" href="/about-me" />
                <FooterLink label="Works" href="/projects" />
                <FooterLink label="Contact" />
              </div>
            </div>
            <div className="fd-col">
              <div className="fd-title">Recent Works</div>
              <div className="fd-links">
                <FooterLink label="Pizza Hut" />
                <FooterLink label="SwapEasy" />
                <FooterLink label="Nexus Malls" />
                <FooterLink label="Fynd Express" />
              </div>
            </div>
            <div className="fd-col">
              <div className="fd-title">Socials</div>
              <div className="fd-links">
                <FooterLink label="Instagram" />
                <FooterLink label="LinkedIn" />
                <FooterLink label="Twitter" />
              </div>
            </div>
            <div className="fd-col">
              <div className="fd-title">Newsletter</div>
              <p className="fd-newsletter-text">
                Stay updated on our latest insights, new projects, and the next steps of our design journey together.
              </p>
              <div className="fd-email-wrap">
                <input type="email" placeholder="Enter your email" className="fd-email-input" />
                <button className="fd-email-btn" aria-label="Submit">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10.7813 7.33312L7.20534 3.75712L8.14801 2.81445L13.3333 7.99979L8.14801 13.1851L7.20534 12.2425L10.7813 8.66645H2.66663V7.33312H10.7813Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
              <div className="fd-credits">
                <span>Developed by <strong>Atharva K.</strong></span>
                <span className="fd-sep">|</span>
                <span>Powered by <strong>React</strong></span>
              </div>
              <div className="fd-utility-links">
                <a href="#" className="fd-util-link">License</a>
                <span className="fd-sep">|</span>
                <a href="#" className="fd-util-link">Style Guide</a>
                <span className="fd-sep">|</span>
                <a href="#" className="fd-util-link">Changelog</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fd-bottom">
        <div className="fd-big-text">Atharva K.</div>
      </div>
    </section>
  )
}
