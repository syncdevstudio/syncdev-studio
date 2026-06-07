import { ServiceItem, PortfolioItem, FAQItem, TeamMember } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    iconName: "Code",
    title: "Web Development",
    description:
      "Membangun web aplikasi modern berperfoma tinggi dengan arsitektur modular yang skalabel dan aman.",
    features: [
      "Custom React & Next.js Apps",
      "Optimisasi SEO & Google Lighthouse 100",
      "Sistem Integrasi API & Database",
      "Keamanan Enkripsi End-to-End",
    ],
    techBadge: "React / Vite / PHP",
  },
  {
    id: "uiux-design",
    iconName: "Palette",
    title: "UI/UX Studio",
    description:
      "Desain antarmuka eksklusif yang memprioritaskan estetika premium, aksesibilitas modern, dan alur intuitif.",
    features: [
      "Bento Grid Grid & Glassmorphism Design",
      "Interactive Wireframing & Prototyping",
      "Sistem Desain (Design Systems) Skalabel",
      "Riset & Pengujian Pengguna (UX Usability Tests)",
    ],
    techBadge: "Figma / Photoshop",
  },
  {
    id: "digital-solutions",
    iconName: "Cpu",
    title: "Digital Solutions",
    description:
      "Solusi otomatisasi cerdas, digitalisasi infrastruktur legacy, dan integrasi cloud untuk efisiensi bisnis.",
    features: [
      "Konektivitas Cloud & Arsitektur Microservices",
      "Otomatisasi Workflow & Admin Dashboards",
      "Sistem Real-time WebSockets & Komunikasi",
      "Dokumentasi API Terstruktur & Komprehensif",
    ],
    techBadge: "AWS / Docker / Socket.io",
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "nexis-portal",
    title: "Nexis SaaS Analytics",
    subTitle: "Kecepatan Finansial dalam Satu Dashboard",
    description:
      "Sebuah platform analytics enterprise untuk melacak perputaran modal usaha secara real-time dengan layout bento grid melengkung halus.",
    category: "web",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
    client: "Nexis Capital Inc.",
    timeline: "3 Bulan (Q1 2026)",
    tags: ["React", "Tailwind CSS", "Recharts", "Framer Motion"],
    links: {
      github: "https://github.com",
      figma: "https://figma.com",
      live: "https://nexis-analytics.com",
    },
    steps: {
      wireframe: {
        title: "Tahap 1: Struktur Grid & Alur Data",
        description:
          "Merancang wireframe bento-grid modular tanpa noise warna untuk memposisikan porsi visual data finansial yang paling krusial.",
        deliverables: [
          "Tata letak widget interaktif & responsif",
          "Optimalisasi ruang kosong (whitespace) 20%",
          "Peta navigasi sidebar statis lipat",
        ],
        visualType: "ui-wireframe",
        wireframeLayout: {
          header: "Navigation: Breadcrumbs + Profile Icon",
          sidebar: "Main App Menu (< /> Developer Centered Icons)",
          body: "Bento Layout: Card A (Big Chart placeholder), Card B (Secondary metric), Card C (Activity logger feed)",
          footer: "System Status Identifier & Region Indicator",
        },
      },
      prototype: {
        title: "Tahap 2: High-Fidelity & Interaksi Micro",
        description:
          "Menerapkan estetika glassmorphism modern, skema gelap dengan bayangan halus, serta animasi hover transisional pada widget.",
        deliverables: [
          "Skema transisi state antar tab analytics",
          "Interaksi dinamis tooltip grafik hover",
          "Feedback loading kerangka skeleton",
        ],
        visualType: "interactive-prototype",
      },
      code: {
        title: "Tahap 3: Implementasi Code Bersih",
        description:
          "Mengompilasi template desain menjadi komponen React fungsional dengan render data dinamis dan responsive utilities.",
        deliverables: [
          "Arsitektur component split (reusable cards)",
          "Integrasi chart d3/recharts anti-lag",
          "Mencegah re-renders berlebih menggunakan react state",
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
}`,
      },
    },
  },
  {
    id: "greentrail-travel",
    title: "GreenTrail Travel",
    subTitle: "Eksplorasi Alam di Ujung Jari Anda",
    description:
      "Rebranding dan restrukturisasi total pengalaman aplikasi mobile travel berbasis alam dengan navigasi intuitif dan alur pemesanan wisata yang mulus.",
    category: ["uiux", "web"],
    imageUrl: new URL("../assets/images/greentrail.png", import.meta.url).href,
    client: "GreenTrail Travel Co.",
    timeline: "1 Bulan (Q1 2026)",
    tags: [
      "UIUX System",
      "Motion Design",
      "Haptic Mapping",
      "Figma Token",
      "Tailwind CSS",
      "React",
    ],
    links: {
      github: "https://github.com",
      figma: "https://figma.com/file/greentrail",
      live: "https://greentrail-travel.vercel.app/",
    },
    steps: {
      wireframe: {
        title: "Tahap 1: Pemetaan Alur Pencarian Destinasi",
        description:
          "Riset pola penggunaan satu tangan pada aplikasi travel — memetakan zona navigasi agar pencarian destinasi, filter, dan CTA booking mudah dijangkau ibu jari.",
        deliverables: [
          "Relokasi filter destinasi ke area bawah layar",
          "Panel swipe-up untuk detail paket wisata",
          "Tombol 'Pesan Sekarang' di zona aksi tengah bawah",
        ],
        visualType: "ui-wireframe",
        wireframeLayout: {
          header: "Search Bar: Cari destinasi atau paket wisata",
          body: "Kartu Destinasi Unggulan dengan Preview Galeri & Harga",
          sidebar: "Tidak ada — digantikan oleh Bottom Filter Panel",
          footer: "Bottom Bar: Beranda, Jelajahi, Favorit, Profil",
        },
      },
      prototype: {
        title: "Tahap 2: Animasi & Alur Pemesanan Wisata",
        description:
          "Membangun prototype interaktif di Figma yang mensimulasikan pengalaman menjelajahi destinasi — dari scroll galeri alam hingga konfirmasi pemesanan paket perjalanan.",
        deliverables: [
          "Transisi halaman dengan elastic cubic-bezier khas nuansa alam",
          "Micro-interaction saat menambahkan destinasi ke wishlist",
          "Animasi loading peta & estimasi harga paket wisata",
        ],
        visualType: "interactive-prototype",
      },
      code: {
        title: "Tahap 3: Implementasi Gestur & Animasi Penjelajahan",
        description:
          "Mentranslasi feel menjelajahi alam ke dalam kode menggunakan Motion React — kartu destinasi yang bisa digeser, transisi fluid, dan layout responsif berbasis Tailwind.",
        deliverables: [
          "Spring animations untuk transisi antar destinasi",
          "Swipe gesture handler pada kartu paket wisata",
          "Custom hooks untuk melacak posisi scroll galeri destinasi",
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
}`,
      },
    },
  },
  {
    id: "omnisync-core",
    title: "OmniSync Real-Time Engine",
    subTitle: "Infrastruktur Sinkronisasi Data Instan",
    description:
      "Platform middleware backend yang melacak dan menyinkronkan data antar ribuan node sensor IoT industri dalam milidetik.",
    category: "digital-solution",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
    client: "Inovasi Global Corpora",
    timeline: "4 Bulan (Q4 2025)",
    tags: ["WebSockets", "Node.js", "Redis", "Grafana Monitoring"],
    links: {
      github: "https://github.com/syncdev/omnisync",
      figma: "https://figma.com",
      live: "https://omnisync-engine.io",
    },
    steps: {
      wireframe: {
        title: "Tahap 1: Arsitektur Pipeline Data",
        description:
          "Menyusun skema logis alur data masuk dari perangkat IoT, sinkronisasi memori redis, hingga rendering dasbor klien.",
        deliverables: [
          "Diagram urutan pesan pub/sub",
          "Penanganan kegagalan paket data (failover routing)",
          "Skema penyaringan duplikasi payload",
        ],
        visualType: "flowchart",
        wireframeLayout: {
          header: "Data Source: IoT Sensor Node Fleet",
          body: "Ingestion Queue (Redis Streams) -> Worker Thread Pool -> Output Channel",
          sidebar: "Monitoring Hub Config Menu",
          footer: "Diagnostics logs stream outlet",
        },
      },
      prototype: {
        title: "Tahap 2: Terminal Simulator & Payload Tracer",
        description:
          "Pembuatan visualisasi simulator terminal untuk melacak latensi pengiriman pesan dan log aktivitas node yang tersinkronisasi.",
        deliverables: [
          "Visualizer grafis latensi millisecond",
          "Simulator input payload interaktif",
          "Visualisasi status server terdistribusi",
        ],
        visualType: "interactive-prototype",
      },
      code: {
        title: "Tahap 3: NodeJS Socket Server Codebase",
        description:
          "Membangun server handshaking berperfoma tinggi dengan efisiensi alur memori dan deteksi downtime otomatis.",
        deliverables: [
          "Event emitters untuk update tersinkronisasi",
          "Reconnection loops dengan exponential backoff",
          "Logging terstruktur tanpa pemborosan I/O disk",
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
}`,
      },
    },
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "muhammad-adam-firdaus",
    name: "Muhammad Adam Firdaus",
    role: "Founder, UI/UX Designer & Quality Assurance",
    imageUrl:
      "https://api.dicebear.com/6.x/adventurer/svg?seed=Muhammad%20Adam%20Firdaus&backgroundColor=2d2d2d",
    bio: "Membangun fondasi filosofi SyncDev, merancang pengalaman pengguna yang memukau, dan memastikan kualitas visual serta performa kode yang konsisten.",
  },
  {
    id: "ricky-rohaendi",
    name: "Ricky Rohaendi",
    role: "Founder & Full-Stack Developer",
    imageUrl: new URL("../assets/images/ricky.jpg", import.meta.url).href,
    bio: "Membangun fondasi filosofi SyncDev, mengembangkan kode berkualitas tinggi, dan memastikan integrasi mulus antara desain dan pengembangan untuk setiap proyek.",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Apa itu filosofi 'SyncDev' di Studio Anda?",
    answer:
      "Filosofi 'SyncDev' terletak pada penggabungan atau sinkronisasi (Sync) desain antarmuka berkualitas visual tertinggi langsung dengan kode pengembangan (Dev) berkualitas tinggi secara paralel. Kami tidak memisahkan desainer dan developer; melainkan mengintegrasikan alur kerja secara mulus untuk meluncurkan produk lebih cepat dan akurat.",
  },
  {
    question: "Apakah SyncDev Studio mengerjakan proyek skala kecil?",
    answer:
      "Kami melayani berbagai skala proyek, mulai dari MVP (Minimum Viable Product) untuk startup inovatif hingga restrukturisasi platform komprehensif bagi korporasi besar. Fokus kami adalah kualitas visual yang solid dan kebersihan performa kode.",
  },
  {
    question:
      "Berapa lama estimasi pengerjaan website profil agency atau SaaS?",
    answer:
      "Umumnya berkisar antara 4 hingga 8 minggu bergantung pada kompleksitas produk, riset kegunaan khusus, dan integrasi backend. Kami selalu membagikan tautan preview mingguan agar klien dapat melihat perkembangan secara real-time.",
  },
  {
    question: "Teknologi apa saja yang menjadi keahlian utama SyncDev?",
    answer:
      "Kami ahli dalam ekosistem React.js modern, Next.js, Tailwind CSS kelas atas, Framer Motion, TypeScript, Node.js perkasa, cloud services, serta desain kreatif di Figma menggunakan design system terotomatisasi.",
  },
];
