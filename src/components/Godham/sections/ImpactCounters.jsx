import { useEffect, useRef, useState } from 'react';

const STATS = [
  { target: 800, suffix: '+', label: 'गौशाला में गायों को आश्रय' },
  { target: 12000, suffix: '+', label: 'किग्रा चारा हर महीने' },
  { target: 100, suffix: '+', label: 'वृद्धाश्रम में बुज़ुर्गों की सेवा' },
  { target: 5, suffix: '+', label: 'नए गौशाला और वृद्धाश्रम केंद्र' },
];

function Counter({ target, suffix }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            const duration = 1400;
            const start = performance.now();
            const step = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.floor(eased * target));
              if (progress < 1) requestAnimationFrame(step);
              else setValue(target);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div className="num" ref={ref}>
      <span>{value.toLocaleString()}</span>
      <span className="plus">{suffix}</span>
    </div>
  );
}

export default function ImpactCounters() {
  return (
    <section className="impact">
      <div className="wrap">
        <div className="impact-head">
          <div>
            <span className="eyebrow">Looking Ahead</span>
            <h2 style={{ fontSize: 'clamp(24px,3vw,34px)' }}>Our future targets.</h2>
          </div>
          <p className="deva">
            आपके सहयोग से, गोधाम ट्रस्ट और ज़्यादा लावारिस गायों को आश्रय देना और और ज़्यादा
            ज़रूरतमंद बुज़ुर्गों को एक सुरक्षित, सम्मान भरा घर देना चाहता है — यह है जिसके लिए हम
            आने वाले सालों में काम कर रहे हैं।
          </p>
        </div>
        <div className="impact-grid">
          {STATS.map((s) => (
            <div key={s.label}>
              <Counter target={s.target} suffix={s.suffix} />
              <div className="lbl deva">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
