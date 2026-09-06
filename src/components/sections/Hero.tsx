import { ArrowRight, PlayCircle, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { MaskedHeading } from '../ui/MaskedHeading';
import { scrollToSection } from '../../lib/utils';

interface HeroProps {
  onWatchDemo: () => void;
}

export function Hero({ onWatchDemo }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
      {/* Radiant ambient glow mesh */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-full max-w-7xl -z-10 opacity-70 dark:opacity-50 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at 50% 10%, rgba(76, 95, 224, 0.25) 0%, rgba(232, 163, 61, 0.12) 45%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.12] -z-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          color: '#8B8D98',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-8xl grid-cols-1 gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:px-10">
        <div className="animate-fade-up" style={{ animationDelay: '0ms' }}>
          {/* Live announcement beacon */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo/20 bg-indigo/5 dark:bg-indigo/10 px-3.5 py-1.5 text-xs font-medium text-indigo dark:text-indigo-light shadow-xs backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo" />
            </span>
            <span>Now with automated workload balancing</span>
            <span className="rounded-full bg-indigo/15 px-1.5 py-0.5 text-[10px] font-semibold text-indigo dark:text-indigo-light">
              v2.4
            </span>
          </div>

          <h1 className="mt-6 max-w-xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            <MaskedHeading
              text="Build better."
              src="/hero.jpg"
              fillScale={1.1}
              parallax={14}
              trigger="hover"
              as="span"
              className="inline-block mr-3"
            />
            <MaskedHeading
              text="Work smarter."
              src="/hero.jpg"
              fillScale={1.15}
              parallax={22}
              trigger="hover"
              as="span"
              className="inline-block"
            />
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            NOVA brings your team's projects, automations, and reporting into one unified workspace —
            so work moves forward seamlessly without waiting on status meetings.
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Button size="lg" className="group" onClick={() => scrollToSection('#final-cta')}>
              Get started free
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button variant="secondary" size="lg" onClick={onWatchDemo}>
              <PlayCircle className="h-4 w-4 text-indigo dark:text-indigo-light" aria-hidden="true" />
              Watch demo
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-indigo" aria-hidden="true" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-indigo" aria-hidden="true" />
              14-day free trial
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-indigo" aria-hidden="true" />
              SOC2 Type II certified
            </span>
          </div>
        </div>

        {/* Live Interactive Workspace Card */}
        <div className="relative animate-fade-up lg:ml-4" style={{ animationDelay: '150ms' }}>
          {/* Ambient Glow underneath mockup */}
          <div
            className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-indigo/30 via-indigo/10 to-amber/25 blur-2xl opacity-75 dark:opacity-40 -z-10"
            aria-hidden="true"
          />

          <div className="animate-float rounded-2xl border border-line/80 dark:border-white/10 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-xl p-5 pb-12 sm:pb-16 shadow-[0_24px_50px_-15px_rgba(20,22,28,0.18)] dark:shadow-[0_24px_50px_-15px_rgba(0,0,0,0.6)] transition-all duration-300">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-line/80 dark:border-white/10 pb-3.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                <span className="ml-3 font-display text-xs font-medium text-ink/80 dark:text-paper/80">
                  Sprint 14 — Product Launch
                </span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-indigo/10 px-2 py-0.5 text-[11px] font-medium text-indigo dark:text-indigo-light">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo animate-pulse" />
                Active
              </span>
            </div>

            {/* Sprint Progress Bar */}
            <div className="mt-3.5 flex items-center justify-between text-xs text-muted">
              <span>Overall Progress</span>
              <span className="font-semibold text-ink dark:text-paper">78%</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-line dark:bg-line-dark">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo via-indigo-light to-amber transition-all duration-1000"
                style={{ width: '78%' }}
              />
            </div>

            {/* Sprint Tasks */}
            <div className="mt-4 flex flex-col gap-2.5">
              {[
                {
                  name: 'Design final review',
                  status: 'Done',
                  tone: 'bg-indigo/10 text-indigo-dark dark:text-indigo-light border-indigo/20',
                  assignee: 'SL',
                },
                {
                  name: 'API integration testing',
                  status: 'In progress',
                  tone: 'bg-amber/15 text-amber-dark dark:text-amber border-amber/30',
                  assignee: 'AK',
                },
                {
                  name: 'Marketing site copy',
                  status: 'In progress',
                  tone: 'bg-amber/15 text-amber-dark dark:text-amber border-amber/30',
                  assignee: 'MR',
                },
                {
                  name: 'Beta user onboarding',
                  status: 'Review',
                  tone: 'bg-indigo/10 text-indigo border-indigo/20',
                  assignee: 'EC',
                },
                {
                  name: 'Global CDN deployment',
                  status: 'Queued',
                  tone: 'bg-ink/5 text-ink/60 dark:bg-paper/10 dark:text-paper/60 border-transparent',
                  assignee: 'YT',
                },
              ].map((row) => (
                <div
                  key={row.name}
                  className="group flex items-center justify-between rounded-xl border border-line/70 dark:border-white/5 bg-paper/40 dark:bg-white/[0.02] px-3.5 py-2.5 transition-colors hover:border-indigo/30 hover:bg-paper dark:hover:bg-white/[0.05]"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink/10 dark:bg-paper/15 text-[10px] font-bold text-ink dark:text-paper">
                      {row.assignee}
                    </span>
                    <span className="text-sm font-medium text-ink dark:text-paper">{row.name}</span>
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${row.tone}`}
                  >
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Velocity Badge */}
          <div className="absolute -bottom-6 -left-4 hidden sm:flex items-center gap-3 rounded-2xl border border-line/80 dark:border-white/10 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-xl px-4 py-3 shadow-[0_12px_30px_-8px_rgba(20,22,28,0.2)] dark:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.6)] z-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo/10 text-indigo dark:text-indigo-light">
              <TrendingUp className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted">Team velocity</p>
              <div className="flex items-baseline gap-1.5">
                <p className="font-display text-2xl font-bold text-ink dark:text-paper">
                  +38%
                </p>
                <span className="text-xs font-medium text-indigo">vs last month</span>
              </div>
            </div>
          </div>

          {/* Floating Automation Badge */}
          <div className="absolute -top-4 -right-3 hidden md:flex items-center gap-2.5 rounded-full border border-line/80 dark:border-white/10 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-xl px-4 py-2 shadow-[0_10px_25px_-5px_rgba(20,22,28,0.15)] dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)]">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber/15 text-amber">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            </div>
            <p className="text-xs font-medium text-ink dark:text-paper">
              <span className="font-bold text-amber-dark dark:text-amber">142</span> tasks automated today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
