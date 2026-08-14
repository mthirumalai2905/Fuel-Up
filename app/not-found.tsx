import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-[#f6f0e6] px-6 py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-serif text-4xl tracking-[-0.02em] text-[#16382c] sm:text-5xl">
        This page is not on the menu
      </h1>
      <p className="mt-4 max-w-md text-[15px] leading-7 text-[#6a645a] sm:text-[16px]">
        The link may be old, or the bowl may have moved. Head back to the cafe
        homepage.
      </p>
      <Link href="/" className="btn btn-primary mt-8">
        Back home
      </Link>
    </div>
  );
}
