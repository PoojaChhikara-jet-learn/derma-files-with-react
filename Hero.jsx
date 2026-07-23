// src/components/Hero.js
function Hero({ openAuth }) {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
        <div className="hero-blob blob-3"></div>
      </div>

      <div className="hero-content">
        <span className="hero-eyebrow">Science-Backed Skincare</span>
        <h1 className="hero-title">
          Your Skin.<br /><em>Our Science.</em>
        </h1>
        <p className="hero-body">
          Personalised dermatology consultations, expert-formulated treatments,
          and a science-backed approach to skin health — all in one place.
        </p>
        <div className="hero-cta">
          <button className="btn-solid large" onClick={() => openAuth("signup")}>
            Start Your Journey
          </button>
          <a href="#treatments" className="btn-text">
            View Treatments <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat"><span>12k+</span><p>Happy Clients</p></div>
          <div className="stat"><span>98%</span><p>Satisfaction</p></div>
          <div className="stat"><span>50+</span><p>Expert Derms</p></div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card floating">
          <div className="hcard-icon"><i className="fa-solid fa-flask"></i></div>
          <h4>Lab Tested</h4>
          <p>Every formula clinically verified</p>
        </div>
        <div className="hero-card floating delay-1">
          <div className="hcard-icon leaf"><i className="fa-solid fa-leaf"></i></div>
          <h4>Natural Origin</h4>
          <p>Plant-based, dermatologist approved</p>
        </div>
        <div className="hero-card floating delay-2">
          <div className="hcard-icon sun"><i className="fa-solid fa-sun"></i></div>
          <h4>SPF Science</h4>
          <p>Broad-spectrum UV protection</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
