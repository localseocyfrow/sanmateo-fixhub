# Ringba Call Tracking Setup

The site is **prepared** for Ringba dynamic number insertion (DNI) but Ringba is **not active** until you complete the steps below. Until then, the placeholder number from `lib/site.ts` is shown everywhere.

> ⚠️ Do not tell customers calls are tracked until this is live and tested.

## How phone numbers flow through the site

Every phone number renders through one of these hooks so it can be swapped in a single place:

- `PhoneLink` component (`components/PhoneLink.tsx`)
- `CallButton` component (`components/ui/Buttons.tsx`)
- Raw call links in `EmergencyBar`, `MobileCallBar`, `Footer`, `Contact` — each carries the CSS class **`ringba-phone`**, an inner **`.ringba-number`** span (where applicable), a `data-ringba` attribute (the number-pool id), and a `data-call-source` attribute identifying placement.

The `tel:` href and visible text both derive from `site.phone` in `lib/site.ts`.

## Step 1 — Set the real numbers

In `lib/site.ts` update:

```ts
phone: {
  display: "(650) 555-1234",   // human-readable fallback / static number
  tracking: "(650) 555-1234",  // your Ringba static/fallback tracking number
  e164: "+16505551234",        // used by tel: links
},
```

## Step 2 — Configure Ringba env vars

Create `.env.local` (and set the same in your host's env):

```bash
NEXT_PUBLIC_RINGBA_POOL_ID="your-ringba-number-pool-id"
NEXT_PUBLIC_RINGBA_SCRIPT_URL="https://js.ringba.com/<your-tag>.js"
```

## Step 3 — Enable Ringba

In `lib/site.ts` set:

```ts
ringba: {
  enabled: true,
  numberPoolId: process.env.NEXT_PUBLIC_RINGBA_POOL_ID ?? "",
  scriptUrl: process.env.NEXT_PUBLIC_RINGBA_SCRIPT_URL ?? "",
},
```

When `ringba.enabled` is `true` **and** `scriptUrl` is set, the Ringba tag is injected in `app/layout.tsx` (bottom of `<body>`). It will target elements by the `ringba-phone` class / `.ringba-number` span and the `data-ringba` pool id, and rewrite the visible number and `tel:` href at runtime.

## Step 4 — Configure the swap in the Ringba dashboard

In Ringba, configure your JS number-pool tag to replace:

- **Display text:** elements matching `.ringba-number` (and the visible text of `.ringba-phone` links without an inner span).
- **`href`:** the `tel:` link on `a.ringba-phone` elements.

Optionally pass `data-call-source` into Ringba as a sub-id / tag to attribute conversions by placement (`hero`, `header`, `mobile-bar`, `footer`, `contact-page`, etc.).

## Step 5 — Verify

1. `npm run build && npm run start`
2. Load the site, confirm the Ringba tag loads (Network tab) and numbers swap.
3. Place a test call and confirm it appears in Ringba reporting.
4. Confirm the `tel:` link dials the swapped number on mobile.

## Rollback

Set `ringba.enabled = false` — the tag stops loading and the site falls back to the static `site.phone` number. No other changes needed.
