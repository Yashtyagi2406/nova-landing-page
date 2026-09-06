import { CheckCircle2, Calendar, Zap, BarChart3, Activity } from 'lucide-react';
import { Badge } from '../ui/Badge';

const points = [
  'One real-time workspace for tasks, roadmaps, files, and engineering decisions',
  'Autonomous trigger-based automation rules that run with zero developer maintenance',
  'Unified executive analytics and status reporting your leadership can actually trust',
];

export function ProductAbout() {
  return (
    <section id="product-about" className="relative overflow-hidden border-y border-line/80 dark:border-white/10 bg-white/70 dark:bg-surface-dark/70 backdrop-blur-xl py-24 lg:py-32">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[450px] w-[550px] rounded-full opacity-25 dark:opacity-20 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(232, 163, 61, 0.35) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <Badge tone="amber">Why teams switch to NOVA</Badge>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
            One unified workspace,{' '}
            <span className="bg-gradient-to-r from-amber to-amber-dark dark:to-[#F3BA63] bg-clip-text text-transparent">
              instead of five disconnected tools
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Most teams don't lose time doing the actual work — they lose it constantly reconciling five
            different tools that don't talk to each other. NOVA unifies planning,
            automation, and reporting on the same single source of truth.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo/10 text-indigo">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm sm:text-base text-ink dark:text-paper font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo/20 to-amber/20 blur-xl opacity-70 dark:opacity-40 -z-10" />

          <div className="rounded-2xl border border-line/80 dark:border-white/10 bg-paper/70 dark:bg-ink/70 backdrop-blur-xl p-6 sm:p-7 shadow-[0_20px_50px_-15px_rgba(20,22,28,0.1)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between border-b border-line/80 dark:border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-indigo" />
                <span className="font-display text-xs font-semibold uppercase tracking-wider text-ink dark:text-paper">
                  Real-time synchronization
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                100% In Sync
              </span>
            </div>

            {/* Three capability cards */}
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  title: 'Planning',
                  metric: '48 active epics',
                  progress: '86%',
                  icon: Calendar,
                  color: 'text-indigo bg-indigo/10 border-indigo/20',
                  bar: 'from-indigo to-indigo-light',
                },
                {
                  title: 'Automation',
                  metric: '1,290 runs/hr',
                  progress: '94%',
                  icon: Zap,
                  color: 'text-amber bg-amber/10 border-amber/20',
                  bar: 'from-amber to-[#F3BA63]',
                },
                {
                  title: 'Reporting',
                  metric: 'Zero-latency',
                  progress: '99%',
                  icon: BarChart3,
                  color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
                  bar: 'from-emerald-500 to-teal-400',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-line/80 dark:border-white/10 bg-white/90 dark:bg-surface-dark/90 p-4 transition-all hover:border-indigo/30 shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg border ${item.color}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-display text-xs font-bold text-ink dark:text-paper">
                        {item.progress}
                      </span>
                    </div>
                    <p className="mt-3 text-xs font-semibold text-ink dark:text-paper">{item.title}</p>
                    <p className="text-[11px] text-muted">{item.metric}</p>
                    <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-line dark:bg-line-dark">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${item.bar}`}
                        style={{ width: item.progress }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom System telemetry banner */}
            <div className="mt-5 rounded-xl border border-line/60 dark:border-white/5 bg-white/50 dark:bg-surface-dark/50 p-3.5 flex items-center justify-between text-xs">
              <span className="text-muted">Workflow throughput</span>
              <span className="font-display font-semibold text-indigo dark:text-indigo-light">
                18,400 events / min
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
