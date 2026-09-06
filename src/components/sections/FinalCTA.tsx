import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function FinalCTA() {
  return (
    <section id="final-cta" className="relative overflow-hidden bg-ink py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #8B8D98 1px, transparent 1px), linear-gradient(to bottom, #8B8D98 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(circle at center, black, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Give your team one place to plan, build, and ship
        </h2>
        <p className="mt-4 text-lg text-paper/60">
          Start free. No credit card, no setup call, no commitment.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg">
            Get started free
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-paper hover:bg-paper/10"
          >
            Talk to sales
          </Button>
        </div>
      </div>
    </section>
  );
}
