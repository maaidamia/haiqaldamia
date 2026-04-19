# Maisa & Haiqal — Wedding Website

A single-page wedding site built with [Next.js](https://nextjs.org) (App Router). It covers the story, venue and dress code, FAQ, and RSVP. RSVP submissions are appended to a Google Sheet via the Sheets API.

## Tech stack

- **Next.js 14** and **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for motion
- **Radix UI** (accordion) for UI components
- **Google APIs** (`googleapis`) for server-side RSVP writes to Sheets
- Fonts: **Cormorant Garamond** and **Lato** via `next/font`

## Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app entry is `app/page.tsx`; shared styles live in `app/globals.css`.

### Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Development server       |
| `npm run build`| Production build         |
| `npm run start`| Run production server    |
| `npm run lint` | ESLint (Next.js config)  |

## RSVP and Google Sheets

The API route `app/api/rsvp/route.ts` accepts `POST` JSON with `name`, `phone`, and `pax`, then appends a row to **Sheet1** columns **A–D** (timestamp, name, phone, pax). Timestamps use the `Asia/Kuala_Lumpur` locale.

Set these environment variables where the app runs (e.g. `.env.local` for local dev, or your host’s dashboard for production):

| Variable | Purpose |
| -------- | ------- |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Service account email |
| `GOOGLE_PRIVATE_KEY` | Private key (PEM). Use `\n` for newlines in a single-line env value; the code normalizes them |
| `GOOGLE_SHEET_ID` | Target spreadsheet ID |

Share the spreadsheet with the service account email (Editor) so it can append rows.

## Deployment

Deploy like any Next.js app: [Vercel](https://vercel.com) is a common choice. Add the same environment variables in the project settings so RSVP works in production.

## Project structure (overview)

- `app/` — App Router layout, global CSS, home page, and `api/rsvp` route
- `components/` — Sections (Hero, Our Story, Event Details, Dress Code, RSVP, FAQ, Footer, etc.)
