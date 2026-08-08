export const EVENT_NAME = 'Alpha Managers 3.0 Exclusive Workshop - 1 Oktober 2026';
export const CTA_LABEL = 'Daftar Sekarang';
export const CTA_EVENT_NAME = 'oct_2026_cta_click';
export const FORM_SECTION_ID = 'lead-capture';
export const FORM_CARD_ID = 'oct-2026-form-card';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const openRegistrationCTA = (placement = 'onsite') => {
  window.fbq?.('trackCustom', CTA_EVENT_NAME, {
    cta_label: CTA_LABEL,
    content_name: EVENT_NAME,
    placement,
  });

  const target = document.getElementById(FORM_CARD_ID) || document.getElementById(FORM_SECTION_ID);
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
