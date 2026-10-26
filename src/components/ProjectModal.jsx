import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  Calendar,
  Layers,
  Code,
  ArrowUpRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050507]/80 backdrop-blur-xl z-0"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          className="relative z-10 w-full max-w-3xl double-bezel-card p-1.5 sm:p-2 my-8 max-h-[90vh] flex flex-col"
        >
          <div className="double-bezel-inner p-6 sm:p-8 overflow-y-auto bg-[#0a0a14] max-h-[calc(90vh-1rem)]">

            {/* Header / Top Bar */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase ${
                    project.isCompleted
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-violet-500/10 text-violet-300 border border-violet-500/20'
                  }`}>
                    {project.isCompleted ? (
                      <>
                        <ShieldCheck className="w-3 h-3" />
                        Completed Client Work
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3 h-3" />
                        Concept & Prototype
                      </>
                    )}
                  </span>

                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.08]">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.1] text-zinc-400 hover:text-white hover:bg-white/[0.1] flex items-center justify-center shrink-0 transition-colors"
                aria-label="Close project modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-6 space-y-6">

              {/* Abstract Visual Preview Banner */}
              <div className={`w-full h-48 sm:h-64 rounded-2xl bg-gradient-to-br ${project.accentGradient} border border-white/[0.1] p-6 flex flex-col justify-between relative overflow-hidden shadow-inner`}>
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs text-white">
                    <Layers className="w-3.5 h-3.5 text-violet-300" />
                    <span>Project Architecture Preview</span>
                  </div>

                  <div className="text-[10px] text-zinc-300 font-mono bg-black/40 px-2 py-0.5 rounded border border-white/10">
                    ID: {project.id}
                  </div>
                </div>

                <div className="z-10 max-w-md">
                  <div className="text-xs uppercase tracking-widest text-violet-200/80 font-medium mb-1">
                    Core Focus
                  </div>
                  <div className="text-white text-lg sm:text-xl font-display font-semibold">
                    {project.services.join(' • ')}
                  </div>
                </div>

                {/* Decorative background grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
              </div>

              {/* Honest Scope & Status Disclaimer */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <div className="text-xs text-zinc-300 leading-relaxed">
                  <span className="font-semibold text-white">Scope & Transparency: </span>
                  {project.isCompleted
                    ? "This project is a completed deliverable. Live previews and repository links are provided for inspection."
                    : "This project represents an original concept and interactive prototype designed to demonstrate design systems, technical capabilities, and workflow execution without fabricating client claims."}
                </div>
              </div>

              {/* Deep Dive Description */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-2">
                  Project Overview
                </h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Key Highlights / Features */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-3">
                  Key Technical & Design Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                    <div className="text-[10px] text-zinc-400 uppercase tracking-wider">{metric.label}</div>
                    <div className="text-xs sm:text-sm font-semibold text-white mt-1">{metric.value}</div>
                  </div>
                ))}
              </div>

              {/* Technologies & Services */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-2">
                  Technologies & Toolkit
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium text-xs shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)] transition-all"
                  >
                    <span>Open Live Preview</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-zinc-200 text-xs font-medium transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="text-xs text-zinc-400 hover:text-white transition-colors"
              >
                Close Window
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
