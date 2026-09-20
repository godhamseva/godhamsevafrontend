const MAPS_LINK =
  'https://www.google.com/maps/place/22%C2%B046\'11.0%22N+75%C2%B053\'41.2%22E/@22.7697158,75.8921966,17z/data=!3m1!4b1!4m4!3m3!8m2!3d22.7697158!4d75.8947715?hl=en&entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D';
const MAP_EMBED_SRC = 'https://www.google.com/maps?q=22.7697158,75.8947715&z=16&output=embed';

export default function LocateUs() {
  return (
    <section className="locate" id="locate">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Visit Us</span>
          <h2>Locate our goshala.</h2>
          <p>Come meet the cows you support. Click the map to open it directly in Google Maps for directions.</p>
        </div>
        <div className="locate-map-wrap">
          <iframe
            src={MAP_EMBED_SRC}
            title="Godham Trust location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="locate-map-overlay"
            aria-label="Open Godham Trust location in Google Maps"
          >
            <span>📍 Open in Google Maps →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
