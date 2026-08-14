import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { Show } from "@clerk/nextjs";
import { DietMark } from "@/components/DietMark";
import { MacroRow } from "@/components/MacroRow";
import { AddToBagButton } from "@/components/AddToBagButton";
import { signInHref } from "@/lib/auth";
import { bowls, dietLabel, getBowlBySlug } from "@/lib/menu";
import type { Metadata } from "next";

export function generateStaticParams() {
  return bowls.map((bowl) => ({ slug: bowl.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const bowl = getBowlBySlug(slug);
  if (!bowl) return { title: "Bowl" };
  return {
    title: bowl.shortName,
    description: bowl.description,
  };
}

export default async function BowlDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const bowl = getBowlBySlug(slug);
  if (!bowl) notFound();

  const { userId } = await auth();
  const signedIn = Boolean(userId);

  return (
    <div className="bg-[#f6f0e6] px-4 py-12 sm:px-6">
      <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-[28px] bg-white text-[#1a1916] shadow-[0_24px_60px_rgba(22,56,44,0.1)]">
        <div className="relative aspect-square bg-[#ebe2d2]">
          <Image
            src={bowl.image}
            alt={bowl.shortName}
            fill
            className="object-contain"
            priority
            sizes="768px"
          />
          <Link
            href={signedIn ? "/menu" : "/#menu"}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#16382c] text-[#f6f0e6] transition hover:bg-[#0f241c]"
            aria-label="Close"
          >
            ×
          </Link>
        </div>

        <div className="space-y-6 p-7 sm:p-10">
          <div className="flex items-start gap-3">
            <DietMark diet={bowl.diet} />
            <div>
              <p className="text-[11px] font-medium tracking-[0.2em] text-[#b8924a] uppercase">
                {bowl.category}
              </p>
              <h1 className="mt-1 font-serif text-3xl tracking-[-0.02em] text-[#16382c] sm:text-4xl">
                {bowl.name}
              </h1>
            </div>
          </div>

          <p className="leading-7 text-[#6a645a]">{bowl.description}</p>
          {bowl.note ? <p className="text-sm text-[#6a645a]">{bowl.note}</p> : null}

          <Show when="signed-out">
            <div className="rounded-[22px] bg-[#f6f0e6] p-6">
              <p className="font-serif text-2xl text-[#16382c]">Sign in for the full look</p>
              <p className="mt-2 text-sm leading-6 text-[#6a645a]">
                Macros and checkout unlock after you create a Fuel Up account.
              </p>
              <Link
                href={signInHref(`/menu/${bowl.slug}`)}
                className="mt-5 inline-flex rounded-full bg-[#16382c] px-6 py-2.5 text-[11px] font-medium tracking-[0.16em] text-[#f6f0e6] uppercase transition hover:bg-[#0f241c]"
              >
                Sign in to continue
              </Link>
            </div>
          </Show>

          <Show when="signed-in">
            {bowl.nutrition ? (
              <div className="rounded-[22px] bg-[#f6f0e6] p-5">
                <p className="mb-3 text-[11px] font-medium tracking-[0.18em] uppercase">
                  Kitchen card, per serving
                </p>
                <MacroRow bowl={bowl} />
                <p className="mt-4 text-sm text-[#6a645a]">Fiber: {bowl.nutrition.fiberLabel}</p>
              </div>
            ) : (
              <p className="text-sm text-[#6a645a]">
                This kitchen card did not list calories, protein, carbs, or fat. Ask in the cafe
                if you need those numbers.
              </p>
            )}

            <div className="flex flex-wrap gap-2">
              {bowl.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#ebe2d2] px-3 py-1 text-xs font-medium text-[#6a645a]"
                >
                  {tag}
                </span>
              ))}
              <span className="rounded-full bg-[#ebe2d2] px-3 py-1 text-xs font-medium text-[#6a645a]">
                {dietLabel(bowl.diet)}
              </span>
            </div>

            <div className="flex items-center justify-end border-t border-[#16382c]/10 pt-5">
              <AddToBagButton slug={bowl.slug} />
            </div>
          </Show>
        </div>
      </div>
    </div>
  );
}
