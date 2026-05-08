import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/returns")({
  head: () => ({ meta: [{ title: "Returns — Souk Privé" }] }),
  component: () => (
    <section style={{ paddingTop: "calc(var(--nav-h) + 64px)", paddingBottom: 120, padding: "calc(var(--nav-h) + 64px) clamp(24px,5vw,80px) 120px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div className="eyebrow dim">Concierge</div>
        <h1 className="section-hl" style={{ marginBottom: 32 }}>Returns</h1>
        <div style={{ fontSize: 15, lineHeight: 1.85 }}>
          <p style={{ marginBottom: 18 }}>Unopened, sealed bottles may be returned within 14 days of delivery for a full refund — we'll arrange the courier.</p>
          <p style={{ marginBottom: 18 }}>Opened bottles are non-returnable, but our concierge will help you find a better match — often at no additional cost.</p>
        </div>
      </div>
    </section>
  ),
});
