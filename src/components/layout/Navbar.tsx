import { useEffect, useRef, useState } from 'react';
import { Menu } from 'lucide-react';
import { navLinks } from '../../data/navLinks';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { scrollToSection, cn } from '../../lib/utils';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled
            ? 'bg-paper/90 dark:bg-ink/90 backdrop-blur-md border-b border-line dark:border-line-dark'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <nav
          className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 lg:px-10"
          aria-label="Main navigation"
        >
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-display text-lg font-semibold tracking-tight text-ink dark:text-paper rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo"
          >
            NOVA
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeId === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={cn(
                      'text-sm font-medium transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo',
                      isActive
                        ? 'text-indigo'
                        : 'text-ink/70 dark:text-paper/70 hover:text-ink dark:hover:text-paper'
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button
              variant="secondary"
              size="md"
              onClick={() => handleNavClick('#pricing')}
            >
              Sign in
            </Button>
            <Button variant="primary" size="md" onClick={() => handleNavClick('#final-cta')}>
              Get started
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              ref={hamburgerRef}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-ink dark:text-paper hover:bg-ink/5 dark:hover:bg-paper/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onNavigate={handleNavClick}
        activeId={activeId}
        triggerRef={hamburgerRef}
      />
    </>
  );
}
