import { useEffect, useRef } from 'react';
import { X, PlayCircle } from 'lucide-react';
import { createPortal } from 'react-dom';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  // Capture the element that had focus before the modal opened
  const previousFocusRef = useRef<Element | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement;
      closeButtonRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Return focus to the element that triggered the modal
      if (previousFocusRef.current instanceof HTMLElement) {
        previousFocusRef.current.focus();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
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
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      {/* Backdrop — fade only, no translate */}
      <div
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-surface-dark border border-line dark:border-line-dark p-6 sm:p-8 shadow-2xl animate-fade-up"
      >
        <div className="flex items-start justify-between">
          <h2 id="demo-modal-title" className="font-display text-xl font-semibold text-ink dark:text-paper">
            See NOVA in action
          </h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close demo video"
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted hover:bg-ink/5 dark:hover:bg-paper/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flex aspect-video items-center justify-center rounded-xl border border-dashed border-line dark:border-line-dark bg-paper dark:bg-ink/40 text-muted">
          <div className="flex flex-col items-center gap-2">
            <PlayCircle className="h-12 w-12 text-indigo" aria-hidden="true" />
            <p className="text-sm">Product walkthrough video placeholder</p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
