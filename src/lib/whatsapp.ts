import { SITE } from "./site-data";

export function whatsappLink(message: string) {
  const phone = SITE.whatsapp.replace(/[^0-9]/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
