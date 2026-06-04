import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  Terminal,
  MessageSquare,
  Check,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Mail,
  Sparkles,
} from "lucide-react";
import { FAQS } from "../constants";
import { ContactMessage } from "../types";

export function Contact() {
  const [formData, setFormData] = useState<ContactMessage>({
    name: "",
    email: "",
    company: "",
    service: "Web Development",
    budget: "$5,000 - $10,000",
    message: "",
  });

  const [inquiries, setInquiries] = useState<ContactMessage[]>([]);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [responseLog, setResponseLog] = useState<string[]>([]);

  // Local storage initialization for client sandbox
  useEffect(() => {
    const saved = localStorage.getItem("syncdev_inquiries");
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        // ignore
      }
    } else {
      // Inisialisasi dummy log untuk mendemonstrasikan workstation pipa data
      const initialDummy: ContactMessage[] = [
        {
          name: "D'lingga Coffee",
          email: "dlinggacoffee@gmail.com",
          company: "D'lingga Coffee",
          service: "Web Development Coffee Shop",
          budget: "$1,000",
          message:
            "Ingin membuat website untuk menampilkan menu, lokasi, dan cerita unik di balik setiap varian kopi kami. Fokus pada desain yang hangat dan mudah dinavigasi untuk menarik pecinta kopi lokal.",
          sentAt: new Date(Date.now() - 36000000).toISOString(),
        },
      ];
      setInquiries(initialDummy);
      localStorage.setItem("syncdev_inquiries", JSON.stringify(initialDummy));
    }

    setResponseLog([
      "SYSTEM: Workspace channel initializing...",
      "SYSTEM: Latency metrics registered successfully.",
      "CONSOLE: Melacak pipeline SyncDev Studio - Menunggu inquiry baru...",
    ]);
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Harap isi bidang Nama, Email, dan Pesan sebelum mengirim.");
      return;
    }

    setIsSubmitting(true);
    setResponseLog((prev) => [
      ...prev,
      `INCOMING: Menangkap paket sinyal dari ${formData.name}...`,
    ]);

    setTimeout(() => {
      const newInquiry: ContactMessage = {
        ...formData,
        sentAt: new Date().toISOString(),
      };

      const updated = [newInquiry, ...inquiries];
      setInquiries(updated);
      localStorage.setItem("syncdev_inquiries", JSON.stringify(updated));

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Post-submit console logs mimicking high-tech sync operations
      setResponseLog((prev) => [
        ...prev,
        `OK: Paket data ${newInquiry.name} terenkripsi securely!`,
        `COMPILER: Menginisiasi skema SyncDev Concierge Bot untuk ${newInquiry.name}`,
        `BOT CONCIERGE: "Halo ${newInquiry.name}, terima kasih! Data proyek ${newInquiry.service} dengan alokasi budget ${newInquiry.budget} telah tersinkronisasi. Estimasi draf proposal kami kirim ke ${newInquiry.email} dalam 12 jam!"`,
      ]);

      // Reset form variables
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "Web Development",
        budget: "$5,000 - $10,000",
        message: "",
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const clearInquiries = () => {
    localStorage.removeItem("syncdev_inquiries");
    setInquiries([]);
    setResponseLog((prev) => [
      ...prev,
      "SYSTEM: Semua data local log berhasil dibersihkan.",
    ]);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className="text-center max-w-3xl mx-auto mb-16"
          id="contact-header"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-brand-cyan mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="font-mono tracking-wider uppercase font-semibold text-[10px]">
              Get in Touch
            </span>
          </motion.div>

          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Mulai Sinkronisasi{" "}
            <span className="text-gradient">Proyek Anda</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-lg mx-auto">
            Diskusikan kebutuhan rekayasa digital Anda bersama tim arsitek
            SyncDev Studio secara langsung melalu portal interaktif di bawah.
          </p>
        </div>

        {/* Double-Column Layout: Form Port + Admin Console Playground */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24"
          id="contact-gateway"
        >
          {/* Form Side - Left Column */}
          <div
            className="lg:col-span-7 bg-zinc-900/40 backdrop-blur-md rounded-2xl border border-zinc-900 p-6 sm:p-8 text-left"
            id="contact-form-wrap"
          >
            <h3 className="font-sans font-bold text-lg text-white mb-6 flex items-center">
              <Mail className="w-4.5 h-4.5 text-brand-cyan mr-2" />
              Corporate Project Inquiry Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name-input"
                    className="block text-[11px] font-mono tracking-wider text-zinc-400 uppercase font-semibold"
                  >
                    Nama Lengkap *
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Contoh: SyncDev Studio"
                    r-required="true"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-brand-cyan/60 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-brand-cyan/30 transition-all font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="email-input"
                    className="block text-[11px] font-mono tracking-wider text-zinc-400 uppercase font-semibold"
                  >
                    Email Korporat *
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Contoh: syncdevstudio@corp.com"
                    r-required="true"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-brand-cyan/60 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-brand-cyan/30 transition-all font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="company-input"
                    className="block text-[11px] font-mono tracking-wider text-zinc-400 uppercase font-semibold"
                  >
                    Nama Perusahaan / Startup
                  </label>
                  <input
                    id="company-input"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Contoh: PT Inovasi Maju"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-brand-cyan/60 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-brand-cyan/30 transition-all font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="service-select"
                    className="block text-[11px] font-mono tracking-wider text-zinc-400 uppercase font-semibold"
                  >
                    Pilihan Layanan Utama
                  </label>
                  <select
                    id="service-select"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-brand-cyan/60 text-sm text-zinc-300 focus:outline-none focus:ring-1 focus:ring-brand-cyan/30 transition-all font-sans"
                  >
                    <option value="Web Development">
                      Web Apps Development
                    </option>
                    <option value="UI/UX Studio">UI/UX System Studio</option>
                    <option value="Digital Solutions">
                      Custom Digital Solutions
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="block text-[11px] font-mono tracking-wider text-zinc-400 uppercase font-semibold">
                  Alokasi Estimasi Budget (Rupiah/USD)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    "<$2,000",
                    "$2,000 - $5,000",
                    "$5,000 - $10,000",
                    "$10,000+",
                  ].map((bracket) => (
                    <button
                      key={bracket}
                      type="button"
                      id={`budget-opt-${bracket.replace(/\s+/g, "-").replace(/[,$+]/g, "")}`}
                      onClick={() =>
                        setFormData((p) => ({ ...p, budget: bracket }))
                      }
                      className={`py-2.5 px-2 rounded-xl text-xs font-mono border transition-all cursor-pointer ${
                        formData.budget === bracket
                          ? "bg-brand-blue/10 border-brand-cyan text-brand-cyan font-bold"
                          : "bg-zinc-950 border-zinc-800 hover:border-zinc-700 text-zinc-400"
                      }`}
                    >
                      {bracket}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message-input"
                  className="block text-[11px] font-mono tracking-wider text-zinc-400 uppercase font-semibold"
                >
                  Deskripsi Kebutuhan Proyek *
                </label>
                <textarea
                  id="message-input"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Detailkan fungsionalitas, tenggat waktu, dan tujuan bisnis Anda..."
                  r-required="true"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-brand-cyan/60 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-brand-cyan/30 transition-all font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center py-3.5 bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-blue/25 active:scale-98 transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center space-x-2 font-mono text-xs">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>SYNCHRONIZING PACKET TO STUDIO CLOUD...</span>
                  </span>
                ) : submitSuccess ? (
                  <span className="flex items-center space-x-2 font-sans font-bold">
                    <Check className="w-5 h-5 text-emerald-300" />
                    <span>
                      Inquiry Tersinkronisasi! Silakan Lihat Konsol Di Samping
                    </span>
                  </span>
                ) : (
                  <>
                    <span className="font-sans">Kirim Project Brief</span>
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Simulated Developer Workstation Log Terminal - Right Column */}
          <div
            className="lg:col-span-5 flex flex-col space-y-6"
            id="client-console-workspace"
          >
            {/* The Real-Time compiler simulation */}
            <div className="bg-zinc-950 rounded-2xl border border-zinc-900 overflow-hidden text-left shadow-xl flex flex-col h-[280px]">
              {/* Header */}
              <div className="px-4 py-3 bg-zinc-900/60 border-b border-zinc-900/80 flex items-center justify-between">
                <div className="flex items-center space-x-1.5 font-mono text-[10px] text-zinc-400">
                  <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>syncdev-workstation-v2.sh</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                </div>
              </div>

              {/* Console log outputs */}
              <div className="p-4 overflow-y-auto font-mono text-[10px] leading-relaxed text-zinc-400 bg-zinc-950/80 flex-grow space-y-1.5 text-left select-none">
                {responseLog.map((logLine, idx) => (
                  <div
                    key={idx}
                    className={
                      logLine.startsWith("BOT")
                        ? "text-brand-cyan font-bold block"
                        : logLine.startsWith("OK") ||
                            logLine.startsWith("COMPILER")
                          ? "text-emerald-400 block"
                          : logLine.startsWith("INCOMING")
                            ? "text-yellow-400 block"
                            : "text-zinc-500 block"
                    }
                  >
                    {logLine}
                  </div>
                ))}
              </div>

              {/* Status bar */}
              <div className="px-4 py-2 bg-zinc-900/40 border-t border-zinc-900/80 text-[9px] font-mono text-zinc-600 flex justify-between">
                <span>threads: active</span>
                <span>port: 3000 (secured)</span>
              </div>
            </div>

            {/* Simulated Live Inquiry Inbox Feed */}
            <div className="bg-zinc-900/20 rounded-2xl border border-zinc-900 p-5 text-left flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-sans font-bold text-sm text-zinc-200 flex items-center">
                  <MessageSquare className="w-4 h-4 text-brand-blue mr-1.5" />
                  Sandbox Log: Inquiries Terkumpul ({inquiries.length})
                </h4>
                {inquiries.length > 0 && (
                  <button
                    id="clear-logs-btn"
                    onClick={clearInquiries}
                    className="text-[10px] font-mono text-zinc-500 hover:text-brand-cyan transition-colors bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800 cursor-pointer"
                  >
                    Clear Logs
                  </button>
                )}
              </div>

              <div className="space-y-2.5 max-h-[160px] overflow-y-auto scrollbar-thin pr-1">
                {inquiries.length === 0 ? (
                  <div className="text-center py-8 text-xs text-zinc-600 font-sans">
                    Belum ada data masuk. Kirim brief Anda untuk melihat
                    simulasi penangkapan paket data!
                  </div>
                ) : (
                  <AnimatePresence initial={false}>
                    {inquiries.map((inq, idx) => (
                      <motion.div
                        key={idx}
                        id={`inquiry-log-${idx}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="p-3 bg-zinc-950/60 rounded-xl border border-zinc-900 text-xs font-sans text-left space-y-1 relative"
                      >
                        <div className="flex items-center justify-between text-zinc-400 font-semibold mb-0.5">
                          <span className="text-white truncate max-w-[140px]">
                            {inq.name}
                          </span>
                          <span className="text-[10px] font-mono bg-brand-blue/5 text-brand-cyan px-1.5 py-0.5 rounded border border-brand-cyan/10">
                            {inq.service}
                          </span>
                        </div>
                        <div className="text-zinc-500 text-[10px] flex items-center justify-between">
                          <span>
                            {inq.company || "Personal Client"} • {inq.budget}
                          </span>
                        </div>
                        <p className="text-zinc-400 text-[11px] leading-relaxed pt-1 border-t border-zinc-900/60 line-clamp-2">
                          "{inq.message}"
                        </p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* FAQs section centered under inquiry form for complete coverage */}
        <div
          className="border-t border-zinc-900 pt-20 max-w-4xl mx-auto align-left"
          id="faq-section"
        >
          <div className="text-center mb-12">
            <h3 className="font-sans font-bold text-2xl text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-zinc-500 mt-1 font-sans">
              Informasi teknis dan alur kemitraan studio yang transparan
            </p>
          </div>

          <div className="space-y-4" id="faq-accordions">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                id={`faq-item-${i}`}
                className="bg-zinc-900/20 hover:bg-zinc-900/50 rounded-xl border border-zinc-900 transition-colors duration-300"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left p-5 flex items-center justify-between text-sm sm:text-base font-semibold text-white focus:outline-none cursor-pointer"
                >
                  <span className="font-sans">{faq.question}</span>
                  <span className="text-brand-cyan text-lg select-none font-mono">
                    {activeFaq === i ? "—" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans border-t border-zinc-900/40 pt-3">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
