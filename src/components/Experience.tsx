import React, { useState } from 'react';
import {
  Briefcase,
  CheckCircle2,
  Calendar,
  Layers,
  Edit3,
  Save,
  RotateCcw,
  Sparkles,
  Building2,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { INTERNSHIP_DATA } from '../data/portfolioData';
import { InternshipItem } from '../types/portfolio';

export const Experience: React.FC = () => {
  const [experience, setExperience] = useState<InternshipItem>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ajay_portfolio_experience');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          // ignore
        }
      }
    }
    return INTERNSHIP_DATA;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<InternshipItem>(experience);
  const [saveToast, setSaveToast] = useState(false);

  const handleSave = () => {
    setExperience(editForm);
    localStorage.setItem('ajay_portfolio_experience', JSON.stringify(editForm));
    setIsEditing(false);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 3000);
  };

  const handleReset = () => {
    setExperience(INTERNSHIP_DATA);
    setEditForm(INTERNSHIP_DATA);
    localStorage.removeItem('ajay_portfolio_experience');
    setIsEditing(false);
  };

  return (
    <section id="experience" className="py-24 bg-slate-50/50 dark:bg-[#11151D]/40 border-y border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Industry Experience
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-heading">
              Internship Experience
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              Practical software engineering exposure, team collaboration, and applied technical responsibilities.
            </p>
          </div>

          {/* Edit / Customize Toggle */}
          <div className="flex items-center gap-2">
            {!isEditing ? (
              <button
                onClick={() => {
                  setEditForm(experience);
                  setIsEditing(true);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Internship Details</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSave}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Updates</span>
                </button>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-300 dark:border-white/10 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {saveToast && (
          <div className="mb-6 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-700 dark:text-emerald-300 text-center font-medium">
            ✓ Internship details successfully updated and saved locally!
          </div>
        )}

        {/* Experience Content Display or Edit Mode */}
        {!isEditing ? (
          <div className="rounded-2xl bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden">
            {/* Header Banner */}
            <div className="p-6 sm:p-8 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0B0D12] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center font-extrabold text-xl shadow-md shadow-blue-500/20 shrink-0">
                  <Building2 className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
                    <span>{experience.position}</span>
                    <span aria-hidden="true" className="text-slate-400">·</span>
                    <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {experience.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                    {experience.organization}
                  </h3>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {experience.duration}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>Domain: {experience.domain}</span>
                  </div>
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-1.5 max-w-sm">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Detailed Cards Grid */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Responsibilities */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-blue-500" />
                  <span>Responsibilities</span>
                </div>
                <ul className="space-y-2">
                  {experience.responsibilities.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tasks Completed */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Tasks Completed</span>
                </div>
                <ul className="space-y-2">
                  {experience.tasksCompleted.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Projects & Workflows */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Projects Developed</span>
                </div>
                <ul className="space-y-2">
                  {experience.projectsDeveloped.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <span className="text-indigo-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Learning Outcomes */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                  <span>Learning Outcomes</span>
                </div>
                <ul className="space-y-2">
                  {experience.keyLearningOutcomes.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          /* Editable Form Mode */
          <div className="rounded-2xl bg-white dark:bg-[#11151D] border border-blue-500/50 p-6 sm:p-8 space-y-6">
            <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Edit3 className="w-4 h-4 text-blue-500" />
              <span>Customize Internship Information</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Organization:
                </label>
                <input
                  type="text"
                  value={editForm.organization}
                  onChange={(e) => setEditForm({ ...editForm, organization: e.target.value })}
                  className="w-full p-2.5 text-xs rounded-lg bg-slate-50 dark:bg-[#161B26] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Position / Role:
                </label>
                <input
                  type="text"
                  value={editForm.position}
                  onChange={(e) => setEditForm({ ...editForm, position: e.target.value })}
                  className="w-full p-2.5 text-xs rounded-lg bg-slate-50 dark:bg-[#161B26] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Status:
                </label>
                <input
                  type="text"
                  value={editForm.status}
                  onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                  className="w-full p-2.5 text-xs rounded-lg bg-slate-50 dark:bg-[#161B26] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Internship Duration:
                </label>
                <input
                  type="text"
                  value={editForm.duration}
                  onChange={(e) => setEditForm({ ...editForm, duration: e.target.value })}
                  className="w-full p-2.5 text-xs rounded-lg bg-slate-50 dark:bg-[#161B26] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Domain:
                </label>
                <input
                  type="text"
                  value={editForm.domain}
                  onChange={(e) => setEditForm({ ...editForm, domain: e.target.value })}
                  className="w-full p-2.5 text-xs rounded-lg bg-slate-50 dark:bg-[#161B26] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-xs font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white"
              >
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
