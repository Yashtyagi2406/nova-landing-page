import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  featured?: boolean;
  features: string[];
  cta: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface Solution {
  id: string;
  team: string;
  headline: string;
  description: string;
  points: string[];
}

export interface Step {
  id: string;
  title: string;
  description: string;
}

export interface TrustedLogo {
  id: string;
  name: string;
}
