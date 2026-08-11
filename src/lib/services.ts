export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string; // lucide icon name handled by map
  image: string;
  intro: string;
  features: { title: string; description: string }[];
  process: string[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "retirement-planning",
    title: "Retirement Planning",
    short:
      "Income strategies, withdrawal sequencing and pension/401(k) optimization so your savings last as long as you do.",
    icon: "Umbrella",
    image: "/images/service-retirement.jpg",
    intro:
      "Retirement is the longest financial goal you will ever plan for — often 30 years or more. Our retirement planners build a personalized income roadmap that balances growth, guaranteed income, healthcare costs and legacy goals, then stress-tests it against market downturns and longevity risk.",
    features: [
      { title: "Income Replacement Analysis", description: "Model your target lifestyle cost and the gap your portfolio must fill each year." },
      { title: "Withdrawal Sequencing", description: "Tax-efficient drawdown order across 401(k), IRA, Roth and taxable accounts." },
      { title: "Social Security Optimization", description: "Claiming strategies that can add tens of thousands in lifetime benefits." },
      { title: "Healthcare & Medicare Planning", description: "Project and prepare for premiums, long-term care and out-of-pocket costs." },
      { title: "Pension & Annuity Decisions", description: "Lump-sum vs. annuity analysis with clear breakeven math." },
      { title: "Annual Retirement Checkups", description: "Quarterly reviews keep your plan aligned with markets and life changes." },
    ],
    process: [
      "Discovery session to map your retirement vision and current finances",
      "Cash-flow, longevity and tax modeling across scenarios",
      "Personalized investment & income strategy designed with your advisor",
      "Documented retirement plan with milestones and triggers",
      "Quarterly reviews and annual full-plan refresh",
    ],
    outcomes: [
      "A documented retirement plan you can execute with confidence",
      "Income you can count on through market cycles",
      "Lower lifetime taxes on withdrawals",
      "Peace of mind that your plan survives the numbers you can't predict",
    ],
    faqs: [
      { q: "How much do I need to retire comfortably?", a: "The answer depends on your lifestyle, timeline and health. We build a cash-flow model that projects your spending, inflation and income sources, then solve for the portfolio size that supports it with a high confidence level." },
      { q: "When should I start planning for retirement?", a: "Yesterday is ideal, today is great. Even 5–10 years out, we can make meaningful changes to your savings rate, asset allocation and tax strategy that compound into a materially better outcome." },
      { q: "Do you manage retirement accounts directly?", a: "Yes. As a fiduciary, we offer discretionary portfolio management for IRAs, 401(k) rollovers and taxable accounts, or we can build a plan around accounts you manage yourself." },
    ],
    cta: "Start your retirement roadmap",
  },
  {
    slug: "investment-management",
    title: "Investment Management",
    short:
      "Diversified, evidence-based portfolios with disciplined rebalancing, tax-aware trading and transparent reporting.",
    icon: "LineChart",
    image: "/images/service-investment.jpg",
    intro:
      "Our investment team manages portfolios the way institutions do — with rigor, discipline and transparency. We design globally diversified portfolios around your goals, risk tolerance and time horizon, then keep them on track through rebalancing, tax-loss harvesting and ongoing research.",
    features: [
      { title: "Goal-Based Asset Allocation", description: "Portfolios built from the ground up around your objectives, not market whims." },
      { title: "Global Diversification", description: "Access to thousands of securities across equities, bonds, real assets and private markets." },
      { title: "Tax-Loss Harvesting", description: "Systematically capture losses to offset gains and reduce your tax bill." },
      { title: "Disciplined Rebalancing", description: "Rules-based rebalancing keeps risk where you agreed it should be." },
      { title: "ESG & Values-Aligned Investing", description: "Screen for the causes and industries you care about without sacrificing returns." },
      { title: "Transparent Reporting", description: "One dashboard showing performance, fees and holdings — updated daily." },
    ],
    process: [
      "Risk profiling and goal mapping in your first meetings",
      "Portfolio design with asset allocation and fee benchmarking",
      "Implementation across custodians with tax efficiency in mind",
      "Continuous monitoring with quarterly performance reviews",
    ],
    outcomes: [
      "A portfolio matched to your risk and goals — not the latest trend",
      "Lower costs and taxes over the long run",
      "Clear, jargon-free reporting you actually read",
      "An advisor who answers your calls when markets get scary",
    ],
    faqs: [
      { q: "What is your typical portfolio fee?", a: "Our management fee starts at 0.75% annually, decreasing at higher balances. There are no commissions, no hidden fees, and we disclose every dollar we earn from your account." },
      { q: "Can you manage accounts I already have at other firms?", a: "Yes. We act as an advisor of record across most major custodians, so you can keep your existing accounts or consolidate them — your choice." },
      { q: "How do you handle market downturns?", a: "With process, not panic. Our rebalancing rules buy assets when they're cheap relative to targets, and your plan already priced in volatility. We'll talk you through what's happening and why your plan still works." },
    ],
    cta: "Build a better portfolio",
  },
  {
    slug: "tax-strategy",
    title: "Tax Strategy",
    short:
      "Year-round tax planning that reduces what you owe today and protects your wealth from unnecessary taxes tomorrow.",
    icon: "ReceiptText",
    image: "/images/service-tax.jpg",
    intro:
      "Most people pay more tax than they legally owe — simply because nobody planned ahead. Our tax strategists work alongside your CPA to structure income, investments, business ownership and charitable giving so you keep more of what you earn, every single year.",
    features: [
      { title: "Tax-Efficient Investing", description: "Asset location, fund selection and gain harvesting done right." },
      { title: "Roth Conversion Planning", description: "Multi-year conversion roadmaps that fill low brackets strategically." },
      { title: "Business Entity Structuring", description: "S-corp, LLC and solo-k decisions that save owners thousands annually." },
      { title: "Charitable Giving Strategies", description: "Donor-advised funds, QCDs and appreciated-asset donations." },
      { title: "Estimated Payment Planning", description: "Never face an underpayment penalty or surprise April bill again." },
      { title: "CPA Collaboration", description: "We coordinate with your tax preparer so strategies actually land on the return." },
    ],
    process: [
      "Full tax review of last year's return and this year's projected income",
      "Opportunity map: 10–20 specific actions ranked by savings",
      "Implementation with your CPA or our partner preparers",
      "Quarterly touchpoints to adapt to income changes and new laws",
    ],
    outcomes: [
      "Lower effective tax rate without changing your lifestyle",
      "A documented multi-year tax plan, not just last-minute moves",
      "No surprise tax bills — ever",
      "Clean coordination between your investments, business and return",
    ],
    faqs: [
      { q: "Do you prepare tax returns?", a: "We focus on strategy, and we partner with a network of CPAs who prepare returns. Many clients use both — our strategy team and their preparer — with full coordination." },
      { q: "Is tax planning worth it outside tax season?", a: "Absolutely. Nearly every tax-saving move (conversions, harvesting, entity changes, donations) must be set up before year-end. December is too late for most of them." },
      { q: "Can you help with back taxes or audits?", a: "For historical issues we refer you to specialist tax resolution attorneys. Our strength is preventing problems and optimizing the path forward." },
    ],
    cta: "Cut your tax bill legally",
  },
  {
    slug: "estate-planning",
    title: "Estate Planning",
    short:
      "Wills, trusts, beneficiary reviews and legacy strategies that protect your family and your wealth from probate and estate taxes.",
    icon: "Landmark",
    image: "/images/service-estate.jpg",
    intro:
      "Estate planning isn't about being old — it's about being ready. We coordinate with estate attorneys to ensure your wealth transfers to the people and causes you love, with minimal taxes, no probate delays, and zero family conflict.",
    features: [
      { title: "Trust Structuring & Funding", description: "Revocable living trusts, ILITs and dynasty trusts designed for your goals." },
      { title: "Will & Beneficiary Reviews", description: "Ensure beneficiary forms, wills and account titles all tell the same story." },
      { title: "Estate Tax Mitigation", description: "Gifting strategies, valuation discounts and annual exclusion planning." },
      { title: "Incapacity Planning", description: "Powers of attorney, healthcare directives and a plan if you can't decide." },
      { title: "Legacy & Philanthropy", description: "Structures that turn your values into a lasting family or charitable legacy." },
      { title: "Family Governance", description: "Heir education and family meetings that prevent money from dividing loved ones." },
    ],
    process: [
      "Estate inventory: assets, accounts, beneficiaries and insurance",
      "Goal mapping with your family and legacy wishes",
      "Attorney referral and document design with our input",
      "Funding your trust so the documents actually work",
      "Periodic reviews every 3 years or after major life events",
    ],
    outcomes: [
      "Your family avoids probate — weeks instead of years",
      "Estate taxes minimized or eliminated entirely",
      "Asset protection for heirs and spouses",
      "Clear, conflict-free transfer of your life's work",
    ],
    faqs: [
      { q: "Do I need a trust or is a will enough?", a: "If you own a home, have minor children, or want to avoid probate, a living trust is almost always worth it. We'll run the math on your specific situation — including state probate costs." },
      { q: "How often should I update my estate plan?", a: "Review after major life events — marriage, divorce, birth, death, business sale, or moving states — and at least every 3–5 years to account for tax law changes." },
      { q: "Do you draft the legal documents?", a: "No — we design the strategy and coordinate with vetted estate attorneys who draft and execute documents. You get one integrated plan instead of siloed advice." },
    ],
    cta: "Protect your legacy",
  },
  {
    slug: "insurance-review",
    title: "Insurance Review",
    short:
      "Independent analysis of life, disability, long-term care and liability coverage — no products to sell, just honest gaps analysis.",
    icon: "ShieldCheck",
    image: "/images/service-insurance.jpg",
    intro:
      "Insurance is how you protect the plan you've built. We analyze your existing policies against your actual risks, identify gaps and overlaps, and shop the market on your behalf — independently, with no commission incentives to steer you wrong.",
    features: [
      { title: "Life Insurance Needs Analysis", description: "DIME-style calculations of exactly how much coverage your family needs." },
      { title: "Policy & Premium Audits", description: "Is your 20-year-old term policy still the right tool? We check." },
      { title: "Disability Income Coverage", description: "Your biggest asset is your earning power — protect it properly." },
      { title: "Long-Term Care Planning", description: "Traditional LTC, hybrid policies and self-funding strategies." },
      { title: "Liability & Umbrella Review", description: "Close the gaps that lawsuits exploit between your policies." },
      { title: "Claims Advocacy", description: "When it matters most, we help you navigate the claims process." },
    ],
    process: [
      "Inventory every policy you own — coverage, premiums, beneficiaries",
      "Risk exposure analysis across life, health, disability and liability",
      "Market comparison of carriers and policy structures",
      "Recommendation report with clear buy/hold/replace guidance",
      "Annual review before renewal dates",
    ],
    outcomes: [
      "Coverage that matches your actual risk — not your agent's quota",
      "Premium savings by removing redundant and obsolete policies",
      "Beneficiaries and ownership updated and correct",
      "A family that is financially safe if the unthinkable happens",
    ],
    faqs: [
      { q: "Are you insurance agents?", a: "No. We are fee-only advisors. We don't sell insurance products and earn no commissions, which is exactly why we can give you unbiased buy/hold/replace advice." },
      { q: "How much life insurance do I need?", a: "We model your family's income needs, debts, education goals and current assets, then solve for the coverage gap. The number is unique to you — there's no one-size-fits-all rule." },
      { q: "Should I buy whole life or term?", a: "For 9 out of 10 families, term insurance plus investing the premium difference wins. For estate and business planning, permanent coverage can be right. We'll show you the comparison with your real numbers." },
    ],
    cta: "Audit your coverage",
  },
  {
    slug: "college-savings",
    title: "College Savings",
    short:
      "529 plans, financial aid strategy and cash-flow planning that fund education without derailing your retirement.",
    icon: "GraduationCap",
    image: "/images/service-college.jpg",
    intro:
      "College is one of the largest expenses your family will face — and one of the most emotional. We build a college funding strategy that balances saving aggressively, positioning for financial aid, and — critically — never sacrificing your own retirement to pay for theirs.",
    features: [
      { title: "529 Plan Optimization", description: "State tax benefits, contribution timing and beneficiary flexibility." },
      { title: "Financial Aid Positioning", description: "Asset and income strategies that can lower your Expected Family Contribution." },
      { title: "Education Cash-Flow Planning", description: "Monthly savings targets that fit your budget, with automatic increases." },
      { title: "Gifting & Grandparent Strategies", description: "Tax-smart ways for family to contribute without aid penalties." },
      { title: "Alternative Funding", description: "Scholarships, merit aid, work-study and prudent borrowing options." },
      { title: "Coordination with Retirement", description: "We optimize the whole picture — not education in a vacuum." },
    ],
    process: [
      "Education cost projection for your target schools",
      "Savings gap analysis with monthly contribution targets",
      "529 account design and beneficiary structure",
      "Financial aid strategy integrated with your tax plan",
      "Annual recalibration as the student nears enrollment",
    ],
    outcomes: [
      "A concrete monthly number that funds the goal — and fits your budget",
      "Maximum state tax benefits and aid eligibility",
      "Fewer student loans — or none at all",
      "Retirement plan untouched and on track",
    ],
    faqs: [
      { q: "What if my child doesn't go to college?", a: "529 plans are flexible: you can change beneficiaries to another family member, and the SECURE Act allows limited penalty-free rollovers to a Roth IRA for unused funds." },
      { q: "Does a 529 hurt financial aid?", a: "Parent-owned 529s are assessed at a low rate in the FAFSA formula — typically far less than income or student assets. We position ownership and timing to minimize the impact." },
      { q: "Should I prioritize retirement or college savings?", a: "Retirement, always — students have scholarships, loans and time; retirees have neither. We'll show you the trade-off with real numbers so the decision is informed, not guilty." },
    ],
    cta: "Fund their future",
  },
  {
    slug: "wealth-transfer",
    title: "Wealth Transfer",
    short:
      "Multi-generational strategies that move your wealth to the next generation efficiently, privately and on your terms.",
    icon: "Scale",
    image: "/images/service-wealth-transfer.jpg",
    intro:
      "You've spent a lifetime building wealth — now let's make sure it lands where you intend, when you intend, and keeps working for your family for generations. We design transfer strategies that coordinate gifting, trusts, tax structures and family governance into one seamless legacy plan.",
    features: [
      { title: "Gifting & Annual Exclusion Planning", description: "Maximize tax-free transfers using the annual exclusion and lifetime exemption." },
      { title: "Generation-Skipping Strategies", description: "Dynasty and generation-skipping trusts that benefit grandchildren and beyond." },
      { title: "Business Succession Planning", description: "Transfer ownership of your company with management continuity intact." },
      { title: "Life Insurance in Transfer", description: "Use policies to equalize inheritances and fund estate taxes at a discount." },
      { title: "Charitable Remainder & Lead Trusts", description: "Give to causes you love while your family retains income — or the reverse." },
      { title: "Family Governance & Heir Readiness", description: "Education, mission statements and meeting rhythms that keep wealth uniting, not dividing." },
    ],
    process: [
      "Legacy goal mapping with you and your family",
      "Wealth transfer audit: gifting capacity, trusts, insurance and entity structures",
      "Design of the transfer plan with attorneys and tax specialists",
      "Implementation: funding, titling and beneficiary alignment",
      "Annual reviews and family meeting facilitation",
    ],
    outcomes: [
      "A clear, documented legacy plan your family understands",
      "Transfer taxes minimized across generations",
      "Privacy and probate avoidance for your estate",
      "A family prepared to steward what they inherit",
    ],
    faqs: [
      { q: "How much can I pass on tax-free?", a: "The federal lifetime gift and estate exemption is currently very high (millions per individual), but it is scheduled to drop significantly. We model your estate against both today's rules and the sunset — and build flexibility so the plan survives whatever Congress does." },
      { q: "When should I start wealth transfer planning?", a: "The best time is before you think you need it — gifting strategies, trusts and business succession all benefit from years of runway. Even simple steps like beneficiary reviews can save your family from probate." },
      { q: "Will my children be ready for the money?", a: "Financial readiness is as important as legal structure. We build heir education, staged distributions and family governance into the plan so wealth becomes a tool for your family's goals — not a source of conflict." },
    ],
    cta: "Plan your legacy",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

// lucide icon name -> component mapping
export const serviceIconMap: Record<string, string> = Object.fromEntries(
  services.map((s) => [s.slug, s.icon])
);
