import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { CTA_LABEL, FORM_SECTION_ID, scrollToLeadForm } from '../../lib/constants';

const FloatingCTA: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const target = document.getElementById(FORM_SECTION_ID);
    const hero = document.querySelector<HTMLElement>('main section, section');
    let pastHero = false;
    let formVisible = false;

    const update = () => {
      const next = pastHero && !formVisible;
      setShow(next);
    };

    const handleScroll = () => {
      if (hero) {
        pastHero = window.scrollY >= hero.offsetTop + hero.offsetHeight;
      } else {
        pastHero = window.scrollY > window.innerHeight;
      }
      update();
    };

    let observer: IntersectionObserver | null = null;
    if (target) {
      observer = new IntersectionObserver(
        (entries) => {
          formVisible = entries.some((e) => e.isIntersecting);
          update();
        },
        { threshold: 0.05 }
      );
      observer.observe(target);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      className={[
        'md:hidden fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 pb-safe',
        show ? 'translate-y-0' : 'translate-y-full',
      ].join(' ')}
      aria-hidden={!show}
    >
        <div className="mx-3 mb-3 rounded-full bg-[var(--cf-gold)] shadow-2xl border border-black/10">
          <button
            type="button"
            onClick={() => scrollToLeadForm('floating-cta')}
            className="flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm font-black text-black"
            style={{ minHeight: 52 }}
          >
            {CTA_LABEL} <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
  );
};

export { FloatingCTA };
