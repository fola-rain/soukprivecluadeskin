import { createFileRoute } from "@tanstack/react-router";
import { LandingShell } from "@/components/site/LandingShell";
import { productsByCollection, COLLECTIONS } from "@/lib/site-data";

export const Route = createFileRoute("/lp/gifts")({
  head: () => ({
    meta: [
      { title: "The Gifting Edit — Souk Privé" },
      { name: "description", content: "Concierge-wrapped, sealed with wax. Fragrance gifts for the people you'd actually slow down for." },
      { property: "og:title", content: "The Gifting Edit — Souk Privé" },
      { property: "og:description", content: "Hand-wrapped fragrance gifts, delivered with care." },
    ],
  }),
  component: () => (
    <LandingShell
      eyebrow="Edit · Gifts"
      title={<>A gift, <em style={{ color: "rgba(245,240,232,0.6)" }}>not a transaction.</em></>}
      intro="Each piece is sealed in wax, lined in linen, and accompanied by a hand-noted card. Tell us who it's for — the concierge will steer you to the right composition."
      hero={COLLECTIONS.find((c) => c.slug === "gifts")!.image}
      primaryCta={{ label: "Shop Gifts", to: "/shop/use/gifts" }}
      secondaryCta={{ label: "Ask the concierge", to: "/contact" }}
      whatsappMessage="Hello — I'd like help choosing a gift."
      products={productsByCollection("gifts")}
      pillars={[
        { title: "Linen-lined, wax-sealed", body: "Every gift order is wrapped in linen and sealed by hand. No plastic, no logos, no fuss." },
        { title: "A note from you", body: "Add a personal message at checkout — written in ink, slipped inside the box." },
        { title: "Delivered with care", body: "Discreet shipping, signature on delivery, and a WhatsApp from a real person when it arrives." },
      ]}
      faq={[
        { q: "Can I send to a different address?", a: "Yes — enter the recipient's address at checkout. We never include a price slip in the box." },
        { q: "Can I include a card?", a: "Yes. Add your message at checkout and we'll write it by hand on a Souk Privé card." },
        { q: "What if they don't love it?", a: "Unopened pieces can be exchanged within 14 days. Our concierge will arrange the swap quietly." },
      ]}
    />
  ),
});
