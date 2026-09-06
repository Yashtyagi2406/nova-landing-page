import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { navLinks } from '../../data/navLinks';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
  activeId: string;
  /** Ref to the element that triggered the menu, so focus can be returned on close. */
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export function MobileMenu({ isOpen, onClose, onNavigate, activeId, triggerRef }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Focus the close button when opening
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  // Escape key + full focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Return focus to the trigger when the menu closes
  const prevIsOpen = useRef(false);
  useEffect(() => {
    if (prevIsOpen.current && !isOpen) {
      triggerRef.current?.focus();
    }
    prevIsOpen.current = isOpen;
  }, [isOpen, triggerRef]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 md:hidden transition-opacity duration-300',
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        className={cn(
          'absolute right-0 top-0 h-full w-[82%] max-w-sm bg-paper dark:bg-ink border-l border-line dark:border-line-dark p-6 shadow-2xl transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-semibold text-ink dark:text-paper">NOVA</span>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ink dark:text-paper hover:bg-ink/5 dark:hover:bg-paper/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <ul className="mt-10 flex flex-col gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeId === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(link.href);
                  }}
                  className={cn(
                    'block rounded-lg px-3 py-3 font-display text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo',
                    isActive
                      ? 'text-indigo'
                      : 'text-ink dark:text-paper hover:bg-ink/5 dark:hover:bg-paper/10'
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-col gap-3">
          <Button variant="secondary" size="lg" onClick={() => onNavigate('#pricing')}>
            Sign in
          </Button>
          <Button variant="primary" size="lg" onClick={() => onNavigate('#final-cta')}>
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}
