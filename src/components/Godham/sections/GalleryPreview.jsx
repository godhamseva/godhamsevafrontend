import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchGallery } from '../lib/api';
import { FALLBACK_GALLERY } from '../constants';

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
    : images.slice(0, 6).map((img) => ({ url: img.url, title: img.caption || 'From our goshala', caption: img.caption || 'A moment from daily life at Godham Trust.' }));

  return (
    <section className="gallery" id="gallery">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Life at Our Goshala</span>
          <h2>A day in the life of our cows.</h2>
          <p>
            {showFallback
              ? 'Sample photos shown below — real photographs uploaded from the admin panel will appear here automatically.'
              : 'Real moments from daily life at Godham Trust, shared by our team.'}
          </p>
        </div>
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
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <Link href="/gallery" className="btn btn-outline">View Full Gallery →</Link>
        </div>
      </div>
    </section>
  );
}
