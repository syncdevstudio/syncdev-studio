import { FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  ArrowRight,
  Heart,
} from "lucide-react";
import logo from "../../assets/images/logo.png";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailInput = (
      e.currentTarget.elements.namedItem("subscribe-email") as HTMLInputElement
    ).value;
    if (emailInput) {
      alert(
        `Terima kasih! Email ${emailInput} telah berlangganan draf DevLog mingguan SyncDev Studio.`,
      );
      e.currentTarget.reset();
    }
  };

  return (
    <footer
      id="main-footer"
      className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Grid: Info block, Link blocks, Newsletter sign up */}
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900"
          id="footer-grid"
        >
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-4 space-y-4" id="footer-brand-bio">
            <div
              id="footer-logo"
              onClick={() => onNavigate("home")}
              className="flex items-center space-x-2.5 cursor-pointer group"
            >
              <img
                src={logo}
                alt="SyncDev Studio Logo"
                className="h-8 w-auto"
              />
              <span className="font-sans font-bold text-base text-white tracking-tight">
                SyncDev<span className="text-brand-cyan">.</span>Studio
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-sm">
              Kami menyelaraskan (Sync) riset kegunaan visual modern dengan
              rekayasa murni (Dev) berstandar global untuk membangun platform
              digital eksklusif bertenaga tinggi.
            </p>

            {/* Social icons */}
            <div
              className="flex items-center space-x-3 pt-2"
              id="footer-social-links"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                id="social-github-link"
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub Link"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                id="social-linkedin-link"
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn Link"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                id="social-twitter-link"
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Twitter Link"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Shortcuts */}
          <div
            className="md:col-span-2 space-y-3 text-left"
            id="footer-shortcuts"
          >
            <h4 className="text-[10px] font-mono tracking-widest text-zinc-400 font-bold uppercase">
              STUDIO PORTAL
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  id="foot-link-home"
                  className="text-zinc-500 hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  Home / Top
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  id="foot-link-services"
                  className="text-zinc-500 hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("portfolio")}
                  id="foot-link-portfolio"
                  className="text-zinc-500 hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  id="foot-link-contact"
                  className="text-zinc-500 hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  Inquiry Center
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact details */}
          <div
            className="md:col-span-3 space-y-3 text-left animate-fade-in"
            id="footer-info-details"
          >
            <h4 className="text-[10px] font-mono tracking-widest text-zinc-400 font-bold uppercase">
              CONTACT HUB
            </h4>
            <ul className="space-y-2 text-xs font-sans text-zinc-400">
              <li className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                <span>Bandung, Indonesia</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                <a
                  href="mailto:syncd85@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  syncd85@gmail.com
                </a>
              </li>
              {/* <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                <span>+62 (21) 8080-8910</span>
              </li> */}
            </ul>
          </div>

          {/* Col 4: Newsletter sign-up with dynamic subscription actions */}
          <div
            className="md:col-span-3 space-y-3 text-left"
            id="footer-newsletter-wrap"
          >
            <h4 className="text-[10px] font-mono tracking-widest text-zinc-400 font-bold uppercase">
              SUBSCRIBE TO DEVLOG
            </h4>
            <p className="text-zinc-500 text-xs font-sans leading-snug">
              Dapatkan draf blueprint arsitektur mingguan, riset UI/UX, dan tips
              optimasi code React gratis.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex space-x-1.5 pt-1"
              id="newsletter-form"
            >
              <input
                type="email"
                name="subscribe-email"
                id="subscribe-email"
                placeholder="syncdevstudio@corp.com"
                required
                className="flex-grow px-3 py-2 bg-zinc-950 border border-zinc-800 text-xs rounded-lg text-white placeholder-zinc-700 font-sans focus:outline-none focus:border-brand-cyan/60"
              />
              <button
                type="submit"
                id="newsletter-submit-btn"
                className="px-3 bg-brand-cyan text-zinc-950 hover:bg-brand-blue hover:text-white text-xs font-bold rounded-lg transition-all flex items-center justify-center cursor-pointer active:scale-95"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Lower footer: Legal parameters, system tags, and credits */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] text-zinc-600 font-mono"
          id="footer-credits-dock"
        >
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <span>
              &copy; {currentYear} SyncDev Studio. All Rights Reserved.
            </span>
          </div>

          <div className="flex items-center space-x-1.5 hover:text-zinc-400 transition-colors cursor-help">
            <span>Built with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>in SyncDev Studio Workspace</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
