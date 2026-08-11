export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "WealthPath rebuilt our entire financial life in one year — retirement plan, taxes, insurance, the works. For the first time, I understand every number and every decision.",
    name: "Sarah Mitchell",
    role: "VP of Operations, tech company",
    initials: "SM",
  },
  {
    quote:
      "I came in with a messy portfolio and zero confidence. Three years later my portfolio is up, my taxes are down, and my advisor answers when the market drops. Worth every penny.",
    name: "James Okonkwo",
    role: "Orthopedic surgeon",
    initials: "JO",
  },
  {
    quote:
      "They found $38,000 in annual tax savings in the first year alone — more than the fee by a wide margin. The tax strategy alone pays for the whole relationship.",
    name: "Elena Rodriguez",
    role: "Founder, boutique retail chain",
    initials: "ER",
  },
  {
    quote:
      "My parents used WealthPath for 20 years. When dad passed, the estate transferred in six weeks with zero family conflict. That's when I understood what they actually do.",
    name: "David Kim",
    role: "Second-generation client",
    initials: "DK",
  },
  {
    quote:
      "As a teacher, I thought advisors were for rich people. WealthPath showed me a plan that got us to early retirement on a modest income. Life-changing.",
    name: "Margaret Hayes",
    role: "Retired educator",
    initials: "MH",
  },
  {
    quote:
      "The college funding strategy alone saved us $31,000 in state taxes. Two kids through college, zero debt, retirement untouched. I recommend them to every parent I know.",
    name: "Dr. Sanjay Patel",
    role: "Physician",
    initials: "SP",
  },
];

export const stats = [
  { value: "$2.4B+", label: "Client assets guided" },
  { value: "1,900+", label: "Families advised" },
  { value: "26 yrs", label: "Average advisor experience" },
  { value: "98%", label: "Client retention rate" },
] as const;

export const companyValues = [
  {
    title: "Fiduciary, Always",
    description:
      "We are legally and ethically bound to act in your best interest. Every recommendation, every product, every year.",
    icon: "ShieldCheck",
  },
  {
    title: "Fee-Transparent",
    description:
      "No commissions. No hidden loads. You see exactly what you pay, in plain dollars, before you agree to anything.",
    icon: "Eye",
  },
  {
    title: "Plan-First, Product-Later",
    description:
      "Products are tools we reach for only when a plan requires them — never the starting point of a conversation.",
    icon: "Map",
  },
  {
    title: "Advice for Life's Chapters",
    description:
      "Marriage, children, career changes, loss, inheritance, retirement. We show up for the whole story, not just the numbers.",
    icon: "HeartHandshake",
  },
] as const;

export const faqs = [
  {
    q: "What makes WealthPath different from a typical brokerage?",
    a: "Three things: we are fiduciary advisors (legally required to put you first), we are fee-only (we earn nothing from selling products), and we are planners first (we build a written plan before we ever touch a portfolio).",
  },
  {
    q: "How are your fees structured?",
    a: "We charge a transparent annual fee based on a percentage of assets under management, starting at 0.75% and tiering down at higher balances. Planning-only engagements are available from $2,500 per year. There are no commissions, no transaction fees and no hidden charges.",
  },
  {
    q: "How much money do I need to work with you?",
    a: "Most clients begin with between $250,000 and $500,000 in investable assets, but we evaluate each situation on its own merits — especially for planning-only engagements where the account minimums don't apply.",
  },
  {
    q: "How often will we meet?",
    a: "At minimum, quarterly. New clients meet more frequently during onboarding. Between meetings, you have direct access to your advisor and our secure client portal with live portfolio and planning dashboards.",
  },
  {
    q: "Do you work with clients outside California?",
    a: "Yes. We serve clients in 40+ states through virtual meetings and our secure document portal, and we hold registrations where required. Many clients never visit our office in person — though the coffee is worth it if you do.",
  },
  {
    q: "What happens to my plan if markets crash?",
    a: "Your plan is built and stress-tested against exactly that scenario before we invest a dollar. Downturns trigger rebalancing rules and scheduled conversations — never panic decisions. Our 26-year average advisor tenure means the people you trust today are the people who'll guide you through it.",
  },
] as const;
