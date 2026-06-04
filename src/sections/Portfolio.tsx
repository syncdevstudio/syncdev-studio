import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Briefcase,
  Calendar,
  User,
  Tag,
  ChevronRight,
  X,
  Layers,
  Eye,
  Code2,
  Sparkles,
  Copy,
  Check,
  CornerDownRight,
} from "lucide-react";
import { PORTFOLIO } from "../constants";
import { PortfolioItem, ProjectStepContent } from "../types";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "web" | "uiux" | "digital-solution"
  >("all");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(
    null,
  );
  const [activeStepTab, setActiveStepTab] = useState<
    "wireframe" | "prototype" | "code"
  >("wireframe");
  const [copiedCodeCode, setCopiedCodeCode] = useState(false);
  const [demoSyncResult, setDemoSyncResult] = useState<string | null>(null);

  const filterLinks: { label: string; value: typeof activeCategory }[] = [
    { label: "Semua Hasil Karya", value: "all" },
    { label: "Web Apps", value: "web" },
    { label: "UI/UX Systems", value: "uiux" },
    { label: "Digital Solutions", value: "digital-solution" },
  ];

  const filteredProjects = PORTFOLIO.filter((project) =>
    activeCategory === "all" ? true : project.category === activeCategory,
  );

  const handleCopyCode = (codeText?: string) => {
    if (!codeText) return;
    navigator.clipboard.writeText(codeText);
    setCopiedCodeCode(true);
    setTimeout(() => setCopiedCodeCode(false), 2000);
  };

  const currentStepData = selectedProject
    ? (selectedProject.steps[activeStepTab] as ProjectStepContent)
    : null;

  return (
    <section
      id="portfolio"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
          id="portfolio-header"
        >
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-brand-cyan mb-4"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span className="font-mono tracking-wider uppercase font-semibold text-[10px]">
                Case Studies
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight leading-none"
            >
              Integrasi <span className="text-gradient">Konsep ke Kode</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl"
            >
              Klik salah satu karya kami untuk mendalami proses sinkronisasinya
              secara lengkap mulai dari Wireframe UX, Prototype Visual, hingga
              Codebase murni.
            </motion.p>
          </div>

          {/* Filtering Widgets */}
          <div
            className="flex flex-wrap gap-1.5 mt-8 md:mt-0 justify-start"
            id="portfolio-filters"
          >
            {filterLinks.map((link) => (
              <button
                key={link.value}
                id={`filter-btn-${link.value}`}
                onClick={() => setActiveCategory(link.value)}
                className={`px-4 py-2 text-xs font-semibold rounded-full font-sans transition-all duration-300 cursor-pointer ${
                  activeCategory === link.value
                    ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-lg shadow-brand-cyan/10"
                    : "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                id={`portfolio-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer bg-white/[0.02] rounded-2xl border border-white/5 overflow-hidden hover:border-brand-cyan/35 transition-all duration-300"
                onClick={() => {
                  setSelectedProject(project);
                  setActiveStepTab("wireframe");
                  setDemoSyncResult(null);
                }}
              >
                {/* Image Mockup Wrapper */}
                <div className="relative h-56 overflow-hidden bg-[#0A0A0B]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay hover shield */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-[#0A0A0B]/95 border border-white/5 text-brand-cyan">
                    {project.category}
                  </span>

                  {/* Eye look marker */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-4 py-2 rounded-full bg-[#0A0A0B]/90 border border-white/10 text-xs font-sans text-white font-semibold flex items-center space-x-1.5 shadow-2xl">
                      <Eye className="w-4 h-4 text-brand-cyan" />
                      <span>Inspect SyncDev Process</span>
                    </div>
                  </div>
                </div>

                {/* Info Metadata Block */}
                <div className="p-6 space-y-3 text-left">
                  <div className="flex items-center space-x-2 text-slate-500 text-xs">
                    <span className="font-sans font-semibold text-slate-400">
                      {project.client}
                    </span>
                    <span>•</span>
                    <span className="font-mono">{project.timeline}</span>
                  </div>

                  <h3 className="font-sans font-bold text-lg text-white group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-sans text-slate-400 bg-white/5 px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>{" "}
        {/* Process-Aware SyncDev Viewer Interactive Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              id="portfolio-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto bg-[#0A0A0B]/90 backdrop-blur-md"
            >
              {/* Outer clicking closer */}
              <div
                className="absolute inset-0"
                onClick={() => {
                  setSelectedProject(null);
                  setDemoSyncResult(null);
                }}
              />

              {/* Main Modal container layout */}
              <motion.div
                id="portfolio-modal-body"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 30 }}
                className="relative bg-[#0A0A0B] rounded-2xl border border-white/5 max-w-4xl w-full select-none overflow-hidden my-8 z-15 shadow-2xl shadow-black/80"
              >
                {/* Header Metadata */}
                <div className="p-6 bg-white/[0.01] border-b border-white/5 flex items-center justify-between text-left">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                      Syncdev case study & process
                    </span>
                    <h3 className="text-xl font-sans font-bold text-white flex items-center">
                      {selectedProject.title}
                      <span className="ml-2.5 px-2 py-0.5 text-[9px] font-mono text-slate-400 bg-white/5 border border-white/10 rounded font-normal">
                        {selectedProject.client}
                      </span>
                    </h3>
                  </div>
                  <button
                    id="modal-close-btn"
                    onClick={() => {
                      setSelectedProject(null);
                      setDemoSyncResult(null);
                    }}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/5"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Active Synchronization Phase Switches */}
                <div className="grid grid-cols-3 bg-white/[0.01] border-b border-white/5">
                  <button
                    id="tab-step-wireframe"
                    onClick={() => {
                      setActiveStepTab("wireframe");
                      setDemoSyncResult(null);
                    }}
                    className={`py-4 text-xs font-semibold font-sans flex items-center justify-center space-x-2 border-b-2 transition-all cursor-pointer ${
                      activeStepTab === "wireframe"
                        ? "text-brand-cyan border-brand-cyan bg-white/5"
                        : "text-slate-500 border-transparent hover:text-slate-300"
                    }`}
                  >
                    <Layers className="w-4 h-4" />
                    <span className="hidden sm:inline">Stage 1: Wireframe</span>
                    <span className="sm:hidden">1: Wireframe</span>
                  </button>

                  <button
                    id="tab-step-prototype"
                    onClick={() => {
                      setActiveStepTab("prototype");
                      setDemoSyncResult(null);
                    }}
                    className={`py-4 text-xs font-semibold font-sans flex items-center justify-center space-x-2 border-b-2 transition-all cursor-pointer ${
                      activeStepTab === "prototype"
                        ? "text-brand-cyan border-brand-cyan bg-white/5"
                        : "text-slate-500 border-transparent hover:text-slate-300"
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span className="hidden sm:inline">Stage 2: Prototype</span>
                    <span className="sm:hidden">2: Prototype</span>
                  </button>

                  <button
                    id="tab-step-code"
                    onClick={() => {
                      setActiveStepTab("code");
                      setDemoSyncResult(null);
                    }}
                    className={`py-4 text-xs font-semibold font-sans flex items-center justify-center space-x-2 border-b-2 transition-all cursor-pointer ${
                      activeStepTab === "code"
                        ? "text-brand-cyan border-brand-cyan bg-white/5"
                        : "text-slate-500 border-transparent hover:text-slate-300"
                    }`}
                  >
                    <Code2 className="w-4 h-4" />
                    <span className="hidden sm:inline">
                      Stage 3: Production Code
                    </span>
                    <span className="sm:hidden">3: Code</span>
                  </button>
                </div>

                {/* Interactive Phase Exhibit Box */}
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 text-left max-h-[60vh] overflow-y-auto">
                  {/* Explanatory Info on left column */}
                  <div className="md:col-span-5 space-y-4">
                    <h4 className="text-base font-sans font-bold text-white flex items-center">
                      <ChevronRight className="w-4 h-4 text-brand-cyan mr-1.5 shrink-0" />
                      {currentStepData?.title}
                    </h4>

                    <p className="text-sm font-sans text-slate-400 leading-relaxed">
                      {currentStepData?.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-[#64748b]">
                        Deliverables kunci :
                      </span>
                      <ul className="space-y-1.5">
                        {currentStepData?.deliverables.map((del, dIdx) => (
                          <li
                            key={dIdx}
                            className="text-xs text-slate-300 flex items-start"
                          >
                            <CornerDownRight className="w-3.5 h-3.5 text-brand-blue mr-2 shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Renderable Exhibit Representation on right column */}
                  <div className="md:col-span-7 bg-[#0A0A0B] rounded-xl border border-white/5 p-4 font-sans relative overflow-hidden flex flex-col justify-between min-h-[240px]">
                    {/* Abstract Blueprint Grid Backdrop (for Stage 1 & 2) */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px]" />

                    {/* WIREFRAME layout visualizer representing low-fi blueprint */}
                    {activeStepTab === "wireframe" &&
                      currentStepData?.wireframeLayout && (
                        <div className="relative z-10 w-full flex flex-col space-y-2 font-mono text-[9px] text-slate-400 py-2 h-full justify-between">
                          <div className="w-full h-7 border border-dashed border-white/10 rounded flex items-center px-2 bg-white/5 relative">
                            <span className="absolute top-0 right-1 text-[7px] text-slate-500">
                              [HEADER]
                            </span>
                            <span className="truncate">
                              {currentStepData.wireframeLayout.header}
                            </span>
                          </div>

                          <div className="flex space-x-2 flex-grow min-h-[90px]">
                            {currentStepData.wireframeLayout.sidebar && (
                              <div className="w-1/3 border border-dashed border-white/10 rounded flex items-center justify-center p-1.5 bg-white/5 text-center relative">
                                <span className="absolute top-0 right-1 text-[7px] text-slate-500">
                                  [SIDEBAR]
                                </span>
                                <span className="text-[8px] leading-tight mt-1">
                                  {currentStepData.wireframeLayout.sidebar}
                                </span>
                              </div>
                            )}
                            <div
                              className={`border border-dashed border-white/10 rounded flex items-center justify-center p-3 bg-white/5 text-center relative ${selectedProject.steps.wireframe.wireframeLayout?.sidebar ? "w-2/3" : "w-full"}`}
                            >
                              <span className="absolute top-0 right-1 text-[7px] text-slate-500">
                                [BODY CANVAS]
                              </span>
                              <span className="text-[10px] text-zinc-300 font-semibold">
                                {currentStepData.wireframeLayout.body}
                              </span>
                            </div>
                          </div>

                          <div className="w-full h-6 border border-dashed border-white/10 rounded flex items-center justify-center bg-white/5 relative">
                            <span className="absolute top-0 right-1 text-[7px] text-slate-500">
                              [FOOTER]
                            </span>
                            <span>
                              {currentStepData.wireframeLayout.footer}
                            </span>
                          </div>
                        </div>
                      )}

                    {/* INTERACTIVE PROTOTYPE visualizer with a live pulsing simulated interaction node */}
                    {activeStepTab === "prototype" && (
                      <div className="relative z-10 h-full w-full flex flex-col justify-between items-center py-6 text-center select-none">
                        <div className="space-y-1">
                          <span className="block text-xs text-brand-cyan uppercase tracking-wider font-mono">
                            Interactive Demo Node
                          </span>
                          <span className="block text-[10px] text-slate-400 font-sans">
                            Arahkan kursor dan klik pemicu untuk menyinkronkan
                            state transfer
                          </span>
                        </div>

                        {/* Interactive state button */}
                        <div className="my-4 relative flex flex-col items-center">
                          {!demoSyncResult && (
                            <div className="absolute -inset-4 bg-brand-cyan/20 rounded-full blur-md animate-ping" />
                          )}
                          <button
                            id="demo-sync-trigger"
                            className="relative px-6 py-2.5 rounded-full bg-white/5 border border-brand-cyan text-[10px] font-mono font-semibold text-white cursor-pointer active:scale-95 transition-all shadow-xl shadow-brand-cyan/10"
                            onClick={() => {
                              setDemoSyncResult(
                                "Sinkronisasi design tokens ke komponen React berhasil!",
                              );
                            }}
                          >
                            🖱️ KLIK UNTUK SYNCHRONIZE
                          </button>
                          {demoSyncResult && (
                            <motion.div
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-3 text-[10px] font-sans font-medium text-emerald-400 px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded"
                            >
                              ✅ {demoSyncResult}
                            </motion.div>
                          )}
                        </div>

                        <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-mono">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Latency Sync Rate: 0.12ms (Ideal)</span>
                        </div>
                      </div>
                    )}

                    {/* CODE BUNDLE visualizer styled beautifully with formatting */}
                    {activeStepTab === "code" &&
                      currentStepData?.codeSnippet && (
                        <div className="relative z-10 w-full flex flex-col h-full font-mono text-[10px] text-slate-300">
                          {/* Copy trigger header */}
                          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
                            <span className="text-slate-500">
                              Language: TypeScript JSX
                            </span>
                            <button
                              id="copy-code-snippet-btn"
                              onClick={() =>
                                handleCopyCode(currentStepData.codeSnippet)
                              }
                              className="px-2.5 py-1 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-slate-400 hover:text-white transition-all flex items-center space-x-1 cursor-pointer text-[9px]"
                            >
                              {copiedCodeCode ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                                  <span className="text-emerald-400">
                                    Copied!
                                  </span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" />
                                  <span>Copy Code</span>
                                </>
                              )}
                            </button>
                          </div>
                          {/* Code snippet scrollable wrap */}
                          <pre className="overflow-x-auto text-[10px] leading-normal text-left max-h-[160px] whitespace-pre p-2 bg-[#0A0A0B] rounded border border-white/5 text-brand-cyan/70">
                            <code>{currentStepData.codeSnippet}</code>
                          </pre>
                        </div>
                      )}
                  </div>
                </div>

                {/* Footer buttons inside Modal */}
                <div className="p-4 bg-white/[0.01] border-t border-white/5 flex items-center justify-end">
                  <button
                    id="btn-modal-close-foot"
                    onClick={() => {
                      setSelectedProject(null);
                      setDemoSyncResult(null);
                    }}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-semibold text-slate-300 transition-colors cursor-pointer"
                  >
                    Kembali
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
