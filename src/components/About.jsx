import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Code,
  Zap,
  Target,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { profile } from '../data/profile';

const values = [
  {
    title: "Engineering Precision",
    description: "Zero bloated page builders. We author clean, modular React and Tailwind codebases that load in under a second.",
    icon: Code,
  },
  {
    title: "Conversion-Focused",
    description: "Every layout, button placement, and micro-interaction is intentionally structured to maximize inquiry rates.",
    icon: Target,
  },
  {
    title: "Continuous Reliability",
    description: "Proactive security hardening, SSL compliance, automated backups, and 24/7 uptime monitoring for peace of mind.",
    icon: ShieldCheck,
  },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.06]">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 max-w-3xl">
        <h2 className="font-monument text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[0.95] mb-4">
          ENGINEERED FOR SPEED. <span className="text-crimson-500">DESIGNED TO CONVERT.</span>
        </h2>
        <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed">
          Metia Digital is an independent digital studio specializing in high-performance website development, custom web applications, and conversion optimization.
        </p>
      </div>

      {/* Asymmetric Bento Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left Manifesto Pillar (col-span-7) */}
        <div className="lg:col-span-7 double-bezel-card">
          <div className="double-bezel-inner p-8 sm:p-10 flex flex-col justify-between h-full bg-[#08080c] border border-white/[0.06]">
            <div>
              <div className="flex items-center gap-2 font-tech text-xs text-crimson-400 uppercase tracking-widest mb-6 pb-3 border-b border-white/[0.08]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OUR CORE PHILOSOPHY</span>
              </div>

              <h3 className="font-monument text-3xl sm:text-4xl text-white tracking-wide leading-tight mb-6">
                WE BELIEVE YOUR WEBSITE IS YOUR MOST VALUABLE SALES CHANNEL.
              </h3>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-sans mb-8">
                <p>
                  Most business websites fail not because of poor products, but because of slow load times, confusing mobile layouts, and weak calls to action. Every fraction of a second in delay costs your brand revenue and trust.
                </p>
                <p>
                  At Metia Digital, we combine software engineering standards with user conversion psychology. We eliminate the fluff, prioritize Core Web Vitals, and build digital storefronts that load instantaneously across all devices.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-crimson-600 flex items-center justify-center font-monument text-xl text-white shadow-glow-crimson">
                  M
                </div>
                <div>
                  <span className="font-monument text-base text-white tracking-wide block">METIA DIGITAL</span>
                  <span className="text-[10px] font-tech text-zinc-400 uppercase block">DIRECTOR OF ENGINEERING</span>
                </div>
              </div>

              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-xs font-tech text-white uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>BOOK DISCOVERY CALL</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-crimson-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Pillars (col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-7 rounded-2xl bg-[#08080c] border border-white/[0.06] hover:border-crimson-600/40 transition-colors flex-1 flex flex-col justify-center"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-crimson-950/60 border border-crimson-600/30 flex items-center justify-center text-crimson-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-monument text-2xl text-white tracking-wide">
                    {val.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
