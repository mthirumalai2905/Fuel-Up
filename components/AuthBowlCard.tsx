"use client";

import { useAuth } from "@clerk/nextjs";
import { BowlCard } from "@/components/BowlCard";
import type { Bowl } from "@/lib/menu";

export function AuthBowlCard({
  bowl,
  previewOnly = false,
  dense = false,
}: {
  bowl: Bowl;
  previewOnly?: boolean;
  dense?: boolean;
}) {
  const { isSignedIn } = useAuth();
  return (
    <BowlCard bowl={bowl} signedIn={Boolean(isSignedIn)} previewOnly={previewOnly} dense={dense} />
  );
}
