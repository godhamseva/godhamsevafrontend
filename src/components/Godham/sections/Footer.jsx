import { GODHAM_PHONE, GODHAM_PHONE_TEL, GODHAM_EMAIL, GODHAM_ADDRESS, GODHAM_INSTAGRAM, GODHAM_WHATSAPP } from '../constants';

export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="/" className="logo">
              <img src="/assets/godham/logo.jpg" alt="Godham Trust logo" style={{ width: 44, height: 44 }} /> Godham Trust
            </a>
            <p>A registered charitable trust running goshalas for rescued, injured and abandoned cows, and a Vridhaashram providing shelter, food and medical care to destitute elders.</p>
            <div className="foot-social">
              <a href="#">f</a><a href={GODHAM_INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram">ig</a><a href="#">yt</a><a href={GODHAM_WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">wa</a>
            </div>
          </div>
          <div className="foot-col">
            <h5>About Us</h5>
            <ul>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#">Trustees</a></li>
              <li><a href="#">Governance</a></li>
              <li><a href="#">Annual Report</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Our Work</h5>
            <ul>
              <li><a href="#programs">Rescue & Shelter</a></li>
              <li><a href="#programs">Daily Feeding</a></li>
              <li><a href="#programs">Medical Care</a></li>
              <li><a href="#programs">Cow Adoption</a></li>
              <li><a href="#vridhaashram">Vridhaashram</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Get Involved</h5>
            <ul>
              <li><a href="#donate">Donate</a></li>
              <li><a href="#seva">Sponsor a Seva</a></li>
              <li><a href="#">Volunteer</a></li>
              <li><a href="#locate">Visit Us</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <ul>
              <li>{GODHAM_ADDRESS}</li>
              <li><a href={`tel:${GODHAM_PHONE_TEL}`}>{GODHAM_PHONE}</a></li>
              <li><a href={`mailto:${GODHAM_EMAIL}`}>{GODHAM_EMAIL}</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Godham Trust. All rights reserved.</span>
          <span>Privacy Policy · Terms & Conditions · Refund Policy · <a href="/godham/admin">Admin Login</a></span>
        </div>
      </div>
    </footer>
  );
}
