import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

const backgrounds = [
  "/bowls/grilled-paneer-salad-bowl.png",
  "/bowls/creamy-grilled-chicken-rice-bowl.png",
  "/bowls/rajma-paneer.png",
  "/bowls/banana-smoothie-bowl.png",
];

function FactMark() {
  return (
    <span
      className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#b8924a] text-[#b8924a]"
      aria-hidden
    >
      <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="currentColor">
        <path d="M6.3 11.2 3.4 8.3l.9-.9 2 2 5.4-5.4.9.9z" />
      </svg>
    </span>
  );
}

export function AuthSplit({
  eyebrow,
  title,
  copy,
  facts,
  children,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  facts: string[];
  children: ReactNode;
}) {
  return (
    <div className="grid min-h-dvh bg-[#f6f0e6] lg:grid-cols-2">
      <aside className="relative isolate hidden overflow-hidden text-[#d8d0c4] lg:block lg:min-h-dvh">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          {backgrounds.map((src) => (
            <div key={src} className="relative">
              <Image src={src} alt="" fill className="object-cover" sizes="25vw" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-[#0f241c]/78" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f241c] via-[#0f241c]/50 to-[#0f241c]/30" />

        <div className="relative z-10 flex h-full flex-col justify-between px-6 py-8 sm:px-12 sm:py-10 lg:px-16 lg:py-14">
          <Link
            href="/"
            className="font-serif text-3xl tracking-[-0.03em] text-[#f6f0e6]"
          >
            {site.brandName.toLowerCase()}
          </Link>

          <div className="max-w-md py-10 lg:py-0">
            <p className="text-[11px] font-medium tracking-[0.28em] text-[#b8924a] uppercase">
              {eyebrow}
            </p>
            <h1 className="mt-5 font-serif text-4xl leading-[1.1] tracking-[-0.02em] text-[#f6f0e6] sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-[16px] leading-8 text-[#e6dfd4]">{copy}</p>
            <ul className="mt-10 space-y-4">
              {facts.map((fact) => (
                <li key={fact} className="flex gap-3">
                  <FactMark />
                  <p className="text-[15px] leading-7 text-[#e6dfd4]">{fact}</p>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-[12px] tracking-wide text-[#b8b0a4]">
            A small cafe on Cummins College Road
          </p>
        </div>
      </aside>

      <section className="relative flex min-h-dvh flex-col items-center justify-center bg-[#f6f0e6] px-4 py-8 sm:px-10 sm:py-14">
        <Link
          href="/"
          className="mb-6 font-serif text-[28px] tracking-[-0.03em] text-[#16382c] lg:hidden"
        >
          {site.brandName.toLowerCase()}
        </Link>
        <div className="relative z-10 w-full max-w-[420px] rounded-[28px] border border-[#16382c]/8 bg-white p-2 shadow-[0_24px_60px_rgba(15,36,28,0.1)]">
          {children}
        </div>
      </section>
    </div>
  );
}
