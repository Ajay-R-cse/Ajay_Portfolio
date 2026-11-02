import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Download, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { downloadResumeFile } from '../utils/resumeGenerator';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0D12]/90 dark:bg-[#0B0D12]/90 bg-white/90 backdrop-blur-md border-b border-white/10 dark:border-white/10 border-slate-200/80 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-white dark:text-white text-slate-900 whitespace-nowrap shrink-0 group"
          >
            <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm font-extrabold shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              A
            </span>
            <span className="font-heading">Ajay</span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300 dark:text-slate-300 text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions (Resume, Theme Toggle, Mobile Menu) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg border border-white/10 dark:border-white/10 border-slate-200 text-slate-300 dark:text-slate-300 text-slate-600 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-white/5 dark:hover:bg-white/5 hover:bg-slate-100 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenResumeModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-white/15 dark:border-white/15 border-slate-300 text-slate-200 dark:text-slate-200 text-slate-700 hover:border-blue-500/50 hover:bg-blue-500/10 transition-colors whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Preview Resume</span>
            </button>

            <button
              onClick={downloadResumeFile}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-600/30 transition-all hover:shadow-blue-500/50 whitespace-nowrap shrink-0 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-white/10 dark:border-white/10 border-slate-200 text-slate-300 dark:text-slate-300 text-slate-700 hover:bg-white/5"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 dark:border-white/10 border-slate-200 bg-[#0B0D12] dark:bg-[#0B0D12] bg-white px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 dark:text-slate-300 text-slate-700 hover:text-blue-500 hover:bg-white/5 dark:hover:bg-white/5 hover:bg-slate-100"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-white/15 text-slate-200 dark:text-slate-200 text-slate-800"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              Preview Resume
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                downloadResumeFile();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
