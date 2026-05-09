import { createFileRoute } from "@tanstack/react-router";
import { LandingShell } from "@/components/site/LandingShell";
import { ABOUT_IMAGE } from "@/lib/site-data";

export const Route = createFileRoute("/lp/reseller")({
  head: () => ({
    meta: [
      { title: "For Boutiques & Resellers — Souk Privé" },
      { name: "description", content: "Wholesale and private-label opportunities for boutiques, hotels, and concept stores worldwide." },
      { property: "og:title", content: "For Boutiques & Resellers — Souk Privé" },
      { property: "og:description", content: "Partner with Souk Privé." },
    ],
  }),
  component: () => (
    <LandingShell
      eyebrow="Trade · Wholesale"
      title={<>For the houses we'd <em style={{ color: "rgba(245,240,232,0.6)" }}>like to keep company with.</em></>}
      intro="We work with a small number of boutiques, hotels, and concept stores around the world — supplying our Originals line and curated parallel imports under wholesale terms."
      hero={ABOUT_IMAGE}
      primaryCta={{ label: "Apply to Stock", to: "/contact" }}
      secondaryCta={{ label: "About the house", to: "/about" }}
      whatsappMessage="Hello — I'd like to enquire about wholesale terms."
      pillars={[
        { title: "Curated allocation", body: "Limited quantities per region. We protect the houses we already work with." },
        { title: "Private label available", body: "We can blend, bottle, and ship a small in-house line for established boutiques." },
        { title: "Concierge support", body: "Each partner has a direct line to our team — by WhatsApp, in your time zone." },
      ]}
      faq={[
        { q: "What is the minimum order?", a: "Wholesale opens at twelve units across our Originals line. Parallel imports are quoted on request." },
        { q: "Do you offer exclusivity?", a: "Sometimes — by region and by category. We discuss this case by case after a first order." },
        { q: "What are your payment terms?", a: "First order is pre-paid. From the second order we offer net-30 terms with a verified business reference." },
      ]}
    />
  ),
});
