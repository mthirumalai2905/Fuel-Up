"use client";

import dynamic from "next/dynamic";
import { site } from "@/lib/site";

const VisitMap = dynamic(() => import("@/components/VisitMap"), {
  ssr: false,
  loading: () => <div className="h-full min-h-[460px] animate-pulse bg-[#ebe2d2]" />,
});

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;

export function VisitSection() {
  return (
    <section id="visit" className="scroll-mt-32 bg-[#f6f0e6] px-4 py-20 sm:px-6">
      <div className="mx-auto grid w-full max-w-[1180px] items-stretch gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center">
          <p className="text-[11px] font-medium tracking-[0.28em] text-[#b8924a] uppercase">
            Find us
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-[-0.02em] text-[#16382c] sm:text-5xl">
            Visit the cafe
          </h2>
          <p className="mt-5 max-w-md text-[16px] leading-7 text-[#6a645a]">
            On Cummins College Road in Sahu Colony. Pan and zoom the map, or
            open directions on your phone.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <p className="text-[11px] font-medium tracking-[0.2em] text-[#16382c] uppercase">
                Address
              </p>
              <p className="mt-2 leading-7 text-[#6a645a]">{site.address}</p>
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-[0.2em] text-[#16382c] uppercase">
                Phone
              </p>
              <a
                href={`tel:${site.phoneTel}`}
                className="mt-2 inline-block text-[#16382c] underline-offset-4 hover:underline"
              >
                {site.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-[0.2em] text-[#16382c] uppercase">
                Typical spend
              </p>
              <p className="mt-2 text-[#6a645a]">{site.typicalSpend}</p>
            </div>
          </div>

          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex w-fit items-center rounded-full bg-[#16382c] px-7 py-3 text-[11px] font-medium tracking-[0.18em] text-[#f6f0e6] uppercase transition hover:bg-[#0f241c]"
          >
            Open directions
          </a>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-[#16382c]/10 bg-[#ebe2d2] shadow-[0_24px_60px_rgba(22,56,44,0.1)]">
          <div className="h-[460px] lg:h-full lg:min-h-[520px]">
            <VisitMap />
          </div>
        </div>
      </div>
    </section>
  );
}
