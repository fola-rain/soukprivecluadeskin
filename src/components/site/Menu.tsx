"use client";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NAV_PRIMARY, COLLECTIONS, SITE } from "@/lib/site-data";

export function Menu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!open && closing) {
      const t = setTimeout(() => setClosing(false), 700);
      return () => clearTimeout(t);
    }
  }, [open, closing]);

  // Esc to close
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, onClose]);

  const cls = `sp-menu ${open ? "is-open" : ""} ${closing ? "is-closing" : ""}`;

  return (
    <div className={cls} aria-hidden={!open}>
      <div className="menu-left">
        <ul className="menu-nav-list">
          {NAV_PRIMARY.map((item) => (
            <li key={item.to} className="menu-nav-item">
              <Link to={item.to} className="menu-nav-link" onClick={onClose}>
                <span className="m-link-num">{item.num}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="menu-footer">
          <a className="menu-footer-link" href={SITE.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <Link className="menu-footer-link" to="/journal" onClick={onClose}>Journal</Link>
          <Link className="menu-footer-link" to="/legal/privacy" onClick={onClose}>Privacy</Link>
          <Link className="menu-footer-link" to="/legal/terms" onClick={onClose}>Terms</Link>
        </div>
      </div>
      <div className="menu-right">
        <div>
          <div className="menu-feat-label">Featured · 03</div>
          <Link to={COLLECTIONS[0].href} className="menu-feat-img" onClick={onClose}>
            <img src={COLLECTIONS[0].image} alt={COLLECTIONS[0].name} />
            <div className="menu-feat-caption">
              <div className="menu-feat-title">{COLLECTIONS[0].name}</div>
              <div className="menu-feat-sub">{COLLECTIONS[0].label}</div>
            </div>
          </Link>
        </div>
        <div>
          <div className="menu-meta-label">Concierge</div>
          <Link to="/find-my-product" className="menu-meta-link" onClick={onClose}>Find your scent</Link>
          <Link to="/request-a-product" className="menu-meta-link" onClick={onClose}>Request a product</Link>
          <Link to="/contact" className="menu-meta-link" onClick={onClose}>Speak with us</Link>
        </div>
      </div>
    </div>
  );
}
