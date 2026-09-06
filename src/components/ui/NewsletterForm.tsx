import { useState, type FormEvent } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { isValidEmail } from '../../lib/utils';

type Status = 'idle' | 'error' | 'success';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== 'idle') setStatus('idle');
          }}
          placeholder="you@company.com"
          aria-invalid={status === 'error'}
          aria-describedby="newsletter-feedback"
          className="w-full rounded-lg border border-paper/20 bg-transparent px-4 py-2.5 text-sm text-paper placeholder:text-paper/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-light"
        />
        <button
          type="submit"
          className="rounded-lg bg-indigo px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-light whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
      <div id="newsletter-feedback" role="status" className="mt-2 min-h-[1.25rem] text-sm">
        {status === 'error' && (
          <span className="flex items-center gap-1.5 text-amber">
            <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
            Enter a valid email address.
          </span>
        )}
        {status === 'success' && (
          <span className="flex items-center gap-1.5 text-indigo-light">
            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
            You're subscribed. Welcome aboard.
          </span>
        )}
      </div>
    </div>
  );
}
