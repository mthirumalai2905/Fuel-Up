"use client";

import Image from "next/image";
import Link from "next/link";
import { DietMark } from "@/components/DietMark";
import { MacroRow } from "@/components/MacroRow";
import { signInHref } from "@/lib/auth";
import type { Bowl } from "@/lib/menu";

export function BowlCard({
  bowl,
  signedIn,
  dense = false,
}: {
  bowl: Bowl;
  signedIn: boolean;
  previewOnly?: boolean;
  dense?: boolean;
}) {
  const href = signedIn ? `/menu/${bowl.slug}` : signInHref(`/menu/${bowl.slug}`);

  return (
    <article className="h-full">
      <Link href={href} className="group flex h-full flex-col">
        <div
          className={`relative overflow-hidden bg-[#ebe2d2] transition duration-500 group-hover:-translate-y-0.5 group-hover:shadow-[0_18px_40px_rgba(22,56,44,0.1)] ${
            dense ? "rounded-[16px]" : "rounded-[22px]"
          }`}
        >
          <div className="relative aspect-square">
            <Image
              src={bowl.image}
              alt={bowl.shortName}
              fill
              className="object-contain"
              sizes={
                dense
                  ? "(min-width: 1280px) 18vw, (min-width: 768px) 28vw, 46vw"
                  : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              }
            />
          </div>
          {bowl.preview ? (
            <span
              className={`absolute rounded-full bg-[#b8924a] font-semibold tracking-[0.14em] text-[#1a1916] uppercase ${
                dense
                  ? "left-2.5 top-2.5 px-2 py-0.5 text-[8px]"
                  : "left-4 top-4 px-3 py-1 text-[10px]"
              }`}
            >
              Popular
            </span>
          ) : null}
          <div className={dense ? "absolute right-2.5 top-2.5" : "absolute right-4 top-4"}>
            <DietMark diet={bowl.diet} />
          </div>
        </div>

        <div className={dense ? "pt-3" : "pt-5"}>
          <h3
            className={`font-semibold uppercase ${
              dense
                ? "line-clamp-2 text-[11px] leading-4 tracking-[0.1em] text-[#1a1916]"
                : "text-[13px] tracking-[0.12em] text-[#1a1916]"
            }`}
          >
            {bowl.shortName}
          </h3>
          <div className={dense ? "mt-2.5" : "mt-4"}>
            <MacroRow bowl={bowl} compact={!dense} dense={dense} />
          </div>
          {dense ? null : (
            <div className="mt-5 text-[11px] font-medium tracking-[0.18em] text-[#16382c] uppercase">
              Get it →
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
