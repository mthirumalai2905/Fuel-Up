import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.brandName} handles information when you use this cafe website.`,
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">Who we are</h2>
        <p className="mt-3">
          This website is for <strong>{site.brandName}</strong>, a cafe in Karvenagar, Pune. The
          legal name of the business, if different from the brand name, is {site.legalNamePlaceholder}.
        </p>
        <p className="mt-3">
          You can visit us at {site.address}, or call{" "}
          <a className="underline underline-offset-2" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
          . If you prefer email, write to {site.contactEmailPlaceholder}.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">What this policy covers</h2>
        <p className="mt-3">
          This page explains what happens when you use this website. It is written for our cafe
          site as it works today. It is not legal advice.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">Information we collect</h2>
        <p className="mt-3">
          You can browse a short preview of our bowls without an account. To see the full menu,
          nutrition details, and checkout, you sign in. We use Clerk to run those accounts. Clerk
          is an authentication service. When you create or use an account, Clerk handles the
          sign-in details you give it, typically an email address, a password or a sign-in
          method you choose, and your name if you add one, plus the session needed to keep you
          signed in.
        </p>
        <p className="mt-3">
          Checkout on this site is an order request for pickup at the cafe, not a card payment.
          If you add bowls to a bag, that list is stored in your browser on this device so you
          can review it. Optional notes you type on the checkout page stay in that request on
          your device. We do not run a payment processor on this website.
        </p>
        <p className="mt-3">
          This website does not have a contact form, reservation booking, newsletter signup, or
          analytics or advertising tracker. The Visit page shows a map of Cummins College Road
          using public map tiles so you can find the cafe. That map does not use Google Maps
          analytics. Guest quotes on the homepage are static text we placed on the page. We do
          not collect reviews through the site.
        </p>
        <p className="mt-3">
          When you open a page, the computer that hosts the website may automatically receive
          ordinary technical details that browsers send with any visit. That can include your IP
          address, browser type, the page you requested, and the time of the visit.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">Information you share with us directly</h2>
        <p className="mt-3">
          If you call the cafe, your phone provider connects the call. We may see the number you
          call from, the same way any shop would. We use that only to speak with you about the
          cafe. We do not collect call recordings through this website.
        </p>
        <p className="mt-3">
          If you later email {site.contactEmailPlaceholder}, we will use the address and message
          you send only to reply and to handle your request.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">How we use information</h2>
        <p className="mt-3">We use the limited information above to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>show you this website and keep it working</li>
          <li>let you sign in, stay signed in, and open the full menu and checkout</li>
          <li>keep a bag of bowls in your browser so you can request pickup at the cafe</li>
          <li>understand and fix basic technical problems if they appear in host logs</li>
          <li>respond if you contact the cafe by phone or email</li>
        </ul>
        <p className="mt-3">
          We do not sell your information. We do not use it for marketing lists, because this
          website does not collect email sign-ups.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">Cookies and similar technologies</h2>
        <p className="mt-3">
          We do not set advertising cookies, and we do not use a cookie banner for marketing
          trackers. Clerk uses cookies or similar storage that are needed to sign you in and keep
          your session. The website may also use your browser’s local storage for the bowls in
          your bag. We do not use those tools to build an advertising profile of you.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">Fonts and other services used to show the site</h2>
        <p className="mt-3">
          This site is built with Next.js. The pages load typefaces through Next.js font
          handling, which may request font files from Google. That request is made so the text
          looks consistent. Sign-in and account screens are provided by Clerk. The Visit page
          loads map tiles from OpenStreetMap and CARTO so the cafe pin can be shown. We do not
          embed social media feeds, payment widgets, or review widgets on this website.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">How information is stored and how long we keep it</h2>
        <p className="mt-3">
          Clerk stores the account information needed to sign you in. We do not keep a separate
          cafe customer database on this website. Your bag and checkout notes live in your
          browser until you clear them or finish a request. Ordinary server logs, if the host
          keeps them, are stored only as long as needed to run and protect the site, then
          discarded according to the host’s usual practice. We do not store card numbers, because
          this site does not take card payments.
        </p>
        <p className="mt-3">
          If you contact us by phone or email, we keep only what we need to answer you and to run
          the cafe day to day.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">Keeping information safe</h2>
        <p className="mt-3">
          We take reasonable care with the cafe’s systems. No website can promise perfect
          security. Please do not send sensitive personal or payment details through channels this
          site does not provide.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">Your choices</h2>
        <p className="mt-3">
          You can open your Clerk account menu on this site to manage or sign out of your
          account. You can also clear the bowls saved in your browser. If you have contacted the
          cafe and want us to update or remove what we have from that conversation, please get in
          touch using the details below.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">How to contact us about privacy</h2>
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

      <section>
        <h2 className="font-serif text-2xl text-[#1c1b18]">Updates to this policy</h2>
        <p className="mt-3">
          If the website changes, for example if we add a contact form, a newsletter, or a
          payment provider, we will update this page so it matches how the cafe site actually
          works. The date at the top shows when we last revised it.
        </p>
      </section>
    </LegalPage>
  );
}
