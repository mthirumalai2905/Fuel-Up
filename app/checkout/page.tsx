"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Show, useUser } from "@clerk/nextjs";
import { useCart } from "@/components/CartProvider";
import { signInHref } from "@/lib/auth";
import { site } from "@/lib/site";

export default function CheckoutPage() {
  const { lines, setQty, remove, clear } = useCart();
  const { user } = useUser();
  const [placed, setPlaced] = useState(false);
  const [notes, setNotes] = useState("");
  const [placedSummary, setPlacedSummary] = useState<string[]>([]);

  return (
    <div className="bg-[#f6f0e6] px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-3xl">
        <p className="eyebrow">Pickup</p>
        <h1 className="mt-3 font-serif text-4xl tracking-[-0.02em] text-[#16382c] sm:text-5xl">
          Checkout
        </h1>
        <p className="mt-3 text-[15px] leading-7 text-[#6a645a] sm:text-[16px]">
          This is an order request for pickup at the cafe. We do not take card
          or online payments on this website.
        </p>

        <Show when="signed-out">
          <div className="mt-10 rounded-[24px] border border-[#16382c]/8 bg-white/80 p-7 shadow-[0_16px_40px_rgba(22,56,44,0.06)] sm:p-8">
            <p className="font-serif text-2xl text-[#16382c]">Sign in to request bowls</p>
            <p className="mt-2 text-[#6a645a]">Cafe pickup only. Pay when you collect.</p>
            <Link href={signInHref("/checkout")} className="btn btn-primary mt-6">
              Sign in
            </Link>
          </div>
        </Show>

        <Show when="signed-in">
          {placed ? (
            <div className="mt-10 rounded-[24px] border border-[#16382c]/8 bg-white/80 p-7 shadow-[0_16px_40px_rgba(22,56,44,0.06)] sm:p-8">
              <h2 className="font-serif text-3xl text-[#16382c]">Request saved</h2>
              <p className="mt-3 leading-7 text-[#6a645a]">
                Confirm this list and pay at {site.brandName}, {site.address}.
                Call{" "}
                <a className="text-[#16382c] underline underline-offset-4" href={`tel:${site.phoneTel}`}>
                  {site.phoneDisplay}
                </a>{" "}
                if you want to check pickup timing.
              </p>
              {placedSummary.length > 0 ? (
                <ul className="mt-5 list-disc space-y-1 pl-5 text-[#1a1916]">
                  {placedSummary.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {notes ? <p className="mt-3 text-sm text-[#6a645a]">Notes: {notes}</p> : null}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/menu" className="btn btn-primary">
                  Back to menu
                </Link>
                <a href={`tel:${site.phoneTel}`} className="btn btn-outline">
                  Call the cafe
                </a>
              </div>
            </div>
          ) : lines.length === 0 ? (
            <div className="mt-10 rounded-[24px] border border-[#16382c]/8 bg-white/80 p-7 shadow-[0_16px_40px_rgba(22,56,44,0.06)] sm:p-8">
              <p className="font-serif text-2xl text-[#16382c]">Your bag is empty</p>
              <p className="mt-2 text-[#6a645a]">Add a bowl from the menu, then request pickup.</p>
              <Link href="/menu" className="btn btn-primary mt-5">
                Browse bowls
              </Link>
            </div>
          ) : (
            <div className="mt-10 space-y-4">
              {lines.map((line) => (
                <div
                  key={line.bowl.slug}
                  className="flex gap-4 rounded-[20px] border border-[#16382c]/8 bg-white/80 p-4 shadow-[0_10px_28px_rgba(22,56,44,0.05)]"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-[#ebe2d2] sm:h-24 sm:w-24">
                    <Image
                      src={line.bowl.image}
                      alt={line.bowl.shortName}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-semibold tracking-[0.08em] uppercase sm:text-[13px]">
                      {line.bowl.shortName}
                    </p>
                    <p className="mt-1 text-sm text-[#6a645a]">
                      {line.bowl.nutrition
                        ? `${line.bowl.nutrition.calories} kcal · ${line.bowl.nutrition.protein}g protein`
                        : "Nutrition not listed"}
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#16382c]/20 transition hover:bg-[#ebe2d2]"
                        onClick={() => setQty(line.bowl.slug, line.qty - 1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="min-w-4 text-center">{line.qty}</span>
                      <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#16382c]/20 transition hover:bg-[#ebe2d2]"
                        onClick={() => setQty(line.bowl.slug, line.qty + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        className="text-sm text-[#8a4b1f] underline-offset-4 hover:underline"
                        onClick={() => remove(line.bowl.slug)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-[20px] border border-[#16382c]/8 bg-white/80 p-5 shadow-[0_10px_28px_rgba(22,56,44,0.05)] sm:p-6">
                <p className="text-sm leading-6 text-[#6a645a]">
                  Requesting as{" "}
                  {user?.fullName || user?.primaryEmailAddress?.emailAddress || "signed-in guest"}.
                  Pay at the cafe.
                </p>
                <label className="mt-5 block text-sm font-medium" htmlFor="order-notes">
                  Notes for the cafe (optional)
                </label>
                <textarea
                  id="order-notes"
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  rows={3}
                  className="mt-2 w-full rounded-2xl border border-[#16382c]/10 bg-[#f6f0e6] p-3 text-sm outline-none focus:border-[#16382c]/40"
                  placeholder="Pickup time, spice level, or other notes"
                />
                <button
                  type="button"
                  className="btn btn-primary mt-5 w-full py-3.5"
                  onClick={() => {
                    setPlacedSummary(
                      lines.map((line) => `${line.qty} × ${line.bowl.shortName}`),
                    );
                    clear();
                    setPlaced(true);
                  }}
                >
                  Request pickup at the cafe
                </button>
              </div>
            </div>
          )}
        </Show>
      </div>
    </div>
  );
}
