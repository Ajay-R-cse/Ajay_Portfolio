import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  Coffee,
  FileCode,
  Layout,
  Palette,
  Atom,
  ShieldCheck,
  Wind,
  Server,
  Cpu,
  Boxes,
  Database,
  FolderGit2,
  Flame,
  Layers,
  Laptop,
  GitBranch,
  Github,
  Sparkles,
  BrainCircuit,
  MessageSquareCode,
  Globe,
  HardDrive,
  CheckCircle2,
  Search,
  Filter
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';

// Dynamic icon mapping helper
const getSkillIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code':
    case 'Code2':
      return <Code2 className="w-5 h-5" />;
    case 'Terminal':
      return <Terminal className="w-5 h-5" />;
    case 'Coffee':
      return <Coffee className="w-5 h-5" />;
    case 'FileCode':
      return <FileCode className="w-5 h-5" />;
    case 'Layout':
      return <Layout className="w-5 h-5" />;
    case 'Palette':
      return <Palette className="w-5 h-5" />;
    case 'Atom':
      return <Atom className="w-5 h-5" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-5 h-5" />;
    case 'Wind':
      return <Wind className="w-5 h-5" />;
    case 'Server':
      return <Server className="w-5 h-5" />;
    case 'Cpu':
      return <Cpu className="w-5 h-5" />;
    case 'Boxes':
      return <Boxes className="w-5 h-5" />;
    case 'Database':
      return <Database className="w-5 h-5" />;
    case 'FolderGit2':
      return <FolderGit2 className="w-5 h-5" />;
    case 'Flame':
      return <Flame className="w-5 h-5" />;
    case 'Layers':
      return <Layers className="w-5 h-5" />;
    case 'Laptop':
      return <Laptop className="w-5 h-5" />;
    case 'GitBranch':
      return <GitBranch className="w-5 h-5" />;
    case 'Github':
      return <Github className="w-5 h-5" />;
    case 'Sparkles':
      return <Sparkles className="w-5 h-5" />;
    case 'BrainCircuit':
      return <BrainCircuit className="w-5 h-5" />;
    case 'MessageSquareCode':
      return <MessageSquareCode className="w-5 h-5" />;
    case 'Globe':
      return <Globe className="w-5 h-5" />;
    case 'HardDrive':
      return <HardDrive className="w-5 h-5" />;
    case 'CheckCircle2':
    default:
      return <CheckCircle2 className="w-5 h-5" />;
  }
};

const CATEGORIES = [
  { id: 'all', label: 'All Skills' },
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'databases', label: 'Databases' },
  { id: 'tools', label: 'Tools & Platforms' },
  { id: 'interests', label: 'Areas of Interest' }
];

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 bg-slate-50/50 dark:bg-[#11151D]/40 border-y border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Capabilities & Tooling
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-heading">
              Technical Skills
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              Proficient in modern programming languages, client and server frameworks, relational and NoSQL databases, and cloud development tools.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Filter by technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-lg bg-white dark:bg-[#161B26] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs (Segmented control button layout conforming to §1.A) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/60 dark:bg-white/5 rounded-xl mb-10 overflow-x-auto scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill?.id === skill.id;
            return (
              <div
                key={skill.id}
                onClick={() => setSelectedSkill(isSelected ? null : skill)}
                className={`group p-4 rounded-xl bg-white dark:bg-[#11151D] border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-md'
                    : 'border-slate-200 dark:border-white/10 hover:border-blue-500/40 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                    {getSkillIcon(skill.icon)}
                  </div>
                  <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    {skill.category}
                  </div>
                </div>

                <div className="mt-3">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    {skill.name}
                  </h4>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            No technologies found matching "{searchQuery}". Try another keyword or clear the search.
          </div>
        )}

        {/* Skill Detail Callout when selected */}
        {selectedSkill && (
          <div className="mt-8 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-600 text-white">
                {getSkillIcon(selectedSkill.icon)}
              </div>
              <div>
                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Technology Details · {selectedSkill.category}
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {selectedSkill.name}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  {selectedSkill.description}
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedSkill(null)}
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 px-2 py-1"
            >
              Dismiss
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
