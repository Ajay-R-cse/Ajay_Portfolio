import React, { useState } from 'react';
import {
  Trophy,
  Code,
  Users,
  Presentation,
  Terminal,
  Sparkles,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { AchievementItem } from '../types/portfolio';

export const Achievements: React.FC = () => {
  const [achievements] = useState<AchievementItem[]>(ACHIEVEMENTS_DATA);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'hackathons':
        return <Trophy className="w-5 h-5 text-amber-500" />;
      case 'coding challenges':
        return <Code className="w-5 h-5 text-blue-500" />;
      case 'workshops & seminars':
        return <Presentation className="w-5 h-5 text-indigo-500" />;
      case 'academic projects':
      default:
        return <Terminal className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Technical Engagement
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-heading">
            Achievements & Activities
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Participation in collaborative hackathons, algorithm challenges, technical symposiums, and departmental seminars.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5">
                      {getCategoryIcon(item.category)}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        {item.category}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {item.organizationOrEvent}
                      </div>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.dateOrYear}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[11px] font-medium rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
