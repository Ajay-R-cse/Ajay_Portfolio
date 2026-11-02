import React, { useState } from 'react';
import {
  X,
  Download,
  Printer,
  Upload,
  FileText,
  CheckCircle2,
  RotateCcw,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Layers,
  Award
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EDUCATION_DATA,
  SKILLS_DATA,
  INTERNSHIP_DATA,
  PROJECTS_DATA,
  CERTIFICATION_DATA
} from '../data/portfolioData';
import { downloadResumeFile } from '../utils/resumeGenerator';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [customFile, setCustomFile] = useState<{ name: string; url: string } | null>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ajay_custom_resume_info');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          // ignore
        }
      }
    }
    return null;
  });

  const [activeTab, setActiveTab] = useState<'preview' | 'upload'>('preview');
  const [uploadNotice, setUploadNotice] = useState(false);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      const info = { name: file.name, url: objectUrl };
      setCustomFile(info);
      localStorage.setItem('ajay_custom_resume_info', JSON.stringify({ name: file.name, url: '' }));
      setUploadNotice(true);
      setTimeout(() => setUploadNotice(false), 3000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-left">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0B0D12]">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-500" />
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Ajay — Software Developer Resume
              </h3>
              <p className="text-xs text-slate-500">
                Official Curriculum Vitae & Verified Credentials
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 p-1 bg-slate-200 dark:bg-white/5 rounded-lg text-xs font-medium">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeTab === 'preview'
                    ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Resume Preview
              </button>
              <button
                onClick={() => setActiveTab('upload')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeTab === 'upload'
                    ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Upload / Replace
              </button>
            </div>

            <button
              onClick={onClose}
              aria-label="Close resume viewer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'preview' ? (
            /* Styled Printable Resume Document */
            <div className="max-w-2xl mx-auto p-8 rounded-xl bg-white text-slate-900 border border-slate-300 shadow-sm space-y-6 font-sans">
              {/* Document Header */}
              <div className="border-b-2 border-blue-600 pb-4">
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <div className="text-xs font-bold text-blue-600 mt-0.5">
                  {PERSONAL_INFO.professionalTitle}
                </div>
                <div className="text-xs text-slate-600 mt-1 flex flex-wrap gap-2">
                  <span>{PERSONAL_INFO.location}</span>
                  <span>·</span>
                  <span>{PERSONAL_INFO.email}</span>
                  <span>·</span>
                  <span>Easwari Engineering College</span>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                  Professional Summary
                </div>
                <p className="text-xs text-slate-700 leading-relaxed pt-1">
                  Computer Science Engineering student at Easwari Engineering College with a strong foundation in full-stack development, artificial intelligence, relational and NoSQL databases, and object-oriented programming. Hands-on experience developing an AI-driven Mental Health Journal & NLP Analyzer and a Hotel Operations & POS Billing system.
                </p>
              </div>

              {/* Education */}
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                  Education
                </div>
                <div className="pt-1">
                  <div className="flex justify-between text-xs font-bold text-slate-900">
                    <span>{EDUCATION_DATA.institution}</span>
                    <span>{EDUCATION_DATA.academicYear} (Grad: {EDUCATION_DATA.expectedGraduation})</span>
                  </div>
                  <div className="text-xs text-blue-600 font-semibold">
                    {EDUCATION_DATA.degree} in {EDUCATION_DATA.department} · {EDUCATION_DATA.location}
                  </div>
                  <div className="text-[11px] text-slate-600 mt-1">
                    <strong>Key Coursework:</strong> {EDUCATION_DATA.relevantCoursework.slice(0, 6).join(', ')}.
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                  Technical Skills
                </div>
                <div className="grid grid-cols-1 gap-1 text-xs text-slate-700 pt-1">
                  <div><strong>Programming:</strong> C, C++, Python, Java, JavaScript, TypeScript</div>
                  <div><strong>Frontend:</strong> React.js, HTML5, CSS3, Tailwind CSS, Responsive Design</div>
                  <div><strong>Backend:</strong> Node.js, Express.js, Spring Boot, REST APIs</div>
                  <div><strong>Databases:</strong> MySQL, MongoDB, Firebase, Cloud Firestore</div>
                  <div><strong>Tools:</strong> VS Code, Git, GitHub, Google AI Studio, Firebase Console</div>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                  Experience
                </div>
                <div className="pt-1">
                  <div className="flex justify-between text-xs font-bold text-slate-900">
                    <span>{INTERNSHIP_DATA.organization}</span>
                    <span>{INTERNSHIP_DATA.duration}</span>
                  </div>
                  <div className="text-xs text-blue-600 font-semibold">
                    {INTERNSHIP_DATA.position} — {INTERNSHIP_DATA.status}
                  </div>
                  <ul className="list-disc pl-4 text-xs text-slate-700 space-y-0.5 mt-1">
                    {INTERNSHIP_DATA.responsibilities.slice(0, 3).map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Projects */}
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                  Key Projects
                </div>
                <div className="space-y-3 pt-1">
                  {PROJECTS_DATA.map((p) => (
                    <div key={p.id}>
                      <div className="flex justify-between text-xs font-bold text-slate-900">
                        <span>{p.title}</span>
                        <span className="text-slate-500 font-normal">{p.technologies.slice(0, 3).join(', ')}</span>
                      </div>
                      <div className="text-xs text-slate-600 leading-relaxed mt-0.5">
                        {p.overview}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                  Certifications
                </div>
                <div className="pt-1 text-xs">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{CERTIFICATION_DATA[0].title} — {CERTIFICATION_DATA[0].technology}</span>
                    <span className="text-emerald-600">{CERTIFICATION_DATA[0].status}</span>
                  </div>
                  <div className="text-slate-600">
                    Domain: {CERTIFICATION_DATA[0].category} · {CERTIFICATION_DATA[0].issuingOrganization}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Upload / Replace Tab */
            <div className="max-w-xl mx-auto p-6 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Replace or Upload Custom Resume File
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  You can upload your own customized PDF or Word document resume. The Download Resume button will serve your file directly.
                </p>
              </div>

              {uploadNotice && (
                <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-700 dark:text-emerald-300">
                  ✓ Custom resume successfully loaded!
                </div>
              )}

              {customFile && (
                <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    <FileText className="w-4 h-4 text-blue-500" />
                    <span className="font-semibold text-slate-900 dark:text-white">{customFile.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      setCustomFile(null);
                      localStorage.removeItem('ajay_custom_resume_info');
                    }}
                    className="text-xs text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              )}

              <div className="p-8 border-2 border-dashed border-slate-300 dark:border-white/15 rounded-xl text-center space-y-3">
                <Upload className="w-8 h-8 text-blue-500 mx-auto" />
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Select a resume file to upload (.pdf, .docx)
                </div>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  className="text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-500 cursor-pointer"
                />
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0B0D12]">
          <div className="text-xs text-slate-500">
            Available in HTML/PDF and Print Formats
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-white/5 border border-slate-300 dark:border-white/15 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={downloadResumeFile}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
