import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Globe,
  Sparkles,
  TrendingUp,
  Cpu,
  BadgeCheck,
  Terminal,
  CpuIcon
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
    <section id="skills" className="relative py-28 md:py-36 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[11px] font-medium tracking-widest uppercase mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>Toolkit & Disciplines</span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-2xl mb-4">
          Capabilities rooted in{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-200 via-violet-300 to-purple-400">
            practical execution.
          </span>
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          An honest overview of my daily technical toolchain. No fabricated percentage bars—just reliable, battle-tested proficiencies.
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
              <div className="double-bezel-inner p-6 sm:p-7 flex flex-col justify-between h-full bg-[#0a0a14]">

                {/* Header */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-violet-600/15 border border-violet-500/30 flex items-center justify-center text-violet-300">
                      <IconComp className="w-4 h-4" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base sm:text-lg text-white">
                        {category.name}
                      </h3>
                      <p className="text-[11px] text-zinc-400">
                        {category.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3 mt-6">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-violet-500/30 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-zinc-200">
                            {skill.name}
                          </span>
                          <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded font-medium ${
                            skill.level === 'Expertise'
                              ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                              : 'bg-white/[0.05] text-zinc-400 border border-white/[0.08]'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                          {skill.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer note */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400">
                  <span>Stack status</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Active in production
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
