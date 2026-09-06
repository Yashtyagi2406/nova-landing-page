import type { Solution } from '../types';

export const solutions: Solution[] = [
  {
    id: 'engineering',
    team: 'Engineering',
    headline: 'Ship on a timeline everyone can see',
    description:
      'Sprint boards, dependency tracking, and release timelines stay linked, so a slipped ticket updates the release date automatically instead of surprising someone in standup.',
    points: ['Sprint & backlog boards', 'Release timeline view', 'Dependency alerts'],
  },
  {
    id: 'marketing',
    team: 'Marketing',
    headline: 'Run campaigns without losing the thread',
    description:
      'Content calendars, approval steps, and asset versions live together, so nothing launches without the right sign-off — and nothing sits waiting for one unnecessarily.',
    points: ['Content calendar', 'Approval workflows', 'Asset version history'],
  },
  {
    id: 'operations',
    team: 'Operations',
    headline: 'Standardize how work actually gets done',
    description:
      'Turn recurring processes into reusable templates with built-in checklists, so quality does not depend on who happens to be running the process this week.',
    points: ['Reusable process templates', 'Checklist enforcement', 'SLA tracking'],
  },
  {
    id: 'client-services',
    team: 'Client Services',
    headline: 'Give every client a clear line of sight',
    description:
      'Shareable client views show progress without exposing internal notes, cutting down status-update emails while keeping clients informed.',
    points: ['Client-facing views', 'Automated status updates', 'Feedback capture'],
  },
];
