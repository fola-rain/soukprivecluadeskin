import { createFileRoute, Link } from "@tanstack/react-router";
import { JOURNAL_POSTS } from "@/lib/site-data";

export const Route = createFileRoute("/journal")({
  head: () => ({ meta: [{ title: "Journal — Souk Privé" }] }),
  component: JournalIndex,
});

function JournalIndex() {
  return (
    <section style={{ paddingTop: "calc(var(--nav-h) + 64px)", paddingBottom: 120, padding: "calc(var(--nav-h) + 64px) clamp(24px,5vw,80px) 120px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="eyebrow dim">The Journal</div>
        <h1 className="section-hl" style={{ marginBottom: 56 }}>Read, <em>slowly</em>.</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 40 }}>
          {JOURNAL_POSTS.map(j => (
            <Link key={j.slug} to="/journal/$slug" params={{ slug: j.slug }} style={{ display: "block" }}>
              <div style={{ aspectRatio: "4/3", overflow: "hidden", background: "var(--ivory2)", marginBottom: 18 }}>
                <img src={j.cover} alt={j.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="utility-mono" style={{ marginBottom: 10, color: "var(--muted)" }}>{j.eyebrow} · {j.date}</div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", fontWeight: 300, lineHeight: 1.2, marginBottom: 10 }}>{j.title}</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{j.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
