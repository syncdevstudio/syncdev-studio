import { motion } from "motion/react";
import {
  ArrowRight,
  Code,
  Sparkles,
  Terminal,
  ArrowDownCircle,
} from "lucide-react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8 bg-transparent"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Hand: High-level copywriting */}
        <div
          className="lg:col-span-7 flex flex-col space-y-6 text-left"
          id="hero-copy-wrap"
        >
          {/* Subtle Dev Accent Badge */}
          <motion.div
            id="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="self-start inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-brand-cyan"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-mono tracking-wider uppercase font-semibold text-[10px]">
              &lt; HIGH-TECH DESIGN & DEV STUDIO &gt;
            </span>
          </motion.div>

          {/* Strong Primary Headline with custom gradients */}
          <motion.h1
            id="hero-headline"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.05]"
          >
            Synchronizing <br />
            <span className="text-gradient-cyan-blue">Ideas</span> into <br />
            Digital Reality<span className="text-brand-cyan">.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            id="hero-subheadline"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            Kami menggabungkan estetika UI/UX premium kelas dunia dengan
            efisiensi rekayasa kode modular (React, Vite, Node) untuk
            menyinkronkan visi bisnis Anda menjadi platform digital yang
            berdampak nyata.
          </motion.p>

          {/* CTA Button Handlers */}
          <motion.div
            id="hero-cta-group"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4"
          >
            <button
              id="hero-cta-primary"
              onClick={() => onNavigate("contact")}
              className="group relative flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-brand-cyan/20 transition-all cursor-pointer font-sans active:scale-98"
            >
              <span>Mulai Proyek</span>
              <ArrowRight className="w-4.5 h-4.5 ml-2 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              id="hero-cta-secondary"
              onClick={() => onNavigate("portfolio")}
              className="flex items-center justify-center px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-brand-cyan text-sm font-semibold rounded-full transition-all cursor-pointer font-sans active:scale-98"
            >
              <span>Lihat Portfolio</span>
              <Code className="w-4.5 h-4.5 ml-2 text-slate-400 group-hover:text-brand-cyan" />
            </button>
          </motion.div>

          {/* Subtle metrics footer representing "Studio" capability */}
          <motion.div
            id="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5 max-w-lg"
          >
            <div>
              <span className="block text-2xl font-mono font-bold text-white">
                99%
              </span>
              <span className="text-xs text-slate-500 font-sans">
                Klien Puas
              </span>
            </div>
            <div>
              <span className="block text-2xl font-mono font-bold text-gradient-cyan-blue">
                40+
              </span>
              <span className="text-xs text-slate-500 font-sans">
                Project Rilis
              </span>
            </div>
            <div>
              <span className="block text-2xl font-mono font-bold text-white">
                100%
              </span>
              <span className="text-xs text-slate-500 font-sans">
                Sync Accuracy
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Hand: Dual pane 'Design & Developer Sync' Interactive Simulation */}
        <motion.div
          id="hero-scene-wrap"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative w-full flex justify-center items-center mt-6 lg:mt-0"
        >
          {/* Background Ambient Glow */}
          <div className="absolute w-72 h-72 bg-brand-cyan/10 rounded-full blur-[80px] -z-10 animate-pulse-slow" />
          <div className="absolute w-60 h-60 bg-brand-blue/10 rounded-full blur-[80px] -z-10 animate-float translate-x-10 translate-y-10" />

          {/* The Sync Card Frame */}
          <div
            className="w-full max-w-md bg-white/[0.02]/[0.03] bg-white/[0.02] backdrop-blur-md rounded-2xl border border-white/5 p-5 shadow-2xl relative overflow-hidden"
            id="sync-panel"
          >
            {/* Visual Indicator lines */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent animate-pulse" />

            {/* Simulated artboard connector label */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
                <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase">
                  SYSTEM ENGINE INJECTOR
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                status: synchronized
              </span>
            </div>

            {/* Split UI panels with center sync nodes */}
            <div className="space-y-4">
              {/* Top/Left Pane: UI/UX Studio Artboard Mockup */}
              <div className="p-3.5 bg-[#0A0A0B]/85 rounded-xl border border-white/5 relative group overflow-hidden">
                <div className="absolute top-0.5 right-2 text-[9px] font-mono text-brand-cyan/40">
                  &lt;DESIGN&gt;
                </div>
                <h4 className="text-xs font-sans font-semibold text-slate-300 mb-2">
                  Artboard: Bento Cards Workspace
                </h4>

                {/* Visual Glassmorphic elements represent 'Studio' element */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-10 rounded-lg bg-white/5 border border-white/5 p-1 flex flex-col justify-between">
                    <span className="w-2.5 h-2.5 rounded bg-brand-cyan/40" />
                    <span className="w-8 h-1 bg-white/10 rounded" />
                  </div>
                  <div className="col-span-2 h-10 rounded-lg bg-gradient-to-tr from-brand-blue/15 to-brand-cyan/15 border border-brand-cyan/25 p-1 flex flex-col justify-between relative overflow-hidden">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan/60" />
                    <div className="space-y-0.5">
                      <span className="block w-12 h-1 bg-white/40 rounded" />
                      <span className="block w-6 h-1 bg-white/20 rounded" />
                    </div>
                  </div>
                  <div className="col-span-2 h-8 rounded-lg bg-white/5 border border-white/5 p-1 flex items-center justify-between">
                    <span className="block w-10 h-1 bg-white/10 rounded" />
                    <span className="w-3.5 h-3.5 rounded-full bg-brand-blue/30" />
                  </div>
                  <div className="h-8 rounded-lg border border-dashed border-white/10 p-1 flex items-center justify-center">
                    <span className="text-[8px] font-mono text-slate-500">
                      + widget
                    </span>
                  </div>
                </div>
              </div>

              {/* Central Pulsating Connector Link showing high-tech sync */}
              <div className="flex items-center justify-center py-1">
                <div className="h-6 w-[2px] bg-gradient-to-b from-brand-cyan via-brand-blue/60 to-white/10 relative">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-cyan rounded-full border border-white/25 animate-pulse" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-blue rounded-full border border-white/25 animate-pulse" />
                </div>
                <div className="px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-slate-400 flex items-center space-x-1 mx-2">
                  <Code className="w-2.5 h-2.5 text-brand-cyan" />
                  <span>sync (DesignToTailwind)</span>
                </div>
                <div className="h-6 w-[2px] bg-gradient-to-b from-white/10 via-brand-blue/60 to-brand-blue relative">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/10 rounded-full border border-white/25" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-blue rounded-full border border-white/25 animate-pulse" />
                </div>
              </div>

              {/* Bottom/Right Pane: Dev Code Output Terminal */}
              <div className="p-3.5 bg-[#0A0A0B] rounded-xl border border-white/5 relative font-mono text-[10px] text-slate-400 overflow-hidden shadow-inner">
                <div className="absolute top-0.5 right-2 text-[9px] text-brand-blue/40">
                  &lt;CODE&gt;
                </div>
                <div className="flex items-center space-x-1 text-slate-500 border-b border-white/5 pb-1.5 mb-2">
                  <Terminal className="w-3 h-3 text-brand-blue" />
                  <span>SyncCard.tsx</span>
                </div>
                <div className="space-y-1">
                  <div>
                    <span className="text-slate-500">const</span>{" "}
                    <span className="text-brand-cyan">SyncWidget</span> = (
                    <span className="text-slate-500">props</span>) =&gt; &#123;
                  </div>
                  <div className="pl-3">
                    <span className="text-slate-500">return</span> (
                  </div>
                  <div className="pl-6 text-brand-blue">
                    &lt;<span className="text-brand-cyan">div</span> class=
                    <span className="text-brand-cyan/70">
                      "glass-grid glow-hover"
                    </span>
                    &gt;
                  </div>
                  <div className="pl-9 text-slate-300">
                    &lt;<span className="text-[#2dd4bf]">Sparkle</span>{" "}
                    delay=&#123;100&#125; /&gt;
                  </div>
                  <div className="pl-6 text-brand-blue">
                    &lt;/<span className="text-brand-cyan">div</span>&gt;
                  </div>
                  <div className="pl-3">);</div>
                  <div>&#125;</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bounce Down indicator to encourage scrolling */}
      <div
        id="scroll-down-arrow"
        onClick={() => onNavigate("services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-slate-500 hover:text-white transition-colors animate-bounce flex flex-col items-center space-y-1 z-10"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748b]">
          explore services
        </span>
        <ArrowDownCircle className="w-4 h-4" />
      </div>
    </section>
  );
}
