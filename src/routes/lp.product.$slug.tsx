import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { LandingShell } from "@/components/site/LandingShell";
import { findProduct, PRODUCTS } from "@/lib/site-data";

export const Route = createFileRoute("/lp/product/$slug")({
  loader: ({ params }) => {
    const product = findProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Souk Privé" }] };
    return {
      meta: [
        { title: `${p.name} — Souk Privé` },
        { name: "description", content: p.description.slice(0, 158) },
        { property: "og:title", content: `${p.name} — ${p.brand}` },
        { property: "og:description", content: p.description.slice(0, 158) },
        { property: "og:image", content: p.image },
        { name: "twitter:image", content: p.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div style={{ minHeight: "60vh", display: "grid", placeItems: "center", padding: 48 }}>
      <div style={{ textAlign: "center" }}>
        <div className="utility-mono" style={{ marginBottom: 12 }}>404</div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", marginBottom: 16 }}>This piece is unavailable.</h1>
        <Link to="/shop" className="btn-outline">Browse the shop →</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div style={{ padding: 48 }}>{error.message}</div>
  ),
  component: ProductLanding,
});

function ProductLanding() {
  const { product } = Route.useLoaderData();
  const related = PRODUCTS.filter((p) => p.slug !== product.slug && p.region === product.region).slice(0, 4);

  return (
    <LandingShell
      eyebrow={`${product.brand} · ${product.origin}`}
      title={<>{product.name.split(" ")[0]} <em style={{ color: "rgba(245,240,232,0.6)" }}>{product.name.split(" ").slice(1).join(" ")}</em></>}
      intro={product.description}
      hero={product.image}
      primaryCta={{ label: "View the Product", to: "/product/$slug" as any }}
      secondaryCta={{ label: "Find your scent", to: "/find-my-product" }}
      whatsappMessage={`Hello — I'm interested in ${product.name} by ${product.brand}.`}
      products={related}
      pillars={[
        { title: "Notes", body: `Top: ${product.notesTop.join(", ")}. Heart: ${product.notesHeart.join(", ")}. Base: ${product.notesBase.join(", ")}.` },
        { title: "Strength & longevity", body: `${product.strength} sillage in ${product.size}. Designed to be worn close, not announced.` },
        { title: "Provenance", body: `${product.origin}. Sourced through our partners and shipped sealed, with a hand-noted order card.` },
      ]}
      faq={[
        { q: "Is this the authentic bottle?", a: "Yes — sourced from authorised channels and sealed on arrival. We include provenance with every order." },
        { q: "Do you ship to my country?", a: "We ship discreetly worldwide in three to seven business days. Restrictions on alcohol-based fragrances apply in a few jurisdictions." },
        { q: "Can I sample first?", a: "Yes — request a 2 ml decant via WhatsApp before committing to the full bottle." },
      ]}
    />
  );
}
