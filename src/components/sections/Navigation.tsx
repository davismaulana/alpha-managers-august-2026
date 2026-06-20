import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { ArrowRight, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { openRegistrationCTA } from '../../lib/constants';

const ALPHA_LEADERS_LOGO_SRC = '/images/alpha-leaders-logo-yellow-ec6454a.png';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  const handleDaftarSekarang = () => {
    openRegistrationCTA();
    setMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-gold-500/25 py-3'
          : 'bg-black/90 backdrop-blur-xl border-b border-gold-500/20 py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={ALPHA_LEADERS_LOGO_SRC}
            alt="Alpha Leaders"
            className={cn(
              'h-10 w-auto max-w-[6.25rem] object-contain transition-all duration-300 md:max-w-[7.75rem]',
              scrolled ? 'md:h-11' : 'md:h-12'
            )}
          />
        </div>

        <button
          type="button"
          onClick={handleDaftarSekarang}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-[var(--cf-gold)] px-5 py-2.5 text-sm font-black text-black transition hover:bg-[var(--cf-cream)] hover:text-[var(--cf-ink)] cursor-pointer"
        >
          Daftar Sekarang <ArrowRight className="w-4 h-4" />
        </button>

        <button
          className="md:hidden p-2 text-gold-400 hover:text-gold-300 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-b border-white/5"
          >
            <div className="container mx-auto px-4 py-6">
              <button
                type="button"
                onClick={handleDaftarSekarang}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--cf-gold)] px-5 py-3 text-sm font-black text-black"
              >
                Daftar Sekarang <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export { Navigation };
