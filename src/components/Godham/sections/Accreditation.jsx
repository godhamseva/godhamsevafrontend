const ITEMS = [
  { badge: '80G', title: '80G पंजीकृत', desc: 'Income Tax Act, 1961 के तहत दान पर टैक्स छूट उपलब्ध है।' },
  { badge: '12A', title: '12A पंजीकृत ट्रस्ट', desc: 'सामाजिक कल्याण गतिविधियों के लिए एक सार्वजनिक धर्मार्थ ट्रस्ट के रूप में पंजीकृत।' },
  { badge: '✓', title: 'वार्षिक ऑडिट', desc: 'वित्तीय विवरण हर साल स्वतंत्र रूप से ऑडिट किए जाते हैं और मांगने पर उपलब्ध हैं।' },
  { badge: 'UPI', title: 'सुरक्षित भुगतान', desc: 'सभी दान सत्यापित, सुरक्षित payment gateways के through किए जाते हैं।' },
];

export default function Accreditation() {
  return (
    <section className="accred">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Trust & Transparency</span>
          <h2 style={{ fontSize: 'clamp(24px,3vw,32px)' }}>Registration & compliance.</h2>
          <p className="deva">इन्हें अपने ट्रस्ट के असली पंजीकरण नंबर और certificates से update करें।</p>
        </div>
        <div className="accred-grid">
          {ITEMS.map((it) => (
            <div className="accred-card" key={it.title}>
              <div className="badge">{it.badge}</div>
              <h4 className="deva">{it.title}</h4>
              <p className="deva">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
