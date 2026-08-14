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
      <section className="wrap pb-8 pt-12 text-center sm:pb-10 sm:pt-16">
        <p className="eyebrow">Karvenagar · Pune</p>
        <h1 className="mx-auto mt-4 max-w-4xl font-serif text-[2.4rem] leading-[1.08] tracking-[-0.03em] text-[#16382c] sm:mt-5 sm:text-6xl md:text-[72px]">
          High-protein bowls, made for everyday fuel.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#6a645a] sm:mt-6 sm:text-[16px]">
          A small cafe on Cummins College Road. Fresh bowls and honest macros
          from the kitchen cards.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="#menu" className="btn btn-primary">
            See the bowls
          </Link>
          <Show when="signed-out">
            <Link href={signInHref("/menu")} className="btn btn-outline">
              Sign in
            </Link>
          </Show>
          <Show when="signed-in">
            <Link href="/menu" className="btn btn-outline">
              Full menu
            </Link>
          </Show>
        </div>
      </section>

      {featured ? (
        <section className="wrap">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-[#ebe2d2] shadow-[0_24px_60px_rgba(22,56,44,0.1)] sm:aspect-[16/9] sm:rounded-[28px]">
            <Image
              src="/bowls/hero-creamy-grilled-chicken.png"
              alt={featured.shortName}
              fill
              priority
              className="object-contain"
              sizes="1180px"
            />
          </div>

          <div className="mt-10 grid gap-8 border-b border-[#16382c]/10 pb-14 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-10 md:pb-16">
            <div className="text-left">
              <div className="mb-4 h-px w-12 bg-[#b8924a]" />
              <h2 className="text-[12px] font-semibold tracking-[0.16em] text-[#1a1916] uppercase sm:text-[13px]">
                {featured.shortName}
              </h2>
              <p className="mt-3 max-w-md text-[15px] leading-7 text-[#6a645a] sm:mt-4 sm:text-[16px]">
                {featured.description}
              </p>
              <Show when="signed-out">
                <Link href={signInHref(`/menu/${featured.slug}`)} className="btn btn-primary mt-7">
                  Get it
                </Link>
              </Show>
              <Show when="signed-in">
                <Link href={`/menu/${featured.slug}`} className="btn btn-primary mt-7">
                  Get it
                </Link>
              </Show>
            </div>
            <div className="rounded-[20px] bg-[#ebe2d2]/70 px-5 py-5 sm:px-6 sm:py-6">
              <MacroRow bowl={featured} />
            </div>
          </div>
        </section>
      ) : null}

      <section id="menu" className="wrap scroll-mt-28 py-16 sm:scroll-mt-32 sm:py-20">
        <HomeMenu />
      </section>

      <section id="mission" className="scroll-mt-28 bg-[#16382c] sm:scroll-mt-32">
        <div className="wrap grid gap-8 py-16 sm:py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-12">
          <p className="font-serif text-[2rem] leading-[1.15] tracking-[-0.02em] text-[#f6f0e6] sm:text-5xl">
            Fresh bowls, honest macros, everyday prices.
          </p>
          <div className="space-y-5 border-l border-[#b8924a]/50 pl-6 text-[15px] leading-8 text-[#d8d0c4] sm:pl-8 sm:text-[16px]">
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
