import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  ExternalLink,
  Eye,
  FileCheck2,
  X,
  Calendar,
  Building,
  ShieldCheck,
  Edit3,
  Save,
  RotateCcw
} from 'lucide-react';
import { CERTIFICATION_DATA } from '../data/portfolioData';
import { CertificationItem } from '../types/portfolio';

export const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<CertificationItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ajay_portfolio_certifications');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          // ignore
        }
      }
    }
    return CERTIFICATION_DATA;
  });

  const [activeCertificateModal, setActiveCertificateModal] = useState<CertificationItem | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingCert, setEditingCert] = useState<CertificationItem>(certifications[0]);

  const handleSave = () => {
    const updated = certifications.map((c) => (c.id === editingCert.id ? editingCert : c));
    setCertifications(updated);
    localStorage.setItem('ajay_portfolio_certifications', JSON.stringify(updated));
    setIsEditing(false);
  };

  const handleReset = () => {
    setCertifications(CERTIFICATION_DATA);
    setEditingCert(CERTIFICATION_DATA[0]);
    localStorage.removeItem('ajay_portfolio_certifications');
    setIsEditing(false);
  };

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Credentials & Verified Learning
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-heading">
              Certifications
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              Verified technical credentials demonstrating proficiency in modern database architecture and software tooling.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {!isEditing ? (
              <button
                onClick={() => {
                  setEditingCert(certifications[0]);
                  setIsEditing(true);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Certificate Details</span>
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

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="p-6 sm:p-8 space-y-6">
                {/* Top Badge & Technology */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {/* MongoDB / Database Emblem */}
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C11.5 3 7.5 7.5 7.5 13.5C7.5 17.5 9.5 21 12 24C14.5 21 16.5 17.5 16.5 13.5C16.5 7.5 12.5 3 12 0Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                        {cert.category}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{cert.status}</span>
                  </div>
                </div>

                {/* Organization & Date details */}
                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span><strong>Issuing Organization:</strong> {cert.issuingOrganization}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span><strong>Completion:</strong> {cert.completionDate}</span>
                  </div>
                  {cert.credentialId && (
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                      <span><strong>Credential Identifier:</strong> {cert.credentialId}</span>
                    </div>
                  )}
                </div>

                {/* Key Syllabus / Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-white/10">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Core Competencies Covered
                  </div>
                  <ul className="grid grid-cols-1 gap-1.5">
                    {cert.highlights.map((h, idx) => (
                      <li key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 bg-slate-50 dark:bg-[#0B0D12] border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveCertificateModal(cert)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Certificate Preview</span>
                </button>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Quick Informational Card */}
          <div className="rounded-2xl border border-dashed border-slate-300 dark:border-white/15 p-8 flex flex-col justify-center items-center text-center space-y-3 bg-slate-50/40 dark:bg-white/[0.02]">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Continuous Professional Learning
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Currently preparing for upcoming professional cloud certifications and advanced Spring Boot backend accreditations.
            </p>
          </div>
        </div>

        {/* Certificate Modal View */}
        {activeCertificateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-2xl bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden text-left">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0B0D12]">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    Certificate of Completion
                  </span>
                </div>
                <button
                  onClick={() => setActiveCertificateModal(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Styled Official Certificate Document Presentation */}
              <div className="p-8 bg-slate-100 dark:bg-[#080A0E] flex justify-center">
                <div className="w-full max-w-lg p-8 rounded-xl bg-white dark:bg-[#0F131C] border-4 border-double border-emerald-600/30 text-center space-y-6 shadow-xl">
                  {/* Certificate Top Emblem */}
                  <div className="flex justify-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-500">
                      <Award className="w-8 h-8" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[11px] font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
                      Certificate of Achievement
                    </div>
                    <div className="text-xs text-slate-400">
                      This is to certify that
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white font-heading">
                      Ajay
                    </h3>
                  </div>

                  <div className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    has successfully completed the formal curriculum requirements for
                  </div>

                  <div className="py-2 border-y border-emerald-500/20">
                    <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                      {activeCertificateModal.title}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Domain: {activeCertificateModal.category} ({activeCertificateModal.technology})
                    </div>
                  </div>

                  <div className="grid grid-cols-2 text-left text-[11px] text-slate-500 pt-2 border-t border-slate-200 dark:border-white/10">
                    <div>
                      <div><strong>Organization:</strong> {activeCertificateModal.issuingOrganization}</div>
                      <div><strong>Date:</strong> {activeCertificateModal.completionDate}</div>
                    </div>
                    <div className="text-right">
                      <div><strong>Status:</strong> {activeCertificateModal.status}</div>
                      <div><strong>ID:</strong> {activeCertificateModal.credentialId}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-50 dark:bg-[#0B0D12] border-t border-slate-200 dark:border-white/10 flex justify-end">
                <button
                  onClick={() => setActiveCertificateModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
