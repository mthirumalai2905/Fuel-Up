import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export function AuthSplit({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  children: ReactNode;
}) {
  return (
    <div className="grid min-h-dvh bg-[#f6f0e6] lg:grid-cols-2">
      <aside className="relative flex flex-col justify-between bg-[#0f241c] px-8 py-10 text-[#d8d0c4] sm:px-12 lg:px-16 lg:py-14">
        <Link
          href="/"
          className="font-serif text-3xl tracking-[-0.03em] text-[#f6f0e6]"
        >
          {site.brandName.toLowerCase()}
        </Link>

        <div className="max-w-md py-12 lg:py-0">
          <p className="text-[11px] font-medium tracking-[0.28em] text-[#b8924a] uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.1] tracking-[-0.02em] text-[#f6f0e6] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-[16px] leading-8">{copy}</p>
          <div className="mt-10 h-px w-12 bg-[#b8924a]" />
          <p className="mt-6 text-[14px] leading-7">{site.address}</p>
          <a
            href={`tel:${site.phoneTel}`}
            className="mt-2 inline-block text-[#f6f0e6] underline-offset-4 hover:underline"
          >
            {site.phoneDisplay}
          </a>
        </div>

        <p className="text-[12px] tracking-wide text-[#9a9286]">
          Typical spend {site.typicalSpend}
        </p>
      </aside>

      <section className="flex items-center justify-center px-6 py-12 sm:px-10">
        <div className="w-full max-w-[420px]">{children}</div>
      </section>
    </div>
  );
}
