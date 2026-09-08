import { Users, Zap, Star, ShieldCheck, Sparkles } from 'lucide-react';
import { stats } from '../../data/stats';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { cn } from '../../lib/utils';

const statMeta = [
  {
    icon: Users,
    glow: 'from-indigo via-indigo-light to-transparent',
    iconColor: 'text-indigo dark:text-indigo-light bg-indigo/10 dark:bg-indigo/20 border-indigo/20 dark:border-indigo/30',
    caption: 'Across 45+ countries',
  },
  {
    icon: Zap,
    glow: 'from-amber via-amber-dark to-transparent',
    iconColor: 'text-amber-dark dark:text-amber bg-amber/10 dark:bg-amber/20 border-amber/20 dark:border-amber/30',
    caption: 'Hours reclaimed every week',
  },
  {
    icon: Star,
    glow: 'from-amber via-indigo-light to-transparent',
    iconColor: 'text-amber bg-amber/10 dark:bg-amber/20 border-amber/20 dark:border-amber/30',
    caption: 'Across 850+ verified reviews',
  },
  {
    icon: ShieldCheck,
    glow: 'from-emerald-500 via-indigo to-transparent',
    iconColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 border-emerald-500/20 dark:border-emerald-500/30',
    caption: 'Enterprise SLA commitment',
  },
];

export function Statistics() {
  return (
    <section className="relative overflow-hidden border-y border-line/80 dark:border-white/10 bg-white/70 dark:bg-[#0E111A]/80 backdrop-blur-xl py-20 sm:py-24 lg:py-32">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 dark:opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(76, 95, 224, 0.22) 0%, transparent 55%), radial-gradient(circle at 80% 50%, rgba(232, 163, 61, 0.12) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo/20 bg-indigo/5 dark:bg-indigo/10 dark:border-indigo/30 px-3.5 py-1.5 text-xs font-semibold text-indigo dark:text-indigo-light backdrop-blur-md shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-indigo dark:text-indigo-light" />
            <span>Proven Impact</span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink dark:text-paper sm:text-4xl lg:text-5xl">
            Numbers that drive real team velocity
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            Engineered to eliminate status overhead and accelerate cross-functional execution at scale.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-7">
          {stats.map((stat, i) => {
            const meta = statMeta[i] ?? statMeta[0];
            const Icon = meta.icon;

            return (
              <div
                key={stat.id}
                className="group relative overflow-hidden rounded-2xl border border-line/80 dark:border-white/[0.12] bg-white/85 dark:bg-[#121520]/85 backdrop-blur-2xl p-6 sm:p-7 shadow-[0_10px_30px_-10px_rgba(20,22,28,0.06)] dark:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo/40 dark:hover:border-indigo/50 hover:shadow-[0_20px_40px_-12px_rgba(76,95,224,0.18)] dark:hover:shadow-[0_20px_40px_-12px_rgba(76,95,224,0.25)]"
              >
                {/* Top Corner Ambient Glow */}
                <div
                  className={cn(
                    'pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-60',
                    meta.glow
                  )}
                  aria-hidden="true"
                />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  {/* Card Header with Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={cn(
                        'flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105',
                        meta.iconColor
                      )}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo/40 dark:bg-indigo-light/60 group-hover:animate-ping" />
                  </div>

                  {/* Counter Value */}
                  <div>
                    <p className="font-display text-4xl font-extrabold tracking-tight text-ink dark:text-white sm:text-5xl">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {meta.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
