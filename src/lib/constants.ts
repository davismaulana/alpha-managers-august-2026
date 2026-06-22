export const FORM_SECTION_ID = 'owner-profile';
export const EVENT_NAME = 'Alpha Managers - 13 Agustus 2026';
export const CTA_LABEL = 'Apply untuk Undangan';
export const CTA_EVENT_NAME = 'august_alpha_managers_cta_click';

export const DEFAULT_WHATSAPP_REDIRECT_URL =
  'https://wa.me/6281190001111?text=Halo%20Coach%20Ferly%2C%20saya%20tertarik%20mengikuti%20Alpha%20Managers%20Agustus%202026%20dan%20ingin%20berkonsultasi%20melalui%20Owner%20Profile';

export const WHATSAPP_REDIRECT_URL =
  import.meta.env.VITE_CFR_WA_REDIRECT_URL || DEFAULT_WHATSAPP_REDIRECT_URL;

const getCookie = (name: string) => {
  if (typeof document === 'undefined') return '';
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : '';
};

const getTrackingMeta = () => {
  if (typeof window === 'undefined') {
    return {
      page_url: '',
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_content: '',
      fbp: '',
      fbc: '',
    };
  }

  const params = new URLSearchParams(window.location.search);
  return {
    page_url: window.location.href,
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || 'alpha-managers-august-2026',
    utm_content: params.get('utm_content') || '',
    fbp: getCookie('_fbp'),
    fbc: getCookie('_fbc'),
  };
};

export const trackPrimaryCtaClick = (placement: string) => {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;

  window.fbq('trackCustom', CTA_EVENT_NAME, {
    cta_label: CTA_LABEL,
    content_name: EVENT_NAME,
    placement,
    ...getTrackingMeta(),
  });
};

export const scrollToLeadForm = (placement = 'onsite') => {
  trackPrimaryCtaClick(placement);
  document.getElementById(FORM_SECTION_ID)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

export const openCheckoutRedirect = () => {
  window.location.href = WHATSAPP_REDIRECT_URL;
};
