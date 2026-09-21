export default function Seva() {
  return (
    <section className="seva" id="seva">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow" style={{ color: 'var(--saffron)' }}>Sponsor a Seva</span>
          <h2>Choose exactly what your donation supports.</h2>
          <p>Every rupee — for Gau Seva or Vridhaashram Seva — is tracked against real feed, medicine and care — here&apos;s what your contribution can cover.</p>
        </div>
        <div className="seva-cols">
          <div className="seva-col">
            <h4 className="seva-col-title">Gau Seva — Feed</h4>
            <div className="seva-row"><span>Green fodder</span><span>₹6 / kg</span></div>
            <div className="seva-row"><span>Dry fodder (bhusa)</span><span>₹9 / kg</span></div>
            <div className="seva-row"><span>Grains (wheat, bajra, jowar)</span><span>₹22 / kg</span></div>
            <div className="seva-row"><span>Jaggery (gud)</span><span>₹42 / kg</span></div>
            <div className="seva-row"><span>Oil cake / cattle feed</span><span>₹35 / kg</span></div>
          </div>
          <div className="seva-col">
            <h4 className="seva-col-title">Gau Seva — Care</h4>
            <div className="seva-row"><span>First aid kit / cow</span><span>₹350</span></div>
            <div className="seva-row"><span>Routine check-up visit</span><span>₹800</span></div>
            <div className="seva-row"><span>Emergency treatment</span><span>₹2,500</span></div>
            <div className="seva-row"><span>Sponsor one cow / month</span><span>₹3,000</span></div>
            <div className="seva-row"><span>Sponsor one cow / year</span><span>₹32,000</span></div>
          </div>
          <div className="seva-col">
            <h4 className="seva-col-title">Vridhaashram Seva</h4>
            <div className="seva-row"><span>One meal for an elder</span><span>₹80</span></div>
            <div className="seva-row"><span>Winter blanket & essentials</span><span>₹500</span></div>
            <div className="seva-row"><span>Medical check-up / elder</span><span>₹400</span></div>
            <div className="seva-row"><span>Sponsor one elder / month</span><span>₹2,500</span></div>
            <div className="seva-row"><span>Sponsor one elder / year</span><span>₹28,000</span></div>
          </div>
        </div>
        <p className="seva-note">Prices shown are indicative — update them from the codebase to match your actual current rates. Donors who sponsor a cow or an elder receive photo updates and are welcome to visit in person.</p>
      </div>
    </section>
  );
}
