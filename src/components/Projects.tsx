import React, { useState } from 'react';
import {
  FolderKanban,
  Github,
  Play,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Layers,
  Activity,
  Receipt,
  CheckCircle2,
  Smile,
  ShieldCheck,
  TrendingUp,
  CreditCard
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [modalTab, setModalTab] = useState<'details' | 'demo'>('details');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Full-Stack' | 'AI & ML'>('All');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  const handleOpenDetails = (proj: ProjectItem) => {
    setSelectedProject(proj);
    setModalTab('details');
  };

  const handleOpenDemo = (proj: ProjectItem) => {
    setSelectedProject(proj);
    setModalTab('demo');
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Featured Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-heading">
              Projects & Applications
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              Architected and built with modern full-stack web technologies, AI-powered cognitive APIs, and secure database infrastructures.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-white/5 rounded-xl">
            {(['All', 'AI & ML', 'Full-Stack'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {filter === 'All' ? 'All Projects' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm hover:border-blue-500/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left (or Right): Visual Application Mockup */}
                  <div
                    className={`lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center bg-slate-50 dark:bg-[#0B0D12] border-b lg:border-b-0 ${
                      isEven ? 'lg:border-r' : 'lg:order-2 lg:border-l'
                    } border-slate-200 dark:border-white/10`}
                  >
                    {project.demoType === 'mental-health' ? (
                      /* Mental Health UI Mockup */
                      <div className="rounded-xl bg-[#131722] border border-slate-800 p-4 shadow-xl text-left space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                            <span className="text-slate-400 font-mono text-[11px] ml-1">mood-analyzer.app</span>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-400">NLP · Active</span>
                        </div>

                        {/* Chart visualization */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-[11px] text-slate-400">
                            <span>7-Day Sentiment Trajectory</span>
                            <span className="text-blue-400 font-bold">+18% positivity</span>
                          </div>
                          <div className="h-16 flex items-end gap-2 pt-2 px-1">
                            {[40, 65, 55, 80, 70, 90, 85].map((val, i) => (
                              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                <div
                                  className="w-full rounded-t bg-gradient-to-t from-blue-600 to-indigo-400 transition-all"
                                  style={{ height: `${val}%` }}
                                />
                                <span className="text-[9px] text-slate-500">D{i + 1}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* AI Insight Badge */}
                        <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-900/60 text-[11px] text-blue-300 flex items-start gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>Gemini NLP: Consistent morning routines strongly elevated mood stability by 24%.</span>
                        </div>

                        {/* Interactive trigger */}
                        <button
                          onClick={() => handleOpenDemo(project)}
                          className="w-full py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>Launch Live NLP Simulator</span>
                        </button>
                      </div>
                    ) : (
                      /* Hotel Billing POS UI Mockup */
                      <div className="rounded-xl bg-[#131722] border border-slate-800 p-4 shadow-xl text-left space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                            <span className="text-slate-400 font-mono text-[11px] ml-1">hotel-pos-system.app</span>
                          </div>
                          <span className="text-[10px] font-mono text-blue-400">POS · Server Verified</span>
                        </div>

                        {/* Table Layout Simulation */}
                        <div className="space-y-1.5">
                          <div className="text-[11px] text-slate-400">Live Dining Tables</div>
                          <div className="grid grid-cols-4 gap-1.5">
                            <div className="p-2 rounded bg-emerald-950/40 border border-emerald-800/60 text-center">
                              <div className="text-[10px] font-bold text-emerald-300">T-01</div>
                              <div className="text-[8px] text-emerald-400">Billed</div>
                            </div>
                            <div className="p-2 rounded bg-blue-950/40 border border-blue-800/60 text-center">
                              <div className="text-[10px] font-bold text-blue-300">T-02</div>
                              <div className="text-[8px] text-blue-400">Active</div>
                            </div>
                            <div className="p-2 rounded bg-slate-800/40 border border-slate-700/60 text-center">
                              <div className="text-[10px] font-bold text-slate-300">T-03</div>
                              <div className="text-[8px] text-slate-500">Free</div>
                            </div>
                            <div className="p-2 rounded bg-blue-950/40 border border-blue-800/60 text-center">
                              <div className="text-[10px] font-bold text-blue-300">T-04</div>
                              <div className="text-[8px] text-blue-400">Active</div>
                            </div>
                          </div>
                        </div>

                        {/* Recent Invoice Sample */}
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] space-y-1">
                          <div className="flex justify-between text-slate-400">
                            <span>Subtotal + 5% GST</span>
                            <span className="font-mono text-white">₹380 + ₹19</span>
                          </div>
                          <div className="flex justify-between font-bold text-white pt-1 border-t border-slate-800">
                            <span>Final Invoice</span>
                            <span className="font-mono text-emerald-400">₹399 (UPI Paid)</span>
                          </div>
                        </div>

                        {/* Interactive trigger */}
                        <button
                          onClick={() => handleOpenDemo(project)}
                          className="w-full py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>Launch Live POS Simulator</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Right (or Left): Detailed Specifications */}
                  <div
                    className={`lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 ${
                      isEven ? '' : 'lg:order-1'
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Quiet unboxed metadata conforming to §1.A */}
                      <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
                        <span>{project.category}</span>
                        <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
                        <span>{project.subtitle}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {project.title}
                      </h3>

                      {/* Overview */}
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.overview}
                      </p>

                      {/* Problem Statement Box */}
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white block mb-1">
                          The Problem It Solves:
                        </strong>
                        {project.problemStatement}
                      </div>

                      {/* Key Features List */}
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                          Key Capabilities
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.keyFeatures.slice(0, 4).map((feat, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Badges */}
                      <div className="pt-2">
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                          Technologies Used
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 text-[11px] font-medium rounded bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => handleOpenDetails(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all"
                      >
                        <span>View Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleOpenDemo(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 rounded-lg transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 text-blue-500" />
                        <span>Live Demo</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub Repo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          initialTab={modalTab}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
