# TRD - August Zenith Landing Page

## Stack
Vite, React, TypeScript, CSS, lucide-react.

## Scope
Use the existing single-page React app. Keep changes scoped to landing-page source, styling, metadata, and local docs.

## Technical Requirements
- Preserve Vite build compatibility.
- Keep form state local and avoid collecting identity/contact fields.
- Generate WhatsApp chatbot URL only after required qualification answers are complete.
- Avoid backend changes unless the existing WhatsApp endpoint fails.
- Use semantic sections and responsive CSS.

## Visual Requirements
- Near-black background with subtle deep undertone only.
- Gold as the primary accent for CTAs, borders, labels, and selected states.
- Ivory text and warm muted body copy.
- Serif display headlines.
- Minimal card usage; prefer editorial rows and thin dividers.

## Verification
Run `npm run build`, confirm local preview loads, and review final result against CEO feedback.

## Approved October Revision - 2026-08-08

- Add `public/october-event-poster.png` and `public/industry-trust-october.png` without deleting the previous August assets.
- Update the active `App` content configuration and server lead metadata to the October event.
- Keep the existing `/api/leads` contract and change only campaign/event identifiers and the WhatsApp route slug.
- Verify build, lint, event-isolation checks, asset loading, and deployment health.
