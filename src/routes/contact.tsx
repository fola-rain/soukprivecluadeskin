import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Souk Privé" }] }),
  component: Contact,
});

function Contact() {
  return (
    <section style={{ paddingTop: "calc(var(--nav-h) + 64px)", paddingBottom: 120, padding: "calc(var(--nav-h) + 64px) clamp(24px,5vw,80px) 120px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="eyebrow dim">Concierge</div>
        <h1 className="section-hl" style={{ marginBottom: 56 }}>Speak with <em>us</em>.</h1>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <ChannelCard icon={<MessageCircle size={18} />} title="WhatsApp Concierge" body={SITE.whatsappDisplay} cta="Open WhatsApp" href={whatsappLink("Hello Souk Privé.")}/>
            <ChannelCard icon={<Mail size={18} />} title="Email" body={SITE.email} cta="Write to us" href={`mailto:${SITE.email}`} />
            <ChannelCard icon={<MapPin size={18} />} title="Atelier (by appointment)" body={"DIFC — Dubai\nVisits arranged through concierge."} />
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="field-row"><label className="field-label">Name</label><input className="field-input" /></div>
            <div className="field-row"><label className="field-label">Email</label><input className="field-input" type="email" /></div>
            <div className="field-row"><label className="field-label">Message</label><textarea className="field-textarea" /></div>
            <button type="submit" className="btn-dark" style={{ marginTop: 12 }}>Send →</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ChannelCard({ icon, title, body, cta, href }: { icon: React.ReactNode; title: string; body: string; cta?: string; href?: string }) {
  return (
    <div style={{ borderTop: "1px solid var(--border-lt)", paddingTop: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, color: "var(--umber)" }}>{icon}<span className="utility-mono" style={{ color: "var(--muted)" }}>{title}</span></div>
      <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.6rem", whiteSpace: "pre-line", marginBottom: 12 }}>{body}</p>
      {cta && href && <a href={href} target="_blank" rel="noreferrer" className="btn-text">{cta} →</a>}
    </div>
  );
}
