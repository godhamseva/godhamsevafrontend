import { useState } from 'react';
import { GODHAM_WHATSAPP } from '../constants';
import QRModal from './QRModal';

export default function FloatingButtons() {
  const [qrOpen, setQrOpen] = useState(false);

  return (
    <>
      <button className="float-donate" onClick={() => setQrOpen(true)}>🐄 Donate</button>
      <a href={GODHAM_WHATSAPP} className="float-whatsapp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">☎</a>
      <QRModal open={qrOpen} onClose={() => setQrOpen(false)} />
    </>
  );
}
