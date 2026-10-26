import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import { profile } from '../data/profile';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll state for navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track current section for active indicator
      const sections = ['about', 'services', 'work', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 120;

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
    <header className="fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-500 ease-fluid rounded-full ${
          isScrolled
            ? 'bg-[#09090f]/85 backdrop-blur-xl border border-white/[0.12] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)] py-2.5 px-4 md:px-6'
            : 'bg-[#0a0a14]/60 backdrop-blur-md border border-white/[0.08] shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)] py-3 px-5 md:px-7'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded-full"
            aria-label="S Rahul Home"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-indigo-800 p-[1px] shadow-[0_0_15px_-3px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_20px_0px_rgba(139,92,246,0.7)] transition-shadow duration-300">
              <div className="w-full h-full rounded-full bg-[#08080e] flex items-center justify-center">
                <span className="font-display font-bold text-xs tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-lavender-300 to-violet-400">
                  {profile.monogram}
                </span>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-semibold text-sm tracking-tight text-white group-hover:text-violet-300 transition-colors">
                {profile.name}
              </span>
              <span className="text-[10px] text-zinc-400 tracking-wider uppercase font-medium hidden sm:inline-block">
                Digital Creator
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1 shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.05]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/30 to-indigo-600/30 border border-violet-500/30 shadow-[0_0_15px_-3px_rgba(139,92,246,0.3)]"
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
            {/* Let's Talk CTA button (Button-in-Button architecture) */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group relative inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-medium shadow-[0_0_20px_-5px_rgba(139,92,246,0.6)] hover:shadow-[0_0_25px_0px_rgba(139,92,246,0.8)] active:scale-[0.98] transition-all duration-300"
            >
              <span className="tracking-wide">Let's Talk</span>
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-white/30">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" strokeWidth={2} />
              </span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.1] text-zinc-300 hover:text-white hover:bg-white/[0.1] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-white" strokeWidth={1.75} />
              ) : (
                <Menu className="w-4 h-4 text-white" strokeWidth={1.75} />
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
            <div className="double-bezel-card bg-[#0b0b14]/95 backdrop-blur-2xl p-2 rounded-3xl border border-white/[0.15] shadow-2xl">
              <div className="double-bezel-inner p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
                    Navigation
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-violet-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available for hire
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
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl text-zinc-200 hover:text-white hover:bg-white/[0.06] text-sm font-medium transition-colors"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                    </motion.a>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium text-sm shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)]"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <p className="text-[11px] text-center text-zinc-400 pt-1">
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
