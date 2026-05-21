import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { HERO_IMAGE, COLLECTIONS, bestsellers, TESTIMONIALS, JOURNAL_POSTS, SITE } from "@/lib/site-data";
import { ProductCard } from "@/components/site/ProductCard";
import { whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Souk Privé — Scent, kept private." },
      { name: "description", content: "A small house of rare fragrances and rested Arabian oils. Sourced quietly, sealed by hand, sent to the few who notice." },
      { property: "og:title", content: "Souk Privé — Scent, kept private." },
      { property: "og:description", content: "For people who don't wear scent for the room. Rare bottles, rested oud, concierge by WhatsApp." },
    ],
  }),
  component: Home,
});

const TRUST = [
  "Sealed by hand",
  "Rested, not rushed",
  "Sourced at the still",
  "Sent in plain paper",
  "A real person on WhatsApp",
  "No mailing list noise",
];

function Home() {
  const sellers = bestsellers().slice(0, 4);
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", overflow: "hidden", background: "var(--ink)" }}>
        <img src={HERO_IMAGE} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(14,12,10,0.55) 0%, transparent 35%, rgba(14,12,10,0.95) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "0 clamp(24px,5vw,80px) clamp(56px,8vw,96px)", maxWidth: 1440, margin: "0 auto", width: "100%" }}>
          <div className="eyebrow" style={{ marginBottom: 24 }}>A small house · Est. MMXXVI</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 9vw, 8.5rem)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.02em", marginBottom: 28, maxWidth: 1000 }}>
            <span style={{ color: "var(--ivory)" }}>You don't wear it </span>
            <span style={{ fontStyle: "italic", color: "rgba(245,240,232,0.6)" }}>for the room.</span>
          </h1>
          <p style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.8, color: "rgba(245,240,232,0.65)", maxWidth: 520, marginBottom: 36 }}>
            Scent is the most private thing you own. We keep a small house of rare bottles and rested Arabian oils — sourced quietly from Hejaz, Grasse and Paris, and sent to the few who notice the difference.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link to="/shop" className="btn-outline">Step inside <ArrowRight size={11} /></Link>
            <Link to="/find-my-product" className="btn-text">Help me choose →</Link>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "clamp(32px,5vw,52px)", right: "clamp(20px,4vw,56px)", fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(196,181,160,0.4)", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          Souk Privé · MMXXVI
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <div className="marquee-strip">
        <div className="mq-track">
          {[...TRUST, ...TRUST, ...TRUST].map((t, i) => (
            <div key={i} className="mq-item">{t}<span className="mq-sep" /></div>
          ))}
        </div>
      </div>

      {/* MANIFESTO — brand stance */}
      <section style={{ padding: "clamp(96px,14vw,180px) clamp(24px,5vw,80px)", background: "var(--ink)", color: "var(--ivory)", borderTop: "1px solid var(--border-dk)" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div className="eyebrow" style={{ marginBottom: 28 }}>The house, in one breath</div>
          <p style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(1.6rem, 3.4vw, 2.8rem)", lineHeight: 1.3, letterSpacing: "-0.01em", color: "var(--ivory)" }}>
            We're against the perfume aisle. Against the rush, the relabel, the loud launch.{" "}
            <span style={{ color: "rgba(245,240,232,0.55)" }}>
              Souk Privé is a small house for people who treat scent like a letter — written once, sealed slowly, given only to those who'll read it twice.
            </span>
          </p>
          <div style={{ marginTop: 40, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link to="/about" className="btn-text">Read our quiet manifesto →</Link>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section style={{ padding: "clamp(80px,12vw,160px) clamp(24px,5vw,80px)", background: "var(--linen)", color: "var(--ink)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div className="eyebrow dim">Three rooms · 02</div>
          <h2 className="section-hl" style={{ marginBottom: 24, maxWidth: 800 }}>
            Choose the <em>mood</em>, not the marketing.
          </h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.8, maxWidth: 520, marginBottom: 56 }}>
            We don't organise the shelf by brand. We organise it by the evening you're walking into.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: 2 }}>
            <Link to={COLLECTIONS[0].href} style={{ position: "relative", gridRow: "span 2", overflow: "hidden", background: "var(--ivory2)" }}>
              <img src={COLLECTIONS[0].image} alt={COLLECTIONS[0].name} style={{ width: "100%", height: "100%", objectFit: "cover", aspectRatio: "3/4", transition: "transform 1.2s var(--ease-silk)" }} loading="lazy" />
              <div style={collInfo}>
                <div style={collLabel}>{COLLECTIONS[0].label}</div>
                <div style={collName}>{COLLECTIONS[0].name}</div>
                <div style={collArrow}>Discover →</div>
              </div>
            </Link>
            {COLLECTIONS.slice(1).map((c) => (
              <Link key={c.slug} to={c.href} style={{ position: "relative", overflow: "hidden", background: "var(--ivory2)" }}>
                <img src={c.image} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "cover", aspectRatio: "4/3.2", transition: "transform 1.2s var(--ease-silk)" }} loading="lazy" />
                <div style={collInfo}>
                  <div style={collLabel}>{c.label}</div>
                  <div style={collName}>{c.name}</div>
                  <div style={collArrow}>Discover →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section style={{ padding: "clamp(80px,12vw,160px) 0", background: "var(--ink)" }}>
        <div style={{ padding: "0 clamp(24px,5vw,80px)", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, marginBottom: 48, maxWidth: 1440, margin: "0 auto 48px" }}>
          <div>
            <div className="eyebrow">Kept on the shelf · 03</div>
            <h2 className="section-hl" style={{ maxWidth: 700, color: "var(--ivory)" }}>
              The bottles people <em>come back</em> for.
            </h2>
          </div>
          <Link to="/shop" className="btn-text">View all →</Link>
        </div>
        <div style={{ overflowX: "auto", padding: "0 clamp(24px,5vw,80px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(260px, 1fr))", gap: 2, width: "max-content", minWidth: "100%" }}>
            {sellers.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      {/* FIND MY SCENT */}
      <section style={{ minHeight: "60vh", background: "var(--espresso)", display: "flex", alignItems: "center", padding: "clamp(80px,12vw,140px) clamp(24px,5vw,80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", right: "-4%", transform: "translateY(-50%)", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(8rem, 20vw, 18rem)", fontWeight: 300, color: "rgba(196,181,160,0.05)", lineHeight: 1, pointerEvents: "none" }}>
          Discover.
        </div>
        <div style={{ position: "relative", maxWidth: 720 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Find your scent · 04</div>
          <h2 className="section-hl" style={{ color: "var(--ivory)", marginBottom: 24 }}>
            Five quiet questions. <em>One bottle that feels like yours.</em>
          </h2>
          <p style={{ color: "rgba(245,240,232,0.6)", maxWidth: 520, marginBottom: 32, lineHeight: 1.8 }}>
            Not an algorithm guessing your mood — a short, considered conversation. Tell us how you live, work, and dress, and we'll point you to a single composition worth keeping.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link to="/find-my-product" className="btn-outline">Take the quiz <Sparkles size={11} /></Link>
            <a href={whatsappLink("Hello Souk Privé — can you help me find my scent?")} className="btn-text" target="_blank" rel="noreferrer">
              <MessageCircle size={11} /> Or ask the concierge
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "clamp(80px,12vw,140px) 0", background: "var(--ink)", overflow: "hidden" }}>
        <div style={{ padding: "0 clamp(24px,5vw,80px)", maxWidth: 1440, margin: "0 auto" }}>
          <div className="eyebrow">From people who notice · 06</div>
          <h2 className="section-hl" style={{ color: "var(--ivory)", marginBottom: 56, maxWidth: 700 }}>
            Said in <em>private</em>, not for the algorithm.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} style={{ borderTop: "1px solid var(--border-dk)", paddingTop: 24 }}>
                <blockquote style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.4rem", lineHeight: 1.4, color: "rgba(245,240,232,0.85)", marginBottom: 24 }}>
                  "{t.quote}"
                </blockquote>
                <figcaption className="utility-mono" style={{ fontSize: 9 }}>
                  {t.author} · {t.location}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section style={{ padding: "clamp(60px,8vw,100px) clamp(24px,5vw,80px)", background: "var(--ink)", borderTop: "1px solid var(--border-dk)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, gap: 24, flexWrap: "wrap" }}>
          <div>
            <div className="eyebrow">@soukprive · 06</div>
            <h2 className="section-hl" style={{ color: "var(--ivory)" }}>From the <em>atelier</em>.</h2>
          </div>
          <a href={SITE.instagram} target="_blank" rel="noreferrer" className="btn-text">Follow on Instagram →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 2, maxWidth: 1440, margin: "0 auto" }}>
          {bestsellers().concat(bestsellers()).slice(0, 6).map((p, i) => (
            <a key={i} href={SITE.instagram} target="_blank" rel="noreferrer" style={{ aspectRatio: "1/1", overflow: "hidden", background: "var(--espresso)" }}>
              <img src={p.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s var(--ease-silk)" }} loading="lazy" />
            </a>
          ))}
        </div>
      </section>

      {/* JOURNAL TEASE */}
      <section style={{ padding: "clamp(80px,12vw,140px) clamp(24px,5vw,80px)", background: "var(--ink)", borderTop: "1px solid var(--border-dk)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, gap: 24, flexWrap: "wrap" }}>
            <div>
              <div className="eyebrow">Journal · 07</div>
              <h2 className="section-hl" style={{ color: "var(--ivory)" }}>Read, slowly.</h2>
            </div>
            <Link to="/journal" className="btn-text">All entries →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
            {JOURNAL_POSTS.slice(0, 3).map((j) => (
              <Link key={j.slug} to="/journal/$slug" params={{ slug: j.slug }} style={{ display: "block", color: "var(--ivory)" }}>
                <div style={{ aspectRatio: "4/3", overflow: "hidden", background: "var(--espresso)", marginBottom: 18 }}>
                  <img src={j.cover} alt={j.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                </div>
                <div className="utility-mono" style={{ marginBottom: 10 }}>{j.eyebrow} · {j.date}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 300, lineHeight: 1.2, marginBottom: 10 }}>{j.title}</h3>
                <p style={{ color: "rgba(245,240,232,0.55)", fontSize: 14, lineHeight: 1.7 }}>{j.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(24px,5vw,80px)", background: "var(--espresso)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center", marginBottom: 16 }}>By invitation</div>
          <h2 className="section-hl" style={{ color: "var(--ivory)", marginBottom: 16 }}>
            One letter a month. <em>Nothing</em> else.
          </h2>
          <p style={{ color: "rgba(245,240,232,0.6)", marginBottom: 32, lineHeight: 1.8 }}>
            New arrivals before the shelf knows. Vintage finds. A line from the concierge. No tracking pixels, no second list.
          </p>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: 0, maxWidth: 480, margin: "0 auto", borderBottom: "1px solid rgba(196,181,160,0.4)" }}>
            <input required type="email" placeholder="Your email" style={{ flex: 1, background: "transparent", border: "none", padding: "14px 0", color: "var(--ivory)", fontSize: 14, outline: "none", textAlign: "center" }} />
            <button type="submit" className="btn-text" style={{ paddingRight: 0 }}>Subscribe →</button>
          </form>
        </div>
      </section>
    </>
  );
}

const collInfo: React.CSSProperties = {
  position: "absolute", bottom: 0, left: 0, right: 0,
  padding: 24,
  background: "linear-gradient(transparent, rgba(14,12,10,0.85))",
  color: "var(--ivory)",
};
const collLabel: React.CSSProperties = {
  fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.25em",
  textTransform: "uppercase", color: "rgba(196,181,160,0.7)", marginBottom: 6,
};
const collName: React.CSSProperties = {
  fontFamily: "var(--font-serif)", fontStyle: "italic",
  fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", fontWeight: 300, lineHeight: 1.1,
};
const collArrow: React.CSSProperties = {
  fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.2em",
  textTransform: "uppercase", color: "var(--sand)", marginTop: 12,
};
