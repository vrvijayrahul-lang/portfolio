import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Palette, Cpu, Sparkles, ChevronDown, CheckCircle2 } from 'lucide-react';
import { profile } from '../data/profile';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100dvh] pt-32 pb-20 md:pt-44 md:pb-28 flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-violet-600/[0.08] blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

        {/* Left Column: Editorial Positioning & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          {/* Eyebrow Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] mb-6 hover:border-violet-500/30 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-medium tracking-wide uppercase text-zinc-300">
              {profile.status}
            </span>
          </motion.div>

          {/* Master Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white leading-[1.08] mb-6"
          >
            Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-200 via-violet-300 to-violet-500">S Rahul.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
              I make ideas work online.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-base sm:text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mb-10"
          >
            I bring together web development, thoughtful design, digital marketing, and AI tools to create meaningful digital experiences.
          </motion.p>

          {/* Action CTAs (Button-in-Button Architecture) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); scrollTo('work'); }}
              className="group relative inline-flex items-center justify-between gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-violet-600 via-violet-500 to-purple-600 text-white font-medium text-sm shadow-[0_0_30px_-5px_rgba(139,92,246,0.6)] hover:shadow-[0_0_35px_0px_rgba(139,92,246,0.85)] active:scale-[0.98] transition-all duration-300"
            >
              <span>Explore My Work</span>
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 ease-fluid group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:bg-white/30">
                <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2} />
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-violet-500/40 text-zinc-200 hover:text-white font-medium text-sm backdrop-blur-sm transition-all duration-300 active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
              <span>Let's Collaborate</span>
            </a>
          </motion.div>

          {/* Verified Capabilities Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 pt-6 border-t border-white/[0.06] flex flex-wrap gap-y-2 gap-x-6 text-xs text-zinc-400"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
              <span>Modern React & Web Development</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
              <span>Custom WordPress & UI/UX</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
              <span>AI Workflow Automation</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D-Inspired Orbital Graphic & Floating Cards */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px]">

          {/* Orbital Concentric Hardware Rings */}
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 rounded-full border border-violet-500/20 flex items-center justify-center">
            {/* Spinning inner dashed ring */}
            <div className="absolute inset-4 rounded-full border border-dashed border-white/10 animate-spin-slow" />

            {/* Third nested ring */}
            <div className="absolute inset-12 rounded-full border border-white/10 shadow-[inset_0_0_30px_rgba(139,92,246,0.1)]" />

            {/* Glowing Center Emblem */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-[#121224] to-[#090912] p-[1.5px] border border-white/20 shadow-[0_0_50px_-10px_rgba(139,92,246,0.7)] flex items-center justify-center transform-gpu">
              <div className="w-full h-full rounded-[calc(1.5rem-1.5px)] bg-[#08080f] flex flex-col items-center justify-center p-3 text-center">
                <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-lavender-200 to-violet-400">
                  {profile.monogram}
                </span>
                <span className="text-[9px] tracking-widest uppercase font-semibold text-violet-300 mt-1">
                  Creator
                </span>
              </div>
            </div>

            {/* Floating Card 1: Build (Top-Left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-2 sm:-left-6 double-bezel-card p-1 rounded-2xl bg-white/[0.04] border border-white/15 shadow-xl max-w-[170px]"
            >
              <div className="double-bezel-inner p-2.5 flex items-center gap-2.5 bg-[#0e0e1a]">
                <div className="w-8 h-8 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center shrink-0">
                  <Code className="w-4 h-4 text-violet-300" strokeWidth={1.75} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-white">Build</div>
                  <div className="text-[10px] text-zinc-400 truncate">React & Web</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2: Design (Bottom-Right) */}
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 6, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-2 sm:-right-6 double-bezel-card p-1 rounded-2xl bg-white/[0.04] border border-white/15 shadow-xl max-w-[175px]"
            >
              <div className="double-bezel-inner p-2.5 flex items-center gap-2.5 bg-[#0e0e1a]">
                <div className="w-8 h-8 rounded-xl bg-pink-600/20 border border-pink-500/30 flex items-center justify-center shrink-0">
                  <Palette className="w-4 h-4 text-pink-300" strokeWidth={1.75} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-white">Design</div>
                  <div className="text-[10px] text-zinc-400 truncate">UI/UX & Canva</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 3: AI & Growth (Bottom-Left) */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5.5, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-6 -left-4 sm:-left-8 double-bezel-card p-1 rounded-2xl bg-white/[0.04] border border-white/15 shadow-xl max-w-[165px]"
            >
              <div className="double-bezel-inner p-2.5 flex items-center gap-2.5 bg-[#0e0e1a]">
                <div className="w-8 h-8 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4 text-cyan-300" strokeWidth={1.75} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-white">AI Tools</div>
                  <div className="text-[10px] text-zinc-400 truncate">Prompt Systems</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Prompt Indicator */}
      <motion.button
        type="button"
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-14 sm:mt-16 flex flex-col items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer group"
        aria-label="Scroll to About Section"
      >
        <span className="text-[11px] font-medium tracking-widest uppercase">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border border-white/20 p-1 flex justify-center group-hover:border-violet-400 transition-colors">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-violet-400"
          />
        </div>
      </motion.button>
    </section>
  );
}
