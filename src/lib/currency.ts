import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CurrencyCode = "USD" | "AED" | "EUR" | "GBP" | "SAR";

const RATES: Record<CurrencyCode, number> = {
  USD: 1,
  AED: 3.67,
  EUR: 0.92,
  GBP: 0.79,
  SAR: 3.75,
};

const SYMBOLS: Record<CurrencyCode, string> = {
  USD: "$", AED: "AED ", EUR: "€", GBP: "£", SAR: "SAR ",
};

type CurrencyState = {
  code: CurrencyCode;
  setCode: (c: CurrencyCode) => void;
};

export const useCurrency = create<CurrencyState>()(
  persist(
    (set) => ({ code: "USD", setCode: (code) => set({ code }) }),
    { name: "soukprive-currency" }
  )
);

export function formatPrice(usd: number, code: CurrencyCode = "USD") {
  const amount = usd * RATES[code];
  const rounded = Math.round(amount);
  return `${SYMBOLS[code]}${rounded.toLocaleString()}`;
}
