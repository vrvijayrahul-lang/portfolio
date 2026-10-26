import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Sparkles,
  Compass,
  Cpu,
  ArrowUpRight,
  Check,
  Layers,
  Zap,
  Globe2
} from 'lucide-react';
import { profile } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[11px] font-medium tracking-widest uppercase mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>About Me</span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-3xl">
          Part creative. Part technical.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-lavender-300 to-white">
            All curious.
          </span>
        </h2>
      </div>

      {/* Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Main Philosophy Card (col-span-8) */}
        <div className="md:col-span-8 double-bezel-card">
          <div className="double-bezel-inner p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-4">
                <Terminal className="w-4 h-4" />
                <span>The Story & Perspective</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-4 leading-snug">
                Where clean engineering meets visual intuition and growth strategy.
              </h3>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  I'm S Rahul, a multidisciplinary developer and digital creator based in India. My journey began with a natural curiosity for how digital things function behind the screen—and why some products leave a lasting impression while others fade away.
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
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-zinc-300">
                ⚡ Clean, semantic code
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-zinc-300">
                🎯 Honest communication
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-zinc-300">
                📐 Obsession with detail
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-zinc-300">
                🚀 Fast delivery cycles
              </span>
            </div>
          </div>
        </div>

        {/* The Multidisciplinary Edge Card (col-span-4) */}
        <div className="md:col-span-4 double-bezel-card">
          <div className="double-bezel-inner p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pink-400 mb-4">
                <Layers className="w-4 h-4" />
                <span>The Intersection</span>
              </div>

              <h3 className="font-display text-lg font-semibold text-white mb-3">
                Why a hybrid skill set delivers better outcomes
              </h3>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                When one person understands code constraints, user psychology, and audience acquisition, there is no loss in translation between teams.
              </p>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-violet-500/20 text-violet-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-white">Developers who design</h4>
                    <p className="text-[11px] text-zinc-400">Interfaces built with implementation realities in mind.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-pink-500/20 text-pink-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-white">Designers who market</h4>
                    <p className="text-[11px] text-zinc-400">Visuals crafted to hook attention and drive conversion.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-white">Creators who automate</h4>
                    <p className="text-[11px] text-zinc-400">AI leverage to produce more without compromising depth.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08]">
              <span className="text-[11px] text-zinc-400">
                Working with modern standards and zero artificial fluff.
              </span>
            </div>
          </div>
        </div>

        {/* Global Remote Availability Card (col-span-5) */}
        <div className="md:col-span-5 double-bezel-card">
          <div className="double-bezel-inner p-7 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <Globe2 className="w-4 h-4" />
                <span>Collaboration Terms</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">
                Worldwide Remote-Ready
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                Available for individual freelance milestones, end-to-end website deliveries, design contracts, or ongoing technical advisory.
              </p>

              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Timezone</div>
                  <div className="text-xs font-medium text-zinc-200 mt-0.5">IST (UTC+5:30) • Flexible</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Communication</div>
                  <div className="text-xs font-medium text-zinc-200 mt-0.5">Slack, Email & Meet</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-zinc-400">Standard response</span>
              <span className="text-xs font-medium text-violet-300">Within 24 hours</span>
            </div>
          </div>
        </div>

        {/* Call to Action Card (col-span-7) */}
        <div className="md:col-span-7 double-bezel-card">
          <div className="double-bezel-inner p-7 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0c0c1a] via-[#100e24] to-[#0a0a14]">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300 text-[10px] font-semibold tracking-wider uppercase mb-3">
                <Zap className="w-3 h-3" />
                <span>Ready to start</span>
              </div>

              <h3 className="font-display text-2xl font-semibold text-white mb-2">
                Have a project or vision you'd like to bring alive?
              </h3>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-xl mb-6">
                Whether you need a bespoke portfolio, a custom WordPress site, high-converting social assets, or an AI workflow audit, I'm always eager to discuss ideas.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white text-dark-950 font-medium text-xs sm:text-sm hover:bg-zinc-200 transition-colors shadow-lg active:scale-[0.98]"
              >
                <span>Get in Touch Directly</span>
                <span className="w-5 h-5 rounded-full bg-dark-950/10 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-dark-950" />
                </span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
              >
                <span>Browse Services</span>
                <span className="text-violet-400">→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
