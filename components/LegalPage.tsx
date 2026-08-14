import type { ReactNode } from "react";
import { site } from "@/lib/site";

type LegalPageProps = {
  title: string;
  children: ReactNode;
};

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <div className="flex flex-1 flex-col bg-[#f6f0e6] text-[#6a645a]">
      <article className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <p className="text-[11px] font-medium tracking-[0.22em] text-[#b8924a] uppercase">
          {site.brandName}
        </p>
        <h1 className="mt-3 font-serif text-4xl tracking-[-0.02em] text-[#16382c] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-[#6a645a]">Last updated: 15 August 2026</p>
        <div className="legal-copy mt-10 space-y-8 text-base leading-7">{children}</div>
      </article>
    </div>
  );
}
