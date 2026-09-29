import { useState } from 'react';
import QRModal from './QRModal';

const AMOUNTS = [501, 1100, 2100, 5100, 11000];
const CAUSES = [
  { id: 'both', label: 'Wherever Needed', name: 'Wherever Needed' },
  { id: 'cow', label: '🐄 Gau Seva', name: 'Gau Seva' },
  { id: 'elder', label: '🧓 Vridhaashram', name: 'Vridhaashram' },
];

export default function Donate() {
  const [amount, setAmount] = useState(1100);
  const [custom, setCustom] = useState(false);
  const [cause, setCause] = useState('both');
  const [qrOpen, setQrOpen] = useState(false);

  const causeName = CAUSES.find((c) => c.id === cause)?.name || '';

  return (
    <section className="donate-sec" id="donate">
      <div className="wrap donate-grid">
        <div>
          <span className="eyebrow">Why Donate</span>
          <h2 style={{ fontSize: 'clamp(26px,3.2vw,36px)', marginBottom: 22 }}>Your Seva reaches those who need it, directly.</h2>
          <ul className="donate-benefits deva">
            <li>100% दान सीधे गौ चारे और देखभाल, या बुज़ुर्ग आश्रय और देखभाल में जाता है</li>
            <li>Income Tax Act की Section 80G के तहत टैक्स छूट उपलब्ध है</li>
            <li>गाय या बुज़ुर्ग प्रायोजन के लिए हर महीने फोटो और वीडियो अपडेट</li>
            <li>खुले visiting hours — आप जिनकी सेवा करते हैं उनसे मिल सकते हैं</li>
            <li>हर दाता के साथ पारदर्शी उपयोग रिपोर्ट साझा की जाती है</li>
          </ul>
        </div>
        <div className="donate-card">
          <h3>Make a Donation</h3>
          <p className="deva">सारी राशि INR (₹) में है। एक कारण चुनें, राशि तय करें, या UPI से तुरंत भुगतान के लिए हमारा QR scan करें।</p>
          <div className="donate-label">Donate towards</div>
          <div className="amount-grid cause-grid">
            {CAUSES.map((c) => (
              <div
                key={c.id}
                className={`amount-btn${cause === c.id ? ' active' : ''}`}
                onClick={() => setCause(c.id)}
              >
                {c.label}
              </div>
            ))}
          </div>
          <div className="amount-grid">
            {AMOUNTS.map((a) => (
              <div
                key={a}
                className={`amount-btn${!custom && amount === a ? ' active' : ''}`}
                onClick={() => { setAmount(a); setCustom(false); }}
              >
                ₹{a.toLocaleString()}
              </div>
            ))}
            <div
              className={`amount-btn${custom ? ' active' : ''}`}
              onClick={() => setCustom(true)}
            >
              Custom
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setQrOpen(true);
            }}
          >
            <input type="text" placeholder="Full Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Email Address" required />
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Proceed to Donate →
            </button>
          </form>
        </div>
      </div>
      <QRModal open={qrOpen} onClose={() => setQrOpen(false)} causeName={causeName} />
    </section>
  );
}
