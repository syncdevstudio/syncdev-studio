import { ServiceItem, PortfolioItem, FAQItem } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    iconName: "Code",
    title: "Web Development",
    description: "Membangun web aplikasi modern berperfoma tinggi dengan arsitektur modular yang skalabel dan aman.",
    features: [
      "Custom React & Next.js Apps",
      "Optimisasi SEO & Google Lighthouse 100",
      "Sistem Integrasi API & Database",
      "Keamanan Enkripsi End-to-End"
    ],
    techBadge: "React / Vite / Node.js"
  },
  {
    id: "uiux-design",
    iconName: "Palette",
    title: "UI/UX Studio",
    description: "Desain antarmuka eksklusif yang memprioritaskan estetika premium, aksesibilitas modern, dan alur intuitif.",
    features: [
      "Bento Grid Grid & Glassmorphism Design",
      "Interactive Wireframing & Prototyping",
      "Sistem Desain (Design Systems) Skalabel",
      "Riset & Pengujian Pengguna (UX Usability Tests)"
    ],
    techBadge: "Figma / Design Token"
  },
  {
    id: "digital-solutions",
    iconName: "Cpu",
    title: "Digital Solutions",
    description: "Solusi otomatisasi cerdas, digitalisasi infrastruktur legacy, dan integrasi cloud untuk efisiensi bisnis.",
    features: [
      "Konektivitas Cloud & Arsitektur Microservices",
      "Otomatisasi Workflow & Admin Dashboards",
      "Sistem Real-time WebSockets & Komunikasi",
      "Dokumentasi API Terstruktur & Komprehensif"
    ],
    techBadge: "AWS / Docker / Socket.io"
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "nexis-portal",
    title: "Nexis SaaS Analytics",
    subTitle: "Kecepatan Finansial dalam Satu Dashboard",
    description: "Sebuah platform analytics enterprise untuk melacak perputaran modal usaha secara real-time dengan layout bento grid melengkung halus.",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
    client: "Nexis Capital Inc.",
    timeline: "3 Bulan (Q1 2026)",
    tags: ["React", "Tailwind CSS", "Recharts", "Framer Motion"],
    steps: {
      wireframe: {
        title: "Tahap 1: Struktur Grid & Alur Data",
        description: "Merancang wireframe bento-grid modular tanpa noise warna untuk memposisikan porsi visual data finansial yang paling krusial.",
        deliverables: [
          "Tata letak widget interaktif & responsif",
          "Optimalisasi ruang kosong (whitespace) 20%",
          "Peta navigasi sidebar statis lipat"
        ],
        visualType: "ui-wireframe",
        wireframeLayout: {
          header: "Navigation: Breadcrumbs + Profile Icon",
          sidebar: "Main App Menu (< /> Developer Centered Icons)",
          body: "Bento Layout: Card A (Big Chart placeholder), Card B (Secondary metric), Card C (Activity logger feed)",
          footer: "System Status Identifier & Region Indicator"
        }
      },
      prototype: {
        title: "Tahap 2: High-Fidelity & Interaksi Micro",
        description: "Menerapkan estetika glassmorphism modern, skema gelap dengan bayangan halus, serta animasi hover transisional pada widget.",
        deliverables: [
          "Skema transisi state antar tab analytics",
          "Interaksi dinamis tooltip grafik hover",
          "Feedback loading kerangka skeleton"
        ],
        visualType: "interactive-prototype"
      },
      code: {
        title: "Tahap 3: Implementasi Code Bersih",
        description: "Mengompilasi template desain menjadi komponen React fungsional dengan render data dinamis dan responsive utilities.",
        deliverables: [
          "Arsitektur component split (reusable cards)",
          "Integrasi chart d3/recharts anti-lag",
          "Mencegah re-renders berlebih menggunakan react state"
        ],
        visualType: "code-bundle",
        codeSnippet: `// Nexis Bento Dashboard Component
import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis } from 'recharts';

export function FinanceWidget({ data }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-2xl glass-panel relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold tracking-wide text-zinc-400 uppercase">
          Total Net Revenue
        </h3>
        <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full">
          +14.2%
        </span>
      </div>
      <p className="text-3xl font-mono text-white mb-6">$1,248,390</p>
    </motion.div>
  );
}`
      }
    }
  },
  {
    id: "kinetix-app",
    title: "Kinetix Brand System",
    subTitle: "Sentuhan Estetika Digital Masa Depan",
    description: "Rebranding dan restrukturisasi total sistem interaksi aplikasi mobile e-commerce eksklusif dengan transisi gesture-based.",
    category: "uiux",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=700&q=80",
    client: "Kinetix Ltd",
    timeline: "1.5 Bulan (Q2 2026)",
    tags: ["UIUX System", "Motion Design", "Haptic Mapping", "Figma Token"],
    steps: {
      wireframe: {
        title: "Tahap 1: Thumb Sector Usability Research",
        description: "Pemetaan jangkauan ibu jari pada ponsel genggam satu tangan (one-handed thumb zone map) untuk posisi tombol navigasi.",
        deliverables: [
          "Penghapusan tombol navigasi di area atas layar",
          "Penyusunan trigger swipe-up panel",
          "Bentuk tombol aksi di area tengah bawah layar"
        ],
        visualType: "ui-wireframe",
        wireframeLayout: {
          header: "Context Status Bar: Time & Network Info",
          body: "Main Product Deck with Floating Swipe Controller",
          sidebar: "No Sidebar - Handled by Bottom Quick Panel",
          footer: "Bottom Bar: Home, Search, Bag (Active target area)"
        }
      },
      prototype: {
        title: "Tahap 2: Animasi Gesture & Alur Interaksi",
        description: "Mengembangkan prototype interaktif di Figma yang mengombinasikan transisi dinamis gesek dan ketukan berdaya respons tinggi.",
        deliverables: [
          "Transisi elastic cubic-bezier",
          "Umpan balik mikro (micro-interactions) saat add to cart",
          "Umpan balik haptic (getaran visual)"
        ],
        visualType: "interactive-prototype"
      },
      code: {
        title: "Tahap 3: CSS Keyframes & Tailwind Implementation",
        description: "Menerjemahkan gesture feel ke kode menggunakan Motion React dan Tailwind layout flex-box yang sangat fluid.",
        deliverables: [
          "Konfigurasi spring animations untuk transisi swipe",
          "Gestures swipe handler pada mobile touch events",
          "Custom hooks untuk melacak posisi koordinat layar"
        ],
        visualType: "code-bundle",
        codeSnippet: `// Mobile Interaction Wrap
import { motion, useMotionValue, useTransform } from 'motion/react';

export function DeskSwipeCard({ item, onSwipe }) {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);

  return (
    <motion.div
      style={{ x, opacity }}
      drag="x"
      dragConstraints={{ left: -200, right: 200 }}
      className="p-4 bg-zinc-900 border border-zinc-800 rounded-3xl cursor-grab"
      onDragEnd={(e, info) => {
        if (Math.abs(info.offset.x) > 100) onSwipe(info.offset.x > 0 ? "right" : "left");
      }}
    >
      <div className="h-48 bg-zinc-800 rounded-2xl mb-4 overflow-hidden" />
      <h4 className="font-sans text-white text-lg">{item.title}</h4>
    </motion.div>
  );
}`
      }
    }
  },
  {
    id: "omnisync-core",
    title: "OmniSync Real-Time Engine",
    subTitle: "Infrastruktur Sinkronisasi Data Instan",
    description: "Platform middleware backend yang melacak dan menyinkronkan data antar ribuan node sensor IoT industri dalam milidetik.",
    category: "digital-solution",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
    client: "Inovasi Global Corpora",
    timeline: "4 Bulan (Q4 2025)",
    tags: ["WebSockets", "Node.js", "Redis", "Grafana Monitoring"],
    steps: {
      wireframe: {
        title: "Tahap 1: Arsitektur Pipeline Data",
        description: "Menyusun skema logis alur data masuk dari perangkat IoT, sinkronisasi memori redis, hingga rendering dasbor klien.",
        deliverables: [
          "Diagram urutan pesan pub/sub",
          "Penanganan kegagalan paket data (failover routing)",
          "Skema penyaringan duplikasi payload"
        ],
        visualType: "flowchart",
        wireframeLayout: {
          header: "Data Source: IoT Sensor Node Fleet",
          body: "Ingestion Queue (Redis Streams) -> Worker Thread Pool -> Output Channel",
          sidebar: "Monitoring Hub Config Menu",
          footer: "Diagnostics logs stream outlet"
        }
      },
      prototype: {
        title: "Tahap 2: Terminal Simulator & Payload Tracer",
        description: "Pembuatan visualisasi simulator terminal untuk melacak latensi pengiriman pesan dan log aktivitas node yang tersinkronisasi.",
        deliverables: [
          "Visualizer grafis latensi millisecond",
          "Simulator input payload interaktif",
          "Visualisasi status server terdistribusi"
        ],
        visualType: "interactive-prototype"
      },
      code: {
        title: "Tahap 3: NodeJS Socket Server Codebase",
        description: "Membangun server handshaking berperfoma tinggi dengan efisiensi alur memori dan deteksi downtime otomatis.",
        deliverables: [
          "Event emitters untuk update tersinkronisasi",
          "Reconnection loops dengan exponential backoff",
          "Logging terstruktur tanpa pemborosan I/O disk"
        ],
        visualType: "code-bundle",
        codeSnippet: `// Server real-time cluster sync emitter
import { EventEmitter } from 'events';

export class SyncEngine extends EventEmitter {
  constructor(nodeId) {
    super();
    this.nodeId = nodeId;
    this.activeConnections = new Map();
  }

  broadcastSync(payload) {
    const timestamp = Date.now();
    const packet = { ...payload, syncedBy: this.nodeId, timestamp };
    
    for (const [socketId, socket] of this.activeConnections) {
      if (socket.readyState === 'open') {
        socket.send(JSON.stringify(packet));
      }
    }
    this.emit('broadcast', { packet, connections: this.activeConnections.size });
  }
}`
      }
    }
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Apa itu filosofi 'SyncDev' di Studio Anda?",
    answer: "Filosofi 'SyncDev' terletak pada penggabungan atau sinkronisasi (Sync) desain antarmuka berkualitas visual tertinggi langsung dengan kode pengembangan (Dev) berkualitas tinggi secara paralel. Kami tidak memisahkan desainer dan developer; melainkan mengintegrasikan alur kerja secara mulus untuk meluncurkan produk lebih cepat dan akurat."
  },
  {
    question: "Apakah SyncDev Studio mengerjakan proyek skala kecil?",
    answer: "Kami melayani berbagai skala proyek, mulai dari MVP (Minimum Viable Product) untuk startup inovatif hingga restrukturisasi platform komprehensif bagi korporasi besar. Fokus kami adalah kualitas visual yang solid dan kebersihan performa kode."
  },
  {
    question: "Berapa lama estimasi pengerjaan website profil agency atau SaaS?",
    answer: "Umumnya berkisar antara 4 hingga 8 minggu bergantung pada kompleksitas produk, riset kegunaan khusus, dan integrasi backend. Kami selalu membagikan tautan preview mingguan agar klien dapat melihat perkembangan secara real-time."
  },
  {
    question: "Teknologi apa saja yang menjadi keahlian utama SyncDev?",
    answer: "Kami ahli dalam ekosistem React.js modern, Next.js, Tailwind CSS kelas atas, Framer Motion, TypeScript, Node.js perkasa, cloud services, serta desain kreatif di Figma menggunakan design system terotomatisasi."
  }
];
