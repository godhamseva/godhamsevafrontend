import { devaClass } from '../lib/text';

const PROGRAMS = [
  {
    title: 'बचाव और पुनर्वास',
    desc: 'सड़कों और कसाईखाने ले जाने से घायल, लावारिस और आवारा गायों को चौबीस घंटे बचाया जाता है।',
    icon: (
      <svg viewBox="0 0 48 48"><path d="M8 30 20 12 26 24 30 16 40 30Z" fill="none" stroke="#c26a1e" strokeWidth="2.5" strokeLinejoin="round" /><path d="M8 30h32" stroke="#5a3a1f" strokeWidth="2.5" /></svg>
    ),
  },
  {
    title: 'Daily Feed (Gau Aahar)',
    desc: 'हर गाय को दिन में दो बार ताज़ा हरा चारा, सूखी घास, अनाज और गुड़ दिया जाता है।',
    icon: (
      <svg viewBox="0 0 48 48"><path d="M24 6c8 0 14 8 14 18s-6 18-14 18-14-8-14-18S16 6 24 6Z" fill="none" stroke="#5c7c32" strokeWidth="2.5" /><path d="M24 18v14M18 25h12" stroke="#5c7c32" strokeWidth="2.5" strokeLinecap="round" /></svg>
    ),
  },
  {
    title: 'Medical Care (Gau Chikitsa)',
    desc: 'स्थायी पशु चिकित्सक, नियमित जांच, आपातकालीन इलाज और स्थल पर शल्य सहायता।',
    icon: (
      <svg viewBox="0 0 48 48"><path d="M24 42S6 30 6 17a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 13-18 25-18 25Z" fill="none" stroke="#d9542f" strokeWidth="2.5" strokeLinejoin="round" /></svg>
    ),
  },
  {
    title: 'गौशाला ढांचा',
    desc: 'साफ शेड, छाया वाले चराई के मैदान, पानी की लाइनें और पंखे जो हर मौसम में गायों को स्वस्थ रखते हैं।',
    icon: (
      <svg viewBox="0 0 48 48"><rect x="8" y="20" width="32" height="20" rx="2" fill="none" stroke="#5a3a1f" strokeWidth="2.5" /><path d="M6 20 24 6l18 14" fill="none" stroke="#c26a1e" strokeWidth="2.5" strokeLinejoin="round" /></svg>
    ),
  },
  {
    title: 'Cow Adoption (Gau Palan)',
    desc: 'एक खास गाय के खाने और देखभाल को हर महीने प्रायोजित करें और नियमित अपडेट और फोटो पाएं।',
    icon: (
      <svg viewBox="0 0 48 48"><circle cx="24" cy="14" r="7" fill="none" stroke="#c26a1e" strokeWidth="2.5" /><path d="M10 40c0-8 6-14 14-14s14 6 14 14" fill="none" stroke="#5a3a1f" strokeWidth="2.5" /></svg>
    ),
  },
  {
    title: 'जागरूकता अभियान',
    desc: 'गौ रक्षा, ऑर्गेनिक पंचगव्य खेती और निर्दयता-मुक्त डेयरी तरीकों पर सामुदायिक शिक्षा।',
    icon: (
      <svg viewBox="0 0 48 48"><path d="M24 4 30 20 46 20 33 30 38 46 24 36 10 46 15 30 2 20 18 20Z" fill="none" stroke="#5c7c32" strokeWidth="2" /></svg>
    ),
  },
];

export default function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Our Work</span>
          <h2>How we care for our cows.</h2>
          <p className="deva">बचाव से लेकर जीवन भर के आश्रय तक, गोधाम ट्रस्ट में गाय की देखभाल का हर चरण आप जैसे दाताओं के साथ होता है।</p>
        </div>
        <div className="prog-grid">
          {PROGRAMS.map((p) => (
            <div className="prog-card" key={p.title}>
              <div className="prog-icon">{p.icon}</div>
              <h3 className={devaClass(p.title)}>{p.title}</h3>
              <p className={devaClass(p.desc)}>{p.desc}</p>
              <a href="#">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
