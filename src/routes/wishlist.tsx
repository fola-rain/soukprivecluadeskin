import { createFileRoute, Link } from "@tanstack/react-router";
import { useWishlist } from "@/lib/wishlist-store";
import { PRODUCTS } from "@/lib/site-data";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "Wishlist — Souk Privé" }] }),
  component: Wishlist,
});

function Wishlist() {
  const slugs = useWishlist((s) => s.slugs);
  const items = PRODUCTS.filter(p => slugs.includes(p.slug));
  return (
    <section style={{ paddingTop: "calc(var(--nav-h) + 64px)", paddingBottom: 120, padding: "calc(var(--nav-h) + 64px) clamp(24px,5vw,80px) 120px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="eyebrow dim">Saved · {items.length}</div>
        <h1 className="section-hl" style={{ marginBottom: 40 }}>Your <em>quiet</em> shelf.</h1>
        {items.length === 0 ? (
          <p style={{ color: "var(--muted)" }}>Nothing saved yet. <Link to="/shop" style={{ textDecoration: "underline" }}>Wander the shop →</Link></p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 2 }}>
            {items.map(p => <ProductCard key={p.slug} product={p} />)}
          </div>
        )}
      </div>
    </section>
  );
}
