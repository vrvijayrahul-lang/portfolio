import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../data/profile';
import { Trophy, Clock, Users, Star } from 'lucide-react';

const statsData = [
  {
    value: "200+",
    label: "PROJECTS COMPLETED",
    description: "Production websites and web applications shipped globally.",
    icon: Trophy,
  },
  {
    value: "98%",
    label: "CLIENT SATISFACTION",
    description: "Independent feedback rate from founders and engineering leads.",
    icon: Users,
  },
  {
    value: "4.8/5",
    label: "AVERAGE RATING",
    description: "Verified customer score across 200+ client engagements.",
    icon: Star,
  },
  {
    value: "24/7",
    label: "PRIORITY SUPPORT",
    description: "Proactive uptime monitoring and continuous code maintenance.",
    icon: Clock,
  },
];

export default function Stats() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.06] bg-[#07070a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-crimson-600/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-tech text-zinc-400 uppercase tracking-widest">
                      {item.label}
                    </span>
                    <Icon className="w-4 h-4 text-crimson-500" />
                  </div>
                  <div className="font-monument text-5xl sm:text-6xl text-white tracking-tight mb-2">
                    {item.value}
                  </div>
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
