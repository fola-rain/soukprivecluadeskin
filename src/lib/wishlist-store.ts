import { create } from "zustand";
import { persist } from "zustand/middleware";

type WishlistState = {
  slugs: string[];
  toggle: (slug: string) => void;
  has: (slug: string) => boolean;
  count: () => number;
};

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      slugs: [],
      toggle: (slug) =>
        set({
          slugs: get().slugs.includes(slug)
            ? get().slugs.filter((s) => s !== slug)
            : [...get().slugs, slug],
        }),
      has: (slug) => get().slugs.includes(slug),
      count: () => get().slugs.length,
    }),
    { name: "soukprive-wishlist" }
  )
);
