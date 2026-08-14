"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { AuthBowlCard } from "@/components/AuthBowlCard";
import { signInHref } from "@/lib/auth";
import { bowls } from "@/lib/menu";

const PREVIEW_SLUGS = [
  "protein-soya-salad",
  "rajma-paneer",
  "creamy-grilled-chicken-rice-bowl",
  "banana-smoothie-bowl",
  "grilled-paneer-salad-bowl",
  "chicken-burrito-rice-bowl",
  "grilled-chicken-salad-bowl",
  "peanut-butter-bread",
];

export function HomeMenu() {
  const { isSignedIn } = useAuth();
  const fullMenuHref = isSignedIn ? "/menu" : signInHref("/menu");
  const previews = PREVIEW_SLUGS.map((slug) => bowls.find((bowl) => bowl.slug === slug)).filter(
    (bowl): bowl is NonNullable<typeof bowl> => Boolean(bowl),
  );

  return (
    <>
      <p className="text-[11px] font-medium tracking-[0.28em] text-[#b8924a] uppercase">
        A few bowls
      </p>
      <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-serif text-4xl tracking-[-0.02em] text-[#16382c] sm:text-5xl">
          Start with these
        </h2>
        <Link
          href={fullMenuHref}
          className="text-[11px] font-medium tracking-[0.18em] text-[#16382c] uppercase underline-offset-4 hover:underline"
        >
          {isSignedIn ? "See the full menu →" : "Sign in for the full menu →"}
        </Link>
      </div>
      <p className="mt-4 max-w-xl text-[16px] leading-7 text-[#6a645a]">
        A short preview. The full list, filters, and pickup live on the menu
        after you sign in.
      </p>
      <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-4">
        {previews.map((bowl) => (
          <AuthBowlCard key={bowl.id} bowl={bowl} />
        ))}
      </div>
    </>
  );
}
