import React from 'react';
import {
  GraduationCap,
  Sparkles,
  Layers,
  Database,
  BrainCircuit,
  Code2,
  CheckCircle2,
  Download,
  Calendar,
  Compass,
  Briefcase
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadResumeFile } from '../utils/resumeGenerator';

interface AboutProps {
  onOpenResumeModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResumeModal }) => {
  const highlights = [
    {
      title: 'Building Full-Stack Applications',
      desc: 'Developing end-to-end web apps with React, TypeScript, Node.js, and Express.',
      icon: Layers
    },
    {
      title: 'Working with Databases',
      desc: 'Designing schema models in MySQL, MongoDB NoSQL collections, and Cloud Firestore.',
      icon: Database
    },
    {
      title: 'Exploring Artificial Intelligence',
      desc: 'Integrating NLP sentiment pipelines and Google Gemini API for practical cognitive features.',
      icon: BrainCircuit
    },
    {
      title: 'Learning New Languages & Stacks',
      desc: 'Expanding software depth across C, C++, Java, Python, JavaScript, and Spring Boot.',
      icon: Code2
    },
    {
      title: 'Solving Programming Problems',
      desc: 'Practicing algorithmic thinking, data structures, and optimal time-complexity solutions.',
      icon: CheckCircle2
    },
    {
      title: 'Participating in Technical Events',
      desc: 'Engaging in hackathons, team coding competitions, and academic technology symposiums.',
      icon: Sparkles
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Background & Focus
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-heading">
            About Me
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            A closer look into my educational journey, technical engineering interests, and development philosophy.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Visual Card / Profile Overview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 p-6 sm:p-8 space-y-6 shadow-sm">
              {/* Profile Monogram Card */}
              <div className="flex items-center gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-black shadow-md shadow-blue-500/20">
                  A
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Ajay</h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    Aspiring Software Developer
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Education Snippet */}
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Current Education
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Bachelor of Engineering (B.E.)
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Computer Science and Engineering
                    </p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-0.5">
                      Easwari Engineering College, Chennai
                    </p>
                  </div>
                </div>
              </div>

              {/* Career Goal */}
              <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-white/10">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Career Trajectory
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Full-Stack & Systems Engineering
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-0.5">
                      Aspiring to build reliable, high-performance web systems and AI-integrated software solutions that make a genuine difference.
                    </p>
                  </div>
                </div>
              </div>

              {/* Download Resume Action in About */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={downloadResumeFile}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF/HTML)</span>
                </button>
                <button
                  onClick={onOpenResumeModal}
                  className="inline-flex items-center justify-center px-3 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg transition-colors"
                >
                  Preview
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: In-depth Biography & What I Enjoy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed text-base">
              <p>
                I am a passionate <strong className="text-slate-900 dark:text-white">Computer Science Engineering student</strong> at Easwari Engineering College, Chennai, with a genuine curiosity for how software transforms ideas into impactful digital tools.
              </p>
              <p>
                My journey centers around developing <strong className="text-slate-900 dark:text-white">practical applications that solve real-world problems</strong>. From conceptualizing intuitive user interfaces to architecting resilient backend logic and database structures, I enjoy understanding the complete lifecycle of a software product.
              </p>
              <p>
                Through hands-on development on projects such as an <span className="text-blue-600 dark:text-blue-400 font-semibold">AI-driven Mental Health Journal</span> and a <span className="text-blue-600 dark:text-blue-400 font-semibold">Hotel Operations & POS Billing Platform</span>, alongside a completed internship at <strong className="text-slate-900 dark:text-white">RISE</strong> and formal MongoDB certification, I continuously bridge theoretical computer science fundamentals with modern software production practices.
              </p>
            </div>

            {/* Highlights Grid: What I Enjoy */}
            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-white/10">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                What I Genuinely Enjoy Doing
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 space-y-2 hover:border-blue-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-8">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
