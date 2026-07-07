# Service Request Form Integration

The `RequestServiceForm` (`components/RequestServiceForm.tsx`) is a real, accessible form. It is **not connected to a backend yet** — and it does **not fake submissions**. Until an endpoint is configured, submitting shows an honest notice directing the visitor to call.

## Fields collected

| Field | Name attr | Required |
|---|---|---|
| Name | `name` | ✅ |
| Phone | `phone` | ✅ |
| Email | `email` | — |
| City | `city` | ✅ (from `site.serviceAreas`) |
| Service needed | `service` | ✅ |
| Preferred contact method | `contactMethod` | — |
| Problem description | `description` | — |
| Consent | `consent` | ✅ |

On submit it POSTs `application/json` to `site.forms.endpoint` with all fields plus `source: "request-service-form"` and `submittedTo: <site.name>`.

## Behavior by configuration state

- **No endpoint set** (`NEXT_PUBLIC_FORM_ENDPOINT` empty): the form shows a notice asking the visitor to call, and does **not** pretend to submit.
- **Endpoint set:** POSTs JSON; on `res.ok` shows a success state; on failure shows an error with the phone number.

## Step 1 — Choose a handler

Any endpoint that accepts a JSON POST works. Options:

- A serverless function / API route (e.g. add `app/api/lead/route.ts`) that emails `site.forms.notifyEmail` and/or forwards to a CRM.
- A form backend service (Formspree, Basin, Web3Forms, Formspark, etc.).
- A CRM/lead webhook (Zapier, Make, HubSpot, etc.).

## Step 2 — Set the env var

`.env.local` and host env:

```bash
NEXT_PUBLIC_FORM_ENDPOINT="https://your-endpoint.example.com/lead"
```

`lib/site.ts` already reads it:

```ts
forms: {
  endpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
  notifyEmail: "leads@sanmateofixhub.com", // update to a real inbox
},
```

## Step 3 — (Optional) built-in API route example

If you prefer a first-party endpoint, create `app/api/lead/route.ts`:

```ts
export async function POST(req: Request) {
  const data = await req.json();
  // TODO: validate, then email/forward to your CRM or notifyEmail.
  // Add spam protection (honeypot, rate limit, or a CAPTCHA) before production.
  return Response.json({ ok: true });
}
```

Then set `NEXT_PUBLIC_FORM_ENDPOINT="/api/lead"`.

## Step 4 — Payload shape

```json
{
  "name": "…", "phone": "…", "email": "…", "city": "San Mateo",
  "service": "Gas Stove Repair", "contactMethod": "Phone call",
  "description": "…", "consent": "on",
  "source": "request-service-form", "submittedTo": "SanMateo FixHub"
}
```

## Step 5 — Before production

- [ ] Add spam protection (honeypot field, rate limiting, or CAPTCHA).
- [ ] Confirm lead delivery to a monitored inbox / CRM.
- [ ] Test success and error states.
- [ ] Confirm consent checkbox is stored with the lead.
- [ ] Review data handling against the Privacy Policy.
