import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Sparkles,
  Compass,
  Layers,
  Check,
  Globe2,
  ArrowUpRight,
  Zap,
  Target
} from 'lucide-react';
import { profile } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-4 max-w-6xl mx-auto border-b border-white/[0.06]">

      {/* Editorial Section Header */}
      <div className="flex flex-col items-start mb-16 md:mb-20">
        <div className="flex items-center gap-2 mb-4">
          <div className="comic-stamp">
            INDEX 01 // MANIFESTO
          </div>
        </div>

        <h2 className="font-monument text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-none max-w-4xl">
          PART CREATIVE. PART TECHNICAL.{' '}
          <span className="text-crimson-500 drop-shadow-[0_0_25px_rgba(220,38,38,0.5)]">
            ALL CURIOUS.
          </span>
        </h2>
        <p className="font-tech text-xs sm:text-sm text-zinc-400 mt-3 uppercase tracking-wider">
          THE PHILOSOPHY OF INTERDISCIPLINARY DIGITAL CRAFT
        </p>
      </div>

      {/* Asymmetrical Bento Grid with Brutalist Editorial Aesthetic */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Main Philosophy Card (col-span-8) */}
        <div className="md:col-span-8 double-bezel-card">
          <div className="double-bezel-inner p-7 sm:p-9 flex flex-col justify-between border border-white/[0.04]">
            <div>
              <div className="flex items-center justify-between text-xs font-tech uppercase tracking-wider text-crimson-400 mb-4 pb-2 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>CORE NARRATIVE</span>
                </div>
                <span className="text-zinc-500">[REF: PERSPECTIVE]</span>
              </div>

              <h3 className="font-monument text-2xl sm:text-3xl tracking-wide text-white mb-4 leading-tight">
                WHERE CLEAN ENGINEERING MEETS VISUAL INTUITION AND GROWTH STRATEGY.
              </h3>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                <p>
                  I'm S Rahul, a multidisciplinary developer and digital creator based in India. My journey began with a natural curiosity for how digital things function behind the screen—and why some products leave an indelible impression while others fade away.
                </p>
                <p>
                  Rather than siloing myself strictly into backend code or pure visual mockups, I consciously developed skills across the entire digital pipeline: frontend development in React and modern JavaScript, accessible UI/UX design, custom WordPress architectures, and organic growth strategies.
                </p>
                <p>
                  Today, I also integrate emerging AI tools and structured prompt engineering into my daily workflow—not to replace human craft, but to eliminate repetitive friction, validate logic faster, and deliver higher-leverage results for every project I take on.
                </p>
              </div>
            </div>

            {/* Core Values Tag List */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg bg-crimson-950/40 border border-crimson-800/40 font-tech text-xs text-crimson-300">
                ⚡ CLEAN, SEMANTIC CODE
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] font-tech text-xs text-zinc-300">
                🎯 HONEST COLLABORATION
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] font-tech text-xs text-zinc-300">
                📐 HIGH-FIDELITY DETAIL
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] font-tech text-xs text-zinc-300">
                🚀 FAST TURNAROUND CYCLES
              </span>
            </div>
          </div>
        </div>

        {/* The Multidisciplinary Edge Card (col-span-4) */}
        <div className="md:col-span-4 double-bezel-card">
          <div className="double-bezel-inner p-7 sm:p-8 flex flex-col justify-between border border-white/[0.04]">
            <div>
              <div className="flex items-center justify-between text-xs font-tech uppercase tracking-wider text-crimson-400 mb-4 pb-2 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>THE INTERSECTION</span>
                </div>
                <span className="text-zinc-500">[01-B]</span>
              </div>

              <h3 className="font-monument text-xl sm:text-2xl text-white mb-3">
                WHY A HYBRID SKILL SET DELIVERS BETTER OUTCOMES
              </h3>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                When one person understands code constraints, user psychology, and audience acquisition, there is zero loss in translation between teams.
              </p>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-crimson-600/20 text-crimson-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-monument text-sm tracking-wide text-white">DEVELOPERS WHO DESIGN</h4>
                    <p className="text-[11px] text-zinc-400">Interfaces built with implementation realities in mind.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-crimson-600/20 text-crimson-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-monument text-sm tracking-wide text-white">DESIGNERS WHO MARKET</h4>
                    <p className="text-[11px] text-zinc-400">Visuals crafted to hook attention and drive conversion.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-crimson-600/20 text-crimson-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-monument text-sm tracking-wide text-white">CREATORS WHO AUTOMATE</h4>
                    <p className="text-[11px] text-zinc-400">AI leverage to produce more without compromising depth.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08]">
              <span className="text-[11px] font-tech text-zinc-400 uppercase">
                // ZERO GENERIC TEMPLATES // CRAFT FIRST
              </span>
            </div>
          </div>
        </div>

        {/* Global Remote Availability Card (col-span-5) */}
        <div className="md:col-span-5 double-bezel-card">
          <div className="double-bezel-inner p-7 flex flex-col justify-between border border-white/[0.04]">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.08]">
              <span className="text-xs font-tech uppercase tracking-wider text-crimson-400 flex items-center gap-2">
                <Globe2 className="w-3.5 h-3.5" />
                <span>COLLABORATION PROTOCOL</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse" />
            </div>

            <div>
              <h3 className="font-monument text-xl sm:text-2xl text-white mb-2">
                WORLDWIDE REMOTE-READY
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 font-sans">
                Available for individual freelance milestones, end-to-end website deliveries, design contracts, or ongoing technical advisory.
              </p>

              <div className="grid grid-cols-2 gap-3 text-left font-tech">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider">TIMEZONE</div>
                  <div className="text-xs font-medium text-zinc-200 mt-0.5">IST (UTC+5:30) • FLEXIBLE</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider">COMMUNICATION</div>
                  <div className="text-xs font-medium text-zinc-200 mt-0.5">SLACK, EMAIL & MEET</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between font-tech text-xs">
              <span className="text-zinc-400">RESPONSE LATENCY</span>
              <span className="text-crimson-400 font-bold">WITHIN 24 HOURS</span>
            </div>
          </div>
        </div>

        {/* Call to Action Card (col-span-7) */}
        <div className="md:col-span-7 double-bezel-card">
          <div className="double-bezel-inner p-7 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0e0a12] via-[#140b16] to-[#07070a] border border-crimson-900/40">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-crimson-600/20 text-crimson-300 text-[10px] font-tech tracking-wider uppercase mb-3 border border-crimson-500/30">
                <Zap className="w-3 h-3" />
                <span>ACTIVE PIPELINE</span>
              </div>

              <h3 className="font-monument text-2xl sm:text-3xl text-white mb-2 tracking-wide">
                HAVE AN IDEA OR VISION YOU WANT BROUGHT ONLINE?
              </h3>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-xl mb-6 font-sans">
                Whether you need a bespoke portfolio, a custom WordPress site, high-converting social assets, or an AI workflow audit, I'm always eager to discuss ideas.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-monument text-base tracking-wider transition-colors shadow-glow-crimson active:scale-[0.98]"
              >
                <span>GET IN TOUCH DIRECTLY</span>
                <span className="w-5 h-5 rounded bg-black/30 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs font-tech text-zinc-400 hover:text-white transition-colors"
              >
                <span>BROWSE SERVICES</span>
                <span className="text-crimson-500">→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
