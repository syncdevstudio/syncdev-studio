import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../../assets/images/logo.png";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Team", id: "identitas" },
    { label: "Contact", id: "contact" },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      aria-label="Navigasi utama"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-[#0A0A0B]/85 backdrop-blur-md border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Dev Sync visual vibe */}
          <div
            id="nav-logo"
            onClick={() => handleLinkClick("home")}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <img
              src={logo}
              alt="SyncDev Studio Logo"
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <span className="font-sans font-bold text-lg tracking-tight text-white">
                SyncDev<span className="text-brand-cyan">Studio</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div
            className="hidden md:flex items-center space-x-1"
            id="nav-links-desktop"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`link-desktop-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all relative ${
                  activeSection === link.id
                    ? "text-brand-cyan"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-white/5 rounded-lg border-b-2 border-brand-cyan -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>

          {/* Call To Action button on Desktop */}
          <div className="hidden md:block" id="nav-cta-desktop">
            <button
              id="btn-nav-cta"
              onClick={() => handleLinkClick("contact")}
              className="group relative inline-flex items-center justify-center px-5 py-2 text-sm font-semibold rounded-full text-white overflow-hidden bg-white/5 border border-white/10 hover:border-brand-cyan/50 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-brand-cyan to-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              <span className="mr-1.5 font-sans">Mulai Proyek</span>
              <ArrowRight className="w-4 h-4 text-brand-cyan group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile responsive toggle */}
          <div className="md:hidden flex items-center" id="nav-toggle-mobile">
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-white/5 bg-[#0A0A0B]/95 backdrop-blur-lg overflow-hidden absolute top-full left-0 right-0 shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`link-mobile-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-sans text-base font-medium transition-colors flex items-center justify-between ${
                    activeSection === link.id
                      ? "text-brand-cyan bg-white/5 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                  )}
                </button>
              ))}
              <div className="pt-4 border-t border-white/5 px-2">
                <button
                  id="btn-mobile-drawer-cta"
                  onClick={() => handleLinkClick("contact")}
                  className="w-full flex items-center justify-center py-3 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-sans font-semibold rounded-lg text-sm justify-between px-5 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-brand-blue/10"
                >
                  <span>Konsultasi Gratis</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
