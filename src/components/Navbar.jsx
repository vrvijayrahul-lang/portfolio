import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

const navItems = [
  { label: 'ABOUT', href: '#about', id: 'about' },
  { label: 'SERVICES', href: '#services', id: 'services' },
  { label: 'WORK', href: '#work', id: 'work' },
  { label: 'TOOLKIT', href: '#skills', id: 'skills' },
  { label: 'CONTACT', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll state for navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'services', 'work', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-3 md:top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-500 ease-fluid rounded-2xl ${
          isScrolled
            ? 'bg-[#08080c]/90 backdrop-blur-xl border border-crimson-600/30 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.9),0_0_25px_rgba(220,38,38,0.15)] py-2.5 px-4 md:px-6'
            : 'bg-[#0a0a10]/70 backdrop-blur-md border border-white/[0.1] shadow-[0_8px_30px_-10px_rgba(0,0,0,0.7)] py-3 px-5 md:px-7'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Monogram (Brutalist Tag Emblem) */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="group flex items-center gap-2.5 focus:outline-none rounded-lg"
            aria-label="S Rahul Home"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-crimson-600 p-[1px] shadow-glow-crimson group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-[7px] bg-[#07070a] flex items-center justify-center">
                <span className="font-monument text-lg text-white group-hover:text-crimson-400 transition-colors">
                  SR
                </span>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-monument text-base tracking-wider text-white group-hover:text-crimson-400 transition-colors">
                {profile.name}
              </span>
              <span className="text-[9px] font-tech text-zinc-400 tracking-widest uppercase hidden sm:inline-block">
                ARCHITECT // 2026
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.02] border border-white/[0.08] rounded-xl p-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-tech font-medium tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 rounded-lg bg-crimson-600/30 border border-crimson-500/50 shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Actions & CTA */}
          <div className="flex items-center gap-3">
            {/* Let's Talk CTA button (Brutalist Button-in-Button) */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group relative inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-monument text-sm tracking-wider shadow-glow-crimson active:scale-[0.98] transition-all duration-300"
            >
              <span>LET'S TALK</span>
              <span className="w-6 h-6 rounded-lg bg-black/30 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.1] text-zinc-300 hover:text-white hover:border-crimson-500/50 transition-all focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-white" strokeWidth={2} />
              ) : (
                <Menu className="w-4 h-4 text-white" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Morphing Menu Modal Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-x-4 top-20 z-40 md:hidden pointer-events-auto"
          >
            <div className="double-bezel-card bg-[#09090f]/95 backdrop-blur-2xl p-2 rounded-2xl border border-crimson-600/30 shadow-2xl">
              <div className="double-bezel-inner p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-[10px] font-tech uppercase tracking-widest text-zinc-400">
                    S.RAHUL // DIRECTORY
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-tech text-crimson-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 animate-pulse" />
                    STATUS: ACTIVE
                  </div>
                </div>

                <div className="flex flex-col gap-1 py-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl text-zinc-200 hover:text-white hover:bg-crimson-600/20 text-sm font-monument tracking-wider transition-colors"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-crimson-400" />
                    </motion.a>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-crimson-600 text-white font-monument tracking-wider text-base shadow-glow-crimson"
                  >
                    <span>START A PROJECT</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <p className="text-[10px] font-tech text-center text-zinc-400 pt-1">
                    {profile.email}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
