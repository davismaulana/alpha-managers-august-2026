export const CTA_URL = 'https://zenichat.id/api/wa/52c7314c-e9b8-406e-aa5a-690d5e83afbb/oct-2026';
export const TICKET_URL = 'https://alphaleaders.myr.id/pl/the-alpha-managers/';
export const CAMPAIGN_ID = 'cfr-oct-2026';
export const CONTENT_NAME = 'Alpha Managers 3.0 Exclusive Workshop - 1 Oktober 2026';
export const CONTENT_CATEGORY = 'Alpha Leaders Manager Event';
export const CTA_EVENT_NAME = 'oct_2026_cta_click';
export const CTA_LABEL = 'Daftar Sekarang';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const openRegistrationCTA = () => {
  window.fbq?.('trackCustom', CTA_EVENT_NAME, {
    cta_label: CTA_LABEL,
    campaign_id: CAMPAIGN_ID,
    content_name: CONTENT_NAME,
    content_category: CONTENT_CATEGORY,
    placement: 'whatsapp-cta',
  });

  const targetUrl = new URL(CTA_URL);
  window.open(targetUrl.toString(), '_blank', 'noopener,noreferrer');
};

export const trackTicketCTA = () => {
  window.fbq?.('trackCustom', 'PaymentCTAClick', {
    campaign_id: CAMPAIGN_ID,
    content_name: CONTENT_NAME,
    content_category: CONTENT_CATEGORY,
  });
};

export const trackWhatsAppCTA = () => {
  window.fbq?.('trackCustom', 'WhatsAppCTAClick', {
    campaign_id: CAMPAIGN_ID,
    content_name: CONTENT_NAME,
    content_category: CONTENT_CATEGORY,
  });
};
