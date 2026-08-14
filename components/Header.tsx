"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Show, UserButton, useAuth } from "@clerk/nextjs";
import { useCart } from "@/components/CartProvider";
import { site } from "@/lib/site";

export function Header() {
  const { count } = useCart();
  const { isSignedIn } = useAuth();
  const pathname = usePathname();
  const compact = pathname === "/menu";
  const [open, setOpen] = useState(false);
  const links = [
    { href: isSignedIn ? "/menu" : "/#menu", label: "Menu" },
    { href: "/#mission", label: "The cafe" },
    { href: "/#visit", label: "Visit" },
  ];

  return (
    <header className="sticky top-0 z-40">
      {compact ? null : (
        <div className="border-b border-[#1a1916]/10 bg-[#16382c] px-4 py-2 text-center text-[10px] font-medium tracking-[0.22em] text-[#f6f0e6] uppercase sm:text-[11px]">
          High-protein bowls · Karvenagar, Pune
        </div>
      )}
      <div className="border-b border-[#1a1916]/10 bg-[#f6f0e6]/92 backdrop-blur-md">
        <div
          className={`mx-auto grid w-full max-w-[1180px] grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 sm:px-6 ${
            compact ? "h-14 sm:h-16" : "h-[78px]"
          }`}
        >
          <nav className="hidden items-center gap-6 text-[11px] font-medium tracking-[0.2em] text-[#1a1916] uppercase md:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#16382c] md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className={`block h-px w-5 bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`block h-px w-5 bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </span>
          </button>

          <Link
            href="/"
            className={`justify-self-center font-serif leading-none tracking-[-0.03em] text-[#16382c] ${
              compact ? "text-[26px] sm:text-[30px]" : "text-[30px] sm:text-[34px]"
            }`}
            onClick={() => setOpen(false)}
          >
            {site.brandName.toLowerCase()}
          </Link>

          <div className="flex items-center justify-end gap-3 sm:gap-4">
            <Show when="signed-out">
              <Link
                href="/sign-in"
                className="nav-link hidden text-[11px] font-medium tracking-[0.2em] uppercase sm:inline"
              >
                Sign in
              </Link>
              <Link
                href="/sign-up"
                className="rounded-full bg-[#16382c] px-3.5 py-2 text-[11px] font-medium tracking-[0.18em] text-[#f6f0e6] uppercase transition hover:bg-[#0f241c] sm:px-5 sm:py-2.5"
              >
                Order
              </Link>
            </Show>
            <Show when="signed-in">
              <Link
                href="/checkout"
                className="relative rounded-full bg-[#16382c] px-3.5 py-2 text-[11px] font-medium tracking-[0.18em] text-[#f6f0e6] uppercase transition hover:bg-[#0f241c] sm:px-5 sm:py-2.5"
              >
                Order
                {count > 0 ? (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b8924a] px-1 text-[10px] text-[#1a1916]">
                    {count}
                  </span>
                ) : null}
              </Link>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8",
                  },
                }}
              />
            </Show>
          </div>
        </div>

        {open ? (
          <nav className="border-t border-[#16382c]/10 px-4 py-4 md:hidden">
            <div className="mx-auto flex max-w-[1180px] flex-col gap-3 text-[12px] font-medium tracking-[0.18em] uppercase">
              {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Show when="signed-out">
                <Link href="/sign-in" onClick={() => setOpen(false)}>
                  Sign in
                </Link>
              </Show>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
