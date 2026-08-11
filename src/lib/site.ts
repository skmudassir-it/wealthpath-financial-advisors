export const siteConfig = {
  name: "WealthPath Financial Advisors",
  shortName: "WealthPath",
  tagline: "Financial Planning & Wealth Management",
  description:
    "WealthPath Financial Advisors is a fiduciary financial planning and wealth management firm helping individuals, families and businesses build, grow and protect wealth with confidence.",
  url: "https://wealthpath-financial-advisors.amsitservices.com",
  phone: "+1 (555) 012-3456",
  email: "hello@wealthpathadvisors.com",
  address: {
    street: "1200 Harbor Bay Plaza, Suite 900",
    city: "San Diego",
    region: "CA",
    postalCode: "92101",
    country: "US",
  },
  hours: "Mon–Fri, 8:00 AM – 6:00 PM PT",
  socials: [
    { name: "LinkedIn", icon: "fa-brands fa-linkedin-in", href: "https://linkedin.com" },
    { name: "X", icon: "fa-brands fa-x-twitter", href: "https://x.com" },
    { name: "Facebook", icon: "fa-brands fa-facebook-f", href: "https://facebook.com" },
    { name: "Instagram", icon: "fa-brands fa-instagram", href: "https://instagram.com" },
    { name: "YouTube", icon: "fa-brands fa-youtube", href: "https://youtube.com" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
] as const;
