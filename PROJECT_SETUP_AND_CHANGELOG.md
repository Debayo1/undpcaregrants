# 📖 UNDP Relief Assistance Grant - Project Setup & Architecture Log

This document preserves the key architecture decisions, setup guides, environment configurations, and fixes implemented for the **UNDP Relief Assistance Grant** web application.

---

## 🚀 1. Project Overview & Hosting Architecture

* **Framework**: Next.js 14.1.1 (App Router, TailwindCSS, Framer Motion, GSAP, React Hook Form, Yup)
* **Production Host**: Cloudflare Pages / Cloudflare Workers (`@cloudflare/next-on-pages` on Edge Runtime)
* **Domain & DNS**: Cloudflare DNS (`undpcaregrants.com`)
* **Email Service**: Brevo (Sendinblue) Transactional REST API (HTTP `fetch` Edge native)

---

## 📧 2. Email Delivery System (Dual-Tier Architecture)

To ensure **100% email delivery uptime** with zero failures from edge runtime or isolate timeouts, a dual-tier delivery system was implemented:

1. **Tier 1 (Serverless Edge Route)**:
   - Routes: `/api/submit-application` & `/api/submit-feedback`
   - Configured with `export const runtime = 'edge'` and `export const dynamic = 'force-dynamic'`.
2. **Tier 2 (Direct Client REST Fallback)**:
   - If the serverless route encounters any cold-start or router timeout, the client immediately and silently dispatches directly to Brevo's HTTP API.
   - The user is seamlessly transitioned to `/apply/success`.

### Active Delivery Inboxes:
1. `porterdaniel370@gmail.com`
2. `adebayotosin7665@gmail.com`

> **Note on Privacy**: Individualized API requests are sent per recipient so each admin inbox only sees their own email in the `To:` header.

---

## 🔑 3. Environment Variables Reference

### Local Development (`.env.local`):
```env
BREVO_API_KEY=your_brevo_api_key_here
ADMIN_EMAILS=porterdaniel370@gmail.com,adebayotosin7665@gmail.com
NEXT_PUBLIC_ADMIN_EMAILS=porterdaniel370@gmail.com,adebayotosin7665@gmail.com
MAIL_SENDER=noblepediallc@gmail.com
```

### Cloudflare Pages Dashboard Settings:
To change recipient inboxes without touching code, navigate to:
**Cloudflare Dashboard** > **Workers & Pages** > **`undpcaregrants`** > **Settings** > **Environment variables**:

| Variable | Value | Description |
| :--- | :--- | :--- |
| `BREVO_API_KEY` | `xkeysib-...` | Brevo API key |
| `NEXT_PUBLIC_ADMIN_EMAILS` | `porterdaniel370@gmail.com,adebayotosin7665@gmail.com` | Receivers of form submissions |
| `MAIL_SENDER` | `noblepediallc@gmail.com` | Sender address registered on Brevo |

---

## 💳 4. Active Disbursement Methods

The application form (`/apply`) exclusively accepts:
1. **Direct Deposit / ACH**
2. **Check**
3. **Cash Delivery**

---

## 🛠️ 5. Key Bugs Resolved

1. **Cloudflare `pnpm-workspace.yaml` Package Error**:
   - Removed local pnpm v11 monorepo artifacts so Cloudflare's `pnpm@10` builds cleanly with frozen lockfile.
2. **Edge Runtime Incompatibility**:
   - Replaced Node.js raw TCP socket dependencies (`nodemailer`) with HTTP REST delivery.
3. **Middleware Router Conflict**:
   - Removed redundant `middleware.ts` that was intercepting and crashing on API requests.
4. **Wrangler Bindings Cleanup**:
   - Removed unused `d1_databases` references in `wrangler.jsonc` to streamline worker initialization.
5. **Observability & Logging**:
   - Enabled Cloudflare Observability & real-time log streaming in `wrangler.jsonc`.

---

*Saved automatically for conversation b609ccd3-83c8-4ed3-acde-3f415e7f9468.*
