import { SignUp } from "@clerk/nextjs";
import { AuthSplit } from "@/components/AuthSplit";
import { clerkAppearance } from "@/lib/auth";

export default function SignUpPage() {
  return (
    <AuthSplit
      eyebrow="Create an account"
      title="Join Fuel Up to order bowls."
      copy="A Fuel Up account unlocks the full menu and lets you request cafe pickup. We do not take card payments on this website."
    >
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        appearance={clerkAppearance}
      />
    </AuthSplit>
  );
}
