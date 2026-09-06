import { useState } from 'react';
import { faqs } from '../../data/faqs';
import { AccordionItem } from '../ui/AccordionItem';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
            Questions, answered
          </h2>
          <p className="mt-4 text-lg text-muted">
            Can't find what you're looking for? Reach out to our team anytime.
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
