import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "./site-data";

export type CartLine = {
  slug: string;
  name: string;
  brand: string;
  size: string;
  price: number;
  image: string;
  qty: number;
};

type CartState = {
  lines: CartLine[];
  isOpen: boolean;
  add: (p: Product, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
  count: () => number;
  subtotal: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      isOpen: false,
      add: (p, qty = 1) => {
        const lines = [...get().lines];
        const idx = lines.findIndex((l) => l.slug === p.slug);
        if (idx >= 0) {
          lines[idx] = { ...lines[idx], qty: lines[idx].qty + qty };
        } else {
          lines.push({
            slug: p.slug, name: p.name, brand: p.brand,
            size: p.size, price: p.price, image: p.image, qty,
          });
        }
        set({ lines, isOpen: true });
      },
      remove: (slug) => set({ lines: get().lines.filter((l) => l.slug !== slug) }),
      setQty: (slug, qty) =>
        set({
          lines: get().lines
            .map((l) => (l.slug === slug ? { ...l, qty: Math.max(1, qty) } : l)),
        }),
      clear: () => set({ lines: [] }),
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set({ isOpen: !get().isOpen }),
      count: () => get().lines.reduce((n, l) => n + l.qty, 0),
      subtotal: () => get().lines.reduce((n, l) => n + l.qty * l.price, 0),
    }),
    { name: "soukprive-cart" }
  )
);
