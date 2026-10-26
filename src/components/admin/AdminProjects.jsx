import React, { useState } from 'react';
import {
  FolderGit2,
  Plus,
  Edit3,
  Trash2,
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  X,
  Layers,
  Save,
  RotateCcw
} from 'lucide-react';
import { getStoredProjects, saveStoredProjects, resetStoreToDefaults } from '../../data/store';
import { projectCategories } from '../../data/projects';

export default function AdminProjects() {
  const [projects, setProjects] = useState(getStoredProjects());
  const [editingProject, setEditingProject] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    tagline: '',
    category: 'Development',
    categories: ['Development'],
    type: 'Production Project',
    isCompleted: true,
    description: '',
    fullDescription: '',
    technologies: '',
    services: 'Web Development',
    liveUrl: '',
    githubUrl: '',
    accentGradient: 'from-crimson-900/40 via-red-950/30 to-black',
  });

  const refreshProjects = () => {
    setProjects(getStoredProjects());
  };

  const handleOpenAdd = () => {
    setFormData({
      id: `proj-${Date.now().toString(36)}`,
      title: '',
      tagline: '',
      category: 'Development',
      categories: ['Development'],
      type: 'Production Deliverable',
      isCompleted: true,
      description: '',
      fullDescription: '',
      technologies: 'React, Tailwind CSS, JavaScript',
      services: 'Web Development, UI/UX',
      liveUrl: 'https://demo-project.vercel.app',
      githubUrl: 'https://github.com/vrvijayrahul-lang/project',
      accentGradient: 'from-crimson-900/40 via-red-950/30 to-black',
    });
    setIsAddingNew(true);
    setEditingProject(null);
  };

  const handleOpenEdit = (project) => {
    setFormData({
      ...project,
      technologies: Array.isArray(project.technologies) ? project.technologies.join(', ') : project.technologies,
      services: Array.isArray(project.services) ? project.services.join(', ') : project.services,
    });
    setEditingProject(project);
    setIsAddingNew(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Please provide a project title');
      return;
    }

    const techArray = formData.technologies
      ? formData.technologies.split(',').map((t) => t.trim()).filter(Boolean)
      : ['Web Development'];

    const servArray = formData.services
      ? formData.services.split(',').map((s) => s.trim()).filter(Boolean)
      : ['Engineering'];

    const updatedProject = {
      ...formData,
      technologies: techArray,
      services: servArray,
      categories: [formData.category],
      highlights: formData.highlights || [
        'Optimized responsive layout across mobile and desktop',
        'Clean component architecture with minimal bundle size',
      ],
      metrics: formData.metrics || [
        { label: 'Status', value: formData.isCompleted ? 'Delivered' : 'Prototype' },
        { label: 'Performance', value: '99/100' },
        { label: 'Tier', value: 'Production' },
      ],
    };

    let updatedList;
    if (isAddingNew) {
      updatedList = [updatedProject, ...projects];
    } else {
      updatedList = projects.map((p) => (p.id === updatedProject.id ? updatedProject : p));
    }

    saveStoredProjects(updatedList);
    setProjects(updatedList);
    setIsAddingNew(false);
    setEditingProject(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this project from your portfolio?')) {
      const updatedList = projects.filter((p) => p.id !== id);
      saveStoredProjects(updatedList);
      setProjects(updatedList);
    }
  };

  const handleToggleCompleted = (id) => {
    const updatedList = projects.map((p) =>
      p.id === id ? { ...p, isCompleted: !p.isCompleted } : p
    );
    saveStoredProjects(updatedList);
    setProjects(updatedList);
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all portfolio projects to the original default exhibits?')) {
      resetStoreToDefaults();
      refreshProjects();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
        <div>
          <h3 className="font-monument text-2xl text-white tracking-wide">
            PROJECT CATALOG & REPOSITORY
          </h3>
          <p className="font-tech text-xs text-zinc-400 uppercase">
            {projects.length} EXHIBITS CONFIGURED ON LIVE SITE
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleResetDefaults}
            className="px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-tech text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
            title="Reset to default 6 projects"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">RESET DEFAULTS</span>
          </button>

          <button
            type="button"
            onClick={handleOpenAdd}
            className="px-4 py-2 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-monument text-sm tracking-wider flex items-center gap-1.5 shadow-glow-crimson transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>ADD NEW PROJECT</span>
          </button>
        </div>
      </div>

      {/* Projects Table / Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="double-bezel-card">
            <div className="double-bezel-inner p-5 bg-[#08080c] border border-white/[0.04] flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] font-tech text-[10px]">
                  <button
                    type="button"
                    onClick={() => handleToggleCompleted(project.id)}
                    className={`px-2 py-0.5 rounded uppercase font-semibold cursor-pointer transition-colors ${
                      project.isCompleted
                        ? 'bg-crimson-950/80 text-crimson-300 border border-crimson-600/40'
                        : 'bg-zinc-800 text-zinc-400 border border-white/10'
                    }`}
                  >
                    {project.isCompleted ? '● LIVE WORK' : '○ CONCEPT'}
                  </button>

                  <span className="text-zinc-400 uppercase">
                    CATEGORY: {project.category}
                  </span>
                </div>

                <h4 className="font-monument text-xl text-white tracking-wide mb-1">
                  {project.title}
                </h4>
                <p className="font-tech text-xs text-zinc-400 uppercase mb-3">
                  {project.tagline}
                </p>

                <p className="text-xs text-zinc-300 line-clamp-2 font-sans mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 font-tech text-[10px]">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between font-tech text-xs">
                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white"
                      title="Test live link"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white"
                      title="View repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleOpenEdit(project)}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white text-xs flex items-center gap-1"
                  >
                    <Edit3 className="w-3 h-3 text-crimson-400" />
                    <span>EDIT</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(project.id)}
                    className="p-1 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-500/10"
                    title="Delete project"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Project Modal */}
      {(isAddingNew || editingProject) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="double-bezel-card max-w-2xl w-full p-2 border border-crimson-600/40 my-8">
            <div className="double-bezel-inner p-6 sm:p-8 bg-[#08080c] max-h-[85vh] overflow-y-auto">

              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <div>
                  <h4 className="font-monument text-2xl text-white">
                    {isAddingNew ? 'REGISTER NEW EXHIBIT' : 'EDIT PROJECT PARAMETERS'}
                  </h4>
                  <p className="font-tech text-xs text-crimson-400 uppercase">
                    ID: {formData.id}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsAddingNew(false);
                    setEditingProject(null);
                  }}
                  className="w-8 h-8 rounded-lg bg-white/[0.05] text-zinc-400 hover:text-white flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-tech text-xs text-zinc-300 uppercase mb-1">
                      Project Title *
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g. Luxury Brand Experience"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm font-sans focus:outline-none focus:border-crimson-500"
                    />
                  </div>

                  <div>
                    <label className="block font-tech text-xs text-zinc-300 uppercase mb-1">
                      Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e0e14] border border-white/[0.08] text-white text-xs font-tech focus:outline-none focus:border-crimson-500"
                    >
                      {projectCategories.filter((c) => c !== 'All').map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-tech text-xs text-zinc-300 uppercase mb-1">
                    Tagline
                  </label>
                  <input
                    type="text"
                    value={formData.tagline}
                    onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                    placeholder="Short punchy subtitle..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm font-sans focus:outline-none focus:border-crimson-500"
                  />
                </div>

                <div>
                  <label className="block font-tech text-xs text-zinc-300 uppercase mb-1">
                    Status / Classification
                  </label>
                  <div className="flex items-center gap-4 font-tech text-xs">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="isCompleted"
                        checked={formData.isCompleted === true}
                        onChange={() => setFormData({ ...formData, isCompleted: true, type: 'Production Deliverable' })}
                        className="text-crimson-600 focus:ring-crimson-500"
                      />
                      <span className="text-white">Completed Production Work</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="isCompleted"
                        checked={formData.isCompleted === false}
                        onChange={() => setFormData({ ...formData, isCompleted: false, type: 'Concept & Prototype' })}
                        className="text-crimson-600 focus:ring-crimson-500"
                      />
                      <span className="text-zinc-400">Concept / Experimental</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block font-tech text-xs text-zinc-300 uppercase mb-1">
                    Short Description (For Card)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Brief 2-line summary for the portfolio card..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm font-sans focus:outline-none focus:border-crimson-500"
                  />
                </div>

                <div>
                  <label className="block font-tech text-xs text-zinc-300 uppercase mb-1">
                    Deep Dive Overview (For Case Study Modal)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.fullDescription}
                    onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                    placeholder="Full context, problem solved, and technical deliverables..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm font-sans focus:outline-none focus:border-crimson-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-tech text-xs text-zinc-300 uppercase mb-1">
                      Technologies (comma separated)
                    </label>
                    <input
                      type="text"
                      value={formData.technologies}
                      onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                      placeholder="React, Tailwind, Node.js"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-tech focus:outline-none focus:border-crimson-500"
                    />
                  </div>

                  <div>
                    <label className="block font-tech text-xs text-zinc-300 uppercase mb-1">
                      Services Delivered (comma separated)
                    </label>
                    <input
                      type="text"
                      value={formData.services}
                      onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                      placeholder="Web Development, UI Design"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-tech focus:outline-none focus:border-crimson-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-tech text-xs text-zinc-300 uppercase mb-1">
                      Live Preview URL
                    </label>
                    <input
                      type="url"
                      value={formData.liveUrl}
                      onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                      placeholder="https://..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-tech focus:outline-none focus:border-crimson-500"
                    />
                  </div>

                  <div>
                    <label className="block font-tech text-xs text-zinc-300 uppercase mb-1">
                      GitHub Repository URL (Optional)
                    </label>
                    <input
                      type="url"
                      value={formData.githubUrl}
                      onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                      placeholder="https://github.com/..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-tech focus:outline-none focus:border-crimson-500"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between font-tech">
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddingNew(false);
                      setEditingProject(null);
                    }}
                    className="text-xs text-zinc-400 hover:text-white"
                  >
                    CANCEL
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-monument tracking-wider text-base flex items-center gap-1.5 shadow-glow-crimson"
                  >
                    <Save className="w-4 h-4" />
                    <span>SAVE EXHIBIT</span>
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
