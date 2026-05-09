import { createFileRoute } from "@tanstack/react-router";
import { LandingShell } from "@/components/site/LandingShell";
import { productsByCollection, COLLECTIONS } from "@/lib/site-data";

export const Route = createFileRoute("/lp/date-night")({
  head: () => ({
    meta: [
      { title: "For the Quiet Evenings — Souk Privé" },
      { name: "description", content: "Suede, iris, plum and rose. Fragrances chosen for evenings that should be remembered." },
      { property: "og:title", content: "For the Quiet Evenings — Souk Privé" },
      { property: "og:description", content: "Date-night fragrances curated by the Souk Privé concierge." },
    ],
  }),
  component: () => (
    <LandingShell
      eyebrow="Edit · Date Night"
      title={<>Worn close to <em style={{ color: "rgba(245,240,232,0.6)" }}>skin.</em></>}
      intro="A small selection of compositions built for the curl of a wrist after dark — suede, iris, plum, oud. Each chosen for its restraint, not its volume."
      hero={COLLECTIONS.find((c) => c.slug === "date-night")!.image}
      primaryCta={{ label: "Shop Date Night", to: "/shop/use/date-night" }}
      secondaryCta={{ label: "Find your scent", to: "/find-my-product" }}
      whatsappMessage="Hello — I'd like a date-night recommendation."
      products={productsByCollection("date-night")}
      faq={[
        { q: "How long do these fragrances last?", a: "Most compositions on this edit are Strong or Long-Lasting — eight to twelve hours on skin, longer on fabric." },
        { q: "Can the concierge gift-wrap?", a: "Yes. Every order can be sealed in linen and wax at no charge — note it in the order or message us on WhatsApp." },
        { q: "Do you ship internationally?", a: "Yes — discreetly, in plain shippers, to most countries in three to seven business days." },
      ]}
    />
  ),
});
