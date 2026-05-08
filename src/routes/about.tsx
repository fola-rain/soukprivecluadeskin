import { createFileRoute } from "@tanstack/react-router";
import { ABOUT_IMAGE } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Souk Privé" }] }),
  component: About,
});

function About() {
  return (
    <>
      <section style={{ paddingTop: "calc(var(--nav-h) + 64px)", paddingBottom: 80, padding: "calc(var(--nav-h) + 64px) clamp(24px,5vw,80px) 80px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="eyebrow dim">The House</div>
          <h1 className="section-hl" style={{ marginBottom: 40 }}>A quietly curated <em>private souk</em>.</h1>
          <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.5rem", lineHeight: 1.5, color: "var(--umber)", marginBottom: 32 }}>
            Souk Privé is a private house for fragrance.
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.85, color: "var(--ink)", display: "flex", flexDirection: "column", gap: 18 }}>
            <p>We were founded in 2026 around a single observation — that the most considered fragrances in the world are still difficult to find. The good Arabian oils never leave the Gulf. The quiet French houses don't ship outside Europe. The vintage bottles change hands in WhatsApp groups, not boutiques.</p>
            <p>We built Souk Privé to gather them all in one place — and to deliver them with the care of a private concierge rather than a checkout button.</p>
            <p>Our scope is intentionally narrow. We start with fragrances and Arabian oils. In time, we will expand into the broader categories of quiet luxury — leather, gifting, accessories — but only after we have honoured the first.</p>
          </div>
        </div>
      </section>
      <section style={{ aspectRatio: "21/9", overflow: "hidden", background: "var(--ivory2)" }}>
        <img src={ABOUT_IMAGE} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </section>
      <section style={{ padding: "80px clamp(24px,5vw,80px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48 }}>
          {[
            { t: "Authenticity", b: "Every bottle is hand-checked, sealed, and serialised in our atelier before dispatch." },
            { t: "Sourcing", b: "We work directly with houses in Hejaz, Grasse, Milan, Istanbul, Paris, and London." },
            { t: "Concierge", b: "A real person on WhatsApp — for requests, advice, returns, and the occasional gift note." },
            { t: "Discretion", b: "Unmarked outer packaging, signature on delivery, no resale of your address." },
          ].map(v => (
            <div key={v.t}>
              <div className="utility-mono" style={{ color: "var(--muted)", marginBottom: 12 }}>{v.t}</div>
              <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.2rem", lineHeight: 1.5 }}>{v.b}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
