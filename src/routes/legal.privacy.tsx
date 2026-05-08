import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({ meta: [{ title: "Privacy — Souk Privé" }] }),
  component: () => <Legal title="Privacy Policy" body={`We collect only what we need to ship your order and remember you next time — your name, email, phone, address, and bag history. We never sell or share this data with third parties beyond the carriers we use to deliver to you.\n\nYou may request a copy or deletion of your data at any time by writing to concierge@soukprive.com.`} />,
});
function Legal({ title, body }: { title: string; body: string }) {
  return (
    <section style={{ paddingTop: "calc(var(--nav-h) + 64px)", paddingBottom: 120, padding: "calc(var(--nav-h) + 64px) clamp(24px,5vw,80px) 120px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div className="eyebrow dim">Legal</div>
        <h1 className="section-hl" style={{ marginBottom: 32 }}>{title}</h1>
        <div style={{ fontSize: 15, lineHeight: 1.85, whiteSpace: "pre-line" }}>{body}</div>
      </div>
    </section>
  );
}
