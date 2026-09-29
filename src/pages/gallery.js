import { useEffect, useState } from 'react';
import GodhamHead from '@/components/Godham/GodhamHead';
import GodhamLayout from '@/components/Godham/GodhamLayout';
import { fetchGallery } from '@/components/Godham/lib/api';
import { FALLBACK_GALLERY } from '@/components/Godham/constants';
import { devaClass } from '@/components/Godham/lib/text';

export default function GodhamGalleryPage() {
  const [images, setImages] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetchGallery().then((imgs) => {
      if (mounted) setImages(imgs);
    });
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  const showFallback = !images || images.length === 0;
  const items = showFallback
    ? FALLBACK_GALLERY
    : images.map((img) => ({ url: img.url, title: img.caption || 'हमारी गौशाला से', caption: img.caption || 'गोधाम ट्रस्ट में रोज़ की ज़िंदगी का एक पल।' }));

  return (
    <>
      <GodhamHead title="Gallery — Godham Trust" description="Photos from daily life at Godham Trust's goshalas." path="/gallery" />
      <GodhamLayout>
        <section className="gallery-page-head">
          <div className="wrap section-head">
            <span className="eyebrow">Photo Gallery</span>
            <h2>Life at Godham Trust, in pictures.</h2>
            <p className="deva">
              {showFallback
                ? 'नीचे सैंपल फोटो दिखाई गई हैं — एडमिन पैनल से अपलोड की गई असली तस्वीरें यहाँ अपने आप दिखेंगी।'
                : `हमारी टीम द्वारा साझा की गई ${items.length} तस्वीर${items.length === 1 ? '' : 'ें'}।`}
            </p>
          </div>
        </section>
        <section className="gallery">
          <div className="wrap">
            <div className="full-gallery-grid">
              {items.map((item, i) => (
                <div className="gallery-card" key={i}>
                  <div className="art" style={{ cursor: 'pointer' }} onClick={() => setLightbox(item)}>
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
      </GodhamLayout>
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" aria-label="Close">✕</button>
          <img src={lightbox.url} alt={lightbox.title} />
        </div>
      )}
    </>
  );
}
