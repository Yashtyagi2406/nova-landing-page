import {
  Workflow,
  Clock,
  Users,
  ShieldCheck,
  Zap,
  BarChart3,
} from 'lucide-react';
import type { Feature } from '../types';

export const features: Feature[] = [
  {
    id: 'automation',
    icon: Zap,
    title: 'Automate the busywork',
    description:
      'Set rules once and let NOVA route tasks, update statuses, and notify the right people automatically — no more manual handoffs.',
  },
  {
    id: 'planning',
    icon: Workflow,
    title: 'Plan without the spreadsheet',
    description:
      'Timelines, dependencies, and workloads live in one view, so a schedule change updates everything downstream instantly.',
  },
  {
    id: 'time-tracking',
    icon: Clock,
    title: 'See where time actually goes',
    description:
      'Lightweight time tracking built into every task, rolled up into reports your team will actually keep updated.',
  },
  {
    id: 'collaboration',
    icon: Users,
    title: 'Work in the open, together',
    description:
      'Comments, files, and decisions stay attached to the work itself, so context never gets lost in another chat thread.',
  },
  {
    id: 'security',
    icon: ShieldCheck,
    title: 'Built for how teams are governed',
    description:
      'Role-based permissions, audit logs, and SSO come standard, so IT approves NOVA as fast as your team adopts it.',
  },
  {
    id: 'insights',
    icon: BarChart3,
    title: 'Know what is actually on track',
    description:
      'Live dashboards surface at-risk work before it becomes a missed deadline, not after.',
  },
];
