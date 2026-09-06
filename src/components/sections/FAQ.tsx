import { useState } from 'react';
import { faqs } from '../../data/faqs';
import { AccordionItem } from '../ui/AccordionItem';
import { Badge } from '../ui/Badge';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  return (
    <section id="faq" className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <Badge tone="indigo">Got Questions?</Badge>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
            Frequently asked questions,{' '}
            <span className="bg-gradient-to-r from-indigo to-indigo-light bg-clip-text text-transparent">
              answered
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Can't find what you're looking for? Reach out to our 24/7 product support team.
          </p>
        </div>

        <div className="mt-12">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId((prev) => (prev === faq.id ? null : faq.id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
