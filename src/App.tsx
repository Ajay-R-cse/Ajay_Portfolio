import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Profiles } from './components/Profiles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0B0D12] text-slate-100 dark:bg-[#0B0D12] dark:text-slate-100 selection:bg-blue-600/30 selection:text-white transition-colors duration-200">
        {/* Navigation */}
        <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main>
          {/* 1. Hero Section */}
          <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />

          {/* 2. About Me Section */}
          <About onOpenResumeModal={() => setResumeModalOpen(true)} />

          {/* 3. Technical Skills */}
          <Skills />

          {/* 4. Projects Showcase */}
          <Projects />

          {/* 5. Internship Experience */}
          <Experience />

          {/* 6. Certifications */}
          <Certifications />

          {/* 7. Education Timeline */}
          <Education />

          {/* 8. Achievements & Activities */}
          <Achievements />

          {/* 9. Developer Profiles */}
          <Profiles />

          {/* 10. Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Resume Modal & Downloader */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
