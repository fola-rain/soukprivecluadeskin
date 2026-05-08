import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Lock } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { useCurrency, formatPrice } from "@/lib/currency";
import { whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Souk Privé" }] }),
  component: Checkout,
});

function Checkout() {
  const { lines, subtotal, clear } = useCart();
  const code = useCurrency((s) => s.code);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [info, setInfo] = useState({ email: "", name: "", phone: "", address: "", city: "", country: "United Arab Emirates" });
  const [done, setDone] = useState(false);
  const total = subtotal();

  if (done) {
    return (
      <section style={{ paddingTop: "calc(var(--nav-h) + 80px)", paddingBottom: 120, padding: "calc(var(--nav-h) + 80px) 24px 120px", textAlign: "center" }}>
        <div className="utility-mono" style={{ marginBottom: 12 }}>Order placed · Thank you</div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.4rem, 6vw, 4.2rem)", fontWeight: 300 }}>Your order is <em style={{ color: "var(--muted)" }}>privately</em> noted.</h1>
        <p style={{ maxWidth: 540, margin: "20px auto 32px", color: "rgba(245,240,232,0.6)", lineHeight: 1.8 }}>
          A confirmation has been sent. Our concierge will message you on WhatsApp within the hour to confirm dispatch.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a className="btn-outline" href={whatsappLink(`Hello — I just placed an order under ${info.name}.`)} target="_blank" rel="noreferrer"><MessageCircle size={11} /> Open WhatsApp</a>
          <Link to="/shop" className="btn-text">Return to shop →</Link>
        </div>
      </section>
    );
  }

  return (
    <section style={{ paddingTop: "calc(var(--nav-h) + 64px)", paddingBottom: 120, padding: "calc(var(--nav-h) + 64px) clamp(24px,5vw,80px) 120px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="eyebrow">Checkout · Step {step} of 3</div>
        <h1 className="section-hl" style={{ color: "var(--ivory)", marginBottom: 40 }}>Quietly, <em>almost done.</em></h1>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64 }} className="checkout-grid">
          <form onSubmit={(e) => { e.preventDefault(); if (step < 3) setStep((step + 1) as 1 | 2 | 3); else { clear(); setDone(true); } }}>
            {step === 1 && (
              <>
                <h2 style={section}>Information</h2>
                <Field label="Email" type="email" value={info.email} onChange={(v) => setInfo({ ...info, email: v })} required />
                <Field label="Full name" value={info.name} onChange={(v) => setInfo({ ...info, name: v })} required />
                <Field label="Phone / WhatsApp" value={info.phone} onChange={(v) => setInfo({ ...info, phone: v })} required />
              </>
            )}
            {step === 2 && (
              <>
                <h2 style={section}>Shipping</h2>
                <Field label="Address" value={info.address} onChange={(v) => setInfo({ ...info, address: v })} required />
                <Field label="City" value={info.city} onChange={(v) => setInfo({ ...info, city: v })} required />
                <Field label="Country" value={info.country} onChange={(v) => setInfo({ ...info, country: v })} required />
              </>
            )}
            {step === 3 && (
              <>
                <h2 style={section}>Payment</h2>
                <Field label="Card number" value="" onChange={() => {}} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Field label="MM / YY" value="" onChange={() => {}} />
                  <Field label="CVC" value="" onChange={() => {}} />
                </div>
                <p style={{ color: "var(--muted)", fontSize: 12, marginTop: 16, display: "flex", gap: 8, alignItems: "center" }}>
                  <Lock size={11} /> Encrypted. Card details never stored.
                </p>
              </>
            )}

            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              {step > 1 && <button type="button" className="btn-text" onClick={() => setStep((step - 1) as 1 | 2 | 3)}>← Back</button>}
              <button type="submit" className="btn-solid">{step === 3 ? "Place order →" : "Continue →"}</button>
              <a href={whatsappLink("Hello — I'd like to complete my order over WhatsApp.")} target="_blank" rel="noreferrer" className="btn-outline">
                <MessageCircle size={11} /> Pay via concierge
              </a>
            </div>
          </form>

          <aside style={{ background: "var(--espresso)", padding: 32, alignSelf: "start" }}>
            <h3 className="utility-mono" style={{ marginBottom: 20 }}>Your order</h3>
            <ul style={{ listStyle: "none", marginBottom: 24 }}>
              {lines.map(l => (
                <li key={l.slug} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid var(--border-dk)", fontSize: 13 }}>
                  <span style={{ color: "var(--ivory)" }}>{l.name} <span style={{ color: "var(--muted)" }}>× {l.qty}</span></span>
                  <span>{formatPrice(l.price * l.qty, code)}</span>
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 8, color: "rgba(245,240,232,0.7)" }}>
              <span>Subtotal</span><span>{formatPrice(total, code)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 16, color: "rgba(245,240,232,0.7)" }}>
              <span>Shipping</span><span>Calculated at next step</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-serif)", fontSize: 22, paddingTop: 16, borderTop: "1px solid var(--border-dk)" }}>
              <span>Total</span><span>{formatPrice(total, code)}</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

const section: React.CSSProperties = { fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 300, marginBottom: 24 };

function Field({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div className="field-row">
      <label className="field-label">{label}{required && " *"}</label>
      <input className="field-input" type={type} value={value} onChange={(e) => onChange(e.target.value)} required={required} />
    </div>
  );
}
