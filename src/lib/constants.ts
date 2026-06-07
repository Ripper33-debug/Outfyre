// TODO: Replace with your real Calendly scheduling URL
export const CALENDLY_URL = "https://calendly.com/outfyre/strategy-call";

// TODO: Replace with real social profile URLs
export const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com/outfyre" },
  { label: "LinkedIn", href: "https://linkedin.com/company/outfyre" },
] as const;

export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
] as const;

export const SOCIAL_PROOF_ITEMS = [
  "10+ qualified meetings per month",
  "multi-agent AI system — done for you",
  "monthly retainer · not one-off projects",
  "AI outbound engine on autopilot",
  "AI ops & automation buildouts",
  "your AI growth team on retainer",
] as const;

export const AGENTS = [
  {
    id: "ceo",
    name: "CEO Agent",
    role: "Orchestrator",
    description:
      "Coordinates the entire multi-agent system, sets priorities, and ensures every action aligns with your revenue goals.",
    icon: "crown" as const,
  },
  {
    id: "researcher",
    name: "Researcher",
    role: "Intelligence",
    description:
      "Scrapes, enriches, and scores prospects against your ICP — building a pipeline of high-fit targets daily.",
    icon: "search" as const,
  },
  {
    id: "copywriter",
    name: "Copywriter",
    role: "Personalization",
    description:
      "Crafts hyper-personalized outreach for every prospect — no templates, no spray-and-pray.",
    icon: "pen" as const,
  },
  {
    id: "outreach",
    name: "Outreach Manager",
    role: "Delivery",
    description:
      "Runs multi-channel sequences, manages send timing, and optimizes deliverability around the clock.",
    icon: "send" as const,
  },
  {
    id: "qualifier",
    name: "Qualifier",
    role: "Conversion",
    description:
      "Engages replies, qualifies intent, and books warm leads directly onto your sales calendar.",
    icon: "check" as const,
  },
] as const;

export const PIPELINE_STAGES = [
  { label: "Lead identified", agent: "Researcher" },
  { label: "Message personalized", agent: "Copywriter" },
  { label: "Outreach sent", agent: "Outreach Manager" },
  { label: "Reply qualified", agent: "Qualifier" },
  { label: "Meeting booked", agent: "CEO Agent" },
] as const;

export const SERVICES = [
  {
    name: "AI Outbound Engine",
    tagline: "Monthly retainer",
    description:
      "Your full multi-agent outbound system — built, deployed, and run for you every month. Prospecting, personalization, outreach, and booking on autopilot.",
    highlight: "10+ qualified meetings/month",
    icon: "rocket" as const,
    features: [
      "5-agent AI system (CEO → Qualifier)",
      "ICP research & list building",
      "Hyper-personalized sequences",
      "Calendar booking integration",
      "Weekly performance reporting",
    ],
  },
  {
    name: "AI Ops & Automation",
    tagline: "Monthly retainer",
    description:
      "Custom AI workflows that eliminate manual ops — internal automations, data pipelines, and intelligent tools built and maintained on retainer.",
    highlight: "Ongoing build + maintenance",
    icon: "workflow" as const,
    features: [
      "Workflow audit & strategy",
      "Custom AI automations",
      "CRM & tool integrations",
      "Monthly optimization cycles",
      "Dedicated AI engineer",
    ],
  },
] as const;

// TODO: Replace placeholder metrics with real numbers
export const METRICS = [
  { value: 10, suffix: "+", label: "qualified meetings per client/month", decimals: 0 },
  { value: 5, suffix: "", label: "AI agents running per client", decimals: 0 },
  { value: 24, suffix: "/7", label: "autonomous operation", decimals: 0 },
  { value: 72, suffix: "hr", label: "avg. time to first reply", decimals: 0 },
] as const;

export const FEATURES = [
  {
    title: "Multi-Agent AI System",
    icon: "bot" as const,
    description:
      "Five specialized agents work in concert — researching, writing, sending, qualifying, and booking. Not a single chatbot. A full team.",
  },
  {
    title: "Done For You, Every Month",
    icon: "refresh-cw" as const,
    description:
      "We build it, run it, optimize it, and report on it. You show up to sales calls. We handle everything else on retainer.",
  },
  {
    title: "10+ Meetings Guaranteed",
    icon: "calendar-check" as const,
    description:
      "The outcome that matters: qualified buyers on your calendar every month. We measure success in booked meetings, not vanity metrics.",
  },
] as const;

// TODO: Replace placeholder pricing with final rates
export const PRICING_TIERS = [
  {
    name: "AI Outbound Engine",
    price: "$3,000",
    period: "/month",
    subtitle: "Monthly retainer · full outbound system",
    features: [
      "5-agent AI outbound system",
      "10+ qualified meetings/month",
      "ICP research & prospect lists",
      "Hyper-personalized sequences",
      "Calendar integration",
      "Weekly performance reports",
    ],
    highlighted: true,
    cta: "Book a Call",
  },
  {
    name: "AI Ops & Automation",
    price: "$2,500",
    period: "/month",
    subtitle: "Monthly retainer · custom AI buildouts",
    features: [
      "Workflow audit & strategy",
      "Custom AI automations",
      "CRM & tool integrations",
      "Internal ops tooling",
      "Monthly optimization cycles",
      "Dedicated AI engineer",
    ],
    highlighted: false,
    cta: "Book a Call",
  },
  {
    name: "Full Stack",
    price: "Custom",
    period: "",
    subtitle: "Both services · bundled retainer",
    features: [
      "Everything in Outbound Engine",
      "Everything in AI Ops",
      "Priority support & SLA",
      "Quarterly strategy reviews",
      "Custom agent training",
    ],
    highlighted: false,
    cta: "Talk to Us",
  },
] as const;

// TODO: Replace placeholder testimonials with real client quotes
export const TESTIMONIALS = [
  {
    quote:
      "[Placeholder] OUTFYRE's AI team books us 12+ meetings a month on autopilot. We killed our SDR hire and never looked back.",
    name: "Client Name",
    role: "CEO",
    company: "Company Name",
    initials: "CN",
    isPlaceholder: true,
  },
  {
    quote:
      "[Placeholder] The multi-agent system feels like having a full outbound team that never sleeps. Every email is genuinely personalized.",
    name: "Client Name",
    role: "VP Sales",
    company: "Company Name",
    initials: "CN",
    isPlaceholder: true,
  },
  {
    quote:
      "[Placeholder] We signed on for outbound and added AI ops within two months. Best retainer we've ever paid for.",
    name: "Client Name",
    role: "Founder",
    company: "Company Name",
    initials: "CN",
    isPlaceholder: true,
  },
] as const;
