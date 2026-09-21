import { useEffect, useState } from 'react';
import { fetchQr } from '../lib/api';
import { GODHAM_EMAIL } from '../constants';

export default function QRModal({ open, onClose, causeName }) {
  const [qr, setQr] = useState(undefined); // undefined = loading, null = none, object = found

  useEffect(() => {
    if (!open) return;
    setQr(undefined);
    fetchQr().then(setQr);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="qr-overlay" onClick={onClose}>
      <div className="qr-modal" onClick={(e) => e.stopPropagation()}>
        <button className="qr-close" onClick={onClose} aria-label="Close">✕</button>
        <h3>Scan & Donate via UPI</h3>
        <p className="hint">Use any UPI app (GPay, PhonePe, Paytm) to scan and send your Gau Seva or Vridhaashram contribution directly.</p>
        {causeName && causeName !== 'Wherever Needed' && (
          <p className="hint" style={{ marginTop: -12 }}>
            Please mention <strong>&quot;{causeName}&quot;</strong> in your UPI payment note so we allocate it correctly.
          </p>
        )}
        <div className="qr-image-wrap">
          {qr === undefined && <span className="qr-placeholder">Loading QR code…</span>}
          {qr === null && (
            <img src="/assets/godham/sample-qr.png" alt="Sample donation QR code — replace from the admin panel" />
          )}
          {qr && <img src={qr.url} alt="Godham Trust donation UPI QR code" />}
        </div>
        {qr === null && <p className="hint" style={{ marginTop: -8, marginBottom: 0 }}>Sample QR shown — upload the real one from the admin panel.</p>}
        <div className="qr-upi">Godham Trust · {GODHAM_EMAIL}</div>
      </div>
    </div>
  );
}
