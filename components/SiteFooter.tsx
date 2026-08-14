import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-[#0f241c] px-4 py-16 text-[#d8d0c4] sm:px-6">
      <div className="mx-auto grid w-full max-w-[1180px] gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-4xl tracking-[-0.03em] text-[#f6f0e6]">
            {site.brandName.toLowerCase()}
          </p>
          <p className="mt-4 max-w-sm text-[15px] leading-7">
            High-protein bowls from a small cafe on Cummins College Road,
            Karvenagar.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-medium tracking-[0.2em] text-[#b8924a] uppercase">
            Visit
          </p>
          <p className="mt-3 text-[14px] leading-7">{site.address}</p>
          <a
            className="mt-3 inline-block text-[#f6f0e6] underline-offset-4 hover:underline"
            href={`tel:${site.phoneTel}`}
          >
            {site.phoneDisplay}
          </a>
        </div>
        <nav aria-label="Legal">
          <p className="text-[11px] font-medium tracking-[0.2em] text-[#b8924a] uppercase">
            Pages
          </p>
          <div className="mt-3 flex flex-col gap-2 text-[14px]">
            <Link className="hover:text-[#f6f0e6]" href="/#menu">
              Menu
            </Link>
            <Link className="hover:text-[#f6f0e6]" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="hover:text-[#f6f0e6]" href="/terms">
              Terms &amp; Conditions
            </Link>
          </div>
        </nav>
      </div>
      <div className="mx-auto mt-14 flex w-full max-w-[1180px] justify-between border-t border-white/10 pt-6 text-[12px] tracking-wide text-[#9a9286]">
        <p>Fuel Up, Karvenagar</p>
        <Link className="hover:text-[#d8d0c4]" href="/#visit">
          Find the cafe
        </Link>
      </div>
    </footer>
  );
}
