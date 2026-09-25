import { useEffect, useRef, useState } from 'react';

const STATS = [
  { target: 800, suffix: '+', label: 'Cows to be sheltered in our goshalas' },
  { target: 12000, suffix: '+', label: 'Kg of fodder to be served monthly' },
  { target: 100, suffix: '+', label: 'Elders to be cared for at our Vridhaashram' },
  { target: 5, suffix: '+', label: 'New goshalas & Vridhaashram centres to open' },
  // { target: 15, suffix: '+', label: 'Years of continuous Seva' },
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
          <p>
            With your support, Godham Trust aims to shelter more abandoned cows and give more
            destitute elders a safe, dignified home — here is what we are working toward in the
            coming years.
          </p>
        </div>
        <div className="impact-grid">
          {STATS.map((s) => (
            <div key={s.label}>
              <Counter target={s.target} suffix={s.suffix} />
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
