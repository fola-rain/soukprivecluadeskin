// Souk Privé — central catalog + nav data.
// Kept in one module for first release; will move to Cloud-backed
// queries when admin tooling is added.

import heroFlacon from "@/assets/hero-flacon.jpg";
import collArabian from "@/assets/collection-arabian.jpg";
import collDateNight from "@/assets/collection-datenight.jpg";
import collGifts from "@/assets/collection-gifts.jpg";
import aboutBoutique from "@/assets/about-boutique.jpg";
import originalsCraft from "@/assets/originals-craft.jpg";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

export const SITE = {
  name: "Souk Privé",
  tagline: "Where Quality Lives",
  whatsapp: "+971500000000", // E.164 — replace with real number
  whatsappDisplay: "+971 50 000 0000",
  email: "concierge@soukprive.com",
  instagram: "https://instagram.com/soukprive",
  metaPixelId: "", // populate when ad account is connected
};

export const NAV_PRIMARY = [
  { num: "01", label: "Shop", to: "/shop" },
  { num: "02", label: "Find My Product", to: "/find-my-product" },
  { num: "03", label: "Request A Product", to: "/request-a-product" },
  { num: "04", label: "Originals", to: "/originals" },
  { num: "05", label: "Journal", to: "/journal" },
  { num: "06", label: "About", to: "/about" },
  { num: "07", label: "Contact", to: "/contact" },
] as const;

export const SHOP_FILTERS = {
  gender: ["Men", "Women", "Unisex"],
  use: ["Date Night", "Office & Business", "Everyday Luxury", "Gifts", "Signature Scents"],
  strength: ["Light", "Moderate", "Strong", "Long Lasting"],
  region: ["Arabian", "French", "European"],
} as const;

export const BRANDS = [
  "Amouage", "Atelier de Hejaz", "Byredo", "Carlein", "Diptyque",
  "Fenestra", "Hermès", "Ibn Wadih", "Le Labo", "Maison Khaled",
  "Nishane", "Ormonde", "Privé Maison", "Quintessence", "Rouj",
  "Serge Lutens", "Tamarind & Co", "Veld Atelier", "Xerjoff", "Yara Oud",
];

export type Product = {
  slug: string;
  name: string;
  brand: string;
  origin: string; // e.g. "Made in France"
  region: "Arabian" | "French" | "European";
  gender: "Men" | "Women" | "Unisex";
  use: string[];
  strength: "Light" | "Moderate" | "Strong" | "Long Lasting";
  size: string; // "50ml"
  price: number; // USD
  image: string;
  notesTop: string[];
  notesHeart: string[];
  notesBase: string[];
  description: string;
  bestseller?: boolean;
  collections?: string[]; // collection slugs
  rating?: number;
  reviewCount?: number;
};

export const PRODUCTS: Product[] = [
  {
    slug: "ouroud-noir",
    name: "Ouroud Noir",
    brand: "Atelier de Hejaz",
    origin: "Sourced — UAE",
    region: "Arabian",
    gender: "Unisex",
    use: ["Date Night", "Signature Scents"],
    strength: "Long Lasting",
    size: "50 ml",
    price: 285,
    image: p1,
    notesTop: ["Saffron", "Bergamot"],
    notesHeart: ["Cambodian Oud", "Damask Rose"],
    notesBase: ["Vanilla Resin", "Ambergris"],
    description:
      "An unhurried oud — distilled in slow batches, then rested in glass for nine months. Ouroud Noir opens with saffron heat and resolves into a velvet base of vanilla resin and ambergris.",
    bestseller: true, rating: 4.9, reviewCount: 218,
    collections: ["arabian-oils", "date-night", "signature"],
  },
  {
    slug: "soie-cendre",
    name: "Soie Cendré",
    brand: "Carlein",
    origin: "Made in France",
    region: "French",
    gender: "Women",
    use: ["Date Night", "Everyday Luxury"],
    strength: "Moderate",
    size: "75 ml",
    price: 198,
    image: p2,
    notesTop: ["Iris Pallida", "Pink Pepper"],
    notesHeart: ["Suede", "White Tea"],
    notesBase: ["Cashmeran", "Soft Musk"],
    description:
      "Silk over warm skin. A soft chypre built around iris and suede that lingers like memory rather than perfume.",
    bestseller: true, rating: 4.8, reviewCount: 142,
    collections: ["date-night"],
  },
  {
    slug: "rosa-sahara",
    name: "Rosa Sahara",
    brand: "Maison Khaled",
    origin: "Sourced — KSA",
    region: "Arabian",
    gender: "Women",
    use: ["Signature Scents", "Date Night"],
    strength: "Strong",
    size: "50 ml",
    price: 320,
    image: p3,
    notesTop: ["Taif Rose", "Pink Berry"],
    notesHeart: ["Black Honey", "Oud"],
    notesBase: ["Patchouli", "Tonka"],
    description:
      "Sun-dried Taif rose layered over honeyed oud. A statement scent for nights that should be remembered.",
    bestseller: true, rating: 4.9, reviewCount: 96,
    collections: ["arabian-oils", "signature"],
  },
  {
    slug: "blanc-seul",
    name: "Blanc Seul",
    brand: "Privé Maison",
    origin: "Made in France",
    region: "French",
    gender: "Unisex",
    use: ["Office & Business", "Everyday Luxury"],
    strength: "Light",
    size: "100 ml",
    price: 165,
    image: p4,
    notesTop: ["Neroli", "Bergamot"],
    notesHeart: ["White Musk", "Ambrette"],
    notesBase: ["Sandalwood", "Cedar"],
    description:
      "Quiet, almost weightless. A single note of neroli warmed by ambrette — designed for a workday, kept for a lifetime.",
    bestseller: true, rating: 4.7, reviewCount: 311,
    collections: ["everyday"],
  },
  {
    slug: "musk-imperial",
    name: "Musk Imperial",
    brand: "Ibn Wadih",
    origin: "Sourced — Oman",
    region: "Arabian",
    gender: "Men",
    use: ["Office & Business", "Signature Scents"],
    strength: "Strong",
    size: "50 ml",
    price: 245,
    image: p1,
    notesTop: ["Cardamom", "Black Pepper"],
    notesHeart: ["White Musk", "Leather"],
    notesBase: ["Oud Wood", "Birch Tar"],
    description:
      "Spiced leather and white musk on a base of aged oud — a quiet authority for the boardroom and the after-hours.",
    rating: 4.8, reviewCount: 88,
    collections: ["arabian-oils"],
  },
  {
    slug: "fenix-amber",
    name: "Fenix Amber",
    brand: "Nishane",
    origin: "Made in Türkiye",
    region: "European",
    gender: "Unisex",
    use: ["Date Night"],
    strength: "Long Lasting",
    size: "50 ml",
    price: 290,
    image: p2,
    notesTop: ["Pink Pepper", "Saffron"],
    notesHeart: ["Amber", "Labdanum"],
    notesBase: ["Ambergris", "Vanilla"],
    description:
      "A radiant amber that warms in the curl of the wrist. Designed by a Turkish house with a global address.",
    rating: 4.9, reviewCount: 67,
    collections: ["date-night"],
  },
  {
    slug: "vert-marrakech",
    name: "Vert Marrakech",
    brand: "Hermès",
    origin: "Made in France",
    region: "French",
    gender: "Unisex",
    use: ["Everyday Luxury"],
    strength: "Moderate",
    size: "100 ml",
    price: 220,
    image: p3,
    notesTop: ["Mint", "Bergamot"],
    notesHeart: ["Cardamom", "Atlas Cedar"],
    notesBase: ["Vetiver", "White Amber"],
    description:
      "A morning in the medina — green leaves, chilled mint, the warm dust of the souk by mid-day.",
    rating: 4.7, reviewCount: 154,
    collections: ["everyday"],
  },
  {
    slug: "yara-original",
    name: "Yara Original",
    brand: "Yara Oud",
    origin: "Sourced — UAE",
    region: "Arabian",
    gender: "Women",
    use: ["Signature Scents", "Gifts"],
    strength: "Long Lasting",
    size: "100 ml",
    price: 175,
    image: p4,
    notesTop: ["Orange Blossom"],
    notesHeart: ["Vanilla", "Tuberose"],
    notesBase: ["Sandalwood", "Praline"],
    description:
      "Sweet, sun-warmed and unmistakably Arabian. Yara has become a modern Gulf classic — and a popular gift.",
    bestseller: true, rating: 4.9, reviewCount: 412,
    collections: ["arabian-oils", "gifts"],
  },
  {
    slug: "encens-mineral",
    name: "Encens Minéral",
    brand: "Le Labo",
    origin: "Made in USA",
    region: "European",
    gender: "Unisex",
    use: ["Office & Business"],
    strength: "Moderate",
    size: "50 ml",
    price: 235,
    image: p1,
    notesTop: ["Frankincense", "Pink Pepper"],
    notesHeart: ["Cedar", "Iris"],
    notesBase: ["Vetiver", "Olibanum"],
    description:
      "Cool incense over warm cedar. Restraint, in a bottle.",
    rating: 4.6, reviewCount: 73,
    collections: ["everyday"],
  },
  {
    slug: "nuit-tanger",
    name: "Nuit Tanger",
    brand: "Serge Lutens",
    origin: "Made in France",
    region: "French",
    gender: "Women",
    use: ["Date Night"],
    strength: "Strong",
    size: "50 ml",
    price: 268,
    image: p2,
    notesTop: ["Plum", "Bitter Orange"],
    notesHeart: ["Damask Rose", "Honey"],
    notesBase: ["Patchouli", "Oud"],
    description: "A sultry, plum-laden oriental — Tangier at midnight, bottled.",
    rating: 4.8, reviewCount: 51,
    collections: ["date-night"],
  },
  {
    slug: "souk-prive-no1",
    name: "Souk Privé N°01",
    brand: "Souk Privé Originals",
    origin: "Crafted — In-house",
    region: "Arabian",
    gender: "Unisex",
    use: ["Signature Scents"],
    strength: "Long Lasting",
    size: "50 ml",
    price: 380,
    image: p3,
    notesTop: ["Saffron", "Bergamot", "Pink Pepper"],
    notesHeart: ["Hindi Oud", "Rose Otto"],
    notesBase: ["Ambergris", "Vetiver", "Vanilla"],
    description:
      "Our first in-house composition. Pure Hindi oud, hand-laid over Taif rose and finished with ambergris.",
    rating: 5.0, reviewCount: 24,
    collections: ["originals", "signature"],
  },
  {
    slug: "souk-prive-attar",
    name: "Souk Privé Attar No. 7",
    brand: "Souk Privé Originals",
    origin: "Crafted — In-house",
    region: "Arabian",
    gender: "Unisex",
    use: ["Signature Scents", "Gifts"],
    strength: "Long Lasting",
    size: "12 ml",
    price: 240,
    image: p4,
    notesTop: ["Cambodian Oud"],
    notesHeart: ["Sandalwood"],
    notesBase: ["Ambergris"],
    description:
      "Three notes. One year of rest. A pure Arabian oil attar pressed in single-batch glass.",
    rating: 4.9, reviewCount: 18,
    collections: ["originals", "arabian-oils", "gifts"],
  },
];

export const COLLECTIONS = [
  {
    slug: "arabian-oils",
    label: "Collection · 01",
    name: "Arabian Oils & Attars",
    blurb: "Pure oud, attar, and oil — sourced and rested.",
    image: collArabian,
    href: "/shop/region/arabian",
    feature: true,
  },
  {
    slug: "date-night",
    label: "Collection · 02",
    name: "For the Quiet Evenings",
    blurb: "Suede, iris, plum and rose. Worn close to skin.",
    image: collDateNight,
    href: "/shop/use/date-night",
  },
  {
    slug: "gifts",
    label: "Collection · 03",
    name: "The Gifting Edit",
    blurb: "Concierge-wrapped. Sealed with wax.",
    image: collGifts,
    href: "/shop/use/gifts",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The packaging arrived like a love letter. I've never owned a fragrance that felt this considered.",
    author: "Layla A.",
    location: "Dubai",
  },
  {
    quote:
      "Their concierge found me a discontinued bottle of my late mother's perfume in eleven days.",
    author: "Sara M.",
    location: "London",
  },
  {
    quote:
      "Souk Privé is the only place I trust for genuine Arabian oils outside the Gulf.",
    author: "Christophe D.",
    location: "Paris",
  },
  {
    quote:
      "Every order has felt like the start of a relationship, not a transaction.",
    author: "Maya K.",
    location: "Riyadh",
  },
];

export const JOURNAL_POSTS = [
  {
    slug: "the-art-of-resting-oud",
    title: "The Art of Resting Oud",
    eyebrow: "Atelier",
    excerpt:
      "Why the best Arabian oils sit in silence for nine months before they ever meet skin.",
    cover: collArabian,
    body: `Oud is impatient when it is young. Pressed straight from the still, it carries the heat of distillation — sharp, animalic, almost smoke. The houses we work with refuse to bottle it that early. They rest it. Sometimes for nine months. Sometimes for two years.

Resting is the slow conversation between an oil and the air left in its glass. Top notes settle. Heart notes deepen. The composition learns who it is.

When we visit our partners in Hejaz and Oman, the rooms where the oils rest are silent — heavy curtains drawn against the sun, jars stacked on cedar shelves like wines in a cellar. Each batch is labeled by hand: distiller, distillation date, the day it was poured. Nothing is rushed.

This is the difference you smell when you wear our originals.`,
    date: "2026·02·14",
  },
  {
    slug: "what-quiet-luxury-means-to-us",
    title: "What Quiet Luxury Means to Us",
    eyebrow: "Editorial",
    excerpt:
      "Restraint, sourcing, and the small considered details that don't announce themselves.",
    cover: aboutBoutique,
    body: `Quiet luxury is not a colour palette. It is not a logo. It is the choice — repeated daily — to do the small thing right when no one will notice.

For us it shows up in the wax we use to seal our gift boxes (heavier than it needs to be), in the linen lining each shipper, and in the WhatsApp message you receive an hour after your order has shipped, written by an actual person.

We could automate any of these. We don't.`,
    date: "2026·01·22",
  },
  {
    slug: "five-scents-for-the-business-day",
    title: "Five Scents for the Business Day",
    eyebrow: "Edit",
    excerpt:
      "Restrained compositions that sit close to skin — chosen for the office, the boardroom, and the meeting that actually matters.",
    cover: originalsCraft,
    body: `A perfume worn to work should not arrive in the room before you do. We've selected five compositions that hold their distance with grace — clean musks, soft incense, bright bergamot. Each lingers on a wrist or a collar without reaching across the table.`,
    date: "2025·12·09",
  },
];

export const HERO_IMAGE = heroFlacon;
export const ABOUT_IMAGE = aboutBoutique;
export const ORIGINALS_IMAGE = originalsCraft;

export function findProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function bestsellers() {
  return PRODUCTS.filter((p) => p.bestseller);
}

export function productsByCollection(slug: string) {
  return PRODUCTS.filter((p) => p.collections?.includes(slug));
}
