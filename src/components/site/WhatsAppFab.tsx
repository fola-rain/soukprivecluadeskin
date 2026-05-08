"use client";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export function WhatsAppFab({ message = "Hello Souk Privé — I'd like to speak with the concierge." }: { message?: string }) {
  return (
    <a
      className="wa-fab"
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer"
      aria-label="Message the Souk Privé concierge on WhatsApp"
    >
      <MessageCircle size={16} strokeWidth={1.5} />
      <span>Concierge</span>
    </a>
  );
}
