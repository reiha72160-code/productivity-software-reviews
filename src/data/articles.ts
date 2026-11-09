export interface Category {
  name: string;
  slug: string;
  description: string;
  toolExamples: string;
  articleCount: number;
}

export interface ArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  author: string;
  publishedDate: string;
  updatedDate: string;
  updatedDateFormatted: string;
  readTime: string;
  featured: boolean;
}

export const categories: Category[] = [
  {
    name: 'Project Management',
    slug: 'project-management',
    description: 'Task boards, client delivery trackers, and team workflows built for small teams without enterprise bloat.',
    toolExamples: 'Linear, Asana, ClickUp, Basecamp',
    articleCount: 1,
  },
  {
    name: 'Note-Taking & Docs',
    slug: 'note-taking-docs',
    description: 'Connected workspaces, internal wikis, and SOP builders to organize company knowledge and creator research.',
    toolExamples: 'Notion, Craft, Obsidian, Coda',
    articleCount: 1,
  },
  {
    name: 'Time Tracking & Billing',
    slug: 'time-tracking-billing',
    description: 'Effortless timers, retainer tracking, and automated invoicing for agencies, consultants, and freelancers.',
    toolExamples: 'Toggl Track, Harvest, Clockify',
    articleCount: 0,
  },
  {
    name: 'CRM & Client Portals',
    slug: 'crm-client-portals',
    description: 'Lightweight sales pipelines and client onboarding portals that keep leads from slipping through the cracks.',
    toolExamples: 'Folk, Pipedrive, HoneyBook, Attio',
    articleCount: 0,
  },
  {
    name: 'Automation & AI Workflows',
    slug: 'automation-ai',
    description: 'No-code integrations, meeting assistants, and reliable AI tools that actually save weekly admin hours.',
    toolExamples: 'Make, Zapier, Fathom, Relay.app',
    articleCount: 0,
  },
  {
    name: 'Email Marketing',
    slug: 'email-marketing',
    description: 'Newsletter platforms, automated drip sequences, and subscriber segmentation built for creators and small businesses.',
    toolExamples: 'Kit (ConvertKit), Beehiiv, MailerLite, ActiveCampaign',
    articleCount: 1,
  },
  {
    name: 'Online Courses',
    slug: 'online-courses',
    description: 'Course hosting platforms, cohort learning spaces, and membership communities to package and teach your expertise.',
    toolExamples: 'Teachable, Thinkific, Kajabi, Podia',
    articleCount: 0,
  },
  {
    name: 'Digital Products',
    slug: 'digital-products',
    description: 'Frictionless checkouts, digital download storefronts, and licensing tools for selling templates, guides, and software.',
    toolExamples: 'Gumroad, Lemon Squeezy, Stan Store, Payhip',
    articleCount: 0,
  },
];

export const articles: ArticleMeta[] = [
  {
    slug: 'systeme-io-review',
    title: 'Systeme.io Review (2026): The Free All-in-One That Replaces Your Tool Stack',
    excerpt: 'Email, funnels, online courses, digital product checkout, a blog, and an affiliate program in one dashboard. Here is our breakdown of Systeme.io’s permanent free plan, pricing limits, and real user feedback.',
    category: 'Email Marketing',
    categorySlug: 'email-marketing',
    author: 'Productivity Software Reviews Editorial Team',
    publishedDate: '2026-11-08',
    updatedDate: '2026-11-08',
    updatedDateFormatted: 'Nov 8, 2026',
    readTime: '6 min read',
    featured: true,
  },
  {
    slug: 'notion-vs-clickup-vs-asana-small-business',
    title: 'Notion vs. ClickUp vs. Asana (2026): Which Workspace Actually Fits a Small Business?',
    excerpt: 'Based on hands-on time with free plans and trials, official documentation and pricing analysis, and aggregated user feedback, here is our breakdown of how Notion, ClickUp, and Asana compare for teams under 25 people.',
    category: 'Project Management',
    categorySlug: 'project-management',
    author: 'Productivity Software Reviews Editorial Team',
    publishedDate: '2026-10-15',
    updatedDate: '2026-11-04',
    updatedDateFormatted: 'Nov 4, 2026',
    readTime: '9 min read',
    featured: true,
  },
];
