import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PRODUCTS } from "@/lib/site-data";
import { ProductCard } from "@/components/site/ProductCard";

const RESOLVERS: Record<string, Record<string, { title: string; filter: () => any[] }>> = {
  use: {
    "date-night":         { title: "Date Night",         filter: () => PRODUCTS.filter(p => p.use.includes("Date Night")) },
    "office-business":    { title: "Office & Business",  filter: () => PRODUCTS.filter(p => p.use.includes("Office & Business")) },
    "everyday-luxury":    { title: "Everyday Luxury",    filter: () => PRODUCTS.filter(p => p.use.includes("Everyday Luxury")) },
    "gifts":              { title: "Gifts",              filter: () => PRODUCTS.filter(p => p.use.includes("Gifts")) },
    "signature-scents":   { title: "Signature Scents",   filter: () => PRODUCTS.filter(p => p.use.includes("Signature Scents")) },
  },
  region: {
    "arabian":  { title: "Arabian",  filter: () => PRODUCTS.filter(p => p.region === "Arabian") },
    "french":   { title: "French",   filter: () => PRODUCTS.filter(p => p.region === "French") },
    "european": { title: "European", filter: () => PRODUCTS.filter(p => p.region === "European") },
  },
  strength: {
    "light":         { title: "Light",         filter: () => PRODUCTS.filter(p => p.strength === "Light") },
    "moderate":      { title: "Moderate",      filter: () => PRODUCTS.filter(p => p.strength === "Moderate") },
    "strong":        { title: "Strong",        filter: () => PRODUCTS.filter(p => p.strength === "Strong") },
    "long-lasting":  { title: "Long Lasting",  filter: () => PRODUCTS.filter(p => p.strength === "Long Lasting") },
  },
};

export const Route = createFileRoute("/shop/$facet/$slug")({
  loader: ({ params }) => {
    const facet = RESOLVERS[params.facet];
    const r = facet?.[params.slug];
    if (!r) throw notFound();
    return { title: r.title, facet: params.facet, items: r.filter() };
  },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.title ?? "Shop"} — Souk Privé` }] }),
  component: Facet,
});

function Facet() {
  const { title, facet, items } = Route.useLoaderData();
  return (
    <section style={{ paddingTop: "calc(var(--nav-h) + 64px)", paddingBottom: 120, padding: "calc(var(--nav-h) + 64px) clamp(24px,5vw,80px) 120px" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div className="eyebrow">By {facet} · {items.length}</div>
        <h1 className="section-hl" style={{ color: "var(--ivory)", marginBottom: 40 }}>{title}</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 2 }}>
          {items.map((p: any) => <ProductCard key={p.slug} product={p} />)}
        </div>
        <div style={{ marginTop: 40 }}><Link to="/shop" className="btn-text">← All shop</Link></div>
      </div>
    </section>
  );
}
