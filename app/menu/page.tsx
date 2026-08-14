import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { MenuExplorer } from "@/components/MenuExplorer";
import { signInHref, signUpHref } from "@/lib/auth";

export default async function MenuPage() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <div className="flex flex-1 items-center justify-center bg-[#f6f0e6] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-xl rounded-[24px] border border-[#16382c]/8 bg-white/80 p-8 text-center shadow-[0_20px_50px_rgba(22,56,44,0.08)] sm:p-10">
          <p className="eyebrow">Full menu</p>
          <h1 className="mt-3 font-serif text-4xl tracking-[-0.02em] text-[#16382c]">
            Sign in to see every bowl
          </h1>
          <p className="mt-4 text-[15px] leading-7 text-[#6a645a] sm:text-[16px]">
            Guests can preview a few bowls on the homepage. The full menu,
            nutrition, and checkout need a Fuel Up account.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={signInHref("/menu")} className="btn btn-primary">
              Sign in
            </Link>
            <Link href={signUpHref("/menu")} className="btn btn-outline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <MenuExplorer signedIn />;
}
