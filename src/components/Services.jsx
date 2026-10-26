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
    <section id="services" className="relative py-28 md:py-36 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[11px] font-medium tracking-widest uppercase mb-4">
          <Wrench className="w-3.5 h-3.5" />
          <span>Services & Expertise</span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-2xl mb-4">
          Engineered for performance.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-200 via-violet-400 to-purple-500">
            Designed for impact.
          </span>
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          Six focused capabilities tailored to turn concepts into fast, cohesive, and revenue-driving digital touchpoints.
        </p>
      </div>

      {/* Services Grid (6 Double-Bezel Hardware Cards) */}
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
              <div className="double-bezel-inner p-7 flex flex-col justify-between h-full bg-[#090912] hover:bg-[#0d0c18] transition-colors duration-500">

                {/* Card Top: Icon & Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-violet-300 group-hover:text-white group-hover:bg-violet-600/30 group-hover:border-violet-500/50 group-hover:scale-105 transition-all duration-300 ease-fluid shadow-inner">
                      <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                    </div>

                    <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-violet-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-violet-300/80 font-medium mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Deliverables Bullet Points */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.06]">
                    <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                      Key Deliverables
                    </div>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" strokeWidth={2} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Skills Chips & Interactive Inquiry Trigger */}
                <div className="pt-4 border-t border-white/[0.06] mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[10px] font-medium text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-300 hover:text-white transition-colors group-hover:translate-x-1 transition-transform duration-300 ease-fluid"
                  >
                    <span>Discuss this service</span>
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
