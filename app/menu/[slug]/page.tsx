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
  const backHref = signedIn ? "/menu" : "/#menu";

  return (
    <div className="bg-[#f6f0e6] px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto grid w-full max-w-[1100px] overflow-hidden rounded-[24px] bg-white shadow-[0_20px_50px_rgba(22,56,44,0.08)] lg:grid-cols-2">
        <div className="relative aspect-square bg-[#ebe2d2] lg:aspect-auto lg:min-h-[560px]">
          <Image
            src={bowl.image}
            alt={bowl.shortName}
            fill
            className="object-contain"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <div className="flex flex-col p-6 sm:p-10">
          <Link
            href={backHref}
            className="text-[11px] font-medium tracking-[0.16em] text-[#6a645a] uppercase underline-offset-4 hover:text-[#16382c] hover:underline"
          >
            Back to menu
          </Link>

          <div className="mt-6 flex items-start gap-3">
            <DietMark diet={bowl.diet} />
            <div>
              <p className="text-[11px] font-medium tracking-[0.2em] text-[#b8924a] uppercase">
                {bowl.category}
              </p>
              <h1 className="mt-1 font-serif text-3xl tracking-[-0.02em] text-[#16382c] sm:text-4xl">
                {bowl.shortName}
              </h1>
            </div>
          </div>

          <p className="mt-5 leading-7 text-[#6a645a]">{bowl.description}</p>
          {bowl.note ? <p className="mt-3 text-sm text-[#6a645a]">{bowl.note}</p> : null}

          <Show when="signed-out">
            <div className="mt-8 rounded-[20px] bg-[#f6f0e6] p-6">
              <p className="font-serif text-2xl text-[#16382c]">Sign in for the full look</p>
              <p className="mt-2 text-sm leading-6 text-[#6a645a]">
                Macros and checkout unlock after you create a Fuel Up account.
              </p>
              <Link href={signInHref(`/menu/${bowl.slug}`)} className="btn btn-primary mt-5">
                Sign in to continue
              </Link>
            </div>
          </Show>

          <Show when="signed-in">
            <div className="mt-8">
              {bowl.nutrition ? (
                <div className="rounded-[20px] bg-[#f6f0e6] p-5">
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
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
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

            <div className="mt-auto border-t border-[#16382c]/10 pt-5 sm:pt-6">
              <AddToBagButton slug={bowl.slug} />
            </div>
          </Show>
        </div>
      </div>
    </div>
  );
}
