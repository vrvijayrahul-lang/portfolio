import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Layout,
  Code2,
  ShoppingBag,
  Search,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { services } from '../data/services';

const iconMap = {
  Layout: Layout,
  Code2: Code2,
  ShoppingBag: ShoppingBag,
  Search: Search,
  TrendingUp: TrendingUp,
  ShieldCheck: ShieldCheck,
};

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.06]">
      {/* Section Header: Clean vertical stack without eyebrow clutter */}
      <div className="flex flex-col items-start mb-16 max-w-3xl">
        <h2 className="font-monument text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[0.95] mb-4">
          DIGITAL SERVICES <span className="text-crimson-500">BUILT TO SCALE</span>
        </h2>
        <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed">
          Everything your business needs to establish an authoritative web presence, drive qualified organic traffic, and convert visitors into long-term clients.
        </p>
      </div>

      {/* Services Grid: 6 Double-Bezel Hardware Cards with Architectural Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const IconComponent = iconMap[service.icon] || Layout;

          return (
            <motion.div
              key={service.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: [0.32, 0.72, 0, 1] }}
              className="double-bezel-card group flex flex-col h-full"
            >
              <div className="double-bezel-inner p-7 sm:p-8 flex flex-col justify-between h-full bg-[#08080c] hover:bg-[#0c0a10] border border-white/[0.06] group-hover:border-crimson-600/40 transition-all duration-300">

                <div>
                  {/* Card Header: Service Icon & Badge */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                    <div className="w-12 h-12 rounded-2xl bg-crimson-950/60 border border-crimson-600/30 flex items-center justify-center text-crimson-400 group-hover:scale-110 group-hover:bg-crimson-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-tech text-zinc-400 uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-monument text-2xl sm:text-3xl tracking-wide text-white mb-2 group-hover:text-crimson-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-tech text-crimson-400/90 mb-4 uppercase tracking-wider">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-8">
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-crimson-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Stack Pills & Action Trigger */}
                <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[75%]">
                    {service.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-tech px-2 py-0.5 rounded bg-white/[0.02] border border-white/[0.06] text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="w-8 h-8 rounded-full bg-white/[0.04] group-hover:bg-crimson-600 border border-white/[0.08] group-hover:border-crimson-500 text-zinc-400 group-hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
