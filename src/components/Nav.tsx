import { useEffect, useState } from 'react';
import { site } from '../data/site';
import { Button } from './Button';
import { Close, Menu } from './Icons';
import { ThemeToggle } from './ThemeToggle';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const initials = site.name
    .split(' ')
    .map((part) => part[0])
    .join('');

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md backdrop-saturate-150 transition-colors ${
        scrolled || menuOpen ? 'border-border bg-bg/90' : 'border-transparent bg-bg/80'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[68px] w-full max-w-[1080px] items-center justify-between gap-6 px-6"
      >
        <a
          href="#top"
          aria-label={`${site.name} — home`}
          className="inline-flex items-center gap-3 font-semibold tracking-[-0.01em] text-text"
        >
          <span
            aria-hidden
            className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-gradient-to-br from-accent to-accent-strong font-mono text-[0.8125rem] font-semibold text-accent-contrast shadow-[var(--shadow-sm)]"
          >
            {initials}
          </span>
          <span className="text-[0.975rem] max-[720px]:hidden">{site.name}</span>
        </a>

        <ul className="flex items-center gap-2 max-[720px]:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-block rounded-lg px-3 py-2 text-[0.925rem] font-medium text-muted transition hover:bg-bg-subtle hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button
            href="#contact"
            variant="secondary"
            size="sm"
            className="max-[720px]:hidden"
          >
            Get in touch
          </Button>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:text-text max-[720px]:inline-flex"
          >
            {menuOpen ? <Close size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-border px-6 py-4 min-[721px]:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-muted transition hover:bg-bg-subtle hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href="#contact"
            variant="secondary"
            size="sm"
            className="mt-3 w-full"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
          </Button>
        </nav>
      )}
    </header>
  );
}
