import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/request-a-product")({
  head: () => ({ meta: [{ title: "Request a Product — Souk Privé" }] }),
  component: Request,
});

function Request() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section style={{ paddingTop: "calc(var(--nav-h) + 64px)", paddingBottom: 120, padding: "calc(var(--nav-h) + 64px) clamp(24px,5vw,80px) 120px" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <div className="eyebrow dim">Concierge · Request a product</div>
        <h1 className="section-hl" style={{ marginBottom: 24 }}>Tell us what to <em>find</em>.</h1>
        <p style={{ color: "var(--muted)", marginBottom: 40, maxWidth: 600, lineHeight: 1.8 }}>
          Discontinued. Limited. Regional. We work with quiet houses and private collectors across Hejaz, Grasse, Milan, and Paris. Tell us, and we'll source.
        </p>

        {submitted ? (
          <div style={{ background: "var(--ivory2)", padding: 40 }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", marginBottom: 12 }}>Quietly received.</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>Your concierge will be in touch within one working day, often sooner.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Field label="Your name *" />
            <Field label="Email *" type="email" />
            <Field label="WhatsApp / Phone *" />
            <Field label="Country" />
            <Field label="Brand sought" full />
            <Field label="Product / scent name" full />
            <Field label="Notes you remember (optional)" full textarea />
            <Field label="Budget (USD, optional)" />
            <Field label="How urgent?" />
            <div style={{ gridColumn: "1 / -1", display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
              <button type="submit" className="btn-dark">Submit request →</button>
              <a href={whatsappLink("Hello — I'd like to request a specific fragrance.")} target="_blank" rel="noreferrer" className="btn-text">
                <MessageCircle size={11} /> Or send via WhatsApp
              </a>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, type = "text", full, textarea }: { label: string; type?: string; full?: boolean; textarea?: boolean }) {
  return (
    <div className="field-row" style={{ gridColumn: full ? "1 / -1" : undefined }}>
      <label className="field-label">{label}</label>
      {textarea ? <textarea className="field-textarea" /> : <input className="field-input" type={type} />}
    </div>
  );
}
