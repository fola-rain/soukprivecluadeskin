import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PRODUCTS } from "@/lib/site-data";
import { ProductCard } from "@/components/site/ProductCard";

const CATEGORY_RESOLVERS: Record<string, { title: string; subtitle: string; filter: (slug: string) => any[] }> = {
  "men":      { title: "For Him",   subtitle: "Compositions chosen for men.",     filter: () => PRODUCTS.filter(p => p.gender === "Men" || p.gender === "Unisex") },
  "women":    { title: "For Her",   subtitle: "Compositions chosen for women.",   filter: () => PRODUCTS.filter(p => p.gender === "Women" || p.gender === "Unisex") },
  "unisex":   { title: "Unisex",    subtitle: "For everyone, equally.",            filter: () => PRODUCTS.filter(p => p.gender === "Unisex") },
};

export const Route = createFileRoute("/shop/$category")({
  loader: ({ params }) => {
    const r = CATEGORY_RESOLVERS[params.category];
    if (!r) throw notFound();
    return { resolver: r, items: r.filter(params.category) };
  },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.resolver.title ?? "Shop"} — Souk Privé` }] }),
  component: Cat,
});

function Cat() {
  const { resolver, items } = Route.useLoaderData();
  return (
    <section style={{ paddingTop: "calc(var(--nav-h) + 64px)", paddingBottom: 120, padding: "calc(var(--nav-h) + 64px) clamp(24px,5vw,80px) 120px" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div className="eyebrow">{resolver.title} · {items.length}</div>
        <h1 className="section-hl" style={{ color: "var(--ivory)", marginBottom: 16 }}>{resolver.title}</h1>
        <p style={{ color: "var(--muted)", marginBottom: 40, maxWidth: 560 }}>{resolver.subtitle}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 2 }}>
          {items.map((p: any) => <ProductCard key={p.slug} product={p} />)}
        </div>
        <div style={{ marginTop: 40 }}><Link to="/shop" className="btn-text">← All shop</Link></div>
      </div>
    </section>
  );
}
