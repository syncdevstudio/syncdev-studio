import { motion } from "motion/react";
import { Code, Palette, Cpu, Check, ArrowRight } from "lucide-react";
import { SERVICES } from "../constants";

interface ServicesProps {
  onNavigate: (sectionId: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  // Custom Icon Selector mapping
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="w-5 h-5 text-brand-cyan animate-float" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-brand-cyan animate-float" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-brand-cyan animate-float" />;
      default:
        return <Code className="w-5 h-5 text-brand-cyan" />;
    }
  };

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-white/5 overflow-hidden"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-[30%] left-[-10%] w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-24"
          id="services-header"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-brand-cyan mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            <span className="font-mono tracking-wider uppercase font-semibold text-[10px]">
              What We Do
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight"
          >
            Layanan Terpadu untuk <br />
            <span className="text-gradient">Transformasi Digital</span> Anda
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-4 max-w-xl mx-auto"
          >
            SyncDev mengasimilasi wireframe UX bernilai seni dengan code
            engineering modern berstandar enterprise untuk hasil akhir tanpa
            friksi.
          </motion.p>
        </div>

        {/* 3 Main Service Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          id="services-grid"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-cyan/35 transition-all duration-300 overflow-hidden"
            >
              {/* Highlight card back-shimmer */}
              <div className="absolute -inset-1 bg-gradient-to-br from-brand-cyan/[0.03] via-transparent to-brand-blue/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                {/* Header Icon Wrap */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#0A0A0B] border border-white/5 flex items-center justify-center group-hover:border-brand-cyan/40 transition-colors duration-300">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-mono tracking-wider font-semibold text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                    {service.techBadge}
                  </span>
                </div>

                {/* Service Title */}
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-xl text-white group-hover:text-brand-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Checklist Bullet Features */}
                <ul className="space-y-2.5 pt-4 border-t border-white/5">
                  {service.features.map((feat, fidx) => (
                    <li
                      key={fidx}
                      className="flex items-start text-xs text-slate-300"
                    >
                      <Check className="w-3.5 h-3.5 text-brand-cyan mr-2 shrink-0 mt-0.5" />
                      <span className="font-sans leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action trigger footer inside card */}
              <div
                className="relative z-10 pt-8"
                id={`service-action-${service.id}`}
              >
                <button
                  onClick={() => onNavigate("contact")}
                  className="w-full flex items-center justify-between py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
                >
                  <span className="font-sans">Buat Inquiry Proyek</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-cyan group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic decorative Quote or Sub-feature box */}
        <motion.div
          id="services-synergy-banner"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02]/[0.03] bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-xl" />
          <div className="mb-6 md:mb-0 space-y-2 max-w-2xl text-left">
            <h4 className="font-sans font-bold text-lg text-white flex items-center">
              <span className="font-mono text-brand-cyan mr-2">&lt;/&gt;</span>
              Kenapa Memilih Integrasi Paralel Kami?
            </h4>
            <p className="font-sans text-sm text-slate-400 leading-relaxed">
              Dengan mengawinkan perancangan aset grafis dengan penulisan
              arsitektur backend dari hari pertama, kami menghilangkan resiko
              kesalahpahaman visual, mempercepat waktu rilis 2x lipat, dan
              menghemat budget operasional pengembangan.
            </p>
          </div>
          <button
            id="btn-services-consult"
            onClick={() => onNavigate("contact")}
            className="group whitespace-nowrap inline-flex items-center px-5 py-3 bg-white/5 hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-cyan text-white text-xs font-semibold rounded-full border border-white/10 transition-all cursor-pointer font-sans"
          >
            <span>Konsultasi Teknis Gratis</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
