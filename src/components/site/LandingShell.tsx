"use client";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, ShieldCheck, Truck, Sparkles, Star } from "lucide-react";
import type { Product } from "@/lib/site-data";
import { ProductCard } from "./ProductCard";
import { whatsappLink } from "@/lib/whatsapp";
import { TESTIMONIALS } from "@/lib/site-data";

export type LandingProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  hero: string;
  primaryCta: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  whatsappMessage?: string;
  products?: Product[];
  pillars?: { title: string; body: string }[];
  faq?: { q: string; a: string }[];
  trustBar?: string[];
};

const DEFAULT_PILLARS = [
  { title: "Authenticity, sealed", body: "Every flacon is sourced through trusted houses and arrives sealed, with provenance noted on the order card." },
  { title: "Concierge by WhatsApp", body: "An actual person, on a real phone, who knows the catalog. No bots, no queues." },
  { title: "Discreet, global shipping", body: "Linen-lined shipper, plain exterior. Delivered worldwide in three to seven days." },
];

const DEFAULT_TRUST = ["Authenticity", "Sourced Globally", "Concierge", "Discreet Shipping"];

export function LandingShell(p: LandingProps) {
  const pillars = p.pillars ?? DEFAULT_PILLARS;
  const trust = p.trustBar ?? DEFAULT_TRUST;
  const wa = whatsappLink(p.whatsappMessage ?? "Hello Souk Privé — I'm interested.");

  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "flex-end", overflow: "hidden", background: "var(--ink)" }}>
        <img src={p.hero} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.65 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(14,12,10,0.55) 0%, transparent 38%, rgba(14,12,10,0.95) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "0 clamp(24px,5vw,80px) clamp(56px,8vw,96px)", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          <div className="eyebrow" style={{ marginBottom: 24 }}>{p.eyebrow}</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.6rem, 8vw, 7rem)", fontWeight: 300, lineHeight: 0.98, letterSpacing: "-0.02em", marginBottom: 28, maxWidth: 900, color: "var(--ivory)" }}>
            {p.title}
          </h1>
          <p style={{ fontSize: "clamp(0.9rem, 1.2vw, 1rem)", lineHeight: 1.8, color: "rgba(245,240,232,0.6)", maxWidth: 520, marginBottom: 36 }}>
            {p.intro}
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link to={p.primaryCta.to as any} className="btn-outline">{p.primaryCta.label} <ArrowRight size={11} /></Link>
            {p.secondaryCta && <Link to={p.secondaryCta.to as any} className="btn-text">{p.secondaryCta.label} →</Link>}
            <a href={wa} target="_blank" rel="noreferrer" className="btn-text" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <MessageCircle size={14} strokeWidth={1.25} /> Concierge on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <div className="marquee-strip">
        <div className="mq-track">
          {[...trust, ...trust, ...trust].map((t, i) => (
            <div key={i} className="mq-item">{t}<span className="mq-sep" /></div>
          ))}
        </div>
      </div>

      {/* PILLARS */}
      <section style={{ padding: "clamp(72px,10vw,128px) clamp(24px,5vw,80px)", background: "var(--linen)", color: "var(--ink)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="eyebrow dim">Why Souk Privé</div>
          <h2 className="section-hl" style={{ marginBottom: 56, maxWidth: 720 }}>The small things, <em>done right</em>.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 48 }}>
            {pillars.map((pl, i) => (
              <div key={i} style={{ borderTop: "1px solid var(--border-lt)", paddingTop: 24 }}>
                <div className="utility-mono" style={{ color: "var(--muted)", marginBottom: 14 }}>{String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 400, marginBottom: 12 }}>{pl.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--umber)" }}>{pl.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      {p.products && p.products.length > 0 && (
        <section style={{ padding: "clamp(72px,10vw,128px) clamp(24px,5vw,80px)", background: "var(--ivory)", color: "var(--ink)" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="eyebrow dim">The Edit</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
              <h2 className="section-hl" style={{ maxWidth: 600 }}>Selected for <em>this</em> moment.</h2>
              <Link to={p.primaryCta.to as any} className="btn-text">View all →</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 32 }}>
              {p.products.slice(0, 4).map((pr) => (<ProductCard key={pr.slug} product={pr} />))}
            </div>
          </div>
        </section>
      )}

      {/* TESTIMONIAL */}
      <section style={{ padding: "clamp(72px,10vw,128px) clamp(24px,5vw,80px)", background: "var(--ink)", color: "var(--ivory)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", gap: 4, marginBottom: 28, color: "var(--sand)" }}>
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
          </div>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", lineHeight: 1.35, fontWeight: 300, marginBottom: 32 }}>
            "{TESTIMONIALS[0].quote}"
          </p>
          <div className="utility-mono" style={{ color: "var(--sand)" }}>{TESTIMONIALS[0].author} · {TESTIMONIALS[0].location}</div>
        </div>
      </section>

      {/* FAQ */}
      {p.faq && p.faq.length > 0 && (
        <section style={{ padding: "clamp(72px,10vw,128px) clamp(24px,5vw,80px)", background: "var(--linen)", color: "var(--ink)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div className="eyebrow dim">Questions</div>
            <h2 className="section-hl" style={{ marginBottom: 48 }}>Quietly answered.</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {p.faq.map((f, i) => (
                <details key={i} style={{ borderTop: "1px solid var(--border-lt)", padding: "24px 0" }}>
                  <summary style={{ cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 400 }}>
                    {f.q}
                    <span className="utility-mono" style={{ color: "var(--muted)" }}>+</span>
                  </summary>
                  <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.8, color: "var(--umber)", maxWidth: 700 }}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section style={{ padding: "clamp(80px,12vw,160px) clamp(24px,5vw,80px)", background: "var(--espresso)", color: "var(--ivory)", textAlign: "center" }}>
        <div className="eyebrow" style={{ marginBottom: 24 }}>Begin</div>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.4rem, 6vw, 5rem)", fontWeight: 300, lineHeight: 1, marginBottom: 28, maxWidth: 800, margin: "0 auto 28px" }}>
          A bottle, <em style={{ color: "var(--sand)" }}>delivered as if by hand</em>.
        </h2>
        <div style={{ display: "inline-flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginTop: 12 }}>
          <Link to={p.primaryCta.to as any} className="btn-outline">{p.primaryCta.label} <ArrowRight size={11} /></Link>
          <a href={wa} target="_blank" rel="noreferrer" className="btn-text" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <MessageCircle size={14} /> WhatsApp the concierge
          </a>
        </div>
      </section>
    </>
  );
}
