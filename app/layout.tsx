import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "@/components/CartProvider";
import { SiteChrome } from "@/components/SiteChrome";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.brandName} · Karvenagar`,
    template: `%s | ${site.brandName}`,
  },
  description: `${site.brandName} is a high-protein cafe on Cummins College Road, Karvenagar, Pune.`,
  applicationName: site.brandName,
  keywords: ["Fuel Up", "Karvenagar", "Pune", "protein bowls", "cafe", "Cummins College Road"],
  openGraph: {
    title: `${site.brandName} · Karvenagar`,
    description: `${site.brandName} is a high-protein cafe on Cummins College Road, Karvenagar, Pune.`,
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f0e6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#f6f0e6] text-[#1a1916]">
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
          signInUrl="/sign-in"
          signUpUrl="/sign-up"
        >
          <CartProvider>
            <SiteChrome>{children}</SiteChrome>
          </CartProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
