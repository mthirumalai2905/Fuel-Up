import { SignIn } from "@clerk/nextjs";
import { AuthSplit } from "@/components/AuthSplit";
import { clerkAppearance } from "@/lib/auth";

export default function SignInPage() {
  return (
    <AuthSplit
      eyebrow="From the kitchen"
      title="Welcome back to the cafe."
      copy="Sign in to see every bowl, the kitchen macros, and send a pickup request."
      facts={[
        "The creamy grilled chicken rice bowl lists 43g protein on the kitchen card.",
        "Salad bowls start at 280 kcal, with fibre listed up to 11g.",
        "Macros come from the cards we cook from, not from a guess.",
        "You pay at the counter. This site only holds a pickup request.",
      ]}
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
