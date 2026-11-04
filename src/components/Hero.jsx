import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Smartphone,
  Monitor,
  CheckCircle2,
  TrendingUp,
  Star
} from 'lucide-react';
import { profile } from '../data/profile';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState('performance');
  const [activeViewport, setActiveViewport] = useState('desktop');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] pt-24 md:pt-28 pb-16 flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/[0.06]"
    >
      {/* Background Watermark Branding */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none text-center overflow-hidden z-0 opacity-[0.03]"
      >
        <span className="font-monument text-[26vw] leading-none text-white tracking-tighter uppercase whitespace-nowrap block">
          METIA
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

        {/* Left Column: Value Proposition & Action Stack (col-span-7) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          {/* Eyebrow Badge (1 of allowed per 3 sections) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-crimson-950/60 border border-crimson-600/40 text-crimson-400 font-tech text-[11px] tracking-wider uppercase font-semibold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 animate-pulse" />
            <span>MODERN DIGITAL SOLUTIONS // EST. 2020</span>
          </motion.div>

          {/* Monumental Headline: Exactly 2 lines */}
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-monument text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.92] text-white uppercase mb-5"
          >
            WEBSITE <span className="text-crimson-500">DEVELOPMENT</span>
            <br />
            SERVICES THAT CONVERT
          </motion.h1>

          {/* Subtext: Exactly 18 words and max 2 lines */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed max-w-xl mb-8"
          >
            Boost your online presence with modern, fast, and high-performing websites designed to turn casual visitors into paying customers.
          </motion.p>

          {/* CTAs: Primary + Secondary */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-crimson-600 hover:bg-crimson-500 text-white font-tech text-xs font-semibold tracking-wider uppercase shadow-glow-crimson hover:shadow-glow-crimson-lg transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              <span>START PROJECT</span>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </span>
            </button>

            <button
              type="button"
              onClick={() => scrollTo('services')}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-crimson-500/40 text-zinc-200 hover:text-white font-tech text-xs tracking-wider uppercase transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              <span>EXPLORE SERVICES</span>
            </button>
          </motion.div>

          {/* Key Trust Signals Bar */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-tech text-zinc-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-crimson-400" />
              <span>200+ Projects Built</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-crimson-400" />
              <span>Sub-Second Load Times</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-crimson-400" />
              <span>98% Client Satisfaction</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Dimensional Agency Hardware Terminal (col-span-5) */}
        <div className="lg:col-span-5 relative mt-4 lg:mt-0">

          {/* Floating Metric Capsule 1: Rating */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="absolute -top-6 -left-4 sm:-left-8 z-20 bg-[#0d0d14]/90 backdrop-blur-xl border border-white/[0.12] rounded-2xl p-4 shadow-2xl"
          >
            <div className="text-[10px] font-tech text-zinc-400 uppercase tracking-wider mb-1">
              CLIENT RATING
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-tech text-sm font-bold text-white ml-1">4.8 / 5</span>
            </div>
            <span className="text-[10px] font-sans text-zinc-400 block mt-0.5">
              from 200+ global clients
            </span>
          </motion.div>

          {/* Floating Metric Capsule 2: Traffic Growth */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="absolute -bottom-6 -right-4 sm:-right-6 z-20 bg-[#0d0d14]/90 backdrop-blur-xl border border-crimson-600/30 rounded-2xl p-4 shadow-glow-crimson"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-[10px] font-tech text-zinc-400 uppercase tracking-wider">
                  TRAFFIC VELOCITY
                </div>
                <div className="font-monument text-2xl text-white tracking-wide">
                  +45.6%
                </div>
              </div>
              <div className="w-8 h-8 rounded-xl bg-crimson-600/20 border border-crimson-500/40 flex items-center justify-center text-crimson-400">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="text-[10px] font-tech text-emerald-400 flex items-center gap-1 mt-1">
              <span>↑</span>
              <span>GROWING QUARTER OVER QUARTER</span>
            </div>
          </motion.div>

          {/* Center Hardware Container */}
          <div className="double-bezel-card relative">
            <div className="double-bezel-inner p-5 sm:p-6 bg-[#08080c] border border-white/[0.08]">

              {/* Console Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-crimson-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="font-tech text-xs text-zinc-400 ml-2">metiadigital.com</span>
                </div>

                {/* Viewport switcher */}
                <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg border border-white/[0.06]">
                  <button
                    type="button"
                    onClick={() => setActiveViewport('desktop')}
                    className={`p-1.5 rounded-md transition-colors ${
                      activeViewport === 'desktop' ? 'bg-crimson-600 text-white' : 'text-zinc-500 hover:text-white'
                    }`}
                    title="Desktop Preview"
                  >
                    <Monitor className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveViewport('mobile')}
                    className={`p-1.5 rounded-md transition-colors ${
                      activeViewport === 'mobile' ? 'bg-crimson-600 text-white' : 'text-zinc-500 hover:text-white'
                    }`}
                    title="Mobile Viewport"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Live Metric HUD Display */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-tech text-zinc-400">
                  <span className="uppercase">METRIC BENCHMARKS</span>
                  <span className="text-crimson-400">ACTIVE PRODUCTION</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-[10px] font-tech text-zinc-400 uppercase">PERFORMANCE</div>
                    <div className="font-monument text-3xl text-white mt-1">99 <span className="text-xs font-tech text-zinc-500">/ 100</span></div>
                    <div className="text-[10px] font-tech text-emerald-400 mt-1">Audit Verified</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-[10px] font-tech text-zinc-400 uppercase">SATISFACTION</div>
                    <div className="font-monument text-3xl text-crimson-400 mt-1">98%</div>
                    <div className="text-[10px] font-tech text-zinc-400 mt-1">Client Retention</div>
                  </div>
                </div>

                {/* Simulated Telemetry Streams */}
                <div className="p-4 rounded-xl bg-[#040406] border border-white/[0.06] space-y-2.5 font-tech text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Core Web Vitals</span>
                    <span className="text-emerald-400 font-semibold">ALL PASSED</span>
                  </div>
                  <div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-crimson-600 to-crimson-400 h-full w-[98%]" />
                  </div>
                  <div className="flex justify-between text-[10px] text-zinc-400 pt-1">
                    <span>LCP: 0.38s</span>
                    <span>FID: 4ms</span>
                    <span>CLS: 0.00</span>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-tech">
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-zinc-300">
                    REACT 18
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-zinc-300">
                    TAILWIND CSS
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-zinc-300">
                    SEO READY
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-zinc-300">
                    STRIPE READY
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
