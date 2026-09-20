export default function Seva() {
  return (
    <section className="seva" id="seva">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow" style={{ color: 'var(--saffron)' }}>Sponsor a Seva</span>
          <h2>Choose exactly what your donation feeds.</h2>
          <p>Every rupee of Gau Seva is tracked against real feed, medicine and care — here&apos;s what your contribution can cover.</p>
        </div>
        <div className="seva-cols">
          <div className="seva-col">
            <div className="seva-row"><span>Green fodder</span><span>₹6 / kg</span></div>
            <div className="seva-row"><span>Dry fodder (bhusa)</span><span>₹9 / kg</span></div>
            <div className="seva-row"><span>Grains (wheat, bajra, jowar)</span><span>₹22 / kg</span></div>
            <div className="seva-row"><span>Jaggery (gud)</span><span>₹42 / kg</span></div>
            <div className="seva-row"><span>Oil cake / cattle feed</span><span>₹35 / kg</span></div>
          </div>
          <div className="seva-col">
            <div className="seva-row"><span>First aid kit / cow</span><span>₹350</span></div>
            <div className="seva-row"><span>Routine check-up visit</span><span>₹800</span></div>
            <div className="seva-row"><span>Emergency treatment</span><span>₹2,500</span></div>
            <div className="seva-row"><span>Sponsor one cow / month</span><span>₹3,000</span></div>
            <div className="seva-row"><span>Sponsor one cow / year</span><span>₹32,000</span></div>
          </div>
        </div>
        <p className="seva-note">Prices shown are indicative — update them from the codebase to match your goshala&apos;s actual current rates. Donors who sponsor a full cow receive photo updates and are welcome to visit and meet their cow.</p>
      </div>
    </section>
  );
}
