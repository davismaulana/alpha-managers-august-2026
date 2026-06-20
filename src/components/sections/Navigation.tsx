import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { ArrowRight, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { CTA_LABEL, scrollToLeadForm } from '../../lib/constants';

const navItems = [
  { label: 'Masalah', href: '#problem-section' },
  { label: 'Untuk Siapa', href: '#audience-fit' },
  { label: 'Materi', href: '#learning-outcomes' },
  { label: 'Mentor', href: '#speakers' },
  { label: 'Detail', href: '#event-details' },
  { label: 'FAQ', href: '#faq' },
];

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

  const handlePrimaryCta = (placement: string) => {
    scrollToLeadForm(placement);
    setMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center font-bold text-black text-xs">
            AL
          </div>
          <span className="text-base md:text-lg font-bold tracking-[0.16em] bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            ALPHA LEADERS
          </span>
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-300 transition hover:text-gold-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {scrolled ? (
          <button
            type="button"
            onClick={() => handlePrimaryCta('nav')}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[var(--cf-gold)] px-5 py-2.5 text-sm font-black text-black transition hover:bg-[var(--cf-cream)] hover:text-[var(--cf-ink)] cursor-pointer"
          >
            {CTA_LABEL} <ArrowRight className="w-4 h-4" />
          </button>
        ) : null}

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
            <div className="container mx-auto space-y-4 px-4 py-6">
              <nav className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl border border-white/10 px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-zinc-200 transition hover:border-gold-500/30 hover:text-gold-300"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <button
                type="button"
                onClick={() => handlePrimaryCta('mobile-menu')}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--cf-gold)] px-5 py-3 text-sm font-black text-black"
              >
                {CTA_LABEL} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export { Navigation };
