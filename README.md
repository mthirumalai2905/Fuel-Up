# Fuel Up

Cafe website for Fuel Up on Cummins College Road, Karvenagar, Pune.

Guests can preview bowls on the homepage. A signed-in account unlocks the full menu, kitchen macros, and a pickup request. Payment happens at the cafe.

## Local

```bash
npm install
cp .env.example .env.local
```

Add your Clerk keys to `.env.local`, then:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Host **this folder** (`fuelup-web`). If Vercel is connected to the GitHub repo, the app root is already this folder.

A live **Internal Server Error** almost always means Clerk keys are missing on the host. Local `.env.local` is not uploaded.

1. Open [Clerk API keys](https://dashboard.clerk.com/last-active?path=api-keys).
2. In Vercel: Project → Settings → Environment Variables. Add all of these for Production and Preview:

   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (`pk_test_...` or `pk_live_...`)
   - `CLERK_SECRET_KEY` (`sk_test_...` or `sk_live_...`)
   - `NEXT_PUBLIC_CLERK_SIGN_IN_URL` = `/sign-in`
   - `NEXT_PUBLIC_CLERK_SIGN_UP_URL` = `/sign-up`

3. In Clerk, add your live URL (for example `https://your-app.vercel.app`) under allowed origins, redirect URLs, and the home URL.
4. Redeploy. Env changes do not apply until a new deploy.

Do not commit `.env.local`.
