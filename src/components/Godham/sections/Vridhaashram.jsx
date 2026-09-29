import { useEffect, useState } from 'react';
import { fetchGallery } from '../lib/api';
import { FALLBACK_VRIDHAASHRAM } from '../constants';
import { devaClass } from '../lib/text';

const CARDS = [
  {
    title: 'सुरक्षित आश्रय',
    desc: 'उन बुज़ुर्ग निवासियों के लिए साफ, आरामदायक कमरे और चौबीस घंटे की देखभाल, जिनके पास घर कहने को और कोई जगह नहीं है।',
    icon: (
      <svg viewBox="0 0 48 48"><rect x="8" y="20" width="32" height="20" rx="2" fill="none" stroke="#5a3a1f" strokeWidth="2.5" /><path d="M6 20 24 6l18 14" fill="none" stroke="#c26a1e" strokeWidth="2.5" strokeLinejoin="round" /></svg>
    ),
  },
  {
    title: 'पौष्टिक भोजन',
    desc: 'रोज़ ताज़ा, संतुलित भोजन जो हमारे बुज़ुर्गों की आहार और सेहत की ज़रूरतों के हिसाब से बनाया जाता है।',
    icon: (
      <svg viewBox="0 0 48 48"><path d="M10 22a14 14 0 0 0 28 0Z" fill="none" stroke="#5c7c32" strokeWidth="2.5" strokeLinejoin="round" /><path d="M10 22h28M24 22V8" stroke="#5c7c32" strokeWidth="2.5" strokeLinecap="round" /></svg>
    ),
  },
  {
    title: 'चिकित्सा और बुज़ुर्ग देखभाल',
    desc: 'नियमित स्वास्थ्य जांच, दवाइयों का ध्यान और उम्र-संबंधी ज़रूरतों के लिए आपातकालीन चिकित्सा सहायता।',
    icon: (
      <svg viewBox="0 0 48 48"><path d="M24 42S6 30 6 17a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 13-18 25-18 25Z" fill="none" stroke="#d9542f" strokeWidth="2.5" strokeLinejoin="round" /></svg>
    ),
  },
  {
    title: 'साथी और गतिविधियाँ',
    desc: 'भजन, सामुदायिक मिलन और रोज़ की साथी, ताकि कोई भी बुज़ुर्ग अपने साल अकेलेपन में न बिताए।',
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
        title: img.caption || 'हमारे वृद्धाश्रम से',
        caption: img.caption || 'हमारे वृद्धाश्रम में रोज़ की ज़िंदगी का एक पल।',
      }));

  return (
    <section className="vridhaashram" id="vridhaashram">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Our Elder Care Home</span>
          <h2>Vridhaashram — a home for our elders.</h2>
          <p className="deva">
            गौ सेवा के साथ साथ, गोधाम ट्रस्ट एक वृद्धाश्रम भी चलाता है — जहाँ बुज़ुर्ग और ज़रूरतमंद
            सीनियर सिटीज़न को आश्रय, पौष्टिक भोजन, चिकित्सा देखभाल और साथी दिया जाता है, ताकि वो
            सम्मान के साथ अपने साल बिता सकें।
          </p>
        </div>
        <div className="prog-grid">
          {CARDS.map((c) => (
            <div className="prog-card" key={c.title}>
              <div className="prog-icon">{c.icon}</div>
              <h3 className={devaClass(c.title)}>{c.title}</h3>
              <p className={devaClass(c.desc)}>{c.desc}</p>
            </div>
          ))}
        </div>

        <p className="deva" style={{ marginTop: 40, marginBottom: 16, color: '#4a4033', fontSize: 15 }}>
          {showFallback
            ? 'नीचे सैंपल फोटो दिखाई गई हैं — एडमिन पैनल से अपलोड की गई असली तस्वीरें यहाँ अपने आप दिखेंगी।'
            : 'हमारे वृद्धाश्रम के असली पल, हमारी टीम द्वारा साझा किए गए।'}
        </p>
        <div className="gallery-grid">
          {items.map((item, i) => (
            <div className="gallery-card" key={i}>
              <div className="art">
                <img src={item.url} alt={item.title} loading="lazy" />
              </div>
              <div className="cap">
                <h4 className={devaClass(item.title)}>{item.title}</h4>
                <p className={devaClass(item.caption)}>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
