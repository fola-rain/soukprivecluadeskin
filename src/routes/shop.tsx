import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PRODUCTS, SHOP_FILTERS, BRANDS } from "@/lib/site-data";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Souk Privé" },
      { name: "description", content: "All fragrances and Arabian oils, curated by the house." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const [gender, setGender] = useState<string | null>(null);
  const [region, setRegion] = useState<string | null>(null);
  const [strength, setStrength] = useState<string | null>(null);

  const list = useMemo(() => PRODUCTS.filter(p =>
    (!gender || p.gender === gender) &&
    (!region || p.region === region) &&
    (!strength || p.strength === strength)
  ), [gender, region, strength]);

  return (
    <section style={{ paddingTop: "calc(var(--nav-h) + 64px)", paddingBottom: 120 }}>
      <div style={{ padding: "0 clamp(24px,5vw,80px)", maxWidth: 1440, margin: "0 auto" }}>
        <div className="eyebrow">The Shop · {PRODUCTS.length}</div>
        <h1 className="section-hl" style={{ color: "var(--ivory)", marginBottom: 48, maxWidth: 700 }}>
          Every bottle, <em>quietly</em> chosen.
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 48 }} className="shop-grid">
          <aside>
            <FilterGroup title="Gender" items={SHOP_FILTERS.gender} value={gender} onChange={setGender} />
            <FilterGroup title="Region" items={SHOP_FILTERS.region} value={region} onChange={setRegion} />
            <FilterGroup title="Strength" items={SHOP_FILTERS.strength} value={strength} onChange={setStrength} />
            <div style={{ marginTop: 28 }}>
              <div className="utility-mono" style={{ marginBottom: 12 }}>Brands</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {BRANDS.slice(0, 12).map(b => (
                  <span key={b} style={{ fontSize: 11, color: "rgba(245,240,232,0.5)", padding: "4px 8px", border: "1px solid var(--border-dk)" }}>{b}</span>
                ))}
              </div>
            </div>
          </aside>
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 2 }}>
              {list.map(p => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterGroup({ title, items, value, onChange }: { title: string; items: readonly string[]; value: string | null; onChange: (v: string | null) => void }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div className="utility-mono" style={{ marginBottom: 12 }}>{title}</div>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
        <li>
          <button onClick={() => onChange(null)} style={fbtn(value === null)}>All</button>
        </li>
        {items.map(i => (
          <li key={i}>
            <button onClick={() => onChange(value === i ? null : i)} style={fbtn(value === i)}>{i}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
const fbtn = (active: boolean): React.CSSProperties => ({
  background: "transparent", border: "none",
  fontFamily: "var(--font-sans)", fontSize: 13,
  color: active ? "var(--ivory)" : "rgba(245,240,232,0.55)",
  padding: 0, textAlign: "left",
  fontWeight: active ? 400 : 300,
});
