const DONORS = [
  { initial: 'R', name: 'Ramesh Patel', desc: 'चारे के लिए दान दिया', when: '2 दिन पहले', amt: '₹2,100' },
  { initial: 'S', name: 'Sunita Sharma', desc: 'एक गाय प्रायोजित की', when: '5 दिन पहले', amt: '₹3,000' },
  { initial: 'A', name: 'Anand Joshi', desc: 'चिकित्सा के लिए दान दिया', when: '1 हफ्ते पहले', amt: '₹5,100' },
  { initial: 'M', name: 'Meena Verma', desc: 'चारे के लिए दान दिया', when: '2 हफ्ते पहले', amt: '₹1,100' },
];

export default function Donors() {
  return (
    <section className="donors">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Respected Contributors</span>
          <h2 style={{ fontSize: 'clamp(24px,3vw,32px)' }}>Recent Gau Seva by our donors.</h2>
        </div>
        <div className="donor-list">
          {DONORS.map((d) => (
            <div className="donor-row" key={d.name}>
              <div className="donor-avatar">{d.initial}</div>
              <div className="donor-info deva"><b>{d.name}</b> {d.desc} &middot; {d.when}</div>
              <div className="donor-amt">{d.amt}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
