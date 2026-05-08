import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({ meta: [{ title: "Terms — Souk Privé" }] }),
  component: () => (
    <section style={{ paddingTop: "calc(var(--nav-h) + 64px)", paddingBottom: 120, padding: "calc(var(--nav-h) + 64px) clamp(24px,5vw,80px) 120px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div className="eyebrow dim">Legal</div>
        <h1 className="section-hl" style={{ marginBottom: 32 }}>Terms & Conditions</h1>
        <div style={{ fontSize: 15, lineHeight: 1.85 }}>
          <p style={{ marginBottom: 18 }}>By placing an order with Souk Privé you confirm that all bottles are for personal use and not for resale.</p>
          <p style={{ marginBottom: 18 }}>All products are guaranteed authentic. Should any item arrive damaged, please contact our concierge within 7 days for a full replacement.</p>
          <p style={{ marginBottom: 18 }}>Prices are listed in USD and may be displayed in your local currency for convenience. Final charge is taken in USD at the prevailing exchange rate.</p>
        </div>
      </div>
    </section>
  ),
});
