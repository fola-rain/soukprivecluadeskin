import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Heart, MessageCircle, ArrowRight } from "lucide-react";
import { findProduct, PRODUCTS } from "@/lib/site-data";
import { useCart } from "@/lib/cart-store";
import { useWishlist } from "@/lib/wishlist-store";
import { useCurrency, formatPrice } from "@/lib/currency";
import { whatsappLink } from "@/lib/whatsapp";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = findProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name} — Souk Privé` },
      { name: "description", content: loaderData?.product.description ?? "" },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const add = useCart((s) => s.add);
  const wish = useWishlist();
  const code = useCurrency((s) => s.code);

  const related = PRODUCTS.filter(x => x.region === p.region && x.slug !== p.slug).slice(0, 4);

  return (
    <>
      <section style={{ paddingTop: "calc(var(--nav-h) + 32px)", paddingBottom: 80 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, maxWidth: 1440, margin: "0 auto" }} className="pdp-grid">
          <div style={{ background: "var(--espresso)", aspectRatio: "4/5", overflow: "hidden" }}>
            <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ padding: "clamp(32px, 5vw, 80px)" }}>
            <div className="utility-mono" style={{ marginBottom: 12 }}>{p.brand} · {p.origin}</div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 300, lineHeight: 1.05, marginBottom: 16 }}>
              {p.name}
            </h1>
            <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 24, color: "rgba(245,240,232,0.55)", fontSize: 13 }}>
              <span>★ {p.rating?.toFixed(1)} · {p.reviewCount} reviews</span>
              <span>·</span>
              <span>{p.size}</span>
            </div>
            <p style={{ color: "rgba(245,240,232,0.7)", lineHeight: 1.8, marginBottom: 32 }}>{p.description}</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginBottom: 36, padding: "24px 0", borderTop: "1px solid var(--border-dk)", borderBottom: "1px solid var(--border-dk)" }}>
              <NoteCol title="Top" notes={p.notesTop} />
              <NoteCol title="Heart" notes={p.notesHeart} />
              <NoteCol title="Base" notes={p.notesBase} />
            </div>

            <div style={{ fontFamily: "var(--font-sans)", fontSize: 28, marginBottom: 28 }}>{formatPrice(p.price, code)}</div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
              <button className="btn-solid" onClick={() => add(p)}>Add to bag <ArrowRight size={11} /></button>
              <button className="btn-outline" onClick={() => wish.toggle(p.slug)}>
                <Heart size={11} fill={wish.has(p.slug) ? "currentColor" : "none"} /> {wish.has(p.slug) ? "Saved" : "Wishlist"}
              </button>
            </div>
            <a href={whatsappLink(`Hello — I'm interested in ${p.name} (${p.brand}, ${p.size}).`)} target="_blank" rel="noreferrer" className="btn-text">
              <MessageCircle size={11} /> Speak with concierge about this bottle →
            </a>

            <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, fontSize: 12, color: "rgba(245,240,232,0.6)", lineHeight: 1.7 }}>
              <div><strong style={{ color: "var(--ivory)" }}>Authenticity</strong><br />Hand-checked. House-sealed.</div>
              <div><strong style={{ color: "var(--ivory)" }}>Discreet shipping</strong><br />Worldwide, signature on delivery.</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(60px,9vw,120px) clamp(24px,5vw,80px)", background: "var(--ink)", borderTop: "1px solid var(--border-dk)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div className="eyebrow">From the same region</div>
          <h2 className="section-hl" style={{ color: "var(--ivory)", marginBottom: 40 }}>You may also <em>like</em>.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 2 }}>
            {related.map(r => <ProductCard key={r.slug} product={r} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function NoteCol({ title, notes }: { title: string; notes: string[] }) {
  return (
    <div>
      <div className="utility-mono" style={{ marginBottom: 8, color: "var(--sand)" }}>{title}</div>
      <ul style={{ listStyle: "none", color: "rgba(245,240,232,0.7)", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 14, lineHeight: 1.7 }}>
        {notes.map(n => <li key={n}>{n}</li>)}
      </ul>
    </div>
  );
}
