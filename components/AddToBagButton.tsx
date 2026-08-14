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
      className="btn btn-primary w-full sm:w-auto"
    >
      {added ? "Added to bag" : "Add to bag"}
    </button>
  );
}
