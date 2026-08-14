"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";

export function AddToBagButton({ slug }: { slug: string }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        add(slug);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1600);
      }}
      className="rounded-full bg-[#16382c] px-7 py-3 text-[12px] font-medium tracking-[0.16em] text-[#f6f0e6] uppercase transition hover:bg-[#0f241c]"
    >
      {added ? "Added to bag" : "Add to bag"}
    </button>
  );
}
