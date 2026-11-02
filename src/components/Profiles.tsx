import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Code2,
  ExternalLink,
  Terminal,
  Edit3,
  Check,
  Globe
} from 'lucide-react';
import { PROFILES_DATA } from '../data/portfolioData';
import { DeveloperProfile } from '../types/portfolio';

export const Profiles: React.FC = () => {
  const [profiles, setProfiles] = useState<DeveloperProfile[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ajay_portfolio_profiles');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          // ignore
        }
      }
    }
    return PROFILES_DATA;
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editUrl, setEditUrl] = useState<string>('');

  const handleStartEdit = (p: DeveloperProfile) => {
    setEditingId(p.id);
    setEditUrl(p.profileUrl);
  };

  const handleSaveUrl = (id: string) => {
    const updated = profiles.map((p) => (p.id === id ? { ...p, profileUrl: editUrl } : p));
    setProfiles(updated);
    localStorage.setItem('ajay_portfolio_profiles', JSON.stringify(updated));
    setEditingId(null);
  };

  const getPlatformIcon = (platform: DeveloperProfile['platform']) => {
    switch (platform) {
      case 'GitHub':
        return <Github className="w-6 h-6" />;
      case 'LinkedIn':
        return <Linkedin className="w-6 h-6 text-blue-500" />;
      case 'LeetCode':
        return <Code2 className="w-6 h-6 text-amber-500" />;
      case 'HackerRank':
      default:
        return <Terminal className="w-6 h-6 text-emerald-500" />;
    }
  };

  return (
    <section id="profiles" className="py-24 bg-slate-50/50 dark:bg-[#11151D]/40 border-y border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Online Presence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-heading">
            Coding & Developer Profiles
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Explore my code repositories, technical discussions, and continuous algorithmic problem-solving practice across developer platforms.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="p-6 rounded-2xl bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5">
                    {getPlatformIcon(profile.platform)}
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    @{profile.username}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {profile.platform}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {profile.description}
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs">
                  <span className="text-slate-400 block text-[11px]">{profile.metricLabel}</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{profile.metricValue}</span>
                </div>
              </div>

              {/* Action Link & Edit Button */}
              <div className="pt-2 border-t border-slate-200 dark:border-white/10 space-y-2">
                {editingId === profile.id ? (
                  <div className="flex items-center gap-1.5">
                    <input
                      type="url"
                      value={editUrl}
                      onChange={(e) => setEditUrl(e.target.value)}
                      className="flex-1 p-1.5 text-xs rounded border border-blue-500 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white"
                      placeholder="https://..."
                    />
                    <button
                      onClick={() => handleSaveUrl(profile.id)}
                      className="p-1.5 bg-blue-600 text-white rounded text-xs"
                      aria-label="Save URL"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={profile.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors"
                    >
                      <span>Visit Profile</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => handleStartEdit(profile)}
                      className="text-[11px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center gap-1"
                      title="Edit Profile URL"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>Edit Link</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
