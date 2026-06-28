// src/components/About.js
function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-text">
          <span className="eyebrow">Our Philosophy</span>
          <h2>Skin Health is <em>Personal</em></h2>
          <p>At DermaCare, we believe every skin tells a different story. Our approach combines the precision of clinical dermatology with the warmth of personalised care.</p>
          <div className="about-pillars">
            <div className="pillar"><i className="fa-solid fa-atom"></i><span>Evidence-Based</span></div>
            <div className="pillar"><i className="fa-solid fa-heart-pulse"></i><span>Personalised</span></div>
            <div className="pillar"><i className="fa-solid fa-seedling"></i><span>Sustainable</span></div>
          </div>
        </div>
        <div className="about-visual">
          {[
            { num: "01", title: "Consult",  desc: "Meet your skin expert virtually" },
            { num: "02", title: "Diagnose", desc: "Get a full skin health analysis" },
            { num: "03", title: "Treat",    desc: "Follow your personalised protocol" },
          ].map(c => (
            <div key={c.num} className="about-card">
              <div className="about-number">{c.num}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
