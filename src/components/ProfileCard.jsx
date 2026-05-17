import heroImg from '../assets/thomas-hero.png'

export default function ProfileCard() {
  return (
    <div className="pcard-wrapper">
      <div className="pcard">
        <div className="pcard-photo-area">
          <p className="pcard-name">Atharva Keshattiwar</p>
          <div className="pcard-photo">
            <img src={heroImg} alt="Atharva Keshattiwar" />
          </div>
        </div>
        <div className="pcard-bottom">
          <div className="pcard-info">
            <div className="pcard-avatar">
              <img src={heroImg} alt="" />
            </div>
            <div className="pcard-handle">
              <span className="pcard-username">@atharva-k</span>
              <span className="pcard-platform">Linkedin</span>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/atharvakeshattiwar/"
            target="_blank"
            rel="noopener noreferrer"
            className="pcard-connect"
          >
            <span className="pcard-connect-plus">+</span>
            Connect
          </a>
        </div>
      </div>
    </div>
  )
}
