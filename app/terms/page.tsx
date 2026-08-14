import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms for using the ${site.brandName} cafe website in Karvenagar, Pune.`,
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions">
      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">About these terms</h2>
        <p className="mt-3">
          These terms apply when you use the <strong>{site.brandName}</strong> website.{" "}
          {site.brandName} is a cafe at {site.address}. The legal name of the business, if
          different from the brand name, is {site.legalNamePlaceholder}.
        </p>
        <p className="mt-3">
          This page describes how this website works today. It is not a substitute for legal
          advice.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">Using this website</h2>
        <p className="mt-3">
          You may browse a preview of the cafe without an account. A full menu, nutrition
          details, and checkout need a signed-in account. Please use the site in a lawful,
          ordinary way. Do not try to disrupt the site, copy it for a competing service, or
          misuse any content. Keep your sign-in details to yourself.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">Accounts</h2>
        <p className="mt-3">
          Sign-in is provided by Clerk. You may create an account to open the full menu and to
          request bowls for cafe pickup. You are responsible for activity under your account.
          Guest quotes on the homepage are examples we wrote for the site. They are not reviews
          collected from this website.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">The cafe, menu, and prices</h2>
        <p className="mt-3">
          {site.brandName} serves food from our cafe in Karvenagar, Pune. A typical spend is
          around {site.typicalSpend}. That figure is a general guide to everyday visits, not a
          promise that every item or every visit will fall in that range.
        </p>
        <p className="mt-3">
          If this website shows dish names, descriptions, photos, nutrition notes, or prices,
          treat them as information to help you choose. Items can sell out. Recipes, portion
          sizes, and prices can change. What you are served in the cafe is what is available that
          day.
        </p>
        <p className="mt-3">
          Signed-in guests can add bowls to a bag and send an order request for pickup at the
          cafe. That request is not a paid online order. This website does not process card
          payments, take table reservations, or charge you online. Paying for food happens at
          the cafe when you confirm what is available that day. A typical spend is around{" "}
          {site.typicalSpend}.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">Food photos and descriptions</h2>
        <p className="mt-3">
          Photos and wording are meant to give a fair sense of our food. Lighting, garnish, and
          seasonal ingredients can make a plate look a little different from a picture. Nutrition
          figures, if shown, are estimates. They can vary with serving size, cooking, and
          ingredients on hand.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">Allergens and dietary needs</h2>
        <p className="mt-3">
          We prepare food in a working cafe kitchen. Dishes may share surfaces, utensils, and
          cooking oil with other items, including those that contain milk, gluten, nuts, soya,
          eggs, or other common allergens.
        </p>
        <p className="mt-3">
          Checkout notes are optional comments for pickup. They are not a medical form, and this
          website does not collect a dietary profile. If you have an allergy or a strict diet,
          please call us before you visit so we can tell you what we can safely prepare that
          day. Phone:{" "}
          <a className="underline underline-offset-2" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">Your responsibilities</h2>
        <p className="mt-3">
          Please tell us about allergies when you order in person. Use the information on this
          site as a starting point, not as a medical or nutrition plan. If something on the site
          looks wrong, let us know and we will correct it when we can.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">Our content</h2>
        <p className="mt-3">
          The {site.brandName} name, text, and images on this website belong to the cafe or to
          people who have allowed us to use them. You may share a link to a page. Please do not
          copy the site’s content or photos for your own commercial use without asking us.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">Website availability</h2>
        <p className="mt-3">
          We aim to keep the site available, but it may be down for updates, hosting problems, or
          other reasons outside our control. The cafe can still serve guests even if the website
          is temporarily unavailable.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">If something goes wrong</h2>
        <p className="mt-3">
          This website is provided as a simple way to find the cafe and read about us. To the
          extent the law allows, {site.brandName} is not responsible for losses that come only
          from using or being unable to use the website — for example, if a page is temporarily
          unavailable or a description is out of date.
        </p>
        <p className="mt-3">
          Nothing here limits responsibility that cannot be limited under applicable law,
          including for personal injury caused by food we serve where the law does not allow that
          limit.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">Changes</h2>
        <p className="mt-3">
          We may change opening details, the menu, prices, or this website. We may also update
          these terms so they stay accurate. The date at the top of this page shows the latest
          revision.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">Contact</h2>
        <p className="mt-3">
          {site.brandName}
          <br />
          {site.address}
          <br />
          Phone:{" "}
          <a className="underline underline-offset-2" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
          <br />
          Email: {site.contactEmailPlaceholder}
        </p>
      </section>
    </LegalPage>
  );
}
