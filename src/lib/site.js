// Central place for editable site content.
// Swap the placeholder copy, links and email below with real details any time —
// nothing else in the codebase needs to change.

export const site = {
  name: "Atiij Studio",
  shortName: "Atiij",
  tagline: "Software, built with care.",
  description:
    "Atiij Studio designs and builds web apps, software products, and digital tools for founders and teams who want to move fast without cutting corners.",
  url: "https://example.com", // TODO: replace with your real domain once deployed
  email: "hello@example.com", // TODO: replace with the studio's public contact email
  social: {
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
  },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    title: "Web & App Development",
    description:
      "Fast, responsive websites and web apps built on modern, maintainable foundations — from marketing sites to full products.",
    icon: "code",
  },
  {
    title: "Custom Software",
    description:
      "Internal tools, dashboards, and automation that fit how your team actually works, instead of forcing you into someone else's template.",
    icon: "layers",
  },
  {
    title: "Product Design",
    description:
      "Interfaces that are simple to use and pleasant to look at, designed alongside the engineering so nothing gets lost in translation.",
    icon: "figma",
  },
  {
    title: "Consulting & Support",
    description:
      "Architecture reviews, technical advice, and ongoing support for teams who need an extra pair of experienced hands.",
    icon: "compass",
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    description: "We start by understanding the problem, the users, and what success actually looks like.",
  },
  {
    step: "02",
    title: "Design",
    description: "Wireframes and prototypes get the shape right before a single line of production code is written.",
  },
  {
    step: "03",
    title: "Build",
    description: "Iterative development with regular check-ins, so there are no surprises at the end.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We ship, monitor, and stick around to help the product grow after launch.",
  },
];

// Sample projects — replace with real work once you have case studies to show.
export const projects = [
  {
    title: "Project One",
    summary: "A short one-line description of the product and the problem it solves.",
    tags: ["Web App", "SaaS"],
  },
  {
    title: "Project Two",
    summary: "A short one-line description of the product and the problem it solves.",
    tags: ["Mobile", "Design"],
  },
  {
    title: "Project Three",
    summary: "A short one-line description of the product and the problem it solves.",
    tags: ["Internal Tool", "Automation"],
  },
];

export const values = [
  {
    title: "Clarity over cleverness",
    description: "We'd rather ship something simple and understandable than something impressive and fragile.",
  },
  {
    title: "Small, honest team",
    description: "You talk to the people actually building your product — no account managers in between.",
  },
  {
    title: "Built to last",
    description: "Code and design decisions are made with the next three years in mind, not just the next demo.",
  },
];
