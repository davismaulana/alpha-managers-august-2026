export const CTA_URL =
  'https://zenichat.id/api/wa/52c7314c-e9b8-406e-aa5a-690d5e83afbb/june-event';
export const CAMPAIGN_ID = 'cfr-june2026';
export const CONTENT_NAME = 'Sales Team Rp10M to Rp100M - 25 Juni 2026';
export const CONTENT_CATEGORY = 'Alpha Leaders Sales System Event';

export const openRegistrationCTA = () => {
  if (typeof window !== 'undefined') {
    window.fbq?.('trackCustom', 'HeroCTAClick', {
      content_name: CONTENT_NAME,
      content_category: CONTENT_CATEGORY,
      campaign: CAMPAIGN_ID,
      cta_alias: 'CTA_URL',
      cta_url: CTA_URL,
    });

    window.open(CTA_URL, '_blank', 'noopener,noreferrer');
  }
};
