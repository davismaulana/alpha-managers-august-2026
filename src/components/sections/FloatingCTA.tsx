import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { openRegistrationCTA } from '../../lib/constants';

const FloatingCTA: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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
          onClick={openRegistrationCTA}
          className="flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm font-black text-black"
          style={{ minHeight: 52 }}
        >
          Daftar Sekarang <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export { FloatingCTA };
