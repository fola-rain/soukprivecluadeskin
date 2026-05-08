import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart-store";
import { useCurrency, formatPrice } from "@/lib/currency";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Bag — Souk Privé" }] }),
  component: CartPage,
});

function CartPage() {
  const { lines, subtotal, setQty, remove } = useCart();
  const code = useCurrency((s) => s.code);
  const total = subtotal();
  return (
    <section style={{ paddingTop: "calc(var(--nav-h) + 64px)", paddingBottom: 120, padding: "calc(var(--nav-h) + 64px) clamp(24px,5vw,80px) 120px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="eyebrow dim">Your Bag · {lines.length}</div>
        <h1 className="section-hl" style={{ marginBottom: 48 }}>Privately <em>yours</em>.</h1>
        {lines.length === 0 ? (
          <p>The bag is empty. <Link to="/shop" style={{ textDecoration: "underline" }}>Wander the shop →</Link></p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 64 }}>
            <ul style={{ listStyle: "none" }}>
              {lines.map(l => (
                <li key={l.slug} style={{ display: "grid", gridTemplateColumns: "120px 1fr auto", gap: 24, padding: "24px 0", borderTop: "1px solid var(--border-lt)" }}>
                  <img src={l.image} alt={l.name} style={{ width: 120, height: 150, objectFit: "cover" }} />
                  <div>
                    <div className="utility-mono" style={{ color: "var(--muted)" }}>{l.brand}</div>
                    <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 24 }}>{l.name}</div>
                    <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 6 }}>{l.size}</div>
                    <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 16 }}>
                      <button onClick={() => setQty(l.slug, l.qty - 1)} className="btn-text">−</button>
                      <span>{l.qty}</span>
                      <button onClick={() => setQty(l.slug, l.qty + 1)} className="btn-text">+</button>
                      <button onClick={() => remove(l.slug)} className="btn-text" style={{ marginLeft: 16 }}>Remove</button>
                    </div>
                  </div>
                  <div style={{ fontSize: 16 }}>{formatPrice(l.price * l.qty, code)}</div>
                </li>
              ))}
            </ul>
            <aside style={{ alignSelf: "start", borderTop: "1px solid var(--border-lt)", paddingTop: 24 }}>
              <div className="utility-mono" style={{ color: "var(--muted)", marginBottom: 16 }}>Summary</div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}><span>Subtotal</span><span>{formatPrice(total, code)}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24, color: "var(--muted)" }}><span>Shipping</span><span>At checkout</span></div>
              <Link to="/checkout" className="btn-dark" style={{ width: "100%", justifyContent: "center" }}>Checkout →</Link>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
