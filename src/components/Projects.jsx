import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projectCategories } from '../data/projects';
import { getStoredProjects } from '../data/store';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectList, setProjectList] = useState(getStoredProjects());

  // Listen to updates from admin dashboard
  useEffect(() => {
    const handleStorageUpdate = () => {
      setProjectList(getStoredProjects());
    };
    window.addEventListener('metia_storage_update', handleStorageUpdate);
    window.addEventListener('srahul_storage_update', handleStorageUpdate);
    return () => {
      window.removeEventListener('metia_storage_update', handleStorageUpdate);
      window.removeEventListener('srahul_storage_update', handleStorageUpdate);
    };
  }, []);

  const filteredProjects = projectList.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.categories && project.categories.includes(activeCategory);
  });

  return (
    <section id="work" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.06]">
      {/* Section Header: Clean vertical stack without eyebrow clutter */}
      <div className="flex flex-col items-start mb-12">
        <h2 className="font-monument text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[0.95] mb-4">
          SELECTED <span className="text-crimson-500">CLIENT WORK</span>
        </h2>
        <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed max-w-2xl mb-8">
          A showcase of high-performance websites, scalable e-commerce storefronts, and custom web applications delivered for ambitious businesses.
        </p>

        {/* Filter Categories Pill Row */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full scrollbar-none font-tech text-xs">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full uppercase tracking-wider transition-all duration-200 cursor-pointer shrink-0 ${
                activeCategory === category
                  ? 'bg-crimson-600 text-white font-semibold shadow-glow-crimson'
                  : 'bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid: 3-column responsive card matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {/* Case Study Deep-Dive Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
