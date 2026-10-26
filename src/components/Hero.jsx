import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Palette, Cpu, Sparkles, ChevronDown, CheckCircle2, Crosshair } from 'lucide-react';
import { profile } from '../data/profile';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100dvh] pt-32 pb-24 md:pt-40 md:pb-28 flex flex-col justify-center items-center px-4 overflow-hidden border-b border-crimson-900/30">

      {/* Editorial Micro-Metadata Header Bar (Image 1 Style) */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between text-[10px] font-tech uppercase tracking-widest text-zinc-400 pb-8 border-b border-white/[0.08] mb-8">
        <div className="flex items-center gap-2">
          <span className="text-crimson-500 font-bold">●</span>
          <span>S.RAHUL // EDITION 2026</span>
        </div>
        <div className="hidden sm:block text-zinc-300 font-medium tracking-widest">
          DIGITAL ARCHITECT & CREATOR
        </div>
        <div className="flex items-center gap-2">
          <span>COLOR:</span>
          <span className="text-crimson-400 font-bold">CRIMSON ROJO</span>
        </div>
      </div>

      {/* Massive Background Monumental Type (Image 1 "REDFLAG" Style) */}
      <div
        aria-hidden="true"
        className="absolute top-[18%] md:top-[16%] left-1/2 -translate-x-1/2 w-full select-none pointer-events-none text-center overflow-hidden z-0"
      >
        <span className="font-monument text-[22vw] md:text-[20vw] leading-none text-crimson-900/[0.22] tracking-tighter uppercase whitespace-nowrap block drop-shadow-[0_10px_40px_rgba(220,38,38,0.25)]">
          S.RAHUL
        </span>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Main Central Exhibition (Layered Image 1 "10 CIRLÉUR 20" Composition) */}
        <div className="relative flex flex-col items-center text-center my-6">

          {/* Version / Comic Stamp Tag (Image 2 Style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <div className="comic-stamp">
              VERSION 2.6 // LIVE
            </div>
          </motion.div>

          {/* Layered Master Typography: Monumental + Script Calligraphy */}
          <div className="relative inline-block my-2">

            {/* The Script / Flourish Calligraphy Layer (Flowing Behind and Intersecting) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="absolute -top-6 sm:-top-10 md:-top-14 left-1/2 -translate-x-1/2 w-full pointer-events-none select-none z-10"
            >
              <span className="font-script text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white/95 whitespace-nowrap drop-shadow-[0_2px_15px_rgba(255,255,255,0.4)]">
                Ideas Made Online
              </span>
            </motion.div>

            {/* Monumental Condensed Foreground Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="font-monument text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-tight leading-[0.88] text-white uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] relative z-0"
            >
              HEY, I'M <span className="text-crimson-500 drop-shadow-[0_0_35px_rgba(220,38,38,0.7)]">S RAHUL</span>
            </motion.h1>
          </div>

          {/* Subtitle & Philosophy Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans max-w-2xl leading-relaxed mt-6 mb-8"
          >
            I bring together web development, thoughtful design, digital marketing, and AI tools to create meaningful digital experiences.
          </motion.p>

          {/* Action CTAs (Image 1 & 2 Brutalist Buttons) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* Primary Crimson CTA */}
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); scrollTo('work'); }}
              className="group relative inline-flex items-center justify-between gap-4 px-7 py-4 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-monument text-lg tracking-wider shadow-glow-crimson active:scale-[0.98] transition-all duration-300"
            >
              <span>EXPLORE MY WORK</span>
              <span className="w-7 h-7 rounded-lg bg-black/30 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2.5} />
              </span>
            </a>

            {/* Secondary Brutalist Outline CTA */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-black/60 hover:bg-white/[0.06] border border-white/20 hover:border-crimson-500 text-white font-monument text-lg tracking-wider transition-all duration-300 active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-crimson-400 group-hover:rotate-12 transition-transform duration-300" />
              <span>LET'S COLLABORATE</span>
            </a>
          </motion.div>
        </div>

        {/* 3 Floating Brutalist Feature Capsules */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/[0.08]"
        >
          {/* Card 1: Build */}
          <div className="double-bezel-card group">
            <div className="double-bezel-inner p-4 bg-[#0a0a0f] flex items-center gap-3.5 border border-white/[0.04] group-hover:border-crimson-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-crimson-600/15 border border-crimson-500/30 flex items-center justify-center shrink-0 text-crimson-400">
                <Code className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <div className="font-monument text-base tracking-wide text-white">WEB ARCHITECTURE</div>
                <div className="text-[11px] text-zinc-400 font-tech">React • JavaScript • Vite</div>
              </div>
            </div>
          </div>

          {/* Card 2: Design */}
          <div className="double-bezel-card group">
            <div className="double-bezel-inner p-4 bg-[#0a0a0f] flex items-center gap-3.5 border border-white/[0.04] group-hover:border-crimson-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-crimson-600/15 border border-crimson-500/30 flex items-center justify-center shrink-0 text-crimson-400">
                <Palette className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <div className="font-monument text-base tracking-wide text-white">EDITORIAL DESIGN</div>
                <div className="text-[11px] text-zinc-400 font-tech">UI/UX • Canva • Branding</div>
              </div>
            </div>
          </div>

          {/* Card 3: AI & Growth */}
          <div className="double-bezel-card group">
            <div className="double-bezel-inner p-4 bg-[#0a0a0f] flex items-center gap-3.5 border border-white/[0.04] group-hover:border-crimson-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-crimson-600/15 border border-crimson-500/30 flex items-center justify-center shrink-0 text-crimson-400">
                <Cpu className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <div className="font-monument text-base tracking-wide text-white">AI AUTOMATION</div>
                <div className="text-[11px] text-zinc-400 font-tech">Prompting • Pipelines • SEO</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Editorial Bottom Micro-Bar (Image 1 Style) */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between text-[11px] font-tech text-zinc-400 pt-6 border-t border-white/[0.06] gap-3">
          <div className="text-left">
            <span className="text-crimson-400 font-bold">STATUS:</span> {profile.status}
          </div>
          <div className="text-center text-zinc-400 text-[10px] hidden md:block">
            CREDITS RESERVED // S RAHUL STUDIO
          </div>
          <button
            type="button"
            onClick={() => scrollTo('about')}
            className="flex items-center gap-1.5 text-zinc-300 hover:text-crimson-400 transition-colors cursor-pointer"
          >
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown className="w-3.5 h-3.5 text-crimson-500 animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  );
}
