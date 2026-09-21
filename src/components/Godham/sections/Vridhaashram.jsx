import { useEffect, useState } from 'react';
import { fetchGallery } from '../lib/api';
import { FALLBACK_VRIDHAASHRAM } from '../constants';

const CARDS = [
  {
    title: 'Safe Shelter & Stay',
    desc: 'Clean, comfortable rooms with round-the-clock care staff for elderly residents who have nowhere else to call home.',
    icon: (
      <svg viewBox="0 0 48 48"><rect x="8" y="20" width="32" height="20" rx="2" fill="none" stroke="#5a3a1f" strokeWidth="2.5" /><path d="M6 20 24 6l18 14" fill="none" stroke="#c26a1e" strokeWidth="2.5" strokeLinejoin="round" /></svg>
    ),
  },
  {
    title: 'Nutritious Meals',
    desc: 'Fresh, balanced meals prepared daily, tailored to the dietary and health needs of our elders.',
    icon: (
      <svg viewBox="0 0 48 48"><path d="M10 22a14 14 0 0 0 28 0Z" fill="none" stroke="#5c7c32" strokeWidth="2.5" strokeLinejoin="round" /><path d="M10 22h28M24 22V8" stroke="#5c7c32" strokeWidth="2.5" strokeLinecap="round" /></svg>
    ),
  },
  {
    title: 'Medical & Geriatric Care',
    desc: 'Regular health check-ups, medication management and emergency medical support for age-related needs.',
    icon: (
      <svg viewBox="0 0 48 48"><path d="M24 42S6 30 6 17a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 13-18 25-18 25Z" fill="none" stroke="#d9542f" strokeWidth="2.5" strokeLinejoin="round" /></svg>
    ),
  },
  {
    title: 'Companionship & Activities',
    desc: 'Bhajans, community gatherings and daily companionship so no elder has to spend their years in loneliness.',
    icon: (
      <svg viewBox="0 0 48 48"><circle cx="16" cy="16" r="6" fill="none" stroke="#c26a1e" strokeWidth="2.5" /><circle cx="32" cy="16" r="6" fill="none" stroke="#5c7c32" strokeWidth="2.5" /><path d="M4 40c0-7 5-12 12-12s12 5 12 12M20 40c0-7 5-12 12-12s12 5 12 12" fill="none" stroke="#5a3a1f" strokeWidth="2.5" /></svg>
    ),
  },
];

export default function Vridhaashram() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetchGallery('vridhaashram').then((imgs) => {
      if (mounted) setImages(imgs);
    });
    return () => { mounted = false; };
  }, []);

  const showFallback = !images || images.length === 0;
  const items = showFallback
    ? FALLBACK_VRIDHAASHRAM
    : images.slice(0, 6).map((img) => ({
        url: img.url,
        title: img.caption || 'From our Vridhaashram',
        caption: img.caption || 'A moment from daily life at our Vridhaashram.',
      }));

  return (
    <section className="vridhaashram" id="vridhaashram">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Our Elder Care Home</span>
          <h2>Vridhaashram — a home for our elders.</h2>
          <p>
            Alongside Gau Seva, Godham Trust runs a Vridhaashram — an old age home caring for
            elderly and destitute senior citizens with shelter, nutritious meals, medical care
            and companionship, so they can live out their years with dignity.
          </p>
        </div>
        <div className="prog-grid">
          {CARDS.map((c) => (
            <div className="prog-card" key={c.title}>
              <div className="prog-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 40, marginBottom: 16, color: '#4a4033', fontSize: 15 }}>
          {showFallback
            ? 'Sample photos shown below — real photographs uploaded from the admin panel will appear here automatically.'
            : 'Real moments from our Vridhaashram, shared by our team.'}
        </p>
        <div className="gallery-grid">
          {items.map((item, i) => (
            <div className="gallery-card" key={i}>
              <div className="art">
                <img src={item.url} alt={item.title} loading="lazy" />
              </div>
              <div className="cap">
                <h4>{item.title}</h4>
                <p>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
