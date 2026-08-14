"use client";

import { useCart } from "@/components/CartProvider";

export function AddToBagButton({ slug }: { slug: string }) {
  const { add } = useCart();
  return (
    <button
      type="button"
      onClick={() => add(slug)}
      className="rounded-full bg-[#16382c] px-7 py-3 text-[12px] font-medium tracking-[0.16em] text-[#f6f0e6] uppercase transition hover:bg-[#0f241c]"
    >
      Add to bag
    </button>
  );
}
