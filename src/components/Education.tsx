import React, { useState } from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  CheckCircle2,
  Edit3,
  Save,
  RotateCcw
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { EducationItem } from '../types/portfolio';

export const Education: React.FC = () => {
  const [education, setEducation] = useState<EducationItem>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ajay_portfolio_education');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          // ignore
        }
      }
    }
    return EDUCATION_DATA;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<EducationItem>(education);

  const handleSave = () => {
    setEducation(editForm);
    localStorage.setItem('ajay_portfolio_education', JSON.stringify(editForm));
    setIsEditing(false);
  };

  const handleReset = () => {
    setEducation(EDUCATION_DATA);
    setEditForm(EDUCATION_DATA);
    localStorage.removeItem('ajay_portfolio_education');
    setIsEditing(false);
  };

  return (
    <section id="education" className="py-24 bg-slate-50/50 dark:bg-[#11151D]/40 border-y border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Academic Foundation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-heading">
              Education
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              Rigorous undergraduate training in computer engineering, algorithms, database systems, and software methodologies.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {!isEditing ? (
              <button
                onClick={() => {
                  setEditForm(education);
                  setIsEditing(true);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Education Details</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSave}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save</span>
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

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          {!isEditing ? (
            <div className="relative pl-8 sm:pl-10 border-l-2 border-blue-500/30 space-y-8">
              {/* Timeline Marker Pin */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-blue-600 border-4 border-white dark:border-[#0B0D12] flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Main Card */}
              <div className="rounded-2xl bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                      {education.degree} in {education.department}
                    </h3>
                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                      {education.institution}
                    </div>
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400 sm:text-right space-y-1">
                    <div className="flex items-center sm:justify-end gap-1.5 text-blue-600 dark:text-blue-400 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{education.academicYear} (Graduating {education.expectedGraduation})</span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{education.location}</span>
                    </div>
                  </div>
                </div>

                {/* Coursework Grid */}
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                    <span>Relevant Coursework</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {education.relevantCoursework.map((course, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>Academic Activities & Highlights</span>
                  </div>
                  <ul className="space-y-2">
                    {education.academicAchievements.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2"
                      >
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            /* Edit Mode */
            <div className="rounded-2xl bg-white dark:bg-[#11151D] border border-blue-500/50 p-6 sm:p-8 space-y-6">
              <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-blue-500" />
                <span>Edit Education Information</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Degree:
                  </label>
                  <input
                    type="text"
                    value={editForm.degree}
                    onChange={(e) => setEditForm({ ...editForm, degree: e.target.value })}
                    className="w-full p-2.5 text-xs rounded-lg bg-slate-50 dark:bg-[#161B26] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Department:
                  </label>
                  <input
                    type="text"
                    value={editForm.department}
                    onChange={(e) => setEditForm({ ...editForm, department: e.target.value })}
                    className="w-full p-2.5 text-xs rounded-lg bg-slate-50 dark:bg-[#161B26] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Institution:
                  </label>
                  <input
                    type="text"
                    value={editForm.institution}
                    onChange={(e) => setEditForm({ ...editForm, institution: e.target.value })}
                    className="w-full p-2.5 text-xs rounded-lg bg-slate-50 dark:bg-[#161B26] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Location:
                  </label>
                  <input
                    type="text"
                    value={editForm.location}
                    onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                    className="w-full p-2.5 text-xs rounded-lg bg-slate-50 dark:bg-[#161B26] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Academic Year:
                  </label>
                  <input
                    type="text"
                    value={editForm.academicYear}
                    onChange={(e) => setEditForm({ ...editForm, academicYear: e.target.value })}
                    className="w-full p-2.5 text-xs rounded-lg bg-slate-50 dark:bg-[#161B26] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Expected Graduation:
                  </label>
                  <input
                    type="text"
                    value={editForm.expectedGraduation}
                    onChange={(e) => setEditForm({ ...editForm, expectedGraduation: e.target.value })}
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
      </div>
    </section>
  );
};
