export const FORM_SECTION_ID = 'owner-profile';

export const DEFAULT_WHATSAPP_REDIRECT_URL =
  'https://wa.me/6281190001111?text=Halo%20Coach%20Ferly%2C%20saya%20tertarik%20mengikuti%20Alpha%20Managers%20Agustus%202026%20dan%20ingin%20berkonsultasi%20melalui%20Owner%20Profile';

export const WHATSAPP_REDIRECT_URL =
  import.meta.env.VITE_CFR_WA_REDIRECT_URL || DEFAULT_WHATSAPP_REDIRECT_URL;

export const scrollToLeadForm = () => {
  document.getElementById(FORM_SECTION_ID)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

export const openCheckoutRedirect = () => {
  window.location.href = WHATSAPP_REDIRECT_URL;
};
