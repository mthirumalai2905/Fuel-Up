"use client";

import { useAuth } from "@clerk/nextjs";
import { AuthBowlCard } from "@/components/AuthBowlCard";
import { MenuExplorer } from "@/components/MenuExplorer";
import { bowls, categories } from "@/lib/menu";

export function HomeMenu() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <MenuExplorer signedIn />;
  }

  return (
    <>
      {categories.map((category) => {
        const items = bowls.filter((bowl) => bowl.category === category);
        return (
          <div key={category} className="mb-20 last:mb-0">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-serif text-4xl tracking-[-0.02em] text-[#16382c] sm:text-5xl">
                {category}
              </h2>
              <div className="mb-2 hidden h-px flex-1 bg-[#16382c]/10 sm:block" />
            </div>
            <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((bowl) => (
                <AuthBowlCard key={bowl.id} bowl={bowl} />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
