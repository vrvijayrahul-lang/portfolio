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
      <div className="double-bezel-inner p-5 sm:p-6 flex flex-col justify-between h-full bg-[#0a0a14] group-hover:bg-[#0c0c18] transition-colors duration-500">

        {/* Card Top: Visual Preview Frame */}
        <div className="flex flex-col">
          <div
            onClick={() => onSelect(project)}
            className={`w-full h-48 sm:h-52 rounded-2xl bg-gradient-to-br ${project.accentGradient} border border-white/[0.08] p-4 flex flex-col justify-between relative overflow-hidden cursor-pointer group-hover:border-violet-500/40 transition-all duration-500 shadow-inner`}
          >
            {/* Top Bar inside preview */}
            <div className="flex items-center justify-between z-10">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase backdrop-blur-md ${
                project.isCompleted
                  ? 'bg-emerald-950/70 text-emerald-300 border border-emerald-500/30'
                  : 'bg-violet-950/70 text-violet-300 border border-violet-500/30'
              }`}>
                {project.isCompleted ? (
                  <>
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    Completed Work
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3 h-3 text-violet-400" />
                    Concept
                  </>
                )}
              </span>

              <span className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full bg-black/40 text-zinc-300 border border-white/10 backdrop-blur-sm">
                {project.category}
              </span>
            </div>

            {/* Center Graphic & Hover Overlay */}
            <div className="z-10 flex flex-col items-center justify-center my-auto text-center">
              <span className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight drop-shadow-md group-hover:scale-105 transition-transform duration-300 ease-fluid">
                {project.title}
              </span>
              <span className="text-xs text-zinc-300/80 mt-1 max-w-[240px] truncate">
                {project.tagline}
              </span>
            </div>

            {/* Interactive Inspect Hover Banner */}
            <div className="z-10 flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-zinc-300">
              <span className="flex items-center gap-1 text-violet-200">
                <Eye className="w-3 h-3" />
                <span>Click for details</span>
              </span>
              <span className="text-[10px] text-zinc-400 font-mono">
                {project.technologies[0]}
              </span>
            </div>

            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] opacity-10 pointer-events-none" />
          </div>

          {/* Description */}
          <div className="mt-5">
            <h3
              onClick={() => onSelect(project)}
              className="font-display text-lg font-bold text-white group-hover:text-violet-300 transition-colors cursor-pointer flex items-center justify-between"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-violet-300 transition-colors" />
            </h3>

            <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>
        </div>

        {/* Card Bottom: Technologies & Links */}
        <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-col gap-3">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[10px] font-medium text-zinc-400"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 rounded-md bg-white/[0.02] text-[10px] text-zinc-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="text-xs font-medium text-violet-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Deep Dive</span>
              <span>→</span>
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.08] flex items-center justify-center transition-colors"
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
                  className="w-7 h-7 rounded-lg bg-violet-600/20 border border-violet-500/30 text-violet-300 hover:text-white hover:bg-violet-600 flex items-center justify-center transition-colors"
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
