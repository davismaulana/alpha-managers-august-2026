# Junior TAM October 2026 — Conversation QA and Release Gate

## Scope

Junior handles the October 2026 Alpha Managers 3.0 event only. The LP-to-WhatsApp CTA is:

- LP: https://oct-2026.zenova.id/
- CTA: https://zenichat.com/api/wa/2be594bf-19e8-4195-98a3-4094fce74ea8/tam

The n8n workflow is `Junior - TAM October 2026` (`gBz8BYh5EHLSZ4zl`). It remains disabled while the final gate is open.

## Required first-contact contract

For the exact TAM opening, Junior must send three customer-visible messages, in this order, with no extra/empty message:

1. Intro/event details:

   `Halo Pak/Bu, salam kenal. Junior dari Alpha Leaders Community.`

   `Berikut saya kirimkan detail info event The Alpha Managers 3.0 by Alpha Leaders.`

   `Kamis, 1 Oktober 2026`

   `Aloft Hotel by Marriott, Kebon Jeruk, Jakarta`

   `Workshop ini akan membahas leadership, coaching, delegasi, hingga problem solving yang bisa menjadikan manager Anda menjadi Alpha Manager.`

   `Rencana mau daftar 2 atau 4 orang ya?`

2. The approved TAM poster (`public/tam-story-poster.png`).

3. Pricing/payment information:

   `Normal Price Rp 9.999.000`; special offer `1 tiket Rp 3.999.999` and `2 tiket Rp 7.499.999`; valid through `13 September 2026`; BCA KCP Summitmas, account `5385906789`, `PT Alpha Freedom Formula`.

## Functional requirements

| ID | Requirement | Release grade |
|---|---|---:|
| FR-01 | LP CTA opens the TAM WhatsApp route and preserves the TAM marker. | Pending end-to-end user-session proof |
| FR-02 | Exact first contact produces exactly three messages in the approved order. | Partial: intro and poster observed |
| FR-03 | Poster is the approved PNG and is delivered once. | Pass in controlled synthetic test |
| FR-04 | Price/bank facts are exact; no invented discount, date, or payment verification. | Blocked: price send hit WAHA timeout |
| FR-05 | 2- or 4-seat selection is acknowledged and registration handoff uses only the approved route. | Not executed |
| FR-06 | Event questions are answered only from the approved event facts; unknown facts go to a human. | Prompt implemented; scenario proof pending |
| FR-07 | Unqualified/off-topic/ABM questions are redirected without Julia/ABM qualification behavior. | Prompt implemented; scenario proof pending |
| FR-08 | Payment claims switch to human handling and never claim verification. | Prompt implemented; scenario proof pending |
| FR-09 | No chatbot/debug/internal-policy language, empty replies, or repeat-yourself loops. | No empty/duplicate loop observed; 20-case proof pending |
| FR-10 | No self-trigger loop: `fromMe` messages are dropped. | Pass in controlled execution review |
| FR-11 | Junior send nodes use the literal Junior WAHA session, not the inbound session expression. | Pass by workflow inspection |
| FR-12 | Workflow stays disabled until all release gates pass. | Pass |

## Qualified lead cases (10)

1. Exact LP CTA opening with `@TAM`.
2. Opening followed by “daftar 2 orang”.
3. Opening followed by “daftar 4 orang”.
4. Asks date, venue, and duration.
5. Asks speakers and workshop topics.
6. Asks inclusions (meals, certificate, handbook, networking).
7. Asks for the official registration/payment route.
8. Sends a payment screenshot and asks whether it is received.
9. Says they need to check with a co-founder/HR before choosing seats.
10. Asks a follow-up after receiving the poster and price.

Expected: concise Indonesian reply, only approved facts, one clear next question, human handoff for payment/unknowns.

## Unqualified or out-of-scope cases (10)

1. Asks about Julia, ABM, coaching, or organic consultation.
2. Uses `@CFO`, `@APRIL`, or another campaign marker.
3. Asks for a discount not in the approved offer.
4. Asks whether payment is verified without sending evidence.
5. Asks for a date, venue, speaker, or benefit not in the approved facts.
6. Sends only “halo” with no event context.
7. Sends an ambiguous seat count such as 3 or 5.
8. Asks for employment, recruitment, or unrelated products.
9. Requests a refund/cancellation or invoice change.
10. Sends profanity, repeated messages, or an empty payload.

Expected: polite clarification or human handoff; never hallucinate, qualify as ABM, repeat the prompt, or send an empty/debug response.

## Executed evidence and gate

### Latest smoke-test update (2026-08-19)

- The personal WhatsApp Web profile was verified as the originating test number `+62 821-4320-8119`.
- The exact LP-click -> Share on WhatsApp -> Continue to WhatsApp Web flow was executed again. The sent opening was delivered to Junior, but no inbound webhook execution arrived while WAHA presence was `offline`; the full three-message sequence remains unproven.
- The earlier pricing failure contained a malformed `chatId` with leading whitespace. The expression was corrected and published; Junior was deactivated immediately after the follow-up smoke test.

- LP CTA was inspected and confirmed to target the TAM route.
- Junior WAHA session `zenichat_2be594bf_msst9tp4` is `WORKING` and has both the production webhook and the n8n webhook with `message.any` and `session.status` plus the configured `x-api-key` header.
- Controlled synthetic inbound test reached Junior: intro and poster were delivered once; the price node failed with WAHA `failed to get device list ... usync query timed out`.
- No empty-message or self-trigger duplicate loop was observed; `If5` drops `fromMe` events.
- The available WhatsApp Web tab is authenticated as the Junior account, not the user’s originating number. Therefore the exact LP-click → user-inbound WhatsApp Web flow and the full 20-case matrix are not release evidence yet.

**Release decision: BLOCKED.** Keep the workflow disabled. Re-run the 20 cases only after the user’s WhatsApp Web session is authenticated to the originating test number and Junior presence is online/stable; require 20/20, zero duplicate/empty sends, and a successful third price message before activation.
