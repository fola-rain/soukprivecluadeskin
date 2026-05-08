import { createFileRoute, Link } from "@tanstack/react-router";
import { ORIGINALS_IMAGE, productsByCollection } from "@/lib/site-data";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/originals")({
  head: () => ({ meta: [{ title: "Originals — Souk Privé" }] }),
  component: Originals,
});

function Originals() {
  const items = productsByCollection("originals");
  return (
    <>
      <section style={{ paddingTop: "calc(var(--nav-h) + 64px)", paddingBottom: 60, padding: "calc(var(--nav-h) + 64px) clamp(24px,5vw,80px) 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div className="eyebrow dim">Souk Privé Originals</div>
            <h1 className="section-hl" style={{ marginBottom: 24 }}>Our own <em>quiet</em> hand.</h1>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
              A small in-house line of Arabian oils and signature compositions — distilled in collaboration with master perfumers in Hejaz, then rested in our atelier for nine months before release.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              These are made in batches of fewer than 200. When a batch is gone, it is gone, until the next quiet harvest.
            </p>
          </div>
          <div style={{ aspectRatio: "4/5", overflow: "hidden", background: "var(--ivory2)" }}>
            <img src={ORIGINALS_IMAGE} alt="The Souk Privé atelier" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      <section style={{ padding: "60px clamp(24px,5vw,80px) 120px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="eyebrow dim">In stock · {items.length}</div>
          <h2 className="section-hl" style={{ marginBottom: 32 }}>Currently on the shelf.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 2 }}>
            {items.map(p => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
