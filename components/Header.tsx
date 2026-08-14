"use client";

import Link from "next/link";
import { Show, UserButton } from "@clerk/nextjs";
import { useCart } from "@/components/CartProvider";
import { site } from "@/lib/site";

export function Header() {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40">
      <div className="border-b border-[#1a1916]/10 bg-[#16382c] px-4 py-2 text-center text-[10px] font-medium tracking-[0.22em] text-[#f6f0e6] uppercase sm:text-[11px]">
        Karvenagar, Pune · Typical spend {site.typicalSpend}
      </div>
      <div className="border-b border-[#1a1916]/10 bg-[#f6f0e6]/90 backdrop-blur-md">
        <div className="mx-auto grid h-[78px] w-full max-w-[1180px] grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 sm:px-6">
          <nav className="hidden items-center gap-6 text-[11px] font-medium tracking-[0.2em] text-[#1a1916] uppercase md:flex">
            <Link href="/#menu" className="nav-link">
              Menu
            </Link>
            <Link href="/#mission" className="nav-link">
              The cafe
            </Link>
            <Link href="/#visit" className="nav-link">
              Visit
            </Link>
          </nav>

          <Link
            href="/"
            className="justify-self-center font-serif text-[34px] leading-none tracking-[-0.03em] text-[#16382c]"
          >
            {site.brandName.toLowerCase()}
          </Link>

          <div className="flex items-center justify-end gap-4">
            <Show when="signed-out">
              <Link
                href="/sign-in"
                className="nav-link text-[11px] font-medium tracking-[0.2em] uppercase"
              >
                Sign in
              </Link>
              <Link
                href="/sign-up"
                className="rounded-full bg-[#16382c] px-5 py-2.5 text-[11px] font-medium tracking-[0.18em] text-[#f6f0e6] uppercase transition hover:bg-[#0f241c]"
              >
                Order
              </Link>
            </Show>
            <Show when="signed-in">
              <Link
                href="/checkout"
                className="relative rounded-full bg-[#16382c] px-5 py-2.5 text-[11px] font-medium tracking-[0.18em] text-[#f6f0e6] uppercase transition hover:bg-[#0f241c]"
              >
                Order
                {count > 0 ? (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b8924a] px-1 text-[10px] text-[#1a1916]">
                    {count}
                  </span>
                ) : null}
              </Link>
              <UserButton />
            </Show>
          </div>
        </div>
      </div>
    </header>
  );
}
