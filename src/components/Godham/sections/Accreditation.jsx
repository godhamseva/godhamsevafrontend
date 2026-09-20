const ITEMS = [
  { badge: '80G', title: '80G Registered', desc: 'Donations are eligible for tax exemption under the Income Tax Act, 1961.' },
  { badge: '12A', title: '12A Registered Trust', desc: 'Registered as a public charitable trust for social welfare activities.' },
  { badge: '✓', title: 'Annual Audit', desc: 'Financials are independently audited every year and available on request.' },
  { badge: 'UPI', title: 'Secure Payments', desc: 'All donations are processed through verified, secure payment gateways.' },
];

export default function Accreditation() {
  return (
    <section className="accred">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Trust & Transparency</span>
          <h2 style={{ fontSize: 'clamp(24px,3vw,32px)' }}>Registration & compliance.</h2>
          <p>Update these with your trust&apos;s real registration numbers and certificates.</p>
        </div>
        <div className="accred-grid">
          {ITEMS.map((it) => (
            <div className="accred-card" key={it.title}>
              <div className="badge">{it.badge}</div>
              <h4>{it.title}</h4>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
