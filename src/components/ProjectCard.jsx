import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Layers,
  ShieldCheck,
  Sparkles,
  Eye
} from 'lucide-react';

export default function ProjectCard({ project, onSelect, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
      className="double-bezel-card group flex flex-col h-full"
    >
      <div className="double-bezel-inner p-5 sm:p-6 flex flex-col justify-between h-full bg-[#08080c] group-hover:bg-[#0c0a10] border border-white/[0.04] group-hover:border-crimson-600/40 transition-all duration-500">

        {/* Card Top: Visual Preview Frame */}
        <div className="flex flex-col">
          <div
            onClick={() => onSelect(project)}
            className="w-full h-48 sm:h-52 rounded-2xl bg-gradient-to-br from-[#12080a] via-[#1a0b0e] to-[#08080c] border border-white/[0.08] p-4 flex flex-col justify-between relative overflow-hidden cursor-pointer group-hover:border-crimson-500/50 transition-all duration-500 shadow-inner"
          >
            {/* Top Bar inside preview */}
            <div className="flex items-center justify-between z-10">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded font-tech text-[9px] uppercase tracking-wider backdrop-blur-md ${
                project.isCompleted
                  ? 'bg-crimson-950/80 text-crimson-300 border border-crimson-600/40'
                  : 'bg-black/80 text-zinc-300 border border-white/20'
              }`}>
                {project.isCompleted ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 animate-pulse" />
                    LIVE PRODUCTION
                  </>
                ) : (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                    CONCEPT PROTOTYPE
                  </>
                )}
              </span>

              <span className="font-tech text-[9px] tracking-widest uppercase px-2 py-0.5 rounded bg-black/60 text-zinc-400 border border-white/10">
                {project.category}
              </span>
            </div>

            {/* Center Graphic Title with Monumental Typography */}
            <div className="z-10 flex flex-col items-center justify-center my-auto text-center px-2">
              <span className="text-2xl sm:text-3xl font-monument tracking-wider text-white group-hover:text-crimson-400 group-hover:scale-105 transition-all duration-300">
                {project.title}
              </span>
              <span className="font-tech text-[10px] text-zinc-400 mt-1 max-w-[240px] truncate uppercase">
                {project.tagline}
              </span>
            </div>

            {/* Interactive Bottom Bar */}
            <div className="z-10 flex items-center justify-between pt-2 border-t border-white/10 font-tech text-[10px] text-zinc-400">
              <span className="flex items-center gap-1 text-crimson-400">
                <Eye className="w-3 h-3" />
                <span>INSPECT CASE</span>
              </span>
              <span className="font-mono text-zinc-500">
                // {project.id}
              </span>
            </div>

            {/* Background Spiral Accent */}
            <div className="absolute right-[-20%] bottom-[-20%] w-48 h-48 rounded-full border border-crimson-600/10 pointer-events-none opacity-40" />
          </div>

          {/* Description */}
          <div className="mt-5">
            <h3
              onClick={() => onSelect(project)}
              className="font-monument text-xl tracking-wide text-white group-hover:text-crimson-400 transition-colors cursor-pointer flex items-center justify-between"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-crimson-400 transition-colors" />
            </h3>

            <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-3 font-sans">
              {project.description}
            </p>
          </div>
        </div>

        {/* Card Bottom: Technologies & Links */}
        <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-col gap-3 font-tech">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] text-zinc-400 uppercase"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 rounded bg-white/[0.02] text-[10px] text-zinc-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="text-xs font-monument tracking-wider text-crimson-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>VIEW CASE STUDY</span>
              <span>→</span>
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-crimson-500/50 flex items-center justify-center transition-colors"
                  aria-label={`${project.title} GitHub repository`}
                  title="View GitHub repository"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded bg-crimson-600/20 border border-crimson-500/40 text-crimson-400 hover:text-white hover:bg-crimson-600 flex items-center justify-center transition-colors"
                  aria-label={`Open ${project.title} live demo`}
                  title="Open live link"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
