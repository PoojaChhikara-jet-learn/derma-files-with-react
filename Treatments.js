// src/components/Treatments.js
const TREATMENTS = [
  { icon: "fa-microscope",          title: "Skin Analysis",       desc: "AI-powered + dermatologist reviewed full skin health report.",    tag: "Diagnostic", featured: false },
  { icon: "fa-droplet",             title: "Hydration Therapy",   desc: "",          tag: "Treatment",  featured: true  },
  { icon: "fa-star",                title: "Anti-Aging Protocol", desc: "",  tag: "Advanced",   featured: false },
  { icon: "fa-shield-halved",       title: "Barrier Repair",      desc: "",   tag: "Restore",    featured: false },
  { icon: "fa-wand-magic-sparkles", title: "Brightening Peel",    desc: "",      tag: "Glow",       featured: false },
  { icon: "fa-user-doctor",         title: "Expert Consultation", desc: "1-on-1 video consult with board-certified dermatologists.",     tag: "Consult",    featured: false },
];

function Treatments() {
  return (
    <section className="treatments" id="treatments">
      <div className="section-header">
        <span className="eyebrow">What We Offer</span>
        <h2>Expert <em>Treatments</em></h2>
      </div>
      <div className="treatments-grid">
        {TREATMENTS.map(t => (
          <div key={t.title} className={`treatment-card ${t.featured ? "featured" : ""}`}>
            {t.featured && <div className="tc-badge">Most Popular</div>}
            <div className="tc-icon"><i className={`fa-solid ${t.icon}`}></i></div>
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
            <span className="tc-tag">{t.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Treatments;
