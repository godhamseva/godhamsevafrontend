import { useEffect, useState } from 'react';
import GodhamHead from '@/components/Godham/GodhamHead';
import GodhamLayout from '@/components/Godham/GodhamLayout';
import { fetchGallery } from '@/components/Godham/lib/api';
import { FALLBACK_GALLERY } from '@/components/Godham/constants';

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
    : images.map((img) => ({ url: img.url, title: img.caption || 'From our goshala', caption: img.caption || 'A moment from daily life at Godham Trust.' }));

  return (
    <>
      <GodhamHead title="Gallery — Godham Trust" description="Photos from daily life at Godham Trust's goshalas." path="/gallery" />
      <GodhamLayout>
        <section className="gallery-page-head">
          <div className="wrap section-head">
            <span className="eyebrow">Photo Gallery</span>
            <h2>Life at Godham Trust, in pictures.</h2>
            <p>
              {showFallback
                ? 'Sample photos shown below — real photographs uploaded from the admin panel will appear here automatically.'
                : `${items.length} photo${items.length === 1 ? '' : 's'} shared by our team.`}
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
                    <h4>{item.title}</h4>
                    <p>{item.caption}</p>
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
