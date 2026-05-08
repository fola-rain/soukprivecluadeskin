import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import { PRODUCTS } from "@/lib/site-data";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/find-my-product")({
  head: () => ({ meta: [{ title: "Find My Product — Souk Privé" }] }),
  component: Quiz,
});

const Q = [
  { id: "gender", q: "Who is this for?", opts: ["Men", "Women", "Unisex"] },
  { id: "use", q: "Where will it live?", opts: ["Date Night", "Office & Business", "Everyday Luxury", "Signature Scents", "Gifts"] },
  { id: "strength", q: "How present should it be?", opts: ["Light", "Moderate", "Strong", "Long Lasting"] },
  { id: "region", q: "Which house tradition speaks to you?", opts: ["Arabian", "French", "European"] },
] as const;

function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const done = step >= Q.length;

  const recs = done
    ? PRODUCTS.filter(p =>
        (!answers.gender || p.gender === answers.gender) &&
        (!answers.region || p.region === answers.region) &&
        (!answers.strength || p.strength === answers.strength) &&
        (!answers.use || p.use.includes(answers.use))
      ).slice(0, 3)
    : [];

  return (
    <section style={{ paddingTop: "calc(var(--nav-h) + 64px)", paddingBottom: 120, paddingLeft: "clamp(24px,5vw,80px)", paddingRight: "clamp(24px,5vw,80px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div className="eyebrow dim">Find My Product · Step {Math.min(step + 1, Q.length)} of {Q.length}</div>

        {!done && (
          <>
            <h1 className="section-hl" style={{ marginBottom: 48 }}>{Q[step].q}</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
              {Q[step].opts.map(o => (
                <button key={o} onClick={() => { setAnswers({ ...answers, [Q[step].id]: o }); setStep(step + 1); }}
                  style={{ padding: "32px 20px", background: "transparent", border: "1px solid var(--border-lt)", color: "inherit", fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontStyle: "italic", textAlign: "left", transition: "background 0.3s, border-color 0.3s", cursor: "pointer" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--sand)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-lt)"; }}>
                  {o}
                </button>
              ))}
            </div>
            {step > 0 && <button onClick={() => setStep(step - 1)} className="btn-text" style={{ marginTop: 32 }}>← Back</button>}
          </>
        )}

        {done && (
          <>
            <h1 className="section-hl" style={{ marginBottom: 16 }}><Sparkles size={28} style={{ display: "inline", verticalAlign: "middle", marginRight: 12 }} /> Three bottles for <em>you</em>.</h1>
            <p style={{ color: "var(--muted)", marginBottom: 40, maxWidth: 520, lineHeight: 1.8 }}>
              Based on your answers, our concierge suggests these three. Open any for the full notes — or message us for a deeper consultation.
            </p>
            {recs.length > 0 ? (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 2 }}>
                {recs.map(r => <ProductCard key={r.slug} product={r} />)}
              </div>
            ) : (
              <p style={{ fontStyle: "italic", color: "var(--muted)" }}>No exact match — try our <Link to="/request-a-product" style={{ textDecoration: "underline" }}>request form</Link>.</p>
            )}
            <button onClick={() => { setAnswers({}); setStep(0); }} className="btn-text" style={{ marginTop: 32 }}>Begin again →</button>
          </>
        )}
      </div>
    </section>
  );
}
