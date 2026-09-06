import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { pricingPlans } from '../../data/pricingPlans';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { PricingToggle } from '../ui/PricingToggle';
import { cn } from '../../lib/utils';

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="relative overflow-hidden border-y border-line/80 dark:border-white/10 bg-white/70 dark:bg-surface-dark/70 backdrop-blur-xl py-24 lg:py-32">
      {/* Radiant glow behind pricing */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full opacity-35 dark:opacity-20 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(76, 95, 224, 0.25) 0%, rgba(232, 163, 61, 0.1) 60%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="text-center">
          <Badge tone="indigo">Transparent Pricing</Badge>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
            Simple pricing that{' '}
            <span className="bg-gradient-to-r from-indigo to-indigo-light bg-clip-text text-transparent">
              scales with your velocity
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
            Every plan includes unlimited active projects, real-time collaboration, and SOC2 compliance.
          </p>
          <div className="mt-8 flex justify-center">
            <PricingToggle isAnnual={isAnnual} onChange={setIsAnnual} />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
          {pricingPlans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <Card
                key={plan.id}
                hoverLift={!plan.featured}
                className={cn(
                  'relative flex flex-col justify-between p-7 lg:p-8 transition-all duration-300',
                  plan.featured
                    ? 'border-indigo/50 bg-gradient-to-b from-indigo/[0.04] to-transparent dark:from-indigo/[0.1] md:-translate-y-3 ring-2 ring-indigo/40 shadow-[0_25px_60px_-15px_rgba(76,95,224,0.35)]'
                    : 'hover:border-indigo/30'
                )}
              >
                {/* Popular Card Glow Banner */}
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo via-indigo to-indigo-light px-3.5 py-1 text-xs font-semibold text-white shadow-[0_2px_12px_rgba(76,95,224,0.4)]">
                    <Sparkles className="h-3 w-3" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold text-ink dark:text-paper">
                      {plan.name}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{plan.description}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-4xl lg:text-5xl font-extrabold tracking-tight text-ink dark:text-paper">
                      ${price}
                    </span>
                    <span className="text-sm font-medium text-muted">/ user / mo</span>
                  </div>
                  {isAnnual && (
                    <p className="mt-1 text-xs font-semibold text-indigo dark:text-indigo-light">
                      Billed annually (Save 20%)
                    </p>
                  )}

                  <Button
                    variant={plan.featured ? 'primary' : 'secondary'}
                    size="lg"
                    className="mt-6 w-full"
                  >
                    {plan.cta}
                  </Button>

                  <div className="mt-8 border-t border-line/70 dark:border-white/10 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3.5">
                      Included in {plan.name}
                    </p>
                    <ul className="flex flex-col gap-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo" aria-hidden="true" />
                          <span className="text-ink/80 dark:text-paper/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
