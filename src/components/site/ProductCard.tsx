"use client";
import { Link } from "@tanstack/react-router";
import { Heart, ArrowRight } from "lucide-react";
import type { Product } from "@/lib/site-data";
import { useCart } from "@/lib/cart-store";
import { useWishlist } from "@/lib/wishlist-store";
import { useCurrency, formatPrice } from "@/lib/currency";

export function ProductCard({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  const wish = useWishlist();
  const currency = useCurrency((s) => s.code);
  const active = wish.has(product.slug);

  return (
    <article className="product-card">
      <div className="product-img-wrap">
        <Link to="/product/$slug" params={{ slug: product.slug }} aria-label={product.name}>
          <img src={product.image} alt={product.name} className="product-img" loading="lazy" />
        </Link>
        <button
          className={`wishlist-btn ${active ? "active" : ""}`}
          aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
          onClick={(e) => { e.preventDefault(); wish.toggle(product.slug); }}
        >
          <Heart size={14} fill={active ? "currentColor" : "none"} strokeWidth={1.5} />
        </button>
        <button
          className="product-quick-add"
          onClick={(e) => { e.preventDefault(); add(product); }}
        >
          Quick add — {formatPrice(product.price, currency)}
          <ArrowRight size={11} strokeWidth={1.5} />
        </button>
      </div>
      <div className="product-info">
        <div className="product-origin">{product.origin}</div>
        <Link to="/product/$slug" params={{ slug: product.slug }}>
          <div className="product-name">{product.name}</div>
        </Link>
        <div className="product-brand">{product.brand}</div>
        <div className="product-footer">
          <span className="product-price">{formatPrice(product.price, currency)}</span>
          <span className="product-size">{product.size}</span>
        </div>
      </div>
    </article>
  );
}
