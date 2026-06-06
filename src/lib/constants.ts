export const CALENDLY_URL = "https://calendly.com/outfyre/strategy-call";

export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_PROOF_ITEMS = [
  "10+ meetings/month guaranteed",
  "24/7 autonomous outreach",
  "zero headcount needed",
  "AI-powered personalization",
  "qualified buyers only",
  "72hr avg. first reply",
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "We learn your ICP",
    description:
      "Deep-dive into your ideal customer profile, pain points, and buying triggers.",
    icon: "target" as const,
  },
  {
    number: "02",
    title: "AI builds your prospect list",
    description:
      "Our agents scrape, enrich, and score thousands of prospects that match your ICP.",
    icon: "data" as const,
  },
  {
    number: "03",
    title: "Personalized outreach goes out",
    description:
      "Hyper-personalized emails crafted for each prospect — not templates, conversations.",
    icon: "email" as const,
  },
  {
    number: "04",
    title: "Warm leads land on your calendar",
    description:
      "Qualified buyers book directly. You only talk to people ready to buy.",
    icon: "calendar" as const,
  },
] as const;

export const METRICS = [
  { value: 10, suffix: "+", label: "meetings per client per month" },
  { value: 24, suffix: "/7", label: "autonomous operation" },
  { value: 72, suffix: "hr", label: "average time to first reply" },
  { value: 0, suffix: "", label: "extra headcount needed" },
] as const;

export const FEATURES = [
  {
    title: "AI That Never Sleeps",
    icon: "moon" as const,
    description:
      "Autonomous agents run around the clock — prospecting, personalizing, and booking while you sleep.",
  },
  {
    title: "Hyper-Personalized",
    icon: "pen" as const,
    description:
      "Every email is written for the individual. No spray-and-pray. No generic templates.",
  },
  {
    title: "You Only Talk to Buyers",
    icon: "calendar-check" as const,
    description:
      "We qualify before you ever get on a call. Your calendar fills with decision-makers, not tire-kickers.",
  },
] as const;

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: "$1,500",
    period: "/month",
    meetings: "10 qualified meetings",
    features: [
      "ICP research & setup",
      "AI prospect list building",
      "Personalized outreach",
      "Calendar integration",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$3,000",
    period: "/month",
    meetings: "25 qualified meetings",
    features: [
      "Everything in Starter",
      "Multi-channel sequences",
      "A/B testing & optimization",
      "Dedicated account manager",
      "Weekly performance reports",
    ],
    highlighted: true,
    cta: "Get Started",
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    meetings: "Unlimited meetings",
    features: [
      "Everything in Growth",
      "Custom AI agent training",
      "Multi-ICP campaigns",
      "Priority support",
      "White-glove onboarding",
    ],
    highlighted: false,
    cta: "Contact Us",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "OUTFYRE filled our calendar in the first two weeks. We went from zero outbound to 12 qualified meetings a month.",
    name: "Sarah Chen",
    role: "CEO",
    company: "Nexus Labs",
    initials: "SC",
  },
  {
    quote:
      "The personalization is insane. Prospects think we've been researching them for months. Because our AI has.",
    name: "Marcus Webb",
    role: "VP Sales",
    company: "ScaleForge",
    initials: "MW",
  },
  {
    quote:
      "We cut our SDR headcount to zero and doubled pipeline. Best decision we made this year.",
    name: "Elena Rodriguez",
    role: "Founder",
    company: "Arcline",
    initials: "ER",
  },
] as const;
