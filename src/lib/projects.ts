export type Project = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  image: string;
  summary: string;
  challenge: string;
  approach: string;
  results: { label: string; value: string }[];
  services: string[];
  quote?: { text: string; author: string; role: string };
};

export const projects: Project[] = [
  {
    slug: "boutique-retail-growth",
    title: "From Side Hustle to Retirement-Ready Owner",
    client: "A 42-year-old founder of a boutique retail chain",
    industry: "Retail & Small Business",
    image: "/images/project-1.jpg",
    summary:
      "A retail founder was reinvesting every dollar into growth with zero personal balance sheet. We built a 10-year plan that extracted value systematically while funding retirement and a future exit.",
    challenge:
      "The owner had strong revenue but no separation between business and personal finances, no retirement savings, and a tax structure that penalized every profitable quarter.",
    approach:
      "We restructured the entity to an S-corp, implemented a solo 401(k) with profit sharing, built a disciplined owner's compensation model, and created a personal investment portfolio funded by 15% of monthly operating profit.",
    results: [
      { label: "Personal savings rate", value: "0% → 15%" },
      { label: "Annual tax reduction", value: "$38,000" },
      { label: "Retirement portfolio (yr 5)", value: "$610,000" },
      { label: "Business valuation uplift", value: "+42%" },
    ],
    services: ["Tax Strategy", "Retirement Planning", "Investment Management"],
    quote: {
      text: "For the first time I know exactly what the business is worth to my family, not just to my customers.",
      author: "M. Chen",
      role: "Founder, boutique retail chain",
    },
  },
  {
    slug: "early-retirement-blueprint",
    title: "Retiring at 58 — With Confidence, Not Luck",
    client: "A senior engineer and teacher, both 54",
    industry: "Professional Services & Education",
    image: "/images/project-2.jpg",
    summary:
      "Two professionals wanted to retire at 58 — four years early. Our longevity and tax modeling found the path, including a Roth conversion bridge that saved six figures in lifetime taxes.",
    challenge:
      "Early retirement meant 10 uncovered years before Medicare and Social Security, a concentrated employer stock position, and a pension lump-sum decision worth $480,000.",
    approach:
      "We built a withdrawal bridge using taxable accounts and a 5-year Roth conversion ladder, de-risked the concentrated stock with a collar strategy, and modeled the pension as an annuity vs. lump sum — the annuity won, preserving income for life.",
    results: [
      { label: "Retirement age", value: "62 → 58" },
      { label: "Lifetime tax savings", value: "$142,000" },
      { label: "Income replacement", value: "94%" },
      { label: "Portfolio stress-test survival", value: "99%" },
    ],
    services: ["Retirement Planning", "Tax Strategy", "Investment Management"],
    quote: {
      text: "We retired on a Tuesday and slept better that night than we had in 30 years of working.",
      author: "D. & R. Alvarez",
      role: "Clients since 2019",
    },
  },
  {
    slug: "legacy-and-college-fund",
    title: "Two Kids Through College, Zero Student Debt",
    client: "A physician and a nurse, ages 38 and 36",
    industry: "Healthcare",
    image: "/images/project-3.jpg",
    summary:
      "A busy medical family wanted to fully fund two children's college educations without derailing their own retirement. We built a 529 strategy that maximized state deductions and aid eligibility simultaneously.",
    challenge:
      "High income disqualified them from most aid, they had no 529 accounts, and a grandparent wanted to contribute without triggering aid penalties on the FAFSA.",
    approach:
      "We opened two age-based 529s with a front-loaded contribution strategy, positioned the grandparent's gifts into a 529 owned by the parents, and ran an aid-optimization model that shifted asset ownership for maximum eligibility.",
    results: [
      { label: "Projected college cost funded", value: "100%" },
      { label: "State tax savings", value: "$31,000" },
      { label: "Student loan debt", value: "$0" },
      { label: "Retirement plan status", value: "On track" },
    ],
    services: ["College Savings", "Tax Strategy", "Insurance Review"],
    quote: {
      text: "We show up to work saving lives; WealthPath handled the math that secures our kids' futures.",
      author: "Dr. S. Patel",
      role: "Client since 2021",
    },
  },
];
