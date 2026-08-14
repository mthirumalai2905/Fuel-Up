"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { bowls, type Bowl } from "@/lib/menu";

type CartItem = { slug: string; qty: number };

type CartContextValue = {
  items: CartItem[];
  count: number;
  add: (slug: string) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  lines: { bowl: Bowl; qty: number }[];
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "fuelup-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      setItems([]);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);

  const value = useMemo<CartContextValue>(() => {
    const add = (slug: string) => {
      setItems((current) => {
        const found = current.find((item) => item.slug === slug);
        if (found) {
          return current.map((item) =>
            item.slug === slug ? { ...item, qty: item.qty + 1 } : item,
          );
        }
        return [...current, { slug, qty: 1 }];
      });
    };

    const remove = (slug: string) => {
      setItems((current) => current.filter((item) => item.slug !== slug));
    };

    const setQty = (slug: string, qty: number) => {
      if (qty < 1) {
        remove(slug);
        return;
      }
      setItems((current) =>
        current.map((item) => (item.slug === slug ? { ...item, qty } : item)),
      );
    };

    const clear = () => setItems([]);

    const lines = items
      .map((item) => {
        const bowl = bowls.find((entry) => entry.slug === item.slug);
        if (!bowl) return null;
        return { bowl, qty: item.qty };
      })
      .filter((line): line is { bowl: Bowl; qty: number } => Boolean(line));

    return {
      items,
      count: items.reduce((sum, item) => sum + item.qty, 0),
      add,
      remove,
      setQty,
      clear,
      lines,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
