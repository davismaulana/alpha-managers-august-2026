export const CTA_URL = 'https://zenichat.id/api/wa/52c7314c-e9b8-406e-aa5a-690d5e83afbb/august-event';
export const CAMPAIGN_ID = 'cfr-august2026';
export const CONTENT_NAME = 'Alpha Managers - 13 Agustus 2026';
export const CONTENT_CATEGORY = 'Alpha Leaders Manager Event';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const openRegistrationCTA = () => {
  window.fbq?.('trackCustom', 'HeroCTAClick', {
    campaign_id: CAMPAIGN_ID,
    content_name: CONTENT_NAME,
    content_category: CONTENT_CATEGORY,
  });

  window.open(CTA_URL, '_blank', 'noopener,noreferrer');
};
