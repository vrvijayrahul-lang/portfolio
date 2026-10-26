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
    <section id="work" className="relative py-28 md:py-36 px-4 max-w-6xl mx-auto border-b border-white/[0.06]">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12 md:mb-16">
        <div className="comic-stamp mb-4">
          INDEX 03 // ARCHIVE & EXHIBITS
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full gap-6">
          <div>
            <h2 className="font-monument text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-none mb-3">
              CRAFTED WITH PURPOSE.{' '}
              <span className="text-crimson-500 drop-shadow-[0_0_25px_rgba(220,38,38,0.5)]">
                BUILT TO PERFORM.
              </span>
            </h2>
            <p className="font-tech text-xs sm:text-sm text-zinc-400 max-w-xl uppercase tracking-wider">
              A CURATED SELECTION OF PRODUCTION CLIENT WORK & TECHNICAL CONCEPTS
            </p>
          </div>

          {/* Completed vs Concept Legend */}
          <div className="flex items-center gap-3 font-tech text-[10px] bg-white/[0.03] border border-white/[0.08] px-3.5 py-2 rounded-xl">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-crimson-500" />
              <span>LIVE PRODUCTION WORK</span>
            </div>
            <span className="text-zinc-600">|</span>
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-zinc-500" />
              <span>CONCEPT PROTOTYPE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none font-tech">
        {projectCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-2 rounded-xl text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? 'text-white bg-crimson-600 shadow-glow-crimson'
                  : 'text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06]'
              }`}
            >
              <span>{cat}</span>
              {isActive && (
                <span className="ml-1.5 text-[9px] bg-black/40 px-1.5 py-0.5 rounded font-mono">
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

      {/* Empty State Fallback */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16 double-bezel-card max-w-md mx-auto">
          <div className="double-bezel-inner p-8 font-tech">
            <p className="text-zinc-400 text-xs">NO PROJECTS CURRENTLY MATCHING THIS FILTER.</p>
            <button
              type="button"
              onClick={() => setActiveCategory('All')}
              className="mt-4 px-4 py-2 rounded-xl bg-crimson-600 text-white text-xs font-monument tracking-wider"
            >
              RESET TO ALL PROJECTS
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
