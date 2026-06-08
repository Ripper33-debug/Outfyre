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

export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Discovery & ICP mapping",
    description:
      "We deep-dive into your ideal customer, offer, and sales motion — then architect the multi-agent system around your exact revenue goals.",
  },
  {
    number: "02",
    title: "Deploy your AI team",
    description:
      "Five specialized agents go live: Researcher, Copywriter, Outreach Manager, Qualifier, and CEO orchestrator — fully configured for your market.",
  },
  {
    number: "03",
    title: "Outbound runs daily",
    description:
      "Fresh prospect lists, personalized outreach, and reply handling across email and LinkedIn — 24/7, without your team lifting a finger.",
  },
  {
    number: "04",
    title: "Meetings hit your calendar",
    description:
      "Qualified buyers book directly. 10+ meetings per month, every month — with weekly reports on opens, replies, and pipeline.",
  },
] as const;

export const SERVICES = [
  {
    label: "01 / OUTBOUND",
    name: "AI Outbound Engine",
    headline: "Your outbound team, run by AI.",
    subhead:
      "A full multi-agent system that finds your buyers, writes the message, sends it, handles replies, and qualifies the lead — dropping booked meetings straight into your calendar.",
    icon: "rocket" as const,
    buildHeading: null,
    buildItems: [] as readonly string[],
    monthlyHeading: "What you get every month:",
    monthlyItems: [
      "Fresh, ICP-matched prospect lists built and verified by our Researcher agent",
      "Personalized outreach written per-prospect — no spray-and-pray templates",
      "Daily sending + reply handling across email and LinkedIn",
      "Every lead qualified before it hits your calendar",
      "Booked meetings delivered to you, ready to close",
      "Weekly performance reports — opens, replies, meetings, pipeline",
    ],
    highlight: "10+ qualified meetings a month. Every month.",
    closingLine: null,
  },
  {
    label: "02 / AI OPS",
    name: "AI Ops & Automation",
    headline: "We build the AI into your business — then keep it running.",
    subhead:
      "Custom AI systems that take the repetitive work off your team's plate. We design it, ship it, and tune it every month so it keeps getting sharper.",
    icon: "workflow" as const,
    buildHeading: "What we build (and maintain):",
    buildItems: [
      "Custom AI assistants trained on your business",
      "RFP & proposal drafting that cuts hours to minutes",
      "Automated lead scoring and CRM workflows",
      "Internal knowledge bots your team can actually ask questions",
      "Live reporting dashboards that pull it all together",
    ],
    monthlyHeading: "What you get every month:",
    monthlyItems: [
      "A new automation or improvement shipped — your system keeps growing",
      "Ongoing tuning, monitoring, and fixes",
      "Direct support, no ticket queue",
    ],
    highlight: null,
    closingLine: "We don't hand you a tool and disappear. We run it with you.",
  },
  {
    label: "03 / PRESENCE",
    name: "Presence",
    headline: "The front door your pipeline walks through.",
    subhead:
      "We design, build, and host the site your outbound actually points to — fast, conversion-built, and run on the same retainer. No handoff to a separate web shop. The team booking your meetings also owns where those meetings land.",
    icon: "presence" as const,
    buildHeading: "What we build:",
    buildItems: [
      "High-converting site on a modern stack (Next.js / Tailwind), not a bloated template",
      "3D / interactive product visuals where it sells",
      "Managed hosting, security, and uptime",
      "Ongoing edits, A/B tests, and conversion tuning every month",
    ],
    monthlyHeading: "What you get every month:",
    monthlyItems: [
      "Fully managed hosting + monitoring",
      "Continuous conversion improvements tied to your outbound data",
      "One team owning site → pipeline → close",
    ],
    highlight: null,
    closingLine: "We don't just send traffic. We build where it lands.",
  },
] as const;

// TODO: Replace placeholder metrics with real numbers
export const METRICS = [
  { value: 10, suffix: "+", label: "qualified meetings per client/month", decimals: 0 },
  { value: 5, suffix: "", label: "AI agents running per client", decimals: 0 },
  { value: 24, suffix: "/7", label: "autonomous operation", decimals: 0 },
  { value: 1, suffix: "hr", label: "avg. time to first reply", decimals: 0 },
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
    name: "Presence",
    price: "From $149",
    period: "/mo",
    subtitle: "Site build + managed hosting",
    features: [
      "One-time build from $3,500",
      "Managed hosting from $149/mo",
      "3D / interactive add-ons quoted per project",
      "Monthly conversion tuning included",
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
