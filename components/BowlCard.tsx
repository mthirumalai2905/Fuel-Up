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
}: {
  bowl: Bowl;
  signedIn: boolean;
  previewOnly?: boolean;
}) {
  const href = `/menu/${bowl.slug}`;

  return (
    <article className="group flex h-full flex-col">
      <div className="relative overflow-hidden rounded-[22px] bg-[#ebe2d2] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_24px_50px_rgba(22,56,44,0.12)]">
        <div className="relative aspect-square">
          <Image
            src={bowl.image}
            alt={bowl.shortName}
            fill
            className="object-contain p-6 transition duration-700 group-hover:scale-[1.04]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        {bowl.preview ? (
          <span className="absolute left-4 top-4 rounded-full bg-[#b8924a] px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-[#1a1916] uppercase">
            Popular
          </span>
        ) : null}
        <div className="absolute right-4 top-4">
          <DietMark diet={bowl.diet} />
        </div>
      </div>

      <div className="pt-5">
        <h3 className="text-[13px] font-semibold tracking-[0.12em] text-[#1a1916] uppercase">
          {bowl.shortName}
        </h3>
        <div className="mt-4">
          <MacroRow bowl={bowl} compact />
        </div>
        <div className="mt-5">
          {signedIn ? (
            <Link
              href={href}
              className="text-[11px] font-medium tracking-[0.18em] text-[#16382c] uppercase underline-offset-4 transition hover:underline"
            >
              Get it →
            </Link>
          ) : (
            <Link
              href={signInHref(href)}
              className="text-[11px] font-medium tracking-[0.18em] text-[#16382c] uppercase underline-offset-4 transition hover:underline"
            >
              Get it →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
