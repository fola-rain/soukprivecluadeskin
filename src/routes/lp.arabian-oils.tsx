import { createFileRoute } from "@tanstack/react-router";
import { LandingShell } from "@/components/site/LandingShell";
import { productsByCollection, COLLECTIONS } from "@/lib/site-data";

export const Route = createFileRoute("/lp/arabian-oils")({
  head: () => ({
    meta: [
      { title: "Arabian Oils & Attars — Souk Privé" },
      { name: "description", content: "Pure oud, attar, and oil — sourced from Hejaz, Oman, and the UAE, then rested before bottling." },
      { property: "og:title", content: "Arabian Oils & Attars — Souk Privé" },
      { property: "og:description", content: "Genuine Arabian oils, available worldwide." },
    ],
  }),
  component: () => (
    <LandingShell
      eyebrow="Collection · 01"
      title={<>The <em style={{ color: "rgba(245,240,232,0.6)" }}>oud,</em> rested.</>}
      intro="We work directly with small distillers in Hejaz, Oman, and the UAE. Every oil is rested in glass for at least nine months before it ever touches skin."
      hero={COLLECTIONS.find((c) => c.slug === "arabian-oils")!.image}
      primaryCta={{ label: "Shop Arabian Oils", to: "/shop/region/arabian" }}
      secondaryCta={{ label: "Read the journal", to: "/journal/the-art-of-resting-oud" }}
      whatsappMessage="Hello — I'm looking for a specific Arabian oil."
      products={productsByCollection("arabian-oils")}
      pillars={[
        { title: "Sourced at the still", body: "Our buyers visit the distillers in person. No middlemen, no relabelling." },
        { title: "Rested in glass", body: "A minimum of nine months of rest before bottling — you smell the patience." },
        { title: "Sealed for travel", body: "Each oil ships in a leak-tight inner sleeve, lined in linen and wrapped by hand." },
      ]}
      faq={[
        { q: "How is your oud different?", a: "We work with small Hejaz and Omani houses that rest the oil for nine to twenty-four months. Younger oud arrives sharp; ours arrives composed." },
        { q: "Are these alcohol-free?", a: "Most of our pure attars and oils are alcohol-free. The product page lists the formulation." },
        { q: "Can you source a specific oil?", a: "Almost always — message the concierge with the house, batch, or year. We've found discontinued runs in under two weeks." },
      ]}
    />
  ),
});
