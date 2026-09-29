export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <span className="eyebrow" style={{ color: 'var(--saffron)' }}>Registered Charitable Trust</span>
            <h1>Serve Cows & Elders.<br />Earn <em>Blessings.</em></h1>
            <p className="lead deva">
              गोधाम ट्रस्ट बचाई गई, घायल, बूढ़ी और लावारिस गायों के लिए गौशाला चलाता है, और एक
              वृद्धाश्रम जहाँ ज़रूरतमंद बुज़ुर्गों की सेवा होती है — रोज़ का चारा, इलाज और जीवन भर
              के लिए एक सुरक्षित घर। आपका हर योगदान सीधे उनकी देखभाल में लगता है।
            </p>
            <div className="hero-ctas">
              <a href="#donate" className="btn btn-primary">Donate Now →</a>
              <a href="#about" className="btn btn-light">Our Story</a>
            </div>
            <div className="hero-stats">
              <div><div className="num">850+</div><div className="lbl deva">गायें आश्रित</div></div>
              <div><div className="num">40+</div><div className="lbl deva">बुज़ुर्गों की सेवा</div></div>
              <div><div className="num">12,000+</div><div className="lbl deva">किग्रा चारा / माह</div></div>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-photo-card">
              <img
                src="https://images.pexels.com/photos/30147594/pexels-photo-30147594.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mother cow and calf in a rural village"
                fetchPriority="high"
                decoding="async"
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
