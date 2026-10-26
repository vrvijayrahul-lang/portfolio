import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Sparkles, Filter } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects by category
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.categories.includes(activeCategory);
  });

  return (
    <section id="work" className="relative py-28 md:py-36 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[11px] font-medium tracking-widest uppercase mb-4">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Selected Portfolio</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full gap-6">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-3">
              Crafted with purpose.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-lavender-300 to-white">
                Built to perform.
              </span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
              A curated selection of live client projects and creative concepts across engineering, visual branding, and automation.
            </p>
          </div>

          {/* Completed vs Concept Legend */}
          <div className="flex items-center gap-3 text-xs bg-white/[0.03] border border-white/[0.08] px-3.5 py-2 rounded-xl">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Live Client Work</span>
            </div>
            <span className="text-zinc-600">•</span>
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              <span>Concept & Prototype</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
        {projectCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? 'text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-[0_0_20px_-5px_rgba(139,92,246,0.6)]'
                  : 'text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06]'
              }`}
            >
              <span>{cat}</span>
              {isActive && (
                <span className="ml-1.5 text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full font-mono">
                  {cat === 'All'
                    ? projects.length
                    : projects.filter((p) => p.categories.includes(cat)).length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State Fallback (Defensive) */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16 double-bezel-card max-w-md mx-auto">
          <div className="double-bezel-inner p-8">
            <p className="text-zinc-400 text-sm">No projects currently matching this filter.</p>
            <button
              type="button"
              onClick={() => setActiveCategory('All')}
              className="mt-4 px-4 py-2 rounded-full bg-violet-600 text-white text-xs font-medium"
            >
              Reset to All Projects
            </button>
          </div>
        </div>
      )}

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
