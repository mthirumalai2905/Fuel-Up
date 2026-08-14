import { SignUp } from "@clerk/nextjs";
import { AuthSplit } from "@/components/AuthSplit";
import { clerkAppearance } from "@/lib/auth";

export default function SignUpPage() {
  return (
    <AuthSplit
      eyebrow="From the kitchen"
      title="Join Fuel Up to order bowls."
      copy="An account unlocks the full menu and lets you request cafe pickup."
      facts={[
        "Rice bowls, salad bowls, smoothie bowls, and a short breakfast list.",
        "Rajma paneer lists 32g protein. The grilled chicken salad lists 39g.",
        "Two smoothie bowls have no macros on the card, so we leave those blank.",
        "No card payments on the site. Collect and pay at the cafe.",
      ]}
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
