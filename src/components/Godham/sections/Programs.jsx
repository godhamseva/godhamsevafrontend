const PROGRAMS = [
  {
    title: 'Rescue & Rehabilitation',
    desc: 'Round-the-clock rescue of injured, abandoned and stray cows from roads and slaughter transport.',
    icon: (
      <svg viewBox="0 0 48 48"><path d="M8 30 20 12 26 24 30 16 40 30Z" fill="none" stroke="#c26a1e" strokeWidth="2.5" strokeLinejoin="round" /><path d="M8 30h32" stroke="#5a3a1f" strokeWidth="2.5" /></svg>
    ),
  },
  {
    title: 'Daily Feed (Gau Aahar)',
    desc: 'Green fodder, dry grass, grains and jaggery served fresh, twice daily, to every cow in shelter.',
    icon: (
      <svg viewBox="0 0 48 48"><path d="M24 6c8 0 14 8 14 18s-6 18-14 18-14-8-14-18S16 6 24 6Z" fill="none" stroke="#5c7c32" strokeWidth="2.5" /><path d="M24 18v14M18 25h12" stroke="#5c7c32" strokeWidth="2.5" strokeLinecap="round" /></svg>
    ),
  },
  {
    title: 'Medical Care (Gau Chikitsa)',
    desc: 'Resident veterinary staff, routine check-ups, emergency treatment and surgical support on site.',
    icon: (
      <svg viewBox="0 0 48 48"><path d="M24 42S6 30 6 17a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 13-18 25-18 25Z" fill="none" stroke="#d9542f" strokeWidth="2.5" strokeLinejoin="round" /></svg>
    ),
  },
  {
    title: 'Goshala Infrastructure',
    desc: 'Clean sheds, shaded grazing fields, water lines and fans that keep our cows healthy through every season.',
    icon: (
      <svg viewBox="0 0 48 48"><rect x="8" y="20" width="32" height="20" rx="2" fill="none" stroke="#5a3a1f" strokeWidth="2.5" /><path d="M6 20 24 6l18 14" fill="none" stroke="#c26a1e" strokeWidth="2.5" strokeLinejoin="round" /></svg>
    ),
  },
  {
    title: 'Cow Adoption (Gau Palan)',
    desc: 'Sponsor a specific cow\'s food and care every month and receive regular updates and photos.',
    icon: (
      <svg viewBox="0 0 48 48"><circle cx="24" cy="14" r="7" fill="none" stroke="#c26a1e" strokeWidth="2.5" /><path d="M10 40c0-8 6-14 14-14s14 6 14 14" fill="none" stroke="#5a3a1f" strokeWidth="2.5" /></svg>
    ),
  },
  {
    title: 'Awareness & Outreach',
    desc: 'Community education on cow protection, organic Panchgavya farming and cruelty-free dairy practices.',
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
          <p>From rescue to lifelong shelter, every stage of a cow&apos;s care at Godham Trust is supported by donors like you.</p>
        </div>
        <div className="prog-grid">
          {PROGRAMS.map((p) => (
            <div className="prog-card" key={p.title}>
              <div className="prog-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href="#">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
