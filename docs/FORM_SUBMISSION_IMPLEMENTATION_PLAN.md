# Form Submission Implementation Plan (Option 1: Next.js API Routes on Vercel)

This document is a detailed, codebase-based plan for making all form submissions work using Next.js API routes deployed on Vercel. No dedicated backend server is required.

---

## 1. Scope Summary

| Form | Location | Current state | Backend needed |
|------|----------|----------------|-----------------|
| **Contact** | `app/contact/page.tsx` | Has state + `handleSubmit`; no API call | `POST /api/contact` |
| **Get Quote** | `app/getquote/page.tsx` | Static form, no state, no file input | `POST /api/quote` (with optional file) |
| **Newsletter** | `app/components/sections/NewsletterSection.tsx` | Has state; `onSubmit` only prevents default | `POST /api/newsletter` |

**Stack:** Next.js 16 (App Router), React 19, TypeScript. No existing `app/api/` routes. No email/DB libs in `package.json` yet.

---

## 2. Architecture Overview

```
User submits form (client)
    → fetch('/api/contact' | '/api/quote' | '/api/newsletter')
    → Vercel runs serverless route (app/api/.../route.ts)
    → Route: validate → send email / store → return JSON
    → Client: show success/error, reset form if success
```

- **Secrets:** All API keys (email provider, storage) live in env vars; only API routes read them.
- **Email:** Use one transactional email provider (Resend recommended) for contact, quote, and optional newsletter notifications.
- **File upload (quote):** Vercel serverless body limit is 4.5 MB. Options: (A) accept small files in request body (e.g. base64), or (B) use Vercel Blob / S3 and send only a URL to the API. Plan assumes (A) for simplicity with a 3 MB client-side cap; (B) can be Phase 2.

---

## 3. Environment Variables

Create `.env.local` (and mirror in Vercel project settings). Add to `.gitignore` if not already.

| Variable | Required | Description |
|----------|----------|-------------|
| `SENDGRID_API_KEY` | Yes | API key from SendGrid (Settings → API Keys); use one with “Mail Send” access |
| `CONTACT_EMAIL` | Yes | Comma-separated list of recipients for contact/quote/newsletter submissions. Both Jacque and Josh receive all form emails. |
| `FROM_EMAIL` | Yes | Verified single sender in SendGrid (e.g. `noreply@yourdomain.com`) |
| `NEWSLETTER_LIST_ID` | Optional | If you use a list/audience in Resend or another provider later |

**Form submission emails are sent to:** `Jacque@elitecardprocessing.com` and `josh@elitecardprocessing.com`. Set `CONTACT_EMAIL` to a comma-separated list; the email lib will send to all addresses.

Create `.env.example` (no secrets) for other devs:

```env
# Form submission (Option 1 – Next.js API routes)
# Contact, quote, and newsletter submissions go to both addresses below
SENDGRID_API_KEY=
CONTACT_EMAIL=Jacque@elitecardprocessing.com,josh@elitecardprocessing.com
FROM_EMAIL=noreply@yourdomain.com
```

---

## 4. Dependencies

Add only what you need for the chosen email provider.

**In use: SendGrid**

```bash
npm install @sendgrid/mail
```

- Sending via SendGrid API; verify a sender identity (domain or single sender) in the SendGrid dashboard.

**Optional later:** `zod` for shared validation (client + server):

```bash
npm install zod
```

---

## 5. Shared Utilities (optional but recommended)

- **Validation:** Define one place for payload shapes and reuse in both API routes and (if desired) client.
- **Response shape:** Keep API responses consistent so the frontend can handle success/error the same way.

Suggested layout:

```
app/
  api/
    contact/route.ts
    quote/route.ts
    newsletter/route.ts
  lib/
    email.ts        # send email via Resend
    validate.ts     # zod schemas + parse (optional)
    api-response.ts # { success, message, error? }
```

---

## 6. API Routes – Detailed Specs

### 6.1 `POST /api/contact`

**Request:** `Content-Type: application/json`

```json
{
  "name": "string (required)",
  "email": "string (required, email)",
  "telephone": "string (optional)",
  "company": "string (optional)",
  "message": "string (required)"
}
```

**Response (success):** `200`  
`{ "success": true, "message": "Message sent. We'll respond within 24 hours." }`

**Response (validation error):** `400`  
`{ "success": false, "error": "Validation failed", "details": [...] }`

**Response (server error):** `500`  
`{ "success": false, "error": "Failed to send message." }`

**Logic:**

1. Parse JSON body.
2. Validate required fields and email format (and optionally max lengths).
3. Call `lib/email.ts` to send one email to **both** recipients in `CONTACT_EMAIL` (e.g. subject: "Contact form: [name]", body: name, email, telephone, company, message). The email lib parses `CONTACT_EMAIL` as comma-separated and sends to each address.
4. Return success or error JSON.

**Files to add:**

- `app/api/contact/route.ts`
- `app/lib/email.ts` (if not exists)
- Optionally `app/lib/validate.ts` with a contact schema

---

### 6.2 `POST /api/quote`

**Request:** Either JSON only or `multipart/form-data` if you include file.

**Option A – JSON only (simplest, no file):**

```json
{
  "businessName": "string (required)",
  "contactName": "string (required)",
  "phone": "string (required)",
  "email": "string (required, email)",
  "yearsInBusiness": "number (optional)",
  "notes": "string (optional)"
}
```

**Option B – With file:** Use `FormData` from frontend. Backend reads `request.formData()`, gets text fields + one file. Validate file type (e.g. PDF, images) and size (e.g. max 3 MB). Attach to email or upload to Blob and link in email (Phase 2).

**Response:** Same pattern as contact (200 + success, 400 + validation, 500 + error).

**Logic:**

1. Parse body (JSON or FormData).
2. Validate required fields and email.
3. If file present: validate type/size; optionally attach to email or upload to storage and get URL.
4. Send email to **both** recipients in `CONTACT_EMAIL` (e.g. subject: "Quote request: [businessName]", body: all fields + file link or attachment).
5. Return JSON.

**Files to add:**

- `app/api/quote/route.ts`
- Reuse `app/lib/email.ts` (and optionally validate.ts with quote schema).

---

### 6.3 `POST /api/newsletter`

**Request:** `Content-Type: application/json`

```json
{
  "email": "string (required, email)",
  "name": "string (optional)"
}
```

**Response:** Same success/error pattern as above.

**Logic:**

1. Parse JSON and validate email (and optional name length).
2. For MVP: send an email to **both** recipients in `CONTACT_EMAIL` (e.g. "Newsletter signup: [email], name: [name]"). No separate DB/list required.
3. Later: integrate Resend Audiences or another provider and store in a list; then add `NEWSLETTER_LIST_ID` and call their API.
4. Return JSON.

**Files to add:**

- `app/api/newsletter/route.ts`
- Reuse `app/lib/email.ts` and optional `app/lib/validate.ts`.

---

## 7. Frontend Changes – Per Form

### 7.1 Contact (`app/contact/page.tsx`)

**Current:** `handleSubmit` only does `setIsSubmitting(true)`, 1.5s delay, then reset. No `fetch`.

**Changes:**

1. In `handleSubmit`:
   - Keep `e.preventDefault()` and `setIsSubmitting(true)`.
   - `fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })`.
   - If `res.ok`: show success message (state or inline), reset form, `setIsSubmitting(false)`.
   - If `!res.ok`: read `res.json()`, show `error` (or `details`) from body, then `setIsSubmitting(false)`.
   - On network error: show generic error, `setIsSubmitting(false)`.
2. Add a small success/error UI (e.g. a banner or text above the form) driven by state: `submitStatus: 'idle' | 'success' | 'error'` and optional `submitError: string`.
3. No change to field names or structure; they already match the API payload (`name`, `email`, `telephone`, `company`, `message`).

---

### 7.2 Get Quote (`app/getquote/page.tsx`)

**Current:** Static form; no state, no `name`s, no submit handler; upload is a non-functional div.

**Changes:**

1. **Convert to client component:** Add `'use client'` at top.
2. **State:** One object for all fields, e.g.  
   `businessName`, `contactName`, `phone`, `email`, `yearsInBusiness`, `notes`, `file` (File | null).  
   Plus `isSubmitting`, `submitStatus`, `submitError`.
3. **Form:** Add `name` and controlled `value`/`onChange` for each input (and optional ref for file input). For number input, coerce to number in state.
4. **File upload:**
   - Replace the upload div with a hidden `<input type="file" accept=".pdf,.jpg,.jpeg,.png" />` and a visible label/div that triggers it (click + optional drag-and-drop).
   - On change: validate size (e.g. ≤ 3 MB) and type; set `file` in state; show file name and optional “Remove” button.
5. **Submit handler:**
   - If no file: `fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ businessName, contactName, phone, email, yearsInBusiness: Number(yearsInBusiness) || undefined, notes }) })`.
   - If file: build `FormData`, append all fields + file, `fetch('/api/quote', { method: 'POST', body: formData })` (no `Content-Type` header so browser sets multipart boundary).
   - Handle response and errors like contact form; on success reset form and file state.
6. **UI:** Disable submit button when `isSubmitting`; show loading text; show success/error message above or below the form.

---

### 7.3 Newsletter (`app/components/sections/NewsletterSection.tsx`)

**Current:** `onSubmit` only `e.preventDefault()`. No API call. Has `email` and `name` state.

**Changes:**

1. Add `isSubmitting`, `submitStatus`, `submitError` state.
2. In `onSubmit`: `e.preventDefault()`, `setIsSubmitting(true)`, then  
   `fetch('/api/newsletter', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, name }) })`.
3. On success: set success message, clear `email` and `name`, `setIsSubmitting(false)`.
4. On error: set error message, `setIsSubmitting(false)`.
5. Disable button while `isSubmitting`; show loading state and success/error text (and optionally use `Loader2` for consistency with contact page).

---

## 8. Email Module (`app/lib/email.ts`)

- Use SendGrid SDK: `@sendgrid/mail` with `sgMail.setApiKey(process.env.SENDGRID_API_KEY)`.
- Export helpers, e.g.:
  - `sendContactNotification(data: { name, email, telephone?, company?, message })`
  - `sendQuoteNotification(data: { businessName, contactName, phone, email, yearsInBusiness?, notes?, fileUrl? })`
  - `sendNewsletterSignup(data: { email, name? })`
- Each helper reads `CONTACT_EMAIL` (comma-separated), splits into an array, and sends via SendGrid (`@sendgrid/mail`) to all addresses so **Jacque** and **Josh** both receive every form submission.
- Throw or return; let the route handler map to 200/500 and JSON.

---

## 9. Validation (optional but recommended)

- In `app/lib/validate.ts` define zod schemas: `contactSchema`, `quoteSchema`, `newsletterSchema`.
- In each route: `schema.safeParse(body)`; if `!result.success`, return 400 with `details: result.error.flatten()` or similar.
- Keeps validation in one place and allows reuse on the client later (e.g. before submit).

---

## 10. Security and Best Practices

- **Rate limiting:** Consider Vercel rate limiting or Upstash Redis for production to limit submissions per IP.
- **CORS:** Same-origin only; no extra CORS config needed for same-domain `fetch`.
- **Secrets:** Never expose `SENDGRID_API_KEY` or `CONTACT_EMAIL` to the client; use only in API routes.
- **Input:** Sanitize/escape when building HTML for email to avoid injection.
- **File upload:** Validate MIME type and extension; reject executables; enforce max size.

---

## 11. Implementation Order (phased)

| Phase | Task | Deliverable |
|-------|------|-------------|
| **1** | Env + email lib | `.env.example`, `.env.local` (local only), `app/lib/email.ts`, SendGrid dependency |
| **2** | Contact API + frontend | `app/api/contact/route.ts`, contact form `fetch` + success/error UI in `app/contact/page.tsx` |
| **3** | Quote API (no file) | `app/api/quote/route.ts` (JSON only), then add quote form state + submit + success/error in `app/getquote/page.tsx` |
| **4** | Quote file upload | Optional file in FormData; validate in route; attach in email or store (e.g. Vercel Blob) and link in email |
| **5** | Newsletter API + frontend | `app/api/newsletter/route.ts`, NewsletterSection `fetch` + loading + success/error |
| **6** | Optional: zod, rate limit, and (if needed) uncomment `<NewsletterSection />` on homepage |

---

## 12. File Checklist

**New files**

- [ ] `app/api/contact/route.ts`
- [ ] `app/api/quote/route.ts`
- [ ] `app/api/newsletter/route.ts`
- [ ] `app/lib/email.ts`
- [ ] `app/lib/validate.ts` (optional)
- [ ] `.env.example`

**Modified files**

- [ ] `app/contact/page.tsx` – real `fetch`, success/error state and UI
- [ ] `app/getquote/page.tsx` – client component, state, file input, submit handler, success/error UI
- [ ] `app/components/sections/NewsletterSection.tsx` – submit handler, fetch, loading/success/error
- [ ] `package.json` – add `resend` (and optionally `zod`)
- [ ] `.gitignore` – ensure `.env.local` and `.env*.local` are ignored

---

## 13. Vercel Deployment

- Push repo; connect project to Vercel.
- In Project → Settings → Environment Variables, add `SENDGRID_API_KEY`, `CONTACT_EMAIL`, `FROM_EMAIL` (and any optional vars).
- Redeploy. Forms will call `/api/contact`, `/api/quote`, `/api/newsletter` on the same origin; no CORS or separate backend server needed.

---

## 14. Testing (manual for MVP)

1. **Contact:** Submit with required fields; check inbox for `CONTACT_EMAIL`; verify success/error messages and form reset.
2. **Quote:** Submit without file; then with a small PDF/image; check email and any file attachment or link.
3. **Newsletter:** Submit email (+ name); check notification to `CONTACT_EMAIL` (or list if integrated).
4. **Errors:** Send invalid payloads (missing required, bad email) and confirm 400 and error message on client.

---

This plan is based on the current Elite Card Processing codebase and is ready to implement step-by-step. If you want, the next step can be implementing Phase 1 (env + `app/lib/email.ts`) and Phase 2 (contact API + frontend) in code.
