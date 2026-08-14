import { SignIn } from "@clerk/nextjs";
import { AuthSplit } from "@/components/AuthSplit";
import { clerkAppearance } from "@/lib/auth";

export default function SignInPage() {
  return (
    <AuthSplit
      eyebrow="Karvenagar · Pune"
      title="Welcome back to the cafe."
      copy="Sign in to see every bowl, the kitchen macros, and send a pickup request. Pay at Fuel Up when you collect."
    >
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        appearance={clerkAppearance}
      />
    </AuthSplit>
  );
}
