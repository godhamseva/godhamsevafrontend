import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchGallery } from '../lib/api';
import { FALLBACK_GALLERY } from '../constants';
import { devaClass } from '../lib/text';

export default function GalleryPreview() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetchGallery().then((imgs) => {
      if (mounted) setImages(imgs);
    });
    return () => { mounted = false; };
  }, []);

  const showFallback = !images || images.length === 0;
  const items = showFallback
    ? FALLBACK_GALLERY
    : images.slice(0, 6).map((img) => ({ url: img.url, title: img.caption || 'हमारी गौशाला से', caption: img.caption || 'गोधाम ट्रस्ट में रोज़ की ज़िंदगी का एक पल।' }));

  return (
    <section className="gallery" id="gallery">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Life at Our Goshala</span>
          <h2>A day in the life of our cows.</h2>
          <p className="deva">
            {showFallback
              ? 'नीचे सैंपल फोटो दिखाई गई हैं — एडमिन पैनल से अपलोड की गई असली तस्वीरें यहाँ अपने आप दिखेंगी।'
              : 'गोधाम ट्रस्ट की रोज़ की ज़िंदगी के असली पल, हमारी टीम द्वारा साझा किए गए।'}
          </p>
        </div>
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
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <Link href="/gallery" className="btn btn-outline">View Full Gallery →</Link>
        </div>
      </div>
    </section>
  );
}
