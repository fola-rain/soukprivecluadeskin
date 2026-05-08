
# Souk Privé — Full Site Build Plan

## 1. Design System (port from your HTML)
Lift the entire design language from your `index.html` into the project:
- **Tokens** (in `src/styles.css`): ink `#0E0C0A`, espresso `#2C1F14`, umber `#4A3728`, sand `#C4B5A0`, ivory `#F5F0E8`, linen `#FAF7F2`, metal/muted accents.
- **Typography**: Cormorant (serif headings), Jost (sans body), DM Mono (eyebrow/labels).
- **Motion**: silk + ease-out cubic-béziers, GSAP + ScrollTrigger for cinematic reveals, custom dot+ring cursor, grain overlay, full-screen menu, scrolled-nav state, light/dark section switching.
- All ported as semantic tokens — no ad-hoc colors in components.

## 2. Sitemap (Routes)

```
/                              Homepage (cinematic, full sections from brief)
/shop                          All products + filter rails
/shop/men                      Gender filter
/shop/women
/shop/unisex
/shop/use/:slug                Date Night, Office, Everyday, Gifts, Signature
/shop/strength/:slug           Light, Moderate, Strong, Long-Lasting
/shop/region/:slug             Arabian, French, European
/shop/brand                    A–Z brand index
/shop/brand/:slug              Single brand page
/product/:slug                 Product detail (gallery, notes, reviews, WhatsApp)
/originals                     Souk Privé Originals (in-house line / Arabian oils)
/find-my-product               Recommendation quiz (multi-step funnel)
/request-a-product             Concierge request form
/journal                       Editorial / blog index
/journal/:slug                 Article
/about                         Brand story
/contact                       Contact + WhatsApp + boutique info
/cart                          Cart drawer + dedicated page
/checkout                      Multi-step checkout
/checkout/success              Confirmation + WhatsApp follow-up CTA
/wishlist                      Saved items
/account, /account/orders      Customer area (Cloud auth)
/auth/login, /auth/signup
/legal/privacy, /legal/terms, /legal/shipping, /legal/returns

Landing pages (Meta ad funnels):
/lp/date-night
/lp/gifts
/lp/arabian-oils
/lp/reseller
/lp/quiz-funnel
/lp/request-funnel
/lp/product/:slug
```

## 3. Homepage Sections (per brief)
1. Cinematic hero (video-bg with fallback poster, GSAP reveal, scrolling tagline)
2. Trust indicators strip (Authenticity • Global Sourcing • Concierge • Discreet Shipping)
3. Featured Collections (Arabian Oils / Date Night / Originals — large editorial tiles)
4. Best Sellers (horizontal product rail w/ hover detail)
5. Request-A-Product band (concierge CTA, dark editorial)
6. Find My Product quiz teaser (animated 3-card preview → CTA)
7. Reviews / social proof (marquee of testimonials)
8. Instagram feed grid (9 tiles, mock data wired to a feed component)
9. Lead capture (email + WhatsApp dual capture, minimal form)
10. Footer (sitemap, legal, socials, newsletter, currency/language switchers)

## 4. Commerce & Functional Layer
- **Cart**: persistent (Cloud-backed once auth, localStorage fallback), slide-out drawer + `/cart` page.
- **Checkout**: Information → Shipping → Payment → Review → Success. WhatsApp "complete via concierge" option at every step + on success page.
- **Wishlist**: heart toggle on cards/PDP, `/wishlist` page.
- **Reviews**: star rating + written reviews on PDP, average rating on cards.
- **Currency switcher**: USD/AED/EUR/GBP/SAR (client-side conversion table).
- **Language switch**: EN/AR scaffold (EN content shipped; AR toggle ready).
- **WhatsApp integration**: floating concierge button site-wide + contextual CTAs (PDP, checkout, request, contact).
- **Meta Pixel**: hook + page-view + add-to-cart + purchase events (env-keyed pixel id).
- **Quiz** (`/find-my-product`): 5–7 step funnel → recommended products.
- **Request form** (`/request-a-product`): concierge intake (brand, scent profile, budget, contact channel).
- **Journal**: MDX-style article schema (Cloud table) + index/detail pages.
- **Instagram feed**: component pulling from a `social_posts` table (seeded), upgradeable to live API later.
- **Lead capture**: email + phone, stored in Cloud.

## 5. Backend (Lovable Cloud)
Tables: `products`, `product_variants`, `product_images`, `collections`, `brands`, `reviews`, `wishlists`, `cart_items`, `orders`, `order_items`, `addresses`, `quiz_submissions`, `product_requests`, `leads`, `journal_posts`, `social_posts`. RLS on user-scoped tables; public read on catalog. Auth via Cloud (email + Google). Roles via `user_roles` table for admin.

## 6. Photography & Video
All visuals generated to match the cinematic-boutique direction:
- Hero video poster + 4–5 hero stills (perfume in marble light, Arabian setting, editorial portraits)
- 12+ product shots (bottles on stone, draped silk, oud wood, brass tray)
- Collection covers (Arabian Oils, Date Night, Gifts, Originals)
- Journal cover images, About story imagery
- Generated via image tool, premium tier where text/legibility matters; stored in `src/assets/`.

## 7. Build Order
1. Port design system + global shell (nav, menu, cursor, footer, grain, GSAP wrapper).
2. Generate hero/collection/product imagery in parallel.
3. Enable Lovable Cloud, create schema, seed catalog (≈20 products across collections/brands).
4. Homepage with all 10 sections wired to seeded data.
5. Shop + filters + PDP + reviews + wishlist.
6. Cart + checkout + success + WhatsApp handoff.
7. Quiz + request form + journal + about + contact.
8. Auth + account + admin gate.
9. Landing-page templates.
10. SEO meta per route, sitemap, polish pass on mobile.

## 8. Technical Notes
- TanStack Start file-based routes; one route per page (no hash navigation).
- GSAP + ScrollTrigger via npm; cursor + menu lifted to React components.
- Each route has its own `head()` with route-specific title/description/og.
- Mobile-first: hero, product rails, checkout fully tuned for Meta-ad mobile traffic.
- Payments: scaffolded with Lovable's built-in payments hook — actual provider enable will be a follow-up step (recommended after first review of catalog), since enabling requires your confirmation.

---

This is a large multi-phase build. After you approve, I'll execute phases 1–4 in the first pass (design system, schema + seed, homepage fully built, shop + PDP) so you can see the spine working, then continue through cart/checkout/quiz/journal/auth/landing pages in subsequent passes. Want me to proceed?
