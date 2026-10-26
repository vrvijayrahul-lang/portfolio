import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';

const footerNav = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'WORK', href: '#work' },
  { label: 'TOOLKIT', href: '#skills' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Footer({ onOpenAdmin }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#050507] pt-16 pb-12 px-4 overflow-hidden">
      {/* Subtle top crimson glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-crimson-600/60 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">

          {/* Brand & Monogram (col-span-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-crimson-600 flex items-center justify-center shadow-glow-crimson">
                <span className="font-monument text-lg text-white">
                  SR
                </span>
              </div>
              <div>
                <span className="font-monument text-lg text-white tracking-wider block">
                  {profile.name}
                </span>
                <span className="block text-[9px] font-tech text-zinc-400 uppercase tracking-widest">
                  DIGITAL ARCHITECT & CREATOR
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed font-sans">
              Bridging engineering precision, modern UI/UX design, and AI automation to craft high-impact digital experiences.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-crimson-500/50 flex items-center justify-center transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-crimson-500/50 flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={profile.socials.email}
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-crimson-500/50 flex items-center justify-center transition-colors"
                aria-label="Email S Rahul"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (col-span-4) */}
          <div className="md:col-span-4 space-y-3 font-tech">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-crimson-400">
              // DIRECTORY
            </h4>
            <ul className="space-y-2">
              {footerNav.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability & Back to Top (col-span-3) */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between items-start md:items-end font-tech">
            <div className="text-left md:text-right">
              <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                SYSTEM STATUS
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-crimson-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse" />
                AVAILABLE WORLDWIDE
              </span>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 hover:text-white text-xs font-tech transition-colors cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-tech text-[10px] text-zinc-400 uppercase tracking-wider">
          <p>
            © {currentYear} S RAHUL // ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenAdmin}
              className="text-zinc-500 hover:text-crimson-400 transition-colors flex items-center gap-1 uppercase"
            >
              <span>[ADMIN CONSOLE]</span>
            </button>
            <span>•</span>
            <span className="text-crimson-400">COLOR: CRIMSON ROJO</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
