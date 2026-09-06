import type { FAQItem } from '../types';

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does it take to get a team set up on NOVA?',
    answer:
      'Most teams are running their first project within a day. You can import existing tasks from a spreadsheet or CSV, and our templates cover common workflows like sprints, campaigns, and client onboarding.',
  },
  {
    id: 'faq-2',
    question: 'Does NOVA integrate with the tools we already use?',
    answer:
      'Yes. NOVA connects with common calendar, storage, and communication tools, and automation rules can trigger actions in those tools directly from a task update.',
  },
  {
    id: 'faq-3',
    question: 'Can I control what different team members are allowed to see or edit?',
    answer:
      'Role-based permissions let you control access at the workspace, project, and task level. Growth and Enterprise plans add custom roles and SSO for organization-wide control.',
  },
  {
    id: 'faq-4',
    question: 'What happens to our data if we cancel?',
    answer:
      'You can export every project, task, and file at any time from account settings. After cancellation, your data remains available for export for 30 days before removal.',
  },
  {
    id: 'faq-5',
    question: 'Is there a limit to how many automation rules we can create?',
    answer:
      'Starter includes basic automation for common triggers. Growth and Enterprise unlock unlimited custom rules, multi-step triggers, and conditional logic.',
  },
  {
    id: 'faq-6',
    question: 'Do you offer discounts for nonprofits or students?',
    answer:
      'Yes, verified nonprofits and educational institutions receive 30% off any plan. Reach out to our sales team with verification and we will apply the discount to your account.',
  },
];
