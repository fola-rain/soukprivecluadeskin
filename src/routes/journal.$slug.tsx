import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { JOURNAL_POSTS } from "@/lib/site-data";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const post = JOURNAL_POSTS.find(p => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.post.title} — Souk Privé Journal` }] }),
  component: JournalPost,
});

function JournalPost() {
  const { post } = Route.useLoaderData();
  return (
    <article>
      <div style={{ aspectRatio: "16/7", overflow: "hidden", background: "var(--ivory2)" }}>
        <img src={post.cover} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "60px clamp(24px,5vw,40px) 120px" }}>
        <div className="utility-mono" style={{ color: "var(--muted)", marginBottom: 16 }}>{post.eyebrow} · {post.date}</div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.4rem, 6vw, 4.2rem)", fontWeight: 300, lineHeight: 1.05, marginBottom: 32 }}>{post.title}</h1>
        <div style={{ fontSize: 17, lineHeight: 1.85, color: "var(--ink)", whiteSpace: "pre-line" }}>{post.body}</div>
        <div style={{ marginTop: 56, paddingTop: 24, borderTop: "1px solid var(--border-lt)" }}>
          <Link to="/journal" className="btn-text">← All entries</Link>
        </div>
      </div>
    </article>
  );
}
