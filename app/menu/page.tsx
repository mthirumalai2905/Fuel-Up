import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { MenuExplorer } from "@/components/MenuExplorer";
import { signInHref, signUpHref } from "@/lib/auth";

export default async function MenuPage() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <div className="bg-[#f6f0e6] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-xl rounded-[28px] border border-[#16382c]/8 bg-white/70 p-10 text-center shadow-[0_24px_60px_rgba(22,56,44,0.08)]">
          <p className="text-[11px] font-medium tracking-[0.22em] text-[#b8924a] uppercase">
            Full menu
          </p>
          <h1 className="mt-3 font-serif text-4xl tracking-[-0.02em] text-[#16382c]">
            Sign in to see every bowl
          </h1>
          <p className="mt-4 text-[16px] leading-7 text-[#6a645a]">
            Guests can preview a few bowls on the homepage. The full menu,
            nutrition, and checkout need a Fuel Up account.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              href={signInHref("/menu")}
              className="rounded-full bg-[#16382c] px-6 py-2.5 text-[11px] font-medium tracking-[0.16em] text-[#f6f0e6] uppercase transition hover:bg-[#0f241c]"
            >
              Sign in
            </Link>
            <Link
              href={signUpHref("/menu")}
              className="rounded-full border border-[#16382c] px-6 py-2.5 text-[11px] font-medium tracking-[0.16em] uppercase transition hover:bg-[#16382c] hover:text-[#f6f0e6]"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f6f0e6] px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-[1180px]">
        <p className="text-[11px] font-medium tracking-[0.22em] text-[#b8924a] uppercase">
          Full menu
        </p>
        <h1 className="mt-3 font-serif text-5xl tracking-[-0.02em] text-[#16382c]">
          Every Fuel Up bowl
        </h1>
        <p className="mt-4 max-w-2xl text-[16px] leading-7 text-[#6a645a]">
          Nutrition figures come from the kitchen cards. Prices are confirmed at
          the cafe — typical spend is listed in the footer.
        </p>

        <div className="mt-10">
          <MenuExplorer signedIn />
        </div>
      </div>
    </div>
  );
}
