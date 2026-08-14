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
    <div className="bg-[#f6f0e6] px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-3xl">
        <p className="text-[11px] font-medium tracking-[0.22em] text-[#b8924a] uppercase">
          Pickup
        </p>
        <h1 className="mt-3 font-serif text-5xl tracking-[-0.02em] text-[#16382c]">Checkout</h1>
        <p className="mt-3 text-[16px] leading-7 text-[#6a645a]">
          This is an order request for pickup at the cafe. We do not take card
          or online payments on this website.
        </p>

        <Show when="signed-out">
          <div className="mt-10 rounded-[28px] border border-[#16382c]/8 bg-white/70 p-8">
            <p className="font-serif text-2xl text-[#16382c]">Sign in to request bowls</p>
            <p className="mt-2 text-[#6a645a]">Cafe pickup only — pay when you collect.</p>
            <Link
              href={signInHref("/checkout")}
              className="mt-6 inline-flex rounded-full bg-[#16382c] px-6 py-2.5 text-[11px] font-medium tracking-[0.16em] text-[#f6f0e6] uppercase transition hover:bg-[#0f241c]"
            >
              Sign in
            </Link>
          </div>
        </Show>

        <Show when="signed-in">
          {placed ? (
            <div className="mt-10 rounded-[28px] border border-[#16382c]/8 bg-white/70 p-8">
              <h2 className="font-serif text-3xl text-[#16382c]">Request saved</h2>
              <p className="mt-3 leading-7 text-[#6a645a]">
                Confirm this list and pay at {site.brandName} — {site.address}.
                Call{" "}
                <a className="text-[#16382c] underline underline-offset-4" href={`tel:${site.phoneTel}`}>
                  {site.phoneDisplay}
                </a>{" "}
                if you want to check pickup timing. Typical spend {site.typicalSpend}.
              </p>
              {placedSummary.length > 0 ? (
                <ul className="mt-5 list-disc space-y-1 pl-5 text-[#1a1916]">
                  {placedSummary.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {notes ? <p className="mt-3 text-sm text-[#6a645a]">Notes: {notes}</p> : null}
              <Link href="/menu" className="mt-6 inline-block text-[#16382c] underline underline-offset-4">
                Back to menu
              </Link>
            </div>
          ) : lines.length === 0 ? (
            <div className="mt-10 rounded-[28px] border border-[#16382c]/8 bg-white/70 p-8">
              <p className="font-serif text-2xl text-[#16382c]">Your bag is empty.</p>
              <Link href="/menu" className="mt-4 inline-block text-[#16382c] underline underline-offset-4">
                Browse bowls
              </Link>
            </div>
          ) : (
            <div className="mt-10 space-y-4">
              {lines.map((line) => (
                <div
                  key={line.bowl.slug}
                  className="flex gap-4 rounded-[24px] border border-[#16382c]/8 bg-white/80 p-4"
                >
                  <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-[#ebe2d2]">
                    <Image
                      src={line.bowl.image}
                      alt={line.bowl.shortName}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold tracking-wide uppercase">{line.bowl.shortName}</p>
                    <p className="mt-1 text-sm text-[#6a645a]">
                      {line.bowl.nutrition
                        ? `${line.bowl.nutrition.calories} kcal · ${line.bowl.nutrition.protein}g protein`
                        : "Nutrition not listed"}
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#16382c]/20"
                        onClick={() => setQty(line.bowl.slug, line.qty - 1)}
                      >
                        −
                      </button>
                      <span>{line.qty}</span>
                      <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#16382c]/20"
                        onClick={() => setQty(line.bowl.slug, line.qty + 1)}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        className="text-sm text-[#8a4b1f]"
                        onClick={() => remove(line.bowl.slug)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-[24px] border border-[#16382c]/8 bg-white/80 p-6">
                <p className="text-sm leading-6 text-[#6a645a]">
                  Requesting as{" "}
                  {user?.fullName || user?.primaryEmailAddress?.emailAddress || "signed-in guest"}.
                  Pay at the cafe. Typical spend {site.typicalSpend}.
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
                  className="mt-5 w-full rounded-full bg-[#16382c] py-3.5 text-[12px] font-medium tracking-[0.16em] text-[#f6f0e6] uppercase transition hover:bg-[#0f241c]"
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
