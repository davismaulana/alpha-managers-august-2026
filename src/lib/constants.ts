export const FORM_SECTION_ID = 'owner-profile';

export const scrollToLeadForm = () => {
  document.getElementById(FORM_SECTION_ID)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
