export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <span className="eyebrow" style={{ color: 'var(--saffron)' }}>Registered Charitable Trust</span>
            <h1>Serve Cows & Elders.<br />Earn <em>Blessings.</em></h1>
            <p className="lead">
              Godham Trust runs shelter homes (goshalas) for rescued, injured, aged and abandoned
              cows, and a Vridhaashram caring for destitute elderly senior citizens — providing
              daily feed, medical care and a safe home for life. Every contribution goes directly
              to their care.
            </p>
            <div className="hero-ctas">
              <a href="#donate" className="btn btn-primary">Donate Now →</a>
              <a href="#about" className="btn btn-light">Our Story</a>
            </div>
            <div className="hero-stats">
              <div><div className="num">850+</div><div className="lbl">Cows sheltered</div></div>
              <div><div className="num">40+</div><div className="lbl">Elders cared for</div></div>
              <div><div className="num">12,000+</div><div className="lbl">Kg feed / month</div></div>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-photo-card">
              <img
                src="https://images.pexels.com/photos/30147594/pexels-photo-30147594.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mother cow and calf in a rural village"
              />
              <span>Mother & calf, safe together</span>
            </div>
          </div>
        </div>
      </section>
      <div className="garland" style={{ backgroundColor: 'var(--brown-deep)' }}></div>
    </>
  );
}
