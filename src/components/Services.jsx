import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  TrendingUp,
  Palette,
  LayoutGrid,
  Sparkles,
  Cpu,
  ArrowUpRight,
  Check,
  Wrench
} from 'lucide-react';
import { services } from '../data/services';

const iconMap = {
  Code2: Code2,
  TrendingUp: TrendingUp,
  Palette: Palette,
  LayoutGrid: LayoutGrid,
  Sparkles: Sparkles,
  Cpu: Cpu,
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36 px-4 max-w-6xl mx-auto border-b border-white/[0.06]">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 md:mb-20">
        <div className="comic-stamp mb-4">
          INDEX 02 // DISCIPLINES
        </div>

        <h2 className="font-monument text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-none max-w-3xl mb-4">
          ENGINEERED FOR PERFORMANCE.{' '}
          <span className="text-crimson-500 drop-shadow-[0_0_25px_rgba(220,38,38,0.5)]">
            DESIGNED FOR IMPACT.
          </span>
        </h2>

        <p className="font-tech text-xs sm:text-sm text-zinc-400 max-w-xl uppercase tracking-wider">
          SIX SPECIALIZED CAPABILITIES TO BRING DIGITAL IDEAS FROM ZERO TO SCALE
        </p>
      </div>

      {/* Services Grid (6 Double-Bezel Hardware Cards with Editorial Brutalist Detailing) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const IconComponent = iconMap[service.icon] || Code2;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
              className="double-bezel-card group flex flex-col h-full"
            >
              <div className="double-bezel-inner p-7 flex flex-col justify-between h-full bg-[#08080c] hover:bg-[#0c0a10] border border-white/[0.04] group-hover:border-crimson-600/40 transition-all duration-500">

                {/* Card Top: Technical Header & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-crimson-600/15 border border-crimson-500/30 flex items-center justify-center text-crimson-400 group-hover:bg-crimson-600 group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <span className="font-tech text-xs text-zinc-400">
                        [0{index + 1}]
                      </span>
                    </div>

                    <span className="text-[10px] font-tech uppercase tracking-widest px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-crimson-400">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-monument text-2xl tracking-wide text-white mb-2 group-hover:text-crimson-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-zinc-400 font-tech uppercase tracking-wider mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>

                  {/* Deliverables Bullet Points */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.06]">
                    <div className="text-[10px] font-tech uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                      SPECIFICATION DELIVERABLES
                    </div>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-crimson-500 shrink-0 mt-0.5" strokeWidth={2} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Skills Chips & Interactive Inquiry Trigger */}
                <div className="pt-4 border-t border-white/[0.06] mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-4 font-tech">
                    {service.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-monument tracking-wider text-crimson-400 hover:text-white transition-colors group-hover:translate-x-1 duration-300 ease-fluid"
                  >
                    <span>DISCUSS SPECIFICATION</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
