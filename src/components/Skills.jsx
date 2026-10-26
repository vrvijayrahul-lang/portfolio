import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Globe,
  Sparkles,
  TrendingUp,
  Cpu,
  Terminal
} from 'lucide-react';
import { skillCategories } from '../data/skills';

const categoryIconMap = {
  Code: Code,
  Globe: Globe,
  Sparkles: Sparkles,
  TrendingUp: TrendingUp,
  Cpu: Cpu,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36 px-4 max-w-6xl mx-auto border-b border-white/[0.06]">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 md:mb-20">
        <div className="comic-stamp mb-4">
          INDEX 04 // TOOLKIT & DISCIPLINES
        </div>

        <h2 className="font-monument text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-none max-w-3xl mb-4">
          CAPABILITIES ROOTED IN{' '}
          <span className="text-crimson-500 drop-shadow-[0_0_25px_rgba(220,38,38,0.5)]">
            PRACTICAL EXECUTION.
          </span>
        </h2>

        <p className="font-tech text-xs sm:text-sm text-zinc-400 max-w-xl uppercase tracking-wider">
          HONEST OVERVIEW OF CURRENT WORKING PROFICIENCIES // ZERO FAKE METRICS
        </p>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => {
          const IconComp = categoryIconMap[category.icon] || Code;

          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
              className="double-bezel-card flex flex-col h-full"
            >
              <div className="double-bezel-inner p-6 sm:p-7 flex flex-col justify-between h-full bg-[#08080c] border border-white/[0.04] hover:border-crimson-600/30 transition-all duration-300">

                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-crimson-600/15 border border-crimson-500/30 flex items-center justify-center text-crimson-400">
                        <IconComp className="w-4 h-4" strokeWidth={1.75} />
                      </div>
                      <div>
                        <h3 className="font-monument text-xl text-white tracking-wide">
                          {category.name}
                        </h3>
                        <p className="font-tech text-[10px] text-zinc-400 uppercase">
                          {category.tagline}
                        </p>
                      </div>
                    </div>

                    <span className="font-tech text-xs text-zinc-500">
                      [0{index + 1}]
                    </span>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5 mt-5 font-tech">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-crimson-500/30 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-zinc-200">
                            {skill.name}
                          </span>
                          <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded font-medium ${
                            skill.level === 'Expertise'
                              ? 'bg-crimson-600/20 text-crimson-300 border border-crimson-500/30'
                              : 'bg-white/[0.05] text-zinc-400 border border-white/[0.08]'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-400 mt-1 leading-snug font-sans">
                          {skill.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer note */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between font-tech text-[10px] text-zinc-400">
                  <span>DEPLOYMENT READINESS</span>
                  <span className="flex items-center gap-1 text-crimson-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 animate-pulse" />
                    VERIFIED IN PRODUCTION
                  </span>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
