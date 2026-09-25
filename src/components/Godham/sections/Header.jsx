import { useState } from 'react';
import Link from 'next/link';
import { GODHAM_PHONE, GODHAM_PHONE_TEL, GODHAM_EMAIL, GODHAM_ADDRESS } from '../constants';

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/#about', label: 'About Us' },
    { href: '/#programs', label: 'Our Work' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/#vridhaashram', label: 'Vridhaashram' },
    { href: '/#seva', label: 'Gau Seva' },
    { href: '/#donate', label: 'Donate' },
    { href: '/#locate', label: 'Locate Us' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <div className="tb-links">
            <a href={`tel:${GODHAM_PHONE_TEL}`}>📞 {GODHAM_PHONE}</a>
            <a href={`mailto:${GODHAM_EMAIL}`}>✉ {GODHAM_EMAIL}</a>
            <a href="/#locate" className="tb-address">📍 {GODHAM_ADDRESS}</a>
          </div>
          <div className="tb-social">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="YouTube">YouTube</a>
          </div>
        </div>
      </div>

      <header className="site">
        <nav className="nav wrap">
          <Link href="/" className="logo">
            <img src="/assets/godham/logo.jpg" alt="Godham Trust logo" />
            <span>
              Godham Trust
              <span className="sub deva">गौ सेवा • मानव सेवा • राष्ट्र सेवा</span>
            </span>
          </Link>
          <ul className={`navlinks${open ? ' open' : ''}`}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <a href="/#donate" className="btn btn-primary">Donate Now</a>
            <button className="hamburger" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
