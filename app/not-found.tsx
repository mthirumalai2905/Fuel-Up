import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-[#f6f0e6] px-6 py-24 text-center">
      <p className="text-[11px] font-medium tracking-[0.22em] text-[#b8924a] uppercase">
        404
      </p>
      <h1 className="mt-3 font-serif text-5xl tracking-[-0.02em] text-[#16382c]">
        This page is not on the menu
      </h1>
      <p className="mt-4 max-w-md text-[16px] leading-7 text-[#6a645a]">
        The link may be old, or the bowl may have moved. Head back to the cafe
        homepage.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-[#16382c] px-7 py-3 text-[11px] font-medium tracking-[0.18em] text-[#f6f0e6] uppercase transition hover:bg-[#0f241c]"
      >
        Back home
      </Link>
    </div>
  );
}
