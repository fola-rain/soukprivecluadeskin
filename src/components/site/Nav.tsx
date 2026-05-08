"use client";
import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, Heart, ShoppingBag } from "lucide-react";
import { SITE, NAV_PRIMARY } from "@/lib/site-data";
import { useCart } from "@/lib/cart-store";
import { useWishlist } from "@/lib/wishlist-store";
import { Menu } from "./Menu";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = useCart((s) => s.count());
  const wishCount = useWishlist((s) => s.count());
  const openCart = useCart((s) => s.open);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  // close menu on route change
  useEffect(() => { setMenuOpen(false); }, [loc.pathname]);

  return (
    <>
      <header className={`sp-nav ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo" aria-label={SITE.name}>
            <span className="logo-main">Souk Privé</span>
            <span className="logo-sub">{SITE.tagline}</span>
          </Link>

          <nav>
            <ul className="nav-links">
              {NAV_PRIMARY.slice(0, 5).map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="nav-link" activeProps={{ className: "nav-link active" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <button className="nav-icon" aria-label="Search">
              <Search size={16} strokeWidth={1.25} />
            </button>
            <Link to="/wishlist" className="nav-icon" aria-label="Wishlist">
              <Heart size={16} strokeWidth={1.25} />
              {wishCount > 0 && <span className="cart-count">{wishCount}</span>}
            </Link>
            <button className="nav-icon" aria-label="Cart" onClick={openCart}>
              <ShoppingBag size={16} strokeWidth={1.25} />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>
            <button
              className="hamburger"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="ham-line ham-l1" />
              <span className="ham-line ham-l2" />
              <span className="ham-line ham-l3" />
            </button>
          </div>
        </div>
      </header>

      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
