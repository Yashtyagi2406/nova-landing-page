import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

export function FinalCTA() {
  return (
    <section id="final-cta" className="relative overflow-hidden py-28 lg:py-36 text-paper border-t border-line/80 dark:border-white/10">
      {/* Cosmic Aurora Glow accent */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 dark:opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(76, 95, 224, 0.35) 0%, rgba(232, 163, 61, 0.12) 50%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-md shadow-xs">
          <Sparkles className="h-3.5 w-3.5 text-amber" />
          <span>Ready to accelerate your workflow?</span>
        </div>

        <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
          Give your team one place to{' '}
          <span className="bg-gradient-to-r from-indigo-light via-white to-amber bg-clip-text text-transparent">
            plan, build, and ship
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-paper/70 leading-relaxed">
          Join thousands of high-performing engineering and product teams delivering exceptional work faster with NOVA.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="group shadow-[0_0_30px_rgba(76,95,224,0.5)] hover:shadow-[0_0_40px_rgba(76,95,224,0.7)] px-8 py-4 text-base"
          >
            Get started free
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-paper border border-white/15 hover:bg-white/10 px-8 py-4 text-base"
          >
            Talk to sales
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-paper/60">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-indigo-light" aria-hidden="true" />
            14-day full access trial
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-indigo-light" aria-hidden="true" />
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-indigo-light" aria-hidden="true" />
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
}
