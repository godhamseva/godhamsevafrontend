export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div>
          <span className="eyebrow">About Godham Trust</span>
          <h2>A home for every mother cow — and every elder.</h2>
          <div className="about-art" aria-hidden="true">
            <img
              src="https://images.pexels.com/photos/30147589/pexels-photo-30147589.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Cow resting under a tree in a village"
              style={{ width: '100%', maxWidth: 340, borderRadius: 6, boxShadow: '0 20px 40px -18px rgba(58,36,16,0.35)' }}
            />
          </div>
        </div>
        <div className="about-copy">
          <p>
            Godham Trust is a registered charitable trust dedicated to the rescue, shelter and
            lifelong care of cows — many of them injured, aged, abandoned, or rescued from
            slaughter transport. We believe that Gau Seva, service to the cow, is one of the most
            direct forms of compassion a community can practise.
          </p>
          <p>
            Our goshalas provide clean shelter, daily fodder, round-the-clock water, veterinary
            care and a peaceful place to live out their years. We also run outreach and awareness
            programmes encouraging cow protection and organic, cow-based farming in nearby villages.
          </p>
          <p>
            Alongside Gau Seva, we run a Vridhaashram — a home for elderly and destitute senior
            citizens who have nowhere else to turn, offering shelter, nutritious meals, medical
            care and companionship. To us, Manav Seva and Gau Seva are two sides of the same
            compassion.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#programs" className="btn btn-outline">See Our Work →</a>
            <a href="#vridhaashram" className="btn btn-outline">Vridhaashram →</a>
          </div>
          <div className="quote-block">
            <p className="deva">
              "जो प्रतिदिन गौ माता को चारा और जल अर्पित करता है, उसे अनंत पुण्य की प्राप्ति होती है।"
            </p>
            <span>Traditional teaching on Gau Seva</span>
          </div>
        </div>
      </div>
    </section>
  );
}
