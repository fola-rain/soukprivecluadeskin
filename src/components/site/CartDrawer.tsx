"use client";
import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { X, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { useCurrency, formatPrice } from "@/lib/currency";
import { whatsappLink } from "@/lib/whatsapp";

export function CartDrawer() {
  const { lines, isOpen, close, remove, setQty, subtotal } = useCart();
  const code = useCurrency((s) => s.code);
  const total = subtotal();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={close}
        style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.4s var(--ease-out)",
          zIndex: 8500,
        }}
        aria-hidden
      />
      <aside
        role="dialog"
        aria-label="Shopping bag"
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0,
          width: "min(440px, 100vw)",
          background: "var(--ink)",
          borderLeft: "1px solid var(--border-dk)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.5s var(--ease-silk)",
          zIndex: 8600,
          display: "flex", flexDirection: "column",
          color: "var(--ivory)",
        }}
      >
        <div style={{ padding: "24px 28px", borderBottom: "1px solid var(--border-dk)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div className="utility-mono" style={{ marginBottom: 6 }}>Your Bag · {lines.length}</div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 24, fontStyle: "italic" }}>Privately yours</div>
          </div>
          <button onClick={close} aria-label="Close bag" style={{ background: "transparent", border: "none", color: "var(--ivory)" }}>
            <X size={20} strokeWidth={1.25} />
          </button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          {lines.length === 0 ? (
            <div style={{ textAlign: "center", padding: "48px 0", color: "rgba(245,240,232,0.55)" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, marginBottom: 12 }}>The bag is empty.</div>
              <Link to="/shop" onClick={close} className="btn-text">Wander the shop →</Link>
            </div>
          ) : (
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 24 }}>
              {lines.map((l) => (
                <li key={l.slug} style={{ display: "grid", gridTemplateColumns: "84px 1fr auto", gap: 16, paddingBottom: 24, borderBottom: "1px solid var(--border-dk)" }}>
                  <img src={l.image} alt={l.name} style={{ width: 84, height: 110, objectFit: "cover" }} />
                  <div>
                    <div className="utility-mono" style={{ fontSize: 8, marginBottom: 4 }}>{l.brand}</div>
                    <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18 }}>{l.name}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "rgba(196,181,160,0.55)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 4 }}>{l.size}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}>
                      <button aria-label="decrease" onClick={() => setQty(l.slug, l.qty - 1)} style={qtyBtn}><Minus size={11} /></button>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, minWidth: 18, textAlign: "center" }}>{l.qty}</span>
                      <button aria-label="increase" onClick={() => setQty(l.slug, l.qty + 1)} style={qtyBtn}><Plus size={11} /></button>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: 13 }}>{formatPrice(l.price * l.qty, code)}</span>
                    <button onClick={() => remove(l.slug)} aria-label="remove" style={{ background: "transparent", border: "none", color: "rgba(245,240,232,0.5)" }}>
                      <Trash2 size={13} strokeWidth={1.25} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div style={{ padding: "24px 28px", borderTop: "1px solid var(--border-dk)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(196,181,160,0.65)" }}>
              <span>Subtotal</span>
              <span style={{ color: "var(--ivory)", fontFamily: "var(--font-sans)", fontSize: 16, letterSpacing: 0, textTransform: "none" }}>{formatPrice(total, code)}</span>
            </div>
            <Link to="/checkout" onClick={close} className="btn-solid" style={{ width: "100%", justifyContent: "center", marginBottom: 10 }}>
              Proceed to checkout →
            </Link>
            <a href={whatsappLink(`Hello Souk Privé — I'd like to complete an order via concierge. My bag: \n${lines.map(l => `· ${l.name} (${l.size}) × ${l.qty}`).join("\n")}`)} target="_blank" rel="noreferrer" className="btn-outline" style={{ width: "100%", justifyContent: "center" }}>
              <MessageCircle size={13} /> Complete via WhatsApp
            </a>
          </div>
        )}
      </aside>
    </>
  );
}

const qtyBtn: React.CSSProperties = {
  width: 24, height: 24,
  background: "transparent",
  border: "1px solid var(--border-dk)",
  color: "var(--ivory)",
  display: "flex", alignItems: "center", justifyContent: "center",
};
