import React from 'react';
import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail, Sparkles, Heart } from 'lucide-react';
import { profile } from '../data/profile';

const footerNav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Selected Work', href: '#work' },
  { label: 'Toolkit & Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
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
    <footer className="relative border-t border-white/[0.08] bg-[#050508] pt-16 pb-12 px-4 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">

          {/* Brand & Monogram (col-span-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-indigo-800 p-[1px] shadow-[0_0_15px_-3px_rgba(139,92,246,0.5)]">
                <div className="w-full h-full rounded-full bg-[#08080e] flex items-center justify-center">
                  <span className="font-display font-bold text-xs tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-lavender-300 to-violet-400">
                    {profile.monogram}
                  </span>
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-base text-white tracking-tight">
                  {profile.name}
                </span>
                <span className="block text-[11px] text-zinc-400 uppercase tracking-wider font-medium">
                  {profile.headline.split('|')[0].trim()}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Bridging engineering precision, modern UI/UX design, and AI automation to craft high-impact digital experiences.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.08] flex items-center justify-center transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.08] flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={profile.socials.email}
                className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.08] flex items-center justify-center transition-colors"
                aria-label="Email S Rahul"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (col-span-4) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerNav.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs text-zinc-400 hover:text-violet-300 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability & Back to Top (col-span-3) */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between items-start md:items-end">
            <div className="text-left md:text-right">
              <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                Current Status
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available Worldwide
              </span>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>
            © {currentYear} S Rahul. All rights reserved. Crafted with React & Tailwind CSS.
          </p>

          <div className="flex items-center gap-4">
            <span>Designed with agency precision</span>
            <span>•</span>
            <span>Zero generic templates</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
