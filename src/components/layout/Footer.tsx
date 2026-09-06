import { Globe, Mail, MessageCircle } from 'lucide-react';
import { NewsletterForm } from '../ui/NewsletterForm';
import { scrollToSection } from '../../lib/utils';

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Solutions', href: '#solutions' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'How it works', href: '#how-it-works' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#product-about' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Documentation', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', href: '#' },
      { label: 'Terms of service', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line-dark bg-ink text-paper">
      <div className="mx-auto max-w-8xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo via-indigo to-indigo-light text-white shadow-[0_2px_10px_rgba(76,95,224,0.4)]">
                <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </span>
              <span className="font-display text-lg font-bold">NOVA</span>
            </div>
            <p className="mt-3.5 max-w-xs text-sm text-paper/60 leading-relaxed">
              Build better. Work smarter. The modern workspace where teams plan, automate, and
              ship high-impact products without status overhead.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="NOVA community forum"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 hover:border-paper/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-light"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="NOVA website"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 hover:border-paper/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-light"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:hello@nova.app"
                aria-label="Email NOVA"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 hover:border-paper/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-light"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="col-span-1 md:col-span-1">
              <h4 className="font-display text-sm font-medium text-paper">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#') && link.href !== '#') {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }
                      }}
                      className="text-sm text-paper/60 hover:text-paper transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-light"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-paper/10 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="font-display text-sm font-medium text-paper">
                Get product updates
              </h4>
              <p className="mt-1 text-sm text-paper/60">
                One email a month. No spam, unsubscribe anytime.
              </p>
            </div>
            <div className="md:w-96">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NOVA Technologies, Inc. All rights reserved.</p>
          <p>NOVA is a fictional product built for a front-end development assignment.</p>
        </div>
      </div>
    </footer>
  );
}
