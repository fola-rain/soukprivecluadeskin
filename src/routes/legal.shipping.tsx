import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/shipping")({
  head: () => ({ meta: [{ title: "Shipping — Souk Privé" }] }),
  component: () => (
    <section style={{ paddingTop: "calc(var(--nav-h) + 64px)", paddingBottom: 120, padding: "calc(var(--nav-h) + 64px) clamp(24px,5vw,80px) 120px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div className="eyebrow dim">Concierge</div>
        <h1 className="section-hl" style={{ marginBottom: 32 }}>Shipping</h1>
        <div style={{ fontSize: 15, lineHeight: 1.85 }}>
          <p style={{ marginBottom: 18 }}>We ship worldwide via DHL Express, signed-on-delivery. Outer packaging is unmarked and discreet.</p>
          <p style={{ marginBottom: 18 }}>UAE & GCC: 1–2 working days. Europe & UK: 2–4 days. North America: 3–5 days. Rest of world: 4–7 days.</p>
          <p>Tracking and a personal WhatsApp confirmation are sent within one hour of dispatch.</p>
        </div>
      </div>
    </section>
  ),
});
