import { createFileRoute, Link } from "@tanstack/react-router";
import { LandingShell } from "@/components/site/LandingShell";
import { HERO_IMAGE, bestsellers } from "@/lib/site-data";

export const Route = createFileRoute("/lp/quiz-funnel")({
  head: () => ({
    meta: [
      { title: "Find Your Scent — Souk Privé" },
      { name: "description", content: "A short, considered quiz that pairs you with a fragrance worth keeping. Built by our concierge." },
      { property: "og:title", content: "Find Your Scent — Souk Privé" },
      { property: "og:description", content: "Take the Souk Privé scent quiz." },
    ],
  }),
  component: () => (
    <LandingShell
      eyebrow="Concierge · Quiz"
      title={<>Five questions. <em style={{ color: "rgba(245,240,232,0.6)" }}>One bottle.</em></>}
      intro="A short, considered quiz built by our concierge. Tell us how you live and we'll point you to a single composition worth keeping — no upsell, no funnel."
      hero={HERO_IMAGE}
      primaryCta={{ label: "Begin the Quiz", to: "/find-my-product" }}
      secondaryCta={{ label: "Or browse the shop", to: "/shop" }}
      whatsappMessage="Hello — can you help me find a scent?"
      products={bestsellers()}
      pillars={[
        { title: "Two minutes", body: "Five questions about how you live, work, and dress. No personal data collected." },
        { title: "One recommendation", body: "We send back a single bottle — not a list of ten. The decision should feel simple." },
        { title: "Concierge follow-up", body: "If the recommendation doesn't sit right, our team will steer you by WhatsApp at no charge." },
      ]}
      faq={[
        { q: "Is the quiz free?", a: "Yes — and there's no purchase required at the end." },
        { q: "Can I try before I buy?", a: "Yes. We offer 2 ml decants on most compositions — ask the concierge after your quiz." },
        { q: "What if I don't like the recommendation?", a: "We'll exchange any unopened bottle within 14 days, and the concierge will help you find a better fit." },
      ]}
    />
  ),
});
