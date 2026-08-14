"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuth = pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up");
  const isMenuApp = pathname === "/menu";

  if (isAuth) {
    return children;
  }

  if (isMenuApp) {
    return (
      <div className="flex h-dvh flex-col overflow-hidden">
        <Header />
        <div className="min-h-0 flex-1">{children}</div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="flex flex-1 flex-col">{children}</div>
      <SiteFooter />
    </>
  );
}
