export default function Seva() {
  return (
    <section className="seva" id="seva">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow" style={{ color: 'var(--saffron)' }}>Sponsor a Seva</span>
          <h2>Choose exactly what your donation supports.</h2>
          <p className="deva">हर रुपया — गौ सेवा हो या वृद्धाश्रम सेवा — असली चारे, दवाई और देखभाल में लगता है — यह रहा जो आपका योगदान दे सकता है।</p>
        </div>
        <div className="seva-cols">
          <div className="seva-col">
            <h4 className="seva-col-title deva">गौ सेवा — चारा</h4>
            <div className="seva-row"><span className="deva">हरा चारा</span><span>₹6 / kg</span></div>
            <div className="seva-row"><span>Dry fodder (bhusa)</span><span>₹9 / kg</span></div>
            <div className="seva-row"><span>Grains (wheat, bajra, jowar)</span><span>₹22 / kg</span></div>
            <div className="seva-row"><span>Jaggery (gud)</span><span>₹42 / kg</span></div>
            <div className="seva-row"><span className="deva">खल / पशु आहार</span><span>₹35 / kg</span></div>
          </div>
          <div className="seva-col">
            <h4 className="seva-col-title deva">गौ सेवा — देखभाल</h4>
            <div className="seva-row"><span className="deva">प्राथमिक चिकित्सा किट / गाय</span><span>₹350</span></div>
            <div className="seva-row"><span className="deva">नियमित जांच</span><span>₹800</span></div>
            <div className="seva-row"><span className="deva">आपातकालीन इलाज</span><span>₹2,500</span></div>
            <div className="seva-row"><span className="deva">एक गाय प्रायोजित करें / माह</span><span>₹3,000</span></div>
            <div className="seva-row"><span className="deva">एक गाय प्रायोजित करें / वर्ष</span><span>₹32,000</span></div>
          </div>
          <div className="seva-col">
            <h4 className="seva-col-title deva">वृद्धाश्रम सेवा</h4>
            <div className="seva-row"><span className="deva">एक बुज़ुर्ग के लिए भोजन</span><span>₹80</span></div>
            <div className="seva-row"><span className="deva">सर्दी का कंबल और ज़रूरी सामान</span><span>₹500</span></div>
            <div className="seva-row"><span className="deva">चिकित्सा जांच / बुज़ुर्ग</span><span>₹400</span></div>
            <div className="seva-row"><span className="deva">एक बुज़ुर्ग प्रायोजित करें / माह</span><span>₹2,500</span></div>
            <div className="seva-row"><span className="deva">एक बुज़ुर्ग प्रायोजित करें / वर्ष</span><span>₹28,000</span></div>
          </div>
        </div>
        <p className="seva-note deva">यहाँ दिए गए दाम अनुमानित हैं — इन्हें अपनी असली current rates से बदलें। जो दाता एक गाय या बुज़ुर्ग को प्रायोजित करते हैं, उन्हें photo updates मिलते हैं और वो खुद आकर मिलने के लिए स्वागत है।</p>
      </div>
    </section>
  );
}
