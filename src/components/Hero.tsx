import React from 'react';
import {
  ArrowDown,
  Download,
  FolderKanban,
  Mail,
  Github,
  Linkedin,
  Code2,
  Terminal,
  MapPin,
  GraduationCap,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadResumeFile } from '../utils/resumeGenerator';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Subtle ambient lighting gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[350px] bg-violet-600/10 dark:bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[300px] bg-cyan-600/10 dark:bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle background tech grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            {/* Context kicker text (No pill enclosure as per anti-slop rules) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Computer Science & Engineering</span>
              </span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span>Easwari Engineering College</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Chennai, India
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-heading leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">Ajay</span>.
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200">
              {PERSONAL_INFO.subtitle}
            </h2>

            {/* Professional Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.description}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-600/30 hover:shadow-blue-500/50 transition-all active:scale-95 whitespace-nowrap"
              >
                <FolderKanban className="w-4 h-4" />
                <span>Explore My Projects</span>
              </a>

              <button
                onClick={downloadResumeFile}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-300 dark:border-white/15 rounded-lg transition-colors active:scale-95 whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                <span>Download My Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 rounded-lg transition-colors active:scale-95 whitespace-nowrap"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 flex items-center gap-4 text-slate-500 dark:text-slate-400">
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">Connect:</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-slate-200 dark:border-white/10 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/30 transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-slate-200 dark:border-white/10 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/30 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-slate-200 dark:border-white/10 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/30 transition-colors"
                aria-label="LeetCode profile"
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg border border-slate-200 dark:border-white/10 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/30 transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Developer Profile & Terminal Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden transition-all duration-300">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-[#0B0D12] border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-500" />
                  <span>ajay@developer-env:~</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Developer Avatar & Highlights Area */}
              <div className="p-6 space-y-6">
                {/* Visual Avatar Monogram & Status */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-blue-500/25 shrink-0 ring-4 ring-blue-500/10">
                    A
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Ajay</h3>
                    <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                      B.E. Computer Science & Engineering
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5" />
                      Easwari Engineering College
                    </p>
                  </div>
                </div>

                {/* Code Environment Card */}
                <div className="rounded-xl bg-slate-900 text-slate-200 p-4 font-mono text-xs leading-relaxed space-y-2 border border-slate-800">
                  <div className="text-slate-500 flex items-center justify-between">
                    <span>developer_spec.ts</span>
                    <span className="text-[10px] text-emerald-400">active</span>
                  </div>
                  <div>
                    <span className="text-indigo-400">const</span> developer = &#123;
                  </div>
                  <div className="pl-4">
                    name: <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,
                  </div>
                  <div className="pl-4">
                    focus: [<span className="text-emerald-300">"Full-Stack"</span>, <span className="text-emerald-300">"AI / NLP"</span>],
                  </div>
                  <div className="pl-4">
                    currentRole: <span className="text-emerald-300">"CS Engineering Student"</span>,
                  </div>
                  <div className="pl-4">
                    internship: <span className="text-amber-300">"RISE Intern (Completed)"</span>,
                  </div>
                  <div className="pl-4">
                    certification: <span className="text-cyan-300">"MongoDB Course"</span>,
                  </div>
                  <div className="pl-4">
                    mindset: <span className="text-emerald-300">"Build Practical Solutions"</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Quick Credentials Strip */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-left">
                    <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">Experience</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">RISE Intern</div>
                    <div className="text-[11px] text-emerald-600 dark:text-emerald-400">Completed</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-left">
                    <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">Certification</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">MongoDB Course</div>
                    <div className="text-[11px] text-blue-600 dark:text-blue-400">Database Mgmt</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            aria-label="Scroll to About Me section"
          >
            <span>Scroll to explore</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
