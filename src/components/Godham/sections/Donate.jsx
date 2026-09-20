import { useState } from 'react';
import QRModal from './QRModal';

const AMOUNTS = [501, 1100, 2100, 5100, 11000];

export default function Donate() {
  const [amount, setAmount] = useState(1100);
  const [custom, setCustom] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);

  return (
    <section className="donate-sec" id="donate">
      <div className="wrap donate-grid">
        <div>
          <span className="eyebrow">Why Donate</span>
          <h2 style={{ fontSize: 'clamp(26px,3.2vw,36px)', marginBottom: 22 }}>Your Seva reaches the cow directly.</h2>
          <ul className="donate-benefits">
            <li>100% of feed donations go toward daily fodder, grain and jaggery</li>
            <li>Tax exemption available under Section 80G of the Income Tax Act</li>
            <li>Monthly photo & video updates for cow sponsorships</li>
            <li>Open visiting hours — come meet the cows you support</li>
            <li>Transparent utilisation reports shared with every donor</li>
          </ul>
        </div>
        <div className="donate-card">
          <h3>Make a Donation</h3>
          <p>All amounts in INR (₹). Choose a preset, or scan our QR to pay instantly via UPI.</p>
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
      <QRModal open={qrOpen} onClose={() => setQrOpen(false)} />
    </section>
  );
}
