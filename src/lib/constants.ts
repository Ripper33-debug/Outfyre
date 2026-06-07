export const CALENDLY_URL = "https://calendly.com/outfyre/strategy-call";

// TODO: Replace with real social profile URLs
export const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com/outfyre" },
  { label: "LinkedIn", href: "https://linkedin.com/company/outfyre" },
] as const;

export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_PROOF_ITEMS = [
  "custom AI tools — not templates",
  "websites built & hosted by us",
  "ongoing partnership, not one-offs",
  "chatbots · configurators · automations",
  "99.9% hosting uptime",
  "AI that improves over time",
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We map your business, workflows, and revenue goals — then identify where AI and automation create the biggest leverage.",
    icon: "compass" as const,
  },
  {
    number: "02",
    title: "Build",
    description:
      "We design and develop your website or platform — fast, polished, and built to be the home for your AI tools.",
    icon: "layout" as const,
  },
  {
    number: "03",
    title: "Integrate AI",
    description:
      "We layer in custom AI: chatbots, configurators, internal automations, and intelligent workflows tailored to your business.",
    icon: "brain" as const,
  },
  {
    number: "04",
    title: "Host & evolve",
    description:
      "We host, maintain, and continuously improve your platform and AI — so it gets smarter and more valuable over time.",
    icon: "cloud" as const,
  },
] as const;

// TODO: Replace placeholder metrics with real numbers
export const METRICS = [
  { value: 50, suffix: "+", label: "sites launched", decimals: 0 },
  { value: 120, suffix: "+", label: "AI tools shipped", decimals: 0 },
  { value: 99.9, suffix: "%", label: "hosting uptime", decimals: 1 },
  { value: 14, suffix: " days", label: "avg. kickoff to build", decimals: 0 },
] as const;

export const FEATURES = [
  {
    title: "Custom AI Tools",
    icon: "bot" as const,
    description:
      "No off-the-shelf widgets. Every chatbot, configurator, and automation is built specifically for how your business operates.",
  },
  {
    title: "Fully Managed",
    icon: "server" as const,
    description:
      "We build it, host it, secure it, and maintain it. One partner from first wireframe to production — and beyond.",
  },
  {
    title: "Built to Evolve",
    icon: "trending-up" as const,
    description:
      "Your AI doesn't ship and stall. We monitor, refine, and expand your tools as your business grows and needs change.",
  },
] as const;

// TODO: Replace placeholder pricing with final tiers and rates
export const PRICING_TIERS = [
  {
    name: "Website Build",
    price: "$5,000",
    period: " starting",
    subtitle: "One-time project · custom design & development",
    features: [
      "Discovery & strategy session",
      "Custom UI/UX design",
      "Responsive Next.js build",
      "SEO & performance optimized",
      "Launch support",
    ],
    highlighted: false,
    cta: "Start a Project",
  },
  {
    name: "Managed Hosting",
    price: "$299",
    period: "/month",
    subtitle: "Recurring · we host, monitor & maintain",
    features: [
      "Premium cloud hosting",
      "SSL, CDN & daily backups",
      "99.9% uptime SLA",
      "Security patches & updates",
      "Monthly performance reports",
      "Priority support",
    ],
    highlighted: true,
    cta: "Get Hosted",
  },
  {
    name: "Custom AI Tools",
    price: "$1,500",
    period: "/month",
    subtitle: "Retainer · ongoing AI development & evolution",
    features: [
      "Custom chatbots & agents",
      "Workflow automations",
      "Product configurators",
      "Monthly AI improvements",
      "Usage analytics & tuning",
      "Dedicated AI engineer",
    ],
    highlighted: false,
    cta: "Talk to Us",
  },
] as const;

// TODO: Replace placeholder testimonials with real client quotes
export const TESTIMONIALS = [
  {
    quote:
      "[Placeholder] OUTFYRE built our site and an AI configurator that cut our sales cycle in half. They host everything — we just focus on closing.",
    name: "Client Name",
    role: "CEO",
    company: "Company Name",
    initials: "CN",
    isPlaceholder: true,
  },
  {
    quote:
      "[Placeholder] The custom chatbot they built handles 80% of our inbound questions. And it keeps getting smarter every month.",
    name: "Client Name",
    role: "Operations Lead",
    company: "Company Name",
    initials: "CN",
    isPlaceholder: true,
  },
  {
    quote:
      "[Placeholder] We went from no web presence to a fully managed platform with AI tools in under three weeks. Best agency partnership we've had.",
    name: "Client Name",
    role: "Founder",
    company: "Company Name",
    initials: "CN",
    isPlaceholder: true,
  },
] as const;
