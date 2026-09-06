import { useState } from 'react';
import { Check } from 'lucide-react';
import { pricingPlans } from '../../data/pricingPlans';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { PricingToggle } from '../ui/PricingToggle';
import { cn } from '../../lib/utils';

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="border-y border-line dark:border-line-dark bg-white dark:bg-surface-dark py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
            Simple pricing that scales with your team
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted">
            Every plan includes unlimited projects. Upgrade as your team grows.
          </p>
          <div className="mt-8 flex justify-center">
            <PricingToggle isAnnual={isAnnual} onChange={setIsAnnual} />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <Card
                key={plan.id}
                hoverLift={!plan.featured}
                className={cn(
                  'flex flex-col',
                  plan.featured &&
                    'border-indigo/40 ring-1 ring-indigo/20 md:-translate-y-3 shadow-[0_20px_45px_-15px_rgba(76,95,224,0.3)]'
                )}
              >
                {plan.featured && (
                  <Badge tone="indigo" className="mb-4 self-start">
                    Most popular
                  </Badge>
                )}
                <h3 className="font-display text-lg font-semibold text-ink dark:text-paper">
                  {plan.name}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-semibold text-ink dark:text-paper">
                    ${price}
                  </span>
                  <span className="text-sm text-muted">/ user / month</span>
                </div>
                {isAnnual && (
                  <p className="mt-1 text-xs text-indigo-dark dark:text-indigo-light">
                    Billed annually
                  </p>
                )}

                <Button
                  variant={plan.featured ? 'primary' : 'secondary'}
                  size="lg"
                  className="mt-6 w-full"
                >
                  {plan.cta}
                </Button>

                <ul className="mt-8 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo" aria-hidden="true" />
                      <span className="text-ink/80 dark:text-paper/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
