export function signInHref(redirectUrl?: string) {
  if (!redirectUrl) return "/sign-in";
  return `/sign-in?redirect_url=${encodeURIComponent(redirectUrl)}`;
}

export function signUpHref(redirectUrl?: string) {
  if (!redirectUrl) return "/sign-up";
  return `/sign-up?redirect_url=${encodeURIComponent(redirectUrl)}`;
}

export const clerkAppearance = {
  variables: {
    colorPrimary: "#16382c",
    colorBackground: "#f6f0e6",
    colorText: "#1a1916",
    colorTextSecondary: "#6a645a",
    colorNeutral: "#16382c",
    borderRadius: "0.85rem",
    fontFamily: "inherit",
  },
  elements: {
    rootBox: "w-full",
    cardBox: "w-full shadow-none",
    card: "bg-transparent shadow-none p-6 sm:p-8",
    headerTitle: "font-serif text-[#16382c] text-3xl font-normal",
    headerSubtitle: "text-[#6a645a]",
    socialButtonsBlockButton:
      "border border-[#16382c]/12 bg-white hover:bg-[#f6f0e6]",
    formFieldInput:
      "border-[#16382c]/12 bg-white focus:border-[#16382c] focus:ring-[#16382c]",
    formButtonPrimary:
      "bg-[#16382c] hover:bg-[#0f241c] text-[#f6f0e6] shadow-none",
    footerActionLink: "text-[#16382c] hover:text-[#0f241c]",
    identityPreviewEditButton: "text-[#16382c]",
  },
} as const;
