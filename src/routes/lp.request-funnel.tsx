import { createFileRoute } from "@tanstack/react-router";
import { LandingShell } from "@/components/site/LandingShell";
import { ORIGINALS_IMAGE } from "@/lib/site-data";

export const Route = createFileRoute("/lp/request-funnel")({
  head: () => ({
    meta: [
      { title: "Request a Fragrance — Souk Privé" },
      { name: "description", content: "Looking for a discontinued bottle, a niche house, or a hard-to-find Arabian oil? Our concierge will find it." },
      { property: "og:title", content: "Request a Fragrance — Souk Privé" },
      { property: "og:description", content: "Concierge sourcing for discontinued and rare fragrances." },
    ],
  }),
  component: () => (
    <LandingShell
      eyebrow="Concierge · Sourcing"
      title={<>If we don't have it — <em style={{ color: "rgba(245,240,232,0.6)" }}>we'll find it.</em></>}
      intro="A discontinued bottle, a regional release, an old batch you remember from somewhere else. Tell us what you're looking for and our concierge will source it through our houses worldwide."
      hero={ORIGINALS_IMAGE}
      primaryCta={{ label: "Submit a Request", to: "/request-a-product" }}
      secondaryCta={{ label: "Or message us directly", to: "/contact" }}
      whatsappMessage="Hello — I'm looking for a specific fragrance, can you help?"
      pillars={[
        { title: "Tell us the details", body: "Brand, composition, batch year, region — even a memory. The more we know, the faster we move." },
        { title: "We source quietly", body: "Our network spans Paris, Hejaz, the UAE, and Tokyo. Most requests are answered within ten days." },
        { title: "You decide", body: "We send a quote with provenance and photos. Buy it, or pass — no obligation either way." },
      ]}
      faq={[
        { q: "Is there a fee to submit a request?", a: "No. We only charge if you accept the quote and we ship." },
        { q: "How long does it take?", a: "Most requests are answered within ten business days. Rare or discontinued runs can take longer." },
        { q: "What if you can't find it?", a: "We tell you honestly. If the bottle doesn't exist on any market we trust, we won't pretend it does." },
      ]}
    />
  ),
});
