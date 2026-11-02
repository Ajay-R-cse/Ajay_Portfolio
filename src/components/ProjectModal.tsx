import React, { useState } from 'react';
import {
  X,
  Github,
  Play,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Database,
  ExternalLink,
  Plus,
  RefreshCw,
  Receipt,
  Smile,
  Frown,
  Meh,
  Moon
} from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  initialTab?: 'details' | 'demo';
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  initialTab = 'details',
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'demo'>(initialTab);

  // State for Mental Health Simulator demo
  const [journalText, setJournalText] = useState(
    'Had a productive engineering lab session today. Worked on database indexing in MySQL and collaborated with team members on debugging query latency.'
  );
  const [selectedMood, setSelectedMood] = useState<'happy' | 'neutral' | 'stressed'>('happy');
  const [sleepHours, setSleepHours] = useState<number>(7.5);
  const [analyzedResult, setAnalyzedResult] = useState<{
    sentiment: string;
    score: number;
    insight: string;
  } | null>({
    sentiment: 'Positive & Focused',
    score: 84,
    insight: 'Strong productive momentum. High intellectual engagement with healthy sleep hygiene correlates with stable emotional energy.'
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // State for Hotel Billing Simulator demo
  const [selectedTable, setSelectedTable] = useState('Table 03');
  const [orderItems, setOrderItems] = useState<Array<{ id: number; name: string; price: number; qty: number }>>([
    { id: 1, name: 'Special South Indian Thali', price: 180, qty: 2 },
    { id: 2, name: 'Filter Coffee', price: 40, qty: 2 },
    { id: 3, name: 'Masala Dosa', price: 90, qty: 1 }
  ]);
  const [paymentMethod, setPaymentMethod] = useState<'Cash' | 'UPI' | 'Card'>('UPI');
  const [billGenerated, setBillGenerated] = useState(false);

  if (!project) return null;

  const handleSimulateNLP = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      let sentiment = 'Positive & Focused';
      let score = 85;
      let insight = 'Balanced emotional state with proactive problem-solving attitude.';

      if (journalText.toLowerCase().includes('tired') || journalText.toLowerCase().includes('stress') || selectedMood === 'stressed') {
        sentiment = 'Fatigued / Elevated Stress';
        score = 42;
        insight = 'Linguistic markers show cognitive load and fatigue. Recommended: schedule a 15-minute screen-free break and maintain regular sleep schedule.';
      } else if (journalText.toLowerCase().includes('great') || journalText.toLowerCase().includes('happy') || selectedMood === 'happy') {
        sentiment = 'High Optimism & Vitality';
        score = 92;
        insight = 'Positive affective valence detected. Strong correlation with adequate rest and task accomplishments.';
      }

      setAnalyzedResult({ sentiment, score, insight });
      setIsAnalyzing(false);
    }, 450);
  };

  const handleUpdateQty = (id: number, delta: number) => {
    setOrderItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as any
    );
  };

  const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const gstRate = 0.05; // 5% GST
  const gstAmount = Math.round(subtotal * gstRate);
  const grandTotal = subtotal + gstAmount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-left">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0B0D12]">
          <div>
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {project.category} Showcase
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {/* View Switcher Tabs */}
            <div className="flex items-center gap-1 p-1 bg-slate-200 dark:bg-white/5 rounded-lg text-xs font-medium">
              <button
                onClick={() => setActiveTab('details')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  activeTab === 'details'
                    ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Deep Dive Specs
              </button>
              <button
                onClick={() => setActiveTab('demo')}
                className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                  activeTab === 'demo'
                    ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Play className="w-3 h-3 fill-current" />
                Interactive Simulation
              </button>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'details' ? (
            <div className="space-y-6">
              {/* Overview & Problem Statement */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Application Overview
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    Problem Statement Solved
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Engineered Feature Architecture
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50/80 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Technology Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* System Architecture */}
              {project.architecture && (
                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Technical Implementation Highlights
                  </div>
                  <div className="space-y-2">
                    {project.architecture.map((arch, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                      >
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{arch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Interactive Simulation Tab */
            <div>
              {project.demoType === 'mental-health' ? (
                /* Mental Health Journal Simulator */
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20">
                    <div className="text-xs font-semibold uppercase text-blue-400">Live Simulator</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                      Journal NLP Sentiment & Insight Engine
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                      Type a journal entry and test how the Stanford CoreNLP and Google Gemini insight pipeline analyzes sentiment and emotional trajectory.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Input Side */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Today's Reflection / Journal Entry:
                        </label>
                        <textarea
                          rows={4}
                          value={journalText}
                          onChange={(e) => setJournalText(e.target.value)}
                          className="w-full p-3 text-xs rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Self-Reported Mood:
                          </label>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => setSelectedMood('happy')}
                              className={`flex-1 p-2 rounded-lg border text-xs flex items-center justify-center gap-1 ${
                                selectedMood === 'happy'
                                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400'
                                  : 'border-slate-200 dark:border-white/10'
                              }`}
                            >
                              <Smile className="w-4 h-4" /> Good
                            </button>
                            <button
                              type="button"
                              onClick={() => setSelectedMood('neutral')}
                              className={`flex-1 p-2 rounded-lg border text-xs flex items-center justify-center gap-1 ${
                                selectedMood === 'neutral'
                                  ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400'
                                  : 'border-slate-200 dark:border-white/10'
                              }`}
                            >
                              <Meh className="w-4 h-4" /> Neutral
                            </button>
                            <button
                              type="button"
                              onClick={() => setSelectedMood('stressed')}
                              className={`flex-1 p-2 rounded-lg border text-xs flex items-center justify-center gap-1 ${
                                selectedMood === 'stressed'
                                  ? 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400'
                                  : 'border-slate-200 dark:border-white/10'
                              }`}
                            >
                              <Frown className="w-4 h-4" /> Stressed
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1 flex items-center justify-between">
                            <span>Sleep Duration:</span>
                            <span className="font-mono text-blue-500 font-bold">{sleepHours} hrs</span>
                          </label>
                          <input
                            type="range"
                            min="3"
                            max="11"
                            step="0.5"
                            value={sleepHours}
                            onChange={(e) => setSleepHours(parseFloat(e.target.value))}
                            className="w-full accent-blue-600 cursor-pointer"
                          />
                        </div>
                      </div>

                      <button
                        onClick={handleSimulateNLP}
                        disabled={isAnalyzing}
                        className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                      >
                        {isAnalyzing ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>Processing NLP Model...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4" />
                            <span>Run AI & Sentiment Analysis</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Result Side */}
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-white/10 space-y-4">
                      <div className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
                        Analysis Output
                      </div>

                      {analyzedResult && (
                        <div className="space-y-4 text-xs">
                          <div className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-[#0B0D12] border border-slate-200 dark:border-white/10">
                            <div>
                              <div className="text-slate-400 text-[11px]">NLP Polarity Verdict</div>
                              <div className="font-bold text-slate-900 dark:text-white mt-0.5">
                                {analyzedResult.sentiment}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-slate-400 text-[11px]">Vitality Index</div>
                              <div className="font-mono text-emerald-500 font-bold text-base">
                                {analyzedResult.score}/100
                              </div>
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 space-y-1">
                            <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold text-[11px]">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>Gemini AI Cognitive Insight</span>
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                              {analyzedResult.insight}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 text-[11px] text-slate-500">
                            <Moon className="w-3.5 h-3.5 text-indigo-400" />
                            <span>Sleep correlation: {sleepHours >= 7 ? 'Optimal regenerative rest' : 'Suboptimal sleep detected'}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                /* Hotel Billing Simulator */
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900/20 to-emerald-900/20 border border-blue-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold uppercase text-blue-400">Live POS Simulator</div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                        Restaurant Point-of-Sale & Table Management
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                        Select tables, update quantities, and test backend calculation with 5% GST and payment logging.
                      </p>
                    </div>

                    {/* Table Selector */}
                    <div className="flex items-center gap-2">
                      {['Table 01', 'Table 02', 'Table 03', 'Table 04'].map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTable(t)}
                          className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                            selectedTable === t
                              ? 'bg-blue-600 text-white font-bold'
                              : 'bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Active Order Items */}
                    <div className="md:col-span-7 space-y-3">
                      <div className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 flex justify-between items-center">
                        <span>Active Order: {selectedTable}</span>
                        <span>{orderItems.length} items</span>
                      </div>

                      <div className="space-y-2">
                        {orderItems.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-white/10"
                          >
                            <div>
                              <div className="text-xs font-bold text-slate-900 dark:text-white">{item.name}</div>
                              <div className="text-[11px] text-slate-400 font-mono">₹{item.price} each</div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1.5 bg-slate-200 dark:bg-white/5 rounded-lg px-2 py-1">
                                <button
                                  onClick={() => handleUpdateQty(item.id, -1)}
                                  className="w-5 h-5 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300 hover:text-red-500"
                                >
                                  -
                                </button>
                                <span className="text-xs font-mono font-bold w-4 text-center text-slate-900 dark:text-white">
                                  {item.qty}
                                </span>
                                <button
                                  onClick={() => handleUpdateQty(item.id, 1)}
                                  className="w-5 h-5 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300 hover:text-emerald-500"
                                >
                                  +
                                </button>
                              </div>
                              <div className="text-xs font-mono font-bold text-slate-900 dark:text-white w-14 text-right">
                                ₹{item.price * item.qty}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Quick Add Menu Item */}
                      <button
                        onClick={() => {
                          const newItemId = Date.now();
                          setOrderItems((prev) => [
                            ...prev,
                            { id: newItemId, name: 'Paneer Butter Masala', price: 160, qty: 1 }
                          ]);
                        }}
                        className="w-full py-2 border border-dashed border-slate-300 dark:border-white/15 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 hover:border-blue-500 hover:text-blue-500 flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" /> Add Paneer Butter Masala (₹160)
                      </button>
                    </div>

                    {/* Bill Receipt Calculation */}
                    <div className="md:col-span-5 p-4 rounded-xl bg-slate-50 dark:bg-[#161B26] border border-slate-200 dark:border-white/10 flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase">
                          <Receipt className="w-3.5 h-3.5 text-blue-500" />
                          <span>Bill Summary & GST</span>
                        </div>

                        <div className="space-y-2 text-xs pt-1 border-t border-slate-200 dark:border-white/10">
                          <div className="flex justify-between text-slate-600 dark:text-slate-400">
                            <span>Subtotal</span>
                            <span className="font-mono">₹{subtotal}</span>
                          </div>
                          <div className="flex justify-between text-slate-600 dark:text-slate-400">
                            <span>GST (5%)</span>
                            <span className="font-mono">₹{gstAmount}</span>
                          </div>
                          <div className="flex justify-between font-bold text-slate-900 dark:text-white pt-2 border-t border-slate-200 dark:border-white/10 text-sm">
                            <span>Grand Total</span>
                            <span className="font-mono text-emerald-500">₹{grandTotal}</span>
                          </div>
                        </div>

                        {/* Payment Selection */}
                        <div className="pt-2">
                          <label className="block text-[11px] font-medium text-slate-400 mb-1.5">Payment Method:</label>
                          <div className="grid grid-cols-3 gap-1.5">
                            {(['UPI', 'Cash', 'Card'] as const).map((method) => (
                              <button
                                key={method}
                                onClick={() => setPaymentMethod(method)}
                                className={`py-1.5 text-xs rounded-md font-medium transition-colors ${
                                  paymentMethod === method
                                    ? 'bg-blue-600 text-white font-bold'
                                    : 'bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10'
                                }`}
                              >
                                {method}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        {billGenerated ? (
                          <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-700 dark:text-emerald-300 text-center font-medium">
                            ✓ Bill Generated & Logged via {paymentMethod}!
                          </div>
                        ) : (
                          <button
                            onClick={() => {
                              setBillGenerated(true);
                              setTimeout(() => setBillGenerated(false), 3000);
                            }}
                            className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-colors flex items-center justify-center gap-1.5"
                          >
                            <Receipt className="w-3.5 h-3.5" />
                            <span>Complete & Print Bill (₹{grandTotal})</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0B0D12]">
          <div className="text-xs text-slate-400">
            Engineered by Ajay · {project.technologies.slice(0, 3).join(', ')}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-blue-500 border border-slate-300 dark:border-white/15 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Code</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
