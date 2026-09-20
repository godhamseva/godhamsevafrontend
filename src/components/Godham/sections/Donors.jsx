const DONORS = [
  { initial: 'R', name: 'Ramesh Patel', desc: 'donated for feed', when: '2 days ago', amt: '₹2,100' },
  { initial: 'S', name: 'Sunita Sharma', desc: 'sponsored a cow', when: '5 days ago', amt: '₹3,000' },
  { initial: 'A', name: 'Anand Joshi', desc: 'donated for medical care', when: '1 week ago', amt: '₹5,100' },
  { initial: 'M', name: 'Meena Verma', desc: 'donated for feed', when: '2 weeks ago', amt: '₹1,100' },
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
              <div className="donor-info"><b>{d.name}</b> {d.desc} &middot; {d.when}</div>
              <div className="donor-amt">{d.amt}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
