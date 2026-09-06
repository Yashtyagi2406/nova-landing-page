import type { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For small teams getting organized for the first time.',
    monthlyPrice: 9,
    annualPrice: 7,
    features: [
      'Up to 10 team members',
      'Unlimited tasks and projects',
      'Basic automation rules',
      'Shared timelines',
      '5GB file storage',
    ],
    cta: 'Start free trial',
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'For teams scaling processes across departments.',
    monthlyPrice: 24,
    annualPrice: 19,
    featured: true,
    features: [
      'Up to 50 team members',
      'Advanced automation & triggers',
      'Custom dashboards & reporting',
      'Time tracking & workload view',
      '100GB file storage',
      'Priority support',
    ],
    cta: 'Start free trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For organizations that need control at scale.',
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      'Unlimited team members',
      'SSO & advanced permissions',
      'Audit logs & compliance exports',
      'Dedicated success manager',
      'Unlimited file storage',
      '99.9% uptime SLA',
    ],
    cta: 'Talk to sales',
  },
];
