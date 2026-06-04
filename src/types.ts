export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  features: string[];
  techBadge: string;
}

export interface ProjectStepContent {
  title: string;
  description: string;
  deliverables: string[];
  visualType: "flowchart" | "ui-wireframe" | "interactive-prototype" | "code-bundle";
  codeSnippet?: string;
  wireframeLayout?: {
    header: string;
    body: string;
    sidebar?: string;
    footer?: string;
  };
}

export interface PortfolioItem {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  category: "all" | "web" | "uiux" | "digital-solution";
  imageUrl: string;
  client: string;
  timeline: string;
  tags: string[];
  steps: {
    wireframe: ProjectStepContent;
    prototype: ProjectStepContent;
    code: ProjectStepContent;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  sentAt?: string;
}

export interface SyncNode {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}
