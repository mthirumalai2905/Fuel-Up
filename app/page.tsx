import Image from "next/image";
import Link from "next/link";
import { Show } from "@clerk/nextjs";
import { HomeMenu } from "@/components/HomeMenu";
import { MacroRow } from "@/components/MacroRow";
import Testimonials from "@/components/Testimonials";
import { VisitSection } from "@/components/VisitSection";
import { signInHref } from "@/lib/auth";
import { bowls, getBowlBySlug } from "@/lib/menu";
import { site } from "@/lib/site";

export default function Home() {
  const featured = getBowlBySlug("creamy-grilled-chicken-rice-bowl") ?? bowls[0];

  return (
    <div className="bg-[#f6f0e6]">
      <section className="mx-auto w-full max-w-[1180px] px-4 pb-10 pt-14 text-center sm:px-6 sm:pt-20">
        <p className="text-[11px] font-medium tracking-[0.28em] text-[#b8924a] uppercase">
          Karvenagar · Pune
        </p>
        <h1 className="mx-auto mt-5 max-w-4xl font-serif text-[2.75rem] leading-[1.08] tracking-[-0.02em] text-[#16382c] sm:text-6xl md:text-[72px]">
          High-protein bowls, made for everyday fuel.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[16px] leading-7 text-[#6a645a]">
          A small cafe on Cummins College Road. Fresh bowls and honest macros
          from the kitchen cards.
        </p>
      </section>

      {featured ? (
        <section className="mx-auto w-full max-w-[1180px] px-4 sm:px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] bg-[#ebe2d2] shadow-[0_30px_80px_rgba(22,56,44,0.12)]">
            <Image
              src="/bowls/hero-creamy-grilled-chicken.png"
              alt={featured.shortName}
              fill
              priority
              className="object-cover"
              sizes="1180px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f241c]/10 via-transparent to-transparent" />
          </div>

          <div className="mt-12 grid gap-10 border-b border-[#16382c]/10 pb-16 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div className="text-left">
              <div className="mb-5 h-px w-12 bg-[#b8924a]" />
              <h2 className="text-[13px] font-semibold tracking-[0.16em] text-[#1a1916] uppercase">
                {featured.shortName}
              </h2>
              <p className="mt-4 max-w-md text-[16px] leading-7 text-[#6a645a]">
                {featured.description}
              </p>
              <Show when="signed-out">
                <Link
                  href={signInHref(`/menu/${featured.slug}`)}
                  className="mt-8 inline-flex items-center rounded-full bg-[#16382c] px-7 py-3 text-[11px] font-medium tracking-[0.18em] text-[#f6f0e6] uppercase transition hover:bg-[#0f241c]"
                >
                  Get it →
                </Link>
              </Show>
              <Show when="signed-in">
                <Link
                  href={`/menu/${featured.slug}`}
                  className="mt-8 inline-flex items-center rounded-full bg-[#16382c] px-7 py-3 text-[11px] font-medium tracking-[0.18em] text-[#f6f0e6] uppercase transition hover:bg-[#0f241c]"
                >
                  Get it →
                </Link>
              </Show>
            </div>
            <div className="rounded-[22px] bg-[#ebe2d2]/70 px-6 py-6">
              <MacroRow bowl={featured} />
            </div>
          </div>
        </section>
      ) : null}

      <section id="menu" className="mx-auto w-full max-w-[1180px] scroll-mt-32 px-4 py-20 sm:px-6">
        <HomeMenu />
      </section>

      <section id="mission" className="scroll-mt-32 bg-[#16382c]">
        <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-4 py-20 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <p className="font-serif text-4xl leading-[1.15] tracking-[-0.02em] text-[#f6f0e6] sm:text-5xl">
            Fresh bowls, honest macros, everyday prices.
          </p>
          <div className="space-y-5 border-l border-[#b8924a]/50 pl-8 text-[16px] leading-8 text-[#d8d0c4]">
            <p>
              {site.brandName} is a small cafe on Cummins College Road in Karvenagar. We cook
              protein bowls, salads, smoothie bowls, and simple breakfast plates for students and
              neighbours who want food that actually fills them.
            </p>
          </div>
        </div>
      </section>

      <Testimonials />

      <VisitSection />
    </div>
  );
}
