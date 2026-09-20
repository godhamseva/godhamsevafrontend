import { useEffect, useRef, useState } from 'react';

const STATS = [
  { target: 850, suffix: '+', label: 'Cows currently sheltered' },
  { target: 12000, suffix: '+', label: 'Kg of fodder served monthly' },
  { target: 3, suffix: '', label: 'Goshalas across the region' },
  { target: 15, suffix: '+', label: 'Years of continuous Gau Seva' },
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
            <span className="eyebrow">Our Impact</span>
            <h2 style={{ fontSize: 'clamp(24px,3vw,34px)' }}>Gau Seva, in numbers.</h2>
          </div>
          <p>
            Since our founding, Godham Trust has rescued, sheltered and cared for cows abandoned
            on streets and highways, giving them a safe, dignified home for the rest of their lives.
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
