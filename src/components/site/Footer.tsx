import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="sp-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand-name">Souk Privé</div>
          <div className="footer-brand-tag">{SITE.tagline}</div>
          <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(245,240,232,0.55)", maxWidth: 320, marginBottom: 24 }}>
            A quiet luxury house for fragrances and Arabian oils — sourced globally, kept selectively, and delivered with care.
          </p>
          <form className="footer-news" onSubmit={(e) => { e.preventDefault(); }}>
            <input type="email" required placeholder="Your email" aria-label="Email" />
            <button type="submit">Join →</button>
          </form>
        </div>

        <div>
          <div className="footer-title">Shop</div>
          <ul className="footer-list">
            <li><Link to="/shop">All Fragrances</Link></li>
            <li><Link to="/shop/region/arabian">Arabian Oils</Link></li>
            <li><Link to="/shop/use/date-night">Date Night</Link></li>
            <li><Link to="/shop/use/gifts">Gifts</Link></li>
            <li><Link to="/originals">Originals</Link></li>
            <li><Link to="/shop/brand">By Brand</Link></li>
          </ul>
        </div>

        <div>
          <div className="footer-title">Concierge</div>
          <ul className="footer-list">
            <li><Link to="/find-my-product">Find My Product</Link></li>
            <li><Link to="/request-a-product">Request a Product</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/legal/shipping">Shipping</Link></li>
            <li><Link to="/legal/returns">Returns</Link></li>
          </ul>
        </div>

        <div>
          <div className="footer-title">House</div>
          <ul className="footer-list">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/journal">Journal</Link></li>
            <li><a href={SITE.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
            <li><Link to="/legal/privacy">Privacy</Link></li>
            <li><Link to="/legal/terms">Terms</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Souk Privé · All rights reserved</span>
        <span>Designed and shipped with care.</span>
      </div>
    </footer>
  );
}
